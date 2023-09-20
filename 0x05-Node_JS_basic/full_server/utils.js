#!/usr/bin/node
const fs = require('fs');
let count = 0;

function readDatabase (FilePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(FilePath, 'utf-8', (err, csvData) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const rows = csvData.split('\n');
      const headerRow = rows[0].split(',');
      const fieldIndex = headerRow.indexOf('field');
      const firstname = 'firstname';
      const columnIndex = headerRow.indexOf(firstname);
      if (fieldIndex !== -1) {
        const csStudents = [];
        const sweStudents = [];
        for (let i = 1; i < rows.length; i++) {
          if (rows[i].length > 0) {
            count += 1;
            const row = rows[i].split(',');
            if (row[fieldIndex] === 'SWE') {
              sweStudents.push(row[columnIndex]);
            }
            if (row[fieldIndex] === 'CS') {
              csStudents.push(row[columnIndex]);
            }
          }
        }
        const result = {
          csStudentsList: csStudents.join(', '),
          sweStudentsList: sweStudents.join(', ')
        };
        resolve(result);
        console.log(`${result.csStudentsList}`);
        console.log(`${result.sweStudentsList}`);
      }
    });
  });
}
module.exports = readDatabase;
