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

/**
 * Options to pass to update a NotificationInstance
 */
export interface NotificationContextUpdateOptions {
  /** Weather the notification logging is enabled. */
  logEnabled?: boolean;
  /** Whether to send a notification when a new message is added to a conversation. The default is `false`. */
  "newMessage.enabled"?: boolean;
  /** The template to use to create the notification text displayed when a new message is added to a conversation and `new_message.enabled` is `true`. */
  "newMessage.template"?: string;
  /** The name of the sound to play when a new message is added to a conversation and `new_message.enabled` is `true`. */
  "newMessage.sound"?: string;
  /** Whether the new message badge is enabled. The default is `false`. */
  "newMessage.badgeCountEnabled"?: boolean;
  /** Whether to send a notification when a participant is added to a conversation. The default is `false`. */
  "addedToConversation.enabled"?: boolean;
  /** The template to use to create the notification text displayed when a participant is added to a conversation and `added_to_conversation.enabled` is `true`. */
  "addedToConversation.template"?: string;
  /** The name of the sound to play when a participant is added to a conversation and `added_to_conversation.enabled` is `true`. */
  "addedToConversation.sound"?: string;
  /** Whether to send a notification to a user when they are removed from a conversation. The default is `false`. */
  "removedFromConversation.enabled"?: boolean;
  /** The template to use to create the notification text displayed to a user when they are removed from a conversation and `removed_from_conversation.enabled` is `true`. */
  "removedFromConversation.template"?: string;
  /** The name of the sound to play to a user when they are removed from a conversation and `removed_from_conversation.enabled` is `true`. */
  "removedFromConversation.sound"?: string;
  /** Whether to send a notification when a new message with media/file attachments is added to a conversation. The default is `false`. */
  "newMessage.withMedia.enabled"?: boolean;
  /** The template to use to create the notification text displayed when a new message with media/file attachments is added to a conversation and `new_message.attachments.enabled` is `true`. */
  "newMessage.withMedia.template"?: string;
}

export interface NotificationContext {
  /**
   * Fetch a NotificationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NotificationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: NotificationInstance) => any
  ): Promise<NotificationInstance>;

  /**
   * Update a NotificationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NotificationInstance
   */
  update(
    callback?: (error: Error | null, item?: NotificationInstance) => any
  ): Promise<NotificationInstance>;
  /**
   * Update a NotificationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NotificationInstance
   */
  update(
    params: NotificationContextUpdateOptions,
    callback?: (error: Error | null, item?: NotificationInstance) => any
  ): Promise<NotificationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface NotificationContextSolution {
  chatServiceSid: string;
}

export class NotificationContextImpl implements NotificationContext {
  protected _solution: NotificationContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, chatServiceSid: string) {
    if (!isValidPathParam(chatServiceSid)) {
      throw new Error("Parameter 'chatServiceSid' is not valid.");
    }

    this._solution = { chatServiceSid };
    this._uri = `/Services/${chatServiceSid}/Configuration/Notifications`;
  }

  async fetch(
    callback?: (error: Error | null, item?: NotificationInstance) => any
  ): Promise<NotificationInstance> {
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
      let operation = new NotificationInstance(
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
      | NotificationContextUpdateOptions
      | ((error: Error | null, item?: NotificationInstance) => any),
    callback?: (error: Error | null, item?: NotificationInstance) => any
  ): Promise<NotificationInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["logEnabled"] !== undefined)
      data["LogEnabled"] = serialize.bool(params["logEnabled"]);
    if (params["newMessage.enabled"] !== undefined)
      data["NewMessage.Enabled"] = serialize.bool(params["newMessage.enabled"]);
    if (params["newMessage.template"] !== undefined)
      data["NewMessage.Template"] = params["newMessage.template"];
    if (params["newMessage.sound"] !== undefined)
      data["NewMessage.Sound"] = params["newMessage.sound"];
    if (params["newMessage.badgeCountEnabled"] !== undefined)
      data["NewMessage.BadgeCountEnabled"] = serialize.bool(
        params["newMessage.badgeCountEnabled"]
      );
    if (params["addedToConversation.enabled"] !== undefined)
      data["AddedToConversation.Enabled"] = serialize.bool(
        params["addedToConversation.enabled"]
      );
    if (params["addedToConversation.template"] !== undefined)
      data["AddedToConversation.Template"] =
        params["addedToConversation.template"];
    if (params["addedToConversation.sound"] !== undefined)
      data["AddedToConversation.Sound"] = params["addedToConversation.sound"];
    if (params["removedFromConversation.enabled"] !== undefined)
      data["RemovedFromConversation.Enabled"] = serialize.bool(
        params["removedFromConversation.enabled"]
      );
    if (params["removedFromConversation.template"] !== undefined)
      data["RemovedFromConversation.Template"] =
        params["removedFromConversation.template"];
    if (params["removedFromConversation.sound"] !== undefined)
      data["RemovedFromConversation.Sound"] =
        params["removedFromConversation.sound"];
    if (params["newMessage.withMedia.enabled"] !== undefined)
      data["NewMessage.WithMedia.Enabled"] = serialize.bool(
        params["newMessage.withMedia.enabled"]
      );
    if (params["newMessage.withMedia.template"] !== undefined)
      data["NewMessage.WithMedia.Template"] =
        params["newMessage.withMedia.template"];

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
      let operation = new NotificationInstance(
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

interface NotificationPayload extends NotificationResource {}

interface NotificationResource {
  account_sid: string;
  chat_service_sid: string;
  new_message: any;
  added_to_conversation: any;
  removed_from_conversation: any;
  log_enabled: boolean;
  url: string;
}

export class NotificationInstance {
  protected _solution: NotificationContextSolution;
  protected _context?: NotificationContext;

  constructor(
    protected _version: V1,
    payload: NotificationResource,
    chatServiceSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.chatServiceSid = payload.chat_service_sid;
    this.newMessage = payload.new_message;
    this.addedToConversation = payload.added_to_conversation;
    this.removedFromConversation = payload.removed_from_conversation;
    this.logEnabled = payload.log_enabled;
    this.url = payload.url;

    this._solution = { chatServiceSid };
  }

  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this configuration.
   */
  accountSid: string;
  /**
   * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Configuration applies to.
   */
  chatServiceSid: string;
  /**
   * The Push Notification configuration for New Messages.
   */
  newMessage: any;
  /**
   * The Push Notification configuration for being added to a Conversation.
   */
  addedToConversation: any;
  /**
   * The Push Notification configuration for being removed from a Conversation.
   */
  removedFromConversation: any;
  /**
   * Weather the notification logging is enabled.
   */
  logEnabled: boolean;
  /**
   * An absolute API resource URL for this configuration.
   */
  url: string;

  private get _proxy(): NotificationContext {
    this._context =
      this._context ||
      new NotificationContextImpl(this._version, this._solution.chatServiceSid);
    return this._context;
  }

  /**
   * Fetch a NotificationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NotificationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: NotificationInstance) => any
  ): Promise<NotificationInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a NotificationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NotificationInstance
   */
  update(
    callback?: (error: Error | null, item?: NotificationInstance) => any
  ): Promise<NotificationInstance>;
  /**
   * Update a NotificationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NotificationInstance
   */
  update(
    params: NotificationContextUpdateOptions,
    callback?: (error: Error | null, item?: NotificationInstance) => any
  ): Promise<NotificationInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: NotificationInstance) => any
  ): Promise<NotificationInstance> {
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
      newMessage: this.newMessage,
      addedToConversation: this.addedToConversation,
      removedFromConversation: this.removedFromConversation,
      logEnabled: this.logEnabled,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface NotificationSolution {
  chatServiceSid: string;
}

export interface NotificationListInstance {
  _version: V1;
  _solution: NotificationSolution;
  _uri: string;

  (): NotificationContext;
  get(): NotificationContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function NotificationListInstance(
  version: V1,
  chatServiceSid: string
): NotificationListInstance {
  if (!isValidPathParam(chatServiceSid)) {
    throw new Error("Parameter 'chatServiceSid' is not valid.");
  }

  const instance = (() => instance.get()) as NotificationListInstance;

  instance.get = function get(): NotificationContext {
    return new NotificationContextImpl(version, chatServiceSid);
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
