import everyItemInArray from './EiA_typeCheck.js';

// returns a new array mapped from the provided array but with id and pos keys
function ottenator(inputArray) {
  if (everyItemInArray(inputArray, 'isnot', 'object')) {
    const objectifiedArray = inputArray.map((item, index) => ({
      id: item,
      pos: { rpos: null, index },
    }));
  }

  return objectifiedArray;
}

export default ottenator;
