#!/usr/bin/node

// HTTP Server

const app = require('http');
const port = 1245;
const DisplayMessage = 'Hello Holberton School!';
const HostName = 'localhost';

const server = app.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${DisplayMessage}\n`);
});

server.listen(port, HostName, () => {
});
module.exports = server;
