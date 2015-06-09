/**
 * Created by john on 6/8/15.
 */
var fs = require('fs');
var path = require('path');

module.exports = function(dirName, fileExt, cb) {
  fs.readdir(dirName, function(err, data) {
    if (err)
      return cb(err);

    var newData = data.filter(function(file) {
      return path.extname(file) === '.' + fileExt;
    });

    cb(null, newData);
  })
};
