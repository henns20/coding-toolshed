/**
 * Created by john on 6/10/15.
 * Stream Adventure - lines ex 5 out of ?
 * Task: Instead of transforming every line as in the previous "TRANSFORM" example
 * for this challenge, convert even-numbered lines to upper-case and odd-numbered
 * lines to lower-case. Consider the first line to be odd-numbered. For example
 * give this input:
 *  One
 *  Two
 *  Three
 *  Four
 *
 * Your program should output:
 *  one
 *  TWO
 *  three
 *  Four
 *
 *  You can use the `split` module to split input by newlines. For example:
 *    var split = require('split');
 *    process.stdin
 *      .pipe(split())
 *      .pipe(through2(function (line, _, next) {
 *        console.dir(line.toString());
 *        next();
 *      }));
 *
 *  `split` will buffer chunks on newlines before you get them. In the previous
 *  example, we will get separate events for each line even though all the data
 *  probably arrives on the same chunk:
 *    $ echo -e 'one\ntwo\nthree | node split.js
 *      'one
 *      'two'
 *      'three'
 *  Your own program should use `split` in this way, but you should transform
 *  the input and pipe the output through to `process.stdout`.
 *
 *  Make sure to `npm install split through2` in the directory where your
 *  solution file lives.
 **/

 var split = require('split');
 var through = require('through2');
var i = 1;
//var ts = through(function(buf, _, next) {
//
//    if ((i % 2) !== 0) {
//      this.push(buf.toString().toLowerCase() + '\n')
//    }
//    else {
//      this.push(buf.toString().toUpperCase() + '\n');
//    }
//    i++;
//    next();
//});

//process.stdin.pipe(split()).pipe(ts).pipe(process.stdout);

/** Official Answer *
 * Similar - but they use a ternary;
 * Counter a.I started it 1 to mimic the odd number that we wer first getting
 * b.I also started the counter inside the function - need to have outside so
 * the other functions can use it
 * c. label the counter counter
 * **/


var counter = 0;
var ts = through(function(buf, _, next) {
  var line = buf.toString();
  this.push(counter % 2 === 0
    ? line.toLowerCase() + '\n'
    : line.toUpperCase() + '\n'
  );
  counter++;
  next();
});

process.stdin
  .pipe(split())
  .pipe(ts)
  .pipe(process.stdout);