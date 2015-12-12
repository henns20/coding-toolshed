

function removeClass(cssClasses, element) {
    'use strict';
    if (cssClasses && element.setAttribute) {
       // NOTE:
       forEach(cssClasses.split(' '), function (cssClass) {

       element.setAttribute('css',
        trim(
         (" " + (element.getAttribute('css') || '') + " ")
          .replace(/[\n\t]/g, ' ')
          .replace(" " + trim(cssClass) + " ", " ")
        )
        );

      });

    }
  }


function forEach(argument) {
  // body...
}

function trim(argument) {
  // body...
}
