export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let value of array) {
    value = appendString + value;
    newArray.push(value);
  }

  return newArray;
}
