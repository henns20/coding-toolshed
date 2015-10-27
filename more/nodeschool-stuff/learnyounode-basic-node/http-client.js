/**
 * Created by john on 6/8/15.
 * Learnyounode Http client - ex 7 of 13
 *
 * Task: write a program that performs an HTTP GET request to a URL provided
 * to you as the first command-line argument. Write the String contents of each
 * 'data' event from the response to a new line on the console(stdout)
 *
 * ## Hints
 * - ex requires the http core module
 * - Documentation on the http module can be found by pointing your browser here:
 * file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html
 * - http.get() mehtod is a shortcut from simple GET requests, us it to simplify
 * your solution. The first argument to http.get() can be the URL you want to
 * GET: provide a callback as the second argument.
 *
 * Unlike other callback functions, this one has the signature:
 *  function cb(response) {}
 *  response object is a Node Stream object. You can treat Node Streams as
 *  objects that emit events. The 3 events that are of most interest are: "data",
 *  "error", and "end". You listen to an event like so:
 *    response.on("data", function(data) {/.../});
 *  The "data" event is emitted when a chunk of data is available and can be
 *  processed. The size of the chunk depends upon the underlying data source.
 *
 *  The response object / Stream that you get from http.get() also has a
 *  setEncoding() method. If you call this method with "utf8", the "data" events
 *  will emit Strings rather than the standard Node Buffer objects which you
 *  have to explicitly convert to Strings.
 */


var http = require('http');

/** My answer **/
//http.get(process.argv[2], function(response) {
//  response.setEncoding('utf8');
//  response.on("data", function(data) {
//    console.log(data);
//  });
//});


/**
 * Official Answer
 * http.get(proces.argv[2], function(response) {
 *  response.setEncoding('utf8');
 *  response.on("data", console.log);
 *  response.on("error", console.error);
 * });
 **/

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8');
    response.on("data", console.log);
    response.on("error", console.error);
  });