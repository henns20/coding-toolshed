/**
 * Created by john on 6/18/15.
 * Instructions example: this ex of recursion was in the basic recursion
 * example's background and instructions section.
 */


function toUpperArray(items) {

  if (!items.length) return [];
  var head = items[0];
  head.toUpperCase();
  var tail = items.slice(1);
  return [head].concat(toUpperArray(tail));

}
