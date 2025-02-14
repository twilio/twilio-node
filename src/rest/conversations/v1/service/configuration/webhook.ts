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
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

export type WebhookMethod = "GET" | "POST";

/**
 * Options to pass to update a WebhookInstance
 */
export interface WebhookContextUpdateOptions {
  /** The absolute url the pre-event webhook request should be sent to. */
  preWebhookUrl?: string;
  /** The absolute url the post-event webhook request should be sent to. */
  postWebhookUrl?: string;
  /** The list of events that your configured webhook targets will receive. Events not configured here will not fire. Possible values are `onParticipantAdd`, `onParticipantAdded`, `onDeliveryUpdated`, `onConversationUpdated`, `onConversationRemove`, `onParticipantRemove`, `onConversationUpdate`, `onMessageAdd`, `onMessageRemoved`, `onParticipantUpdated`, `onConversationAdded`, `onMessageAdded`, `onConversationAdd`, `onConversationRemoved`, `onParticipantUpdate`, `onMessageRemove`, `onMessageUpdated`, `onParticipantRemoved`, `onMessageUpdate` or `onConversationStateUpdated`. */
  filters?: Array<string>;
  /** The HTTP method to be used when sending a webhook request. One of `GET` or `POST`. */
  method?: string;
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

export interface WebhookContextSolution {
  chatServiceSid: string;
}

export class WebhookContextImpl implements WebhookContext {
  protected _solution: WebhookContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, chatServiceSid: string) {
    if (!isValidPathParam(chatServiceSid)) {
      throw new Error("Parameter 'chatServiceSid' is not valid.");
    }

    this._solution = { chatServiceSid };
    this._uri = `/Services/${chatServiceSid}/Configuration/Webhooks`;
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
        instance._solution.chatServiceSid
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

    if (params["preWebhookUrl"] !== undefined)
      data["PreWebhookUrl"] = params["preWebhookUrl"];
    if (params["postWebhookUrl"] !== undefined)
      data["PostWebhookUrl"] = params["postWebhookUrl"];
    if (params["filters"] !== undefined)
      data["Filters"] = serialize.map(params["filters"], (e: string) => e);
    if (params["method"] !== undefined) data["Method"] = params["method"];

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
        instance._solution.chatServiceSid
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

interface WebhookPayload extends WebhookResource {}

interface WebhookResource {
  account_sid: string;
  chat_service_sid: string;
  pre_webhook_url: string;
  post_webhook_url: string;
  filters: Array<string>;
  method: WebhookMethod;
  url: string;
}

export class WebhookInstance {
  protected _solution: WebhookContextSolution;
  protected _context?: WebhookContext;

  constructor(
    protected _version: V1,
    payload: WebhookResource,
    chatServiceSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.chatServiceSid = payload.chat_service_sid;
    this.preWebhookUrl = payload.pre_webhook_url;
    this.postWebhookUrl = payload.post_webhook_url;
    this.filters = payload.filters;
    this.method = payload.method;
    this.url = payload.url;

    this._solution = { chatServiceSid };
  }

  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this service.
   */
  accountSid: string;
  /**
   * The unique ID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation belongs to.
   */
  chatServiceSid: string;
  /**
   * The absolute url the pre-event webhook request should be sent to.
   */
  preWebhookUrl: string;
  /**
   * The absolute url the post-event webhook request should be sent to.
   */
  postWebhookUrl: string;
  /**
   * The list of events that your configured webhook targets will receive. Events not configured here will not fire. Possible values are `onParticipantAdd`, `onParticipantAdded`, `onDeliveryUpdated`, `onConversationUpdated`, `onConversationRemove`, `onParticipantRemove`, `onConversationUpdate`, `onMessageAdd`, `onMessageRemoved`, `onParticipantUpdated`, `onConversationAdded`, `onMessageAdded`, `onConversationAdd`, `onConversationRemoved`, `onParticipantUpdate`, `onMessageRemove`, `onMessageUpdated`, `onParticipantRemoved`, `onMessageUpdate` or `onConversationStateUpdated`.
   */
  filters: Array<string>;
  method: WebhookMethod;
  /**
   * An absolute API resource URL for this webhook.
   */
  url: string;

  private get _proxy(): WebhookContext {
    this._context =
      this._context ||
      new WebhookContextImpl(this._version, this._solution.chatServiceSid);
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
      chatServiceSid: this.chatServiceSid,
      preWebhookUrl: this.preWebhookUrl,
      postWebhookUrl: this.postWebhookUrl,
      filters: this.filters,
      method: this.method,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WebhookSolution {
  chatServiceSid: string;
}

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

export function WebhookListInstance(
  version: V1,
  chatServiceSid: string
): WebhookListInstance {
  if (!isValidPathParam(chatServiceSid)) {
    throw new Error("Parameter 'chatServiceSid' is not valid.");
  }

  const instance = (() => instance.get()) as WebhookListInstance;

  instance.get = function get(): WebhookContext {
    return new WebhookContextImpl(version, chatServiceSid);
  };

  instance._version = version;
  instance._solution = { chatServiceSid };
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
