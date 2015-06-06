/**
 * Created by john on 5/29/15.
 * Hello Wold - 1 of 18
 * Task: write a function that takes an input string and returns it uppercased.
 * Arguments: input: a sting of random words (lorem ipsum)
 */


function upperCaser(input) {
  return input.toUpperCase(); // using the method built-in to string object* browser api
}

module.exports = upperCaser;

/**
 * My solution above passed - but there is one variation that they have
 * Official solution is below
 */

/*
  module.exports = function upperCaser(input) {
    return input.toUpperCase();
  }
 */