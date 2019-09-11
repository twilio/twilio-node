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
import { FieldList } from './task/field';
import { FieldListInstance } from './task/field';
import { SampleList } from './task/sample';
import { SampleListInstance } from './task/sample';
import { SerializableClass } from '../../../../interfaces';
import { TaskActionsList } from './task/taskActions';
import { TaskActionsListInstance } from './task/taskActions';
import { TaskStatisticsList } from './task/taskStatistics';
import { TaskStatisticsListInstance } from './task/taskStatistics';

/**
 * Initialize the TaskList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The SID of the Assistant that is the parent of the resource
 */
declare function TaskList(version: V1, assistantSid: string): TaskListInstance;

/**
 * Options to pass to update
 *
 * @property actions - The JSON string that specifies the actions that instruct the Assistant on how to perform the task
 * @property actionsUrl - The URL from which the Assistant can fetch actions
 * @property friendlyName - A string to describe the resource
 * @property uniqueName - An application-defined string that uniquely identifies the resource
 */
interface TaskInstanceUpdateOptions {
  actions?: object;
  actionsUrl?: string;
  friendlyName?: string;
  uniqueName?: string;
}

interface TaskListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): TaskContext;
  /**
   * create a TaskInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: TaskListInstanceCreateOptions, callback?: (error: Error | null, item: TaskInstance) => any): Promise<TaskInstance>;
  /**
   * Streams TaskInstance records from the API.
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
  each(opts?: TaskListInstanceEachOptions, callback?: (item: TaskInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a task
   *
   * @param sid - The unique string that identifies the resource to fetch
   */
  get(sid: string): TaskContext;
  /**
   * Retrieve a single target page of TaskInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: TaskPage) => any): Promise<TaskPage>;
  /**
   * Lists TaskInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: TaskListInstanceOptions, callback?: (error: Error | null, items: TaskInstance[]) => any): Promise<TaskInstance[]>;
  /**
   * Retrieve a single page of TaskInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: TaskListInstancePageOptions, callback?: (error: Error | null, items: TaskPage) => any): Promise<TaskPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property actions - The JSON string that specifies the actions that instruct the Assistant on how to perform the task
 * @property actionsUrl - The URL from which the Assistant can fetch actions
 * @property friendlyName -  descriptive string that you create to describe the new resource
 * @property uniqueName - An application-defined string that uniquely identifies the resource
 */
interface TaskListInstanceCreateOptions {
  actions?: object;
  actionsUrl?: string;
  friendlyName?: string;
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
interface TaskListInstanceEachOptions {
  callback?: (item: TaskInstance, done: (err?: Error) => void) => void;
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
interface TaskListInstanceOptions {
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
interface TaskListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface TaskPayload extends TaskResource, Page.TwilioResponsePayload {
}

interface TaskResource {
  account_sid: string;
  actions_url: string;
  assistant_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface TaskSolution {
  assistantSid?: string;
}


declare class TaskContext {
  /**
   * Initialize the TaskContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param assistantSid - The SID of the Assistant that is the parent of the resource to fetch
   * @param sid - The unique string that identifies the resource to fetch
   */
  constructor(version: V1, assistantSid: string, sid: string);

  /**
   * fetch a TaskInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TaskInstance) => any): Promise<TaskInstance>;
  fields: FieldListInstance;
  /**
   * remove a TaskInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: TaskInstance) => any): void;
  samples: SampleListInstance;
  statistics: TaskStatisticsListInstance;
  taskActions: TaskActionsListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a TaskInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: TaskInstanceUpdateOptions, callback?: (error: Error | null, items: TaskInstance) => any): Promise<TaskInstance>;
}


declare class TaskInstance extends SerializableClass {
  /**
   * Initialize the TaskContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The SID of the Assistant that is the parent of the resource
   * @param sid - The unique string that identifies the resource to fetch
   */
  constructor(version: V1, payload: TaskPayload, assistantSid: string, sid: string);

  private _proxy: TaskContext;
  accountSid: string;
  actionsUrl: string;
  assistantSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a TaskInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TaskInstance) => any): void;
  /**
   * Access the fields
   */
  fields(): FieldListInstance;
  friendlyName: string;
  links: string;
  /**
   * remove a TaskInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: TaskInstance) => any): void;
  /**
   * Access the samples
   */
  samples(): SampleListInstance;
  sid: string;
  /**
   * Access the statistics
   */
  statistics(): TaskStatisticsListInstance;
  /**
   * Access the taskActions
   */
  taskActions(): TaskActionsListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a TaskInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: TaskInstanceUpdateOptions, callback?: (error: Error | null, items: TaskInstance) => any): void;
  url: string;
}


declare class TaskPage extends Page<V1, TaskPayload, TaskResource, TaskInstance> {
  /**
   * Initialize the TaskPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: TaskSolution);

  /**
   * Build an instance of TaskInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TaskPayload): TaskInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { TaskContext, TaskInstance, TaskList, TaskListInstance, TaskListInstanceCreateOptions, TaskListInstanceEachOptions, TaskListInstanceOptions, TaskListInstancePageOptions, TaskPage, TaskPayload, TaskResource, TaskSolution }
