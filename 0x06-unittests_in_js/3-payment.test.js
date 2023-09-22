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
    const spy = sinon.spy(Utils.calculateNumber);
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith(100, 20)).to.equal(false);
  });
});

describe('test Utils not called once', () => {
  it('should test payment gateway', () => {
    const spy = sinon.spy(Utils.calculateNumber);
    sendPaymentRequestToApi(100, 20);
    assert.equal(spy.calledOnce, false);
  });
});
