/**
 * Created by john on 6/18/15.
 * basic recursion ex:
 * Task: use recursion to solve the basic reduce function
 */

var words = ['apple', 'apple', 'orange', 'lemon', 'berry', 'lemon'];

// take array and creat an obj with food as props and the num of times there
// in an array -the count as the value or reduce to an object that keeps count
// of how many time they are in an array



//recusrsion reduce

function recurReduce(arr) {
  if (!arr.length) return wordMap;
  var wordMap = {};
  wordMap = ++wordMap[arr[0]] || 1; 
  var tail = arr.slice(1);
  recurReduce(tail);
} 




























function recursionReduce(arr) {
  if (!arr.length) return wordMap;
  var wordMap = {};
  wordMap[arr[0]] = ++wordMap[arr[0]] || 1;
  var tail = arr.slice(1);
  return recursionReduce(tail);


}

function recursionReduce1(arr) {
  var restOfWords = arr.slice(1),
    currentWord = arr[0];
    var wordMap;

  if (!arr.length) console.log(wordMap);
  wordMap[currentWord] = ++wordMap[currentWord] || 1;
  return recursionReduce1(restOfWords);
}


//
//recursionReduce1(words);
//
//function reduce(arr, fn, initial) {
//  // SOLUTION GOES HERE
//}
//
//module.exports = reduce;

function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
  })(0, initial) // IIFE. kick off recursion with initial values
}



function countWords(countMap, word) {
    countMap[word] = ++countMap[word] || 1; // increment or initialization to 1
    return countMap;
  }

console.log(reduce(words, countWords, {}));