/** 
 * whats the objective of a file like this - should go at the top. 
 * Obj: make clear the logic and the difference between - map and reduce method
 * Methods: studying the poly fills at mdn and trying out. 
 * Diff(nutshell): 1. map - saves returned value from callback to mapped value; adds it to a new array; 
 * returns the new array as output
 * 2. reduce saves returned value in value variable - it provides that value and the next value 
 * in the array as the args for you to return another value - but what ever you return inthe 
 * end willl be returned as one final value
 **/
 
 

/**
* map() method creates a new array with the results of calling a provided function on every element in this array.
**/


/** Plus one function as the parameter - storing the whole thing in a newArrayPlusOne type varaible.
**/ 

var firstArray = [1, 2, 3, 4, 5];

var secondArray = firstArray.map(plusOne);

console.log(secondArray);

function plusOne(number) {
return number + 1;
}



