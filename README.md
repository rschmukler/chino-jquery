# chino-jquery

Plugin for chino to use jQuery instead of [component/dom](http://github.com/component/dom). This only effects the client side of chino.


# Usage

    var Chino = require('chino');
    var chinoJquery = require('chino-jquery');

    Chino.use(chinoJquery);


# Getting jQuery

You can access jQuery directly through the plugin as well.

    var jQuery = require('chino-jquery').jQuery;
