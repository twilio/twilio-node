/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { ExecutionContextListInstance } from "./execution/executionContext";
import { ExecutionStepListInstance } from "./execution/executionStep";

type ExecutionStatus = "active" | "ended";

/**
 * Options to pass to update a ExecutionInstance
 *
 * @property { ExecutionStatus } status
 */
export interface ExecutionContextUpdateOptions {
  status: ExecutionStatus;
}

/**
 * Options to pass to create a ExecutionInstance
 *
 * @property { string } to The Contact phone number to start a Studio Flow Execution, available as variable `{{contact.channel.address}}`.
 * @property { string } from The Twilio phone number to send messages or initiate calls from during the Flow\\\'s Execution. Available as variable `{{flow.channel.address}}`. For SMS, this can also be a Messaging Service SID.
 * @property { any } [parameters] JSON data that will be added to the Flow\\\'s context and that can be accessed as variables inside your Flow. For example, if you pass in `Parameters={\\\"name\\\":\\\"Zeke\\\"}`, a widget in your Flow can reference the variable `{{flow.data.name}}`, which returns \\\"Zeke\\\". Note: the JSON value must explicitly be passed as a string, not as a hash object. Depending on your particular HTTP library, you may need to add quotes or URL encode the JSON string.
 */
export interface ExecutionListInstanceCreateOptions {
  to: string;
  from: string;
  parameters?: any;
}
/**
 * Options to pass to each
 *
 * @property { Date } [dateCreatedFrom] Only show Execution resources starting on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
 * @property { Date } [dateCreatedTo] Only show Execution resources starting before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
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
export interface ExecutionListInstanceEachOptions {
  dateCreatedFrom?: Date;
  dateCreatedTo?: Date;
  pageSize?: number;
  callback?: (item: ExecutionInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { Date } [dateCreatedFrom] Only show Execution resources starting on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
 * @property { Date } [dateCreatedTo] Only show Execution resources starting before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ExecutionListInstanceOptions {
  dateCreatedFrom?: Date;
  dateCreatedTo?: Date;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { Date } [dateCreatedFrom] Only show Execution resources starting on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
 * @property { Date } [dateCreatedTo] Only show Execution resources starting before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ExecutionListInstancePageOptions {
  dateCreatedFrom?: Date;
  dateCreatedTo?: Date;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface ExecutionContext {
  executionContext: ExecutionContextListInstance;
  steps: ExecutionStepListInstance;

  /**
   * Remove a ExecutionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ExecutionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExecutionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ExecutionInstance) => any
  ): Promise<ExecutionInstance>;

  /**
   * Update a ExecutionInstance
   *
   * @param { ExecutionContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExecutionInstance
   */
  update(
    params: ExecutionContextUpdateOptions,
    callback?: (error: Error | null, item?: ExecutionInstance) => any
  ): Promise<ExecutionInstance>;
  update(params: any, callback?: any): Promise<ExecutionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ExecutionContextSolution {
  flowSid: string;
  sid: string;
}

export class ExecutionContextImpl implements ExecutionContext {
  protected _solution: ExecutionContextSolution;
  protected _uri: string;

  protected _executionContext?: ExecutionContextListInstance;
  protected _steps?: ExecutionStepListInstance;

  constructor(protected _version: V2, flowSid: string, sid: string) {
    if (!isValidPathParam(flowSid)) {
      throw new Error("Parameter 'flowSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { flowSid, sid };
    this._uri = `/Flows/${flowSid}/Executions/${sid}`;
  }

  get executionContext(): ExecutionContextListInstance {
    this._executionContext =
      this._executionContext ||
      ExecutionContextListInstance(
        this._version,
        this._solution.flowSid,
        this._solution.sid
      );
    return this._executionContext;
  }

  get steps(): ExecutionStepListInstance {
    this._steps =
      this._steps ||
      ExecutionStepListInstance(
        this._version,
        this._solution.flowSid,
        this._solution.sid
      );
    return this._steps;
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

  fetch(callback?: any): Promise<ExecutionInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ExecutionInstance(
          operationVersion,
          payload,
          instance._solution.flowSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params: any, callback?: any): Promise<ExecutionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["status"] === null || params["status"] === undefined) {
      throw new Error("Required parameter \"params['status']\" missing.");
    }

    let data: any = {};

    data["Status"] = params["status"];

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
        new ExecutionInstance(
          operationVersion,
          payload,
          instance._solution.flowSid,
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

interface ExecutionPayload extends TwilioResponsePayload {
  executions: ExecutionResource[];
}

interface ExecutionResource {
  sid?: string | null;
  account_sid?: string | null;
  flow_sid?: string | null;
  contact_channel_address?: string | null;
  context?: any | null;
  status?: ExecutionStatus;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class ExecutionInstance {
  protected _solution: ExecutionContextSolution;
  protected _context?: ExecutionContext;

  constructor(
    protected _version: V2,
    payload: ExecutionResource,
    flowSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.flowSid = payload.flow_sid;
    this.contactChannelAddress = payload.contact_channel_address;
    this.context = payload.context;
    this.status = payload.status;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { flowSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Flow
   */
  flowSid?: string | null;
  /**
   * The phone number, SIP address or Client identifier that triggered the Execution
   */
  contactChannelAddress?: string | null;
  /**
   * The current state of the flow
   */
  context?: any | null;
  status?: ExecutionStatus;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;
  /**
   * Nested resource URLs
   */
  links?: object | null;

  private get _proxy(): ExecutionContext {
    this._context =
      this._context ||
      new ExecutionContextImpl(
        this._version,
        this._solution.flowSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a ExecutionInstance
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
   * Fetch a ExecutionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExecutionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ExecutionInstance) => any
  ): Promise<ExecutionInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ExecutionInstance
   *
   * @param { ExecutionContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExecutionInstance
   */
  update(
    params: ExecutionContextUpdateOptions,
    callback?: (error: Error | null, item?: ExecutionInstance) => any
  ): Promise<ExecutionInstance>;
  update(params: any, callback?: any): Promise<ExecutionInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the executionContext.
   */
  executionContext(): ExecutionContextListInstance {
    return this._proxy.executionContext;
  }

  /**
   * Access the steps.
   */
  steps(): ExecutionStepListInstance {
    return this._proxy.steps;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      flowSid: this.flowSid,
      contactChannelAddress: this.contactChannelAddress,
      context: this.context,
      status: this.status,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ExecutionSolution {
  flowSid?: string;
}

export interface ExecutionListInstance {
  _version: V2;
  _solution: ExecutionSolution;
  _uri: string;

  (sid: string): ExecutionContext;
  get(sid: string): ExecutionContext;

  /**
   * Create a ExecutionInstance
   *
   * @param { ExecutionListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExecutionInstance
   */
  create(
    params: ExecutionListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ExecutionInstance) => any
  ): Promise<ExecutionInstance>;
  create(params: any, callback?: any): Promise<ExecutionInstance>;

  /**
   * Streams ExecutionInstance records from the API.
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
    callback?: (item: ExecutionInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams ExecutionInstance records from the API.
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
   * @param { ExecutionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: ExecutionListInstanceEachOptions,
    callback?: (item: ExecutionInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ExecutionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: ExecutionPage) => any
  ): Promise<ExecutionPage>;
  /**
   * Retrieve a single target page of ExecutionInstance records from the API.
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
    callback?: (error: Error | null, items: ExecutionPage) => any
  ): Promise<ExecutionPage>;
  getPage(params?: any, callback?: any): Promise<ExecutionPage>;
  /**
   * Lists ExecutionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ExecutionInstance[]) => any
  ): Promise<ExecutionInstance[]>;
  /**
   * Lists ExecutionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ExecutionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: ExecutionListInstanceOptions,
    callback?: (error: Error | null, items: ExecutionInstance[]) => any
  ): Promise<ExecutionInstance[]>;
  list(params?: any, callback?: any): Promise<ExecutionInstance[]>;
  /**
   * Retrieve a single page of ExecutionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ExecutionPage) => any
  ): Promise<ExecutionPage>;
  /**
   * Retrieve a single page of ExecutionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ExecutionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: ExecutionListInstancePageOptions,
    callback?: (error: Error | null, items: ExecutionPage) => any
  ): Promise<ExecutionPage>;
  page(params?: any, callback?: any): Promise<ExecutionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ExecutionListInstance(
  version: V2,
  flowSid: string
): ExecutionListInstance {
  if (!isValidPathParam(flowSid)) {
    throw new Error("Parameter 'flowSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ExecutionListInstance;

  instance.get = function get(sid): ExecutionContext {
    return new ExecutionContextImpl(version, flowSid, sid);
  };

  instance._version = version;
  instance._solution = { flowSid };
  instance._uri = `/Flows/${flowSid}/Executions`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<ExecutionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["to"] === null || params["to"] === undefined) {
      throw new Error("Required parameter \"params['to']\" missing.");
    }

    if (params["from"] === null || params["from"] === undefined) {
      throw new Error("Required parameter \"params['from']\" missing.");
    }

    let data: any = {};

    data["To"] = params["to"];

    data["From"] = params["from"];
    if (params["parameters"] !== undefined)
      data["Parameters"] = serialize.object(params["parameters"]);

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
        new ExecutionInstance(
          operationVersion,
          payload,
          instance._solution.flowSid
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
  ): Promise<ExecutionPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["dateCreatedFrom"] !== undefined)
      data["DateCreatedFrom"] = serialize.iso8601DateTime(
        params["dateCreatedFrom"]
      );
    if (params["dateCreatedTo"] !== undefined)
      data["DateCreatedTo"] = serialize.iso8601DateTime(
        params["dateCreatedTo"]
      );
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
        new ExecutionPage(operationVersion, payload, instance._solution)
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
  ): Promise<ExecutionPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ExecutionPage(instance._version, payload, instance._solution)
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

export class ExecutionPage extends Page<
  V2,
  ExecutionPayload,
  ExecutionResource,
  ExecutionInstance
> {
  /**
   * Initialize the ExecutionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: ExecutionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ExecutionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ExecutionResource): ExecutionInstance {
    return new ExecutionInstance(
      this._version,
      payload,
      this._solution.flowSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
