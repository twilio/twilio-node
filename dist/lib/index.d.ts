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
declare var initializer: TwilioSDK;
export = initializer;
