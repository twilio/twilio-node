/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the UserBindingList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 * @param identity - The identity
 */
declare function UserBindingList(version: V1, serviceSid: string, identity: string): UserBindingListInstance;

interface UserBindingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): UserBindingContext;
  /**
   * create a UserBindingInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: UserBindingListInstanceCreateOptions, callback?: (error: Error | null, items: UserBindingListInstance) => any): Promise<UserBindingInstance>;
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
 * Options to pass to create
 *
 * @property bindingType - The binding_type
 * @property address - The address
 * @property tag - The tag
 * @property notificationProtocolVersion - The notification_protocol_version
 * @property credentialSid - The credential_sid
 * @property endpoint - The endpoint
 */
interface UserBindingListInstanceCreateOptions {
  address: string;
  bindingType: user_binding.binding_type;
  credentialSid?: string;
  endpoint?: string;
  notificationProtocolVersion?: string;
  tag?: string|list;
}

/**
 * Options to pass to each
 *
 * @property startDate - The start_date
 * @property endDate - The end_date
 * @property tag - The tag
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
  callback?: (item: UserBindingInstance, done: (err?: Error) => void) => void;
  done?: Function;
  endDate?: Date;
  limit?: number;
  pageSize?: number;
  startDate?: Date;
  tag?: string|list;
}

/**
 * Options to pass to list
 *
 * @property startDate - The start_date
 * @property endDate - The end_date
 * @property tag - The tag
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
  endDate?: Date;
  limit?: number;
  pageSize?: number;
  startDate?: Date;
  tag?: string|list;
}

/**
 * Options to pass to page
 *
 * @property startDate - The start_date
 * @property endDate - The end_date
 * @property tag - The tag
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
interface UserBindingListInstancePageOptions {
  endDate?: Date;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  startDate?: Date;
  tag?: string|list;
}

interface UserBindingPayload extends UserBindingResource, Page.TwilioResponsePayload {
}

interface UserBindingResource {
  account_sid: string;
  address: string;
  binding_type: string;
  credential_sid: string;
  date_created: Date;
  date_updated: Date;
  endpoint: string;
  identity: string;
  links: string;
  notification_protocol_version: string;
  service_sid: string;
  sid: string;
  tags: string;
  url: string;
}

interface UserBindingSolution {
  identity?: string;
  serviceSid?: string;
}


declare class UserBindingPage extends Page<V1, UserBindingPayload, UserBindingResource, UserBindingInstance> {
  /**
   * Initialize the UserBindingPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: UserBindingSolution);

  /**
   * Build an instance of UserBindingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UserBindingPayload): UserBindingInstance;
}


declare class UserBindingInstance extends SerializableClass {
  /**
   * Initialize the UserBindingContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property credentialSid - The credential_sid
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property notificationProtocolVersion - The notification_protocol_version
   * @property endpoint - The endpoint
   * @property identity - The identity
   * @property bindingType - The binding_type
   * @property address - The address
   * @property tags - The tags
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param identity - The identity
   * @param sid - The sid
   */
  constructor(version: V1, payload: UserBindingPayload, serviceSid: string, identity: string, sid: string);

  private _proxy: UserBindingContext;
  accountSid: string;
  address: string;
  bindingType: string;
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
  links: string;
  notificationProtocolVersion: string;
  /**
   * remove a UserBindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: UserBindingInstance) => any): void;
  serviceSid: string;
  sid: string;
  tags: string;
  /**
   * Produce a plain JSON object version of the UserBindingInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
}


declare class UserBindingContext {
  /**
   * Initialize the UserBindingContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param identity - The identity
   * @param sid - The sid
   */
  constructor(version: V1, serviceSid: string, identity: string, sid: string);

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

export { UserBindingContext, UserBindingInstance, UserBindingList, UserBindingListInstance, UserBindingListInstanceCreateOptions, UserBindingListInstanceEachOptions, UserBindingListInstanceOptions, UserBindingListInstancePageOptions, UserBindingPage, UserBindingPayload, UserBindingResource, UserBindingSolution }
