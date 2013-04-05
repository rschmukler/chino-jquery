var jQuery = require('jquery');

var plugin = module.exports = function(Chino) {
  if(Chino.isBrowser) {
    Chino.View.engine = jQuery;
  }
};

plugin.jQuery = jQuery;
