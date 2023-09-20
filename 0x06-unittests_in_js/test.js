#!/usr/bin/node

const assert = require('assert')
describe('Array', function () {
    describe('#indexof()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});