#!/usr/bin/node

/*
* You remember the simple addition calculator??
* Yeah that one writing some testcases for it
 */

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('a simple Addition calculator', () => {
  it('should add two numbers', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('should add two floats', () => {
    assert.equal(calculateNumber(2.3, 3.5), 6);
  });
  it('should add one integer and a float', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('should add two floats where one of it has the same value as it rounded figure', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
});
