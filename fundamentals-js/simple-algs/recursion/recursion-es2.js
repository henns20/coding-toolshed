// write a recursion script
// count down from 10 to 1

function myRecursionFunction(number) {
  if (number === 0) return;
  console.log(number);
  myRecursionFunction(number - 1);
}

myRecursionFunction(10);
