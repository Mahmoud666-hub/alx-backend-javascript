function calculateNumber(a, b) {
  const x = Math.round(a);
  const y = Math.round(b);
  const z = x + y;
  return z;
}

module.exports = calculateNumber;
