/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

declare function AlphaSenderList(version: V1, serviceSid: string): AlphaSenderListInstance

interface AlphaSenderResource {
  /**
   * The 34 character unique sid of the Account.
   */
  account_sid: string;
  /**
   * An Alphanumeric Sender ID string, up to 11 characters. Valid characters are A-Z, a-z, 0-9, space and dash ( - ). An Alphanumeric Sender ID string cannot be comprised of only numbers.
   */
  alpha_sender: string;
  /**
   * An array of values that indicate whether the number can receive calls or messages. Possible capability is `SMS`.
   */
  capabilities: string;
  /**
   * The date that this resource was created.
   */
  date_created: Date;
  /**
   * The date that this resource was last updated.
   */
  date_updated: Date;
  /**
   * The 34 character unique sid of the Messaging Service.
   */
  service_sid: string;
  /**
   * The 34 character unique sid of the Alpha Sender ID.
   */
  sid: string;
  /**
   * The absolute URL for this resource.
   */
  url: string;
}

interface AlphaSenderPayload extends AlphaSenderResource, Page.TwilioResponsePayload {
}

interface AlphaSenderSolution {
  serviceSid: string;
}

interface AlphaSenderListCreateOptions {
  /**
   * An Alphanumeric Sender ID string, up to 11 characters. Valid characters are A-Z, a-z, 0-9, space and dash ( - ). An Alphanumeric Sender ID string cannot be comprised of only numbers.
   */
  alphaSender: string;
}

interface AlphaSenderListEachOptions extends ListEachOptions<AlphaSenderInstance> {
}

interface AlphaSenderListOptions extends ListOptions<AlphaSenderInstance> {
}

interface AlphaSenderListPageOptions extends PageOptions<AlphaSenderPage> {
}

interface AlphaSenderListInstance {
  /**
   * Gets context of a single AlphaSender resource
   *
   * @param sid - The sid
   */
  (sid: string): AlphaSenderContext;
  /**
   * create a AlphaSenderInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed AlphaSenderInstance
   */
  create(opts: AlphaSenderListCreateOptions): Promise<AlphaSenderInstance>;
  /**
   * create a AlphaSenderInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: AlphaSenderListCreateOptions, callback: (error: Error | null, items: AlphaSenderInstance) => any): void;
  /**
   * Streams AlphaSenderInstance records from the API.
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
  each(opts?: AlphaSenderListEachOptions): void;
  /**
   * Streams AlphaSenderInstance records from the API.
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
  each(callback: (item: AlphaSenderInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single AlphaSender resource
   *
   * @param sid - The sid
   */
  get(sid: string): AlphaSenderContext;
  /**
   * Retrieve a single target page of AlphaSenderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<AlphaSenderPage>;
  /**
   * Retrieve a single target page of AlphaSenderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: AlphaSenderPage) => any): void;
  /**
   * Lists AlphaSenderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: AlphaSenderListOptions): Promise<AlphaSenderInstance[]>;
  /**
   * Lists AlphaSenderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: AlphaSenderListOptions, callback: (error: Error | null, items: AlphaSenderInstance[]) => any): void;
  /**
   * Lists AlphaSenderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: AlphaSenderInstance[]) => any): void;
  /**
   * Retrieve a single page of AlphaSenderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: AlphaSenderListPageOptions): Promise<AlphaSenderPage>;
  /**
   * Retrieve a single page of AlphaSenderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: AlphaSenderListPageOptions, callback: (error: Error | null, items: AlphaSenderPage) => any): void;
  /**
   * Retrieve a single page of AlphaSenderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: AlphaSenderPage) => any): void;
}

declare class AlphaSenderPage extends Page<V1, AlphaSenderPayload, AlphaSenderResource, AlphaSenderInstance> {
  constructor(version: V1, response: Response<string>, solution: AlphaSenderSolution);

  /**
   * Build an instance of AlphaSenderInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AlphaSenderPayload): AlphaSenderInstance;
}

declare class AlphaSenderInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: V1, payload: AlphaSenderPayload, serviceSid: string, sid: string);

  private _proxy: AlphaSenderContext;
  /**
   * The 34 character unique sid of the Account.
   */
  accountSid: string;
  /**
   * An Alphanumeric Sender ID string, up to 11 characters. Valid characters are A-Z, a-z, 0-9, space and dash ( - ). An Alphanumeric Sender ID string cannot be comprised of only numbers.
   */
  alphaSender: string;
  /**
   * An array of values that indicate whether the number can receive calls or messages. Possible capability is `SMS`.
   */
  capabilities: string;
  /**
   * The date that this resource was created.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated.
   */
  dateUpdated: Date;
  /**
   * fetch a AlphaSenderInstance
   *
   * @returns Promise that resolves to processed AlphaSenderInstance
   */
  fetch(): Promise<AlphaSenderInstance>;
  /**
   * fetch a AlphaSenderInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: AlphaSenderInstance) => any): void;
  /**
   * remove a AlphaSenderInstance
   *
   * @returns Promise that resolves to processed AlphaSenderInstance
   */
  remove(): Promise<AlphaSenderInstance>;
  /**
   * remove a AlphaSenderInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: AlphaSenderInstance) => any): void;
  /**
   * The 34 character unique sid of the Messaging Service.
   */
  serviceSid: string;
  /**
   * The 34 character unique sid of the Alpha Sender ID.
   */
  sid: string;
  /**
   * The absolute URL for this resource.
   */
  url: string;
}

declare class AlphaSenderContext {
  constructor(version: V1, serviceSid: string, sid: string);

  /**
   * fetch a AlphaSenderInstance
   *
   * @returns Promise that resolves to processed AlphaSenderInstance
   */
  fetch(): Promise<AlphaSenderInstance>;
  /**
   * fetch a AlphaSenderInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: AlphaSenderInstance) => any): void;
  /**
   * remove a AlphaSenderInstance
   *
   * @returns Promise that resolves to processed AlphaSenderInstance
   */
  remove(): Promise<AlphaSenderInstance>;
  /**
   * remove a AlphaSenderInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: AlphaSenderInstance) => any): void;
}

export { AlphaSenderContext, AlphaSenderInstance, AlphaSenderList, AlphaSenderListCreateOptions, AlphaSenderListEachOptions, AlphaSenderListInstance, AlphaSenderListOptions, AlphaSenderListPageOptions, AlphaSenderPage, AlphaSenderPayload, AlphaSenderResource, AlphaSenderSolution }
