#!/usr/bin/node

// HTTP Server

const http = require('http');
const port = 1245;
const DisplayMessage = 'Hello Holberton School!';
const HostName = 'localhost';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${DisplayMessage}`);
});

app.listen(port, HostName, () => {
});
module.exports = app;
