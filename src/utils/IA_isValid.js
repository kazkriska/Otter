//* TESTED (EXPORT READY) ✔️✔️

import everyItemInArray from './EiA_typeCheck.js';
import propExistCheck from './OiA_propExistCheck.js';
import isUnique from './isUnique.js';
import testData from '../../data/testData_unsorted.js';

const isValid = (inputArray) => {
  if (everyItemInArray(inputArray, 'isnot', 'object') && isUnique(inputArray)) {
    return { validity: true, approach: 'not array of objects | none have pos' };   // none have pos part is only for positioningLogic
  }

  if (
    everyItemInArray(inputArray, 'is', 'object') &&
    propExistCheck(inputArray, ['id']) && // NOT keeping nulls here so we can throw error in isUnique when null ID encountered
    isUnique(inputArray, 'id')
  ) {
    const posArray = inputArray.filter((item) => item.pos);

    if (posArray.length === inputArray.length && isUnique(inputArray, 'pos')) {
      return { validity: true, approach: 'array of objects | all have pos' };
    }
    if (posArray.length === 0) {
      return { validity: true, approach: 'array of objects | none have pos' };
    }
    if (
      posArray.length > 0 &&
      posArray.length < inputArray.length &&
      isUnique(posArray, 'pos')
    ) {
      return { validity: true, approach: 'array of objects | some have pos' };
    }
  }
  return { validity: false, approach: 'Invalid Input' };
};

export default isValid;
