/**
 * Created by john on 5/30/15.
 * Some Array Method
 * Array.prototype.some polyfill from the MDN
 */


/**
 * Script that returns true if some element in the array passes the test in the callback
 * compare my
 *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 */


Array.prototype.someFred = function(cb) {
  var x, arrayLength = this.length;
  for (x = 0; x < arrayLength; x += 1) {

    if(cb(this[x])) {
      return true; //  i had console.log('fred')  first.
    }
  }
  console.log("no fred is here");
};


/* this was my second - after looking at the polyfill and changing the this logic around */

//Array.prototype.someFred = function(cb, index) {
//  var x, arrayLength = this.length;
//  var t = Object(this);
//  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
//  for (x = 0; x < arrayLength; x += 1) {
//    console.log(this[x], t[x]);
//    if(cb.call(thisArg)) {
//    console.log('fred');
//    }
//  }
//  console.log("no fred here");
//};
//
var goodNumbers = [1, 3, 4, 9, 8];




function checkNsValidSet(goodNs) {
  return function (submittedNs) {
    return submittedNs.every(function(submittedN) {
      return goodNs.someFred(function(goodN) {
       return goodN === submittedN;
      });
    });
  }
}


var testAllNumbersValid = checkNsValidSet(goodNumbers);

var numbersIMSubmitting = [1,3];
console.log(testAllNumbersValid(numbersIMSubmitting));

