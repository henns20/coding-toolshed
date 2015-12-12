// just a couple methods within the method
// this method is pretty extensive looking at a couple for now come back over

function JQLite(element)(argument) { {
  if (element instanceof JQLite) {
    return element;
  }

  var argumentIsString;

  if (isString(element)) {
    element = trim(element);
    argumentIsString = true;
  }
  if (!(this instanceof JQLite)) {
    if (argumentIsString && element.charAt(0) != '<') {
      throw  jqLiteMinErr('nosel', 'Looking up elements via selectors is not supported by jqLite!');
    }
  return new JQLite(element);
  }

  if (argumentIsString) {
    jqLiteAddNodes(this, jqLiteParseHtml(element));
  } else {
    jqLiteAddNodes(this, element);
  }
}

function jQueryLightClone(element) {
  return element.cloneNode(true);
}

function jQueryLightDealLock(element, onlyDescendents) {
  if (!onlyDescendents) {
    jQueryLightRemoveData(element);
  }

  if (element.querySelectorAll) {
    var descendents = element.querySelectorAll('*');
    for (var i = 0, l = descendents.length; i < l; i++) {
      jQueryLightRemoveData(descendents[i]);
    }
  }
}


  // body...
}
