const path = require('path');
const fs = require('fs');

if (process.argv.length < 2) {
  throw new Error('Cannot load the database');
}

const countStudents = (filename) => {
  const filePath = String(path.join(__dirname, filename));
  let data;
  try {
    data = fs.readFileSync(filePath, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const numberOfStudents = data.split('\n').filter((line) => line).slice(1);
  console.log(`Number of students: ${numberOfStudents.length}`);
  const students = {};
  for (const line of numberOfStudents) {
    const student = line.split(',');
    if (!students[student[3]]) {
      students[student[3]] = [];
    }
    students[student[3]].push(student[0]);
  }
  for (const cls in students) {
    if (cls) {
      console.log(`Number of students in ${cls}: ${students[cls].length}. List: ${students[cls].join(', ')}`);
    }
  }
};

module.exports = countStudents;
