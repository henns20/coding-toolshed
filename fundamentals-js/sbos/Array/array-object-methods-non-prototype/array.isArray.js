/**
 * Array.isArray(object)
 * article included:
 * Determining with absolute accuracy whether or not javascript object is an array
 * http://web.mit.edu/jwalden/www/isArray.html
 */

// Examples
// all the examples providedare pretty obvious including the less obvious for me

 Array.isArray(new Array()); // true
 // little-known fact: array.prototype itself is an array
 Array.isArray(Array.prototype);

 // returns false (again including only the less obvious to me)

Array.isArray('Array');
Array.isArray(true);
Array.isArray({ __proto__: Array.prototype });

 
