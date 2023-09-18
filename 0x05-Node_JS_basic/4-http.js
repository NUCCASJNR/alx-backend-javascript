#!/usr/bin/node

// HTTP Server

const http = require('http');

const port = 1245;
const HostName = 'localhost';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, HostName, () => {
  console.log(`Server listening at http://${HostName}:${port}`);
});
module.exports = app;
