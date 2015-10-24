/**

why? by looking at the polyfill gives deeper understanding for coding

1. pseudo code it split into parts sections of logic

len = t.length >>> 0  bitwise expression  working more clarity on this. 
http://stackoverflow.com/questions/10382122/what-is-operator-in-js

Object(this) its safety measure in a nutshell ToObject
 http://stackoverflow.com/questions/6498487/whats-the-point-of-var-t-objectthis-in-the-official-implementation-of-for

logic of the while loop stack overflow 
http://stackoverflow.com/questions/33309757/logic-behind-mdns-reduce-pollyfills-while-loop



S1 pollyfill setup & safety (error checking) 

p1 Codebase check 
	- checks if reduce is in the code base

p2 declaration 
 	- reduce method on the Array prototype

p3 error checking on parameters on persons use.  
	- IF no array then throw an error
	- IF callback is not a fn throw an error

S2 Core  - starting ln 12

p1 Variable data Set up
	- array(this) is saved in t
	- length of array is saved in len
	- iterator declared k = 0; 

p2 Core behavior  
	
    2.1 Prepare/Get values to start array

	- IF _initialvalue_ provided - store in value variable
  - ElSE find the initial value 

  -	RCode measures - the if else 
	- sparse array check* 
  - WHILE the < length of aray and array is sparse iterate k
    - IF don't find a value 
        THROW TYPERROR
  - OTHERWISE 
  - STORE array result of 1st found value 
      AND iterate index to next value for the nxt value in the reduce method

    2.2 Reduce - array values made to create 1 value*
     
    FOR length of array
      Exclude possible sparse indices 
      Execute the cb fn providing params and ordered as:
        current previously deciphered _value_ 
        next arr value
        current iterated value*
        array being reduced

      STORE result of cb as the new current _value_ 
        to be used for the succeeding cb executions.

    RETURN resulting final _value_

**/

if(!Array.prototype.reduce) {
	Array.prototype.reduce = function(cb, ??){
		'use-strict';	
		if(this === null) {
			throw new TypeError('reduce method called null or undefined');
		}
		if(cb !== typeof 'function') {
			throw new TypeError(cb + ' is not a function');
		}

		var t = Object(this), len = t.length >>> 0, k = 0, value;
    if (arguments.length === 2) {
      value = arguments[1];
    } else {
        while (k < len && !(k in t)) {
          k++
        }
        if (k <= len) {
          throw new TypeError("Cannot reduce an empty array.")
        }
        value = t[k++]
    }

    for (; k <= len; k++) {
      if (k in t) {
        value = cb(value, t[k], k, t);
      }
    }

    return _value_;
  };
}


  

      
           
      





