/**
 * Created by john on 5/31/15.
 * Every Method
 * Polyfill examination from MDN
 * descriptions*:
 * 1. Mine: create a function or in this case method for an array that takes a
 * cb the array contents or items and returns true if evey item passes the test
 * - provided in the cb function. Additionally, allow for a second argument to
 * optionally establish a different context for the this value.
 * 2. Test whether all elements in a array pass the test implmented by a provided
 * function
 *
 * Link to the API
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 *
 * Official version and my pattern notes below
 */



if(!Array.prototype.every) { //[1]
  Array.prototype.every = function(cb, thisArg) {
    'use strict'; //[2] use strict inside?*
    var T, k; //[3] capital T and line space after the variable declaration

    if (this == null) {//[4] error check that I would at this point not have thought to do
    throw new TypeError('this is null or not defined');
    }

    //MDN's 1. let O be the result of calling toObject passing of this value as
    //      an argument
    var O = Object(this);

    //2. MDN Let lenValue be the result of calling the Get internal method of O with
    // argument the argument 'length'.
    //3. MDN Let len be ToUnit32(lenValue)
    var len = O.length >>> 0; // [5] is this #3 and >>> never seen that syntax
    // on a scale of 1 - 10 how often would I use this?

    //4. If isCallable(cb) is false, throw a TyeError exception
    if (typeof cb !== 'function') {
      throw new TypeError();   // [6] why message in line 27 and not here?
    }

    //5. If thieArg was defined - let T be thisArg; else let T be undefined

    if (arguments.length > 1) {
      T = thisArg;
    }

    //6. Let k be 0
    k = 0;

    //7. Repeat, while k < len
    while (k < len) {
      var kValue;

      if (k in O) {
        //i. Let kValue be the result of calling the Get internal method of O
        // with argument Pk
        kValue = O[k];

        //ii. Let testResult be the result of calling the Call internal method
        // of callbackfn with T as the this value and argument list
        // containing kValue, k, and O

        var testResult = cb.call(T, kValue, k, O);

        //iii. if ToBoolean(testResult) is false, return false

        if(!testResult) {
          return false;
        }
      }
      k++;
    }
    return true

  };
}


/**
 * 1. checks if the browser api has an every method before declaring and
 * defining
 *
 * other jq's
 * why the while loop vs a for - is there any discernable reason?
 */
