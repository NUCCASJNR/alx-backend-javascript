const http = require('http');

const port = 1245;
const HostName = 'localhost';
const CSV_FILE = process.argv[2];
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(CSV_FILE)
      .then((result) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
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
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Internal Server Error: ${error}`);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(port, HostName, () => {
});
module.exports = app;
