'use strict';

var _ = require('lodash');
var moduleInfo = require('../../package.json');
var Api = require('./Api');
var Conversations = require('./Conversations');
var Lookups = require('./Lookups');
var Monitor = require('./Monitor');
var Pricing = require('./Pricing');
var RequestClient = require('../base/RequestClient');
var Taskrouter = require('./Taskrouter');
var Trunking = require('./Trunking');


/**
 * Twilio Client to interact with the Rest API
 *
 * @constructor
 *
 * @param {string} username - The username used for authentication
 * @param {string} password - The password used for authentication
 * @param {HttpClient} [httpClient] - The client used for http requests
 * @param {string} [opts.accountSid] -
 *          The default accountSid.
 *                This is set to username if not provided
 * @param {Environment} [opts.env] -
 *          The environment object.
 *                Defaults to process.env
 *
 * @returns {Twilio} A new instance of Twilio client
 */
function Twilio(username, password, httpClient, opts) {
  opts = opts || {};
  var env = opts.env || process.env;

  this.username = username || env.TWILIO_ACCOUNT_SID;
  this.password = password || env.TWILIO_AUTH_TOKEN;
  this.accountSid = opts.accountSid || this.username;
  this.httpClient = httpClient || new RequestClient();

  if (!this.username) {
    throw new Error('username is required');
  }

  if (!this.password) {
    throw new Error('password is required');
  }

  if (!_.startsWith(this.accountSid, 'AC')) {
    throw new Error('accountSid is required');
  }

  // Domains
  this._api = undefined;
  this._conversations = undefined;
  this._lookups = undefined;
  this._monitor = undefined;
  this._pricing = undefined;
  this._taskrouter = undefined;
  this._trunking = undefined;
}

/**
 * Makes a request to the Twilio API using the configured http client.
 * Authentication information is automatically added if none is provided.
 *
 * @param {object} opts - The options argument
 * @param {string} opts.method - The http method
 * @param {string} opts.uri - The request uri
 * @param {string} [opts.username] - The username used for auth
 * @param {string} [opts.password] - The password used for auth
 * @param {object} [opts.headers] - The request headers
 * @param {object} [opts.params] - The request params
 * @param {object} [opts.data] - The request data
 * @param {int} [opts.timeout] - The request timeout in milliseconds
 * @param {boolean} [opts.allowRedirects] - Should the client follow redirects
 */
Twilio.prototype.request = function request(opts) {
  opts = opts || {};

  if (!opts.method) {
    throw new Error('method is required');
  }

  if (!opts.uri) {
    throw new Error('uri is required');
  }

  var username = opts.username || this.username;
  var password = opts.password || this.password;

  var headers = opts.headers || {};
  headers['User-Agent'] = 'twilio-node/' + moduleInfo.version;
  headers['Accept-Charset'] = 'utf-8';

  if (opts.method === 'POST' && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  if (!headers.Accept) {
    headers.Accept = 'application/json';
  }

  return this.httpClient.request({
    method: opts.method,
    uri: opts.uri,
    username: username,
    password: password,
    headers: headers,
    params: opts.params,
    data: opts.data,
    timeout: opts.timeout,
    allowRedirects: opts.allowRedirects,
  });
};

Object.defineProperty(Twilio.prototype,
  'api', {
  get: function() {
    this._api = this._api || new Api(this);
    return this._api;
  },
});

Object.defineProperty(Twilio.prototype,
  'conversations', {
  get: function() {
    this._conversations = this._conversations || new Conversations(this);
    return this._conversations;
  },
});

Object.defineProperty(Twilio.prototype,
  'lookups', {
  get: function() {
    this._lookups = this._lookups || new Lookups(this);
    return this._lookups;
  },
});

Object.defineProperty(Twilio.prototype,
  'monitor', {
  get: function() {
    this._monitor = this._monitor || new Monitor(this);
    return this._monitor;
  },
});

Object.defineProperty(Twilio.prototype,
  'pricing', {
  get: function() {
    this._pricing = this._pricing || new Pricing(this);
    return this._pricing;
  },
});

Object.defineProperty(Twilio.prototype,
  'taskrouter', {
  get: function() {
    this._taskrouter = this._taskrouter || new Taskrouter(this);
    return this._taskrouter;
  },
});

Object.defineProperty(Twilio.prototype,
  'trunking', {
  get: function() {
    this._trunking = this._trunking || new Trunking(this);
    return this._trunking;
  },
});

module.exports = Twilio;
