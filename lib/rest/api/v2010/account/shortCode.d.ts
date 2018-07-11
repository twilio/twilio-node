/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

declare function ShortCodeList(version: V2010, accountSid: string): ShortCodeListInstance

interface ShortCodeResource {
  /**
   * The unique id of the [Account](https://www.twilio.com/docs/api/rest/account) that owns this short code.
   */
  account_sid: string;
  /**
   * SMSs to this short code will start a new TwiML session with this API version.
   */
  api_version: string;
  /**
   * The date that this resource was created, given as GMT [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  date_created: Date;
  /**
   * The date that this resource was last updated, given as GMT [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  date_updated: Date;
  /**
   * A human readable descriptive text for this resource, up to 64 characters long. By default, the `FriendlyName` is just the short code.
   */
  friendly_name: string;
  /**
   * The short code. e.g., 894546.
   */
  short_code: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
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
   * The URL Twilio will request when receiving an incoming SMS message to this short code.
   */
  sms_url: string;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`.
   */
  uri: string;
}

interface ShortCodePayload extends ShortCodeResource, Page.TwilioResponsePayload {
}

interface ShortCodeSolution {
  accountSid: string;
}

interface ShortCodeListEachOptions extends ListEachOptions<ShortCodeInstance> {
  /**
   * Only show the ShortCode resources with friendly names that exactly match this name.
   */
  friendlyName?: string;
  /**
   * Only show the ShortCode resources that match this pattern. You can specify partial numbers and use '*' as a wildcard for any digit.
   */
  shortCode?: string;
}

interface ShortCodeListOptions extends ListOptions<ShortCodeInstance> {
  /**
   * Only show the ShortCode resources with friendly names that exactly match this name.
   */
  friendlyName?: string;
  /**
   * Only show the ShortCode resources that match this pattern. You can specify partial numbers and use '*' as a wildcard for any digit.
   */
  shortCode?: string;
}

interface ShortCodeListPageOptions extends PageOptions<ShortCodePage> {
  /**
   * Only show the ShortCode resources with friendly names that exactly match this name.
   */
  friendlyName?: string;
  /**
   * Only show the ShortCode resources that match this pattern. You can specify partial numbers and use '*' as a wildcard for any digit.
   */
  shortCode?: string;
}

interface ShortCodeListInstance {
  /**
   * Gets context of a single ShortCode resource
   *
   * @param sid - Fetch by unique short-code Sid
   */
  (sid: string): ShortCodeContext;
  /**
   * Streams ShortCodeInstance records from the API.
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
  each(opts?: ShortCodeListEachOptions): void;
  /**
   * Streams ShortCodeInstance records from the API.
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
  each(callback: (item: ShortCodeInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single ShortCode resource
   *
   * @param sid - Fetch by unique short-code Sid
   */
  get(sid: string): ShortCodeContext;
  /**
   * Retrieve a single target page of ShortCodeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<ShortCodePage>;
  /**
   * Retrieve a single target page of ShortCodeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: ShortCodePage) => any): void;
  /**
   * Lists ShortCodeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: ShortCodeListOptions): Promise<ShortCodeInstance[]>;
  /**
   * Lists ShortCodeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: ShortCodeListOptions, callback: (error: Error | null, items: ShortCodeInstance[]) => any): void;
  /**
   * Lists ShortCodeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: ShortCodeInstance[]) => any): void;
  /**
   * Retrieve a single page of ShortCodeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: ShortCodeListPageOptions): Promise<ShortCodePage>;
  /**
   * Retrieve a single page of ShortCodeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: ShortCodeListPageOptions, callback: (error: Error | null, items: ShortCodePage) => any): void;
  /**
   * Retrieve a single page of ShortCodeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: ShortCodePage) => any): void;
}

interface ShortCodeListFetchOptions {
  /**
   * SMSs to this short code will start a new TwiML session with this API version. Either `2010-04-01` or `2008-08-01`.
   */
  apiVersion?: string;
  /**
   * A human readable descriptive text for this resource, up to 64 characters long. By default, the `FriendlyName` is just the short code.
   */
  friendlyName?: string;
  /**
   * The HTTP method that should be used to request the `SmsFallbackUrl`. Either `GET` or `POST`.
   */
  smsFallbackMethod?: string;
  /**
   * The URL that Twilio will request if an error occurs retrieving or executing the TwiML from `SmsUrl`.
   */
  smsFallbackUrl?: string;
  /**
   * The HTTP method Twilio will use when making requests to the `SmsUrl`. Either `GET` or `POST`.
   */
  smsMethod?: string;
  /**
   * The URL Twilio will request when receiving an incoming SMS message to this short code.
   */
  smsUrl?: string;
}

interface ShortCodeListFetchOptions {
  /**
   * SMSs to this short code will start a new TwiML session with this API version. Either `2010-04-01` or `2008-08-01`.
   */
  apiVersion?: string;
  /**
   * A human readable descriptive text for this resource, up to 64 characters long. By default, the `FriendlyName` is just the short code.
   */
  friendlyName?: string;
  /**
   * The HTTP method that should be used to request the `SmsFallbackUrl`. Either `GET` or `POST`.
   */
  smsFallbackMethod?: string;
  /**
   * The URL that Twilio will request if an error occurs retrieving or executing the TwiML from `SmsUrl`.
   */
  smsFallbackUrl?: string;
  /**
   * The HTTP method Twilio will use when making requests to the `SmsUrl`. Either `GET` or `POST`.
   */
  smsMethod?: string;
  /**
   * The URL Twilio will request when receiving an incoming SMS message to this short code.
   */
  smsUrl?: string;
}

declare class ShortCodePage extends Page<V2010, ShortCodePayload, ShortCodeResource, ShortCodeInstance> {
  constructor(version: V2010, response: Response<string>, solution: ShortCodeSolution);

  /**
   * Build an instance of ShortCodeInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ShortCodePayload): ShortCodeInstance;
}

declare class ShortCodeInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique short-code Sid
   */
  constructor(version: V2010, payload: ShortCodePayload, accountSid: string, sid: string);

  private _proxy: ShortCodeContext;
  /**
   * The unique id of the [Account](https://www.twilio.com/docs/api/rest/account) that owns this short code.
   */
  accountSid: string;
  /**
   * SMSs to this short code will start a new TwiML session with this API version.
   */
  apiVersion: string;
  /**
   * The date that this resource was created, given as GMT [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated, given as GMT [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * fetch a ShortCodeInstance
   *
   * @returns Promise that resolves to processed ShortCodeInstance
   */
  fetch(): Promise<ShortCodeInstance>;
  /**
   * fetch a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ShortCodeInstance) => any): void;
  /**
   * A human readable descriptive text for this resource, up to 64 characters long. By default, the `FriendlyName` is just the short code.
   */
  friendlyName: string;
  /**
   * The short code. e.g., 894546.
   */
  shortCode: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
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
   * The URL Twilio will request when receiving an incoming SMS message to this short code.
   */
  smsUrl: string;
  /**
   * update a ShortCodeInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ShortCodeInstance
   */
  update(opts?: ShortCodeListFetchOptions): Promise<ShortCodeInstance>;
  /**
   * update a ShortCodeInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ShortCodeListFetchOptions, callback: (error: Error | null, items: ShortCodeInstance) => any): void;
  /**
   * update a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ShortCodeInstance) => any): void;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`.
   */
  uri: string;
}

declare class ShortCodeContext {
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a ShortCodeInstance
   *
   * @returns Promise that resolves to processed ShortCodeInstance
   */
  fetch(): Promise<ShortCodeInstance>;
  /**
   * fetch a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ShortCodeInstance) => any): void;
  /**
   * update a ShortCodeInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ShortCodeInstance
   */
  update(opts?: ShortCodeListFetchOptions): Promise<ShortCodeInstance>;
  /**
   * update a ShortCodeInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ShortCodeListFetchOptions, callback: (error: Error | null, items: ShortCodeInstance) => any): void;
  /**
   * update a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ShortCodeInstance) => any): void;
}

export { ShortCodeContext, ShortCodeInstance, ShortCodeList, ShortCodeListEachOptions, ShortCodeListFetchOptions, ShortCodeListInstance, ShortCodeListOptions, ShortCodeListPageOptions, ShortCodePage, ShortCodePayload, ShortCodeResource, ShortCodeSolution }
