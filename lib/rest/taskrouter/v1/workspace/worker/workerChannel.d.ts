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
 * Initialize the WorkerChannelList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The unique ID of the Workspace that this WorkerChannel belongs to.
 * @param workerSid - The unique ID of the Worker that this WorkerChannel belongs to.
 */
declare function WorkerChannelList(version: V1, workspaceSid: string, workerSid: string): WorkerChannelListInstance;

/**
 * Options to pass to update
 *
 * @property available - Toggle the availability of the WorkerChannel.
 * @property capacity - The total number of Tasks worker should handle for this TaskChannel type.
 */
interface WorkerChannelInstanceUpdateOptions {
  available?: boolean;
  capacity?: number;
}

interface WorkerChannelListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkerChannelContext;
  /**
   * Streams WorkerChannelInstance records from the API.
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
  each(opts?: WorkerChannelListInstanceEachOptions, callback?: (item: WorkerChannelInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a worker_channel
   *
   * @param sid - The sid
   */
  get(sid: string): WorkerChannelContext;
  /**
   * Retrieve a single target page of WorkerChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: WorkerChannelPage) => any): Promise<WorkerChannelPage>;
  /**
   * Lists WorkerChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: WorkerChannelListInstanceOptions, callback?: (error: Error | null, items: WorkerChannelInstance[]) => any): Promise<WorkerChannelInstance[]>;
  /**
   * Retrieve a single page of WorkerChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: WorkerChannelListInstancePageOptions, callback?: (error: Error | null, items: WorkerChannelPage) => any): Promise<WorkerChannelPage>;
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
interface WorkerChannelListInstanceEachOptions {
  callback?: (item: WorkerChannelInstance, done: (err?: Error) => void) => void;
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
interface WorkerChannelListInstanceOptions {
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
interface WorkerChannelListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface WorkerChannelPayload extends WorkerChannelResource, Page.TwilioResponsePayload {
}

interface WorkerChannelResource {
  account_sid: string;
  assigned_tasks: number;
  available: boolean;
  available_capacity_percentage: number;
  configured_capacity: number;
  date_created: Date;
  date_updated: Date;
  sid: string;
  task_channel_sid: string;
  task_channel_unique_name: string;
  url: string;
  worker_sid: string;
  workspace_sid: string;
}

interface WorkerChannelSolution {
  workerSid?: string;
  workspaceSid?: string;
}


declare class WorkerChannelContext {
  /**
   * Initialize the WorkerChannelContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param workerSid - The worker_sid
   * @param sid - The sid
   */
  constructor(version: V1, workspaceSid: string, workerSid: string, sid: string);

  /**
   * fetch a WorkerChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WorkerChannelInstance) => any): Promise<WorkerChannelInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a WorkerChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WorkerChannelInstanceUpdateOptions, callback?: (error: Error | null, items: WorkerChannelInstance) => any): Promise<WorkerChannelInstance>;
}


declare class WorkerChannelInstance extends SerializableClass {
  /**
   * Initialize the WorkerChannelContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The unique ID of the Workspace that this WorkerChannel belongs to.
   * @param workerSid - The unique ID of the Worker that this WorkerChannel belongs to.
   * @param sid - The sid
   */
  constructor(version: V1, payload: WorkerChannelPayload, workspaceSid: string, workerSid: string, sid: string);

  private _proxy: WorkerChannelContext;
  accountSid: string;
  assignedTasks: number;
  available: boolean;
  availableCapacityPercentage: number;
  configuredCapacity: number;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a WorkerChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WorkerChannelInstance) => any): Promise<WorkerChannelInstance>;
  sid: string;
  taskChannelSid: string;
  taskChannelUniqueName: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a WorkerChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WorkerChannelInstanceUpdateOptions, callback?: (error: Error | null, items: WorkerChannelInstance) => any): Promise<WorkerChannelInstance>;
  url: string;
  workerSid: string;
  workspaceSid: string;
}


declare class WorkerChannelPage extends Page<V1, WorkerChannelPayload, WorkerChannelResource, WorkerChannelInstance> {
  /**
   * Initialize the WorkerChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkerChannelSolution);

  /**
   * Build an instance of WorkerChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkerChannelPayload): WorkerChannelInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { WorkerChannelContext, WorkerChannelInstance, WorkerChannelInstanceUpdateOptions, WorkerChannelList, WorkerChannelListInstance, WorkerChannelListInstanceEachOptions, WorkerChannelListInstanceOptions, WorkerChannelListInstancePageOptions, WorkerChannelPage, WorkerChannelPayload, WorkerChannelResource, WorkerChannelSolution }
