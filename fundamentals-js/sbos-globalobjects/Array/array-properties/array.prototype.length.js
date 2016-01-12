/**
 *  The Length Property: represents an unsigned, 32-bit integer is always numerically greater than the highest index in the array
 * things you can naturally do with it:
 *  1. truncate or shorten it  by setting the property less than the actual length of  array
 *  2. extended  it:  this changes the length but not the containing elements. Thus, the length property does not necessarily indicate the number of defined values in the array. See links versus numerical properties for more

 */

 /**
  * Length Versus Numerical Properties Example
  */

  var fruits = [];
  fruits.push('banana', 'apple', 'peach');

  console.log(fruits.length); //  3

  fruits[5] = 'mango';
  console.log(fruits[5]); // mango
  console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
  console.log(fruits.length); // 6

  // increasing the length

  fruits.length = 10;
  console.log(Object.keys(fruits)); //['0', '1', '2', '5']
  console.log(fruits.length); // 10

  // decreasing the length property does, however, delete elements

  fruits.length = 2;
  console.log(Object.keys(fruits)); // ['0', '1']
  console.log(fruits.length); // 2
