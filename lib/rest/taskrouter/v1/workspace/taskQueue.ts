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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { TaskQueueCumulativeStatisticsListInstance } from "./taskQueue/taskQueueCumulativeStatistics";
import { TaskQueueRealTimeStatisticsListInstance } from "./taskQueue/taskQueueRealTimeStatistics";
import { TaskQueueStatisticsListInstance } from "./taskQueue/taskQueueStatistics";
import { TaskQueuesStatisticsListInstance } from "./taskQueue/taskQueuesStatistics";

type TaskQueueTaskOrder = "FIFO" | "LIFO";

/**
 * Options to pass to update a TaskQueueInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the TaskQueue. For example `Support-Tier 1`, `Sales`, or `Escalation`.
 * @property { string } [targetWorkers] A string describing the Worker selection criteria for any Tasks that enter the TaskQueue. For example \\\'\\\"language\\\" == \\\"spanish\\\"\\\' If no TargetWorkers parameter is provided, Tasks will wait in the queue until they are either deleted or moved to another queue. Additional examples on how to describing Worker selection criteria below.
 * @property { string } [reservationActivitySid] The SID of the Activity to assign Workers when a task is reserved for them.
 * @property { string } [assignmentActivitySid] The SID of the Activity to assign Workers when a task is assigned for them.
 * @property { number } [maxReservedWorkers] The maximum number of Workers to create reservations for the assignment of a task while in the queue. Maximum of 50.
 * @property { TaskQueueTaskOrder } [taskOrder]
 */
export interface TaskQueueContextUpdateOptions {
  friendlyName?: string;
  targetWorkers?: string;
  reservationActivitySid?: string;
  assignmentActivitySid?: string;
  maxReservedWorkers?: number;
  taskOrder?: TaskQueueTaskOrder;
}

/**
 * Options to pass to create a TaskQueueInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the TaskQueue. For example `Support-Tier 1`, `Sales`, or `Escalation`.
 * @property { string } [targetWorkers] A string that describes the Worker selection criteria for any Tasks that enter the TaskQueue. For example, `\\\'\\\"language\\\" == \\\"spanish\\\"\\\'`. The default value is `1==1`. If this value is empty, Tasks will wait in the TaskQueue until they are deleted or moved to another TaskQueue. For more information about Worker selection, see [Describing Worker selection criteria](https://www.twilio.com/docs/taskrouter/api/taskqueues#target-workers).
 * @property { number } [maxReservedWorkers] The maximum number of Workers to reserve for the assignment of a Task in the queue. Can be an integer between 1 and 50, inclusive and defaults to 1.
 * @property { TaskQueueTaskOrder } [taskOrder]
 * @property { string } [reservationActivitySid] The SID of the Activity to assign Workers when a task is reserved for them.
 * @property { string } [assignmentActivitySid] The SID of the Activity to assign Workers when a task is assigned to them.
 */
export interface TaskQueueListInstanceCreateOptions {
  friendlyName: string;
  targetWorkers?: string;
  maxReservedWorkers?: number;
  taskOrder?: TaskQueueTaskOrder;
  reservationActivitySid?: string;
  assignmentActivitySid?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [friendlyName] The `friendly_name` of the TaskQueue resources to read.
 * @property { string } [evaluateWorkerAttributes] The attributes of the Workers to read. Returns the TaskQueues with Workers that match the attributes specified in this parameter.
 * @property { string } [workerSid] The SID of the Worker with the TaskQueue resources to read.
 * @property { string } [ordering] Sorting parameter for TaskQueues
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
export interface TaskQueueListInstanceEachOptions {
  friendlyName?: string;
  evaluateWorkerAttributes?: string;
  workerSid?: string;
  ordering?: string;
  pageSize?: number;
  callback?: (item: TaskQueueInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [friendlyName] The `friendly_name` of the TaskQueue resources to read.
 * @property { string } [evaluateWorkerAttributes] The attributes of the Workers to read. Returns the TaskQueues with Workers that match the attributes specified in this parameter.
 * @property { string } [workerSid] The SID of the Worker with the TaskQueue resources to read.
 * @property { string } [ordering] Sorting parameter for TaskQueues
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TaskQueueListInstanceOptions {
  friendlyName?: string;
  evaluateWorkerAttributes?: string;
  workerSid?: string;
  ordering?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [friendlyName] The `friendly_name` of the TaskQueue resources to read.
 * @property { string } [evaluateWorkerAttributes] The attributes of the Workers to read. Returns the TaskQueues with Workers that match the attributes specified in this parameter.
 * @property { string } [workerSid] The SID of the Worker with the TaskQueue resources to read.
 * @property { string } [ordering] Sorting parameter for TaskQueues
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface TaskQueueListInstancePageOptions {
  friendlyName?: string;
  evaluateWorkerAttributes?: string;
  workerSid?: string;
  ordering?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface TaskQueueContext {
  cumulativeStatistics: TaskQueueCumulativeStatisticsListInstance;
  realTimeStatistics: TaskQueueRealTimeStatisticsListInstance;
  statistics: TaskQueueStatisticsListInstance;

  /**
   * Remove a TaskQueueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a TaskQueueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskQueueInstance) => any
  ): Promise<TaskQueueInstance>;

  /**
   * Update a TaskQueueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueInstance
   */
  update(
    callback?: (error: Error | null, item?: TaskQueueInstance) => any
  ): Promise<TaskQueueInstance>;
  /**
   * Update a TaskQueueInstance
   *
   * @param { TaskQueueContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueInstance
   */
  update(
    params?:
      | TaskQueueContextUpdateOptions
      | ((error: Error | null, item?: TaskQueueInstance) => any),
    callback?: (error: Error | null, item?: TaskQueueInstance) => any
  ): Promise<TaskQueueInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskQueueContextSolution {
  workspaceSid?: string;
  sid?: string;
}

export class TaskQueueContextImpl implements TaskQueueContext {
  protected _solution: TaskQueueContextSolution;
  protected _uri: string;

  protected _cumulativeStatistics?: TaskQueueCumulativeStatisticsListInstance;
  protected _realTimeStatistics?: TaskQueueRealTimeStatisticsListInstance;
  protected _statistics?: TaskQueueStatisticsListInstance;

  constructor(protected _version: V1, workspaceSid: string, sid: string) {
    if (!isValidPathParam(workspaceSid)) {
      throw new Error("Parameter 'workspaceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { workspaceSid, sid };
    this._uri = `/Workspaces/${workspaceSid}/TaskQueues/${sid}`;
  }

  get cumulativeStatistics(): TaskQueueCumulativeStatisticsListInstance {
    this._cumulativeStatistics =
      this._cumulativeStatistics ||
      TaskQueueCumulativeStatisticsListInstance(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._cumulativeStatistics;
  }

  get realTimeStatistics(): TaskQueueRealTimeStatisticsListInstance {
    this._realTimeStatistics =
      this._realTimeStatistics ||
      TaskQueueRealTimeStatisticsListInstance(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._realTimeStatistics;
  }

  get statistics(): TaskQueueStatisticsListInstance {
    this._statistics =
      this._statistics ||
      TaskQueueStatisticsListInstance(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._statistics;
  }

  remove(callback?: any): Promise<boolean> {
    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<TaskQueueInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskQueueInstance(
          operationVersion,
          payload,
          this._solution.workspaceSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<TaskQueueInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["targetWorkers"] !== undefined)
      data["TargetWorkers"] = params["targetWorkers"];
    if (params["reservationActivitySid"] !== undefined)
      data["ReservationActivitySid"] = params["reservationActivitySid"];
    if (params["assignmentActivitySid"] !== undefined)
      data["AssignmentActivitySid"] = params["assignmentActivitySid"];
    if (params["maxReservedWorkers"] !== undefined)
      data["MaxReservedWorkers"] = params["maxReservedWorkers"];
    if (params["taskOrder"] !== undefined)
      data["TaskOrder"] = params["taskOrder"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskQueueInstance(
          operationVersion,
          payload,
          this._solution.workspaceSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
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

interface TaskQueuePayload extends TwilioResponsePayload {
  task_queues: TaskQueueResource[];
}

interface TaskQueueResource {
  account_sid?: string | null;
  assignment_activity_sid?: string | null;
  assignment_activity_name?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  friendly_name?: string | null;
  max_reserved_workers?: number | null;
  reservation_activity_sid?: string | null;
  reservation_activity_name?: string | null;
  sid?: string | null;
  target_workers?: string | null;
  task_order?: TaskQueueTaskOrder;
  url?: string | null;
  workspace_sid?: string | null;
  links?: object | null;
}

export class TaskQueueInstance {
  protected _solution: TaskQueueContextSolution;
  protected _context?: TaskQueueContext;

  constructor(
    protected _version: V1,
    payload: TaskQueueResource,
    workspaceSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.assignmentActivitySid = payload.assignment_activity_sid;
    this.assignmentActivityName = payload.assignment_activity_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.maxReservedWorkers = deserialize.integer(payload.max_reserved_workers);
    this.reservationActivitySid = payload.reservation_activity_sid;
    this.reservationActivityName = payload.reservation_activity_name;
    this.sid = payload.sid;
    this.targetWorkers = payload.target_workers;
    this.taskOrder = payload.task_order;
    this.url = payload.url;
    this.workspaceSid = payload.workspace_sid;
    this.links = payload.links;

    this._solution = { workspaceSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Activity to assign Workers when a task is assigned for them
   */
  assignmentActivitySid?: string | null;
  /**
   * The name of the Activity to assign Workers when a task is assigned for them
   */
  assignmentActivityName?: string | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * The maximum number of Workers to reserve
   */
  maxReservedWorkers?: number | null;
  /**
   * The SID of the Activity to assign Workers once a task is reserved for them
   */
  reservationActivitySid?: string | null;
  /**
   * The name of the Activity to assign Workers once a task is reserved for them
   */
  reservationActivityName?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * A string describing the Worker selection criteria for any Tasks that enter the TaskQueue
   */
  targetWorkers?: string | null;
  taskOrder?: TaskQueueTaskOrder;
  /**
   * The absolute URL of the TaskQueue resource
   */
  url?: string | null;
  /**
   * The SID of the Workspace that contains the TaskQueue
   */
  workspaceSid?: string | null;
  /**
   * The URLs of related resources
   */
  links?: object | null;

  private get _proxy(): TaskQueueContext {
    this._context =
      this._context ||
      new TaskQueueContextImpl(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a TaskQueueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a TaskQueueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskQueueInstance) => any
  ): Promise<TaskQueueInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a TaskQueueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueInstance
   */
  update(
    callback?: (error: Error | null, item?: TaskQueueInstance) => any
  ): Promise<TaskQueueInstance>;
  /**
   * Update a TaskQueueInstance
   *
   * @param { TaskQueueContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueInstance
   */
  update(
    params?:
      | TaskQueueContextUpdateOptions
      | ((error: Error | null, item?: TaskQueueInstance) => any),
    callback?: (error: Error | null, item?: TaskQueueInstance) => any
  ): Promise<TaskQueueInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the cumulativeStatistics.
   */
  cumulativeStatistics(): TaskQueueCumulativeStatisticsListInstance {
    return this._proxy.cumulativeStatistics;
  }

  /**
   * Access the realTimeStatistics.
   */
  realTimeStatistics(): TaskQueueRealTimeStatisticsListInstance {
    return this._proxy.realTimeStatistics;
  }

  /**
   * Access the statistics.
   */
  statistics(): TaskQueueStatisticsListInstance {
    return this._proxy.statistics;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      assignmentActivitySid: this.assignmentActivitySid,
      assignmentActivityName: this.assignmentActivityName,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      friendlyName: this.friendlyName,
      maxReservedWorkers: this.maxReservedWorkers,
      reservationActivitySid: this.reservationActivitySid,
      reservationActivityName: this.reservationActivityName,
      sid: this.sid,
      targetWorkers: this.targetWorkers,
      taskOrder: this.taskOrder,
      url: this.url,
      workspaceSid: this.workspaceSid,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface TaskQueueListInstance {
  (sid: string): TaskQueueContext;
  get(sid: string): TaskQueueContext;

  statistics: TaskQueuesStatisticsListInstance;

  /**
   * Create a TaskQueueInstance
   *
   * @param { TaskQueueListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueInstance
   */
  create(
    params: TaskQueueListInstanceCreateOptions,
    callback?: (error: Error | null, item?: TaskQueueInstance) => any
  ): Promise<TaskQueueInstance>;

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
   * @param { TaskQueueListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | TaskQueueListInstanceEachOptions
      | ((item: TaskQueueInstance, done: (err?: Error) => void) => void),
    callback?: (item: TaskQueueInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of TaskQueueInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: TaskQueuePage) => any
  ): Promise<TaskQueuePage>;
  /**
   * Lists TaskQueueInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TaskQueueListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | TaskQueueListInstanceOptions
      | ((error: Error | null, items: TaskQueueInstance[]) => any),
    callback?: (error: Error | null, items: TaskQueueInstance[]) => any
  ): Promise<TaskQueueInstance[]>;
  /**
   * Retrieve a single page of TaskQueueInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TaskQueueListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | TaskQueueListInstancePageOptions
      | ((error: Error | null, items: TaskQueuePage) => any),
    callback?: (error: Error | null, items: TaskQueuePage) => any
  ): Promise<TaskQueuePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskQueueSolution {
  workspaceSid?: string;
}

interface TaskQueueListInstanceImpl extends TaskQueueListInstance {}
class TaskQueueListInstanceImpl implements TaskQueueListInstance {
  _version?: V1;
  _solution?: TaskQueueSolution;
  _uri?: string;

  _statistics?: TaskQueuesStatisticsListInstance;
}

export function TaskQueueListInstance(
  version: V1,
  workspaceSid: string
): TaskQueueListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as TaskQueueListInstanceImpl;

  instance.get = function get(sid): TaskQueueContext {
    return new TaskQueueContextImpl(version, workspaceSid, sid);
  };

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = `/Workspaces/${workspaceSid}/TaskQueues`;

  Object.defineProperty(instance, "statistics", {
    get: function statistics() {
      if (!this._statistics) {
        this._statistics = TaskQueuesStatisticsListInstance(
          this._version,
          this._solution.workspaceSid
        );
      }
      return this._statistics;
    },
  });

  instance.create = function create(
    params: TaskQueueListInstanceCreateOptions,
    callback?: (error: Error | null, item?: TaskQueueInstance) => any
  ): Promise<TaskQueueInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];
    if (params["targetWorkers"] !== undefined)
      data["TargetWorkers"] = params["targetWorkers"];
    if (params["maxReservedWorkers"] !== undefined)
      data["MaxReservedWorkers"] = params["maxReservedWorkers"];
    if (params["taskOrder"] !== undefined)
      data["TaskOrder"] = params["taskOrder"];
    if (params["reservationActivitySid"] !== undefined)
      data["ReservationActivitySid"] = params["reservationActivitySid"];
    if (params["assignmentActivitySid"] !== undefined)
      data["AssignmentActivitySid"] = params["assignmentActivitySid"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskQueueInstance(
          operationVersion,
          payload,
          this._solution.workspaceSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | TaskQueueListInstancePageOptions
      | ((error: Error | null, item?: TaskQueuePage) => any),
    callback?: (error: Error | null, item?: TaskQueuePage) => any
  ): Promise<TaskQueuePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["evaluateWorkerAttributes"] !== undefined)
      data["EvaluateWorkerAttributes"] = params["evaluateWorkerAttributes"];
    if (params["workerSid"] !== undefined)
      data["WorkerSid"] = params["workerSid"];
    if (params["ordering"] !== undefined) data["Ordering"] = params["ordering"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new TaskQueuePage(operationVersion, payload, this._solution)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: TaskQueuePage) => any
  ): Promise<TaskQueuePage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new TaskQueuePage(this._version, payload, this._solution)
    );
    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
  };

  return instance;
}

export class TaskQueuePage extends Page<
  V1,
  TaskQueuePayload,
  TaskQueueResource,
  TaskQueueInstance
> {
  /**
   * Initialize the TaskQueuePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: TaskQueueSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of TaskQueueInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TaskQueueResource): TaskQueueInstance {
    return new TaskQueueInstance(
      this._version,
      payload,
      this._solution.workspaceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
