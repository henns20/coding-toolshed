/**
 * requirements: reduce the number arrayby getting the sum of all values
 * use recursion function
 */

 var numberedArray  = [1, 2, 3, 4];

 // reduced function takes the  array value, callback functionto execute on each array value, an optional initial value
// internal recursion function takes current value, interrater


 function reduce(array, cb, initial) {

   
   (function reduce1(index, value) {
     if(index >= array.length - 1) return value;
     return reduce1(index + 1, cb(value, array[index], index, array));
   })(0, initial);
 }
