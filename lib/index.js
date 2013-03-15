/**
 @module twilio

 A helper library for interaction with the Twilio REST API,
 generation of TwiML markup, and creation of capability tokens for
 use with the Twilio Client SDK.
 */

var crypto = require('crypto'),
    RestClient = require('./RestClient');

//Shorthand to automatically create a RestClient
function initializer(sid, tkn, options) {
    return new RestClient(sid, tkn, options);
}

//Main functional components of the Twilio module
initializer.RestClient = RestClient;
initializer.Capability = require('./Capability');
initializer.TwimlResponse = require('./TwimlResponse');

/**
 Utility function to validate an incoming request is indeed from Twilio

 @param {string} authToken - The auth token, as seen in the Twilio portal
 @param {string} twilioHeader - The value of the X-Twilio-Signature header from the request
 @param {string} url - The full URL (with query string) you configured to handle this request
 @param {object} params - the parameters sent with this request
 */
initializer.validateRequest = function(authToken, twilioHeader, url, params) {
    Object.keys(params).sort().forEach(function(key, i) {
        url = url + key + params[key];
    });
    return twilioHeader === crypto.createHmac('sha1', authToken).update(url).digest('Base64');
};

/**
 Utility function to validate an incoming request is indeed from Twilio (for use with express).
 adapted from https://github.com/crabasa/twiliosig

 @param {object} request - An expressjs request object (http://expressjs.com/api.html#req.params)
 @param {string} authToken - The auth token, as seen in the Twilio portal
 */
initializer.validateExpressRequest = function(request, authToken) {
    var url = request.protocol + '://' + request.headers.host + request.url;
    return initializer.validateRequest(authToken, request.header('X-Twilio-Signature'), url, request.body||{});
};

//public module interface is a function, which passes through to RestClient constructor
module.exports = initializer;
