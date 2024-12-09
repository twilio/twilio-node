/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Conversations
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

export type WebhookMethod = "GET" | "POST";

export type WebhookTarget = "webhook" | "flex";

/**
 * Options to pass to update a WebhookInstance
 */
export interface WebhookContextUpdateOptions {
  /** The HTTP method to be used when sending a webhook request. */
  method?: string;
  /** The list of webhook event triggers that are enabled for this Service: `onMessageAdded`, `onMessageUpdated`, `onMessageRemoved`, `onConversationUpdated`, `onConversationRemoved`, `onParticipantAdded`, `onParticipantUpdated`, `onParticipantRemoved` */
  filters?: Array<string>;
  /** The absolute url the pre-event webhook request should be sent to. */
  preWebhookUrl?: string;
  /** The absolute url the post-event webhook request should be sent to. */
  postWebhookUrl?: string;
  /**  */
  target?: WebhookTarget;
}

export interface WebhookContext {
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

export interface WebhookContextSolution {}

export class WebhookContextImpl implements WebhookContext {
  protected _solution: WebhookContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/Configuration/Webhooks`;
  }

  fetch(
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

    operationPromise = operationPromise.then(
      (payload) => new WebhookInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
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

    if (params["method"] !== undefined) data["Method"] = params["method"];
    if (params["filters"] !== undefined)
      data["Filters"] = serialize.map(params["filters"], (e: string) => e);
    if (params["preWebhookUrl"] !== undefined)
      data["PreWebhookUrl"] = params["preWebhookUrl"];
    if (params["postWebhookUrl"] !== undefined)
      data["PostWebhookUrl"] = params["postWebhookUrl"];
    if (params["target"] !== undefined) data["Target"] = params["target"];

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
      (payload) => new WebhookInstance(operationVersion, payload)
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

interface WebhookPayload extends WebhookResource {}

interface WebhookResource {
  account_sid: string;
  method: WebhookMethod;
  filters: Array<string>;
  pre_webhook_url: string;
  post_webhook_url: string;
  target: WebhookTarget;
  url: string;
}

export class WebhookInstance {
  protected _solution: WebhookContextSolution;
  protected _context?: WebhookContext;

  constructor(protected _version: V1, payload: WebhookResource) {
    this.accountSid = payload.account_sid;
    this.method = payload.method;
    this.filters = payload.filters;
    this.preWebhookUrl = payload.pre_webhook_url;
    this.postWebhookUrl = payload.post_webhook_url;
    this.target = payload.target;
    this.url = payload.url;

    this._solution = {};
  }

  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this conversation.
   */
  accountSid: string;
  method: WebhookMethod;
  /**
   * The list of webhook event triggers that are enabled for this Service: `onMessageAdded`, `onMessageUpdated`, `onMessageRemoved`, `onConversationUpdated`, `onConversationRemoved`, `onParticipantAdded`, `onParticipantUpdated`, `onParticipantRemoved`
   */
  filters: Array<string>;
  /**
   * The absolute url the pre-event webhook request should be sent to.
   */
  preWebhookUrl: string;
  /**
   * The absolute url the post-event webhook request should be sent to.
   */
  postWebhookUrl: string;
  target: WebhookTarget;
  /**
   * An absolute API resource API resource URL for this webhook.
   */
  url: string;

  private get _proxy(): WebhookContext {
    this._context = this._context || new WebhookContextImpl(this._version);
    return this._context;
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
      accountSid: this.accountSid,
      method: this.method,
      filters: this.filters,
      preWebhookUrl: this.preWebhookUrl,
      postWebhookUrl: this.postWebhookUrl,
      target: this.target,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WebhookSolution {}

export interface WebhookListInstance {
  _version: V1;
  _solution: WebhookSolution;
  _uri: string;

  (): WebhookContext;
  get(): WebhookContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function WebhookListInstance(version: V1): WebhookListInstance {
  const instance = (() => instance.get()) as WebhookListInstance;

  instance.get = function get(): WebhookContext {
    return new WebhookContextImpl(version);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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
