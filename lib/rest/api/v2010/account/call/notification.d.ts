/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the NotificationList
 *
 * @param version - Version of the resource
 * @param accountSid - The account_sid
 * @param callSid - The call_sid
 */
declare function NotificationList(version: V2010, accountSid: string, callSid: string): NotificationListInstance;

interface NotificationResource {
  account_sid: string;
  api_version: string;
  call_sid: string;
  date_created: Date;
  date_updated: Date;
  error_code: string;
  log: string;
  message_date: Date;
  message_text: string;
  more_info: string;
  request_method: string;
  request_url: string;
  request_variables?: string;
  response_body?: string;
  response_headers?: string;
  sid: string;
  uri: string;
}

interface NotificationPayload extends NotificationResource, Page.TwilioResponsePayload {
}

interface NotificationSolution {
  accountSid?: string;
  callSid?: string;
}

interface NotificationListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): NotificationContext;
  /**
   * Streams NotificationInstance records from the API.
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
  each(opts?: NotificationListInstanceEachOptions, callback?: (item: NotificationInstance, done: (err?: Error) => void) => void);
  /**
   * Constructs a notification
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of NotificationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists NotificationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: NotificationListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of NotificationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: NotificationListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to each
 *
 * @property log - The log
 * @property messageDateBefore - The message_date
 * @property messageDate - The message_date
 * @property messageDateAfter - The message_date
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
export interface NotificationListInstanceEachOptions {
  callback?: (item: NotificationInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  log?: number;
  messageDate?: Date;
  messageDateAfter?: Date;
  messageDateBefore?: Date;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property log - The log
 * @property messageDateBefore - The message_date
 * @property messageDate - The message_date
 * @property messageDateAfter - The message_date
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
export interface NotificationListInstanceOptions {
  limit?: number;
  log?: number;
  messageDate?: Date;
  messageDateAfter?: Date;
  messageDateBefore?: Date;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property log - The log
 * @property messageDateBefore - The message_date
 * @property messageDate - The message_date
 * @property messageDateAfter - The message_date
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
export interface NotificationListInstancePageOptions {
  log?: number;
  messageDate?: Date;
  messageDateAfter?: Date;
  messageDateBefore?: Date;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class NotificationPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.CallContext.NotificationPage
   * @augments Page
   * @description Initialize the NotificationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of NotificationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class NotificationInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.CallContext.NotificationInstance
   * @description Initialize the NotificationContext
   *
   * @property accountSid - The account_sid
   * @property apiVersion - The api_version
   * @property callSid - The call_sid
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property errorCode - The error_code
   * @property log - The log
   * @property messageDate - The message_date
   * @property messageText - The message_text
   * @property moreInfo - The more_info
   * @property requestMethod - The request_method
   * @property requestUrl - The request_url
   * @property requestVariables - The request_variables
   * @property responseBody - The response_body
   * @property responseHeaders - The response_headers
   * @property sid - The sid
   * @property uri - The uri
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param callSid - The call_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, callSid: sid, sid: sid);

  _proxy?: NotificationContext;
  /**
   * fetch a NotificationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a NotificationInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the NotificationInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
}


declare class NotificationContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.CallContext.NotificationContext
   * @description Initialize the NotificationContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param callSid - The call_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, callSid: sid, sid: sid);

  /**
   * fetch a NotificationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a NotificationInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { NotificationContext, NotificationInstance, NotificationList, NotificationListInstance, NotificationPage, NotificationPayload, NotificationResource, NotificationSolution }
