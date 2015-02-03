/**
 @module twilio

 A helper library for interaction with the Twilio REST API,
 generation of TwiML markup, and creation of capability tokens for
 use with the Twilio Client SDK.
 */

var webhooks = require('./webhooks'),
    RestClient = require('./RestClient'),
    TaskRouterClient = require('./TaskRouterClient');

//Shorthand to automatically create a RestClient
function initializer(sid, tkn, options) {
    return new RestClient(sid, tkn, options);
}

//Main functional components of the Twilio module
initializer.RestClient = RestClient;
initializer.TaskRouterClient = TaskRouterClient;
initializer.Capability = require('./Capability');
initializer.TaskRouterCapability = require('./TaskRouterCapability');
initializer.TwimlResponse = require('./TwimlResponse');

// Seup webhook helper functionality
initializer.validateRequest = webhooks.validateRequest;
initializer.validateExpressRequest = webhooks.validateExpressRequest;
initializer.webhook = webhooks.webhook;

//public module interface is a function, which passes through to RestClient constructor
module.exports = initializer;
