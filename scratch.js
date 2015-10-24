/* to lower case 
*/


Array.prototype.reduce = function(callback /*, initialValue*/) {
    'use strict';
   
   ...

    var t = this, len = t.length, k = 0, value;
    // I understand this
    // IF initial value provided - go to the for loop
    if (arguments.length == 2) {
      value = arguments[1];
    } 

    // This ELSE part is where I have the question
    // And the overall use of the expression k in t

    else {
      // I get this 
      // 
      while (k < len && !(k in t)) {
        k++; 
      }
      if (k >= len) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k++];
    }

    for (; k < len; k++) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };

//what is the else...while part of the script doing?
// and not getting the logic of the (k in t) expression here. 

  else {
      while (k < len && !(k in t)) {
        k++; 
      }
      if (k >= len) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k++];
    }
