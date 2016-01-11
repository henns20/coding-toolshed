// Array.from() method creates new array instance from an array like or iterable object
// Array.from(arrayLike[, mapFunction[, thisArgument]])

// EXAMPLES

// Array-like object (arguments) to Array
// function f() {
//   return Array.from(arguments);
// }

// f(1, 2, 3);
// [1, 2, 3]


// Any iterable object...
// Set
var s = new  Set(["foo", window]);
console.log(s);
Array.from(s);
// ["foo", window]

// Map
var m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]

// String
 Array.from("foo");
 // ["f", "o", "o"]

 // Using an arrow function as the map function to manipulate the elements
var myFunction = (v, k) => k;


  Array.from({length: 5}, (v, k) => k);
  // [0, 1, 2, 3, 4]
  // how this does this look at the map function  it's given the current value which would be v, and the second parameter map function gets is the index which would be given to the k value. since it returns the k value the new array the number array as seen
