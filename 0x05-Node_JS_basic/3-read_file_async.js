const fs = require('fs').promises;
const path = require('path');

const countStudents = (filename) => {
  const filePath = path.join(__dirname, filename);

  return fs.readFile(filePath, 'utf-8')
    .then((data) => {
      if (!data) throw new Error('Cannot load the database');

      const lines = data.split('\n').filter((line) => line);
      console.log(`Number of students: ${lines.length - 1}`);
      const students = {};
      lines.slice(1).forEach((line) => {
        const name = line.split(',', 1);
        const field = line.split(',').slice(-1);
        if (!students[field]) students[field] = [];
        students[field].push(name);
      });

      Object.entries(students).forEach(([field, names]) => {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      });
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
};

module.exports = countStudents;
