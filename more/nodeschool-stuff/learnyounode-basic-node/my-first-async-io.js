/**
 * Created by john on 6/7/15.
 * My First Async IO - exercise 4 of 13
 * Task: write a program that uses a single asynchronous filesystem operation
 * to read a file and print the number of newlines it contains to the console
 * (stdout), similar to funning cat file | wc -l.
 * Full path of the file to read will be provided as the first command-line
 * argument.
 *
 * #Hints
 * 1.The solution to this problem is almost the same a s the previos problem except
 * you must now do it the Node.js way: asynchronous.
 * 2. fs.readFile() used instead - and instead of using the return value from
 * this method you need to collect the value from a callback function that you
 * pass in as the second argument.
 * 3. Remember that idiomatic Node.js callbacks normally have the signature.
 *     function callback(err, data) {/.../}
 *    a. you can check if an error occurred by checking whether the first argument
 *    is truthy,
 *    b. If error, you should have your Buffer object as the second argument.
 *    c. 'utf8' can be used instead of toString, callback can be the 3rd arg.
 *
 */

var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', function(err, data) {
  if(err) {
    console.log(err);
  } else {
  var count = data.split('\n').length - 1;
    console.log(count);
  }
});

/**
 * Official answer
 * var fs = require('fs');
 * var file = process.argv[2];
 *
 * fs.readFile(file, function(err, contents) {
 *  var lines = contents.toString().split('\n').length - 1;
 *  console.log(lines);
 * });
 *
 * mine was similar - i used the 'utf8' for the conversion
 */
