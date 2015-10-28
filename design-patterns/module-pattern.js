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

*/




