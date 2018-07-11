/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import Studio = require('../Studio');
import { EngagementListInstance } from './flow/engagement';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { SerializableClass } from '../../../interfaces';

declare function FlowList(version: Studio): FlowListInstance

type FlowStatus = 'draft'|'published';

interface FlowResource {
  /**
   * The unique SID identifier of the Account.
   */
  account_sid: string;
  /**
   * The date that this Flow was created, given in ISO 8601 format.
   */
  date_created: Date;
  /**
   * The date that this Flow was updated, given in ISO 8601 format.
   */
  date_updated: Date;
  /**
   * Boolean flag which will cause extra log data to be written to the SystemLog in a Flow Engagement Step.
   */
  debug: boolean;
  /**
   * A human readable description of this resource, up to 64 characters.
   */
  friendly_name: string;
  /**
   * Contains a dictionary of URL links to nested resources of this Flow.
   */
  links: string;
  /**
   * A 34 character string that uniquely identifies this Flow.
   */
  sid: string;
  /**
   * The Status of this Flow. One of `draft` or `published`.
   */
  status: FlowStatus;
  /**
   * The URL of this resource.
   */
  url: string;
  /**
   * The latest version number of this Flow's definition.
   */
  version: number;
}

interface FlowPayload extends FlowResource, Page.TwilioResponsePayload {
}

interface FlowSolution {
}

interface FlowListEachOptions extends ListEachOptions<FlowInstance> {
}

interface FlowListOptions extends ListOptions<FlowInstance> {
}

interface FlowListPageOptions extends PageOptions<FlowPage> {
}

interface FlowListInstance {
  /**
   * Gets context of a single Flow resource
   *
   * @param sid - The sid
   */
  (sid: string): FlowContext;
  /**
   * Streams FlowInstance records from the API.
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
  each(opts?: FlowListEachOptions): void;
  /**
   * Streams FlowInstance records from the API.
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
  each(callback: (item: FlowInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Flow resource
   *
   * @param sid - The sid
   */
  get(sid: string): FlowContext;
  /**
   * Retrieve a single target page of FlowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<FlowPage>;
  /**
   * Retrieve a single target page of FlowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: FlowPage) => any): void;
  /**
   * Lists FlowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: FlowListOptions): Promise<FlowInstance[]>;
  /**
   * Lists FlowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: FlowListOptions, callback: (error: Error | null, items: FlowInstance[]) => any): void;
  /**
   * Lists FlowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: FlowInstance[]) => any): void;
  /**
   * Retrieve a single page of FlowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: FlowListPageOptions): Promise<FlowPage>;
  /**
   * Retrieve a single page of FlowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: FlowListPageOptions, callback: (error: Error | null, items: FlowPage) => any): void;
  /**
   * Retrieve a single page of FlowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: FlowPage) => any): void;
}

declare class FlowPage extends Page<Studio, FlowPayload, FlowResource, FlowInstance> {
  constructor(version: Studio, response: Response<string>, solution: FlowSolution);

  /**
   * Build an instance of FlowInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FlowPayload): FlowInstance;
}

declare class FlowInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Studio, payload: FlowPayload, sid: string);

  private _proxy: FlowContext;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * The date that this Flow was created, given in ISO 8601 format.
   */
  dateCreated: Date;
  /**
   * The date that this Flow was updated, given in ISO 8601 format.
   */
  dateUpdated: Date;
  /**
   * Boolean flag which will cause extra log data to be written to the SystemLog in a Flow Engagement Step.
   */
  debug: boolean;
  engagements(): EngagementListInstance;
  /**
   * fetch a FlowInstance
   *
   * @returns Promise that resolves to processed FlowInstance
   */
  fetch(): Promise<FlowInstance>;
  /**
   * fetch a FlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: FlowInstance) => any): void;
  /**
   * A human readable description of this resource, up to 64 characters.
   */
  friendlyName: string;
  /**
   * Contains a dictionary of URL links to nested resources of this Flow.
   */
  links: string;
  /**
   * remove a FlowInstance
   *
   * @returns Promise that resolves to processed FlowInstance
   */
  remove(): Promise<FlowInstance>;
  /**
   * remove a FlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: FlowInstance) => any): void;
  /**
   * A 34 character string that uniquely identifies this Flow.
   */
  sid: string;
  /**
   * The Status of this Flow. One of `draft` or `published`.
   */
  status: FlowStatus;
  /**
   * The URL of this resource.
   */
  url: string;
  /**
   * The latest version number of this Flow's definition.
   */
  version: number;
}

declare class FlowContext {
  constructor(version: Studio, sid: string);

  engagements: EngagementListInstance;
  /**
   * fetch a FlowInstance
   *
   * @returns Promise that resolves to processed FlowInstance
   */
  fetch(): Promise<FlowInstance>;
  /**
   * fetch a FlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: FlowInstance) => any): void;
  /**
   * remove a FlowInstance
   *
   * @returns Promise that resolves to processed FlowInstance
   */
  remove(): Promise<FlowInstance>;
  /**
   * remove a FlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: FlowInstance) => any): void;
}

export { FlowContext, FlowInstance, FlowList, FlowListEachOptions, FlowListInstance, FlowListOptions, FlowListPageOptions, FlowPage, FlowPayload, FlowResource, FlowSolution, FlowStatus }
