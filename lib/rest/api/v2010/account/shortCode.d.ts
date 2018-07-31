/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the ShortCodeList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function ShortCodeList(version: V2010, accountSid: string): ShortCodeListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of this resource
 * @property apiVersion - The API version to use
 * @property smsUrl - URL Twilio will request when receiving an SMS
 * @property smsMethod - HTTP method to use when requesting the sms url
 * @property smsFallbackUrl - URL Twilio will request if an error occurs in executing TwiML
 * @property smsFallbackMethod - HTTP method Twilio will use with sms fallback url
 */
interface ShortCodeInstanceUpdateOptions {
  apiVersion?: string;
  friendlyName?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsUrl?: string;
}

interface ShortCodeListInstance {
  /**
   * @param sid - sid of instance
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
   * @param callback - Function to process each record
   */
  each(opts?: ShortCodeListInstanceEachOptions, callback?: (item: ShortCodeInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a short_code
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
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ShortCodePage) => any): Promise<ShortCodePage>;
  /**
   * Lists ShortCodeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ShortCodeListInstanceOptions, callback?: (error: Error | null, items: ShortCodeInstance[]) => any): Promise<ShortCodeInstance[]>;
  /**
   * Retrieve a single page of ShortCodeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ShortCodeListInstancePageOptions, callback?: (error: Error | null, items: ShortCodePage) => any): Promise<ShortCodePage>;
}

/**
 * Options to pass to each
 *
 * @property friendlyName - Filter by friendly name
 * @property shortCode - Filter by ShortCode
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 */
interface ShortCodeListInstanceEachOptions {
  callback?: (item: ShortCodeInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
  shortCode?: string;
}

/**
 * Options to pass to list
 *
 * @property friendlyName - Filter by friendly name
 * @property shortCode - Filter by ShortCode
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface ShortCodeListInstanceOptions {
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
  shortCode?: string;
}

/**
 * Options to pass to page
 *
 * @property friendlyName - Filter by friendly name
 * @property shortCode - Filter by ShortCode
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
interface ShortCodeListInstancePageOptions {
  friendlyName?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  shortCode?: string;
}

interface ShortCodePayload extends ShortCodeResource, Page.TwilioResponsePayload {
}

interface ShortCodeResource {
  account_sid: string;
  api_version: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  short_code: string;
  sid: string;
  sms_fallback_method: string;
  sms_fallback_url: string;
  sms_method: string;
  sms_url: string;
  uri: string;
}

interface ShortCodeSolution {
  accountSid?: string;
}


declare class ShortCodePage extends Page<V2010, ShortCodePayload, ShortCodeResource, ShortCodeInstance> {
  /**
   * Initialize the ShortCodePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
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
   * Initialize the ShortCodeContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property apiVersion - The API version to use
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property friendlyName - A human readable description of this resource
   * @property shortCode - The short code. e.g., 894546.
   * @property sid - A string that uniquely identifies this short-codes
   * @property smsFallbackMethod - HTTP method Twilio will use with sms fallback url
   * @property smsFallbackUrl - URL Twilio will request if an error occurs in executing TwiML
   * @property smsMethod - HTTP method to use when requesting the sms url
   * @property smsUrl - URL Twilio will request when receiving an SMS
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param sid - Fetch by unique short-code Sid
   */
  constructor(version: V2010, payload: ShortCodePayload, accountSid: string, sid: string);

  private _proxy: ShortCodeContext;
  accountSid: string;
  apiVersion: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ShortCodeInstance) => any): void;
  friendlyName: string;
  shortCode: string;
  sid: string;
  smsFallbackMethod: string;
  smsFallbackUrl: string;
  smsMethod: string;
  smsUrl: string;
  /**
   * Produce a plain JSON object version of the ShortCodeInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a ShortCodeInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ShortCodeInstanceUpdateOptions, callback?: (error: Error | null, items: ShortCodeInstance) => any): void;
  uri: string;
}


declare class ShortCodeContext {
  /**
   * Initialize the ShortCodeContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique short-code Sid
   */
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ShortCodeInstance) => any): void;
  /**
   * update a ShortCodeInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ShortCodeInstanceUpdateOptions, callback?: (error: Error | null, items: ShortCodeInstance) => any): void;
}

export { ShortCodeContext, ShortCodeInstance, ShortCodeList, ShortCodeListInstance, ShortCodeListInstanceEachOptions, ShortCodeListInstanceOptions, ShortCodeListInstancePageOptions, ShortCodePage, ShortCodePayload, ShortCodeResource, ShortCodeSolution }
