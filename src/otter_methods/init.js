import trimArray from '../utils/trimArray.js';
import isValid from '../utils/IA_isValid.js';
import initReducer from './initReducer.js';

function init(inputArray, inputAttributes) {
  trimArray(inputArray, 'mutate');
  const otterInstance = this;
  //! const lol = {value: ['x']};
  const { validity, approach } = isValid(inputArray);

  if (validity) {
    this.saveInputArray(inputArray); // setting the classes prop
    if (
      inputAttributes &&
      propExistCheck(inputArray, Object.values(inputAttributes))
    ) {
      this.saveInputAttributes(inputAttributes); // setting the classes prop
    }

    initReducer(otterInstance, approach);
  }
  if (!validity) {
    throw new Error(approach);
  }
}
export default init;


