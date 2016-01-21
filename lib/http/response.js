'use strict';

var Response = function(statusCode, content) {
  this.statusCode = statusCode;
  this.body = body;
};

Response.prototype.toString = function() {
  return 'HTTP ' + this.statusCode + ' ' + this.body;
};

module.exports = Response;
