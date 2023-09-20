#!/usr/bin/node

/*
* You remember the simple addition calculator??
* Yeah that one writing some testcases for it
 */

const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('a simple Addition calculator', () => {
  const tests = [
    { a: 1.0, b: 2.0, expected: 3 },
    { a: 2.0, b: 2.4, expected: 4 },
    { a: 1.4, b: 3.0, expected: 4 },
    { a: 3, b: 4.5, expected: 8 },
    { a: 3.4999999, b: 3.99997755, expected: 7 },
    { a: 23, b: 2.5, expected: 26 },
    { a: -2, b: 3, expected: 1 },
    { a: -2, b: -3, expected: -5 },
    { a: 23.45, b: -7, expected: 16 },
    { a: 0, b: 78, expected: 78 },
    { a: 2.7, b: -1.4, expected: 2},
    { a: -3.9999, b: -4.444999, expected: -8},
  ];
  tests.forEach(({ a, b, expected }) => {
    describe(`When ${a} and ${b} is passed`, function () {
      it(`should return ${expected}`, function () {
        assert.equal(calculateNumber(a, b), expected);
      });
    });
  });
});
