const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const studens = data.split('\n').slice(1, -1);
    const studCs = [];
    const studswe = [];

    for (const stu of studens) {
      if (stu.includes('CS')) {
        studCs.push(stu.split(',', 1)[0]);
      } else if (stu.includes('SWE')) {
        studswe.push(stu.split(',', 1)[0]);
      }
    }
    console.log(`Number of students: ${studens.length}`);
    console.log(`Number of students in CS: ${studCs.length}. List: ${studCs.join(', ')}`);
    console.log(`Number of students in SWE: ${studswe.length}. List: ${studswe.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
