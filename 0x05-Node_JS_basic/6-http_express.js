#!/usr/bin/node

/* http server using express
* @author: Al-Areef
* */

const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.status(200);
  res.end('Hello Holberton School!');
});

app.listen(port, () => {
});
