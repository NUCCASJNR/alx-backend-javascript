// Returns a boolean if all the elements in the array exist within the set.

const hasValuesFromArray = (set, array) => {
  for (const ele of array) {
    if (!set.has(ele)) {
      return false;
    }
  }
  return true;
};

export default hasValuesFromArray;
