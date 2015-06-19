/**
 * Created by john on 6/12/15.
 * Stream Adventure: Http-Client ex
 * Task: send an Http Post request to http://localhost:8099 and pipe process.stdin
 * into it. Pipe the response stream to process.stdout.
 *
 * Here is an example of how to use the `request` module to send a POST request,
 * piping the result to stdout:
 *
 *  var request = require('request');
 *  var r = request.post('http://beep.boop:80/'):
 *
 *  The `r` object that you get back from `request.post()` is a readable-writable
 *  stream so you can pipe a readable stream into it (`src.pipe(r)`) and you can
 *  pipe it to a writable stream (`r.pipe(dst)`).
 *
 *  You can eve chain both steps together: src.pipe(r).pipe(dst);
 *
 *  ##Hint: for your code, src will be process.stdin and dst will be process.stdout.
 *
 *  Make sure to `npm install request` in the directory where your solution file lives.
 *
 */

var request = require('request');
var r = request.post('http://localhost:8099');

process.stdin.pipe(r).pipe(process.stdout);


