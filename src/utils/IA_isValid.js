//! Either ALL elements of inputArray should be Objects or NONE
const isValid = (inputArray) => {
  if (
    //. If NO input is an object
    inputArray.every((item) => typeof item !== 'object') &&
    isUnique(inputArray)
  ) {
    return true;
  }

  if (
    //. If ALL inputs are objets
    inputArray.every((item) => typeof item === 'object') &&
    isUnique(inputArray, ['id', 'pos'])
  ) {
    return true;
  }

  return false;
};


