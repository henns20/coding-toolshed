/**
 * word count script using reduce via recursion & for loop
 * requirements: wordCountScript should take an array of strings
 * save them in an object is the property and the number of times it appears
 * in the array as the value.
 */


 function wordCount(previous, next) {
   previous[next] = ++previous[next] || 1;
   return previous;
 }

 function reduce(array, fn, initial) {

   for (var i = 0; i < array.length; i++) {
     initial= fn(initial, array[i]);
   }
   console.log("using initial");
   console.log(initial);
 }


 reduce(["a", "a", "b", "c"], wordCount, {});

 // USING currentValue variable 4 clearer delineation
 // function reduce(array, fn, initial) {
 //   var currentValue = initial;
 //   for (var i = 0; i < array.length; i++) {
 //     currentValue = fn(currentValue, array[i]);
 //   }
 //   console.log("using currentValue");
 //   console.log(currentValue);
 // }
