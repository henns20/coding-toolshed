/* trying out reduce - return the largest number in an array. */


var numbers = [1, 7, 2, 100, 3];

var rValue = numbers.reduce(function(p, c) {
	return c > p ? c : p; 
});


console.log(rValue);
