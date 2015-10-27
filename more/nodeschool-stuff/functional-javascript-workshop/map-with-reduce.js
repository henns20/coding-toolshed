/**
 * Created by john on 6/21/15.
 */

//module.exports =function(arr, fn, thisArg) {
//  arr.reduce(function(value, current) {
//    if (!value.length) {return }
//
//  }, [])
//}

function map(arr, fn, thisArg) {
  return arr.reduce(function(acc, item, index, arr) {

    return acc.concat(fn.call(thisArg, item, index, arr))
  }, [])
}

var a = [1,2,4];
function addTwo(item) {
  console.log(item);
  return item + 2;

}
console.log(map(a, addTwo, this));