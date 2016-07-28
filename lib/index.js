var Twilio = require('./rest/Twilio');
var webhooks = require('./webhooks/webhooks');

//Shorthand to automatically create a RestClient
initializer = function(accountSid, authToken, httpClient, opts) {
  return new Twilio(accountSid, authToken, httpClient, opts);
};

//Main functional components of the Twilio module
initializer.Twilio = Twilio;
initializer.jwt = {
  AccessToken: require('./jwt/AccessToken'),
  Capability: require('./jwt/Capability'),
  TaskRouterCapability: require('./jwt/TaskRouterCapability'),
  TaskRouterWorkerCapability: require('./jwt/TaskRouterWorkerCapability'),
  TaskRouterWorkspaceCapability: require('./jwt/TaskRouterWorkspaceCapability'),
  TaskRouterTaskQueueCapability: require('./jwt/TaskRouterTaskQueueCapability')
};
initializer.TwimlResponse = require('./twiml/TwimlResponse');

// Setup webhook helper functionality
initializer.validateRequest = webhooks.validateRequest;
initializer.validateExpressRequest = webhooks.validateExpressRequest;
initializer.webhook = webhooks.webhook;

//public module interface is a function, which passes through to RestClient constructor
module.exports = initializer;
