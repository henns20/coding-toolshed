/*
* Basic Reduce 
* Given an array of strings, use array#reduce to create an object
* that contains the number of times each string occuured in the array.
* Return the object directly (no need to console.log).
**/

//for example:
var words = ['apple', 'banana', 'apple', 'durian', 'durian', 'durian'];

console.log(countWords(words));

// =>
// { 
// apple: 2,
// banana: 1,
// durian: 3
// }

function countWords(arr) {
	return arr.reduce(function(countMap, word) {
		countMap[word] = ++countMap[word] || 1; // increment or initialization to 1
		return countMap;
	}, {});
}
