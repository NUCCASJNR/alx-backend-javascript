#!/usr/bin/node
/**
*
* handles Payments tokens
* @param {boolean} success - API request status
 */
/* eslint-disable no-unused-vars */
const getPaymentTokenFromAPI = (success) => new Promise((resolve, reject) => {
  if (success) {
    resolve({ data: 'Successful response from the API' });
  } else {
    resolve(null);
  }
});
module.exports = getPaymentTokenFromAPI;
