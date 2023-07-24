function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
      throw new Error('Parameter is not a number!');
    }
    else {
        return(width * height)
    }
  }
  
  try {
    getRectArea(3, 'A');
  } catch (e) {
    console.error(e);
  }
  
area = getRectArea(4, 5);
console.log(area)