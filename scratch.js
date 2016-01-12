/**
 * Array.prototype.every()
 * The every() method tests whether all elements in the array pass the test implemented by the provided function
 * array.every(callback[, thisArgument])
 *
 */

 // Examples
 // Testing size of all the array elements

 function isBigEnough(element, index, array) {
   console.log(array);
   return element >= 10;
 }
// [12, 5, 8, 130, 44].every(isBigEnough);  // false
// [12, 54, 18, 130, 44].every(isBigEnough); // true

// Using the arrow function
[12, 54, 18].every(element => element >= 10);
// can't get this to work yet in node on my computer should work withthe suffix --harmony
