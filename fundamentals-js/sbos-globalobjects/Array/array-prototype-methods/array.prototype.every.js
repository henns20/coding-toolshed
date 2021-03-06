/**
 * Array.prototype.every
 * leaving experimental until later(this is not experimental but skipping to this)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 * first: array.prototype.slice versus array.prototype.splice
 * list the mobile friendly search for it first
 */

// defining 3 arrays to set up
var array1 = [1, 2, 3, 4, 5];
var array2 = ["apple", "banana", "grapefruit", "peach"];
var array3 = [[0, 1], 2, [2, 3]];

// array.prototype.slice first
// slice lops off the part of the array starting with the first index argument and ending before the second index argument. A new array is created with the lopped off piece of the array with the slice

var slicedArray = array1.slice(1, 4);
console.log(slicedArray);
