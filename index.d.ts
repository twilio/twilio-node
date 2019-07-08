import * as util from './lib/jwt/taskrouter/util';
import * as FaxResponse from './lib/twiml/FaxResponse';
import * as MessagingResponse from './lib/twiml/MessagingResponse';
import * as VoiceResponse from './lib/twiml/VoiceResponse';
import * as webhookTools from './lib/webhooks/webhooks';

import TwilioClient = require('./lib/rest/Twilio');
import AccessToken = require('./lib/jwt/AccessToken');
import ClientCapability = require('./lib/jwt/ClientCapability');
import TaskRouterCapability = require('./lib/jwt/taskrouter/TaskRouterCapability');

interface TwimlConstructor<T> {
  new (): T;
}

declare function twilio(
  accountSid?: string,
  authToken?: string,
  opts?: TwilioClient.TwilioClientOptions
): TwilioClient;

declare namespace twilio {
  export import Twilio = TwilioClient;
  export interface TwimlInterface {
    VoiceResponse: TwimlConstructor<VoiceResponse>;
    FaxResponse: TwimlConstructor<FaxResponse>;
    MessagingResponse: TwimlConstructor<MessagingResponse>;
  }
  export interface JwtInterface {
    AccessToken: typeof AccessToken;
    ClientCapability: typeof ClientCapability;
    taskrouter: {
      TaskRouterCapability: typeof TaskRouterCapability;
      util: typeof util;
    };
  }
  export const jwt: JwtInterface;
  export const twiml: TwimlInterface;
  export const validateRequest: typeof webhookTools.validateRequest;
  export const validateRequestWithBody: typeof webhookTools.validateRequestWithBody;
  export const validateExpressRequest: typeof webhookTools.validateExpressRequest;
  export const webhook: typeof webhookTools.webhook;
}

export = twilio;
