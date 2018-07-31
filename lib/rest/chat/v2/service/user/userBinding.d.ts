/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2 = require('../../../V2');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the UserBindingList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this binding belongs to.
 * @param userSid - The unique id of the User for this binding.
 */
declare function UserBindingList(version: V2, serviceSid: string, userSid: string): UserBindingListInstance;

interface UserBindingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): UserBindingContext;
  /**
   * Streams UserBindingInstance records from the API.
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
  each(opts?: UserBindingListInstanceEachOptions, callback?: (item: UserBindingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a user_binding
   *
   * @param sid - The sid
   */
  get(sid: string): UserBindingContext;
  /**
   * Retrieve a single target page of UserBindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: UserBindingPage) => any): Promise<UserBindingPage>;
  /**
   * Lists UserBindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: UserBindingListInstanceOptions, callback?: (error: Error | null, items: UserBindingInstance[]) => any): Promise<UserBindingInstance[]>;
  /**
   * Retrieve a single page of UserBindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: UserBindingListInstancePageOptions, callback?: (error: Error | null, items: UserBindingPage) => any): Promise<UserBindingPage>;
}

/**
 * Options to pass to each
 *
 * @property bindingType - The push technology used for the bindings returned.
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
interface UserBindingListInstanceEachOptions {
  bindingType?: user_binding.binding_type|list;
  callback?: (item: UserBindingInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property bindingType - The push technology used for the bindings returned.
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
interface UserBindingListInstanceOptions {
  bindingType?: user_binding.binding_type|list;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property bindingType - The push technology used for the bindings returned.
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
interface UserBindingListInstancePageOptions {
  bindingType?: user_binding.binding_type|list;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface UserBindingPayload extends UserBindingResource, Page.TwilioResponsePayload {
}

interface UserBindingResource {
  account_sid: string;
  binding_type: UserBindingBindingType;
  credential_sid: string;
  date_created: Date;
  date_updated: Date;
  endpoint: string;
  identity: string;
  message_types: string;
  service_sid: string;
  sid: string;
  url: string;
  user_sid: string;
}

interface UserBindingSolution {
  serviceSid?: string;
  userSid?: string;
}


declare class UserBindingPage extends Page<V2, UserBindingPayload, UserBindingResource, UserBindingInstance> {
  /**
   * Initialize the UserBindingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: UserBindingSolution);

  /**
   * Build an instance of UserBindingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UserBindingPayload): UserBindingInstance;
}


declare class UserBindingInstance extends SerializableClass {
  /**
   * Initialize the UserBindingContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this binding.
   * @property serviceSid - The unique id of the Service this binding belongs to.
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property endpoint - The unique endpoint identifier for this Binding.
   * @property identity - A unique string identifier for the Binding for this User in this Service.
   * @property userSid - The unique id of the User for this binding.
   * @property credentialSid - The unique id of the Credential for this binding.
   * @property bindingType - The push technology to use for this binding.
   * @property messageTypes - List of message types for this binding.
   * @property url - An absolute URL for this binding.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this binding belongs to.
   * @param userSid - The unique id of the User for this binding.
   * @param sid - The sid
   */
  constructor(version: V2, payload: UserBindingPayload, serviceSid: string, userSid: string, sid: string);

  private _proxy: UserBindingContext;
  accountSid: string;
  bindingType: user_binding.binding_type;
  credentialSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  endpoint: string;
  /**
   * fetch a UserBindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: UserBindingInstance) => any): void;
  identity: string;
  messageTypes: string;
  /**
   * remove a UserBindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: UserBindingInstance) => any): void;
  serviceSid: string;
  sid: string;
  /**
   * Produce a plain JSON object version of the UserBindingInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
  userSid: string;
}


declare class UserBindingContext {
  /**
   * Initialize the UserBindingContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param userSid - The user_sid
   * @param sid - The sid
   */
  constructor(version: V2, serviceSid: string, userSid: string, sid: string);

  /**
   * fetch a UserBindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: UserBindingInstance) => any): void;
  /**
   * remove a UserBindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: UserBindingInstance) => any): void;
}

export { UserBindingContext, UserBindingInstance, UserBindingList, UserBindingListInstance, UserBindingListInstanceEachOptions, UserBindingListInstanceOptions, UserBindingListInstancePageOptions, UserBindingPage, UserBindingPayload, UserBindingResource, UserBindingSolution }
