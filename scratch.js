//  write a script a  that returns a random integer[0]
// random integer should be between[1] and including[2] a specified  min  & max numbers


function getRandomIntegerInclusive(min, max) {
  // [0] Math.floor; [1] max - min, + min; [2] + 1
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomIntegerInclusive(1, 5));
