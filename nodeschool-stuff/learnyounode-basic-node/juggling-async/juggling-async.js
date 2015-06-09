/**
 * Created by john on 6/8/15.
 * Learnyounode - Juggling asyn ex 9 of 13
 * Task: same as http collect, but this time you will be provided with 3 urls
 *  as the first 3 command-line args
 *  1. collect the complete content provided to you by each of the urls and print
 *  it to the console. Just the data - not the length. One line per url.
 *  2. the catch -you must print them out in the same order as the urls are
 *  provided to you as command-line args
 *
 *  ## Hints
 *  - don't expect these 3 servers to play nicely!
 *  - they will not give you the complete responses in order you hope.
 *  - you will need to queue the results and keep track of how many of the urls
 *  have returned their entire contents. Only once you have them all you
 *  can print the data to the console.
 *  - counting callbacks is one of the fundamental ways of managing async in Node.
 *  Rather than doing it yourself, you may find it more convenient to rely on a
 *  third-party library such as async or after. But for this exercise, try and
 *  do it without any external helper library.
 *
 */

/* my attempt

//var http = require('http');
//var bl = require('bl');
//
//for (var x=2; x < 5; x+= 1) {
//
//  http.get(process.argv[x], function(response) {
//    var a = [];
//    response.pipe(bl(function(err, data) {
//      a[x] = data
//    }));
//
//  })
//}
  **/

var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function printResults() {
  for (var i = 0; i < 3; i += 1) {
    console.log(results[i]);
  }
}

function httpGet(index) {
  http.get(process.argv[2 + index], function(response) {
    response.pipe(bl(function(err, data) {
      if (err)
        return console.error(err);

      results[index] = data.toString();
      count++;

      if(count === 3) {
        printResults();
      }
    } ));
  })
}

for (var x = 0; x < 3; x += 1)
  httpGet(x);