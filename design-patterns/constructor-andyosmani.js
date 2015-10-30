/* file is names after andy osmani - bc - I am only noting his view on a fundamental thing and making it in the context of the pattern discussion as a whole - by putting it in his book  about patterns 

1. in classical oop: constructor is special method used to initialize a newly created object once memory has been alocated for it. 
2. Object constructors used to create specific types of objects - which: 
	both prepares the object for use 
	and - accepting arguments which a constructor can use to set the values fo member properties and methos when the object is first created. 

3. Object Creation section
	3 common ways:
		1. var newObject = {};
		2. var newObject = Object.create( Object.prototype );
		3. var newObject = new Object(); 

4. 4 ways to set and get key values 
	Object.defineProperty & Object.defineProperties   is a new one for me as of ECMAScript 5

*/

var person = Object.create( Object.prototype ); 
console.log(person); 



Object.defineProperty