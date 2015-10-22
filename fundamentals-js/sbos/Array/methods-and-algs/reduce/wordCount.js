/* requirements: 
1. use array method reduce on a words array
2. List & count the # of times a word appears in the array
*/


'use-strict';

var words = ['apple', 'apple', 'banana', 'banana', 'orange'];


var b = words.reduce(function(prev, next) {
	// prev[next] = ++prev[next] || 1;
	prev[next] = !prev[next] ? 1 : ++prev[next];
	return prev;
}, {});





console.log(b);
