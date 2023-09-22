#!/usr/bin/node

/*
* Payment gateway
 */
const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
};
module.exports = sendPaymentRequestToApi;
