/**
 @module RestClient

 This module presents a higher-level API for interacting with resources
 in the Twilio REST API.  Tries to map very closely to the resource structure
 of the actual Twilio API, while still providing a nice JavaScript interface.
 */

//Dependencies
var request = require('request'),
    pkginfo = require('pkginfo')(module);

//REST API Config Defaults
var defaultHost = 'api.twilio.com',
    defaultApiVersion = '2010-04-01';

/**
 The Twilio REST API client
 @constructor
 @param {string} sid - The application SID, as seen in the Twilio portal
 @param {string} tkn - The auth token, as seen in the Twilio portal
 @param {object} options (optional) - optional config for the REST client
 - @member {string} host - host for the Twilio API (default: api.twilio.com)
 - @member {string} apiVersion - the Twilio REST API version to use for requests (default: 2010-04-01)
 */
function RestClient(sid, tkn, options) {
    //Required client config
    if (!sid && !tkn) throw 'RestClient requires an application SID and auth token';
    this.accountSid = sid;
    this.authToken = tkn;

    //Optional client config
    options = options || {};
    this.host = options.host || defaultHost;
    this.apiVersion = options.apiVersion || defaultApiVersion;

    //REST Resources
    this.Accounts = require('./resources/Accounts')(this);
}

/**
 Get the base URL which we'll use for all requests with this client

 @returns {string} - the API base URL
 */
RestClient.prototype.getBaseUrl = function () {
    return 'https://' + this.accountSid + ':' + this.authToken + '@' + this.host + '/' + this.apiVersion;
};

/**
 Make an authenticated request against the Twilio backend.  Uses the request library,
 and largely passes through to its API for options:

 https://github.com/mikeal/request

 @param {object} options - options for HTTP request
 @param {function} callback - callback function for when request is complete
 - @param {object} error - an error object if there was a problem processing the request
 - @param {object} data - the JSON-parsed data
 - @param {http.ClientResponse} response - the raw node http.ClientResponse object
 */
RestClient.prototype.request = function (options, callback) {
    var client = this;

    //Prepare request options
    options.url = client.getBaseUrl() + options.url + '.json';
    options.headers = {
        'Accept':'application/json',
        'User-Agent':'twilio-node/' + module.exports.version
    };

    //Initiate HTTP request
    request(options, function (err, response, body) {
        if (callback) {
            var data = err ? {} : JSON.parse(body);
            callback.call(client, err, data, response);
        }
    });
};

module.exports = RestClient;