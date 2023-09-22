#!/usr/bin/node

/*
* Async payment test
 */

const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');
const {expect} = require("chai");

describe('Payment token', function () {
  it('should test payment API', function (done) {
    const success = true;
    getPaymentTokenFromAPI(success)
      .then((data) => {
        expect(data).to.deep.equal({data: 'Successful response from the API' })
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});