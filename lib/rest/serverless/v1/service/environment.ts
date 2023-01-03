/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Serverless
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
import { DeploymentListInstance } from "./environment/deployment";
import { LogListInstance } from "./environment/log";
import { VariableListInstance } from "./environment/variable";

/**
 * Options to pass to create a EnvironmentInstance
 *
 * @property { string } uniqueName A user-defined string that uniquely identifies the Environment resource. It can be a maximum of 100 characters.
 * @property { string } [domainSuffix] A URL-friendly name that represents the environment and forms part of the domain name. It can be a maximum of 16 characters.
 */
export interface EnvironmentListInstanceCreateOptions {
  uniqueName: string;
  domainSuffix?: string;
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
export interface EnvironmentListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: EnvironmentInstance, done: (err?: Error) => void) => void;
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
export interface EnvironmentListInstanceOptions {
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
export interface EnvironmentListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface EnvironmentContext {
  deployments: DeploymentListInstance;
  logs: LogListInstance;
  variables: VariableListInstance;

  /**
   * Remove a EnvironmentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a EnvironmentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EnvironmentInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EnvironmentInstance) => any
  ): Promise<EnvironmentInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface EnvironmentContextSolution {
  serviceSid?: string;
  sid?: string;
}

export class EnvironmentContextImpl implements EnvironmentContext {
  protected _solution: EnvironmentContextSolution;
  protected _uri: string;

  protected _deployments?: DeploymentListInstance;
  protected _logs?: LogListInstance;
  protected _variables?: VariableListInstance;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Environments/${sid}`;
  }

  get deployments(): DeploymentListInstance {
    this._deployments =
      this._deployments ||
      DeploymentListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._deployments;
  }

  get logs(): LogListInstance {
    this._logs =
      this._logs ||
      LogListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._logs;
  }

  get variables(): VariableListInstance {
    this._variables =
      this._variables ||
      VariableListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._variables;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
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

  fetch(
    callback?: (error: Error | null, item?: EnvironmentInstance) => any
  ): Promise<EnvironmentInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new EnvironmentInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
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

interface EnvironmentPayload extends TwilioResponsePayload {
  environments: EnvironmentResource[];
}

interface EnvironmentResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  build_sid?: string | null;
  unique_name?: string | null;
  domain_suffix?: string | null;
  domain_name?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class EnvironmentInstance {
  protected _solution: EnvironmentContextSolution;
  protected _context?: EnvironmentContext;

  constructor(
    protected _version: V1,
    payload: EnvironmentResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.buildSid = payload.build_sid;
    this.uniqueName = payload.unique_name;
    this.domainSuffix = payload.domain_suffix;
    this.domainName = payload.domain_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the Environment resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the Environment resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Service that the Environment resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The SID of the build deployed in the environment
   */
  buildSid?: string | null;
  /**
   * A user-defined string that uniquely identifies the Environment resource
   */
  uniqueName?: string | null;
  /**
   * A URL-friendly name that represents the environment
   */
  domainSuffix?: string | null;
  /**
   * The domain name for all Functions and Assets deployed in the Environment
   */
  domainName?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the Environment resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the Environment resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the Environment resource
   */
  url?: string | null;
  /**
   * The URLs of the Environment resource\'s nested resources
   */
  links?: object | null;

  private get _proxy(): EnvironmentContext {
    this._context =
      this._context ||
      new EnvironmentContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a EnvironmentInstance
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
   * Fetch a EnvironmentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EnvironmentInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EnvironmentInstance) => any
  ): Promise<EnvironmentInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the deployments.
   */
  deployments(): DeploymentListInstance {
    return this._proxy.deployments;
  }

  /**
   * Access the logs.
   */
  logs(): LogListInstance {
    return this._proxy.logs;
  }

  /**
   * Access the variables.
   */
  variables(): VariableListInstance {
    return this._proxy.variables;
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
      serviceSid: this.serviceSid,
      buildSid: this.buildSid,
      uniqueName: this.uniqueName,
      domainSuffix: this.domainSuffix,
      domainName: this.domainName,
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

export interface EnvironmentListInstance {
  (sid: string): EnvironmentContext;
  get(sid: string): EnvironmentContext;

  /**
   * Create a EnvironmentInstance
   *
   * @param { EnvironmentListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EnvironmentInstance
   */
  create(
    params: EnvironmentListInstanceCreateOptions,
    callback?: (error: Error | null, item?: EnvironmentInstance) => any
  ): Promise<EnvironmentInstance>;

  /**
   * Streams EnvironmentInstance records from the API.
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
   * @param { EnvironmentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: EnvironmentInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: EnvironmentListInstanceEachOptions,
    callback?: (item: EnvironmentInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of EnvironmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: EnvironmentPage) => any
  ): Promise<EnvironmentPage>;
  /**
   * Lists EnvironmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EnvironmentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: EnvironmentInstance[]) => any
  ): Promise<EnvironmentInstance[]>;
  list(
    params: EnvironmentListInstanceOptions,
    callback?: (error: Error | null, items: EnvironmentInstance[]) => any
  ): Promise<EnvironmentInstance[]>;
  /**
   * Retrieve a single page of EnvironmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EnvironmentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: EnvironmentPage) => any
  ): Promise<EnvironmentPage>;
  page(
    params: EnvironmentListInstancePageOptions,
    callback?: (error: Error | null, items: EnvironmentPage) => any
  ): Promise<EnvironmentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface EnvironmentSolution {
  serviceSid?: string;
}

interface EnvironmentListInstanceImpl extends EnvironmentListInstance {}
class EnvironmentListInstanceImpl implements EnvironmentListInstance {
  _version?: V1;
  _solution?: EnvironmentSolution;
  _uri?: string;
}

export function EnvironmentListInstance(
  version: V1,
  serviceSid: string
): EnvironmentListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as EnvironmentListInstanceImpl;

  instance.get = function get(sid): EnvironmentContext {
    return new EnvironmentContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Environments`;

  instance.create = function create(
    params: EnvironmentListInstanceCreateOptions,
    callback?: (error: Error | null, item?: EnvironmentInstance) => any
  ): Promise<EnvironmentInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["uniqueName"] === null || params["uniqueName"] === undefined) {
      throw new Error("Required parameter \"params['uniqueName']\" missing.");
    }

    let data: any = {};

    data["UniqueName"] = params["uniqueName"];
    if (params["domainSuffix"] !== undefined)
      data["DomainSuffix"] = params["domainSuffix"];

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
        new EnvironmentInstance(
          operationVersion,
          payload,
          this._solution.serviceSid
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
      | EnvironmentListInstancePageOptions
      | ((error: Error | null, item?: EnvironmentPage) => any),
    callback?: (error: Error | null, item?: EnvironmentPage) => any
  ): Promise<EnvironmentPage> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: EnvironmentPage) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
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
      (payload) =>
        new EnvironmentPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: EnvironmentPage) => any
  ): Promise<EnvironmentPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new EnvironmentPage(this._version, payload, this._solution)
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

export class EnvironmentPage extends Page<
  V1,
  EnvironmentPayload,
  EnvironmentResource,
  EnvironmentInstance
> {
  /**
   * Initialize the EnvironmentPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: EnvironmentSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of EnvironmentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EnvironmentResource): EnvironmentInstance {
    return new EnvironmentInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
