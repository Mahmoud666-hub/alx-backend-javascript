const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, respon) => {
  respon.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, respon) => {
  respon.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;