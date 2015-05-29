/**
 * Created by john on 5/29/15.
 * Basic Map
 */

//var n = [0, 2, 3, 4, 5, 6, 7];

function double(x) { return x * 2; };

function doubleAll(numbers) {

  return numbers.map(double);
}

module.exports = doubleAll;

/**
 *     module.exports = function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }

 */



