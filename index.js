var jQuery = require('jquery');

module.exports = function(Chino) {
  if(Chino.isBrowser) {
    Chino.View.engine = jQuery;
  }
};

exports.jQuery = jQuery;
