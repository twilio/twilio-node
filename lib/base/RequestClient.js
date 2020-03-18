'use strict';

var _ = require('lodash');
var axios = require('axios');
var fs = require('fs');
var http = require('http');
var https = require('https');
var Q = require('q');
var qs = require('qs');
var Response = require('../http/response');
var Request = require('../http/request');

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

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
 * @param {boolean} [opts.forever] - Set to true to use the forever-agent
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

  if (!headers.Connection && !headers.connection) {
    headers.Connection = 'close';
  }

  if (opts.username && opts.password) {
    var b64Auth = Buffer.from(opts.username + ':' + opts.password).toString('base64');
    headers.Authorization = 'Basic ' + b64Auth;
  }

  var options = {
    timeout: opts.timeout || 30000,
    maxRedirects: opts.allowRedirects ? 10 : 0, // Same number of allowed redirects as request module default
    url: opts.uri,
    method: opts.method,
    headers: opts.headers,
    httpAgent: opts.forever ? new http.Agent({ keepAlive: true }) : undefined,
    httpsAgent: opts.forever ? new https.Agent({ keepAlive: true }) : undefined,
    validateStatus: status => status >= 100 && status < 600,
  };

  if (process.env.TWILIO_CA_BUNDLE !== undefined) {
    if (this.ca === undefined) {
      this.ca = fs.readFileSync(process.env.TWILIO_CA_BUNDLE);
    }
    options.ca = this.ca;
  }

  if (!_.isNull(opts.data)) {
    options.data = qs.stringify(opts.data, { arrayFormat: 'repeat'});
  }

  if (!_.isNull(opts.params)) {
    options.params = opts.params;
    options.paramSerializer = (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat' });
    };
  }

  var optionsRequest = {
    method: options.method,
    url: options.url,
    auth: b64Auth || null,
    params: options.params,
    data: opts.data,
    headers: options.headers,
    ca: options.ca
  };

  var _this = this;
  this.lastResponse = undefined;
  this.lastRequest = new Request(optionsRequest);

  axios(options).then((response) => {
    _this.lastResponse = new Response(response.status, response.data);
    deferred.resolve({
      statusCode: response.status,
      body: response.data,
    });
  }).catch((error) => {
    _this.lastResponse = undefined;
    deferred.reject(error);
  });

  return deferred.promise;
};

module.exports = RequestClient;
