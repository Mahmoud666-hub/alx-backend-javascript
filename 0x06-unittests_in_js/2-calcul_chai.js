function calculateNumber(type, a, b) {
  const x = Math.round(a);
  const y = Math.round(b);
  operation = {
  SUM: (a,b) => x + y,
  SUBTRACT: (a,b) => x - y,
  DIVIDE: (a,b) => {
    if (y == 0)
      return 'Error';
    else
    return x / y
  }
  }
  return operation[type](a, b);
}

module.exports = calculateNumber;
