/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Ip_messaging
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
 *
 * @property { string } [friendlyName]
 * @property { string } [defaultServiceRoleSid]
 * @property { string } [defaultChannelRoleSid]
 * @property { string } [defaultChannelCreatorRoleSid]
 * @property { boolean } [readStatusEnabled]
 * @property { boolean } [reachabilityEnabled]
 * @property { number } [typingIndicatorTimeout]
 * @property { number } [consumptionReportInterval]
 * @property { boolean } [notifications.newMessage.enabled]
 * @property { string } [notifications.newMessage.template]
 * @property { string } [notifications.newMessage.sound]
 * @property { boolean } [notifications.newMessage.badgeCountEnabled]
 * @property { boolean } [notifications.addedToChannel.enabled]
 * @property { string } [notifications.addedToChannel.template]
 * @property { string } [notifications.addedToChannel.sound]
 * @property { boolean } [notifications.removedFromChannel.enabled]
 * @property { string } [notifications.removedFromChannel.template]
 * @property { string } [notifications.removedFromChannel.sound]
 * @property { boolean } [notifications.invitedToChannel.enabled]
 * @property { string } [notifications.invitedToChannel.template]
 * @property { string } [notifications.invitedToChannel.sound]
 * @property { string } [preWebhookUrl]
 * @property { string } [postWebhookUrl]
 * @property { string } [webhookMethod]
 * @property { Array<string> } [webhookFilters]
 * @property { number } [limits.channelMembers]
 * @property { number } [limits.userChannels]
 * @property { string } [media.compatibilityMessage]
 * @property { number } [preWebhookRetryCount]
 * @property { number } [postWebhookRetryCount]
 * @property { boolean } [notifications.logEnabled]
 */
export interface ServiceContextUpdateOptions {
  friendlyName?: string;
  defaultServiceRoleSid?: string;
  defaultChannelRoleSid?: string;
  defaultChannelCreatorRoleSid?: string;
  readStatusEnabled?: boolean;
  reachabilityEnabled?: boolean;
  typingIndicatorTimeout?: number;
  consumptionReportInterval?: number;
  "notifications.newMessage.enabled"?: boolean;
  "notifications.newMessage.template"?: string;
  "notifications.newMessage.sound"?: string;
  "notifications.newMessage.badgeCountEnabled"?: boolean;
  "notifications.addedToChannel.enabled"?: boolean;
  "notifications.addedToChannel.template"?: string;
  "notifications.addedToChannel.sound"?: string;
  "notifications.removedFromChannel.enabled"?: boolean;
  "notifications.removedFromChannel.template"?: string;
  "notifications.removedFromChannel.sound"?: string;
  "notifications.invitedToChannel.enabled"?: boolean;
  "notifications.invitedToChannel.template"?: string;
  "notifications.invitedToChannel.sound"?: string;
  preWebhookUrl?: string;
  postWebhookUrl?: string;
  webhookMethod?: string;
  webhookFilters?: Array<string>;
  "limits.channelMembers"?: number;
  "limits.userChannels"?: number;
  "media.compatibilityMessage"?: string;
  preWebhookRetryCount?: number;
  postWebhookRetryCount?: number;
  "notifications.logEnabled"?: boolean;
}

/**
 * Options to pass to create a ServiceInstance
 *
 * @property { string } friendlyName
 */
export interface ServiceListInstanceCreateOptions {
  friendlyName: string;
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
export interface ServiceListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
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
export interface ServiceListInstanceOptions {
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
export interface ServiceListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
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
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;

  /**
   * Update a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  /**
   * Update a ServiceInstance
   *
   * @param { ServiceContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(
    params: ServiceContextUpdateOptions,
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  update(params?: any, callback?: any): Promise<ServiceInstance>;

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

  remove(callback?: any): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<ServiceInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
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

  update(params?: any, callback?: any): Promise<ServiceInstance> {
    if (typeof params === "function") {
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
        (e) => e
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
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  default_service_role_sid?: string | null;
  default_channel_role_sid?: string | null;
  default_channel_creator_role_sid?: string | null;
  read_status_enabled?: boolean | null;
  reachability_enabled?: boolean | null;
  typing_indicator_timeout?: number | null;
  consumption_report_interval?: number | null;
  limits?: any | null;
  pre_webhook_url?: string | null;
  post_webhook_url?: string | null;
  webhook_method?: string | null;
  webhook_filters?: Array<string> | null;
  pre_webhook_retry_count?: number | null;
  post_webhook_retry_count?: number | null;
  notifications?: any | null;
  media?: any | null;
  url?: string | null;
  links?: object | null;
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

  sid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  defaultServiceRoleSid?: string | null;
  defaultChannelRoleSid?: string | null;
  defaultChannelCreatorRoleSid?: string | null;
  readStatusEnabled?: boolean | null;
  reachabilityEnabled?: boolean | null;
  typingIndicatorTimeout?: number | null;
  consumptionReportInterval?: number | null;
  limits?: any | null;
  preWebhookUrl?: string | null;
  postWebhookUrl?: string | null;
  webhookMethod?: string | null;
  webhookFilters?: Array<string> | null;
  preWebhookRetryCount?: number | null;
  postWebhookRetryCount?: number | null;
  notifications?: any | null;
  media?: any | null;
  url?: string | null;
  links?: object | null;

  private get _proxy(): ServiceContext {
    this._context =
      this._context ||
      new ServiceContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ServiceInstance
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
   * Fetch a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  /**
   * Update a ServiceInstance
   *
   * @param { ServiceContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(
    params: ServiceContextUpdateOptions,
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  update(params?: any, callback?: any): Promise<ServiceInstance> {
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
   * @param { ServiceListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  create(
    params: ServiceListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  create(params: any, callback?: any): Promise<ServiceInstance>;

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
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: ServiceInstance, done: (err?: Error) => void) => void
  ): void;
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
    params?: ServiceListInstanceEachOptions,
    callback?: (item: ServiceInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage>;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage>;
  getPage(params?: any, callback?: any): Promise<ServicePage>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ServiceInstance[]) => any
  ): Promise<ServiceInstance[]>;
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
    params?: ServiceListInstanceOptions,
    callback?: (error: Error | null, items: ServiceInstance[]) => any
  ): Promise<ServiceInstance[]>;
  list(params?: any, callback?: any): Promise<ServiceInstance[]>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage>;
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
    params: ServiceListInstancePageOptions,
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage>;
  page(params?: any, callback?: any): Promise<ServicePage>;

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
    params: any,
    callback?: any
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
    params?: any,
    callback?: any
  ): Promise<ServicePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

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
    targetUrl?: any,
    callback?: any
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
