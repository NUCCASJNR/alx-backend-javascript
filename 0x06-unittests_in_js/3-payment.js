#!/usr/bin/node

/*
* Payment gateway
 */
const utils = require('./utils').calculateNumber;

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const result = utils('SUM', totalAmount, totalShipping);
  return (`The total is: ${result}`);
};
module.exports = sendPaymentRequestToApi;
