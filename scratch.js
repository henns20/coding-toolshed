/*
Requirements: 
1.create a script that outputs#1 know hundred.
2. but with multiples three print out the word Fizz.
3. with multiples of five output out the word buzz.
4. with numbers of multiples of three and five output the word is FizzBuzz
5. use the switch statement.
*/

function fizzBuzz() {
var x, output;
	for(x = 1;x < 101; x++) {
	switch(true) {
		case (!(x % 3) && !(x % 5) ):
		console.log('FizzBuzz');
		break;
		case (!(x % 3)):
		console.log('Fizz');
		break;
		case (!(x % 5)):
		console.log('Buzz');
		break;
		default:
		console.log(x);
	}

	}
}

fizzBuzz();