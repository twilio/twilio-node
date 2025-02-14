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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

export type WebhookMethods = "GET" | "POST";

export type WebhookStatus = "enabled" | "disabled";

export type WebhookVersion = "v1" | "v2";

/**
 * Options to pass to update a WebhookInstance
 */
export interface WebhookContextUpdateOptions {
  /** The string that you assigned to describe the webhook. **This value should not contain PII.** */
  friendlyName?: string;
  /** The array of events that this Webhook is subscribed to. Possible event types: `*, factor.deleted, factor.created, factor.verified, challenge.approved, challenge.denied` */
  eventTypes?: Array<string>;
  /** The URL associated with this Webhook. */
  webhookUrl?: string;
  /**  */
  status?: WebhookStatus;
  /**  */
  version?: WebhookVersion;
}

/**
 * Options to pass to create a WebhookInstance
 */
export interface WebhookListInstanceCreateOptions {
  /** The string that you assigned to describe the webhook. **This value should not contain PII.** */
  friendlyName: string;
  /** The array of events that this Webhook is subscribed to. Possible event types: `*, factor.deleted, factor.created, factor.verified, challenge.approved, challenge.denied` */
  eventTypes: Array<string>;
  /** The URL associated with this Webhook. */
  webhookUrl: string;
  /**  */
  status?: WebhookStatus;
  /**  */
  version?: WebhookVersion;
}
/**
 * Options to pass to each
 */
export interface WebhookListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: WebhookInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface WebhookListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface WebhookListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface WebhookContext {
  /**
   * Remove a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WebhookInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WebhookInstance) => any
  ): Promise<WebhookInstance>;

  /**
   * Update a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WebhookInstance
   */
  update(
    callback?: (error: Error | null, item?: WebhookInstance) => any
  ): Promise<WebhookInstance>;
  /**
   * Update a WebhookInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WebhookInstance
   */
  update(
    params: WebhookContextUpdateOptions,
    callback?: (error: Error | null, item?: WebhookInstance) => any
  ): Promise<WebhookInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WebhookContextSolution {
  serviceSid: string;
  sid: string;
}

export class WebhookContextImpl implements WebhookContext {
  protected _solution: WebhookContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Webhooks/${sid}`;
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

  async fetch(
    callback?: (error: Error | null, item?: WebhookInstance) => any
  ): Promise<WebhookInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    try {
      let payload = await operationPromise;
      let operation = new WebhookInstance(
        operationVersion,
        payload,
        instance._solution.serviceSid,
        instance._solution.sid
      );

      if (callback) {
        callback(null, operation);
      }

      return operation;
    } catch (err: any) {
      if (callback) {
        callback(err);
      }
      throw err;
    }
  }

  async update(
    params?:
      | WebhookContextUpdateOptions
      | ((error: Error | null, item?: WebhookInstance) => any),
    callback?: (error: Error | null, item?: WebhookInstance) => any
  ): Promise<WebhookInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["eventTypes"] !== undefined)
      data["EventTypes"] = serialize.map(
        params["eventTypes"],
        (e: string) => e
      );
    if (params["webhookUrl"] !== undefined)
      data["WebhookUrl"] = params["webhookUrl"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["version"] !== undefined) data["Version"] = params["version"];

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

    try {
      let payload = await operationPromise;
      let operation = new WebhookInstance(
        operationVersion,
        payload,
        instance._solution.serviceSid,
        instance._solution.sid
      );

      if (callback) {
        callback(null, operation);
      }

      return operation;
    } catch (err: any) {
      if (callback) {
        callback(err);
      }
      throw err;
    }
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

interface WebhookPayload extends TwilioResponsePayload {
  webhooks: WebhookResource[];
}

interface WebhookResource {
  sid: string;
  service_sid: string;
  account_sid: string;
  friendly_name: string;
  event_types: Array<string>;
  status: WebhookStatus;
  version: WebhookVersion;
  webhook_url: string;
  webhook_method: WebhookMethods;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class WebhookInstance {
  protected _solution: WebhookContextSolution;
  protected _context?: WebhookContext;

  constructor(
    protected _version: V2,
    payload: WebhookResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.serviceSid = payload.service_sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.eventTypes = payload.event_types;
    this.status = payload.status;
    this.version = payload.version;
    this.webhookUrl = payload.webhook_url;
    this.webhookMethod = payload.webhook_method;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the Webhook resource.
   */
  sid: string;
  /**
   * The unique SID identifier of the Service.
   */
  serviceSid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
   */
  accountSid: string;
  /**
   * The string that you assigned to describe the webhook. **This value should not contain PII.**
   */
  friendlyName: string;
  /**
   * The array of events that this Webhook is subscribed to. Possible event types: `*, factor.deleted, factor.created, factor.verified, challenge.approved, challenge.denied`
   */
  eventTypes: Array<string>;
  status: WebhookStatus;
  version: WebhookVersion;
  /**
   * The URL associated with this Webhook.
   */
  webhookUrl: string;
  webhookMethod: WebhookMethods;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The absolute URL of the Webhook resource.
   */
  url: string;

  private get _proxy(): WebhookContext {
    this._context =
      this._context ||
      new WebhookContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a WebhookInstance
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
   * Fetch a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WebhookInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WebhookInstance) => any
  ): Promise<WebhookInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WebhookInstance
   */
  update(
    callback?: (error: Error | null, item?: WebhookInstance) => any
  ): Promise<WebhookInstance>;
  /**
   * Update a WebhookInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WebhookInstance
   */
  update(
    params: WebhookContextUpdateOptions,
    callback?: (error: Error | null, item?: WebhookInstance) => any
  ): Promise<WebhookInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: WebhookInstance) => any
  ): Promise<WebhookInstance> {
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
      serviceSid: this.serviceSid,
      accountSid: this.accountSid,
      friendlyName: this.friendlyName,
      eventTypes: this.eventTypes,
      status: this.status,
      version: this.version,
      webhookUrl: this.webhookUrl,
      webhookMethod: this.webhookMethod,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WebhookSolution {
  serviceSid: string;
}

export interface WebhookListInstance {
  _version: V2;
  _solution: WebhookSolution;
  _uri: string;

  (sid: string): WebhookContext;
  get(sid: string): WebhookContext;

  /**
   * Create a WebhookInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WebhookInstance
   */
  create(
    params: WebhookListInstanceCreateOptions,
    callback?: (error: Error | null, item?: WebhookInstance) => any
  ): Promise<WebhookInstance>;

  /**
   * Streams WebhookInstance records from the API.
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
   * @param { WebhookListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: WebhookInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: WebhookListInstanceEachOptions,
    callback?: (item: WebhookInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of WebhookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: WebhookPage) => any
  ): Promise<WebhookPage>;
  /**
   * Lists WebhookInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WebhookListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: WebhookInstance[]) => any
  ): Promise<WebhookInstance[]>;
  list(
    params: WebhookListInstanceOptions,
    callback?: (error: Error | null, items: WebhookInstance[]) => any
  ): Promise<WebhookInstance[]>;
  /**
   * Retrieve a single page of WebhookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WebhookListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: WebhookPage) => any
  ): Promise<WebhookPage>;
  page(
    params: WebhookListInstancePageOptions,
    callback?: (error: Error | null, items: WebhookPage) => any
  ): Promise<WebhookPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function WebhookListInstance(
  version: V2,
  serviceSid: string
): WebhookListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as WebhookListInstance;

  instance.get = function get(sid): WebhookContext {
    return new WebhookContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Webhooks`;

  instance.create = function create(
    params: WebhookListInstanceCreateOptions,
    callback?: (error: Error | null, items: WebhookInstance) => any
  ): Promise<WebhookInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    if (params["eventTypes"] === null || params["eventTypes"] === undefined) {
      throw new Error("Required parameter \"params['eventTypes']\" missing.");
    }

    if (params["webhookUrl"] === null || params["webhookUrl"] === undefined) {
      throw new Error("Required parameter \"params['webhookUrl']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    data["EventTypes"] = serialize.map(params["eventTypes"], (e: string) => e);

    data["WebhookUrl"] = params["webhookUrl"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["version"] !== undefined) data["Version"] = params["version"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WebhookInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid
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
      | WebhookListInstancePageOptions
      | ((error: Error | null, items: WebhookPage) => any),
    callback?: (error: Error | null, items: WebhookPage) => any
  ): Promise<WebhookPage> {
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
      (payload) =>
        new WebhookPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: WebhookPage) => any
  ): Promise<WebhookPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new WebhookPage(instance._version, payload, instance._solution)
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

export class WebhookPage extends Page<
  V2,
  WebhookPayload,
  WebhookResource,
  WebhookInstance
> {
  /**
   * Initialize the WebhookPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: WebhookSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of WebhookInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WebhookResource): WebhookInstance {
    return new WebhookInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
