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

declare function NotificationList(version: V2010, accountSid: string, callSid: string): NotificationListInstance

interface NotificationResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The api_version
   */
  api_version: string;
  /**
   * The call_sid
   */
  call_sid: string;
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The error_code
   */
  error_code: string;
  /**
   * The log
   */
  log: string;
  /**
   * The message_date
   */
  message_date: Date;
  /**
   * The message_text
   */
  message_text: string;
  /**
   * The more_info
   */
  more_info: string;
  /**
   * The request_method
   */
  request_method: string;
  /**
   * The request_url
   */
  request_url: string;
  /**
   * The request_variables
   */
  request_variables?: string;
  /**
   * The response_body
   */
  response_body?: string;
  /**
   * The response_headers
   */
  response_headers?: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The uri
   */
  uri: string;
}

interface NotificationPayload extends NotificationResource, Page.TwilioResponsePayload {
}

interface NotificationSolution {
  accountSid: string;
  callSid: string;
}

interface NotificationListEachOptions extends ListEachOptions<NotificationInstance> {
  /**
   * The log
   */
  log?: number;
  /**
   * The message_date
   */
  messageDate?: Date;
}

interface NotificationListOptions extends ListOptions<NotificationInstance> {
  /**
   * The log
   */
  log?: number;
  /**
   * The message_date
   */
  messageDate?: Date;
}

interface NotificationListPageOptions extends PageOptions<NotificationPage> {
  /**
   * The log
   */
  log?: number;
  /**
   * The message_date
   */
  messageDate?: Date;
}

interface NotificationListInstance {
  /**
   * Gets context of a single Notification resource
   *
   * @param sid - The sid
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
   */
  each(opts?: NotificationListEachOptions): void;
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
   * @param callback - Callback to handle processed record
   */
  each(callback: (item: NotificationInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Notification resource
   *
   * @param sid - The sid
   */
  get(sid: string): NotificationContext;
  /**
   * Retrieve a single target page of NotificationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<NotificationPage>;
  /**
   * Retrieve a single target page of NotificationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: NotificationPage) => any): void;
  /**
   * Lists NotificationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: NotificationListOptions): Promise<NotificationInstance[]>;
  /**
   * Lists NotificationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: NotificationListOptions, callback: (error: Error | null, items: NotificationInstance[]) => any): void;
  /**
   * Lists NotificationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: NotificationInstance[]) => any): void;
  /**
   * Retrieve a single page of NotificationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: NotificationListPageOptions): Promise<NotificationPage>;
  /**
   * Retrieve a single page of NotificationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: NotificationListPageOptions, callback: (error: Error | null, items: NotificationPage) => any): void;
  /**
   * Retrieve a single page of NotificationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: NotificationPage) => any): void;
}

declare class NotificationPage extends Page<V2010, NotificationPayload, NotificationResource, NotificationInstance> {
  constructor(version: V2010, response: Response<string>, solution: NotificationSolution);

  /**
   * Build an instance of NotificationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: NotificationPayload): NotificationInstance;
}

declare class NotificationInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param callSid - The call_sid
   * @param sid - The sid
   */
  constructor(version: V2010, payload: NotificationPayload, accountSid: string, callSid: string, sid: string);

  private _proxy: NotificationContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The api_version
   */
  apiVersion: string;
  /**
   * The call_sid
   */
  callSid: string;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * The error_code
   */
  errorCode: string;
  /**
   * fetch a NotificationInstance
   *
   * @returns Promise that resolves to processed NotificationInstance
   */
  fetch(): Promise<NotificationInstance>;
  /**
   * fetch a NotificationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: NotificationInstance) => any): void;
  /**
   * The log
   */
  log: string;
  /**
   * The message_date
   */
  messageDate: Date;
  /**
   * The message_text
   */
  messageText: string;
  /**
   * The more_info
   */
  moreInfo: string;
  /**
   * remove a NotificationInstance
   *
   * @returns Promise that resolves to processed NotificationInstance
   */
  remove(): Promise<NotificationInstance>;
  /**
   * remove a NotificationInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: NotificationInstance) => any): void;
  /**
   * The request_method
   */
  requestMethod: string;
  /**
   * The request_url
   */
  requestUrl: string;
  /**
   * The request_variables
   */
  requestVariables: string;
  /**
   * The response_body
   */
  responseBody: string;
  /**
   * The response_headers
   */
  responseHeaders: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The uri
   */
  uri: string;
}

declare class NotificationContext {
  constructor(version: V2010, accountSid: string, callSid: string, sid: string);

  /**
   * fetch a NotificationInstance
   *
   * @returns Promise that resolves to processed NotificationInstance
   */
  fetch(): Promise<NotificationInstance>;
  /**
   * fetch a NotificationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: NotificationInstance) => any): void;
  /**
   * remove a NotificationInstance
   *
   * @returns Promise that resolves to processed NotificationInstance
   */
  remove(): Promise<NotificationInstance>;
  /**
   * remove a NotificationInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: NotificationInstance) => any): void;
}

export { NotificationContext, NotificationInstance, NotificationList, NotificationListEachOptions, NotificationListInstance, NotificationListOptions, NotificationListPageOptions, NotificationPage, NotificationPayload, NotificationResource, NotificationSolution }
