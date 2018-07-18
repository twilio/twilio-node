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
   * @function create
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
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
   * @function each
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a worker
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
   * @instance
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of WorkerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists WorkerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of WorkerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
  statistics?: object;
}

/**
 * Options to pass to update
 *
 * @property activitySid - The activity_sid
 * @property attributes - The attributes
 * @property friendlyName - The friendly_name
 */
export interface UpdateOptions {
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
export interface UpdateOptions {
  activitySid?: string;
  attributes?: string;
  friendlyName?: string;
}


declare class WorkerPage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerPage
   * @augments Page
   * @description Initialize the WorkerPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of WorkerInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class WorkerInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @description Initialize the WorkerContext
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
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid, sid: sid);

  _proxy?: WorkerContext;
  /**
   * Access the cumulativeStatistics
   *
   * @function cumulativeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   */
  cumulativeStatistics();
  /**
   * fetch a WorkerInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the realTimeStatistics
   *
   * @function realTimeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   */
  realTimeStatistics();
  /**
   * remove a WorkerInstance
   *
   * @function remove
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the reservations
   *
   * @function reservations
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   */
  reservations();
  /**
   * Access the statistics
   *
   * @function statistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   */
  statistics();
  /**
   * Produce a plain JSON object version of the WorkerInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   */
  toJSON();
  /**
   * update a WorkerInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  /**
   * Access the workerChannels
   *
   * @function workerChannels
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
   * @instance
   */
  workerChannels();
}


declare class WorkerContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext
   * @description Initialize the WorkerContext
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
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid, sid: sid);

  cumulativeStatistics?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersCumulativeStatisticsList;
  /**
   * fetch a WorkerInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  realTimeStatistics?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsList;
  /**
   * remove a WorkerInstance
   *
   * @function remove
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  reservations?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationList;
  statistics?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsList;
  /**
   * update a WorkerInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  workerChannels?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerChannelList;
}

export { WorkerContext, WorkerInstance, WorkerList, WorkerListInstance, WorkerPage, WorkerPayload, WorkerResource, WorkerSolution }
