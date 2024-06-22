const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (_, res) => {
  const reply = 'Hello Holberton School!';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', reply.length);
  res.write(Buffer.from(reply));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server is running at http://${HOST}:${PORT}\n`);
});

module.exports = app;
