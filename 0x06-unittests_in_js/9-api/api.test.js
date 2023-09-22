#!/usr/bin/node

/*
* Api tests
 */

const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API = 'http://localhost:7865';
  it ('GET / returns the correct response', (done) => {
    request.get(`${API}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(res.body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('API integration test', () => {
  const APIURL = 'http://localhost:7865/err';
  it ('GET /err return err', (done) => {
    request.get(`${APIURL}`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});

describe('API integration test', () => {
  const UrlId = 'http://localhost:7865/cart/12';
  it ('GET /cart/id return payment methods for id', (done) => {
    request.get(`${UrlId}`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(res.body).to.be.equal('Payment methods for cart 12')
      done();
    });
    });
  });

describe('API integration test', () => {
  const UrlId = 'http://localhost:7865/cart/idan';
  it('GET /cart/hello when id isnt a number', (done) => {
    request.get(`${UrlId}`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});