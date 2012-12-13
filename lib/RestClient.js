/**
 @module RestClient

 This module presents a higher-level API for interacting with resources
 in the Twilio REST API.  Tries to map very closely to the resource structure
 of the actual Twilio API, while still providing a nice JavaScript interface.
 */

//Dependencies
var request = require('request'),
    moduleinfo = {exports:{}}, //TODO: just parse the f***ing JSON ourselves to avoid this hack
    pkginfo = require('pkginfo')(moduleinfo);

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
    this.account = require('./resources/Accounts')(this);

    //Create shorthand for common resource functions on the default account
    this.sms = this.account.sms.messages.post;
    this.listSms = this.account.sms.messages.get;

    //Shorthand with a bit more massaging
    this.getSms = function(sid, callback) {
        this.account.sms.messages(sid).get(callback);
    };
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
        'User-Agent':'twilio-node/' + moduleinfo.exports.version
    };

    //Initiate HTTP request
    request(options, function (err, response, body) {
        if (callback) {
            var data = err  || !body ? {} : JSON.parse(body);

            //request doesn't think 4xx is an error - we want an error for any non-2xx status codes
            if (!err && (response.statusCode < 200 || response.statusCode > 206)) {
                err = data ? data : { status: response.statusCode, message:'HTTP request error, check response for more info'};
            }

            callback.call(client, err, data, response);
        }
    });
};

module.exports = RestClient;