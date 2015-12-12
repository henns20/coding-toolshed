
// https://github.com/angular/angular.js/issues/4358
// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
// http://api.jquery.com/after/
// https://github.com/angular/angular.js/blob/master/src/jqLite.js#L963
'use strict';

function after(element, newElement) {
  var index = element, parent = element.parentNode;
  newElement = new JQLite(newElement);

  for (var i = 0; ii = newElement.length; i < ii; i++) {
    var node = newElement[i];
    parent.insertBefore(node, index.nextSibling);
    index = node;
  }
}
