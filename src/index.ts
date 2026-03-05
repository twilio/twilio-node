export { Twilio } from "./rest/Twilio.js";
export type { RequestClientOptions, RequestOptions } from "./rest/Twilio.js";
export { Client } from "./base/BaseTwilio.js";
export type { ClientOpts, RequestOpts } from "./base/BaseTwilio.js";
export { RequestClient } from "./base/RequestClient.js";
export type {
  RequestOptions as RequestClientRequestOptions,
  RequestClientOptions as RequestClientConstructorOptions,
} from "./base/RequestClient.js";
export { RestException } from "./base/RestException.js";
export type { ApiResponse } from "./base/ApiResponse.js";

export { AccessToken } from "./jwt/AccessToken.js";
export {
  Grant,
  TaskRouterGrant,
  ChatGrant,
  VideoGrant,
  SyncGrant,
  VoiceGrant,
  PlaybackGrant,
} from "./jwt/AccessToken.js";
export type {
  AccessTokenOptions,
  TaskRouterGrantOptions,
  ChatGrantOptions,
  VideoGrantOptions,
  SyncGrantOptions,
  VoiceGrantOptions,
  PlaybackGrantOptions,
} from "./jwt/AccessToken.js";
export { ValidationToken } from "./jwt/validation/ValidationToken.js";
export {
  ClientCapability,
  EventStreamScope,
  IncomingClientScope,
  OutgoingClientScope,
} from "./jwt/ClientCapability.js";
export {
  TaskRouterCapability,
  Policy,
} from "./jwt/taskrouter/TaskRouterCapability.js";
export * as taskRouterUtil from "./jwt/taskrouter/util.js";

export { VoiceResponse } from "./twiml/VoiceResponse.js";
export { MessagingResponse } from "./twiml/MessagingResponse.js";
export { FaxResponse } from "./twiml/FaxResponse.js";

export { ClientCredentialProvider } from "./credential_provider/ClientCredentialProvider.js";
export { ClientCredentialProviderBuilder } from "./credential_provider/ClientCredentialProvider.js";
export { OrgsCredentialProvider } from "./credential_provider/OrgsCredentialProvider.js";
export { OrgsCredentialProviderBuilder } from "./credential_provider/OrgsCredentialProvider.js";
export { NoAuthCredentialProvider } from "./credential_provider/NoAuthCredentialProvider.js";

export {
  validateBody,
  validateRequest,
  validateRequestWithBody,
  validateExpressRequest,
  validateIncomingRequest,
  getExpectedBodyHash,
  getExpectedTwilioSignature,
  webhook,
} from "./webhooks/webhooks.js";

export { Twilio as default } from "./rest/Twilio.js";

import { Twilio } from "./rest/Twilio.js";
import type { ClientOpts } from "./base/BaseTwilio.js";

export function createClient(
  accountSid?: string,
  authToken?: string,
  opts?: ClientOpts
): Twilio {
  return new Twilio(accountSid, authToken, opts);
}
