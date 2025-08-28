import ITwilio from "./rest/Twilio";
import * as webhooks from "./webhooks/webhooks";
import IRequestClient from "./base/RequestClient";
import type { ClientOpts as IClientOpts } from "./base/BaseTwilio";
import IAccessToken from "./jwt/AccessToken";
import IValidationToken from "./jwt/validation/ValidationToken";
import IClientCapability from "./jwt/ClientCapability";
import ITaskRouterCapability from "./jwt/taskrouter/TaskRouterCapability";
import * as taskRouterUtil from "./jwt/taskrouter/util";
import IVoiceResponse from "./twiml/VoiceResponse";
import IMessagingResponse from "./twiml/MessagingResponse";
import IFaxResponse from "./twiml/FaxResponse";
import IClientCredentialProvider from "./credential_provider/ClientCredentialProvider";
import INoAuthCredentialProvider from "./credential_provider/NoAuthCredentialProvider";
import IOrgsCredentialProvider from "./credential_provider/OrgsCredentialProvider";
import { ModularTwilioClient, ModularClientOptions } from "./modular/index";

// Shorthand to automatically create a RestClient
function TwilioSDK(
  accountSid?: string,
  authToken?: string,
  opts?: IClientOpts
): TwilioSDK.Twilio {
  return new TwilioSDK.Twilio(accountSid, authToken, opts);
}

namespace TwilioSDK {
  // Main functional components of the Twilio module
  export type Twilio = ITwilio;
  export const Twilio = ITwilio;
  
  // Modular client for reduced bundle size
  export type ModularClient = ModularTwilioClient;
  export const ModularClient = ModularTwilioClient;
  export type ModularClientOpts = ModularClientOptions;
  
  export namespace jwt {
    export type AccessToken = IAccessToken;
    export const AccessToken = IAccessToken;
    export type ValidationToken = IValidationToken;
    export const ValidationToken = IValidationToken;
    export type ClientCapability = IClientCapability;
    export const ClientCapability = IClientCapability;
    export namespace taskrouter {
      export type TaskRouterCapability = ITaskRouterCapability;
      export const TaskRouterCapability = ITaskRouterCapability;
      export const util = taskRouterUtil;
    }
  }
  export namespace twiml {
    export type VoiceResponse = IVoiceResponse;
    export const VoiceResponse = IVoiceResponse;
    export type MessagingResponse = IMessagingResponse;
    export const MessagingResponse = IMessagingResponse;
    export type FaxResponse = IFaxResponse;
    export const FaxResponse = IFaxResponse;
  }
  export type RequestClient = IRequestClient;
  export const RequestClient = IRequestClient;

  export type ClientCredentialProviderBuilder =
    IClientCredentialProvider.ClientCredentialProviderBuilder;
  export const ClientCredentialProviderBuilder =
    IClientCredentialProvider.ClientCredentialProviderBuilder;

  export type OrgsCredentialProviderBuilder =
    IOrgsCredentialProvider.OrgsCredentialProviderBuilder;
  export const OrgsCredentialProviderBuilder =
    IOrgsCredentialProvider.OrgsCredentialProviderBuilder;

  export type NoAuthCredentialProvider =
    INoAuthCredentialProvider.NoAuthCredentialProvider;
  export const NoAuthCredentialProvider =
    INoAuthCredentialProvider.NoAuthCredentialProvider;

  // Setup webhook helper functionality
  export type validateBody = typeof webhooks.validateBody;
  export const validateBody = webhooks.validateBody;
  export type validateRequest = typeof webhooks.validateRequest;
  export const validateRequest = webhooks.validateRequest;
  export type validateRequestWithBody = typeof webhooks.validateRequestWithBody;
  export const validateRequestWithBody = webhooks.validateRequestWithBody;
  export type validateExpressRequest = typeof webhooks.validateExpressRequest;
  export const validateExpressRequest = webhooks.validateExpressRequest;
  export type validateIncomingRequest = typeof webhooks.validateIncomingRequest;
  export const validateIncomingRequest = webhooks.validateIncomingRequest;
  export type getExpectedBodyHash = typeof webhooks.getExpectedBodyHash;
  export const getExpectedBodyHash = webhooks.getExpectedBodyHash;
  export type getExpectedTwilioSignature =
    typeof webhooks.getExpectedTwilioSignature;
  export const getExpectedTwilioSignature = webhooks.getExpectedTwilioSignature;
  export type webhook = typeof webhooks.webhook;
  export const webhook = webhooks.webhook;
  // Export the client options type for convenience
  export type ClientOpts = IClientOpts;
}

// Public module interface is a function, which passes through to RestClient constructor
export = TwilioSDK;
