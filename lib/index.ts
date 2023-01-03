"use strict";

import Twilio from "./rest/Twilio";
import * as webhooks from "./webhooks/webhooks";
import RequestClient from "./base/RequestClient";
import { ClientOpts } from "./base/BaseTwilio";
import AccessToken from "./jwt/AccessToken";
import ClientCapability from "./jwt/ClientCapability";
import TaskRouterCapability from "./jwt/taskrouter/TaskRouterCapability";
import * as taskRouterUtil from "./jwt/taskrouter/util";
import VoiceResponse from "./twiml/VoiceResponse";
import MessagingResponse from "./twiml/MessagingResponse";
import FaxResponse from "./twiml/FaxResponse";

interface TwilioSDK extends Function {
  (accountSid?: string, authToken?: string, opts?: ClientOpts): Twilio;
  Twilio: typeof Twilio;
  jwt: {
    AccessToken: typeof AccessToken;
    ClientCapability: typeof ClientCapability;
    taskrouter: {
      TaskRouterCapability: typeof TaskRouterCapability;
      util: typeof taskRouterUtil;
    };
  };
  twiml: {
    VoiceResponse: typeof VoiceResponse;
    MessagingResponse: typeof MessagingResponse;
    FaxResponse: typeof FaxResponse;
  };
  RequestClient: typeof RequestClient;
  validateBody: typeof webhooks.validateBody;
  validateRequest: typeof webhooks.validateRequest;
  validateRequestWithBody: typeof webhooks.validateRequestWithBody;
  validateExpressRequest: typeof webhooks.validateExpressRequest;
  validateIncomingRequest: typeof webhooks.validateIncomingRequest;
  getExpectedBodyHash: typeof webhooks.getExpectedBodyHash;
  getExpectedTwilioSignature: typeof webhooks.getExpectedTwilioSignature;
  webhook: typeof webhooks.webhook;
}

// Shorthand to automatically create a RestClient
var initializer: TwilioSDK = function (
  accountSid?: string,
  authToken?: string,
  opts?: ClientOpts
): Twilio {
  return new Twilio(accountSid, authToken, opts);
} as any;

// Main functional components of the Twilio module
initializer.Twilio = Twilio as any;
initializer.jwt = {} as any;
initializer.twiml = {} as any;
initializer.RequestClient = RequestClient as any;

Object.defineProperty(initializer.jwt, "AccessToken", {
  get: function () {
    return AccessToken;
  },
});

Object.defineProperty(initializer.jwt, "ClientCapability", {
  get: function () {
    return ClientCapability;
  },
});

Object.defineProperty(initializer.jwt, "taskrouter", {
  get: function () {
    return {
      TaskRouterCapability: TaskRouterCapability,
      util: taskRouterUtil,
    };
  },
});

Object.defineProperty(initializer.twiml, "VoiceResponse", {
  get: function () {
    return VoiceResponse;
  },
});

Object.defineProperty(initializer.twiml, "MessagingResponse", {
  get: function () {
    return MessagingResponse;
  },
});

Object.defineProperty(initializer.twiml, "FaxResponse", {
  get: function () {
    return FaxResponse;
  },
});

// Setup webhook helper functionality
initializer.validateBody = webhooks.validateBody;
initializer.validateRequest = webhooks.validateRequest;
initializer.validateRequestWithBody = webhooks.validateRequestWithBody;
initializer.validateIncomingRequest = webhooks.validateIncomingRequest;
initializer.validateExpressRequest = webhooks.validateExpressRequest;
initializer.getExpectedBodyHash = webhooks.getExpectedBodyHash;
initializer.getExpectedTwilioSignature = webhooks.getExpectedTwilioSignature;
initializer.webhook = webhooks.webhook;

// Public module interface is a function, which passes through to RestClient constructor
export = initializer;
