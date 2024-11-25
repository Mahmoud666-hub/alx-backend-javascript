const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (data) {
        const result = data.split(/,|\n/);
        const flds = {};

        for (let a = 7; a < result.length; a += 4) {
          const fld = result[a];
          const student = result[a - 3];

          if (fld in flds) {
            flds[fld].push(student);
          } else {
            flds[fld] = [student];
          }
        }

        const noofstudents = (result.length - 5) / 4;
        console.log(`Number of students: ${noofstudents}`);
        for (const [field, students] of Object.entries(flds)) {
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
        resolve({ flds, noofstudents });
      } else reject(reject(new Error('Cannot load the database')));
    });
  });
}

module.exports = countStudents;
