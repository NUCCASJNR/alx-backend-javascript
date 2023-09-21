#!/usr/bin/node

/*
* Test payment integration
 */

const assert = require('assert')
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const {expect} = require("chai");

describe('Send Payment Request to API', function () {
  it('should test payment gateway', function () {
    const paymentSpy = sinon.spy(Utils.calculateNumber);
    sendPaymentRequestToApi(100, 20);
    expect(paymentSpy.calledWith(100, 20)).to.equal(false);
  });
});

describe('Test Utils not called once', function () {
  it('should test payment gateway', function () {
    const paymentSpy = sinon.spy(Utils.calculateNumber);
    sendPaymentRequestToApi(100, 20);
    assert.equal(paymentSpy.calledOnce, false);
  });
});