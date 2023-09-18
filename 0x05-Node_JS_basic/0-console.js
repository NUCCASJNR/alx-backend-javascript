#!/usr/bin/node

// Prints to STDOUT

const displayMessage = (arg) => {
  // process.stdout.write(`${arg}\n`);
  console.log(`${arg}\n`);
};
module.exports = displayMessage;
