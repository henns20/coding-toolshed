//recusrsion reduce  nodeschool fjw

function recurReduce(arr) {
  if (!arr.length) return wordMap;
  var wordMap = {};
  wordMap = ++wordMap[arr[0]] || 1; 
  var tail = arr.slice[1];
  recurReduce(tail);
} 





//1st pc
// main parts 

IF array empty return value
Declare wordmap an obj

evaluate if wordmap obj has 1st array value as property. 
If exists add a number to that property value 
If it does not exist - inistatiate the array value as an wordmap obj properpty
and give it a value of 1.  

