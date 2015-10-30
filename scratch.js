//count to 10 with recursion 2 ways 
//1. with and if 


// function countDownIf10(num) {
//   if(num < 0) {
//     console.log('done');
//     return; 
//   }
//   console.log(num);
//   countDownIf10(num - 1);
// }

// countDownIf10(12);


function countDownWhile(num) {
  while (num > -1) {
    console.log(num);
    return countDownWhile(num - 1);   
  }
  
}

countDownWhile(12);

 