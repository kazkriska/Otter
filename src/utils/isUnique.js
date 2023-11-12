//* TESTED (EXPORT READY) ✔️✔️

import testData from '../../data/testData_unsorted.js';
import everyItemInArray from './EiA_typeCheck.js';
import propExistCheck from './OiA_propExistCheck.js';
import trimArray from './trimArray.js';

const isUnique = (inputArray, ...propStrArray) => {
  let result = `Error in: < ${isUnique.name} >`;
  if (propStrArray.length > 0 && propExistCheck(inputArray, propStrArray, 'keep null')) {

    result = propStrArray.every((propString) => {
      const mappedPropArray = trimArray(
        inputArray.map((item) => item[propString])
      );
      return mappedPropArray.every(
        (value) =>
          mappedPropArray.indexOf(value) === mappedPropArray.lastIndexOf(value)
      );
    });
  }
  if (propStrArray.length === 0 && everyItemInArray(inputArray, 'isnot', 'object')) {
    result = inputArray.every(
      (item) => inputArray.indexOf(item) === inputArray.lastIndexOf(item)
    );
  }

  return result;
};

export default isUnique;
