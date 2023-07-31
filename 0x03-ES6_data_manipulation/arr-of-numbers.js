// // shortening an array

// const numbers = [1, 2, 3, 4, 5];

// if (numbers.length > 3) {
//   numbers.length = 3;
// }

// console.log(numbers);
// console.log(numbers.length);
// console.log(numbers[3]);

// // Fixed length array

// const number2 = [];
// number2.length = 3;
// number2.push('Eight', 'Nine', 10, 11, 90);
// number2.length = 3; // Manually set the length to truncate the array
// console.log(number2);


// concat() Arr method
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);