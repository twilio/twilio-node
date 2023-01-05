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
import { ReservationListInstance } from "./worker/reservation";
import { WorkerChannelListInstance } from "./worker/workerChannel";
import { WorkerStatisticsListInstance } from "./worker/workerStatistics";
import { WorkersCumulativeStatisticsListInstance } from "./worker/workersCumulativeStatistics";
import { WorkersRealTimeStatisticsListInstance } from "./worker/workersRealTimeStatistics";
import { WorkersStatisticsListInstance } from "./worker/workersStatistics";

/**
 * Options to pass to remove a WorkerInstance
 */
export interface WorkerContextRemoveOptions {
  /** The If-Match HTTP request header */
  ifMatch?: string;
}

/**
 * Options to pass to update a WorkerInstance
 */
export interface WorkerContextUpdateOptions {
  /** The If-Match HTTP request header */
  ifMatch?: string;
  /** The SID of a valid Activity that will describe the Worker\\\'s initial state. See [Activities](https://www.twilio.com/docs/taskrouter/api/activity) for more information. */
  activitySid?: string;
  /** The JSON string that describes the Worker. For example: `{ \\\"email\\\": \\\"Bob@example.com\\\", \\\"phone\\\": \\\"+5095551234\\\" }`. This data is passed to the `assignment_callback_url` when TaskRouter assigns a Task to the Worker. Defaults to {}. */
  attributes?: string;
  /** A descriptive string that you create to describe the Worker. It can be up to 64 characters long. */
  friendlyName?: string;
  /** Whether to reject the Worker\\\'s pending reservations. This option is only valid if the Worker\\\'s new [Activity](https://www.twilio.com/docs/taskrouter/api/activity) resource has its `availability` property set to `False`. */
  rejectPendingReservations?: boolean;
}

/**
 * Options to pass to create a WorkerInstance
 */
export interface WorkerListInstanceCreateOptions {
  /** A descriptive string that you create to describe the new Worker. It can be up to 64 characters long. */
  friendlyName: string;
  /** The SID of a valid Activity that will describe the new Worker\\\'s initial state. See [Activities](https://www.twilio.com/docs/taskrouter/api/activity) for more information. If not provided, the new Worker\\\'s initial state is the `default_activity_sid` configured on the Workspace. */
  activitySid?: string;
  /** A valid JSON string that describes the new Worker. For example: `{ \\\"email\\\": \\\"Bob@example.com\\\", \\\"phone\\\": \\\"+5095551234\\\" }`. This data is passed to the `assignment_callback_url` when TaskRouter assigns a Task to the Worker. Defaults to {}. */
  attributes?: string;
}
/**
 * Options to pass to each
 */
export interface WorkerListInstanceEachOptions {
  /** The `activity_name` of the Worker resources to read. */
  activityName?: string;
  /** The `activity_sid` of the Worker resources to read. */
  activitySid?: string;
  /** Whether to return only Worker resources that are available or unavailable. Can be `true`, `1`, or `yes` to return Worker resources that are available, and `false`, or any value returns the Worker resources that are not available. */
  available?: string;
  /** The `friendly_name` of the Worker resources to read. */
  friendlyName?: string;
  /** Filter by Workers that would match an expression on a TaskQueue. This is helpful for debugging which Workers would match a potential queue. */
  targetWorkersExpression?: string;
  /** The `friendly_name` of the TaskQueue that the Workers to read are eligible for. */
  taskQueueName?: string;
  /** The SID of the TaskQueue that the Workers to read are eligible for. */
  taskQueueSid?: string;
  /** Sorting parameter for Workers */
  ordering?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: WorkerInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface WorkerListInstanceOptions {
  /** The `activity_name` of the Worker resources to read. */
  activityName?: string;
  /** The `activity_sid` of the Worker resources to read. */
  activitySid?: string;
  /** Whether to return only Worker resources that are available or unavailable. Can be `true`, `1`, or `yes` to return Worker resources that are available, and `false`, or any value returns the Worker resources that are not available. */
  available?: string;
  /** The `friendly_name` of the Worker resources to read. */
  friendlyName?: string;
  /** Filter by Workers that would match an expression on a TaskQueue. This is helpful for debugging which Workers would match a potential queue. */
  targetWorkersExpression?: string;
  /** The `friendly_name` of the TaskQueue that the Workers to read are eligible for. */
  taskQueueName?: string;
  /** The SID of the TaskQueue that the Workers to read are eligible for. */
  taskQueueSid?: string;
  /** Sorting parameter for Workers */
  ordering?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface WorkerListInstancePageOptions {
  /** The `activity_name` of the Worker resources to read. */
  activityName?: string;
  /** The `activity_sid` of the Worker resources to read. */
  activitySid?: string;
  /** Whether to return only Worker resources that are available or unavailable. Can be `true`, `1`, or `yes` to return Worker resources that are available, and `false`, or any value returns the Worker resources that are not available. */
  available?: string;
  /** The `friendly_name` of the Worker resources to read. */
  friendlyName?: string;
  /** Filter by Workers that would match an expression on a TaskQueue. This is helpful for debugging which Workers would match a potential queue. */
  targetWorkersExpression?: string;
  /** The `friendly_name` of the TaskQueue that the Workers to read are eligible for. */
  taskQueueName?: string;
  /** The SID of the TaskQueue that the Workers to read are eligible for. */
  taskQueueSid?: string;
  /** Sorting parameter for Workers */
  ordering?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface WorkerContext {
  reservations: ReservationListInstance;
  workerChannels: WorkerChannelListInstance;
  statistics: WorkerStatisticsListInstance;

  /**
   * Remove a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a WorkerInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkerInstance
   */
  remove(
    params: WorkerContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkerInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WorkerInstance) => any
  ): Promise<WorkerInstance>;

  /**
   * Update a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkerInstance
   */
  update(
    callback?: (error: Error | null, item?: WorkerInstance) => any
  ): Promise<WorkerInstance>;
  /**
   * Update a WorkerInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkerInstance
   */
  update(
    params: WorkerContextUpdateOptions,
    callback?: (error: Error | null, item?: WorkerInstance) => any
  ): Promise<WorkerInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkerContextSolution {
  workspaceSid: string;
  sid: string;
}

export class WorkerContextImpl implements WorkerContext {
  protected _solution: WorkerContextSolution;
  protected _uri: string;

  protected _reservations?: ReservationListInstance;
  protected _workerChannels?: WorkerChannelListInstance;
  protected _statistics?: WorkerStatisticsListInstance;

  constructor(protected _version: V1, workspaceSid: string, sid: string) {
    if (!isValidPathParam(workspaceSid)) {
      throw new Error("Parameter 'workspaceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { workspaceSid, sid };
    this._uri = `/Workspaces/${workspaceSid}/Workers/${sid}`;
  }

  get reservations(): ReservationListInstance {
    this._reservations =
      this._reservations ||
      ReservationListInstance(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._reservations;
  }

  get workerChannels(): WorkerChannelListInstance {
    this._workerChannels =
      this._workerChannels ||
      WorkerChannelListInstance(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._workerChannels;
  }

  get statistics(): WorkerStatisticsListInstance {
    this._statistics =
      this._statistics ||
      WorkerStatisticsListInstance(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._statistics;
  }

  remove(
    params?:
      | WorkerContextRemoveOptions
      | ((error: Error | null, item?: boolean) => any),
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    const headers: any = {};
    if (params["ifMatch"] !== undefined)
      headers["If-Match"] = params["ifMatch"];

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        params: data,
        headers,
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: WorkerInstance) => any
  ): Promise<WorkerInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WorkerInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | WorkerContextUpdateOptions
      | ((error: Error | null, item?: WorkerInstance) => any),
    callback?: (error: Error | null, item?: WorkerInstance) => any
  ): Promise<WorkerInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["activitySid"] !== undefined)
      data["ActivitySid"] = params["activitySid"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["rejectPendingReservations"] !== undefined)
      data["RejectPendingReservations"] = serialize.bool(
        params["rejectPendingReservations"]
      );

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    if (params["ifMatch"] !== undefined)
      headers["If-Match"] = params["ifMatch"];

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WorkerInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
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

interface WorkerPayload extends TwilioResponsePayload {
  workers: WorkerResource[];
}

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
  sid: string;
  workspace_sid: string;
  url: string;
  links: object;
}

export class WorkerInstance {
  protected _solution: WorkerContextSolution;
  protected _context?: WorkerContext;

  constructor(
    protected _version: V1,
    payload: WorkerResource,
    workspaceSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.activityName = payload.activity_name;
    this.activitySid = payload.activity_sid;
    this.attributes = payload.attributes;
    this.available = payload.available;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateStatusChanged = deserialize.iso8601DateTime(
      payload.date_status_changed
    );
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
  accountSid: string;
  /**
   * The friendly_name of the Worker\'s current Activity
   */
  activityName: string;
  /**
   * The SID of the Worker\'s current Activity
   */
  activitySid: string;
  /**
   * The JSON string that describes the Worker
   */
  attributes: string;
  /**
   * Whether the Worker is available to perform tasks
   */
  available: boolean;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The date and time in GMT of the last change to the Worker\'s activity
   */
  dateStatusChanged: Date;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated: Date;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName: string;
  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The SID of the Workspace that contains the Worker
   */
  workspaceSid: string;
  /**
   * The absolute URL of the Worker resource
   */
  url: string;
  /**
   * The URLs of related resources
   */
  links: object;

  private get _proxy(): WorkerContext {
    this._context =
      this._context ||
      new WorkerContextImpl(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a WorkerInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkerInstance
   */
  remove(
    params: WorkerContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  remove(
    params?: any,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(params, callback);
  }

  /**
   * Fetch a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkerInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WorkerInstance) => any
  ): Promise<WorkerInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkerInstance
   */
  update(
    callback?: (error: Error | null, item?: WorkerInstance) => any
  ): Promise<WorkerInstance>;
  /**
   * Update a WorkerInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkerInstance
   */
  update(
    params: WorkerContextUpdateOptions,
    callback?: (error: Error | null, item?: WorkerInstance) => any
  ): Promise<WorkerInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: WorkerInstance) => any
  ): Promise<WorkerInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the reservations.
   */
  reservations(): ReservationListInstance {
    return this._proxy.reservations;
  }

  /**
   * Access the workerChannels.
   */
  workerChannels(): WorkerChannelListInstance {
    return this._proxy.workerChannels;
  }

  /**
   * Access the statistics.
   */
  statistics(): WorkerStatisticsListInstance {
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
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WorkerSolution {
  workspaceSid: string;
}

export interface WorkerListInstance {
  _version: V1;
  _solution: WorkerSolution;
  _uri: string;

  (sid: string): WorkerContext;
  get(sid: string): WorkerContext;

  _cumulativeStatistics?: WorkersCumulativeStatisticsListInstance;
  cumulativeStatistics: WorkersCumulativeStatisticsListInstance;
  _realTimeStatistics?: WorkersRealTimeStatisticsListInstance;
  realTimeStatistics: WorkersRealTimeStatisticsListInstance;
  _statistics?: WorkersStatisticsListInstance;
  statistics: WorkersStatisticsListInstance;

  /**
   * Create a WorkerInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkerInstance
   */
  create(
    params: WorkerListInstanceCreateOptions,
    callback?: (error: Error | null, item?: WorkerInstance) => any
  ): Promise<WorkerInstance>;

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
  each(
    callback?: (item: WorkerInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: WorkerListInstanceEachOptions,
    callback?: (item: WorkerInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of WorkerInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: WorkerPage) => any
  ): Promise<WorkerPage>;
  /**
   * Lists WorkerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WorkerListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: WorkerInstance[]) => any
  ): Promise<WorkerInstance[]>;
  list(
    params: WorkerListInstanceOptions,
    callback?: (error: Error | null, items: WorkerInstance[]) => any
  ): Promise<WorkerInstance[]>;
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
  page(
    callback?: (error: Error | null, items: WorkerPage) => any
  ): Promise<WorkerPage>;
  page(
    params: WorkerListInstancePageOptions,
    callback?: (error: Error | null, items: WorkerPage) => any
  ): Promise<WorkerPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function WorkerListInstance(
  version: V1,
  workspaceSid: string
): WorkerListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as WorkerListInstance;

  instance.get = function get(sid): WorkerContext {
    return new WorkerContextImpl(version, workspaceSid, sid);
  };

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = `/Workspaces/${workspaceSid}/Workers`;

  Object.defineProperty(instance, "cumulativeStatistics", {
    get: function cumulativeStatistics() {
      if (!instance._cumulativeStatistics) {
        instance._cumulativeStatistics =
          WorkersCumulativeStatisticsListInstance(
            instance._version,
            instance._solution.workspaceSid
          );
      }
      return instance._cumulativeStatistics;
    },
  });

  Object.defineProperty(instance, "realTimeStatistics", {
    get: function realTimeStatistics() {
      if (!instance._realTimeStatistics) {
        instance._realTimeStatistics = WorkersRealTimeStatisticsListInstance(
          instance._version,
          instance._solution.workspaceSid
        );
      }
      return instance._realTimeStatistics;
    },
  });

  Object.defineProperty(instance, "statistics", {
    get: function statistics() {
      if (!instance._statistics) {
        instance._statistics = WorkersStatisticsListInstance(
          instance._version,
          instance._solution.workspaceSid
        );
      }
      return instance._statistics;
    },
  });

  instance.create = function create(
    params: WorkerListInstanceCreateOptions,
    callback?: (error: Error | null, items: WorkerInstance) => any
  ): Promise<WorkerInstance> {
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
    if (params["activitySid"] !== undefined)
      data["ActivitySid"] = params["activitySid"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WorkerInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | WorkerListInstancePageOptions
      | ((error: Error | null, items: WorkerPage) => any),
    callback?: (error: Error | null, items: WorkerPage) => any
  ): Promise<WorkerPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["activityName"] !== undefined)
      data["ActivityName"] = params["activityName"];
    if (params["activitySid"] !== undefined)
      data["ActivitySid"] = params["activitySid"];
    if (params["available"] !== undefined)
      data["Available"] = params["available"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["targetWorkersExpression"] !== undefined)
      data["TargetWorkersExpression"] = params["targetWorkersExpression"];
    if (params["taskQueueName"] !== undefined)
      data["TaskQueueName"] = params["taskQueueName"];
    if (params["taskQueueSid"] !== undefined)
      data["TaskQueueSid"] = params["taskQueueSid"];
    if (params["ordering"] !== undefined) data["Ordering"] = params["ordering"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new WorkerPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: WorkerPage) => any
  ): Promise<WorkerPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new WorkerPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class WorkerPage extends Page<
  V1,
  WorkerPayload,
  WorkerResource,
  WorkerInstance
> {
  /**
   * Initialize the WorkerPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: WorkerSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of WorkerInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkerResource): WorkerInstance {
    return new WorkerInstance(
      this._version,
      payload,
      this._solution.workspaceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
