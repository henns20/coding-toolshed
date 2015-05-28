/**
 * Created by john on 5/28/15.
 */


/**
 * for practice i think - not sure if it needs to be referenced
 * basic reduce with numbers
 * requirements*: create a program the takes a numbered array and reduces it
 * down - or returns a number that equals the sum of the all values.
 * **/

var numberArray = [1, 7 , 9 , 11];
// returned value should equal 28

//method 1 create a function to wrap the method - not sure what the advantage is

function reduceToSum (numberedArray) {
  // i want to return something - ie. make the function equal a value
  // so use the return.

  return numberedArray.reduce(function(pValue, current) {
    return pValue + current;
  });
}


//console.log(reduceToSum(numberArray));


/** Basic Reduce with wordcount a la nodeschoool function javascript lessons
 * Requirements. Taks a word array and reduces it down or returns an object
 * with the words as the properties and the number of times they appear in the
 * array as the values
 */

// wrapped function method
var words = ['blue', 'blue', 'blue', 'red', 'green'];

function wordArrayToObject(wordArray) {
  return wordArray.reduce(function(p, c) {
     p[c] = ++p[c] || 1; // adds to or initializes - ++ signifies adding
     // the value of p[c] not equaling it and then adding - nuance that is important
    return p
  }, {});
}

function forLoopWordMap (a) {
  var o = {}
  for (x = 0; x < a.length; x++) {
    o[a[x]] = ++o[a[x]] || 1;
  }
  return o
}

// with the forEach


function forEachWordMap(a) {
  var o = {};
  a.forEach(function(value) {
    o[value] = (o[value] || 0) + 1;
  });
  return o;
}

//the djebbZ did it at the paris nodeschool
// module.exports = function countWords(words) {   // edited so it world work
// in console testing

function countWords(words) {
  var count = {};
  words.forEach(function(word) {
    count[word] = (count[word] || 0) + 1;
  });
  return count;
}


// requirements to fizzbuzz
/**
 * FizzBuzz - write a program the returns numbers from 1 to 100, but ...
 * If number is multiple of 3 - return 'Fizz';
 * if number is multiple of 5 - return 'Buzz';
 * if number is multiple of 3 and 5 return 'FizzBuzz';
 */

 var fizzBuzz = function() {
  var output;
  for (x = 1; x < 101; x += 1) {
    output = '';
    if (!(x % 3)) {output += 'Fizz';}
    if (!(x % 5)) {output += 'Buzz';}
    console.log((output || x));  // empty string is false, so we short-circuit;
  }
};

fizzBuzz();