// Returns a string of all the set values that start with a specific string (startString).

const cleanSet = (set, startString) => {
    const matchingElements = [...set].filter((element) => element.startsWith(startString));
    const filtered = new Set(matchingElements.filter((element) => element !== startString))
    return [...filtered].join(',')
  };
  
  export default cleanSet;
  