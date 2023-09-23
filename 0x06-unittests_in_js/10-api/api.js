#!/usr/bin/node

/*
*Api
 */

const express = require('express');

const port = 7865;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200);
  res.end('Welcome to the payment system');
});
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  const result = 'Payment methods for cart';
  res.send(`${result} ${id}`);
});

app.get('/available_payments', (req, res) => {
  const PaymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.status(200).json(PaymentMethods);
});

app.post('/login', (req, res) => {
  let username = '';
  if (req.body) {
    username = req.body.userName;
  }
  res.send(`Welcome ${username}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865 ');
});
module.exports = app;
