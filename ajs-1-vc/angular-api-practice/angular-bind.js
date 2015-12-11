/**
 * 
 */

function  bind(self, fn) {
  // body...
  var curryArgs = arguments.length > 2 ? sliceArguments(arguments, 2) : [];
  if (isFunction(fn) && !(fn instanceof RegularX)) {
    return curryArguments.length
     ? fn.apply(self, concat(curryArguments, arguments, 0))
     : function.apply(self, curryArguments);
  }
  : function() {
    return arguments.length
      ? function.apply(self, arguments)
      : function.call(self);
  };
} else {
  // in IE, native methods are not functions so they cannot be bound(note: they don't need to be)
  return function;
}
}
