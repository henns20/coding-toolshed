/*
Requirements: 
1.create a script that outputs#1 know hundred.
2. but with multiples three print out the word Fizz.
3. with multiples of five output out the word buzz.
4. with numbers of multiples of three and five output the word is FizzBuzz
5. use the switch statement.
*/
'use strict';

function fizzBuzz() {
var x, output;

  for( x = 1; x < 101; x++) {
    output = '';
    if(!(x % 3)) output += 'Fizz';
    if(!(x % 5)) output += 'Buzz';
    console.log(output || x);

  }

  console.log('FizzBuzz script is now finished');

}

fizzBuzz();