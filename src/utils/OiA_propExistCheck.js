//* TESTED (EXPORT READY) ✔️✔️

const propExistCheck = (inputArray, propArray) => {
  return inputArray.every((obj) => propArray.every((prop) => obj[prop]));
};

