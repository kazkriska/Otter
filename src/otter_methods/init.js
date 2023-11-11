import trimArray from '../utils/trimArray.js';
import isValid from '../utils/IA_isValid.js';
import initReducer from './initReducer.js';

function init(inputArray, inputAttributes) {
  trimArray(inputArray, 'mutate');
  const otterInstance = this

  
  const { validity, approach } = isValid(inputArray);
  
  if (validity) {
    this.saveInputArray(inputArray) // setting the classes prop
    console.log(otterInstance._inputArray)
    if (
      inputAttributes &&
      propExistCheck(inputArray, Object.values(inputAttributes))
    ) {
      this.saveInputAttributes(inputAttributes); // setting the classes prop
    }

    initReducer(approach, otterInstance);
    console.log(this._inputArray)

  }
  if (!validity) {
    throw new Error(approach);
  }
}
export default init;

/*
const {isValid, inputType} = isValid(inputArray)
if (isValid && inputType === 'array of objects') {
  if (
    inputAttributes &&
    propExistCheck(inputArray, Object.values(inputAttributes))
  ) {
    for (const attr in inputAttributes) {
      this._attributes[attr] = inputAttributes[attr];
    }
    groupify(inputArray, this._attributes.categorizationArray) //TODO
  }
}
if (isValid && inputType === 'not an array of objects' && !inputAttributes) {
  
}
throw new Error('Couldnt Initialize')
*/
