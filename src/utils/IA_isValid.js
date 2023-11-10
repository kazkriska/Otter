//* TESTED (EXPORT READY) ✔️✔️

import everyItemInArray from './EiA_typeCheck.js';
import propExistCheck from './OiA_propExistCheck.js';
import isUnique from './isUnique.js';
import testData from '../../data/testData_unsorted.js';

const isValid = (inputArray) => {
  if (
    everyItemInArray(inputArray, 'isnot', 'object') &&
    isUnique(inputArray)
  ) {
    return true;
  }

  if (
    everyItemInArray(inputArray, 'is', 'object') &&
    propExistCheck(inputArray, ['id']) &&
    isUnique(inputArray, 'id')
  ) {
    return true;
  }
  throw new Error('Invalid Input')
};

export default isValid