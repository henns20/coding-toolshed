/* requirements: 
1. use array method reduce on a words array
2. List & count the # of times a word appears in the array

reduce:  appies a function against an accumulator and each value of the array (left to right) to reduce it a single value. 

*/


'use-strict';

var words = ['apple', 'apple', 'banana', 'banana', 'orange'];


var b = words.reduce(function(prev, next) {
	// prev[next] = ++prev[next] || 1;
	prev[next] = !prev[next] ? 1 : ++prev[next];
	return prev;
}, {});


//both worked above
console.log(b);
