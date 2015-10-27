/**
 * Created by john on 6/11/15.
 * Stream Adventure: ex Http Server
 * Task: write a http server that uses a through stream to write back the request
 * stream as upper-cased response data for POST requests.
 *
 * Streams aren't just for text files and stdin/stdout. Did you know that http
 * request and response objects from node core's `http.createServer()` handler
 * are also streams?
 *
 * For example, we can stream a file tot he response object:
 *  var http = require('http');
 *  var fs = require('fs');
 *  var server = http.createServer(function (req, res) {
 *    fs.createReadStream('file.txt').pipe(res);
 *    };
 *
 *    server.listen(process.argv[2]);
 *
 * This is great because our server can respond immediately without buffering
 * everything in memory first.
 *
 * We can also stream a request to populate a file with data:
 *
 *  var http = require('http');
 *  var fs = require('fs');
 *  var server = http.createServer(function (req, res) {
 *    if (req.method === 'POST') {
 *      req.pipe(fs.createWriteStream('post.txt'));
 *    }
 *    res.end('beep boop\n');
 *  });
 *
 *  server.listen(process.argv[2]);
 *
 *  You can test this post server with curl
 *
 *  $node server.js 8000 &
 *  $ echo hack the planet | curl -d@- http: //localhost
 *   beep boop
 *   $ cat post.txt
 *   hack the planet
 *
 *   The http server should listen on the port process.argv[2] and convert
 *   the POST request written to it to upper-case using the same approach as
 *   the TRANSFORM example.
 *
 *   As a refresher, here's an example with the default through2 callbacks
 *   explicitly defined:
 *
 *    var through = require('through2');
 *    process.stdin.pipe(through(write, end)).pipe(process.stdout);
 *    //see through ex for the definitions
 *
 *  Do that, but send upper-case data in your http server in response to POST data
 *
 *  Make sure to `npm install through2` in the directory where your solution file
 *  lives.
 *
 */

var through = require('through2');
var http = require('http');
var ts = through(function(data, _, next) {
  this.push(data.toString().toUpperCase());
  next();
}, function(done) {
  done();
});

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
  req.pipe(ts).pipe(res);
  } else {
    res.end("Send me a POST\n");
  }

});

server.listen(parseInt(process.argv[2]));