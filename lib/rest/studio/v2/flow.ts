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
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { ExecutionListInstance } from "./flow/execution";
import { FlowRevisionListInstance } from "./flow/flowRevision";
import { FlowTestUserListInstance } from "./flow/flowTestUser";

type FlowStatus = "draft" | "published";

/**
 * Options to pass to update a FlowInstance
 *
 * @property { FlowStatus } status
 * @property { string } [friendlyName] The string that you assigned to describe the Flow.
 * @property { any } [definition] JSON representation of flow definition.
 * @property { string } [commitMessage] Description of change made in the revision.
 */
export interface FlowContextUpdateOptions {
  status: FlowStatus;
  friendlyName?: string;
  definition?: any;
  commitMessage?: string;
}

/**
 * Options to pass to create a FlowInstance
 *
 * @property { string } friendlyName The string that you assigned to describe the Flow.
 * @property { FlowStatus } status
 * @property { any } definition JSON representation of flow definition.
 * @property { string } [commitMessage] Description of change made in the revision.
 */
export interface FlowListInstanceCreateOptions {
  friendlyName: string;
  status: FlowStatus;
  definition: any;
  commitMessage?: string;
}
/**
 * Options to pass to each
 *
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
export interface FlowListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: FlowInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface FlowListInstanceOptions {
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface FlowListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface FlowContext {
  executions: ExecutionListInstance;
  revisions: FlowRevisionListInstance;
  testUsers: FlowTestUserListInstance;

  /**
   * Remove a FlowInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a FlowInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlowInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FlowInstance) => any
  ): Promise<FlowInstance>;

  /**
   * Update a FlowInstance
   *
   * @param { FlowContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlowInstance
   */
  update(
    params: FlowContextUpdateOptions,
    callback?: (error: Error | null, item?: FlowInstance) => any
  ): Promise<FlowInstance>;
  update(params: any, callback?: any): Promise<FlowInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FlowContextSolution {
  sid?: string;
}

export class FlowContextImpl implements FlowContext {
  protected _solution: FlowContextSolution;
  protected _uri: string;

  protected _executions?: ExecutionListInstance;
  protected _revisions?: FlowRevisionListInstance;
  protected _testUsers?: FlowTestUserListInstance;

  constructor(protected _version: V2, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Flows/${sid}`;
  }

  get executions(): ExecutionListInstance {
    this._executions =
      this._executions ||
      ExecutionListInstance(this._version, this._solution.sid);
    return this._executions;
  }

  get revisions(): FlowRevisionListInstance {
    this._revisions =
      this._revisions ||
      FlowRevisionListInstance(this._version, this._solution.sid);
    return this._revisions;
  }

  get testUsers(): FlowTestUserListInstance {
    this._testUsers =
      this._testUsers ||
      FlowTestUserListInstance(this._version, this._solution.sid);
    return this._testUsers;
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

  fetch(callback?: any): Promise<FlowInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FlowInstance(operationVersion, payload, this._solution.sid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params: any, callback?: any): Promise<FlowInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["status"] === null || params["status"] === undefined) {
      throw new Error("Required parameter \"params['status']\" missing.");
    }

    let data: any = {};

    data["Status"] = params["status"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["definition"] !== undefined)
      data["Definition"] = serialize.object(params["definition"]);
    if (params["commitMessage"] !== undefined)
      data["CommitMessage"] = params["commitMessage"];

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
        new FlowInstance(operationVersion, payload, this._solution.sid)
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

interface FlowPayload extends FlowResource, Page.TwilioResponsePayload {}

interface FlowResource {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  definition?: any | null;
  status?: FlowStatus;
  revision?: number | null;
  commit_message?: string | null;
  valid?: boolean | null;
  errors?: Array<any> | null;
  warnings?: Array<any> | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  webhook_url?: string | null;
  url?: string | null;
  links?: object | null;
}

export class FlowInstance {
  protected _solution: FlowContextSolution;
  protected _context?: FlowContext;

  constructor(protected _version: V2, payload: FlowPayload, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.definition = payload.definition;
    this.status = payload.status;
    this.revision = deserialize.integer(payload.revision);
    this.commitMessage = payload.commit_message;
    this.valid = payload.valid;
    this.errors = payload.errors;
    this.warnings = payload.warnings;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.webhookUrl = payload.webhook_url;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
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
   * The string that you assigned to describe the Flow
   */
  friendlyName?: string | null;
  /**
   * JSON representation of flow definition
   */
  definition?: any | null;
  status?: FlowStatus;
  /**
   * The latest revision number of the Flow\'s definition
   */
  revision?: number | null;
  /**
   * Description of change made in the revision
   */
  commitMessage?: string | null;
  /**
   * Boolean if the flow definition is valid
   */
  valid?: boolean | null;
  /**
   * List of error in the flow definition
   */
  errors?: Array<any> | null;
  /**
   * List of warnings in the flow definition
   */
  warnings?: Array<any> | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  webhookUrl?: string | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;
  /**
   * Nested resource URLs
   */
  links?: object | null;

  private get _proxy(): FlowContext {
    this._context =
      this._context || new FlowContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a FlowInstance
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
   * Fetch a FlowInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlowInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FlowInstance) => any
  ): Promise<FlowInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a FlowInstance
   *
   * @param { FlowContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlowInstance
   */
  update(
    params: FlowContextUpdateOptions,
    callback?: (error: Error | null, item?: FlowInstance) => any
  ): Promise<FlowInstance>;
  update(params: any, callback?: any): Promise<FlowInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the executions.
   */
  executions(): ExecutionListInstance {
    return this._proxy.executions;
  }

  /**
   * Access the revisions.
   */
  revisions(): FlowRevisionListInstance {
    return this._proxy.revisions;
  }

  /**
   * Access the testUsers.
   */
  testUsers(): FlowTestUserListInstance {
    return this._proxy.testUsers;
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
      friendlyName: this.friendlyName,
      definition: this.definition,
      status: this.status,
      revision: this.revision,
      commitMessage: this.commitMessage,
      valid: this.valid,
      errors: this.errors,
      warnings: this.warnings,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      webhookUrl: this.webhookUrl,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface FlowListInstance {
  (sid: string): FlowContext;
  get(sid: string): FlowContext;

  /**
   * Create a FlowInstance
   *
   * @param { FlowListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlowInstance
   */
  create(
    params: FlowListInstanceCreateOptions,
    callback?: (error: Error | null, item?: FlowInstance) => any
  ): Promise<FlowInstance>;
  create(params: any, callback?: any): Promise<FlowInstance>;

  /**
   * Streams FlowInstance records from the API.
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
    callback?: (item: FlowInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams FlowInstance records from the API.
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
   * @param { FlowListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: FlowListInstanceEachOptions,
    callback?: (item: FlowInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of FlowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: FlowPage) => any
  ): Promise<FlowPage>;
  /**
   * Retrieve a single target page of FlowInstance records from the API.
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
    callback?: (error: Error | null, items: FlowPage) => any
  ): Promise<FlowPage>;
  getPage(params?: any, callback?: any): Promise<FlowPage>;
  /**
   * Lists FlowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: FlowInstance[]) => any
  ): Promise<FlowInstance[]>;
  /**
   * Lists FlowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FlowListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: FlowListInstanceOptions,
    callback?: (error: Error | null, items: FlowInstance[]) => any
  ): Promise<FlowInstance[]>;
  list(params?: any, callback?: any): Promise<FlowInstance[]>;
  /**
   * Retrieve a single page of FlowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: FlowPage) => any
  ): Promise<FlowPage>;
  /**
   * Retrieve a single page of FlowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FlowListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: FlowListInstancePageOptions,
    callback?: (error: Error | null, items: FlowPage) => any
  ): Promise<FlowPage>;
  page(params?: any, callback?: any): Promise<FlowPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FlowSolution {}

interface FlowListInstanceImpl extends FlowListInstance {}
class FlowListInstanceImpl implements FlowListInstance {
  _version?: V2;
  _solution?: FlowSolution;
  _uri?: string;
}

export function FlowListInstance(version: V2): FlowListInstance {
  const instance = ((sid) => instance.get(sid)) as FlowListInstanceImpl;

  instance.get = function get(sid): FlowContext {
    return new FlowContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Flows`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<FlowInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    if (params["status"] === null || params["status"] === undefined) {
      throw new Error("Required parameter \"params['status']\" missing.");
    }

    if (params["definition"] === null || params["definition"] === undefined) {
      throw new Error("Required parameter \"params['definition']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    data["Status"] = params["status"];

    data["Definition"] = serialize.object(params["definition"]);
    if (params["commitMessage"] !== undefined)
      data["CommitMessage"] = params["commitMessage"];

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
      (payload) => new FlowInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<FlowPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

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
      (payload) => new FlowPage(operationVersion, payload, this._solution)
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
    targetUrl?: any,
    callback?: any
  ): Promise<FlowPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new FlowPage(this._version, payload, this._solution)
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

export class FlowPage extends Page<
  V2,
  FlowPayload,
  FlowResource,
  FlowInstance
> {
  /**
   * Initialize the FlowPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: FlowSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FlowInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FlowPayload): FlowInstance {
    return new FlowInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
