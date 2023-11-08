const isValid = (inputArray) => {
  if (
    inputArray.every((item) => typeof item !== 'object') &&
    isUnique(inputArray)
  ) {
    return true;
  }

  if (
    inputArray.every((item) => typeof item === 'object') &&
    isUnique(inputArray, ['id', 'pos'])
  ) {
    return true;
  }

  return false;
};

const allItemInArray = (inputArray, conditionStr, typeString) => {
  if (conditionStr === 'is') {
    return inputArray.every((item) => typeof item === typeString);
  }
  if (conditionStr === 'isnot') {
    return inputArray.every((item) => typeof item !== typeString);
  }

  throw new Error(`INVALID Condition chose 'is' or 'isnot'`);
};

const arr = [{id: 'a'}, {id: 'b'}, {id: 'c'}, , {id: 'd'}]

console.log(allItemInArray(arr, 'is', 'object'))