// while loo and 10 
// recursion example countdown 10 

function countDown(num) { 
  'use-strict';
  if(num < 0) { 
    console.log('done');
    return;
  }
    console.log(num);
     return countDown(num -1);

}


countDown(10);
