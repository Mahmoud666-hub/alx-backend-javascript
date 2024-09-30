export default function appendToEachArrayValue(array, appendString) {
  const narr = array;
  for (const idx of array) {
    const ne = idx;
    narr[array.indexOf(idx)] = appendString + ne;
  }
  return narr;
}
