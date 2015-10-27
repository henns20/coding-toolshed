/**
 * Created by john on 6/4/15.
 * From the lodash library - times
 * Description: Invokes the iteratee function `n` times - returning an array
 * of the results of each invocation. The iteratee is bound to the `thisArg`
 * and bound with one argument.
 *
 * Task 1 - just to look at the while loop patter it uses - as the meat of the
 * script.
 */


function times(n,fn, thisArg) {
  //does a error checking on the n
  // binds the fn to the thisArg if provided
  // but the meat of the function is this at least for intermediate sake
  // the most noticable pattern or the first pattern I recognize at useful is
  // Signature Pattern this var index = -1, while(++index <n) {}
  var result = new Array(n);  // there is some more magic in there that they add.
  while(++index < n) {
    if(...) {} // lodash magic - sauce or sugar (library sugar vs ... everyday pattern)
    // it will store returned value in the result index up unitl max array length
    // after that it just has the cb 'iterate out' not storing it. Whay wouldn'
    // it just return with an error message?
    result[index] = fn(index);
  }
  return result;
}



