#!/usr/bin/node

// Prints to stdin
const handleUserInput = (input) => {
  process.stdout.write(`Your name is: ${input}`);
};
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (input) => {
  handleUserInput(input);
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
module.exports = handleUserInput;
