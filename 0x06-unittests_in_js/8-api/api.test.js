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