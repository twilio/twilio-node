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
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

import { WebhookListInstance } from "./configuration/webhook";

/**
 * Options to pass to update a ConfigurationInstance
 *
 * @property { string } [defaultChatServiceSid] The SID of the default [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) to use when creating a conversation.
 * @property { string } [defaultMessagingServiceSid] The SID of the default [Messaging Service](https://www.twilio.com/docs/sms/services/api) to use when creating a conversation.
 * @property { string } [defaultInactiveTimer] Default ISO8601 duration when conversation will be switched to `inactive` state. Minimum value for this timer is 1 minute.
 * @property { string } [defaultClosedTimer] Default ISO8601 duration when conversation will be switched to `closed` state. Minimum value for this timer is 10 minutes.
 */
export interface ConfigurationContextUpdateOptions {
  defaultChatServiceSid?: string;
  defaultMessagingServiceSid?: string;
  defaultInactiveTimer?: string;
  defaultClosedTimer?: string;
}

export interface ConfigurationContext {
  /**
   * Fetch a ConfigurationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConfigurationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;

  /**
   * Update a ConfigurationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConfigurationInstance
   */
  update(
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;
  /**
   * Update a ConfigurationInstance
   *
   * @param { ConfigurationContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConfigurationInstance
   */
  update(
    params: ConfigurationContextUpdateOptions,
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;
  update(params?: any, callback?: any): Promise<ConfigurationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConfigurationContextSolution {}

export class ConfigurationContextImpl implements ConfigurationContext {
  protected _solution: ConfigurationContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/Configuration`;
  }

  fetch(callback?: any): Promise<ConfigurationInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) => new ConfigurationInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<ConfigurationInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["defaultChatServiceSid"] !== undefined)
      data["DefaultChatServiceSid"] = params["defaultChatServiceSid"];
    if (params["defaultMessagingServiceSid"] !== undefined)
      data["DefaultMessagingServiceSid"] = params["defaultMessagingServiceSid"];
    if (params["defaultInactiveTimer"] !== undefined)
      data["DefaultInactiveTimer"] = params["defaultInactiveTimer"];
    if (params["defaultClosedTimer"] !== undefined)
      data["DefaultClosedTimer"] = params["defaultClosedTimer"];

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
      (payload) => new ConfigurationInstance(operationVersion, payload)
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

interface ConfigurationPayload extends ConfigurationResource {}

interface ConfigurationResource {
  account_sid?: string | null;
  default_chat_service_sid?: string | null;
  default_messaging_service_sid?: string | null;
  default_inactive_timer?: string | null;
  default_closed_timer?: string | null;
  url?: string | null;
  links?: object | null;
}

export class ConfigurationInstance {
  protected _solution: ConfigurationContextSolution;
  protected _context?: ConfigurationContext;

  constructor(protected _version: V1, payload: ConfigurationResource) {
    this.accountSid = payload.account_sid;
    this.defaultChatServiceSid = payload.default_chat_service_sid;
    this.defaultMessagingServiceSid = payload.default_messaging_service_sid;
    this.defaultInactiveTimer = payload.default_inactive_timer;
    this.defaultClosedTimer = payload.default_closed_timer;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = {};
  }

  /**
   * The SID of the Account responsible for this configuration.
   */
  accountSid?: string | null;
  /**
   * The SID of the default Conversation Service that every new conversation is associated with.
   */
  defaultChatServiceSid?: string | null;
  /**
   * The SID of the default Messaging Service that every new conversation is associated with.
   */
  defaultMessagingServiceSid?: string | null;
  /**
   * Default ISO8601 duration when conversation will be switched to `inactive` state.
   */
  defaultInactiveTimer?: string | null;
  /**
   * Default ISO8601 duration when conversation will be switched to `closed` state.
   */
  defaultClosedTimer?: string | null;
  /**
   * An absolute URL for this global configuration.
   */
  url?: string | null;
  /**
   * Absolute URLs to access the webhook and default service configurations.
   */
  links?: object | null;

  private get _proxy(): ConfigurationContext {
    this._context =
      this._context || new ConfigurationContextImpl(this._version);
    return this._context;
  }

  /**
   * Fetch a ConfigurationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConfigurationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ConfigurationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConfigurationInstance
   */
  update(
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;
  /**
   * Update a ConfigurationInstance
   *
   * @param { ConfigurationContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConfigurationInstance
   */
  update(
    params: ConfigurationContextUpdateOptions,
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;
  update(params?: any, callback?: any): Promise<ConfigurationInstance> {
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
      defaultChatServiceSid: this.defaultChatServiceSid,
      defaultMessagingServiceSid: this.defaultMessagingServiceSid,
      defaultInactiveTimer: this.defaultInactiveTimer,
      defaultClosedTimer: this.defaultClosedTimer,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ConfigurationListInstance {
  (): ConfigurationContext;
  get(): ConfigurationContext;

  webhooks: WebhookListInstance;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConfigurationSolution {}

interface ConfigurationListInstanceImpl extends ConfigurationListInstance {}
class ConfigurationListInstanceImpl implements ConfigurationListInstance {
  _version?: V1;
  _solution?: ConfigurationSolution;
  _uri?: string;

  _webhooks?: WebhookListInstance;
}

export function ConfigurationListInstance(
  version: V1
): ConfigurationListInstance {
  const instance = (() => instance.get()) as ConfigurationListInstanceImpl;

  instance.get = function get(): ConfigurationContext {
    return new ConfigurationContextImpl(version);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

  Object.defineProperty(instance, "webhooks", {
    get: function webhooks() {
      if (!this._webhooks) {
        this._webhooks = WebhookListInstance(this._version);
      }
      return this._webhooks;
    },
  });

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
