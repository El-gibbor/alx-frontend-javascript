export default function appendToEachArrayValue(array, appendString) {
    let concatinatedArray
    for (const idx of array) {
      const value = idx;
      console.log(value)
     concatinatedArray = appendString + value;
    }
    return concatinatedArray;
  }
  console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));
