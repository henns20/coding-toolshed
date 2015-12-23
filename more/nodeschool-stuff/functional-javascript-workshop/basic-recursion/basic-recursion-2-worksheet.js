
//  aha: reduce 1  is like for()
// script takes an array and reduce it down to 1 value
// reducing it down by  giving this some of all the array values
// less at the heart we will: we will feed a function that we created that adds 1 value to another and returns the result
// we will feed it the return value from the prior function and the next value of the array
// to kickoff or start this process we will provide the function the value of 0 as there is no return value on the first iteration
// the function will take the current some value in the value at the current array iteration
//  since there is no some value at the first call of the function we will provide it with the value of 0 so it will not affect the sum
//   after the first call: how do we feed itthen how do we feed in general
// user recursion function cold reduced 1
// takes the initial value in this case 0 it also takes the index number location where we will want to start
// reduce 1 actually takes an index value in the current reduced value which at the beginning we will provide it with the value of 0 2 not affect the sum
// to iterate through the array and provide a complete reduction of the array we will use the recursion pattern
//specifically  we will call this reduced 1 function which we willgive it to arguments
//first argument  is the current index+1 second argument is the return  some the value of the current arguments  or original arguments
// to end this loop and provide the returned some 4 total sum we will use and if condition at the top oh this function -this condition will check to see if the index is greater than the max index of the array and if so it will return the currents on the value
// do this by first getting the array,

// 1. first step
// function reduce1(index, value) {
//   var myArray = [1, 2, 3];
//   var fn = function (a, b) {
//     if (!a) a = 0;
//     return a + b;
//   };
//
//   if (index > myArray.length - 1) {
//     console.log(value);
//     return;
//   }
//   return reduce1(index + 1, fn(value, myArray[index]));
//
// }









// 4  we need to supply an array a  reduce function and an initial value
// 6  conventional  partial  pattern  saving  2 variable  / function expression
// var myReduce = function reduce(arr, fn) {
//
//
// // 5  return the function
// return function reduce1(index, value) { // 1
//   if (index > arr.length - 1) {
//     console.log(value);
//     return;
//   } // 2
//   return reduce1(index + 1, fn(value, arr[index], arr)); // 3
//
// };
//
// };

// myReduce([1, 2, 3], function (a, b) {
//   return a + b;
// }, 0)(0, 0);

// 7
function reduce(arr, fn, initial) {


return (function reduce1(index, value) { // 1
  if (index > arr.length - 1) {
    console.log(value);
    return;
  } // 2
  return reduce1(index + 1, fn(value, arr[index], arr)); // 3

})(0, initial);

}

reduce([1, 2, 3], function (a, b) {
   return a + b;
 }, 0);
