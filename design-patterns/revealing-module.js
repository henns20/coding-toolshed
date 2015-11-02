/* Originated when Heilmann - 

	1. All Functions and variables all Defined in the private scope and use pointers to the private functionality that we want to make public. 
		- heilmann disliked 
			islike the requiremen of the Module pattern habing to switch to object literal notation for thigns he wished to make public. 
	2. Returns an anonymous object so don't have to the extra prefix.
		
		reasons:
		didn't want to have to repeatedly call the name of the main object when we wanted to call one public 
	method from another and public variables. 
		* best described by Todd Motto - in how he points out the idea of Locally scoped Object Literal - represented by 
			* var myObject = {};
			* ...
			* return myObject 

			and so...
			Module.myObject.somePublicFunction()

Andy osmani 
http://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript

Tod motto 
http://toddmotto.com/mastering-the-module-pattern/


*/


(function() {



var somePrivateVariable = 4;
var somePublicVariable = 2;

function somePrivateFunction(a, b) {
	return a + b;
}

function somePublicFunction() {
	somePrivateFunction();
}


	return {
		somePublicFunction: somePublicFunction,
		somePublicVariable: somePublicVariable
	}

})();






 