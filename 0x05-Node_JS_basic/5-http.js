const http = require('http');
const path = require('path');
const fs = require('fs').promises;

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

const countStudents = () => {
  const filePath = path.join(__dirname, process.argv[2]);

  return fs.readFile(filePath, 'utf-8')
    .then((data) => {
      if (!data) throw new Error('Cannot load the database');

      const lines = data.split('\n').filter((line) => line);
      const overview = [`Number of students: ${lines.length - 1}`];
      const students = {};
      lines.slice(1).forEach((line) => {
        const name = line.split(',', 1);
        const field = line.split(',').slice(-1);
        if (!students[field]) students[field] = [];
        students[field].push(name);
      });

      Object.entries(students).forEach(([field, names]) => {
        overview.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      });
      return overview.join('\n');
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
};

app.on('request', (req, res) => {
  if (req.url === '/') {
    const reply = 'Hello Holberton School!';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', reply.length);
    res.write(Buffer.from(reply));
  }

  if (req.url === '/students') {
    if (process.argv[2] === 'Undefined') {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', 'Cannot load the database'.length);
      res.end('Cannot load the database');
    }
    countStudents()
      .then((data) => {
        res.statusCode = 200;
        const reply = 'This is the list of our students';
        const body = `${reply}\n${data}`;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', Buffer.byteLength(body));
        res.write(Buffer.from(body));
      })
      .catch(() => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', 'Cannot load the database'.length);
        res.end('Cannot load the database');
      });
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server is running at http://${HOST}:${PORT}\n`);
});

module.exports = app;
