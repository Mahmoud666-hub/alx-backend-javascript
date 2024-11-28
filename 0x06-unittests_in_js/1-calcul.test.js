const calculateNumber = require("./0-calcul.js");
const assert = require('assert');
const { it, describe } = require("mocha");

describe('calculateNumber', () => {
  it(`checking if numbers round`, () => {
    const resul = calculateNumber("SUM", 3, 2);
  assert.equal(resul, 5)
  })

  it(`checking if numbers round`, () => {
    const resul = calculateNumber("SUBTRACT", 4.9, 1.7);
    assert.equal(resul, 3)
  })

  it(`checking if numbers round`, () => {
    const resul = calculateNumber("DIVIDE", 4, 2);
    assert.equal(resul, 2)
  })
  
  it(`checking if numbers round`, function(){
    const resul = calculateNumber("DIVIDE", 1.7, 0);
    assert.equal(resul, "Error")
  })

  it(`checking if numbers round`, function(){
    const resul = calculateNumber("DIVIDE", 1.4, 4.6);
    assert.equal(resul, 0.2)
  })
});
