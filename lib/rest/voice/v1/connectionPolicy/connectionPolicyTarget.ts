/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Voice
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
 * Options to pass to update a ConnectionPolicyTargetInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
 * @property { string } [target] The SIP address you want Twilio to route your calls to. This must be a `sip:` schema. `sips` is NOT supported.
 * @property { number } [priority] The relative importance of the target. Can be an integer from 0 to 65535, inclusive. The lowest number represents the most important target.
 * @property { number } [weight] The value that determines the relative share of the load the Target should receive compared to other Targets with the same priority. Can be an integer from 1 to 65535, inclusive. Targets with higher values receive more load than those with lower ones with the same priority.
 * @property { boolean } [enabled] Whether the Target is enabled.
 */
export interface ConnectionPolicyTargetContextUpdateOptions {
  friendlyName?: string;
  target?: string;
  priority?: number;
  weight?: number;
  enabled?: boolean;
}

/**
 * Options to pass to create a ConnectionPolicyTargetInstance
 *
 * @property { string } target The SIP address you want Twilio to route your calls to. This must be a `sip:` schema. `sips` is NOT supported.
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
 * @property { number } [priority] The relative importance of the target. Can be an integer from 0 to 65535, inclusive, and the default is 10. The lowest number represents the most important target.
 * @property { number } [weight] The value that determines the relative share of the load the Target should receive compared to other Targets with the same priority. Can be an integer from 1 to 65535, inclusive, and the default is 10. Targets with higher values receive more load than those with lower ones with the same priority.
 * @property { boolean } [enabled] Whether the Target is enabled. The default is `true`.
 */
export interface ConnectionPolicyTargetListInstanceCreateOptions {
  target: string;
  friendlyName?: string;
  priority?: number;
  weight?: number;
  enabled?: boolean;
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
export interface ConnectionPolicyTargetListInstanceEachOptions {
  pageSize?: number;
  callback?: (
    item: ConnectionPolicyTargetInstance,
    done: (err?: Error) => void
  ) => void;
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
export interface ConnectionPolicyTargetListInstanceOptions {
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
export interface ConnectionPolicyTargetListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface ConnectionPolicyTargetContext {
  /**
   * Remove a ConnectionPolicyTargetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ConnectionPolicyTargetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectionPolicyTargetInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: ConnectionPolicyTargetInstance
    ) => any
  ): Promise<ConnectionPolicyTargetInstance>;

  /**
   * Update a ConnectionPolicyTargetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectionPolicyTargetInstance
   */
  update(
    callback?: (
      error: Error | null,
      item?: ConnectionPolicyTargetInstance
    ) => any
  ): Promise<ConnectionPolicyTargetInstance>;
  /**
   * Update a ConnectionPolicyTargetInstance
   *
   * @param { ConnectionPolicyTargetContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectionPolicyTargetInstance
   */
  update(
    params?:
      | ConnectionPolicyTargetContextUpdateOptions
      | ((error: Error | null, item?: ConnectionPolicyTargetInstance) => any),
    callback?: (
      error: Error | null,
      item?: ConnectionPolicyTargetInstance
    ) => any
  ): Promise<ConnectionPolicyTargetInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConnectionPolicyTargetContextSolution {
  connectionPolicySid?: string;
  sid?: string;
}

export class ConnectionPolicyTargetContextImpl
  implements ConnectionPolicyTargetContext
{
  protected _solution: ConnectionPolicyTargetContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    connectionPolicySid: string,
    sid: string
  ) {
    if (!isValidPathParam(connectionPolicySid)) {
      throw new Error("Parameter 'connectionPolicySid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { connectionPolicySid, sid };
    this._uri = `/ConnectionPolicies/${connectionPolicySid}/Targets/${sid}`;
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

  fetch(callback?: any): Promise<ConnectionPolicyTargetInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ConnectionPolicyTargetInstance(
          operationVersion,
          payload,
          this._solution.connectionPolicySid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?: any,
    callback?: any
  ): Promise<ConnectionPolicyTargetInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["target"] !== undefined) data["Target"] = params["target"];
    if (params["priority"] !== undefined) data["Priority"] = params["priority"];
    if (params["weight"] !== undefined) data["Weight"] = params["weight"];
    if (params["enabled"] !== undefined)
      data["Enabled"] = serialize.bool(params["enabled"]);

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
        new ConnectionPolicyTargetInstance(
          operationVersion,
          payload,
          this._solution.connectionPolicySid,
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

interface ConnectionPolicyTargetPayload extends TwilioResponsePayload {
  targets: ConnectionPolicyTargetResource[];
}

interface ConnectionPolicyTargetResource {
  account_sid?: string | null;
  connection_policy_sid?: string | null;
  sid?: string | null;
  friendly_name?: string | null;
  target?: string | null;
  priority?: number | null;
  weight?: number | null;
  enabled?: boolean | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class ConnectionPolicyTargetInstance {
  protected _solution: ConnectionPolicyTargetContextSolution;
  protected _context?: ConnectionPolicyTargetContext;

  constructor(
    protected _version: V1,
    payload: ConnectionPolicyTargetResource,
    connectionPolicySid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.connectionPolicySid = payload.connection_policy_sid;
    this.sid = payload.sid;
    this.friendlyName = payload.friendly_name;
    this.target = payload.target;
    this.priority = deserialize.integer(payload.priority);
    this.weight = deserialize.integer(payload.weight);
    this.enabled = payload.enabled;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { connectionPolicySid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Connection Policy that owns the Target
   */
  connectionPolicySid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * The SIP address you want Twilio to route your calls to
   */
  target?: string | null;
  /**
   * The relative importance of the target
   */
  priority?: number | null;
  /**
   * The value that determines the relative load the Target should receive compared to others with the same priority
   */
  weight?: number | null;
  /**
   * Whether the target is enabled
   */
  enabled?: boolean | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): ConnectionPolicyTargetContext {
    this._context =
      this._context ||
      new ConnectionPolicyTargetContextImpl(
        this._version,
        this._solution.connectionPolicySid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a ConnectionPolicyTargetInstance
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
   * Fetch a ConnectionPolicyTargetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectionPolicyTargetInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: ConnectionPolicyTargetInstance
    ) => any
  ): Promise<ConnectionPolicyTargetInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ConnectionPolicyTargetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectionPolicyTargetInstance
   */
  update(
    callback?: (
      error: Error | null,
      item?: ConnectionPolicyTargetInstance
    ) => any
  ): Promise<ConnectionPolicyTargetInstance>;
  /**
   * Update a ConnectionPolicyTargetInstance
   *
   * @param { ConnectionPolicyTargetContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectionPolicyTargetInstance
   */
  update(
    params?:
      | ConnectionPolicyTargetContextUpdateOptions
      | ((error: Error | null, item?: ConnectionPolicyTargetInstance) => any),
    callback?: (
      error: Error | null,
      item?: ConnectionPolicyTargetInstance
    ) => any
  ): Promise<ConnectionPolicyTargetInstance> {
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
      connectionPolicySid: this.connectionPolicySid,
      sid: this.sid,
      friendlyName: this.friendlyName,
      target: this.target,
      priority: this.priority,
      weight: this.weight,
      enabled: this.enabled,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ConnectionPolicyTargetListInstance {
  (sid: string): ConnectionPolicyTargetContext;
  get(sid: string): ConnectionPolicyTargetContext;

  /**
   * Create a ConnectionPolicyTargetInstance
   *
   * @param { ConnectionPolicyTargetListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectionPolicyTargetInstance
   */
  create(
    params: ConnectionPolicyTargetListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: ConnectionPolicyTargetInstance
    ) => any
  ): Promise<ConnectionPolicyTargetInstance>;

  /**
   * Streams ConnectionPolicyTargetInstance records from the API.
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
   * @param { ConnectionPolicyTargetListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | ConnectionPolicyTargetListInstanceEachOptions
      | ((
          item: ConnectionPolicyTargetInstance,
          done: (err?: Error) => void
        ) => void),
    callback?: (
      item: ConnectionPolicyTargetInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of ConnectionPolicyTargetInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ConnectionPolicyTargetPage) => any
  ): Promise<ConnectionPolicyTargetPage>;
  /**
   * Lists ConnectionPolicyTargetInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConnectionPolicyTargetListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | ConnectionPolicyTargetListInstanceOptions
      | ((error: Error | null, items: ConnectionPolicyTargetInstance[]) => any),
    callback?: (
      error: Error | null,
      items: ConnectionPolicyTargetInstance[]
    ) => any
  ): Promise<ConnectionPolicyTargetInstance[]>;
  /**
   * Retrieve a single page of ConnectionPolicyTargetInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConnectionPolicyTargetListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | ConnectionPolicyTargetListInstancePageOptions
      | ((error: Error | null, items: ConnectionPolicyTargetPage) => any),
    callback?: (error: Error | null, items: ConnectionPolicyTargetPage) => any
  ): Promise<ConnectionPolicyTargetPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConnectionPolicyTargetSolution {
  connectionPolicySid?: string;
}

interface ConnectionPolicyTargetListInstanceImpl
  extends ConnectionPolicyTargetListInstance {}
class ConnectionPolicyTargetListInstanceImpl
  implements ConnectionPolicyTargetListInstance
{
  _version?: V1;
  _solution?: ConnectionPolicyTargetSolution;
  _uri?: string;
}

export function ConnectionPolicyTargetListInstance(
  version: V1,
  connectionPolicySid: string
): ConnectionPolicyTargetListInstance {
  if (!isValidPathParam(connectionPolicySid)) {
    throw new Error("Parameter 'connectionPolicySid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as ConnectionPolicyTargetListInstanceImpl;

  instance.get = function get(sid): ConnectionPolicyTargetContext {
    return new ConnectionPolicyTargetContextImpl(
      version,
      connectionPolicySid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { connectionPolicySid };
  instance._uri = `/ConnectionPolicies/${connectionPolicySid}/Targets`;

  instance.create = function create(
    params: ConnectionPolicyTargetListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: ConnectionPolicyTargetInstance
    ) => any
  ): Promise<ConnectionPolicyTargetInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["target"] === null || params["target"] === undefined) {
      throw new Error("Required parameter \"params['target']\" missing.");
    }

    let data: any = {};

    data["Target"] = params["target"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["priority"] !== undefined) data["Priority"] = params["priority"];
    if (params["weight"] !== undefined) data["Weight"] = params["weight"];
    if (params["enabled"] !== undefined)
      data["Enabled"] = serialize.bool(params["enabled"]);

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
        new ConnectionPolicyTargetInstance(
          operationVersion,
          payload,
          this._solution.connectionPolicySid
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
      | ConnectionPolicyTargetListInstancePageOptions
      | ((error: Error | null, item?: ConnectionPolicyTargetPage) => any),
    callback?: (error: Error | null, item?: ConnectionPolicyTargetPage) => any
  ): Promise<ConnectionPolicyTargetPage> {
    if (typeof params === "function") {
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

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ConnectionPolicyTargetPage(
          operationVersion,
          payload,
          this._solution
        )
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
    callback?: (error: Error | null, items: ConnectionPolicyTargetPage) => any
  ): Promise<ConnectionPolicyTargetPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new ConnectionPolicyTargetPage(this._version, payload, this._solution)
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

export class ConnectionPolicyTargetPage extends Page<
  V1,
  ConnectionPolicyTargetPayload,
  ConnectionPolicyTargetResource,
  ConnectionPolicyTargetInstance
> {
  /**
   * Initialize the ConnectionPolicyTargetPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ConnectionPolicyTargetSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ConnectionPolicyTargetInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: ConnectionPolicyTargetResource
  ): ConnectionPolicyTargetInstance {
    return new ConnectionPolicyTargetInstance(
      this._version,
      payload,
      this._solution.connectionPolicySid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
