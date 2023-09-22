#!/usr/bin/node

/*
* Test payment integration
 */

const assert = require('assert');
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('send Payment Request to API', () => {
  it('should test called one and called with', () => {
    const paymentSpy = sinon.stub(Utils, 'calculateNumber');
    paymentSpy('SUM', 100, 20);
    expect(paymentSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(paymentSpy.calledOnce).to.be.true;
    paymentSpy.restore();
  });
});

describe('send Payment Request to API', () => {
  it('should test console.log output', () => {
    const paymentSpy = sinon.stub(Utils, 'calculateNumber');
    paymentSpy.returns(10);
    assert.strictEqual(paymentSpy('SUM', 100, 20), 10);
    paymentSpy.restore();
  });
});
