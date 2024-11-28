const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('calculateNumber', () => {
  it('Positive Numbers: int and int', () => {
    const resul = calculateNumber(2, 3);
  assert.equal(resul, 5)
  })

  it('Positive Numbers: flaot and float', () => {
    const resul = calculateNumber(2.578, 3.678);
    assert.equal(resul, 7)
  })

  it('Negative Numbers: flaot and float', () => {
    const resul = calculateNumber(-2.578, -3.678);
    assert.equal(resul, -7)
  })
  
  it('Negative Numbers: flaot and int', function(){
    const resul = calculateNumber(-1.7, -2);
    assert.equal(resul, -4)
  })

  it('Negative Numbers: int and float', function(){
    const resul = calculateNumber(-1, -2.7);
    assert.equal(resul, -4)
  })

});
