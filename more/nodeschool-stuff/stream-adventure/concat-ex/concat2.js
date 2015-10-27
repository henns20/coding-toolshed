 /**
 * Created by john on 6/11/15.
 */
 var concat = require('concat-stream');

 var write = concat(function(data) {console.log(data)});
 write.write('a');
 write.write('b');
 write.end();
