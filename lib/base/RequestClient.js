'use strict';

var http = require('request');
var Q = require('q');

var RequestClient = function() {};

/**
 * Make http request
 * @param {object} opts - The options argument
 * @param {string} opts.method - The http method
 * @param {string} opts.uri - The request uri
 * @param {string} [opts.username] - The username used for auth
 * @param {string} [opts.password] - The password used for auth
 * @param {object} [opts.headers] - The request headers
 * @param {object} [opts.params] - The request params
 * @param {object} [opts.data] - The request data
 * @param {int} [opts.timeout=30000] - The request timeout in milliseconds
 * @param {boolean} [opts.allowRedirects] - Should the client follow redirects
 */
RequestClient.prototype.request = function(opts) {
  opts = opts || {};
  if (!opts.method) {
    throw new Error('http method is required');
  }

  if (!opts.uri) {
    throw new Error('uri is required');
  }

  var deferred = Q.defer();
  var options = {
    timeout: opts.timeout || 30000,
    followRedirect: opts.allowRedirects || false,
    url: opts.uri,
    method: opts.method,
    headers: opts.headers,
  };

  if (opts.username) {
    options.auth = {
      user: opts.username,
      pass: opts.password,
    };
  }

  if (opts.data != null) {
    options.formData = opts.data;
  }

  if (opts.params != null) {
    options.qs = opts.params;
  }

  http(options, function(error, response) {
    if (error) {
      deferred.reject(error);
    } else {
      deferred.resolve({
        statusCode: response.statusCode,
        body: response.body,
      });
    }
  });

  return deferred.promise;
};

module.exports = RequestClient;
