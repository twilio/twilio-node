/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the CredentialList
 *
 * @param version - Version of the resource
 */
declare function CredentialList(version: V1): CredentialListInstance;

interface CredentialResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sandbox: string;
  sid: string;
  type: CredentialPushService;
  url: string;
}

interface CredentialPayload extends CredentialResource, Page.TwilioResponsePayload {
}

interface CredentialSolution {
}

interface CredentialListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CredentialContext;
  /**
   * create a CredentialInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CredentialListInstanceCreateOptions, callback?: function);
  /**
   * Streams CredentialInstance records from the API.
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
  each(opts?: CredentialListInstanceEachOptions, callback?: (item: CredentialInstance, done: (err?: Error) => void) => void);
  /**
   * Constructs a credential
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists CredentialInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CredentialListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CredentialListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Friendly name for stored credential
 * @property certificate - [APN only] URL encoded representation of the certificate, e.
 * @property privateKey - [APN only] URL encoded representation of the private key, e.
 * @property sandbox - [APN only] use this credential for sending to production or sandbox APNs
 * @property apiKey - [GCM only] This is the "API key" for project from Google Developer console for your GCM Service application credential
 * @property secret - The secret
 */
export interface CredentialInstanceUpdateOptions {
  apiKey?: string;
  certificate?: string;
  friendlyName?: string;
  privateKey?: string;
  sandbox?: boolean;
  secret?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Friendly name for stored credential
 * @property certificate - [APN only] URL encoded representation of the certificate, e.
 * @property privateKey - [APN only] URL encoded representation of the private key, e.
 * @property sandbox - [APN only] use this credential for sending to production or sandbox APNs
 * @property apiKey - [GCM only] This is the "API key" for project from Google Developer console for your GCM Service application credential
 * @property secret - The secret
 */
export interface CredentialContextUpdateOptions {
  apiKey?: string;
  certificate?: string;
  friendlyName?: string;
  privateKey?: string;
  sandbox?: boolean;
  secret?: string;
}

/**
 * Options to pass to each
 *
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
export interface CredentialListInstanceEachOptions {
  callback?: (item: CredentialInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
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
export interface CredentialListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
export interface CredentialListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

/**
 * Options to pass to create
 *
 * @property type - Credential type, one of "gcm" or "apn"
 * @property friendlyName - Friendly name for stored credential
 * @property certificate - [APN only] URL encoded representation of the certificate, e.
 * @property privateKey - [APN only] URL encoded representation of the private key, e.
 * @property sandbox - [APN only] use this credential for sending to production or sandbox APNs
 * @property apiKey - [GCM only] This is the "API key" for project from Google Developer console for your GCM Service application credential
 * @property secret - The secret
 */
export interface CredentialListInstanceCreateOptions {
  apiKey?: string;
  certificate?: string;
  friendlyName?: string;
  privateKey?: string;
  sandbox?: boolean;
  secret?: string;
  type: credential.push_service;
}


declare class CredentialPage extends Page {
  /**
   * @constructor Twilio.Chat.V1.CredentialPage
   * @augments Page
   * @description Initialize the CredentialPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Chat.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of CredentialInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class CredentialInstance {
  /**
   * @constructor Twilio.Chat.V1.CredentialInstance
   * @description Initialize the CredentialContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account[/console] responsible for this resource.
   * @property friendlyName - The human-readable name of this resource.
   * @property type - Indicates which push notifications service this credential is for - either gcm or apn
   * @property sandbox - [APN only] true when this resource should use the sandbox APN service.
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property url - An absolute URL for this credential resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V1, payload: object, sid: sid);

  _proxy?: CredentialContext;
  /**
   * fetch a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the CredentialInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
  /**
   * update a CredentialInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: CredentialInstanceUpdateOptions, callback?: function);
}


declare class CredentialContext {
  /**
   * @constructor Twilio.Chat.V1.CredentialContext
   * @description Initialize the CredentialContext
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V1, sid: sid);

  /**
   * fetch a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a CredentialInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: CredentialContextUpdateOptions, callback?: function);
}

export { CredentialContext, CredentialInstance, CredentialList, CredentialListInstance, CredentialPage, CredentialPayload, CredentialResource, CredentialSolution }
