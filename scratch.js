///* trying out reduce - return the largest number in an array. */
//
//
//var numbers = [1, 7, 2, 100, 3];
//
//var rValue = numbers.reduce(function(p, c) {
//	return c > p ? c : p;
//});
//
//
//console.log(rValue);


// trying the every function or the every-some function with arroe function and not return

var goodNumbers = [1, 3, 4];




function checkNsValidSet(goodNs) {
  return function (submittedNs) {
    console.log(submittedNs.every(function(submittedN) {
       return goodNs.some(function(goodN) {
           return goodN === submittedN
       });
    }));
  }
}


var testAllNumbersValid = checkNsValidSet(goodNumbers);

var numbersIMSubmitting = [1,3,4];
testAllNumbersValid(numbersIMSubmitting);
