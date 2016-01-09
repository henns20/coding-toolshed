/**
 * link to page on mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
 * array.prototype is the main property
 * array.prototype: represents the prototype for the rate constructor
 * Properties
 * Two array array.prototype properties are mentioned in the docs
 * array.prototype.constructor: specifies the function that creates an objects prototype
 * array.prototype.length: reflects the number of elements in the array.
 */


 /**
  * Methods
  * 1. Mutated methods: methods that modify the array.
  * 2. Accessor methods: methods that do not modify the array and return some representation of the array
  * 3. Iteration methods: methods that take as arguments functions to be called back while processing the array. 
  *   some more info: a.work on the existing array length.  any element added beyond this length from within the callback is not visited - because  when method is called the length of the array is sampled. any deletion or setting the value of to the array in the call back may affect the results of the operation if the method visits change omen afterwards
                    b. building on above: if you must mutate the array, copy into a new array instead
  * 4. Generic methods(nonstandard): many methods on the javascript array object are designed to be generally applied to all objects which"look like" arrays. That is, they can be used on any object which as a length property and which can usefully be accessed using numeric property names(as with arete[5] indexing), etc...some examples
  */
