/**
 * Created by john on 5/31/15.
 * From: Eloquent Javascript - in spirit - but most recently High-Order-Function
 * exercise from FJW - nodeschool
 *
 * Requirements:
 * 1. **my try at a description** - Write a program or a function that takes a fn
 * and a number as an argument. And when run will execute the fn - the number of
 * times equal to the second argument.
 *
 * 2. Official description: Implement a fn that takes a fn as its first argument
 * and a num as its second arg, and executes the passed fn, 'num' of times;
 *
 */


function repeat(fn, num) {
  // recursive function pattern starts with a conditional
  if (num <= 0) return;
  fn();
  return repeat(fn, --num);
}

function repeat(fn, num) {
  if (num <= 0) return;
  fn();
  return repeat(fn, --num)
}
/**
 * Alternative is the for loop
 * Good Questions - is there any advantage tot he recursion - why is it used?
 **/
