// Returns a string of all the set values that start with a specific string (startString).

const cleanSet = (set, startString) => {
  const result = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  });
  if (!startString) {
    return '';
  }
  return result.join('-');
};

export default cleanSet;
