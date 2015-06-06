/**
 * Created by john on 6/2/15.
 */

function countWords(inputWords) {
 return inputWords.reduce(function(wc, pr){
    // 1. initialise the object with the first word and initialise or add to
    // other
    wc[pr] = ++wc[pr] || 1;
    return wc
  }, {});
}

module.exports = countWords;