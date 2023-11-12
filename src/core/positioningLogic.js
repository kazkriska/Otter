const positioningLogic = {
  dynamicallyPositionedArray: null,
  apply: (_inputArray, approach) => {
    switch (approach.split(' | ')[1]) { // to get only 2nd half and match that
        case 'none have pos': {
            return;
          }
          case 'some have pos': {
            return;
          } 
      default: {
        return this.dynamicallyPositionedArray;
      }
    }
  },
};

export default positioningLogic;
