/**
 * Created by john on 5/29/15.
 * Basic Filter
 */

// 1. array of objs with message properties
// 2. returns an array of messages that are les than 50 chars long

function lessThan50(m) {
  return m.message.length < 50;
}

function getShortMessages(messages) {
  return messages.filter(lessThan50).map(function(obj) {
    return obj.message;
  });
}



//function getShortMessages(messages) {
//  return messages.filter(function(msg) {
//    return msg.message;
//  }).filter(function(m) {
//    if (m.length < 50) return m;
//  });
//}

module.exports = getShortMessages;