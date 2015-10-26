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


*/