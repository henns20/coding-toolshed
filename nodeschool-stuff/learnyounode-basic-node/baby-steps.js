/**
 * Created by john on 6/5/15.
 * Baby Steps ex 2 of 13
 * Task: write a program that accepts one or more numbers as command-line
 * arguments and prints the sum of those to the console(stdout)
 * ##Hints You can access command-line arguments via the global process object.
 * The process object has an argv property which is an array containing the coomplete
 * command line. i.e process.argv.
 */

/**
 * Official Answer
 * @type {number}
 */

//var args = process.argv;
//  var sum = 0;
//  for (var x = 2; x < args.length; x += 1) {
//    sum += Number(args[x]);
//  }

/** Using  lodash while loop patter
 *
 * @type {number}
 */
var sum = 0;
var index = 1;

while (++index < process.argv.length) {
  sum += Number(process.argv[index]);
}

 console.log(sum);











