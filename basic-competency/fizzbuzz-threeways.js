/**
* Fizzbuzz - algorithm to guage basic programming knoweledge of javascript and other languages
* Algorithm - from Rosetta code: write a program that prints the integers out from 1 to 100.
* But for multiples of 3, print 'Fizz', and for multiples of 5 print 'Buzz';
* For numbers that are multiples of both 3 and 5, print 'FizzBuzz';
**/

/**
* Solution #1 - the if and else if
* My first natural direction of an attempt at the solution.
* note: I added the use strict and the var declarations later after - seeing rosetta code - so worked but still had basice flaws. Also added the function encapsulation as a nod to the Rosetta way and best practice way to create a scipt.
**/

function fizzbuzz () {
  for ( var i = 0; i <= 100; i++ ) {
    if ( (i % 3) === 0 && (i % 5) === 0 ) {
      console.log("FizzBuzz");
    } else if ( (i % 3) === 0 ) {
      console.log('Fizz');
    } else if ( ( i % 5 ) === 0 ) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}




/**
* Solution #2 - Rosetta Code's solution
* Shorter code and patterns details
* 1) Use 101 vs 100 - so don't have to type the =
* 2) !() force typing - to true vs === 0 // seen this with angular code as well
* 3) if|output+=  pattern - better takes care of the fizzbuzz scenario bs will add one or both if relevant
* 4) console.log(output || i)  includes conditional output or type of output
**/


var fizzBuzz = function () {
  var i, output;
  for (i = 1; i < 101; i += 1) {
    output = '';
    if (!(i % 3)) { output += 'Fizz'; }
    if (!(i % 5)) { output += 'Buzz'; }
    console.log(output || i);//empty string is false, so we short-circuit
  }
};


/** Solution #3 - Using a Swith Statement
 * I contributed to a Stack Overflow - questoin: http://stackoverflow.com/questions/26019823/javascript-fizzbuzz-switch-statement/30282327#30282327
**/


var fizzBuzz3 = function() {
  for ( var i = 0; i < 101; i++ ) {
    switch(true) {
      case ( !(i % 3) && !(i % 5) ):
        console.log('FizzBuzz');
        break;
      case ( !(i % 3) ):
        console.log('Fizz');
        break;
      case ( !(i % 5) ):
        console.log('Buzz');
        break;
      default:
        console.log(i);
    }
  }
}

/**
 *  Solution #4
 *  Switch statement with appended variable (no break statement)
 *  Better (seemingly) than above switch statement
 */

 function fizzBuzz() {
     var output;
     for (var i = 0; i < 101; i++) {
         output = '';
         switch (true) {
             case (!(i % 3)):
                 output += 'Fizz';
             case (!(i % 5)):
                 output += 'Buzz';
             default:
             console.log(output || i);
         }
     }
 }

 fizzBuzz();
