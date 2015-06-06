var traceur = require('traceur/app/node/traceur.js');

module.exports = {

  traceurOptions: function traceurOptions() {
    return traceur.options;
  },

  // We have to jump through some syntactic hoops to get classes out of
  // Traceur for use in ES5 node apps
  getClass: function(id, path) {
    path = System.map.traceur + (path || ('/app/syntax/' + id));
    var factory = function() {
      return System.get(path)[id];
    };
    factory.name = id;
    return factory;
  }
};
