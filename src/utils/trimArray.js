//* TESTED (EXPORT READY) ✔️✔️

const trimArray = (inputArray, mutate = '') => {
  if (!Array.isArray(inputArray)) {
    throw new Error(`${inputArray} MUST BE AN ARRAY!!`);
  }
  if (mutate === 'mutate') {
    for (let i = inputArray.length - 1; i >= 0; i--) {
      if (typeof inputArray[i] === 'object') {
        if (Object.entries(inputArray[i]).length === 0) {
          inputArray.splice(i, 1);
        }
      } else {
        if (!inputArray[i]) {
          inputArray.splice(i, 1);
        }
      }
    }
  }

  if (mutate === '') {
    return inputArray.filter(item => item);
  }
};

export default trimArray;
