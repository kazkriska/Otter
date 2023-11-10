class Otter {
  constructor() {
    this._inputArray;
    this._attributes = {
      groupWith: null,
      sortBy: 'id',
      sortingStrategy: (a, b) => a - b, // ASC
    };
    this._state = {
      rawState: null,  //TODO make a Set // = new Set(internalState.map(item => item.id))
      internalState: null, //TODO make a Map // = groupedState.forEach(group => {group.map((item, index) => internalState.push({id: item[0], r_pos: item[1], pos: internalState.length + * 0 OR 1 * }) ) })
      groupedState: null, //TODO make an array of Maps of groups [ [ [], [] ], [ [], [] ], [ [], [] ], [ [], [] ] ] 
      info: {
        hasInitialized: false,
        hasStateChanged: false, 
        latest_changes_sent_to_server: false, 
        latest_changes_fetched_from_server: false,
        save_to_local: false,
        fetch_from_local: false,
      },
    };
  }

  //* Otter core methods
  init() {}
  acceptChange() {}
  fetchUpdatesFromServer() {}
  sendUpdatesToServer() {}
  saveToLocalStorage() {}
  fetchFromLocalStorage() {}

  //TODO: move below to utils
  checkAttributes() {} // Check if all the items have a valid property for provided input
  isUnique() {}
  isValid() {}
  trimArray() {}
  serializePos() {}
  assignPos() {}
  //! match ???

  // Only used by .init()
  groupItems() {}
  findUnique() {} // Returns an array of unique items in a provided array //* For groupItems()
  sort() {}
}

export default Otter;
