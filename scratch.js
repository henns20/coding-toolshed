//

var fruits = [];
fruits.push('banana', 'apple', 'peach');

console.log(fruits.length); // 3

fruits[5] = 'mango';
console.log(fruits[5]); //mango
console.log(Object.keys(fruits)); //['0', '1', '2', '5']
console.log(fruits.length); //6

// increasing the length

fruits.length = 10;
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10

// decreasing the length property does, however, delete elements

fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1', '2']
console.log(fruits.length); // 2
