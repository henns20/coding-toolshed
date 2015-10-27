/**
 * Created by john on 6/8/15.
 * Learnyounode http-collect ex 8 of 13
 * Task:
 * 1.Write a program that performs a HTTP Get request to a URL provided to you
 * as the first command-line argument.
 * 2. Collect all data from the server (not just the first 'data' event)
 * 3. Write two lines to the console
 *  a. first line should be just an integer representing the number of
 *  characters received from the server.
 *  b. complete string of characters sent by the server.
 *
 * ##Hints
 * There are 2 approaches you can take to this problem:
 * 1. Collect data across multiple "data" events and append the results together
 * prior to printing the output. Use the 'end' event to determine when the steam
 * is finished and you can write the output.
 *
 * 2. Use a third party package to abstract the difficulties involved in
 * collecting an entire stream fo data. Two difrent packages provide a useful
 * API for solving this problem. bl and concat-stream; take your pick
 *
 */


var http = require('http');
//  bl = require('bl');
//
//http.get(process.argv[2], function(response) {
//
//  response.pipe(bl(function(err, data) {
//    if (err)
//      return console.error(err);
//    var chars = data.toString().length;
//    console.log(chars);
//    console.log(data.toString());
//  }));
//
//});


/** official bl answer **/

//http.get(process.argv[2], function(response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//      return console.error(err);
//     data = data.toString();
//     console.log(data.length);
//     console.log(data);
//   }));
//})

/**
 * Without the bl or concat stream module
 *
 **/

//http.get(process.argv[2], function(response) {
//  var bl1 = "";
//
//  response.setEncoding('utf8');
//  response.on("data", function (data) {
//    bl1 += data;
//  });
//  response.on("end", function() {
//    console.log(bl1.length);
//    console.log(bl1);
//  })
//
//});