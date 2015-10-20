/**
switch statment evaluates an expression, matching the expression's value to a case clause, and executes statements associated with tha case. 

ie. switch (exp) {
			case value1: 
			// statement to be executed when the exp matches value1;
}

example requirement: 

1. based off of MDN's switch example - using fruit text value
2. get random fruit from array
3. Using a switch statement output current price of the particular fruit that was returned. ***

**/

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var fruits = ['apple', 'banana', 'grapefruit', 'peach']

var randomInt = getRandomInt(0, 4); 



function getFruitPrice(index, fruitArray) {
	var fruit = fruitArray[index]; 

	switch(fruit) {
		case 'apple':
			console.log('an apple is 1 dollar');
			break;
		case 'banana':
			console.log('an banana is 2 dollars');
			break;
		case 'peach':
			console.log('an apple is 3 dollars');
			break;
		case 'grapefruit':
			console.log('an grapefruit is 4 dollars');
			break;
		default: 
			console.log('no fruit was returned');
	}
}

getFruitPrice(randomInt, fruits);