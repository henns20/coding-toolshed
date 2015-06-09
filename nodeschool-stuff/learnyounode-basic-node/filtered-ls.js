/**
 * Created by john on 6/7/15.
 * Filtered LS - exercise 5 of 13
 * Task: Create a program that prints a list of files in a given directory,
 * filtered by the extension of the files. You will be provided a directory
 * name as the first argument to your program and a file extension to filter
 * by as the second argument.
 *
 * For example, if you get 'txt' as the second argument then you will need to
 * filter the list to only files that end with .txt. Note that second argument
 * will not come prefixed with a '.'
 *
 * The list of files should be printed to the console, on file per line. You
 * must use asynchronous I/O.
 *
 * ##Hints
 * The fs.readdir() method takes a pathname as its first argument and a callback
 * as its second. The callback signature is:
 *     function callback (err, list) {}
 *     a. list is an array of filename strings.
 *     b. path module helpful, particularly the extname method.
 */


var fs = require('fs'),
  path = require('path'),
  dirPath = process.argv[2],
  dirExt = '.' + process.argv[3];

//get the array list back
fs.readdir(dirPath, function(err, list) {
  var newList = list.filter(function(file) {
    return dirExt === path.extname(file);
  });

  newList.forEach(function(filename) {
    console.log(filename);
  });

});

/**
 * var fs = require('fs')
 * var path = require('path')
 *
 * fs.readdir(process.argv[2], function (err, list) {
 *  list.forEach(function (file) {
 *    if(path.extname(file) === '.' + process.argv[3]) {
 *      console.log(file)
 *    }
 *  })
 * })
 *
 */
