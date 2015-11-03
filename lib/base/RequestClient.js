'use strict';

var http = require('request');
var Q = require('q');

var RequestClient = function(){};

RequestClient.prototype.request = function(method, url, params, data, headers, auth, timeout, allowRedirects) {
  var deferred = Q.defer();
  var options = {
    timeout: timeout || 1000,
    followRedirect: allowRedirects || false,
    auth: {
      username: auth[0],
      pass: auth[1]
    },
    url: url,
    method: method,
    headers: headers
  };

  if (data != null) {
    options.formData = data;
  }

  if (params != null) {
    options.qs = params;
  }

  http(options, function(err, response, body) {
    if (error) {
      deffered.reject(error);
    } else {
      deferred.resolve(JSON.parse(body));
    }
  });

  return deferred.promise;
}

module.exports = RequestClient;
