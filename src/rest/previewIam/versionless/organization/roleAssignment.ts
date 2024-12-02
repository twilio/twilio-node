/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Organization Public API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import Versionless from "../../Versionless";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

export class PublicApiCreateRoleAssignmentRequest {
  /**
   * Twilio Role Sid representing assigned role
   */
  "roleSid": string;
  /**
   * Twilio Sid representing scope of this assignment
   */
  "scope": string;
  /**
   * Twilio Sid representing identity of this assignment
   */
  "identity": string;
}

/**
 * Options to pass to create a RoleAssignmentInstance
 */
export interface RoleAssignmentListInstanceCreateOptions {
  /**  */
  publicApiCreateRoleAssignmentRequest: PublicApiCreateRoleAssignmentRequest;
}
/**
 * Options to pass to each
 */
export interface RoleAssignmentListInstanceEachOptions {
  /**  */
  pageSize?: number;
  /**  */
  identity?: string;
  /**  */
  scope?: string;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: RoleAssignmentInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface RoleAssignmentListInstanceOptions {
  /**  */
  pageSize?: number;
  /**  */
  identity?: string;
  /**  */
  scope?: string;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface RoleAssignmentListInstancePageOptions {
  /**  */
  pageSize?: number;
  /**  */
  identity?: string;
  /**  */
  scope?: string;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface RoleAssignmentContext {
  /**
   * Remove a RoleAssignmentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RoleAssignmentContextSolution {
  organizationSid: string;
  sid: string;
}

export class RoleAssignmentContextImpl implements RoleAssignmentContext {
  protected _solution: RoleAssignmentContextSolution;
  protected _uri: string;

  constructor(
    protected _version: Versionless,
    organizationSid: string,
    sid: string
  ) {
    if (!isValidPathParam(organizationSid)) {
      throw new Error("Parameter 'organizationSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { organizationSid, sid };
    this._uri = `/${organizationSid}/RoleAssignments/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const headers: any = {};
    headers["Accept"] = "application/scim+json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        headers,
      });

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

interface RoleAssignmentPayload extends TwilioResponsePayload {
  content: RoleAssignmentResource[];
}

interface RoleAssignmentResource {
  sid: string;
  role_sid: string;
  scope: string;
  identity: string;
  code: number;
  message: string;
  moreInfo: string;
  status: number;
}

export class RoleAssignmentInstance {
  protected _solution: RoleAssignmentContextSolution;
  protected _context?: RoleAssignmentContext;

  constructor(
    protected _version: Versionless,
    payload: RoleAssignmentResource,
    organizationSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.roleSid = payload.role_sid;
    this.scope = payload.scope;
    this.identity = payload.identity;
    this.code = payload.code;
    this.message = payload.message;
    this.moreInfo = payload.moreInfo;
    this.status = payload.status;

    this._solution = { organizationSid, sid: sid || this.sid };
  }

  /**
   * Twilio Role Assignment Sid representing this role assignment
   */
  sid: string;
  /**
   * Twilio Role Sid representing assigned role
   */
  roleSid: string;
  /**
   * Twilio Sid representing identity of this assignment
   */
  scope: string;
  /**
   * Twilio Sid representing scope of this assignment
   */
  identity: string;
  /**
   * Twilio-specific error code
   */
  code: number;
  /**
   * Error message
   */
  message: string;
  /**
   * Link to Error Code References
   */
  moreInfo: string;
  /**
   * HTTP response status code
   */
  status: number;

  private get _proxy(): RoleAssignmentContext {
    this._context =
      this._context ||
      new RoleAssignmentContextImpl(
        this._version,
        this._solution.organizationSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a RoleAssignmentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      roleSid: this.roleSid,
      scope: this.scope,
      identity: this.identity,
      code: this.code,
      message: this.message,
      moreInfo: this.moreInfo,
      status: this.status,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface RoleAssignmentSolution {
  organizationSid: string;
}

export interface RoleAssignmentListInstance {
  _version: Versionless;
  _solution: RoleAssignmentSolution;
  _uri: string;

  (sid: string): RoleAssignmentContext;
  get(sid: string): RoleAssignmentContext;

  /**
   * Create a RoleAssignmentInstance
   *
   * @param params - Body for request
   * @param headers - header params for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RoleAssignmentInstance
   */
  create(
    params: PublicApiCreateRoleAssignmentRequest,
    headers?: any,
    callback?: (error: Error | null, item?: RoleAssignmentInstance) => any
  ): Promise<RoleAssignmentInstance>;

  /**
   * Streams RoleAssignmentInstance records from the API.
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
   * @param { RoleAssignmentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: RoleAssignmentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: RoleAssignmentListInstanceEachOptions,
    callback?: (
      item: RoleAssignmentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of RoleAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: RoleAssignmentPage) => any
  ): Promise<RoleAssignmentPage>;
  /**
   * Lists RoleAssignmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RoleAssignmentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: RoleAssignmentInstance[]) => any
  ): Promise<RoleAssignmentInstance[]>;
  list(
    params: RoleAssignmentListInstanceOptions,
    callback?: (error: Error | null, items: RoleAssignmentInstance[]) => any
  ): Promise<RoleAssignmentInstance[]>;
  /**
   * Retrieve a single page of RoleAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RoleAssignmentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: RoleAssignmentPage) => any
  ): Promise<RoleAssignmentPage>;
  page(
    params: RoleAssignmentListInstancePageOptions,
    callback?: (error: Error | null, items: RoleAssignmentPage) => any
  ): Promise<RoleAssignmentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function RoleAssignmentListInstance(
  version: Versionless,
  organizationSid: string
): RoleAssignmentListInstance {
  if (!isValidPathParam(organizationSid)) {
    throw new Error("Parameter 'organizationSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as RoleAssignmentListInstance;

  instance.get = function get(sid): RoleAssignmentContext {
    return new RoleAssignmentContextImpl(version, organizationSid, sid);
  };

  instance._version = version;
  instance._solution = { organizationSid };
  instance._uri = `/${organizationSid}/RoleAssignments`;

  instance.create = function create(
    params: PublicApiCreateRoleAssignmentRequest,
    headers?: any,
    callback?: (error: Error | null, items: RoleAssignmentInstance) => any
  ): Promise<RoleAssignmentInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    let data: any = {};

    data = params;

    if (headers === null || headers === undefined) {
      headers = {};
    }

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RoleAssignmentInstance(
          operationVersion,
          payload,
          instance._solution.organizationSid
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
      | RoleAssignmentListInstancePageOptions
      | ((error: Error | null, items: RoleAssignmentPage) => any),
    callback?: (error: Error | null, items: RoleAssignmentPage) => any
  ): Promise<RoleAssignmentPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];
    if (params["identity"] !== undefined) data["Identity"] = params["identity"];
    if (params["scope"] !== undefined) data["Scope"] = params["scope"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RoleAssignmentPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: RoleAssignmentPage) => any
  ): Promise<RoleAssignmentPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new RoleAssignmentPage(instance._version, payload, instance._solution)
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

export class RoleAssignmentPage extends Page<
  Versionless,
  RoleAssignmentPayload,
  RoleAssignmentResource,
  RoleAssignmentInstance
> {
  /**
   * Initialize the RoleAssignmentPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: Versionless,
    response: Response<string>,
    solution: RoleAssignmentSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of RoleAssignmentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RoleAssignmentResource): RoleAssignmentInstance {
    return new RoleAssignmentInstance(
      this._version,
      payload,
      this._solution.organizationSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
