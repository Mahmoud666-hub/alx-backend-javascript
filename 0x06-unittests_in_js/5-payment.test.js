const Utils = require('./utils')
const sendPaymentRequestToApi = require('./5-payment')
const { expect } = require('chai')
const sinon = require('sinon')

describe('test suites', () => { 
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  })

  afterEach(() => {
    consoleSpy.restore();
  })

  it('Hook the sendPaymentRequestToApi function', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  })

  it('Hook the sendPaymentRequestToApi function', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  })
})
