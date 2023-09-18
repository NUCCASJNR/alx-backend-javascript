#!/usr/bin/node

// Prints to stdin
const handleUserInput = (input) => {
  console.log(`Your name is: ${input}`);
};
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (input) => {
  handleUserInput(input);
});
process.on('exit', () => {
  console.log('This important software is now closing');
});
module.exports = handleUserInput;
