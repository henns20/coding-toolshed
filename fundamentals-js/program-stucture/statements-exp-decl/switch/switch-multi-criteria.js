/* Takes advantage of - when no break below case statement - will cont to execute next case regardless if case meets criteria.
mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch


2 examples: 
1. multi-case single operation
2. multi-case chained 

Requirements: multi-case single
1. multiple values of the evaluated expression need result in the same output

*/

var animal, animals, randInt;
animals = ['Cow', 'Giraffe', 'Dog', 'Pig', 'Dinasaur', 'Unicorn'];
randInt = getRandInt(0, 6);
animal = animals[randInt];

arkAnimalDecider(animal);

function arkAnimalDecider(animal) {
	console.log(animal);
	switch(animal) {
		case 'Cow':
		case 'Giraffe':
		case 'Dog':
		case 'Pig':
			console.log("This " + animal + " will go in Noah\'s Ark.");
			break;
		case 'Dinasaur':
		default:
			console.log("This " + animal + " will not.");
	}
}

function getRandInt(min, max) {
	var num = Math.floor( Math.random() * (max - min) );
	console.log(num);
	return num;
};


/**
Multi-case chained

Requirements: 


**/



yourNumOutput(getRandInt(0, 11));


function yourNumOutput(randInt) {
	var output = 'Output: ';
	switch(randInt) {
		case 10:
			output += 'So ';
		case 1:  
			output += 'What ';
			output += 'Is ';
		case 2:  
			output += 'Your ';
		case 3:  
			output += 'Name';
		case 4:  
			output += '?';
			console.log(output);
			break;
		case 5:  
			output += '!';
			console.log(output);
			break;
		default:
			console.log('Please pick numbers 1, 2, 3, 4 ,5 & 10!');
	}
};



// Helper function 

function getRandInt(min, max) {
	var num = Math.floor( Math.random() * (max - min) );
	console.log(num);
	return num;
};


