/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the TaskChannelList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 */
declare function TaskChannelList(version: V1, workspaceSid: string): TaskChannelListInstance;

interface TaskChannelResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  unique_name: string;
  url: string;
  workspace_sid: string;
}

interface TaskChannelPayload extends TaskChannelResource, Page.TwilioResponsePayload {
}

interface TaskChannelSolution {
  workspaceSid?: string;
}

interface TaskChannelListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): TaskChannelContext;
  /**
   * Streams TaskChannelInstance records from the API.
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
  each(opts?: TaskChannelListInstanceEachOptions, callback?: (item: TaskChannelInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a task_channel
   *
   * @param sid - The sid
   */
  get(sid: string): TaskChannelContext;
  /**
   * Retrieve a single target page of TaskChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: TaskChannelPage) => any): Promise<TaskChannelPage>;
  /**
   * Lists TaskChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: TaskChannelListInstanceOptions, callback?: (error: Error | null, items: TaskChannelInstance[]) => any): Promise<TaskChannelInstance[]>;
  /**
   * Retrieve a single page of TaskChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: TaskChannelListInstancePageOptions, callback?: (error: Error | null, items: TaskChannelPage) => any): Promise<TaskChannelPage>;
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
}


declare class TaskChannelInstance extends SerializableClass {
  /**
   * Initialize the TaskChannelContext
   *
   * @property accountSid - The account_sid
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property friendlyName - The friendly_name
   * @property sid - The sid
   * @property uniqueName - The unique_name
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   * @param sid - The sid
   */
  constructor(version: V1, payload: TaskChannelPayload, workspaceSid: string, sid: string);

  private _proxy: TaskChannelContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a TaskChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TaskChannelInstance) => any): void;
  friendlyName: string;
  sid: string;
  /**
   * Produce a plain JSON object version of the TaskChannelInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uniqueName: string;
  url: string;
  workspaceSid: string;
}


declare class TaskChannelContext {
  /**
   * Initialize the TaskChannelContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param sid - The sid
   */
  constructor(version: V1, workspaceSid: string, sid: string);

  /**
   * fetch a TaskChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TaskChannelInstance) => any): void;
}

export { TaskChannelContext, TaskChannelInstance, TaskChannelList, TaskChannelListInstance, TaskChannelListInstanceEachOptions, TaskChannelListInstanceOptions, TaskChannelListInstancePageOptions, TaskChannelPage, TaskChannelPayload, TaskChannelResource, TaskChannelSolution }
