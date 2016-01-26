var Twilio = require('./rest/Twilio');
var webhooks = require('./ext/webhooks');

//Shorthand to automatically create a RestClient
initializer = function(accountSid, authToken, httpClient, opts) {
  return new Twilio(accountSid, authToken, httpClient, opts);
}

//Main functional components of the Twilio module
initializer.Twilio = Twilio;
initializer.AccessToken = require('./ext/AccessToken');
initializer.Capability = require('./capabilities/Capability');
initializer.TaskRouterCapability = require('./capabilities/TaskRouterCapability');
initializer.TaskRouterWorkerCapability = require('./capabilities/TaskRouterWorkerCapability');
initializer.TaskRouterWorkspaceCapability = require('./capabilities/TaskRouterWorkspaceCapability');
initializer.TaskRouterTaskQueueCapability = require('./capabilities/TaskRouterTaskQueueCapability');
initializer.TwimlResponse = require('./ext/TwimlResponse');

// Setup webhook helper functionality
initializer.validateRequest = webhooks.validateRequest;
initializer.validateExpressRequest = webhooks.validateExpressRequest;
initializer.webhook = webhooks.webhook;

//public module interface is a function, which passes through to RestClient constructor
module.exports = initializer;
