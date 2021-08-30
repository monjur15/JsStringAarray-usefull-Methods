const numbers = [23, 87, 5, 20, 15, 29, 35, 22, 19];
const numberSliced = numbers.slice(2, 6);
// console.log(numberSliced);
// console.log(numbers);

// splice form an array to remove an element
/* const spliceNumber = numbers.splice(2, 3);
console.log(spliceNumber);
console.log(numbers); */


const spliceNumber2 = numbers.splice(2, 3, 11, 7);
console.log(spliceNumber2);
console.log(numbers);