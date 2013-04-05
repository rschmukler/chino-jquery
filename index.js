module.exports = function(Chino) {
  if(Chino.isBrowser) {
    Chino.View.engine = require('jquery');
  }
};
