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
  it('should test payment gateway', () => {
    const paymentSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(paymentSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(paymentSpy.calledOnce).to.be.true;
    paymentSpy.restore();
  });
});
