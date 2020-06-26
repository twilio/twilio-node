'use strict';

var Response = function(statusCode, body, headers) {
  this.statusCode = statusCode;
  this.body = body;
  this.headers = headers;
};

Response.prototype.toString = function() {
  return 'HTTP ' + this.statusCode + ' ' + this.body;
};

module.exports = Response;
