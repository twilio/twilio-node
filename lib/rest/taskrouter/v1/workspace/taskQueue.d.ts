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
import { TaskQueueCumulativeStatisticsList } from './taskQueue/taskQueueCumulativeStatistics';
import { TaskQueueCumulativeStatisticsListInstance } from './taskQueue/taskQueueCumulativeStatistics';
import { TaskQueueRealTimeStatisticsList } from './taskQueue/taskQueueRealTimeStatistics';
import { TaskQueueRealTimeStatisticsListInstance } from './taskQueue/taskQueueRealTimeStatistics';
import { TaskQueueStatisticsList } from './taskQueue/taskQueueStatistics';
import { TaskQueueStatisticsListInstance } from './taskQueue/taskQueueStatistics';

type TaskQueueTaskOrder = 'FIFO'|'LIFO';

/**
 * Initialize the TaskQueueList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The ID of the Workspace that owns this TaskQueue
 */
declare function TaskQueueList(version: V1, workspaceSid: string): TaskQueueListInstance;

/**
 * Options to pass to update
 *
 * @property assignmentActivitySid - ActivitySID that will be assigned to Workers when they are assigned a task from this TaskQueue.
 * @property friendlyName - Human readable description of this TaskQueue
 * @property maxReservedWorkers - The maximum amount of workers to create reservations for the assignment of a task while in this queue.
 * @property reservationActivitySid - ActivitySID that will be assigned to Workers when they are reserved for a task from this TaskQueue.
 * @property targetWorkers - A string describing the Worker selection criteria for any Tasks that enter this TaskQueue.
 * @property taskOrder - TaskOrder will determine which order the Tasks will be assigned to Workers.
 */
interface TaskQueueInstanceUpdateOptions {
  assignmentActivitySid?: string;
  friendlyName?: string;
  maxReservedWorkers?: number;
  reservationActivitySid?: string;
  targetWorkers?: string;
  taskOrder?: TaskQueueTaskOrder;
}

interface TaskQueueListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): TaskQueueContext;
  /**
   * create a TaskQueueInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: TaskQueueListInstanceCreateOptions, callback?: (error: Error | null, item: TaskQueueInstance) => any): Promise<TaskQueueInstance>;
  /**
   * Streams TaskQueueInstance records from the API.
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
  each(opts?: TaskQueueListInstanceEachOptions, callback?: (item: TaskQueueInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a task_queue
   *
   * @param sid - The sid
   */
  get(sid: string): TaskQueueContext;
  /**
   * Retrieve a single target page of TaskQueueInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: TaskQueuePage) => any): Promise<TaskQueuePage>;
  /**
   * Lists TaskQueueInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: TaskQueueListInstanceOptions, callback?: (error: Error | null, items: TaskQueueInstance[]) => any): Promise<TaskQueueInstance[]>;
  /**
   * Retrieve a single page of TaskQueueInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: TaskQueueListInstancePageOptions, callback?: (error: Error | null, items: TaskQueuePage) => any): Promise<TaskQueuePage>;
  statistics?: object;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property assignmentActivitySid - ActivitySID to assign workers once a task is assigned for them
 * @property friendlyName - Human readable description of this TaskQueue
 * @property maxReservedWorkers - The maximum amount of workers to create reservations for the assignment of a task while in this queue.
 * @property reservationActivitySid - ActivitySID to assign workers once a task is reserved for them
 * @property targetWorkers - A string describing the Worker selection criteria for any Tasks that enter this TaskQueue.
 * @property taskOrder - TaskOrder will determine which order the Tasks will be assigned to Workers.
 */
interface TaskQueueListInstanceCreateOptions {
  assignmentActivitySid?: string;
  friendlyName: string;
  maxReservedWorkers?: number;
  reservationActivitySid?: string;
  targetWorkers?: string;
  taskOrder?: TaskQueueTaskOrder;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property evaluateWorkerAttributes - Provide a Worker attributes expression, and this will return the list of TaskQueues that would distribute tasks to a worker with these attributes.
 * @property friendlyName - Filter by a human readable description of a TaskQueue
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
 * @property workerSid - The worker_sid
 */
interface TaskQueueListInstanceEachOptions {
  callback?: (item: TaskQueueInstance, done: (err?: Error) => void) => void;
  done?: Function;
  evaluateWorkerAttributes?: string;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
  workerSid?: string;
}

/**
 * Options to pass to list
 *
 * @property evaluateWorkerAttributes - Provide a Worker attributes expression, and this will return the list of TaskQueues that would distribute tasks to a worker with these attributes.
 * @property friendlyName - Filter by a human readable description of a TaskQueue
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
 * @property workerSid - The worker_sid
 */
interface TaskQueueListInstanceOptions {
  evaluateWorkerAttributes?: string;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
  workerSid?: string;
}

/**
 * Options to pass to page
 *
 * @property evaluateWorkerAttributes - Provide a Worker attributes expression, and this will return the list of TaskQueues that would distribute tasks to a worker with these attributes.
 * @property friendlyName - Filter by a human readable description of a TaskQueue
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property workerSid - The worker_sid
 */
interface TaskQueueListInstancePageOptions {
  evaluateWorkerAttributes?: string;
  friendlyName?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  workerSid?: string;
}

interface TaskQueuePayload extends TaskQueueResource, Page.TwilioResponsePayload {
}

interface TaskQueueResource {
  account_sid: string;
  assignment_activity_name: string;
  assignment_activity_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  max_reserved_workers: number;
  reservation_activity_name: string;
  reservation_activity_sid: string;
  sid: string;
  target_workers: string;
  task_order: TaskQueueTaskOrder;
  url: string;
  workspace_sid: string;
}

interface TaskQueueSolution {
  workspaceSid?: string;
}


declare class TaskQueueContext {
  /**
   * Initialize the TaskQueueContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param sid - The sid
   */
  constructor(version: V1, workspaceSid: string, sid: string);

  cumulativeStatistics: TaskQueueCumulativeStatisticsListInstance;
  /**
   * fetch a TaskQueueInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TaskQueueInstance) => any): Promise<TaskQueueInstance>;
  realTimeStatistics: TaskQueueRealTimeStatisticsListInstance;
  /**
   * remove a TaskQueueInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: TaskQueueInstance) => any): void;
  statistics: TaskQueueStatisticsListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a TaskQueueInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: TaskQueueInstanceUpdateOptions, callback?: (error: Error | null, items: TaskQueueInstance) => any): Promise<TaskQueueInstance>;
}


declare class TaskQueueInstance extends SerializableClass {
  /**
   * Initialize the TaskQueueContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The ID of the Workspace that owns this TaskQueue
   * @param sid - The sid
   */
  constructor(version: V1, payload: TaskQueuePayload, workspaceSid: string, sid: string);

  private _proxy: TaskQueueContext;
  accountSid: string;
  assignmentActivityName: string;
  assignmentActivitySid: string;
  /**
   * Access the cumulativeStatistics
   */
  cumulativeStatistics(): TaskQueueCumulativeStatisticsListInstance;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a TaskQueueInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TaskQueueInstance) => any): void;
  friendlyName: string;
  links: string;
  maxReservedWorkers: number;
  /**
   * Access the realTimeStatistics
   */
  realTimeStatistics(): TaskQueueRealTimeStatisticsListInstance;
  /**
   * remove a TaskQueueInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: TaskQueueInstance) => any): void;
  reservationActivityName: string;
  reservationActivitySid: string;
  sid: string;
  /**
   * Access the statistics
   */
  statistics(): TaskQueueStatisticsListInstance;
  targetWorkers: string;
  taskOrder: TaskQueueTaskOrder;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a TaskQueueInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: TaskQueueInstanceUpdateOptions, callback?: (error: Error | null, items: TaskQueueInstance) => any): void;
  url: string;
  workspaceSid: string;
}


declare class TaskQueuePage extends Page<V1, TaskQueuePayload, TaskQueueResource, TaskQueueInstance> {
  /**
   * Initialize the TaskQueuePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: TaskQueueSolution);

  /**
   * Build an instance of TaskQueueInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TaskQueuePayload): TaskQueueInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { TaskQueueContext, TaskQueueInstance, TaskQueueList, TaskQueueListInstance, TaskQueueListInstanceCreateOptions, TaskQueueListInstanceEachOptions, TaskQueueListInstanceOptions, TaskQueueListInstancePageOptions, TaskQueuePage, TaskQueuePayload, TaskQueueResource, TaskQueueSolution }
