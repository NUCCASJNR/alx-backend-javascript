#!/usr/bin/node

/*
* @Author: Al-Areef
* I'll Just call this a complex  calculator that performs the operations below:
* Addition
* Subtraction
* Division
* Takes in two numbers and returns the sum
*/

const calculateNumber = (type, a, b) => {
  const roundA = Math.round(a);
  const roundB = Math.round(b);
  if (type === 'SUM') {
    return roundA + roundB;
  } if (type === 'SUBTRACT') {
    return roundA - roundB;
  } if (type === 'DIVIDE') {
    if (roundB === 0) {
      return ('Error');
    }
    return roundA / roundB;
  }
  return null;
};
module.exports = calculateNumber;
