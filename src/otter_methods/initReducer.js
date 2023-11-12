import positioningLogic from '../core/positioningLogic.js';
import ottenator from '../utils/ottenator.js';
import sortArr from '../utils/sortArr.js';
import groupify from './categorizationArrayGenerator.js';

function initReducer(otterInstance, approach) {
  const { _inputArray } = otterInstance;
  switch (approach) {
    case 'not array of objects | none have pos': {
      sortArr(_inputArray, { mutate: true });
      positioningLogic.apply(ottenator(_inputArray), approach)
      return;
    }
    case 'array of objects | none have pos': {
      return;
    }
    case 'array of objects | all have pos': {
      
      //TODO sort based on pos and add to state
      return;
    }
    case 'array of objects | some have pos': {
      return;
    }

    default: {
      return;
    }
  }
}

export default initReducer;
