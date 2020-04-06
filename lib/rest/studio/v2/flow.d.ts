/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V2 = require('../V2');
import { ExecutionList } from './flow/execution';
import { ExecutionListInstance } from './flow/execution';
import { FlowRevisionList } from './flow/flowRevision';
import { FlowRevisionListInstance } from './flow/flowRevision';
import { FlowTestUserList } from './flow/testUser';
import { FlowTestUserListInstance } from './flow/testUser';
import { SerializableClass } from '../../../interfaces';

type FlowStatus = 'draft'|'published';

/**
 * Initialize the FlowList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function FlowList(version: V2): FlowListInstance;

/**
 * Options to pass to update
 *
 * @property commitMessage - Description on change made in the revision
 * @property definition - JSON representation of flow definition
 * @property friendlyName - The string that you assigned to describe the Flow
 * @property status - The status of the Flow
 */
interface FlowInstanceUpdateOptions {
  commitMessage?: string;
  definition?: object;
  friendlyName?: string;
  status: FlowStatus;
}

interface FlowListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FlowContext;
  /**
   * create a FlowInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: FlowListInstanceCreateOptions, callback?: (error: Error | null, item: FlowInstance) => any): Promise<FlowInstance>;
  /**
   * Streams FlowInstance records from the API.
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
   * @param callback - Function to process each record
   */
  each(callback?: (item: FlowInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams FlowInstance records from the API.
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
  each(opts?: FlowListInstanceEachOptions, callback?: (item: FlowInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a flow
   *
   * @param sid - The SID that identifies the resource to fetch
   */
  get(sid: string): FlowContext;
  /**
   * Retrieve a single target page of FlowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: FlowPage) => any): Promise<FlowPage>;
  /**
   * Retrieve a single target page of FlowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FlowPage) => any): Promise<FlowPage>;
  /**
   * Lists FlowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: FlowInstance[]) => any): Promise<FlowInstance[]>;
  /**
   * Lists FlowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: FlowListInstanceOptions, callback?: (error: Error | null, items: FlowInstance[]) => any): Promise<FlowInstance[]>;
  /**
   * Retrieve a single page of FlowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: FlowPage) => any): Promise<FlowPage>;
  /**
   * Retrieve a single page of FlowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: FlowListInstancePageOptions, callback?: (error: Error | null, items: FlowPage) => any): Promise<FlowPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property commitMessage - Description on change made in the revision
 * @property definition - JSON representation of flow definition
 * @property friendlyName - The string that you assigned to describe the Flow
 * @property status - The status of the Flow
 */
interface FlowListInstanceCreateOptions {
  commitMessage?: string;
  definition: object;
  friendlyName: string;
  status: FlowStatus;
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
interface FlowListInstanceEachOptions {
  callback?: (item: FlowInstance, done: (err?: Error) => void) => void;
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
interface FlowListInstanceOptions {
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
interface FlowListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface FlowPayload extends FlowResource, Page.TwilioResponsePayload {
}

interface FlowResource {
  account_sid: string;
  commit_message: string;
  date_created: Date;
  date_updated: Date;
  definition: object;
  errors: object[];
  friendly_name: string;
  links: string;
  revision: number;
  sid: string;
  status: FlowStatus;
  url: string;
  valid: boolean;
  webhook_url: string;
}

interface FlowSolution {
}


declare class FlowContext {
  /**
   * Initialize the FlowContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param sid - The SID that identifies the resource to fetch
   */
  constructor(version: V2, sid: string);

  executions: ExecutionListInstance;
  /**
   * fetch a FlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FlowInstance) => any): Promise<FlowInstance>;
  /**
   * remove a FlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FlowInstance) => any): Promise<boolean>;
  revisions: FlowRevisionListInstance;
  testUsers: FlowTestUserListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a FlowInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: FlowInstanceUpdateOptions, callback?: (error: Error | null, items: FlowInstance) => any): Promise<FlowInstance>;
}


declare class FlowInstance extends SerializableClass {
  /**
   * Initialize the FlowContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The SID that identifies the resource to fetch
   */
  constructor(version: V2, payload: FlowPayload, sid: string);

  private _proxy: FlowContext;
  accountSid: string;
  commitMessage: string;
  dateCreated: Date;
  dateUpdated: Date;
  definition: any;
  errors: object[];
  /**
   * Access the executions
   */
  executions(): ExecutionListInstance;
  /**
   * fetch a FlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FlowInstance) => any): Promise<FlowInstance>;
  friendlyName: string;
  links: string;
  /**
   * remove a FlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FlowInstance) => any): Promise<boolean>;
  revision: number;
  /**
   * Access the revisions
   */
  revisions(): FlowRevisionListInstance;
  sid: string;
  status: FlowStatus;
  /**
   * Access the testUsers
   */
  testUsers(): FlowTestUserListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a FlowInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: FlowInstanceUpdateOptions, callback?: (error: Error | null, items: FlowInstance) => any): Promise<FlowInstance>;
  url: string;
  valid: boolean;
  webhookUrl: string;
}


declare class FlowPage extends Page<V2, FlowPayload, FlowResource, FlowInstance> {
  /**
   * Initialize the FlowPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: FlowSolution);

  /**
   * Build an instance of FlowInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FlowPayload): FlowInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { FlowContext, FlowInstance, FlowInstanceUpdateOptions, FlowList, FlowListInstance, FlowListInstanceCreateOptions, FlowListInstanceEachOptions, FlowListInstanceOptions, FlowListInstancePageOptions, FlowPage, FlowPayload, FlowResource, FlowSolution, FlowStatus }
