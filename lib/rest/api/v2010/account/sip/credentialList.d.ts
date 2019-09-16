/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { CredentialList } from './credentialList/credential';
import { CredentialListInstance } from './credentialList/credential';
import { SerializableClass } from '../../../../../interfaces';

/**
 * Initialize the CredentialListList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function CredentialListList(version: V2010, accountSid: string): CredentialListListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - Human readable descriptive text
 */
interface CredentialListInstanceUpdateOptions {
  friendlyName: string;
}

interface CredentialListListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CredentialListContext;
  /**
   * create a CredentialListInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CredentialListListInstanceCreateOptions, callback?: (error: Error | null, item: CredentialListInstance) => any): Promise<CredentialListInstance>;
  /**
   * Streams CredentialListInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: CredentialListListInstanceEachOptions, callback?: (item: CredentialListInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a credential_list
   *
   * @param sid - Fetch by unique credential list Sid
   */
  get(sid: string): CredentialListContext;
  /**
   * Retrieve a single target page of CredentialListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CredentialListPage) => any): Promise<CredentialListPage>;
  /**
   * Lists CredentialListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CredentialListListInstanceOptions, callback?: (error: Error | null, items: CredentialListInstance[]) => any): Promise<CredentialListInstance[]>;
  /**
   * Retrieve a single page of CredentialListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CredentialListListInstancePageOptions, callback?: (error: Error | null, items: CredentialListPage) => any): Promise<CredentialListPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - Human readable descriptive text
 */
interface CredentialListListInstanceCreateOptions {
  friendlyName: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
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
 */
interface CredentialListListInstanceEachOptions {
  callback?: (item: CredentialListInstance, done: (err?: Error) => void) => void;
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
interface CredentialListListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface CredentialListListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface CredentialListPayload extends CredentialListResource, Page.TwilioResponsePayload {
}

interface CredentialListResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  subresource_uris: string;
  uri: string;
}

interface CredentialListSolution {
  accountSid?: string;
}


declare class CredentialListContext {
  /**
   * Initialize the CredentialListContext
   *
   * @param version - Version of the resource
   * @param accountSid - The unique id of the Account that is responsible for this resource.
   * @param sid - Fetch by unique credential list Sid
   */
  constructor(version: V2010, accountSid: string, sid: string);

  credentials: CredentialListInstance;
  /**
   * fetch a CredentialListInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CredentialListInstance) => any): Promise<CredentialListInstance>;
  /**
   * remove a CredentialListInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CredentialListInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a CredentialListInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: CredentialListInstanceUpdateOptions, callback?: (error: Error | null, items: CredentialListInstance) => any): Promise<CredentialListInstance>;
}


declare class CredentialListInstance extends SerializableClass {
  /**
   * Initialize the CredentialListContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   * @param sid - Fetch by unique credential list Sid
   */
  constructor(version: V2010, payload: CredentialListPayload, accountSid: string, sid: string);

  private _proxy: CredentialListContext;
  accountSid: string;
  /**
   * Access the credentials
   */
  credentials(): CredentialListInstance;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a CredentialListInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CredentialListInstance) => any): Promise<CredentialListInstance>;
  friendlyName: string;
  /**
   * remove a CredentialListInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CredentialListInstance) => any): Promise<boolean>;
  sid: string;
  subresourceUris: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a CredentialListInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: CredentialListInstanceUpdateOptions, callback?: (error: Error | null, items: CredentialListInstance) => any): Promise<CredentialListInstance>;
  uri: string;
}


declare class CredentialListPage extends Page<V2010, CredentialListPayload, CredentialListResource, CredentialListInstance> {
  /**
   * Initialize the CredentialListPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: CredentialListSolution);

  /**
   * Build an instance of CredentialListInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CredentialListPayload): CredentialListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { CredentialListContext, CredentialListInstance, CredentialListInstanceUpdateOptions, CredentialListList, CredentialListListInstance, CredentialListListInstanceCreateOptions, CredentialListListInstanceEachOptions, CredentialListListInstanceOptions, CredentialListListInstancePageOptions, CredentialListPage, CredentialListPayload, CredentialListResource, CredentialListSolution }
