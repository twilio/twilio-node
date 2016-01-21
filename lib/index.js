var Twilio = require('./rest/Twilio');
// var webhooks = require('./webhooks'),

//Shorthand to automatically create a RestClient
initializer = {};

//Main functional components of the Twilio module
initializer.Twilio = Twilio;
initializer.AccessToken = require('./AccessToken');
initializer.Capability = require('./Capability');
initializer.TaskRouterCapability = require('./TaskRouterCapability');
initializer.TaskRouterWorkerCapability = require('./TaskRouterWorkerCapability');
initializer.TaskRouterWorkspaceCapability = require('./TaskRouterWorkspaceCapability');
initializer.TaskRouterTaskQueueCapability = require('./TaskRouterTaskQueueCapability');
initializer.TwimlResponse = require('./TwimlResponse');

// Seup webhook helper functionality
// initializer.validateRequest = webhooks.validateRequest;
// initializer.validateExpressRequest = webhooks.validateExpressRequest;
// initializer.webhook = webhooks.webhook;

//public module interface is a function, which passes through to RestClient constructor
module.exports = initializer;
