#!/usr/bin/node

/*
* @Author: Al-Areef
* I'll Just call this a simple addition calculator
* Takes in two numbers and returns the sum
 */

const calculateNumber = (a, b) => {
  const roundA = Math.round(a);
  const roundB = Math.round(b);
  const sum = roundA + roundB;
  return (sum);
};
module.exports = calculateNumber;
