/**
 * Created by john on 5/29/15.
 * Higher Order Functions - 2 of 18
 * Description: In this ex we are going to demonstrate that functions can be
 * passed as values by passing you a fn as an argument
 *
 * Task: Implement a fn that takes a fn as a first argument, a 'num' as 2nd arg,
 * then executes the passed fn 'num' times.
 *
 * General Lesson included:
 * Defined: Higher order function is a fn that does 1 of the following:
 * 1. Take one or more functions as an input
 * 2. Output a function
 * Other notes: unique to javascript*, bc of '1st class functions' - Fn's can be
 * treated lik any other value. 1. fn value can be stored as variables. (like
 * strings and numbers) 2. Props of objects* or passed to other fn's as args.
 * 3. Fn values are actually Obj - inheriting from Function.prototype. So, you
 * can add properties and store values on them.
 *
 * Key difference: the call syntax: meaning a reference to a fn followed by
 * parens (and optional params) - then fn body will be executed.
 */

/* my blind* attempt using the task directions

function hof (fn, num) {
  var x, n = num;
  for (x = 0; x < num; x += 1) {
    fn();
  }
}

 */

/**
 * My next after seeing the boilerplate given (or more of a design guide)
 * @param operation
 * @param num


function repeat(operation, num) {
  for (var x = 0; x < num; x += 1) {
    operation();
  }
}
module.exports = repeat;
 */

/**
 * the Official answer
 * Difference is they use a recursive
 * @type {repeat}
 * function re
 */

function repeat(operation, num) {
  if(num <= 0) return;
  operation();
  return repeat(operation, --num)
}


