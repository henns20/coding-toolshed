/**
 * the filter() method creates a new array with all elements that pass the test implemented by the
 * provided function
 * array.filter([, thisArgument])
 *
 * callBack: function to test each element of the array. Invoked with arguments (element,
 * index, array). Return true to keep the element, false otherwise.

 * Optional. Value to use as this when executing callback
 */

 // Examples
 // Filtering out all small values
 // The following example uses filter() to create a filter array that has all elements with values less than 10 removed

 function isBigEnough(value) {
    return value >= 10;
 }
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
//  [12, 130, 44]
