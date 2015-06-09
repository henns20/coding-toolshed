/**
 * Basic-reduce on more time
 * Task: Given an array of strings, use Array#reduce to create an object that
 * contains the number of times each string occured in the array. Return the object
 * directly not need to console.log
 * @param fn
 * @param num
 * @returns {*}
 */

//takes an array of objects with message properties
// and filters it out with messages 50 chars or longer
// then it returns an array of messages that are only 50 char long

var myMessages = [{message:"akdjlkfjlsdjflajdflkjadflajsdflajsdfljfalsjdflajsdflajflds;fjalsjkdfalksjdflajsdlfja"}, {message:"akdjlkfjlsdjflajdflkjadfla"}];


function getShortMessages(objMessages) {
  return objMessages.map(function(objsMsg) {
    return objsMsg.message.length < 50;
  });
}


console.log(getShortMessages(myMessages));


//
//
//function countWords(inputWords) {
//  inputWords.reduce(function(wc, pr){
//    // 1. initialise the object with the first word and initialise or add to
//    // other
//    wc[pc] = ++wc[pc] || 1;
//    return wc
//  }, {});
//}
//
//
/////* trying out reduce - return the largest number in an array. */
////
////
////var numbers = [1, 7, 2, 100, 3];
////
////var rValue = numbers.reduce(function(p, c) {
////	return c > p ? c : p;
////});
////
//
//console.log(rValue);


// trying the every function or the every-some function with arroe function and not return


/**
 * TESTING my own SOME method
 * @type {number[]}
 */

//var goodNumbers = [1, 3, 4];
//
//
//
//
//function checkNsValidSet(goodNs) {
//  return function (submittedNs) {
//    console.log(submittedNs.every(function(submittedN) {
//       return goodNs.some(function(goodN) {
//           return goodN === submittedN
//       });
//    }));
//  }
//}
//
//
//var testAllNumbersValid = checkNsValidSet(goodNumbers);
//
//var numbersIMSubmitting = [1,3,4];
//testAllNumbersValid(numbersIMSubmitting);

/**
 * This is the auto-fill server call pattern
 * Original in basic competency
 * Here we are reviewing and trying to replicate it in ajs
 */


/**
 * High-order-function from function javascript workshop - nodeschool
 * Purpose - is to show that functions are like values that can be passed in as an argument.
 * requirements: write a function that takes a fn and a number for args - and
 * calls the fn the same amount of times as - the number passed.
 */
// recursive first
//
//function executeFunctionX(fn, num) {
//  // recursive functons always start with a conditional
//  if (num <= 0) return;
//  fn();
//  return executeFunctionX(fn,  --num);
//
//
//}
//
///* jquery ajax auto-fill call to server */
//(function($){
//  $(document).ready(function() {
//    $('input').keypress(function() {
//      if(this.timeoutId)
//        window.clearTimeout(this.timeoutId);
//      this.timeoutId = window.setTimeout(function() {
//        $ajax.(function() {
//
//        });
//      }, 200);
//    });
//  });
//})(jQuery);