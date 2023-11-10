//* TESTED (EXPORT READY) ✔️✔️

const propExistCheck = (inputArray, propArray, keepNull = '') => {
  // Returns TRUE when object has a property even tho with null value
  if (keepNull === 'keep null' || keepNull === null) {
    return inputArray.every((obj) => propArray.every((prop) => prop in obj));
  }
  // Returns TRUE only if non null values
  if (keepNull === '') {
    return inputArray.every((obj) => propArray.every((prop) => obj[prop]));
  }
};

export default propExistCheck;