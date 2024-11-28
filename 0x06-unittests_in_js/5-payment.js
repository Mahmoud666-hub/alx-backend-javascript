const utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmount, totalShipping){
  sum = utils.calculateNumber('SUM', totalAmount, totalShipping)
  console.log(`The total is: ${sum}`);
}

module.exports = sendPaymentRequestToApi
