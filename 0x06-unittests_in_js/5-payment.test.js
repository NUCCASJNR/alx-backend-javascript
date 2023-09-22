#!/usr/bin/node

/*
* Test payment integration
 */
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const {expect} = require("chai");

describe('Request', function () {
  let spy;
  beforeEach(function () {
    spy = sinon.spy(console, 'log')
  });
  it('should test the payment request of 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is 120'))
  })
  it('should test the payment request of 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith('The total is 10'))
  })
  afterEach(function () {
    spy.restore()
  });
});