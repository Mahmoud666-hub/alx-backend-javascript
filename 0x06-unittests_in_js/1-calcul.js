function calculateNumber(type, a, b) {
  operation = {
    SUM: (a,b) => Math.round(a) + Math.round(b),
    SUBTRACT: (a,b) => Math.round(a) - Math.round(b),
    DIVIDE: (a,b) => {
      if (Math.round(b) == 0)
      return 'Error';
      else
      return Math.round(a) / Math.round(b)
    }
  }
return operation[type](a, b);
}

module.exports = calculateNumber;
