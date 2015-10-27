/**
 * Created by john on 6/8/15.
 * Learnyounode ex 6 of 13
 * Task: Similar to filtered list ex - but introduces modules.
 * You will need to create 2 files to solve.
 *
 * Create a program that prints a list of files in a given directory, filtered by the extension of the files.
 * 1st arg is the directory name and the 2nd argument is the ext filter.
 * Print the list of files - on file per line - to the console. Must use asynchronous i/o
 *
 * You must write a module file to do most of the work. The module must export
 * a single function that takes 3 arguments: the directory name, the filename
 * extension string and a callback function, in that order. The filename extension
 * argument must be the same as what was passed to your program. Don't turn it
 * into a RegExp or prefix with '.' or do anything except pass it to your module
 * where you can do what you need to make your filter work.
 *
 * The callback function must be called using the idiomatic node(err, data) convention
 * The convention stipulates that unless there's an error, the 1st arg padded to the
 * callback will be null, and the second will your data. In this ex, the data will be
 * your filtered list of files, as an Array. If you receive an error, e.g from your
 * call to fs.readdir(), the callback must be called with the error, and only the error,
 * as the first argument.
 *
 * You must not print directly to the console from your module file, only from your
 * original program.
 *
 * In the case of an error bubbling up to your original program file, simply check
 * for it and print an informative message to the console.
 *
 * These four things are the contract that your module must follow.
 *
 * - Export a single function that takes exactly the arguments described
 * - Call the callback exactly once with an error or some data as described.
 * - Don't change anything else, like global variables or stdout.
 * - Handle all the errors that may occur and pass them to the callback
 *
 * The benefit of having a contract is that your module can be used by anyone who expects
 * thia contract. So your module could be used by anyone else who does learnyounode,
 * or the verifier, and just work.
 *
 * ## Hints
 * - create a new module - by creating a new file - that just contains your
 * directory reading and filtering function. To define a single function export
 * you assign your function to the module.exports object, overwriting what is
 * already there:
 *    module.exports = function(args) {}
 *
 * Or you can use a nameed function and assign the name.
 *
 * To use your new module in your original program file, use require() call in the same
 * way that you require('fs') to load fs module. The only difference is that for local modules
 * must be prefixed with './'. So, if your file is names mymodule.js then:
 *
 *  var mymodule = require('./mymodule.js')
 *
 *  The '.js' is optional here and will often see it omitted
 *
 *  You now have the module.exports object in your module assigned to the mymodule
 *  variable. Since you are exporting a single function,
 *  my module is a function you can call.
 *
 *  - Keep in mind that it is idiomatic to check for errors and do early-returns
 *  within callback functions
 *
 *    function bar(cb) {
 *      foo(function (err, data) {
 *        if(err)
 *          return callback(err) //early return
 *
 *          // .. no error, continue doing cool things with `data`
 *          // all went well, call callback with `null` for the error argument
 *
 *          callback(null, data)
 *      })
 *    }
 */


var mymodule = require('./my-module'),
  dirname1 = process.argv[2],
  fileExt1 = process.argv[3];


mymodule(dirname1, fileExt1, function(err, data) {
  if (err)
    return console.error('There was an error' + err)

  data.forEach(function(file) {
    console.log(file);
  });
});