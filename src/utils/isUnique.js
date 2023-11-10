//* TESTED (EXPORT READY) ✔️✔️

import propExistCheck from './OiA_propExistCheck.js';
import trimArray from './trimArray.js';

const isUnique = (inputArray, propString) => {
  if (propString && propExistCheck(inputArray, [propString], 'keep null')) {
    const propArray = trimArray(inputArray.map((item) => item[propString]));
    return propArray.every(
      (value) => propArray.indexOf(value) === propArray.lastIndexOf(value)
    );
  }
  return inputArray.every(
    (item) => inputArray.indexOf(item) === inputArray.lastIndexOf(item)
  );
};

export default isUnique;