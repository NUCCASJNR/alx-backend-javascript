const groceriesList = () => {
  const groceryItems = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const groceryList = new Map(groceryItems);

  return groceryList;
};

export default groceriesList;
