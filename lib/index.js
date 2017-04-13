'use strict';

var Twilio = require('./rest/Twilio');
var webhooks = require('./webhooks/webhooks');

// Shorthand to automatically create a RestClient
var initializer = function(accountSid, authToken, opts) {
  return new Twilio(accountSid, authToken, opts);
};

// Main functional components of the Twilio module
initializer.Twilio = Twilio;
initializer.jwt = {
  AccessToken: require('./jwt/AccessToken'),
  ClientCapability: require('./jwt/ClientCapability'),
  taskrouter: {
    TaskRouterCapability: require('./jwt/taskrouter/TaskRouterCapability'),
    util: require('./jwt/taskrouter/util')
  }
};
initializer.twiml = {
  VoiceResponse: require('./twiml/VoiceResponse'),
  MessagingResponse: require('./twiml/MessagingResponse')
};


// Setup webhook helper functionality
initializer.validateRequest = webhooks.validateRequest;
initializer.validateExpressRequest = webhooks.validateExpressRequest;
initializer.webhook = webhooks.webhook;

// Public module interface is a function, which passes through to RestClient constructor
module.exports = initializer;
