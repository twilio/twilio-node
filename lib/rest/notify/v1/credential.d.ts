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
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
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
  create(opts: CredentialListInstanceCreateOptions, callback?: (error: Error | null, items: CredentialListInstance) => any): Promise<CredentialInstance>;
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
  each(opts?: CredentialListInstanceEachOptions, callback?: (item: CredentialInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a credential
   *
   * @param sid - The sid
   */
  get(sid: string): CredentialContext;
  /**
   * Retrieve a single target page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CredentialPage) => any): Promise<CredentialPage>;
  /**
   * Lists CredentialInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CredentialListInstanceOptions, callback?: (error: Error | null, items: CredentialInstance[]) => any): Promise<CredentialInstance[]>;
  /**
   * Retrieve a single page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CredentialListInstancePageOptions, callback?: (error: Error | null, items: CredentialPage) => any): Promise<CredentialPage>;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Friendly name for stored credential
 * @property certificate - [APN only] URL encoded representation of the certificate.
 * @property privateKey - [APN only] URL encoded representation of the private key.
 * @property sandbox - [APN only] use this credential for sending to production or sandbox APNs
 * @property apiKey - [GCM only] This is the "Server key" of your project from Firebase console under Settings / Cloud messaging.
 * @property secret - [FCM only] This is the "Server key" of your project from Firebase console under Settings / Cloud messaging.
 */
interface CredentialInstanceUpdateOptions {
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
 * @property certificate - [APN only] URL encoded representation of the certificate.
 * @property privateKey - [APN only] URL encoded representation of the private key.
 * @property sandbox - [APN only] use this credential for sending to production or sandbox APNs
 * @property apiKey - [GCM only] This is the "Server key" of your project from Firebase console under Settings / Cloud messaging.
 * @property secret - [FCM only] This is the "Server key" of your project from Firebase console under Settings / Cloud messaging.
 */
interface CredentialInstanceUpdateOptions {
  apiKey?: string;
  certificate?: string;
  friendlyName?: string;
  privateKey?: string;
  sandbox?: boolean;
  secret?: string;
}


declare class CredentialPage extends Page<V1, CredentialPayload, CredentialResource, CredentialInstance> {
  /**
   * Initialize the CredentialPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: CredentialSolution);

  /**
   * Build an instance of CredentialInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CredentialPayload): CredentialInstance;
}


declare class CredentialInstance extends SerializableClass {
  /**
   * Initialize the CredentialContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property friendlyName - Friendly name for stored credential
   * @property type - Credential type, one of "gcm", "fcm", or "apn"
   * @property sandbox - [APN only] use this credential for sending to production or sandbox APNs
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V1, payload: CredentialPayload, sid: string);

  private _proxy: CredentialContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CredentialInstance) => any): void;
  friendlyName: string;
  /**
   * remove a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CredentialInstance) => any): void;
  sandbox: string;
  sid: string;
  /**
   * Produce a plain JSON object version of the CredentialInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  type: credential.push_service;
  /**
   * update a CredentialInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: CredentialInstanceUpdateOptions, callback?: (error: Error | null, items: CredentialInstance) => any): void;
  url: string;
}


declare class CredentialContext {
  /**
   * Initialize the CredentialContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CredentialInstance) => any): void;
  /**
   * remove a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CredentialInstance) => any): void;
  /**
   * update a CredentialInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: CredentialInstanceUpdateOptions, callback?: (error: Error | null, items: CredentialInstance) => any): void;
}

export { CredentialContext, CredentialInstance, CredentialList, CredentialListInstance, CredentialListInstanceCreateOptions, CredentialListInstanceEachOptions, CredentialListInstanceOptions, CredentialListInstancePageOptions, CredentialPage, CredentialPayload, CredentialResource, CredentialSolution }
