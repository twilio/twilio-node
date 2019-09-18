/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the TaskChannelList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The unique ID of the Workspace that this TaskChannel belongs to.
 */
declare function TaskChannelList(version: V1, workspaceSid: string): TaskChannelListInstance;

/**
 * Options to pass to update
 *
 * @property channelOptimizedRouting - If true then prioritize longest idle workers
 * @property friendlyName - Toggle the FriendlyName for the TaskChannel
 */
interface TaskChannelInstanceUpdateOptions {
  channelOptimizedRouting?: boolean;
  friendlyName?: string;
}

interface TaskChannelListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): TaskChannelContext;
  /**
   * create a TaskChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: TaskChannelListInstanceCreateOptions, callback?: (error: Error | null, item: TaskChannelInstance) => any): Promise<TaskChannelInstance>;
  /**
   * Streams TaskChannelInstance records from the API.
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
  each(opts?: TaskChannelListInstanceEachOptions, callback?: (item: TaskChannelInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a task_channel
   *
   * @param sid - The unique ID for this TaskChannel.
   */
  get(sid: string): TaskChannelContext;
  /**
   * Retrieve a single target page of TaskChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: TaskChannelPage) => any): Promise<TaskChannelPage>;
  /**
   * Lists TaskChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: TaskChannelListInstanceOptions, callback?: (error: Error | null, items: TaskChannelInstance[]) => any): Promise<TaskChannelInstance[]>;
  /**
   * Retrieve a single page of TaskChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: TaskChannelListInstancePageOptions, callback?: (error: Error | null, items: TaskChannelPage) => any): Promise<TaskChannelPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property channelOptimizedRouting - If true then prioritize longest idle workers
 * @property friendlyName - String representing user-friendly name for the TaskChannel
 * @property uniqueName - String representing unique name for the TaskChannel
 */
interface TaskChannelListInstanceCreateOptions {
  channelOptimizedRouting?: boolean;
  friendlyName: string;
  uniqueName: string;
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
interface TaskChannelListInstanceEachOptions {
  callback?: (item: TaskChannelInstance, done: (err?: Error) => void) => void;
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
interface TaskChannelListInstanceOptions {
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
interface TaskChannelListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface TaskChannelPayload extends TaskChannelResource, Page.TwilioResponsePayload {
}

interface TaskChannelResource {
  account_sid: string;
  channel_optimized_routing: boolean;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  sid: string;
  unique_name: string;
  url: string;
  workspace_sid: string;
}

interface TaskChannelSolution {
  workspaceSid?: string;
}


declare class TaskChannelContext {
  /**
   * Initialize the TaskChannelContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The unique ID of the Workspace that this TaskChannel belongs to.
   * @param sid - The unique ID for this TaskChannel.
   */
  constructor(version: V1, workspaceSid: string, sid: string);

  /**
   * fetch a TaskChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TaskChannelInstance) => any): Promise<TaskChannelInstance>;
  /**
   * remove a TaskChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: TaskChannelInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a TaskChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: TaskChannelInstanceUpdateOptions, callback?: (error: Error | null, items: TaskChannelInstance) => any): Promise<TaskChannelInstance>;
}


declare class TaskChannelInstance extends SerializableClass {
  /**
   * Initialize the TaskChannelContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The unique ID of the Workspace that this TaskChannel belongs to.
   * @param sid - The unique ID for this TaskChannel.
   */
  constructor(version: V1, payload: TaskChannelPayload, workspaceSid: string, sid: string);

  private _proxy: TaskChannelContext;
  accountSid: string;
  channelOptimizedRouting: boolean;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a TaskChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TaskChannelInstance) => any): Promise<TaskChannelInstance>;
  friendlyName: string;
  links: string;
  /**
   * remove a TaskChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: TaskChannelInstance) => any): Promise<boolean>;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a TaskChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: TaskChannelInstanceUpdateOptions, callback?: (error: Error | null, items: TaskChannelInstance) => any): Promise<TaskChannelInstance>;
  url: string;
  workspaceSid: string;
}


declare class TaskChannelPage extends Page<V1, TaskChannelPayload, TaskChannelResource, TaskChannelInstance> {
  /**
   * Initialize the TaskChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: TaskChannelSolution);

  /**
   * Build an instance of TaskChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TaskChannelPayload): TaskChannelInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { TaskChannelContext, TaskChannelInstance, TaskChannelInstanceUpdateOptions, TaskChannelList, TaskChannelListInstance, TaskChannelListInstanceCreateOptions, TaskChannelListInstanceEachOptions, TaskChannelListInstanceOptions, TaskChannelListInstancePageOptions, TaskChannelPage, TaskChannelPayload, TaskChannelResource, TaskChannelSolution }
