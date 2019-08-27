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
 * Initialize the KeyList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function KeyList(version: V2010, accountSid: string): KeyListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A string to describe the resource
 */
interface KeyInstanceUpdateOptions {
  friendlyName?: string;
}

interface KeyListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): KeyContext;
  /**
   * Streams KeyInstance records from the API.
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
  each(opts?: KeyListInstanceEachOptions, callback?: (item: KeyInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a key
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): KeyContext;
  /**
   * Retrieve a single target page of KeyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: KeyPage) => any): Promise<KeyPage>;
  /**
   * Lists KeyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: KeyListInstanceOptions, callback?: (error: Error | null, items: KeyInstance[]) => any): Promise<KeyInstance[]>;
  /**
   * Retrieve a single page of KeyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: KeyListInstancePageOptions, callback?: (error: Error | null, items: KeyPage) => any): Promise<KeyPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
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
interface KeyListInstanceEachOptions {
  callback?: (item: KeyInstance, done: (err?: Error) => void) => void;
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
interface KeyListInstanceOptions {
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
interface KeyListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface KeyPayload extends KeyResource, Page.TwilioResponsePayload {
}

interface KeyResource {
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
}

interface KeySolution {
  accountSid?: string;
}


declare class KeyContext {
  /**
   * Initialize the KeyContext
   *
   * @param version - Version of the resource
   * @param accountSid - The SID of the Account that created the resource to fetch
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: KeyInstance) => any): Promise<KeyInstance>;
  /**
   * remove a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a KeyInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: KeyInstanceUpdateOptions, callback?: (error: Error | null, items: KeyInstance) => any): Promise<KeyInstance>;
}


declare class KeyInstance extends SerializableClass {
  /**
   * Initialize the KeyContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2010, payload: KeyPayload, accountSid: string, sid: string);

  private _proxy: KeyContext;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: KeyInstance) => any): void;
  friendlyName: string;
  /**
   * remove a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: KeyInstance) => any): void;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a KeyInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: KeyInstanceUpdateOptions, callback?: (error: Error | null, items: KeyInstance) => any): void;
}


declare class KeyPage extends Page<V2010, KeyPayload, KeyResource, KeyInstance> {
  /**
   * Initialize the KeyPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: KeySolution);

  /**
   * Build an instance of KeyInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: KeyPayload): KeyInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { KeyContext, KeyInstance, KeyInstanceUpdateOptions, KeyList, KeyListInstance, KeyListInstanceEachOptions, KeyListInstanceOptions, KeyListInstancePageOptions, KeyPage, KeyPayload, KeyResource, KeySolution }
