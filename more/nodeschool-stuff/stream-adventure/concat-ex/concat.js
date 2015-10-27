/**
 * Created by john on 6/11/15.
 * Stream Adventure: Concat ex
 * Task: You will be given text on process.stdin. Buffer the text and reverse it
 * using the concat-stream module before writing it to stdout.
 *
 * concat is a write stream that you can pass a callback to get the complete
 * contents of a stream as a single buffer. Here's an example that uses concat
 * to buffer POST content in order to JSON.parse() the submitted data:
 *  var concat = require('concat-stream');
 *  var http = require('http');
 *
 *  var server = http.createServer(function (req, res) {
 *    if (req.method == 'POST') {
 *      req.pipe(concat(function (body) {
 *        var obj = JSON.parse(body);
 *        res.end(Object.keys(obj).join('\n'));
 *      }));
 *     }
 *      else res.end();
 *    });
 *    server.listen(5000);
 *
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
 *  Object.keys
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 *
 *  In your adventure you'll only need to buffer input with 'concat()' from process.stdin.
 *
 *  Make sure to `npm install concat-stream` in the directory where your solution file is located
 *
 */

var concat = require('concat-stream');

//process.stdin.pipe(concat(function(text) {
//  var buffer = text.split('').reverse().join('');
//})).pipe(process.stdout);

process.stdin.pipe(concat(function (src) {
  var s = src.toString().split('').reverse().join('');
  console.log(s);
  // this workd as well
  console.log(src.toString().split('').reverse().join(''));
}));

// see this concat-stream simply does not return a readable stream
//https://github.com/nodeschool/discussions/issues/90