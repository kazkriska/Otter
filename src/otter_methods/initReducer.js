import sortArr from '../utils/sortArr.js';
import groupify from './groupify.js';

function initReducer(approach, otterInstance) {
  const { _inputArray } = otterInstance;
  switch (approach) {
    case 'not array of objects': {
      sortArr(_inputArray, { mutate: true });
      //TODO its addtional features
      return;
    }
    case 'array of objects | s'

    default: {
      return;
    }
  }
}

export default initReducer;
