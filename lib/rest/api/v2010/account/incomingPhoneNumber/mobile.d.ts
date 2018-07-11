/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

declare function MobileList(version: V2010, accountSid: string): MobileListInstance

type MobileAddressRequirement = 'none'|'any'|'local'|'foreign';

interface MobileResource {
  /**
   * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this phone number.
   */
  account_sid: string;
  /**
   * This indicates whether the phone number requires you or your customer to have an [Address](https://www.twilio.com/docs/usage/api/addresses) registered with Twilio. Possible values are `none`, `any`, `local`, or `foreign`.
   */
  address_requirements: MobileAddressRequirement;
  /**
   * The 34 character sid of the address associated with this number.
   */
  address_sid: string;
  /**
   * Calls to this phone number will start a new TwiML session with this API version.
   */
  api_version: string;
  /**
   * Phone numbers new to the Twilio platform are marked as beta. Possible values are either true or `false`.
   */
  beta: boolean;
  /**
   * This is a set of boolean properties that indicate whether a phone number can receive calls or messages.  Possible capabilities are  `Voice`, `SMS`, and `MMS` with each having a value of either `true` or `false`.
   */
  capabilities: string;
  /**
   * The date that this resource was created, given as GMT [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  date_created: Date;
  /**
   * The date that this resource was last updated, given as GMT [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  date_updated: Date;
  /**
   * A human readable descriptive text for this resource, up to 64 characters long. By default, the `FriendlyName` is a nicely formatted version of the phone number.
   */
  friendly_name: string;
  /**
   * The identity_sid
   */
  identity_sid: string;
  /**
   * Twilio owned phone numbers are marked as `twilio` while hosted phone numbers are marked as `hosted`.
   */
  origin: string;
  /**
   * The incoming phone number. e.g., +16175551212 ([E.164](http://en.wikipedia.org/wiki/E.164) format)
   */
  phone_number: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The 34 character sid of the application Twilio should use to handle SMSs sent to this number. If a `SmsApplicationSid` is present, Twilio will ignore all of the SMS urls above and use those set on the application.
   */
  sms_application_sid: string;
  /**
   * The HTTP method Twilio will use when requesting the above URL. Either `GET` or `POST`.
   */
  sms_fallback_method: string;
  /**
   * The URL that Twilio will request if an error occurs retrieving or executing the TwiML from `SmsUrl`.
   */
  sms_fallback_url: string;
  /**
   * The HTTP method Twilio will use when making requests to the `SmsUrl`. Either `GET` or `POST`.
   */
  sms_method: string;
  /**
   * The URL Twilio will request when receiving an incoming SMS message to this number.
   */
  sms_url: string;
  /**
   * The URL that Twilio will request to pass status parameters (such as call ended) to your application.
   */
  status_callback: string;
  /**
   * The HTTP method Twilio will use to make requests to the `StatusCallback` URL. Either `GET` or `POST`.
   */
  status_callback_method: string;
  /**
   * The 34 character sid of the Trunk Twilio should use to handle phone calls to this number. If a `TrunkSid` is present, Twilio will ignore all of the voice urls  and voice applications above and use those set on the Trunk. Setting a `TrunkSid` will automatically delete your `VoiceApplicationSid` and vice versa.
   */
  trunk_sid: string;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`.
   */
  uri: string;
  /**
   * The 34 character sid of the application Twilio should use to handle phone calls to this number. If a `VoiceApplicationSid` is present, Twilio will ignore all of the voice urls above and use those set on the application. Setting a `VoiceApplicationSid` will automatically delete your `TrunkSid` and vice versa.
   */
  voice_application_sid: string;
  /**
   * Look up the caller's caller-ID name from the CNAM database ($0.01 per look up). Either `true` or `false`.
   */
  voice_caller_id_lookup: boolean;
  /**
   * The HTTP method Twilio will use when requesting the `VoiceFallbackUrl`. Either `GET` or `POST`.
   */
  voice_fallback_method: string;
  /**
   * The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by `Url`.
   */
  voice_fallback_url: string;
  /**
   * The HTTP method Twilio will use when requesting the above `Url`. Either `GET` or `POST`.
   */
  voice_method: string;
  /**
   * The URL Twilio will request when this phone number receives a call. The VoiceURL will  no longer be used if a `VoiceApplicationSid` or a `TrunkSid` is set.
   */
  voice_url: string;
}

interface MobilePayload extends MobileResource, Page.TwilioResponsePayload {
}

interface MobileSolution {
  accountSid: string;
}

interface MobileListEachOptions extends ListEachOptions<MobileInstance> {
  /**
   * Include phone numbers new to the Twilio platform. Possible values are either `true` or `false`. Default is `true`.
   */
  beta?: boolean;
  /**
   * Only show the incoming phone number resources with friendly names that exactly match this name.
   */
  friendlyName?: string;
  /**
   * Include phone numbers based on the origin, by default, phone numbers of all origin are included. Possible values are either `twilio` or `hosted`.
   */
  origin?: string;
  /**
   * Only show the incoming phone number resources that match this pattern. You can specify partial numbers and use '*' as a wildcard for any digit.
   */
  phoneNumber?: string;
}

interface MobileListOptions extends ListOptions<MobileInstance> {
  /**
   * Include phone numbers new to the Twilio platform. Possible values are either `true` or `false`. Default is `true`.
   */
  beta?: boolean;
  /**
   * Only show the incoming phone number resources with friendly names that exactly match this name.
   */
  friendlyName?: string;
  /**
   * Include phone numbers based on the origin, by default, phone numbers of all origin are included. Possible values are either `twilio` or `hosted`.
   */
  origin?: string;
  /**
   * Only show the incoming phone number resources that match this pattern. You can specify partial numbers and use '*' as a wildcard for any digit.
   */
  phoneNumber?: string;
}

interface MobileListPageOptions extends PageOptions<MobilePage> {
  /**
   * Include phone numbers new to the Twilio platform. Possible values are either `true` or `false`. Default is `true`.
   */
  beta?: boolean;
  /**
   * Only show the incoming phone number resources with friendly names that exactly match this name.
   */
  friendlyName?: string;
  /**
   * Include phone numbers based on the origin, by default, phone numbers of all origin are included. Possible values are either `twilio` or `hosted`.
   */
  origin?: string;
  /**
   * Only show the incoming phone number resources that match this pattern. You can specify partial numbers and use '*' as a wildcard for any digit.
   */
  phoneNumber?: string;
}

interface MobileListCreateOptions {
  /**
   * The 34 character sid of the address Twilio should associate with the number.
   */
  addressSid?: string;
  /**
   * The Twilio REST API version to use for incoming calls made to this number. If omitted, uses `2010-04-01`.
   */
  apiVersion?: string;
  /**
   * A human readable description of the new incoming phone number. Maximum 64 characters. Defaults to a formatted version of the number.
   */
  friendlyName?: string;
  /**
   * The identity_sid
   */
  identitySid?: string;
  /**
   * The phone number you want to purchase. The number should be formatted starting with a '+' followed by the country code and the number in [E.164](http://en.wikipedia.org/wiki/E.164) format e.g., '+15105555555'. **You must include either this or an `AreaCode` parameter to have your POST succeed.**
   */
  phoneNumber: string;
  /**
   * The 34 character sid of the application Twilio should use to handle SMSs sent to the new number. If a `SmsApplicationSid` is present, Twilio will ignore all of the SMS urls above and use those set on the application.
   */
  smsApplicationSid?: string;
  /**
   * The HTTP method that should be used to request the `SmsFallbackUrl`. Must be either `GET` or `POST`. Defaults to `POST`.
   */
  smsFallbackMethod?: string;
  /**
   * A URL that Twilio will request if an error occurs requesting or executing the TwiML defined by `SmsUrl`.
   */
  smsFallbackUrl?: string;
  /**
   * The HTTP method that should be used to request the `SmsUrl`. Must be either `GET` or `POST`. Defaults to `POST`.
   */
  smsMethod?: string;
  /**
   * The URL that Twilio should request when somebody sends an SMS to the phone number.
   */
  smsUrl?: string;
  /**
   * The URL that Twilio will request to pass status parameters (such as call ended) to your application.
   */
  statusCallback?: string;
  /**
   * The HTTP method Twilio will use to make requests to the `StatusCallback` URL. Either `GET` or `POST`. Defaults to `POST`.
   */
  statusCallbackMethod?: string;
  /**
   * The 34 character sid of the application Twilio should use to handle phone calls to the new number. If a `VoiceApplicationSid` is present, Twilio will ignore all of the voice urls above and use those set on the application. Setting a `VoiceApplicationSid` will automatically delete your `TrunkSid` and vice versa.
   */
  voiceApplicationSid?: string;
  /**
   * Do a lookup of a caller's name from the CNAM database and post it to your app. Either `true` or `false`. Defaults to `false`.
   */
  voiceCallerIdLookup?: boolean;
  /**
   * The HTTP method that should be used to request the `VoiceFallbackUrl`. Either `GET` or `POST`. Defaults to `POST`.
   */
  voiceFallbackMethod?: string;
  /**
   * A URL that Twilio will request if an error occurs requesting or executing the TwiML at `Url`.
   */
  voiceFallbackUrl?: string;
  /**
   * The HTTP method that should be used to request the `VoiceUrl`. Must be either `GET` or `POST`. Defaults to `POST`.
   */
  voiceMethod?: string;
  /**
   * The URL that Twilio should request when somebody dials the new phone number. The VoiceURL will  no longer be used if a `VoiceApplicationSid` or a `TrunkSid` is set.
   */
  voiceUrl?: string;
}

interface MobileListInstance {
  /**
   * create a MobileInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed MobileInstance
   */
  create(opts: MobileListCreateOptions): Promise<MobileInstance>;
  /**
   * create a MobileInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: MobileListCreateOptions, callback: (error: Error | null, items: MobileInstance) => any): void;
  /**
   * Streams MobileInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  each(opts?: MobileListEachOptions): void;
  /**
   * Streams MobileInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  each(callback: (item: MobileInstance, done: (err?: Error) => void) => void): any;
  /**
   * Retrieve a single target page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<MobilePage>;
  /**
   * Retrieve a single target page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: MobilePage) => any): void;
  /**
   * Lists MobileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: MobileListOptions): Promise<MobileInstance[]>;
  /**
   * Lists MobileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: MobileListOptions, callback: (error: Error | null, items: MobileInstance[]) => any): void;
  /**
   * Lists MobileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: MobileInstance[]) => any): void;
  /**
   * Retrieve a single page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: MobileListPageOptions): Promise<MobilePage>;
  /**
   * Retrieve a single page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: MobileListPageOptions, callback: (error: Error | null, items: MobilePage) => any): void;
  /**
   * Retrieve a single page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: MobilePage) => any): void;
}

declare class MobilePage extends Page<V2010, MobilePayload, MobileResource, MobileInstance> {
  constructor(version: V2010, response: Response<string>, solution: MobileSolution);

  /**
   * Build an instance of MobileInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MobilePayload): MobileInstance;
}

declare class MobileInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V2010, payload: MobilePayload);

  /**
   * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this phone number.
   */
  accountSid: string;
  /**
   * This indicates whether the phone number requires you or your customer to have an [Address](https://www.twilio.com/docs/usage/api/addresses) registered with Twilio. Possible values are `none`, `any`, `local`, or `foreign`.
   */
  addressRequirements: MobileAddressRequirement;
  /**
   * The 34 character sid of the address associated with this number.
   */
  addressSid: string;
  /**
   * Calls to this phone number will start a new TwiML session with this API version.
   */
  apiVersion: string;
  /**
   * Phone numbers new to the Twilio platform are marked as beta. Possible values are either true or `false`.
   */
  beta: boolean;
  /**
   * This is a set of boolean properties that indicate whether a phone number can receive calls or messages.  Possible capabilities are  `Voice`, `SMS`, and `MMS` with each having a value of either `true` or `false`.
   */
  capabilities: string;
  /**
   * The date that this resource was created, given as GMT [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated, given as GMT [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * A human readable descriptive text for this resource, up to 64 characters long. By default, the `FriendlyName` is a nicely formatted version of the phone number.
   */
  friendlyName: string;
  /**
   * The identity_sid
   */
  identitySid: string;
  /**
   * Twilio owned phone numbers are marked as `twilio` while hosted phone numbers are marked as `hosted`.
   */
  origin: string;
  /**
   * The incoming phone number. e.g., +16175551212 ([E.164](http://en.wikipedia.org/wiki/E.164) format)
   */
  phoneNumber: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The 34 character sid of the application Twilio should use to handle SMSs sent to this number. If a `SmsApplicationSid` is present, Twilio will ignore all of the SMS urls above and use those set on the application.
   */
  smsApplicationSid: string;
  /**
   * The HTTP method Twilio will use when requesting the above URL. Either `GET` or `POST`.
   */
  smsFallbackMethod: string;
  /**
   * The URL that Twilio will request if an error occurs retrieving or executing the TwiML from `SmsUrl`.
   */
  smsFallbackUrl: string;
  /**
   * The HTTP method Twilio will use when making requests to the `SmsUrl`. Either `GET` or `POST`.
   */
  smsMethod: string;
  /**
   * The URL Twilio will request when receiving an incoming SMS message to this number.
   */
  smsUrl: string;
  /**
   * The URL that Twilio will request to pass status parameters (such as call ended) to your application.
   */
  statusCallback: string;
  /**
   * The HTTP method Twilio will use to make requests to the `StatusCallback` URL. Either `GET` or `POST`.
   */
  statusCallbackMethod: string;
  /**
   * The 34 character sid of the Trunk Twilio should use to handle phone calls to this number. If a `TrunkSid` is present, Twilio will ignore all of the voice urls  and voice applications above and use those set on the Trunk. Setting a `TrunkSid` will automatically delete your `VoiceApplicationSid` and vice versa.
   */
  trunkSid: string;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`.
   */
  uri: string;
  /**
   * The 34 character sid of the application Twilio should use to handle phone calls to this number. If a `VoiceApplicationSid` is present, Twilio will ignore all of the voice urls above and use those set on the application. Setting a `VoiceApplicationSid` will automatically delete your `TrunkSid` and vice versa.
   */
  voiceApplicationSid: string;
  /**
   * Look up the caller's caller-ID name from the CNAM database ($0.01 per look up). Either `true` or `false`.
   */
  voiceCallerIdLookup: boolean;
  /**
   * The HTTP method Twilio will use when requesting the `VoiceFallbackUrl`. Either `GET` or `POST`.
   */
  voiceFallbackMethod: string;
  /**
   * The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by `Url`.
   */
  voiceFallbackUrl: string;
  /**
   * The HTTP method Twilio will use when requesting the above `Url`. Either `GET` or `POST`.
   */
  voiceMethod: string;
  /**
   * The URL Twilio will request when this phone number receives a call. The VoiceURL will  no longer be used if a `VoiceApplicationSid` or a `TrunkSid` is set.
   */
  voiceUrl: string;
}

export { MobileAddressRequirement, MobileInstance, MobileList, MobileListCreateOptions, MobileListEachOptions, MobileListInstance, MobileListOptions, MobileListPageOptions, MobilePage, MobilePayload, MobileResource, MobileSolution }
