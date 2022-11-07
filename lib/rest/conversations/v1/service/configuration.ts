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

import { NotificationListInstance } from "./configuration/notification";
import { WebhookListInstance } from "./configuration/webhook";

/**
 * Options to pass to update a ConfigurationInstance
 *
 * @property { string } [defaultConversationCreatorRoleSid] The conversation-level role assigned to a conversation creator when they join a new conversation. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
 * @property { string } [defaultConversationRoleSid] The conversation-level role assigned to users when they are added to a conversation. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
 * @property { string } [defaultChatServiceRoleSid] The service-level role assigned to users when they are added to the service. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
 * @property { boolean } [reachabilityEnabled] Whether the [Reachability Indicator](https://www.twilio.com/docs/chat/reachability-indicator) is enabled for this Conversations Service. The default is &#x60;false&#x60;.
 */
export interface ConfigurationContextUpdateOptions {
  defaultConversationCreatorRoleSid?: string;
  defaultConversationRoleSid?: string;
  defaultChatServiceRoleSid?: string;
  reachabilityEnabled?: boolean;
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

export interface ConfigurationContextSolution {
  chatServiceSid?: string;
}

export class ConfigurationContextImpl implements ConfigurationContext {
  protected _solution: ConfigurationContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, chatServiceSid: string) {
    this._solution = { chatServiceSid };
    this._uri = `/Services/${chatServiceSid}/Configuration`;
  }

  fetch(callback?: any): Promise<ConfigurationInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ConfigurationInstance(
          operationVersion,
          payload,
          this._solution.chatServiceSid
        )
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

    if (params["defaultConversationCreatorRoleSid"] !== undefined)
      data["DefaultConversationCreatorRoleSid"] =
        params["defaultConversationCreatorRoleSid"];
    if (params["defaultConversationRoleSid"] !== undefined)
      data["DefaultConversationRoleSid"] = params["defaultConversationRoleSid"];
    if (params["defaultChatServiceRoleSid"] !== undefined)
      data["DefaultChatServiceRoleSid"] = params["defaultChatServiceRoleSid"];
    if (params["reachabilityEnabled"] !== undefined)
      data["ReachabilityEnabled"] = serialize.bool(
        params["reachabilityEnabled"]
      );

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
        new ConfigurationInstance(
          operationVersion,
          payload,
          this._solution.chatServiceSid
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

interface ConfigurationPayload extends ConfigurationResource {}

interface ConfigurationResource {
  chat_service_sid?: string | null;
  default_conversation_creator_role_sid?: string | null;
  default_conversation_role_sid?: string | null;
  default_chat_service_role_sid?: string | null;
  url?: string | null;
  links?: object | null;
  reachability_enabled?: boolean | null;
}

export class ConfigurationInstance {
  protected _solution: ConfigurationContextSolution;
  protected _context?: ConfigurationContext;

  constructor(
    protected _version: V1,
    payload: ConfigurationPayload,
    chatServiceSid?: string
  ) {
    this.chatServiceSid = payload.chat_service_sid;
    this.defaultConversationCreatorRoleSid =
      payload.default_conversation_creator_role_sid;
    this.defaultConversationRoleSid = payload.default_conversation_role_sid;
    this.defaultChatServiceRoleSid = payload.default_chat_service_role_sid;
    this.url = payload.url;
    this.links = payload.links;
    this.reachabilityEnabled = payload.reachability_enabled;

    this._solution = { chatServiceSid: chatServiceSid || this.chatServiceSid };
  }

  /**
   * The unique string that identifies the resource
   */
  chatServiceSid?: string | null;
  /**
   * The role assigned to a conversation creator user when they join a new conversation
   */
  defaultConversationCreatorRoleSid?: string | null;
  /**
   * The role assigned to users when they are added to a conversation
   */
  defaultConversationRoleSid?: string | null;
  /**
   * The service role assigned to users when they are added to the service
   */
  defaultChatServiceRoleSid?: string | null;
  /**
   * An absolute URL for this service configuration.
   */
  url?: string | null;
  /**
   * Absolute URL to access the push notifications configuration of this service.
   */
  links?: object | null;
  /**
   * Whether the Reachability Indicator feature is enabled for this Conversations Service
   */
  reachabilityEnabled?: boolean | null;

  private get _proxy(): ConfigurationContext {
    this._context =
      this._context ||
      new ConfigurationContextImpl(
        this._version,
        this._solution.chatServiceSid
      );
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
      chatServiceSid: this.chatServiceSid,
      defaultConversationCreatorRoleSid: this.defaultConversationCreatorRoleSid,
      defaultConversationRoleSid: this.defaultConversationRoleSid,
      defaultChatServiceRoleSid: this.defaultChatServiceRoleSid,
      url: this.url,
      links: this.links,
      reachabilityEnabled: this.reachabilityEnabled,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ConfigurationListInstance {
  (): ConfigurationContext;
  get(): ConfigurationContext;

  notifications: NotificationListInstance;
  webhooks: WebhookListInstance;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConfigurationSolution {
  chatServiceSid?: string;
}

interface ConfigurationListInstanceImpl extends ConfigurationListInstance {}
class ConfigurationListInstanceImpl implements ConfigurationListInstance {
  _version?: V1;
  _solution?: ConfigurationSolution;
  _uri?: string;

  _notifications?: NotificationListInstance;
  _webhooks?: WebhookListInstance;
}

export function ConfigurationListInstance(
  version: V1,
  chatServiceSid: string
): ConfigurationListInstance {
  const instance = (() => instance.get()) as ConfigurationListInstanceImpl;

  instance.get = function get(): ConfigurationContext {
    return new ConfigurationContextImpl(version, chatServiceSid);
  };

  instance._version = version;
  instance._solution = { chatServiceSid };
  instance._uri = ``;

  Object.defineProperty(instance, "notifications", {
    get: function notifications() {
      if (!this._notifications) {
        this._notifications = NotificationListInstance(
          this._version,
          this._solution.chatServiceSid
        );
      }
      return this._notifications;
    },
  });

  Object.defineProperty(instance, "webhooks", {
    get: function webhooks() {
      if (!this._webhooks) {
        this._webhooks = WebhookListInstance(
          this._version,
          this._solution.chatServiceSid
        );
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
