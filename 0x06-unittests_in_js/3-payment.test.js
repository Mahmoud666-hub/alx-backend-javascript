const Utils = require('./utils')
const { expect } = require('chai')
const sinon = require('sinon')
const sendPaymentRequestToApi = require('./3-payment')

describe('sendPaymentRequestToApi', () => {
  it('spy calculateNumber method', () => {
  const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber')
  sendPaymentRequestToApi(100, 20)

  expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true
  })
});
