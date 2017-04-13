'use strict';

var _ = require('lodash');
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
  var headers = opts.headers || {};
  if (opts.username && opts.password) {
    var b64Auth = new Buffer(opts.username + ':' + opts.password).toString('base64');
    headers.Authorization = 'Basic ' + b64Auth;
  }

  var options = {
    timeout: opts.timeout || 30000,
    followRedirect: opts.allowRedirects || false,
    url: opts.uri,
    method: opts.method,
    headers: opts.headers
  };

  if (!_.isNull(opts.data)) {
    options.formData = opts.data;
  }

  if (!_.isNull(opts.params)) {
    options.qs = opts.params;
    options.useQuerystring = true;
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
