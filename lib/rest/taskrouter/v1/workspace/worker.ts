/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Taskrouter
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { WorkersStatisticsListInstance } from "./worker/workersStatistics";
import { WorkersRealTimeStatisticsListInstance } from "./worker/workersRealTimeStatistics";
import { WorkersCumulativeStatisticsListInstance } from "./worker/workersCumulativeStatistics";
import { ReservationListInstance } from "./worker/reservation";
import { WorkerChannelListInstance } from "./worker/workerChannel";
import { WorkerStatisticsListInstance } from "./worker/workerStatistics";


/**
 * Options to pass to create a WorkerInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the new Worker. It can be up to 64 characters long.
 * @property { string } [activitySid] The SID of a valid Activity that will describe the new Worker\\\&#39;s initial state. See [Activities](https://www.twilio.com/docs/taskrouter/api/activity) for more information. If not provided, the new Worker\\\&#39;s initial state is the &#x60;default_activity_sid&#x60; configured on the Workspace.
 * @property { string } [attributes] A valid JSON string that describes the new Worker. For example: &#x60;{ \\\&quot;email\\\&quot;: \\\&quot;Bob@example.com\\\&quot;, \\\&quot;phone\\\&quot;: \\\&quot;+5095551234\\\&quot; }&#x60;. This data is passed to the &#x60;assignment_callback_url&#x60; when TaskRouter assigns a Task to the Worker. Defaults to {}.
 */
export interface WorkerListInstanceCreateOptions {
  friendlyName: string;
  activitySid?: string;
  attributes?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [activityName] The &#x60;activity_name&#x60; of the Worker resources to read.
 * @property { string } [activitySid] The &#x60;activity_sid&#x60; of the Worker resources to read.
 * @property { string } [available] Whether to return only Worker resources that are available or unavailable. Can be &#x60;true&#x60;, &#x60;1&#x60;, or &#x60;yes&#x60; to return Worker resources that are available, and &#x60;false&#x60;, or any value returns the Worker resources that are not available.
 * @property { string } [friendlyName] The &#x60;friendly_name&#x60; of the Worker resources to read.
 * @property { string } [targetWorkersExpression] Filter by Workers that would match an expression on a TaskQueue. This is helpful for debugging which Workers would match a potential queue.
 * @property { string } [taskQueueName] The &#x60;friendly_name&#x60; of the TaskQueue that the Workers to read are eligible for.
 * @property { string } [taskQueueSid] The SID of the TaskQueue that the Workers to read are eligible for.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface WorkerListInstanceEachOptions {
  activityName?: string;
  activitySid?: string;
  available?: string;
  friendlyName?: string;
  targetWorkersExpression?: string;
  taskQueueName?: string;
  taskQueueSid?: string;
  pageSize?: number;
  callback?: (item: WorkerInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [activityName] The &#x60;activity_name&#x60; of the Worker resources to read.
 * @property { string } [activitySid] The &#x60;activity_sid&#x60; of the Worker resources to read.
 * @property { string } [available] Whether to return only Worker resources that are available or unavailable. Can be &#x60;true&#x60;, &#x60;1&#x60;, or &#x60;yes&#x60; to return Worker resources that are available, and &#x60;false&#x60;, or any value returns the Worker resources that are not available.
 * @property { string } [friendlyName] The &#x60;friendly_name&#x60; of the Worker resources to read.
 * @property { string } [targetWorkersExpression] Filter by Workers that would match an expression on a TaskQueue. This is helpful for debugging which Workers would match a potential queue.
 * @property { string } [taskQueueName] The &#x60;friendly_name&#x60; of the TaskQueue that the Workers to read are eligible for.
 * @property { string } [taskQueueSid] The SID of the TaskQueue that the Workers to read are eligible for.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface WorkerListInstanceOptions {
  activityName?: string;
  activitySid?: string;
  available?: string;
  friendlyName?: string;
  targetWorkersExpression?: string;
  taskQueueName?: string;
  taskQueueSid?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [activityName] The &#x60;activity_name&#x60; of the Worker resources to read.
 * @property { string } [activitySid] The &#x60;activity_sid&#x60; of the Worker resources to read.
 * @property { string } [available] Whether to return only Worker resources that are available or unavailable. Can be &#x60;true&#x60;, &#x60;1&#x60;, or &#x60;yes&#x60; to return Worker resources that are available, and &#x60;false&#x60;, or any value returns the Worker resources that are not available.
 * @property { string } [friendlyName] The &#x60;friendly_name&#x60; of the Worker resources to read.
 * @property { string } [targetWorkersExpression] Filter by Workers that would match an expression on a TaskQueue. This is helpful for debugging which Workers would match a potential queue.
 * @property { string } [taskQueueName] The &#x60;friendly_name&#x60; of the TaskQueue that the Workers to read are eligible for.
 * @property { string } [taskQueueSid] The SID of the TaskQueue that the Workers to read are eligible for.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface WorkerListInstancePageOptions {
  activityName?: string;
  activitySid?: string;
  available?: string;
  friendlyName?: string;
  targetWorkersExpression?: string;
  taskQueueName?: string;
  taskQueueSid?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}




/**
 * Options to pass to remove a WorkerInstance
 *
 * @property { string } [ifMatch] The If-Match HTTP request header
 */
export interface WorkerContextRemoveOptions {
  ifMatch?: string;
}

/**
 * Options to pass to update a WorkerInstance
 *
 * @property { string } [ifMatch] The If-Match HTTP request header
 * @property { string } [activitySid] The SID of a valid Activity that will describe the Worker\\\&#39;s initial state. See [Activities](https://www.twilio.com/docs/taskrouter/api/activity) for more information.
 * @property { string } [attributes] The JSON string that describes the Worker. For example: &#x60;{ \\\&quot;email\\\&quot;: \\\&quot;Bob@example.com\\\&quot;, \\\&quot;phone\\\&quot;: \\\&quot;+5095551234\\\&quot; }&#x60;. This data is passed to the &#x60;assignment_callback_url&#x60; when TaskRouter assigns a Task to the Worker. Defaults to {}.
 * @property { string } [friendlyName] A descriptive string that you create to describe the Worker. It can be up to 64 characters long.
 * @property { boolean } [rejectPendingReservations] Whether to reject the Worker\\\&#39;s pending reservations. This option is only valid if the Worker\\\&#39;s new [Activity](https://www.twilio.com/docs/taskrouter/api/activity) resource has its &#x60;availability&#x60; property set to &#x60;False&#x60;.
 */
export interface WorkerContextUpdateOptions {
  ifMatch?: string;
  activitySid?: string;
  attributes?: string;
  friendlyName?: string;
  rejectPendingReservations?: boolean;
}

export interface WorkerListInstance {
  (sid: string): WorkerContext;
  get(sid: string): WorkerContext;

  workersStatistics: WorkersStatisticsListInstance;
  workersRealTimeStatistics: WorkersRealTimeStatisticsListInstance;
  workersCumulativeStatistics: WorkersCumulativeStatisticsListInstance;

  /**
   * Create a WorkerInstance
   *
   * @param { WorkerListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkerInstance
   */
  create(params: WorkerListInstanceCreateOptions, callback?: (error: Error | null, item?: WorkerInstance) => any): Promise<WorkerInstance>;
  create(params: any, callback?: any): Promise<WorkerInstance>



  /**
   * Streams WorkerInstance records from the API.
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
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: WorkerInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams WorkerInstance records from the API.
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
   * @param { WorkerListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: WorkerListInstanceEachOptions, callback?: (item: WorkerInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of WorkerInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: WorkerPage) => any): Promise<WorkerPage>;
  /**
   * Retrieve a single target page of WorkerInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: WorkerPage) => any): Promise<WorkerPage>;
  getPage(params?: any, callback?: any): Promise<WorkerPage>;
  /**
   * Lists WorkerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: WorkerInstance[]) => any): Promise<WorkerInstance[]>;
  /**
   * Lists WorkerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WorkerListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: WorkerListInstanceOptions, callback?: (error: Error | null, items: WorkerInstance[]) => any): Promise<WorkerInstance[]>;
  list(params?: any, callback?: any): Promise<WorkerInstance[]>;
  /**
   * Retrieve a single page of WorkerInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: WorkerPage) => any): Promise<WorkerPage>;
  /**
   * Retrieve a single page of WorkerInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WorkerListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: WorkerListInstancePageOptions, callback?: (error: Error | null, items: WorkerPage) => any): Promise<WorkerPage>;
  page(params?: any, callback?: any): Promise<WorkerPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface WorkerListInstanceImpl extends WorkerListInstance {}
class WorkerListInstanceImpl implements WorkerListInstance {
  _version?: V1;
  _solution?: WorkerSolution;
  _uri?: string;

  _workersStatistics?: WorkersStatisticsListInstance;
  _workersRealTimeStatistics?: WorkersRealTimeStatisticsListInstance;
  _workersCumulativeStatistics?: WorkersCumulativeStatisticsListInstance;
}

export function WorkerListInstance(version: V1, workspaceSid: string): WorkerListInstance {
  const instance = ((sid) => instance.get(sid)) as WorkerListInstanceImpl;

  instance.get = function get(sid): WorkerContext {
    return new WorkerContextImpl(version, workspaceSid, sid);
  }

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = `/Workspaces/${workspaceSid}/Workers`;

  Object.defineProperty(instance, "workersStatistics", {
    get: function workersStatistics() {
      if (!this._workersStatistics) {
        this._workersStatistics = WorkersStatisticsListInstance(this._version, this._solution.workspaceSid);
      }
      return this._workersStatistics;
    }
  });

  Object.defineProperty(instance, "workersRealTimeStatistics", {
    get: function workersRealTimeStatistics() {
      if (!this._workersRealTimeStatistics) {
        this._workersRealTimeStatistics = WorkersRealTimeStatisticsListInstance(this._version, this._solution.workspaceSid);
      }
      return this._workersRealTimeStatistics;
    }
  });

  Object.defineProperty(instance, "workersCumulativeStatistics", {
    get: function workersCumulativeStatistics() {
      if (!this._workersCumulativeStatistics) {
        this._workersCumulativeStatistics = WorkersCumulativeStatisticsListInstance(this._version, this._solution.workspaceSid);
      }
      return this._workersCumulativeStatistics;
    }
  });

  instance.create = function create(params: any, callback?: any): Promise<WorkerInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.friendlyName === null || params.friendlyName === undefined) {
      throw new Error('Required parameter "params.friendlyName" missing.');
    }

    const data: any = {};

    data['FriendlyName'] = params.friendlyName;
    if (params.activitySid !== undefined) data['ActivitySid'] = params.activitySid;
    if (params.attributes !== undefined) data['Attributes'] = params.attributes;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new WorkerInstance(operationVersion, payload, this._solution.workspaceSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<WorkerPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.activityName !== undefined) data['ActivityName'] = params.activityName;
    if (params.activitySid !== undefined) data['ActivitySid'] = params.activitySid;
    if (params.available !== undefined) data['Available'] = params.available;
    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.targetWorkersExpression !== undefined) data['TargetWorkersExpression'] = params.targetWorkersExpression;
    if (params.taskQueueName !== undefined) data['TaskQueueName'] = params.taskQueueName;
    if (params.taskQueueSid !== undefined) data['TaskQueueSid'] = params.taskQueueSid;
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new WorkerPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<WorkerPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new WorkerPage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }



  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}


export interface WorkerContext {

  reservations: ReservationListInstance;
  workerChannel: WorkerChannelListInstance;
  workerStatistics: WorkerStatisticsListInstance;

  /**
   * Remove a WorkerInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: WorkerInstance) => any): Promise<boolean>;
  /**
   * Remove a WorkerInstance
   *
   * @param { WorkerContextRemoveOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkerInstance
   */
  remove(params: WorkerContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  remove(params?: any, callback?: any): Promise<boolean>


  /**
   * Fetch a WorkerInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkerInstance
   */
  fetch(callback?: (error: Error | null, item?: WorkerInstance) => any): Promise<WorkerInstance>


  /**
   * Update a WorkerInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkerInstance
   */
  update(callback?: (error: Error | null, item?: WorkerInstance) => any): Promise<WorkerInstance>;
  /**
   * Update a WorkerInstance
   *
   * @param { WorkerContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkerInstance
   */
  update(params: WorkerContextUpdateOptions, callback?: (error: Error | null, item?: WorkerInstance) => any): Promise<WorkerInstance>;
  update(params?: any, callback?: any): Promise<WorkerInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class WorkerContextImpl implements WorkerContext {
  protected _solution: WorkerSolution;
  protected _uri: string;

  protected _reservations?: ReservationListInstance;
  protected _workerChannel?: WorkerChannelListInstance;
  protected _workerStatistics?: WorkerStatisticsListInstance;

  constructor(protected _version: V1, workspaceSid: string, sid: string) {
    this._solution = { workspaceSid, sid };
    this._uri = `/Workspaces/${workspaceSid}/Workers/${sid}`;
  }

  get reservations(): ReservationListInstance {
    this._reservations = this._reservations || ReservationListInstance(this._version, this._solution.workspaceSid, this._solution.sid);
    return this._reservations;
  }

  get workerChannel(): WorkerChannelListInstance {
    this._workerChannel = this._workerChannel || WorkerChannelListInstance(this._version, this._solution.workspaceSid, this._solution.sid);
    return this._workerChannel;
  }

  get workerStatistics(): WorkerStatisticsListInstance {
    this._workerStatistics = this._workerStatistics || WorkerStatisticsListInstance(this._version, this._solution.workspaceSid, this._solution.sid);
    return this._workerStatistics;
  }

  remove(params?: any, callback?: any): Promise<boolean> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};


    const headers: any = {};
    if (params.ifMatch !== undefined) headers['If-Match'] = params.ifMatch;

    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete', params: data, headers });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<WorkerInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new WorkerInstance(operationVersion, payload, this._solution.workspaceSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  update(params?: any, callback?: any): Promise<WorkerInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.activitySid !== undefined) data['ActivitySid'] = params.activitySid;
    if (params.attributes !== undefined) data['Attributes'] = params.attributes;
    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.rejectPendingReservations !== undefined) data['RejectPendingReservations'] = serialize.bool(params.rejectPendingReservations);

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (params.ifMatch !== undefined) headers['If-Match'] = params.ifMatch;

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new WorkerInstance(operationVersion, payload, this._solution.workspaceSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface WorkerPayload extends WorkerResource, Page.TwilioResponsePayload {
}

interface WorkerResource {
  account_sid?: string | null;
  activity_name?: string | null;
  activity_sid?: string | null;
  attributes?: string | null;
  available?: boolean | null;
  date_created?: Date | null;
  date_status_changed?: Date | null;
  date_updated?: Date | null;
  friendly_name?: string | null;
  sid?: string | null;
  workspace_sid?: string | null;
  url?: string | null;
  links?: object | null;
}

export class WorkerInstance {
  protected _solution: WorkerSolution;
  protected _context?: WorkerContext;

  constructor(protected _version: V1, payload: WorkerPayload, workspaceSid: string, sid?: string) {
    this.accountSid = payload.account_sid;
    this.activityName = payload.activity_name;
    this.activitySid = payload.activity_sid;
    this.attributes = payload.attributes;
    this.available = payload.available;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateStatusChanged = deserialize.iso8601DateTime(payload.date_status_changed);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.sid = payload.sid;
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { workspaceSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The friendly_name of the Worker\'s current Activity
   */
  activityName?: string | null;
  /**
   * The SID of the Worker\'s current Activity
   */
  activitySid?: string | null;
  /**
   * The JSON string that describes the Worker
   */
  attributes?: string | null;
  /**
   * Whether the Worker is available to perform tasks
   */
  available?: boolean | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT of the last change to the Worker\'s activity
   */
  dateStatusChanged?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Workspace that contains the Worker
   */
  workspaceSid?: string | null;
  /**
   * The absolute URL of the Worker resource
   */
  url?: string | null;
  /**
   * The URLs of related resources
   */
  links?: object | null;

  private get _proxy(): WorkerContext {
    this._context = this._context || new WorkerContextImpl(this._version, this._solution.workspaceSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a WorkerInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: WorkerInstance) => any): Promise<boolean>;
  /**
   * Remove a WorkerInstance
   *
   * @param { WorkerContextRemoveOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkerInstance
   */
  remove(params: WorkerContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  remove(params?: any, callback?: any): Promise<boolean>
     {
    return this._proxy.remove(params, callback);
  }

  /**
   * Fetch a WorkerInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkerInstance
   */
  fetch(callback?: (error: Error | null, item?: WorkerInstance) => any): Promise<WorkerInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a WorkerInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkerInstance
   */
  update(callback?: (error: Error | null, item?: WorkerInstance) => any): Promise<WorkerInstance>;
  /**
   * Update a WorkerInstance
   *
   * @param { WorkerContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkerInstance
   */
  update(params: WorkerContextUpdateOptions, callback?: (error: Error | null, item?: WorkerInstance) => any): Promise<WorkerInstance>;
  update(params?: any, callback?: any): Promise<WorkerInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the reservations.
   */
  reservations(): ReservationListInstance {
    return this._proxy.reservations;
  }

  /**
   * Access the workerChannel.
   */
  workerChannel(): WorkerChannelListInstance {
    return this._proxy.workerChannel;
  }

  /**
   * Access the workerStatistics.
   */
  workerStatistics(): WorkerStatisticsListInstance {
    return this._proxy.workerStatistics;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      activityName: this.activityName, 
      activitySid: this.activitySid, 
      attributes: this.attributes, 
      available: this.available, 
      dateCreated: this.dateCreated, 
      dateStatusChanged: this.dateStatusChanged, 
      dateUpdated: this.dateUpdated, 
      friendlyName: this.friendlyName, 
      sid: this.sid, 
      workspaceSid: this.workspaceSid, 
      url: this.url, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface WorkerSolution {
  workspaceSid?: string;
  sid?: string;
}

export class WorkerPage extends Page<V1, WorkerPayload, WorkerResource, WorkerInstance> {
  /**
   * Initialize the WorkerPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkerSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of WorkerInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkerPayload): WorkerInstance {
    return new WorkerInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

