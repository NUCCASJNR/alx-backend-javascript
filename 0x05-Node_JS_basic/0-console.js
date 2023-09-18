#!/usr/bin/node

// Prints to STDOUT

const displayMessage = (arg) => {
  // process.stdout.write(`${arg}\n`);
  console.log(`${arg}`);
};
module.exports = displayMessage;
