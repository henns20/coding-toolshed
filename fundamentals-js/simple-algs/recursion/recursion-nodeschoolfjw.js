//recusrsion reduce  nodeschool fjw

function recurReduce(arr) {
  if (!arr.length) return wordMap;
  var wordMap = {};
  wordMap = ++wordMap[arr[0]] || 1; 
  var tail = arr.slice[1];
  recurReduce(tail);
} 







function recursionReduce() {
	if (!array.length) return wordMap;
	var wordMap = {};
	wordMap[array[0]] = ++wordMap[arr[0]] || 1; 
	var tail = arr.slice(1);
	recursionReduce(tail); 
}



//Pseodocode novice or more literal logic.

//1 script that takes an array 
//2 takes out the 1st value in an array
//3 adds it to an object as property with a value of 1 which is meant to keep the # of times the word appears in the array.  
//4 takes out that value leaving the remainder values in the array 
//5 uses the new array and runs through the script again. 
//6 takes that new array and  and runs it through the same script saving the next value to the same object in the same way - if the value already exists as a property then it adds 1 to the current property value. 
//7 


// //1st pc
// // main parts 

// IF array empty return value
// Declare wordmap an obj

// evaluate if wordmap obj has 1st array value as property. 
// If exists add a number to that property value 
// If it does not exist - inistatiate the array value as an wordmap obj properpty
// and give it a value of 1.  


