#!/usr/bin/node

/*
* You remember the complex calculator??
* Yeah that one writing some testcases for it
 */

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('a more complex calculator sum method', () => {
  const Sumtests = [
    {
      type: 'SUM', a: 2, b: 3, expected: 5,
    },
    {
      type: 'SUM', a: 1.0, b: 2.0, expected: 3,
    },
    {
      type: 'SUM', a: 2.0, b: 2.4, expected: 4,
    },
    {
      type: 'SUM', a: 1.4, b: 3.0, expected: 4,
    },
    {
      type: 'SUM', a: 3, b: 4.5, expected: 8,
    },
    {
      type: 'SUM', a: 3.4999999, b: 3.99997755, expected: 7,
    },
    {
      type: 'SUM', a: 23, b: 2.5, expected: 26,
    },
    {
      type: 'SUM', a: -2, b: 3, expected: 1,
    },
    {
      type: 'SUM', a: -2, b: -3, expected: -5,
    },
    {
      type: 'SUM', a: 23.45, b: -7, expected: 16,
    },
    {
      type: 'SUM', a: 0, b: 78, expected: 78,
    },
    {
      type: 'SUM', a: 2.7, b: -1.4, expected: 2,
    },
    {
      type: 'SUM', a: -3.9999, b: -4.444999, expected: -8,
    },
  ];
  Sumtests.forEach(({
    type, a, b, expected,
  }) => {
    describe('when type is', () => {
      it(`should return ${expected}`, () => {
        expect(calculateNumber(type, a, b)).to.equal(expected);
      });
    });
  });
});

describe('a more complex calculator subtraction method', () => {
  const SubtractionTests = [
    {
      type: 'SUBTRACT', a: 2, b: 3, expected: -1,
    },
    {
      type: 'SUBTRACT', a: 1.0, b: 2.0, expected: -1,
    },
    {
      type: 'SUBTRACT', a: 2.0, b: 2.4, expected: 0,
    },
    {
      type: 'SUBTRACT', a: 1.4, b: 3.0, expected: -2,
    },
    {
      type: 'SUBTRACT', a: 3, b: 4.5, expected: -2,
    },
    {
      type: 'SUBTRACT', a: 3.4999999, b: 3.99997755, expected: -1,
    },
    {
      type: 'SUBTRACT', a: 23, b: 2.5, expected: 20,
    },
    {
      type: 'SUBTRACT', a: -2, b: 3, expected: -5,
    },
    {
      type: 'SUBTRACT', a: -2, b: -3, expected: 1,
    },
    {
      type: 'SUBTRACT', a: 23.45, b: -7, expected: 30,
    },
    {
      type: 'SUBTRACT', a: 0, b: 78, expected: -78,
    },
    {
      type: 'SUBTRACT', a: 2.7, b: -1.4, expected: 4,
    },
    {
      type: 'SUBTRACT', a: -3.9999, b: -4.444999, expected: 0,
    },
  ];
  SubtractionTests.forEach(({
    type, a, b, expected,
  }) => {
    describe('when type is', () => {
      it(`should return ${expected}`, () => {
        expect(calculateNumber(type, a, b)).to.equal(expected);
      });
    });
  });
});

describe('a more complex calculator Division method', () => {
  const DivideTest = [
    {
      type: 'DIVIDE', a: 6, b: 3, expected: 2,
    },
    {
      type: 'DIVIDE', a: 1.0, b: 2.0, expected: 0.5,
    },
    {
      type: 'DIVIDE', a: 2.0, b: 2.4, expected: 1,
    },
    {
      type: 'DIVIDE', a: 6.4, b: 3.0, expected: 2,
    },
    {
      type: 'DIVIDE', a: 3, b: 0, expected: 'Error',
    },
    {
      type: 'DIVIDE', a: 3.4999999, b: 6, expected: 0.5,
    },
    {
      type: 'DIVIDE', a: 25, b: 7.5, expected: 3.125,
    },
    {
      type: 'DIVIDE', a: -2, b: 0.09999, expected: 'Error',
    },
    {
      type: 'DIVIDE', a: -24, b: 3, expected: -8,
    },
    {
      type: 'DIVIDE', a: 23.55, b: -8, expected: -3,
    },
    {
      type: 'DIVIDE', a: 0, b: 78, expected: 0,
    },
    {
      type: 'DIVIDE', a: 2.7, b: -1.4, expected: -3,
    },
    {
      type: 'DIVIDE', a: -3.9999, b: -4.444999, expected: 1,
    },
  ];
  DivideTest.forEach(({
    type, a, b, expected,
  }) => {
    describe('when type is', () => {
      it(`should return ${expected}`, () => {
        expect(calculateNumber(type, a, b)).to.equal(expected);
      });
    });
  });
});
