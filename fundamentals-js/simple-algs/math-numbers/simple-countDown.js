/* Includes a coupele simple
 countDowns using recursion
*/


'use-strict';

countDown2(10);
countDown3(11);


function countDown2(val) {
  if (val <= 0) {
    console.log('And the last number ' + '.');
    return val;
  } else {
    console.log(val);
    return countDown2(val -1);
  }
}



function countDown3(val) {
  while(val > 0) {
    console.log(val);
    return countDown3(val - 1);
  }
  console.log('All done');
  return;
}
