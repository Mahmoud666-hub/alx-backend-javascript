export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    let ne = idx;
    array[array.indexOf(idx)] = appendString + ne;
  }

  return array;
}
