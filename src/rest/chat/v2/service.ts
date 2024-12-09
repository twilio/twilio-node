/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Chat
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { BindingListInstance } from "./service/binding";
import { ChannelListInstance } from "./service/channel";
import { RoleListInstance } from "./service/role";
import { UserListInstance } from "./service/user";

/**
 * Options to pass to update a ServiceInstance
 */
export interface ServiceContextUpdateOptions {
  /** A descriptive string that you create to describe the resource. */
  friendlyName?: string;
  /** The service role assigned to users when they are added to the service. See the [Role resource](https://www.twilio.com/docs/chat/rest/role-resource) for more info about roles. */
  defaultServiceRoleSid?: string;
  /** The channel role assigned to users when they are added to a channel. See the [Role resource](https://www.twilio.com/docs/chat/rest/role-resource) for more info about roles. */
  defaultChannelRoleSid?: string;
  /** The channel role assigned to a channel creator when they join a new channel. See the [Role resource](https://www.twilio.com/docs/chat/rest/role-resource) for more info about roles. */
  defaultChannelCreatorRoleSid?: string;
  /** Whether to enable the [Message Consumption Horizon](https://www.twilio.com/docs/chat/consumption-horizon) feature. The default is `true`. */
  readStatusEnabled?: boolean;
  /** Whether to enable the [Reachability Indicator](https://www.twilio.com/docs/chat/reachability-indicator) for this Service instance. The default is `false`. */
  reachabilityEnabled?: boolean;
  /** How long in seconds after a `started typing` event until clients should assume that user is no longer typing, even if no `ended typing` message was received.  The default is 5 seconds. */
  typingIndicatorTimeout?: number;
  /** DEPRECATED. The interval in seconds between consumption reports submission batches from client endpoints. */
  consumptionReportInterval?: number;
  /** Whether to send a notification when a new message is added to a channel. The default is `false`. */
  "notifications.newMessage.enabled"?: boolean;
  /** The template to use to create the notification text displayed when a new message is added to a channel and `notifications.new_message.enabled` is `true`. */
  "notifications.newMessage.template"?: string;
  /** The name of the sound to play when a new message is added to a channel and `notifications.new_message.enabled` is `true`. */
  "notifications.newMessage.sound"?: string;
  /** Whether the new message badge is enabled. The default is `false`. */
  "notifications.newMessage.badgeCountEnabled"?: boolean;
  /** Whether to send a notification when a member is added to a channel. The default is `false`. */
  "notifications.addedToChannel.enabled"?: boolean;
  /** The template to use to create the notification text displayed when a member is added to a channel and `notifications.added_to_channel.enabled` is `true`. */
  "notifications.addedToChannel.template"?: string;
  /** The name of the sound to play when a member is added to a channel and `notifications.added_to_channel.enabled` is `true`. */
  "notifications.addedToChannel.sound"?: string;
  /** Whether to send a notification to a user when they are removed from a channel. The default is `false`. */
  "notifications.removedFromChannel.enabled"?: boolean;
  /** The template to use to create the notification text displayed to a user when they are removed from a channel and `notifications.removed_from_channel.enabled` is `true`. */
  "notifications.removedFromChannel.template"?: string;
  /** The name of the sound to play to a user when they are removed from a channel and `notifications.removed_from_channel.enabled` is `true`. */
  "notifications.removedFromChannel.sound"?: string;
  /** Whether to send a notification when a user is invited to a channel. The default is `false`. */
  "notifications.invitedToChannel.enabled"?: boolean;
  /** The template to use to create the notification text displayed when a user is invited to a channel and `notifications.invited_to_channel.enabled` is `true`. */
  "notifications.invitedToChannel.template"?: string;
  /** The name of the sound to play when a user is invited to a channel and `notifications.invited_to_channel.enabled` is `true`. */
  "notifications.invitedToChannel.sound"?: string;
  /** The URL for pre-event webhooks, which are called by using the `webhook_method`. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details. */
  preWebhookUrl?: string;
  /** The URL for post-event webhooks, which are called by using the `webhook_method`. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details. */
  postWebhookUrl?: string;
  /** The HTTP method to use for calls to the `pre_webhook_url` and `post_webhook_url` webhooks.  Can be: `POST` or `GET` and the default is `POST`. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details. */
  webhookMethod?: string;
  /** The list of webhook events that are enabled for this Service instance. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details. */
  webhookFilters?: Array<string>;
  /** The maximum number of Members that can be added to Channels within this Service. Can be up to 1,000. */
  "limits.channelMembers"?: number;
  /** The maximum number of Channels Users can be a Member of within this Service. Can be up to 1,000. */
  "limits.userChannels"?: number;
  /** The message to send when a media message has no text. Can be used as placeholder message. */
  "media.compatibilityMessage"?: string;
  /** The number of times to retry a call to the `pre_webhook_url` if the request times out (after 5 seconds) or it receives a 429, 503, or 504 HTTP response. Default retry count is 0 times, which means the call won\\\'t be retried. */
  preWebhookRetryCount?: number;
  /** The number of times to retry a call to the `post_webhook_url` if the request times out (after 5 seconds) or it receives a 429, 503, or 504 HTTP response. The default is 0, which means the call won\\\'t be retried. */
  postWebhookRetryCount?: number;
  /** Whether to log notifications. The default is `false`. */
  "notifications.logEnabled"?: boolean;
}

/**
 * Options to pass to create a ServiceInstance
 */
export interface ServiceListInstanceCreateOptions {
  /** A descriptive string that you create to describe the new resource. */
  friendlyName: string;
}
/**
 * Options to pass to each
 */
export interface ServiceListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ServiceListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ServiceListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ServiceContext {
  bindings: BindingListInstance;
  channels: ChannelListInstance;
  roles: RoleListInstance;
  users: UserListInstance;

  /**
   * Remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ServiceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;

  /**
   * Update a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ServiceInstance
   */
  update(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  /**
   * Update a ServiceInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ServiceInstance
   */
  update(
    params: ServiceContextUpdateOptions,
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ServiceContextSolution {
  sid: string;
}

export class ServiceContextImpl implements ServiceContext {
  protected _solution: ServiceContextSolution;
  protected _uri: string;

  protected _bindings?: BindingListInstance;
  protected _channels?: ChannelListInstance;
  protected _roles?: RoleListInstance;
  protected _users?: UserListInstance;

  constructor(protected _version: V2, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Services/${sid}`;
  }

  get bindings(): BindingListInstance {
    this._bindings =
      this._bindings || BindingListInstance(this._version, this._solution.sid);
    return this._bindings;
  }

  get channels(): ChannelListInstance {
    this._channels =
      this._channels || ChannelListInstance(this._version, this._solution.sid);
    return this._channels;
  }

  get roles(): RoleListInstance {
    this._roles =
      this._roles || RoleListInstance(this._version, this._solution.sid);
    return this._roles;
  }

  get users(): UserListInstance {
    this._users =
      this._users || UserListInstance(this._version, this._solution.sid);
    return this._users;
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
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance> {
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
        new ServiceInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | ServiceContextUpdateOptions
      | ((error: Error | null, item?: ServiceInstance) => any),
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["defaultServiceRoleSid"] !== undefined)
      data["DefaultServiceRoleSid"] = params["defaultServiceRoleSid"];
    if (params["defaultChannelRoleSid"] !== undefined)
      data["DefaultChannelRoleSid"] = params["defaultChannelRoleSid"];
    if (params["defaultChannelCreatorRoleSid"] !== undefined)
      data["DefaultChannelCreatorRoleSid"] =
        params["defaultChannelCreatorRoleSid"];
    if (params["readStatusEnabled"] !== undefined)
      data["ReadStatusEnabled"] = serialize.bool(params["readStatusEnabled"]);
    if (params["reachabilityEnabled"] !== undefined)
      data["ReachabilityEnabled"] = serialize.bool(
        params["reachabilityEnabled"]
      );
    if (params["typingIndicatorTimeout"] !== undefined)
      data["TypingIndicatorTimeout"] = params["typingIndicatorTimeout"];
    if (params["consumptionReportInterval"] !== undefined)
      data["ConsumptionReportInterval"] = params["consumptionReportInterval"];
    if (params["notifications.newMessage.enabled"] !== undefined)
      data["Notifications.NewMessage.Enabled"] = serialize.bool(
        params["notifications.newMessage.enabled"]
      );
    if (params["notifications.newMessage.template"] !== undefined)
      data["Notifications.NewMessage.Template"] =
        params["notifications.newMessage.template"];
    if (params["notifications.newMessage.sound"] !== undefined)
      data["Notifications.NewMessage.Sound"] =
        params["notifications.newMessage.sound"];
    if (params["notifications.newMessage.badgeCountEnabled"] !== undefined)
      data["Notifications.NewMessage.BadgeCountEnabled"] = serialize.bool(
        params["notifications.newMessage.badgeCountEnabled"]
      );
    if (params["notifications.addedToChannel.enabled"] !== undefined)
      data["Notifications.AddedToChannel.Enabled"] = serialize.bool(
        params["notifications.addedToChannel.enabled"]
      );
    if (params["notifications.addedToChannel.template"] !== undefined)
      data["Notifications.AddedToChannel.Template"] =
        params["notifications.addedToChannel.template"];
    if (params["notifications.addedToChannel.sound"] !== undefined)
      data["Notifications.AddedToChannel.Sound"] =
        params["notifications.addedToChannel.sound"];
    if (params["notifications.removedFromChannel.enabled"] !== undefined)
      data["Notifications.RemovedFromChannel.Enabled"] = serialize.bool(
        params["notifications.removedFromChannel.enabled"]
      );
    if (params["notifications.removedFromChannel.template"] !== undefined)
      data["Notifications.RemovedFromChannel.Template"] =
        params["notifications.removedFromChannel.template"];
    if (params["notifications.removedFromChannel.sound"] !== undefined)
      data["Notifications.RemovedFromChannel.Sound"] =
        params["notifications.removedFromChannel.sound"];
    if (params["notifications.invitedToChannel.enabled"] !== undefined)
      data["Notifications.InvitedToChannel.Enabled"] = serialize.bool(
        params["notifications.invitedToChannel.enabled"]
      );
    if (params["notifications.invitedToChannel.template"] !== undefined)
      data["Notifications.InvitedToChannel.Template"] =
        params["notifications.invitedToChannel.template"];
    if (params["notifications.invitedToChannel.sound"] !== undefined)
      data["Notifications.InvitedToChannel.Sound"] =
        params["notifications.invitedToChannel.sound"];
    if (params["preWebhookUrl"] !== undefined)
      data["PreWebhookUrl"] = params["preWebhookUrl"];
    if (params["postWebhookUrl"] !== undefined)
      data["PostWebhookUrl"] = params["postWebhookUrl"];
    if (params["webhookMethod"] !== undefined)
      data["WebhookMethod"] = params["webhookMethod"];
    if (params["webhookFilters"] !== undefined)
      data["WebhookFilters"] = serialize.map(
        params["webhookFilters"],
        (e: string) => e
      );
    if (params["limits.channelMembers"] !== undefined)
      data["Limits.ChannelMembers"] = params["limits.channelMembers"];
    if (params["limits.userChannels"] !== undefined)
      data["Limits.UserChannels"] = params["limits.userChannels"];
    if (params["media.compatibilityMessage"] !== undefined)
      data["Media.CompatibilityMessage"] = params["media.compatibilityMessage"];
    if (params["preWebhookRetryCount"] !== undefined)
      data["PreWebhookRetryCount"] = params["preWebhookRetryCount"];
    if (params["postWebhookRetryCount"] !== undefined)
      data["PostWebhookRetryCount"] = params["postWebhookRetryCount"];
    if (params["notifications.logEnabled"] !== undefined)
      data["Notifications.LogEnabled"] = serialize.bool(
        params["notifications.logEnabled"]
      );

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
        new ServiceInstance(operationVersion, payload, instance._solution.sid)
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

interface ServicePayload extends TwilioResponsePayload {
  services: ServiceResource[];
}

interface ServiceResource {
  sid: string;
  account_sid: string;
  friendly_name: string;
  date_created: Date;
  date_updated: Date;
  default_service_role_sid: string;
  default_channel_role_sid: string;
  default_channel_creator_role_sid: string;
  read_status_enabled: boolean;
  reachability_enabled: boolean;
  typing_indicator_timeout: number;
  consumption_report_interval: number;
  limits: any;
  pre_webhook_url: string;
  post_webhook_url: string;
  webhook_method: string;
  webhook_filters: Array<string>;
  pre_webhook_retry_count: number;
  post_webhook_retry_count: number;
  notifications: any;
  media: any;
  url: string;
  links: Record<string, string>;
}

export class ServiceInstance {
  protected _solution: ServiceContextSolution;
  protected _context?: ServiceContext;

  constructor(protected _version: V2, payload: ServiceResource, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.defaultServiceRoleSid = payload.default_service_role_sid;
    this.defaultChannelRoleSid = payload.default_channel_role_sid;
    this.defaultChannelCreatorRoleSid =
      payload.default_channel_creator_role_sid;
    this.readStatusEnabled = payload.read_status_enabled;
    this.reachabilityEnabled = payload.reachability_enabled;
    this.typingIndicatorTimeout = deserialize.integer(
      payload.typing_indicator_timeout
    );
    this.consumptionReportInterval = deserialize.integer(
      payload.consumption_report_interval
    );
    this.limits = payload.limits;
    this.preWebhookUrl = payload.pre_webhook_url;
    this.postWebhookUrl = payload.post_webhook_url;
    this.webhookMethod = payload.webhook_method;
    this.webhookFilters = payload.webhook_filters;
    this.preWebhookRetryCount = deserialize.integer(
      payload.pre_webhook_retry_count
    );
    this.postWebhookRetryCount = deserialize.integer(
      payload.post_webhook_retry_count
    );
    this.notifications = payload.notifications;
    this.media = payload.media;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the Service resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
   */
  accountSid: string;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The service role assigned to users when they are added to the service. See the [Role resource](https://www.twilio.com/docs/chat/rest/role-resource) for more info about roles.
   */
  defaultServiceRoleSid: string;
  /**
   * The channel role assigned to users when they are added to a channel. See the [Role resource](https://www.twilio.com/docs/chat/rest/role-resource) for more info about roles.
   */
  defaultChannelRoleSid: string;
  /**
   * The channel role assigned to a channel creator when they join a new channel. See the [Role resource](https://www.twilio.com/docs/chat/rest/role-resource) for more info about roles.
   */
  defaultChannelCreatorRoleSid: string;
  /**
   * Whether the [Message Consumption Horizon](https://www.twilio.com/docs/chat/consumption-horizon) feature is enabled. The default is `true`.
   */
  readStatusEnabled: boolean;
  /**
   * Whether the [Reachability Indicator](https://www.twilio.com/docs/chat/reachability-indicator) is enabled for this Service instance. The default is `false`.
   */
  reachabilityEnabled: boolean;
  /**
   * How long in seconds after a `started typing` event until clients should assume that user is no longer typing, even if no `ended typing` message was received.  The default is 5 seconds.
   */
  typingIndicatorTimeout: number;
  /**
   * DEPRECATED. The interval in seconds between consumption reports submission batches from client endpoints.
   */
  consumptionReportInterval: number;
  /**
   * An object that describes the limits of the service instance. The `limits` object contains  `channel_members` to describe the members/channel limit and `user_channels` to describe the channels/user limit. `channel_members` can be 1,000 or less, with a default of 250. `user_channels` can be 1,000 or less, with a default value of 100.
   */
  limits: any;
  /**
   * The URL for pre-event webhooks, which are called by using the `webhook_method`. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
   */
  preWebhookUrl: string;
  /**
   * The URL for post-event webhooks, which are called by using the `webhook_method`. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
   */
  postWebhookUrl: string;
  /**
   * The HTTP method to use for calls to the `pre_webhook_url` and `post_webhook_url` webhooks.  Can be: `POST` or `GET` and the default is `POST`. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
   */
  webhookMethod: string;
  /**
   * The list of webhook events that are enabled for this Service instance. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
   */
  webhookFilters: Array<string>;
  /**
   * The number of times to retry a call to the `pre_webhook_url` if the request times out (after 5 seconds) or it receives a 429, 503, or 504 HTTP response. Default retry count is 0 times, which means the call won\'t be retried.
   */
  preWebhookRetryCount: number;
  /**
   * The number of times to retry a call to the `post_webhook_url` if the request times out (after 5 seconds) or it receives a 429, 503, or 504 HTTP response. The default is 0, which means the call won\'t be retried.
   */
  postWebhookRetryCount: number;
  /**
   * The notification configuration for the Service instance. See [Push Notification Configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
   */
  notifications: any;
  /**
   * An object that describes the properties of media that the service supports. The object contains the `size_limit_mb` property, which describes the size of the largest media file in MB; and the `compatibility_message` property, which contains the message text to send when a media message does not have any text.
   */
  media: any;
  /**
   * The absolute URL of the Service resource.
   */
  url: string;
  /**
   * The absolute URLs of the Service\'s [Channels](https://www.twilio.com/docs/chat/channels), [Roles](https://www.twilio.com/docs/chat/rest/role-resource), [Bindings](https://www.twilio.com/docs/chat/rest/binding-resource), and [Users](https://www.twilio.com/docs/chat/rest/user-resource).
   */
  links: Record<string, string>;

  private get _proxy(): ServiceContext {
    this._context =
      this._context ||
      new ServiceContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ServiceInstance
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
   * Fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ServiceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ServiceInstance
   */
  update(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  /**
   * Update a ServiceInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ServiceInstance
   */
  update(
    params: ServiceContextUpdateOptions,
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the bindings.
   */
  bindings(): BindingListInstance {
    return this._proxy.bindings;
  }

  /**
   * Access the channels.
   */
  channels(): ChannelListInstance {
    return this._proxy.channels;
  }

  /**
   * Access the roles.
   */
  roles(): RoleListInstance {
    return this._proxy.roles;
  }

  /**
   * Access the users.
   */
  users(): UserListInstance {
    return this._proxy.users;
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
      friendlyName: this.friendlyName,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      defaultServiceRoleSid: this.defaultServiceRoleSid,
      defaultChannelRoleSid: this.defaultChannelRoleSid,
      defaultChannelCreatorRoleSid: this.defaultChannelCreatorRoleSid,
      readStatusEnabled: this.readStatusEnabled,
      reachabilityEnabled: this.reachabilityEnabled,
      typingIndicatorTimeout: this.typingIndicatorTimeout,
      consumptionReportInterval: this.consumptionReportInterval,
      limits: this.limits,
      preWebhookUrl: this.preWebhookUrl,
      postWebhookUrl: this.postWebhookUrl,
      webhookMethod: this.webhookMethod,
      webhookFilters: this.webhookFilters,
      preWebhookRetryCount: this.preWebhookRetryCount,
      postWebhookRetryCount: this.postWebhookRetryCount,
      notifications: this.notifications,
      media: this.media,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ServiceSolution {}

export interface ServiceListInstance {
  _version: V2;
  _solution: ServiceSolution;
  _uri: string;

  (sid: string): ServiceContext;
  get(sid: string): ServiceContext;

  /**
   * Create a ServiceInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ServiceInstance
   */
  create(
    params: ServiceListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;

  /**
   * Streams ServiceInstance records from the API.
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
   * @param { ServiceListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: ServiceInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: ServiceListInstanceEachOptions,
    callback?: (item: ServiceInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ServiceListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ServiceInstance[]) => any
  ): Promise<ServiceInstance[]>;
  list(
    params: ServiceListInstanceOptions,
    callback?: (error: Error | null, items: ServiceInstance[]) => any
  ): Promise<ServiceInstance[]>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ServiceListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage>;
  page(
    params: ServiceListInstancePageOptions,
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ServiceListInstance(version: V2): ServiceListInstance {
  const instance = ((sid) => instance.get(sid)) as ServiceListInstance;

  instance.get = function get(sid): ServiceContext {
    return new ServiceContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Services`;

  instance.create = function create(
    params: ServiceListInstanceCreateOptions,
    callback?: (error: Error | null, items: ServiceInstance) => any
  ): Promise<ServiceInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

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
      (payload) => new ServiceInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | ServiceListInstancePageOptions
      | ((error: Error | null, items: ServicePage) => any),
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage> {
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
        new ServicePage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ServicePage(instance._version, payload, instance._solution)
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

export class ServicePage extends Page<
  V2,
  ServicePayload,
  ServiceResource,
  ServiceInstance
> {
  /**
   * Initialize the ServicePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: ServiceSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ServiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ServiceResource): ServiceInstance {
    return new ServiceInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
