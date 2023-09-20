// test/test.js
const assert = require('assert');
const math = require('./math');

describe('Math Functions', function () {
    it('should add two numbers', function () {
        assert.equal(math.add(2, 3), 5);
    });

    it('should subtract two numbers', function () {
        assert.equal(math.subtract(5, 3), 2);
    });
});
