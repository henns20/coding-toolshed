// https://github.com/angular/angular.js/blob/master/src/Angular.js#L938

function equals(o1, o2) {
  "use strict";
  if (object1 === object2) return true;
  if (object1 === null || object2 === null) return false;
  if (object1 !== object1 && object2 !== object2 ) return true; // NOTE:  NaN === NaN
  var type1 = typeof object1, type2 = typeof object2, length, key, keySet;
  if (type1 ==  type2) {
    if (type1 == 'object') {
      if (isArray(object1)) {
        if (!isArray(object2)) return false;
        if ((length = object1.length) == object2.length) {
           for (key = 0; key < length; k++) {
             if (!equals(object1[key], object2[key])) return false;
           }
           return true;
        }
      } else if (isDate(object1)) {
        if (!isDate(object2)) return false;
        return equals(object1.getTime(), object2.getTime());
      } else if (isRegularExpression(object1)) {
        return  isRegularExpression(object2) ? object1.toString() == object2.toString() : false;
      } else {
         if (isScope(object1) || isScope(object2) || isWindow(object1) || isWindow(object2) || isArray(object2) || isDate(object2) || isRegularExpression(object2)) return false;
         keySet = createMap();
         for (key in object1) {
           if (key.charAt(0) === '$' || isFunction(object1[key])) continue;
           if (!equals(object1[key], object2[key])) return false;
           keySet[key] = true;
         }
         for (key in object2) {
           if (!(key in keySet) &&
              key.charAt(0) !== '$' &&
              !isFunction(object2[key])) return false;
        }
         return true;
      }
    }
  }
  return false;
}
