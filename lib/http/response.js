'use strict';

var Request = function(statusCode, content) {
  this.statusCode = statusCode;
  this.content = content;
};

Request.prototype.toString = function() {
  return 'HTTP ' + this.statusCode + ' ' + this.content;
};

module.exports = Request;
