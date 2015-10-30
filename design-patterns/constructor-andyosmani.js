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

4. 4 ways to set and get key values  the 1st 2 were the way i know the dot syntax and the square bracket syntax
	Object.defineProperty & Object.defineProperties   is a new one for me as of ECMAScript 5

	3. Object.defineProperty( newObjext, "someKey", {
		value: "for more control of the property's behavior",
		writable: true,
		enumerable: true,
		configurable: true
	});

	// if the above feels a little difficult to read, a short-hhand could b wirtten as follows: 
		var defineProp = function ( obj, key, value ) {
			... // rest used in the below example			
		}

*/



var person = Object.create( Object.prototype ); 
console.log(person); 

var defineProp = function( obj, key, value ) {
	var config = {
		value: value, 
		writable: true,
		enumerable: true,
		configurable: true

	};
	Object.defineProperty( obj, key, config );
};

defineProp( person, "car", "Delorean" );
defineProp( person, "dateOfBirth", "1976" );
defineProp( person, "hasBeard", true );
console.log(person);
defineProp( person, "name", "Jamie");
console.log(person);



Object.defineProperty