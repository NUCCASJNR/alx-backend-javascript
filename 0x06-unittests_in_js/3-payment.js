#!/usr/bin/node

/*
* Payment gateway
 */
const Utils = require('./utils').calculateNumber;

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const result = Utils('SUM', totalAmount, totalShipping);
  return (`The total is: ${result}`);
};
module.exports = sendPaymentRequestToApi;
