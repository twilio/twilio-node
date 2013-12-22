/**
 @module twilio

 A helper library for interaction with the Twilio REST API,
 generation of TwiML markup, and creation of capability tokens for
 use with the Twilio Client SDK.
 */

var crypto = require('crypto'),
    _ = require('underscore'),
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
    var computed = crypto.createHmac('sha1', authToken).update(url).digest('Base64');
    return twilioHeader === crypto.createHmac('sha1', authToken).update(url).digest('Base64');
};

/**
 Utility function to validate an incoming request is indeed from Twilio (for use with express).
 adapted from https://github.com/crabasa/twiliosig

 @param {object} request - An expressjs request object (http://expressjs.com/api.html#req.params)
 @param {string} authToken - The auth token, as seen in the Twilio portal
 */
initializer.validateExpressRequest = function(request, authToken) {
    var url = request.protocol + '://' + request.headers.host + request.originalUrl;
    return initializer.validateRequest(authToken, request.header('X-Twilio-Signature'), url, request.body||{});
};

/**
Express middleware to accompany a Twilio webhook. Provides Twilio
request validation, and makes the response a little more friendly for our
TwiML generator.  Request validation requires the express.urlencoded middleware
to have been applied (e.g. app.use(express.urlencoded()); in your app config).

Options:
- validate: {Boolean} whether or not the middleware should validate the request
    came from Twilio.  Default true. If the request does not originate from
    Twilio, we will return a text body and a 403.  If there is no configured
    auth token and validate=true, this is an error condition, so we will return
    a 500.
- includeHelpers: {Boolean} add helpers to the response object to improve support
    for XML (TwiML) rendering.  Default true.

Returns a middleware function.

Examples:
var webhookMiddleware = twilio.webhook();
var webhookMiddleware = twilio.webhook('asdha9dhjasd'); //init with auth token
var webhookMiddleware = twilio.webhook({
    validate:false // don't attempt request validation
});
 */
initializer.webhook = function() {
    var opts = {
        validate:true,
        includeHelpers:true
    };

    // Process arguments
    var tokenString;
    for (var i = 0, l = arguments.length; i<l; i++) {
        var arg = arguments[i];
        if (typeof arg === 'string') {
            tokenString = arg;
        } else {
            opts = _.extend(opts, arg);
        }
    }

    // set auth token from input or environment variable
    opts.authToken = tokenString ? tokenString : process.env.TWILIO_AUTH_TOKEN;

    // Create middleware function
    return function hook(request, response, next) {
        // Add helpers, unless disabled
        if (opts.includeHelpers) {
            var oldSend = response.send;
            response.send = function() {
                // This is a special TwiML-aware version of send.  If we detect
                // A twiml response object, we'll set the content-type and 
                // automatically call .toString()
                if (arguments.length == 1 && arguments[0].legalNodes) {
                    response.type('text/xml');
                    oldSend.call(response,arguments[0].toString());
                } else {
                    // Continue with old version of send
                    oldSend.apply(response,arguments);
                }
            };
        }

        // Do validation if requested
        if (opts.validate) {
            // Check for a valid auth token
            if (!opts.authToken) {
                console.error('[Twilio]: Error - Twilio auth token is required for webhook request validation.');
                response.type('text/plain');
                response.send(500, 'Webhook Error - we attempted to validate this request without first configuring our auth token.');
            } else {
                // Check that the request originated from Twilio
                valid = initializer.validateExpressRequest(request,opts.authToken);
                if (valid) {
                    next();
                } else {
                    response.type('text/plain');
                    return response.send(403, 'Twilio Request Validation Failed.');
                }
            }
        } else {
            next();
        }
    };
};

//public module interface is a function, which passes through to RestClient constructor
module.exports = initializer;
