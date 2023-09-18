#!/usr/bin/node

// Read a file synchronously with Node.js
const fs = require('fs');

const countStudents = (CsvFilePath) => {
  try {
    const csvData = fs.readFileSync(CsvFilePath, 'utf-8');
    const rows = csvData.split('\n');
    const headerRow = rows[0].split(',');
    const fieldIndex = headerRow.indexOf('field');
    const firstNameIndex = headerRow.indexOf('firstname');
    if (fieldIndex !== -1) {
      const csStudents = [];
      const sweStudents = []; // To store the first names of SWE students
      for (let i = 1; i < rows.length; i += 1) {
        const row = rows[i].split(',');
        if (row[fieldIndex] === 'SWE') {
          sweStudents.push(row[firstNameIndex]);
        } if (row[fieldIndex] === 'CS') {
          csStudents.push(row[firstNameIndex]);
        }
      }
      console.log(`Number of students: ${rows.length - 1}`);
      console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
      console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
