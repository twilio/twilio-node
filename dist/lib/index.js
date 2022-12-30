"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Twilio_1 = __importDefault(require("./rest/Twilio"));
const webhooks = __importStar(require("./webhooks/webhooks"));
const RequestClient_1 = __importDefault(require("./base/RequestClient"));
const AccessToken_1 = __importDefault(require("./jwt/AccessToken"));
const ClientCapability_1 = __importDefault(require("./jwt/ClientCapability"));
const TaskRouterCapability_1 = __importDefault(require("./jwt/taskrouter/TaskRouterCapability"));
const taskRouterUtil = __importStar(require("./jwt/taskrouter/util"));
const VoiceResponse_1 = __importDefault(require("./twiml/VoiceResponse"));
const MessagingResponse_1 = __importDefault(require("./twiml/MessagingResponse"));
const FaxResponse_1 = __importDefault(require("./twiml/FaxResponse"));
// Shorthand to automatically create a RestClient
var initializer = function (accountSid, authToken, opts) {
    return new Twilio_1.default(accountSid, authToken, opts);
};
// Main functional components of the Twilio module
initializer.Twilio = Twilio_1.default;
initializer.jwt = {};
initializer.twiml = {};
initializer.RequestClient = RequestClient_1.default;
Object.defineProperty(initializer.jwt, "AccessToken", {
    get: function () {
        return AccessToken_1.default;
    },
});
Object.defineProperty(initializer.jwt, "ClientCapability", {
    get: function () {
        return ClientCapability_1.default;
    },
});
Object.defineProperty(initializer.jwt, "taskrouter", {
    get: function () {
        return {
            TaskRouterCapability: TaskRouterCapability_1.default,
            util: taskRouterUtil,
        };
    },
});
Object.defineProperty(initializer.twiml, "VoiceResponse", {
    get: function () {
        return VoiceResponse_1.default;
    },
});
Object.defineProperty(initializer.twiml, "MessagingResponse", {
    get: function () {
        return MessagingResponse_1.default;
    },
});
Object.defineProperty(initializer.twiml, "FaxResponse", {
    get: function () {
        return FaxResponse_1.default;
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
module.exports = initializer;
