/**
 * Array.prototype.concat()
 * method returns a new array comprised of the array on which it is called joined with the array(s) and / were value(s) provided as arguments
 * Syntax:
 * var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
 */

/**
 *  Notes:
 * 1. creates a new array
 * 2. can take values and/or array
 * 3. does not alter this or any arrays provided instead returns a shallow copy
 * that contains copies of the same elements combined from the original arrays
 * 4. object references( not the actual object)
 */

 var alpha = ['a', 'b', 'c'];

 var alphaNumeric = alpha.concat(1, [2, 3]);

 console.log(alphaNumeric);

 // ['a', 'b', 'c', 1, 2, 3]
