#!/usr/bin/node

/* http server using express
* @author: Al-Areef
* */

const express = require('express');
const countStudents = require('./3-read_file_async');

const CSV_FILE = process.argv[2];

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.status(200);
  res.end('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(CSV_FILE)
    .then((result) => {
      res.statusCode = 200;
      res.set('Content-Type', 'text/plain');
      const resultString = JSON.stringify(result);
      const responseObject = JSON.parse(resultString);
      const final = {
        totalStudents: responseObject.totalStudents,
        csStudentsCount: responseObject.csStudentsCount,
        sweStudentsCount: responseObject.sweStudentsCount,
        csStudentsList: responseObject.csStudentsList,
        sweStudentsList: responseObject.sweStudentsList,
      };
      res.end(
        `This is the list of our students
Number of students: ${final.totalStudents}\n`
          + `Number of students in CS: ${final.csStudentsCount}. List: ${final.csStudentsList}\n`
          + `Number of students in SWE: ${final.sweStudentsCount}. List: ${final.sweStudentsList}`,
      );
    })
    .catch((error) => {
      res.statusCode = 500;
      res.end(`Internal Server Error: ${error}`);
    });
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
module.exports = app;
