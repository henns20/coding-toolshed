/* Standard module pattern 

List features of the module pattern from andy osmani's and todd motto

Key reason for modules in Js:

1. keep the units of code foa project both cleanly separated and organized

Implementing modules in JS
1. Module pattern
2. Object literal notation
3. AMD module
4. CommonJD Modules
5. ECMAScript Harmony modules

1. Module pattern over & Object literal 
	- its still uses object literals but only as the return value from a scoping function

2. Why Module pattern 
	- encampsulates public and private 
	- emulates the concept of classes - shielding certain parts from the global scope. Less conflict

	Privacy 
	-Module pattern encapsulates privacy, state, organization using closures. 
	- Only the public Api is returned
	- Similar to IIFE - except and object is returned rather than a function
	- function scope simulates - access modifiers private and public

3. Basic template 
	-... 
	- leaving blank for Dry
	- although I would not that he does use an anonyous return object

4. Import mixins
	- uses JQ, and Underscore to illustrate
	- think the most clear and meaningful line is 
	- 'variation of the pattern demonstrates how globals( ie jQuery, Underscore - can be passed in as arguments to our module's anonymous function. This effectibely allos us to import them and locally alias them as we wish' 
		- illustrates the jQuery pattern we see so often

5. Exports
	- var module = {}
	module.publicProperty...
	...
	return module; 

6. YUI vs jQuery 
	- YUI the namespace technique 
	- Y.namespace( "store.basket" ) ;
	- Y.store.basket = (function () { ... return { and write out there full public method here} }) ();  

	jQuery 
	- the example he uses is not about jQuery - it talks about the use of a library funtion and init. 
	- not a clear example - will move on 
	- my experience looking at jQuery is that it uses the IIFE* (returning an object) and will namespace it like var jQuery = (function(){})();
 
7. Advantages and disadvantages to the module pattern: 
	ads: lot cleaner for people from the OOP world ; supports private data - so public parts of our code are able to touch the private parts, - but the outside world is unable to touch the class's private parts. 
	
	diads: separation or access to privat members and public is different - for visibility?* 'so you need to make changes to each place the member was used.' 2. also can't access private members in methods that are added to the object at a later point. 3. inability to create automated unit tests for private members and additional complexity when bugs require hot fixes. Not possible to patch privates. Instead one mucst override all public methods which interact with the buggy privates. Privates can't be extended. 
*/




