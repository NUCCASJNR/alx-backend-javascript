#!/usr/bin/node

// HTTP Server
const CSV_FILE = process.argv[2]
const http = require('http');
const fs = require('fs');

const countStudents = (CsvFilePath) => {
  let count = 0;
  return new Promise((resolve, reject) => {
    fs.readFile(CsvFilePath, 'utf-8', (error, csvData) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const rows = csvData.split('\n');
        const headerRow = rows[0].split(',');
        const fieldIndex = headerRow.indexOf('field');
        const firstNameIndex = headerRow.indexOf('firstname');
        if (fieldIndex !== -1) {
          const csStudents = [];
          const sweStudents = []; // To store the first names of SWE students
          for (let i = 1; i < rows.length; i += 1) {
            if (rows[i].length > 0) {
              count += 1;
              const row = rows[i].split(',');
              if (row[fieldIndex] === 'SWE') {
                sweStudents.push(row[firstNameIndex]);
              }
              if (row[fieldIndex] === 'CS') {
                csStudents.push(row[firstNameIndex]);
              }
            }
          }
          const result = {
            totalStudents: count,
            csStudentsCount: csStudents.length,
            sweStudentsCount: sweStudents.length,
            csStudentsList: csStudents.join(', '),
            sweStudentsList: sweStudents.join(', '),
          };
          resolve(result);
          console.log(`Number of students: ${result.totalStudents}`);
          console.log(`Number of students in CS: ${result.csStudentsCount}. List: ${result.csStudentsList}`);
          console.log(`Number of students in SWE: ${result.sweStudentsCount}. List: ${result.sweStudentsList}`);
        }
      }
    });
  });
};
const port = 1245;
const HostName = 'localhost';

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const result = await countStudents(CSV_FILE); // Wait for the Promise to resolve
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`This is the list of our students\n${result.toString()}`);
    } catch (error) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(port, HostName, () => {
  console.log(`Server listening at http://${HostName}:${port}`);
});
module.exports = app;
