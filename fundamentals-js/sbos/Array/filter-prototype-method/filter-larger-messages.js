// filter method - in javascript reference; standard built-in objects; array; array.prototype.filter()
// array.filter(callback[, thisArgument])
//  the filter method creates a new array with all elements that pass the test implemented by the provided function

// requirements: using the array filter to test an array of message objects and filter out messages with the length longer than 10 characters

var messageArray = [
  {
    number: 1,
    message: "some words some words some words some words some words some words some words"
  },
  {
    number: 2,
    message: "some words"
  },
  {
    number: 3,
    message: "some "
  }
];

function largerMessages(m) {
  console.log(m.message.length);
  return m.message.length > 10;
}

var filterMessages = messageArray.filter(largerMessages);
console.log(filterMessages);

// nodeschool ads in the map method to create a new array with just the message not the object
function getLongerMessages(messages) {
  return messages.filter(largerMessages).map(function (obj) {
    return obj.message;
  });
}

var messagesOnly = getLongerMessages(messageArray);
console.log(messagesOnly);
