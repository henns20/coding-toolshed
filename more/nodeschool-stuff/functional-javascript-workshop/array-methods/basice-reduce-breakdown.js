// This is about scope
// WHAT'S THE TAKEAWAYS;  CAN I TIMELY  WAY  BREAK DOWN WHAT I DID HERE  OR PROCESS  you're a thought and OF DISCOVERys
// USE OF FOR loop when you want control of the call back arguments
// BREAKDOWN: WHERE THE FUNCTION IS DEFINED versus WHERE IT IS CALLED dictates if it recognizes a variable
// QUESTION: since you can't feed before each function wordCount how do you get it to return the object without the finding a globally
//  check mdn- it may be that it's always defined globally
// they use a for loop instead of a forEach to assign the g
// do that -  and just  use reduce  as a  normal

// // write the script the amount of times a word appears in the array
// //
var myArray = ["apple", "apple", "banana", "peach", "peach", "apple"];

// var currentObjectValue;

function reduce(array1, initial) {
  var currentObjectValue = initial;
  var hello = "hello";

  array1.forEach(wordCount);
  return currentObjectValue;

  // define wordCount
  function wordCount(item) {
    var o;

    console.log(hello);

    if(o === undefined) {o = currentObjectValue;}
    // !currentObjectValue ? initial : currentObjectValue;
    // if (!currentObjectValue) {currentObjectValue = initial;}
    o[item] = !o[item] ? 1 : ++o[item];
     console.log(o);
  }

}

//
// function reduce(array1, fn) {
//
//   // currentObjectValue = initial;
// var hello = "hello";
//   array1.forEach(function (item) {
//      console.log(item + "hello" + fn);
//
//   });
//   return currentObjectValue;
// }
//
// reduce(myArray, "jamie");

//
//
// // clean it up and return
//
//
reduce(myArray, {});











//
//
// var obj1 = {};
// var value;
// var  myArray = [1, 2, 3, 1, 2, 3];
//
// function printOutWc(arr, obj) {
//   function wordCount(word) {
//     if (!value) value = obj;
//    value[word] = ++value[word] || 1;
//   //  return value;
//   }
//
//   arr.forEach(wordCount);
//   console.log(value);
//
// }
//
//   printOutWc(myArray, obj1);
