#!/usr/bin/node

// HTTP Server
const countStudents = require('./2-read_file');
countStudents("database.csv")
const http = require('http');

const port = 1245;
const HostName = 'localhost';

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {

  }
});

app.listen(port, HostName, () => {
  console.log(`Server listening at http://${HostName}:${port}`);
});
module.exports = app;