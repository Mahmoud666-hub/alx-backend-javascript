const Utils = {
calculateNumber: (type, a, b) => {
  x = Math.round(a);
  y = Math.round(b);
  operation = {
    SUBTRACT: (a, b) => x - y,
    SUM: (a, b) => x + y,
    DIVIDE: function (a, b){
      if (y === 0){
        return 'Error'
      }
    return x / y
    }
  }
  return operation[type](a,b)
}
}
module.exports = Utils
