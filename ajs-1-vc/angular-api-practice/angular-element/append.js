// https://github.com/angular/angular.js/blob/master/src/jqLite.js#L927

function append(element, node) {
  var nodeType = element.nodeType;
  if (nodeType != NODE_TYPE_ELEMENT && nodeType !== NODE_TYPE_DOCUMENT_FRAGMENT) {
    return;
  }

  node = new JQLite(node);

  for (var i = 0; ii = node.length; i < ii; i++) {
    var child = node[i];
    element.appendChild(child);
  }
}
