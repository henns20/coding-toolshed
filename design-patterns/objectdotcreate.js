/* 
THIS IS ALSO A EXECISE ON CLARIFYING PROTOTYPES REALTIVE TO MAXIMIZING YOUR USE OF THEM AND KNOWING GOOD AND BAD PATTERNS OF THE THEM***

the difference between Object.create vs new Object

Mdn says: 
var newObject = Object.create( someObject.prototype ) is equivalent to 
var newObject = new ConstructorObject();  

RESOURCES BEYOND MDN 
http://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html
The object.create Douglas Crockford info.  And the using of no this 
https://youtu.be/PSGEjv3Tqo0?t=335
http://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/

#1 takeaway 
In this pattern...
the constructor properties are not passed to the new objects 
just the prototype stuff 

why or when this is best - i can't envision yet - but seemingly it is important.

*/




function Car(desc) {
	this.color = "red";
	this.desc = desc;
}

Car.prototype.getInfo = function() {
	console.log(this.color + ' and ' + this.desc);
}
Car.prototype.sayVrum = function() {
	console.log('Vrummmmm');
}

var redCar = new Car('this is now the redCar');

// redCar.sunroof = "yes";
redCar.color = "blue";
redCar.getInfo();
// redCar.sayHellow = function() {
// 	console.log('Hello!');
// }



// var redCar = Object.create(Car.prototype);
var a = Object.getOwnPropertyNames(redCar);
var b = Object.keys(redCar);
var c = Object.getPrototypeOf(redCar);


console.log(a);
console.log(b);
console.log(c);

