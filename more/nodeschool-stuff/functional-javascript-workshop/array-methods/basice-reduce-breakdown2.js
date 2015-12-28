/**
 * requirements: reduce script using a for loop; reduce script using recursion;
 * 1. reduce script should use a sum callback (summing up of the array values)
 */

function sumValues(a, b) {
  return a + b;
}

var myArray = [1, 2, 3];

function reduce(array, cb, initial) {
  var value = initial;

  for (var i = 0; i < array.length; i++) {
    value = cb(value, array[i]);
  }
  console.log(value);
}

reduce(myArray, sumValues, 0);


function reduceRecursion(array, cb, initial) {

  var reducedValue =  (function reduce1(index, value) {
      if (index > array.length - 1)  return value;
      return reduce1(index + 1, cb(value, array[index], index, array));
  })(0, initial);

  console.log(reducedValue);
}


reduceRecursion(myArray, sumValues, 0);

function reduceRecursion1(array, cb, initial) {
  var reducedValue;

  function reduce1(index, value) {
      if (index > array.length - 1)  return value;
      return reduce1(index + 1, cb(value, array[index], index, array));
  }

  reducedValue = reduce1(0, initial);

  console.log(reducedValue);
}

reduceRecursion1(myArray, sumValues, 0);
