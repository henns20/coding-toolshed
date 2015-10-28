/* Originated when Heilmann - 
	1. didn't want to have to repeatedly call the name of the main object when we wanted to call one public 
	method from another and public variables. 
		* best described by Todd Motto - in how he points out the idea of Locally scoped Object Literal - represented by 
			* var myObject = {};
			* ...
			* return myObject 

			and so...
			Module.myObject.somePublicFunction()


	2. dislike the requiremen of the Module pattern habing to switch to object literal notation for thigns he wished to make public. 

Andy osmani 
http://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript

Tod motto 
http://toddmotto.com/mastering-the-module-pattern/


*/


/* try without looking at the resources to mimic the reveal pattern 
requirements: write an example of a reveal pattern

1. first to do that write the structure of a standard module pattern... no? Or, Immediately Invoked Function Execution

2. Typical of a reveal is the return of an anonymous object*  - Instead of a locally scoped object literal 

3. public and private methods and data are both named and written outside of the returned object. References to the the public data is made in the returned objec

*/

// 1 

(function() {

//2. 

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






 