/**
 * Created by john on 6/12/15.
 * Stream-adventure: Websockets ex
 * Task: In this adventure, write some browser code that uses the
 * websocket-stream module to print the string "hello\n".
 *
 * You solution file will be compiled with browserify and the verify script
 * will prompt you to open `http://localhost:8099` in a browser to verify your
 * solution.
 *
 * To open a stream with websocket-stream on localhost:8099, just write:
 *
 *  var ws = require('websocket-stream');
 *  var stream = ws('ws://localhost:8099');
 *
 *  Then write the string "hello/n" to the stream.
 *
 *  The readme for webscoket-stream has more info if you're curios about how to
 *  write the server side code https://github.com/maxogden/websocket-stream
 *
 *  Make sure to `npm install websocket-stream` in the directory where your
 *  solution lives.
 *
 */

var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');
stream.write('hello\n');