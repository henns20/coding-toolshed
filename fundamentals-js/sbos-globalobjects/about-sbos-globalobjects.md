## Intro

This chapter(part of the documentation) documents all of javascript's standard, built in objects, including their methods and properties.

The term "global objects" (or standard built in objects) is not to be confused with the *global object*.

global objects, here refer to objects in the global scope (but only if  ES5 strict mode is not used, in that case it returns undefined). The global object itself can be accessed using that this operator in the global scope. In fact, the global scope consists of properties of the global object, and including inherited properties, if any.

## jq
the point-"only if ES5 strict mode is not used, in that case returns undefined" that doesn't make sense to me in this context.  for example an object in this category would be Array - I read that as you can use something like  Array.isArray() inside of strict mode.

```
var myArray = [1, 2, 3];

function isArrayCheck(a) {
  'use strict';
  if (Array.isArray(a)) console.log("This should not work");
}

isArrayCheck(myArray);
```
