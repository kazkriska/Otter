//* TESTED (EXPORT READY) ✔️✔️

const trimArray = (inputArray) => {
  if (!Array.isArray(inputArray)) {
    throw new Error(`${inputArray} MUST BE AN ARRAY!!`);
  }
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
};

export default trimArray;


  /* Tests:
const x = [1, 2, , 4, { 5: 5 }, {}, 7, , 8, [], [,]];
trimArray(x);
console.log(x);
*/


