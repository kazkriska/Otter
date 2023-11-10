const allItemInArray = (inputArray, conditionStr, typeString) => {
  if (conditionStr === 'is') {
    return inputArray.every((item) => typeof item === typeString);
  }
  if (conditionStr === 'isnot') {
    return inputArray.every((item) => typeof item !== typeString);
  }

  throw new Error(`INVALID Condition chose 'is' or 'isnot'`);
};

export default allItemInArray;
