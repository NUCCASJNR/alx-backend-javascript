#!/usr/bin/node

/*
* Api tests
 */

const request = require('request');
const chai = require('chai');

describe('API integration test', () => {
  const API = 'http://localhost:7865';
  request.get(`${API}/`, (err, res, body) => {
    chai.expect(res.statusCode).to.be.equal(200);
  })
})