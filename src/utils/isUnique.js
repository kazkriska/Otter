const isUnique = (inputArray, propCheckArray) => {

  if (propCheckArray && propCheckArray.every(prop => inputArray.every)) {

  }

  return inputArray.every(
    (item) => inputArray.indexOf(item) === inputArray.lastIndexOf(item)
  );
};
