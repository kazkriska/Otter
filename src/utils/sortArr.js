//* TESTED (EXPORT READY) ✔️✔️

const sortArr = (inputArray, config = { mutate: false, sortBy: false }) => {
    const {mutate, sortBy} = config
    const compareElements = (a, b) => a - b;
    const compareObjects = (a, b) => a[sortBy] - b[sortBy];
  
    if (mutate) {
      return sortBy ? inputArray.sort(compareObjects) : inputArray.sort(compareElements);
    }
  
    // If not mutating, create a sorted copy of the array
    const sortedArray = sortBy ? [...inputArray].sort(compareObjects) : [...inputArray].sort(compareElements);
    return sortedArray;
  };
  
  export default sortArr;
  
