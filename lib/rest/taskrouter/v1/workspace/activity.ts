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

/**
 * Options to pass to update a ActivityInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the Activity resource. It can be up to 64 characters long. These names are used to calculate and expose statistics about Workers, and provide visibility into the state of each Worker. Examples of friendly names include: `on-call`, `break`, and `email`.
 */
export interface ActivityContextUpdateOptions {
  friendlyName?: string;
}

/**
 * Options to pass to create a ActivityInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the Activity resource. It can be up to 64 characters long. These names are used to calculate and expose statistics about Workers, and provide visibility into the state of each Worker. Examples of friendly names include: `on-call`, `break`, and `email`.
 * @property { boolean } [available] Whether the Worker should be eligible to receive a Task when it occupies the Activity. A value of `true`, `1`, or `yes` specifies the Activity is available. All other values specify that it is not. The value cannot be changed after the Activity is created.
 */
export interface ActivityListInstanceCreateOptions {
  friendlyName: string;
  available?: boolean;
}
/**
 * Options to pass to each
 *
 * @property { string } [friendlyName] The `friendly_name` of the Activity resources to read.
 * @property { string } [available] Whether return only Activity resources that are available or unavailable. A value of `true` returns only available activities. Values of \'1\' or `yes` also indicate `true`. All other values represent `false` and return activities that are unavailable.
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
export interface ActivityListInstanceEachOptions {
  friendlyName?: string;
  available?: string;
  pageSize?: number;
  callback?: (item: ActivityInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [friendlyName] The `friendly_name` of the Activity resources to read.
 * @property { string } [available] Whether return only Activity resources that are available or unavailable. A value of `true` returns only available activities. Values of \'1\' or `yes` also indicate `true`. All other values represent `false` and return activities that are unavailable.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ActivityListInstanceOptions {
  friendlyName?: string;
  available?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [friendlyName] The `friendly_name` of the Activity resources to read.
 * @property { string } [available] Whether return only Activity resources that are available or unavailable. A value of `true` returns only available activities. Values of \'1\' or `yes` also indicate `true`. All other values represent `false` and return activities that are unavailable.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ActivityListInstancePageOptions {
  friendlyName?: string;
  available?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface ActivityContext {
  /**
   * Remove a ActivityInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ActivityInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ActivityInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ActivityInstance) => any
  ): Promise<ActivityInstance>;

  /**
   * Update a ActivityInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ActivityInstance
   */
  update(
    callback?: (error: Error | null, item?: ActivityInstance) => any
  ): Promise<ActivityInstance>;
  /**
   * Update a ActivityInstance
   *
   * @param { ActivityContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ActivityInstance
   */
  update(
    params: ActivityContextUpdateOptions,
    callback?: (error: Error | null, item?: ActivityInstance) => any
  ): Promise<ActivityInstance>;
  update(params?: any, callback?: any): Promise<ActivityInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ActivityContextSolution {
  workspaceSid: string;
  sid: string;
}

export class ActivityContextImpl implements ActivityContext {
  protected _solution: ActivityContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, workspaceSid: string, sid: string) {
    if (!isValidPathParam(workspaceSid)) {
      throw new Error("Parameter 'workspaceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { workspaceSid, sid };
    this._uri = `/Workspaces/${workspaceSid}/Activities/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<ActivityInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ActivityInstance(
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

  update(params?: any, callback?: any): Promise<ActivityInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

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
        new ActivityInstance(
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

interface ActivityPayload extends TwilioResponsePayload {
  activities: ActivityResource[];
}

interface ActivityResource {
  account_sid: string;
  available: boolean;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  workspace_sid: string;
  url: string;
  links: object;
}

export class ActivityInstance {
  protected _solution: ActivityContextSolution;
  protected _context?: ActivityContext;

  constructor(
    protected _version: V1,
    payload: ActivityResource,
    workspaceSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.available = payload.available;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
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
   * Whether the Worker should be eligible to receive a Task when it occupies the Activity
   */
  available: boolean;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated: Date;
  /**
   * The string that you assigned to describe the Activity resource
   */
  friendlyName: string;
  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The SID of the Workspace that contains the Activity
   */
  workspaceSid: string;
  /**
   * The absolute URL of the Activity resource
   */
  url: string;
  links: object;

  private get _proxy(): ActivityContext {
    this._context =
      this._context ||
      new ActivityContextImpl(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a ActivityInstance
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
   * Fetch a ActivityInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ActivityInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ActivityInstance) => any
  ): Promise<ActivityInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ActivityInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ActivityInstance
   */
  update(
    callback?: (error: Error | null, item?: ActivityInstance) => any
  ): Promise<ActivityInstance>;
  /**
   * Update a ActivityInstance
   *
   * @param { ActivityContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ActivityInstance
   */
  update(
    params: ActivityContextUpdateOptions,
    callback?: (error: Error | null, item?: ActivityInstance) => any
  ): Promise<ActivityInstance>;
  update(params?: any, callback?: any): Promise<ActivityInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      available: this.available,
      dateCreated: this.dateCreated,
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

export interface ActivitySolution {
  workspaceSid: string;
}

export interface ActivityListInstance {
  _version: V1;
  _solution: ActivitySolution;
  _uri: string;

  (sid: string): ActivityContext;
  get(sid: string): ActivityContext;

  /**
   * Create a ActivityInstance
   *
   * @param { ActivityListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ActivityInstance
   */
  create(
    params: ActivityListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ActivityInstance) => any
  ): Promise<ActivityInstance>;
  create(params: any, callback?: any): Promise<ActivityInstance>;

  /**
   * Streams ActivityInstance records from the API.
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
  each(
    callback?: (item: ActivityInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams ActivityInstance records from the API.
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
   * @param { ActivityListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: ActivityListInstanceEachOptions,
    callback?: (item: ActivityInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ActivityInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: ActivityPage) => any
  ): Promise<ActivityPage>;
  /**
   * Retrieve a single target page of ActivityInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: ActivityPage) => any
  ): Promise<ActivityPage>;
  getPage(params?: any, callback?: any): Promise<ActivityPage>;
  /**
   * Lists ActivityInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ActivityInstance[]) => any
  ): Promise<ActivityInstance[]>;
  /**
   * Lists ActivityInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ActivityListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: ActivityListInstanceOptions,
    callback?: (error: Error | null, items: ActivityInstance[]) => any
  ): Promise<ActivityInstance[]>;
  list(params?: any, callback?: any): Promise<ActivityInstance[]>;
  /**
   * Retrieve a single page of ActivityInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ActivityPage) => any
  ): Promise<ActivityPage>;
  /**
   * Retrieve a single page of ActivityInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ActivityListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: ActivityListInstancePageOptions,
    callback?: (error: Error | null, items: ActivityPage) => any
  ): Promise<ActivityPage>;
  page(params?: any, callback?: any): Promise<ActivityPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ActivityListInstance(
  version: V1,
  workspaceSid: string
): ActivityListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ActivityListInstance;

  instance.get = function get(sid): ActivityContext {
    return new ActivityContextImpl(version, workspaceSid, sid);
  };

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = `/Workspaces/${workspaceSid}/Activities`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<ActivityInstance> {
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
    if (params["available"] !== undefined)
      data["Available"] = serialize.bool(params["available"]);

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
        new ActivityInstance(
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
    params?: any,
    callback?: any
  ): Promise<ActivityPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["available"] !== undefined)
      data["Available"] = params["available"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
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
      (payload) =>
        new ActivityPage(operationVersion, payload, instance._solution)
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
    targetUrl?: any,
    callback?: any
  ): Promise<ActivityPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ActivityPage(instance._version, payload, instance._solution)
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

export class ActivityPage extends Page<
  V1,
  ActivityPayload,
  ActivityResource,
  ActivityInstance
> {
  /**
   * Initialize the ActivityPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ActivitySolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ActivityInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ActivityResource): ActivityInstance {
    return new ActivityInstance(
      this._version,
      payload,
      this._solution.workspaceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
