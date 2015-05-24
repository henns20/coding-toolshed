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


