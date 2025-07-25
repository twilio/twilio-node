/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * The Status of this Factor. One of `unverified` or `verified`.
 */
export type FactorFactorStatuses = "unverified" | "verified";

/**
 * The Type of this Factor. Currently `push` and `totp` are supported.
 */
export type FactorFactorTypes = "push" | "totp";

export type FactorTotpAlgorithms = "sha1" | "sha256" | "sha512";

/**
 * Options to pass to update a FactorInstance
 */
export interface FactorContextUpdateOptions {
  /** The optional payload needed to verify the Factor for the first time. E.g. for a TOTP, the numeric code. */
  authPayload?: string;
  /** The new friendly name of this Factor. It can be up to 64 characters. */
  friendlyName?: string;
  /** For APN, the device token. For FCM, the registration token. It is used to send the push notifications. Required when `factor_type` is `push`. If specified, this value must be between 32 and 255 characters long. */
  "config.notificationToken"?: string;
  /** The Verify Push SDK version used to configure the factor */
  "config.sdkVersion"?: string;
  /** Defines how often, in seconds, are TOTP codes generated. i.e, a new TOTP code is generated every time_step seconds. Must be between 20 and 60 seconds, inclusive */
  "config.timeStep"?: number;
  /** The number of time-steps, past and future, that are valid for validation of TOTP codes. Must be between 0 and 2, inclusive */
  "config.skew"?: number;
  /** Number of digits for generated TOTP codes. Must be between 3 and 8, inclusive */
  "config.codeLength"?: number;
  /**  */
  "config.alg"?: FactorTotpAlgorithms;
  /** The transport technology used to generate the Notification Token. Can be `apn`, `fcm` or `none`.  Required when `factor_type` is `push`. */
  "config.notificationPlatform"?: string;
}
/**
 * Options to pass to each
 */
export interface FactorListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: FactorInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface FactorListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface FactorListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface FactorContext {
  /**
   * Remove a FactorInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a FactorInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FactorInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FactorInstance) => any
  ): Promise<FactorInstance>;

  /**
   * Update a FactorInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FactorInstance
   */
  update(
    callback?: (error: Error | null, item?: FactorInstance) => any
  ): Promise<FactorInstance>;
  /**
   * Update a FactorInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FactorInstance
   */
  update(
    params: FactorContextUpdateOptions,
    callback?: (error: Error | null, item?: FactorInstance) => any
  ): Promise<FactorInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FactorContextSolution {
  serviceSid: string;
  identity: string;
  sid: string;
}

export class FactorContextImpl implements FactorContext {
  protected _solution: FactorContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2,
    serviceSid: string,
    identity: string,
    sid: string
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(identity)) {
      throw new Error("Parameter 'identity' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, identity, sid };
    this._uri = `/Services/${serviceSid}/Entities/${identity}/Factors/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const headers: any = {};

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

  fetch(
    callback?: (error: Error | null, item?: FactorInstance) => any
  ): Promise<FactorInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FactorInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.identity,
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
      | FactorContextUpdateOptions
      | ((error: Error | null, item?: FactorInstance) => any),
    callback?: (error: Error | null, item?: FactorInstance) => any
  ): Promise<FactorInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["authPayload"] !== undefined)
      data["AuthPayload"] = params["authPayload"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["config.notificationToken"] !== undefined)
      data["Config.NotificationToken"] = params["config.notificationToken"];
    if (params["config.sdkVersion"] !== undefined)
      data["Config.SdkVersion"] = params["config.sdkVersion"];
    if (params["config.timeStep"] !== undefined)
      data["Config.TimeStep"] = params["config.timeStep"];
    if (params["config.skew"] !== undefined)
      data["Config.Skew"] = params["config.skew"];
    if (params["config.codeLength"] !== undefined)
      data["Config.CodeLength"] = params["config.codeLength"];
    if (params["config.alg"] !== undefined)
      data["Config.Alg"] = params["config.alg"];
    if (params["config.notificationPlatform"] !== undefined)
      data["Config.NotificationPlatform"] =
        params["config.notificationPlatform"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

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
        new FactorInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.identity,
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

interface FactorPayload extends TwilioResponsePayload {
  factors: FactorResource[];
}

interface FactorResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  entity_sid: string;
  identity: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  status: FactorFactorStatuses;
  factor_type: FactorFactorTypes;
  config: any;
  metadata: any;
  url: string;
}

export class FactorInstance {
  protected _solution: FactorContextSolution;
  protected _context?: FactorContext;

  constructor(
    protected _version: V2,
    payload: FactorResource,
    serviceSid: string,
    identity: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.entitySid = payload.entity_sid;
    this.identity = payload.identity;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.status = payload.status;
    this.factorType = payload.factor_type;
    this.config = payload.config;
    this.metadata = payload.metadata;
    this.url = payload.url;

    this._solution = { serviceSid, identity, sid: sid || this.sid };
  }

  /**
   * A 34 character string that uniquely identifies this Factor.
   */
  sid: string;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * The unique SID identifier of the Service.
   */
  serviceSid: string;
  /**
   * The unique SID identifier of the Entity.
   */
  entitySid: string;
  /**
   * Customer unique identity for the Entity owner of the Factor. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user\'s UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters.
   */
  identity: string;
  /**
   * The date that this Factor was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date that this Factor was updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * A human readable description of this resource, up to 64 characters. For a push factor, this can be the device\'s name.
   */
  friendlyName: string;
  status: FactorFactorStatuses;
  factorType: FactorFactorTypes;
  /**
   * An object that contains configurations specific to a `factor_type`.
   */
  config: any;
  /**
   * Custom metadata associated with the factor. This is added by the Device/SDK directly to allow for the inclusion of device information. It must be a stringified JSON with only strings values eg. `{\"os\": \"Android\"}`. Can be up to 1024 characters in length.
   */
  metadata: any;
  /**
   * The URL of this resource.
   */
  url: string;

  private get _proxy(): FactorContext {
    this._context =
      this._context ||
      new FactorContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.identity,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a FactorInstance
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
   * Fetch a FactorInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FactorInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FactorInstance) => any
  ): Promise<FactorInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a FactorInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FactorInstance
   */
  update(
    callback?: (error: Error | null, item?: FactorInstance) => any
  ): Promise<FactorInstance>;
  /**
   * Update a FactorInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FactorInstance
   */
  update(
    params: FactorContextUpdateOptions,
    callback?: (error: Error | null, item?: FactorInstance) => any
  ): Promise<FactorInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: FactorInstance) => any
  ): Promise<FactorInstance> {
    return this._proxy.update(params, callback);
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
      entitySid: this.entitySid,
      identity: this.identity,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      friendlyName: this.friendlyName,
      status: this.status,
      factorType: this.factorType,
      config: this.config,
      metadata: this.metadata,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface FactorSolution {
  serviceSid: string;
  identity: string;
}

export interface FactorListInstance {
  _version: V2;
  _solution: FactorSolution;
  _uri: string;

  (sid: string): FactorContext;
  get(sid: string): FactorContext;

  /**
   * Streams FactorInstance records from the API.
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
   * @param { FactorListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: FactorInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: FactorListInstanceEachOptions,
    callback?: (item: FactorInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of FactorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: FactorPage) => any
  ): Promise<FactorPage>;
  /**
   * Lists FactorInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FactorListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: FactorInstance[]) => any
  ): Promise<FactorInstance[]>;
  list(
    params: FactorListInstanceOptions,
    callback?: (error: Error | null, items: FactorInstance[]) => any
  ): Promise<FactorInstance[]>;
  /**
   * Retrieve a single page of FactorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FactorListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: FactorPage) => any
  ): Promise<FactorPage>;
  page(
    params: FactorListInstancePageOptions,
    callback?: (error: Error | null, items: FactorPage) => any
  ): Promise<FactorPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function FactorListInstance(
  version: V2,
  serviceSid: string,
  identity: string
): FactorListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(identity)) {
    throw new Error("Parameter 'identity' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as FactorListInstance;

  instance.get = function get(sid): FactorContext {
    return new FactorContextImpl(version, serviceSid, identity, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid, identity };
  instance._uri = `/Services/${serviceSid}/Entities/${identity}/Factors`;

  instance.page = function page(
    params?:
      | FactorListInstancePageOptions
      | ((error: Error | null, items: FactorPage) => any),
    callback?: (error: Error | null, items: FactorPage) => any
  ): Promise<FactorPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

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
      (payload) => new FactorPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: FactorPage) => any
  ): Promise<FactorPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new FactorPage(instance._version, payload, instance._solution)
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

export class FactorPage extends Page<
  V2,
  FactorPayload,
  FactorResource,
  FactorInstance
> {
  /**
   * Initialize the FactorPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: FactorSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FactorInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FactorResource): FactorInstance {
    return new FactorInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.identity
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
