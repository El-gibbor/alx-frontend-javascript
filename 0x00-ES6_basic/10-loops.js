export default function appendToEachArrayValue(array, appendString) {
  const modifiedArrag = [];
  for (const idx of array) {
    modifiedArrag.push(idx + appendString);
  }
  return modifiedArrag;
}
