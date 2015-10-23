require('babel/register');

var api = require('./api');
var front = require('./front');


api.run();
front.run();
