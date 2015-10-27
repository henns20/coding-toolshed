/**
 * Created by john on 6/6/15.
 * Task: Write a program that uses a single synchronous filesystem operation
 * to read a file and print the number of newlines (\n) it contains ot the
 * console (stdout), similar to running cat file | wc-1.
 * So: 1) Program that reads a file - using a synchonous filesystem operation.
 * 2) Prints the number of new lines (\n) to the console
 * Note: full path of the file to read will be given as the 1st command line arg.
 * ## Hints:
 *  - You need the fs module from the Node core library to perform a filesystem
 * operation.
 *  - To load this kind of module,  or any other global module use
 *  require('particularModule')
 *  - synchonous actions in this module - end with sync so
 *  fs.readFileSync('path/to/file')
 *  Buffer objects ar Node's wway of efficiently representing arbitrary arrays
 *  of data(ie. ascii or binary). Buffer objects can be converted to strings by simply calling the
 *  toString() method on them. e.g var str = buf.toString().
 *  - that method returns a Buffer object: object containing the complete
 *  contents of the file.
 *  - docs
 *   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html
 *   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/buffer.html
 *
 */


/** my first soluiton **/
var file = process.argv[2];
var fs = require('fs');

var buffer = fs.readFileSync(file);
var bufferString = buffer.toString();
var linesArray = bufferString.split('\n');
var newLines = linesArray.length -1;
console.log(newLines);

/**
 * Official solution and a note about converting a nuffer toString with utf8
 */

/**
 * var fs = require('')
 * var contents = fs.readFileSync(process.argv[2])
 * var lines = contents.toString().split('\n').length -1;
 * console.log(lines)l
 *
 * by avoiding the toString
 * fs.readFileSync(process.argv[2], 'utf8').split('n').length - 1;
 */
