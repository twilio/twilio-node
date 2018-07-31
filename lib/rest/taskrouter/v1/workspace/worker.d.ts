/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { ReservationList } from './worker/reservation';
import { SerializableClass } from '../../../../interfaces';
import { WorkerChannelList } from './worker/workerChannel';
import { WorkerStatisticsList } from './worker/workerStatistics';
import { WorkersCumulativeStatisticsList } from './worker/workersCumulativeStatistics';
import { WorkersRealTimeStatisticsList } from './worker/workersRealTimeStatistics';

/**
 * @description Initialize the WorkerList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The ID of the Workflow this worker is associated with
 */
declare function WorkerList(version: V1, workspaceSid: string): WorkerListInstance;

interface WorkerResource {
  account_sid: string;
  activity_name: string;
  activity_sid: string;
  attributes: string;
  available: boolean;
  date_created: Date;
  date_status_changed: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  sid: string;
  url: string;
  workspace_sid: string;
}

interface WorkerPayload extends WorkerResource, Page.TwilioResponsePayload {
}

interface WorkerSolution {
  workspaceSid?: string;
}

interface WorkerListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkerContext;
  /**
   * create a WorkerInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: WorkerListInstanceCreateOptions, callback?: (error: Error | null, items: WorkerListInstance) => any): Promise<WorkerInstance>;
  /**
   * Streams WorkerInstance records from the API.
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
  each(opts?: WorkerListInstanceEachOptions, callback?: (item: WorkerInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a worker
   *
   * @param sid - The sid
   */
  get(sid: string): WorkerContext;
  /**
   * Retrieve a single target page of WorkerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: WorkerPage) => any): Promise<WorkerPage>;
  /**
   * Lists WorkerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: WorkerListInstanceOptions, callback?: (error: Error | null, items: WorkerInstance[]) => any): Promise<WorkerInstance[]>;
  /**
   * Retrieve a single page of WorkerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: WorkerListInstancePageOptions, callback?: (error: Error | null, items: WorkerPage) => any): Promise<WorkerPage>;
  statistics?: object;
}

/**
 * Options to pass to update
 *
 * @property activitySid - The activity_sid
 * @property attributes - The attributes
 * @property friendlyName - The friendly_name
 */
interface WorkerInstanceUpdateOptions {
  activitySid?: string;
  attributes?: string;
  friendlyName?: string;
}

/**
 * Options to pass to update
 *
 * @property activitySid - The activity_sid
 * @property attributes - The attributes
 * @property friendlyName - The friendly_name
 */
interface WorkerInstanceUpdateOptions {
  activitySid?: string;
  attributes?: string;
  friendlyName?: string;
}


declare class WorkerPage extends Page<V1, WorkerPayload, WorkerResource, WorkerInstance> {
  /**
   * Initialize the WorkerPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkerSolution);

  /**
   * Build an instance of WorkerInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkerPayload): WorkerInstance;
}


declare class WorkerInstance extends SerializableClass {
  /**
   * Initialize the WorkerContext
   *
   * @property accountSid - The ID of the account that owns this worker
   * @property activityName - Filter by workers that are in a particular Activity by Friendly Name
   * @property activitySid - Filter by workers that are in a particular Activity by SID
   * @property attributes - JSON object describing this worker.
   * @property available - Filter by workers that are available or unavailable.
   * @property dateCreated - DateTime this worker was created
   * @property dateStatusChanged - DateTime of the last change to the Worker's activity.
   * @property dateUpdated - DateTime of the last update
   * @property friendlyName - Filter by a worker's friendly name
   * @property sid - The unique ID of the worker
   * @property workspaceSid - The ID of the Workflow this worker is associated with
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The ID of the Workflow this worker is associated with
   * @param sid - The sid
   */
  constructor(version: V1, payload: WorkerPayload, workspaceSid: string, sid: string);

  private _proxy: WorkerContext;
  accountSid: string;
  activityName: string;
  activitySid: string;
  attributes: string;
  available: boolean;
  /**
   * Access the cumulativeStatistics
   */
  cumulativeStatistics();
  dateCreated: Date;
  dateStatusChanged: Date;
  dateUpdated: Date;
  /**
   * fetch a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WorkerInstance) => any): void;
  friendlyName: string;
  links: string;
  /**
   * Access the realTimeStatistics
   */
  realTimeStatistics();
  /**
   * remove a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: WorkerInstance) => any): void;
  /**
   * Access the reservations
   */
  reservations();
  sid: string;
  /**
   * Access the statistics
   */
  statistics();
  /**
   * Produce a plain JSON object version of the WorkerInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a WorkerInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WorkerInstanceUpdateOptions, callback?: (error: Error | null, items: WorkerInstance) => any): void;
  url: string;
  /**
   * Access the workerChannels
   */
  workerChannels();
  workspaceSid: string;
}


declare class WorkerContext {
  /**
   * Initialize the WorkerContext
   *
   * @property realTimeStatistics - realTimeStatistics resource
   * @property cumulativeStatistics - cumulativeStatistics resource
   * @property statistics - statistics resource
   * @property reservations - reservations resource
   * @property workerChannels - workerChannels resource
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param sid - The sid
   */
  constructor(version: V1, workspaceSid: string, sid: string);

  cumulativeStatistics?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersCumulativeStatisticsList;
  /**
   * fetch a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WorkerInstance) => any): void;
  realTimeStatistics?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsList;
  /**
   * remove a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: WorkerInstance) => any): void;
  reservations?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationList;
  statistics?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsList;
  /**
   * update a WorkerInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WorkerInstanceUpdateOptions, callback?: (error: Error | null, items: WorkerInstance) => any): void;
  workerChannels?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerChannelList;
}

export { WorkerContext, WorkerInstance, WorkerList, WorkerListInstance, WorkerListInstanceCreateOptions, WorkerListInstanceEachOptions, WorkerListInstanceOptions, WorkerListInstancePageOptions, WorkerPage, WorkerPayload, WorkerResource, WorkerSolution }
