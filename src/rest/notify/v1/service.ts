/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Notify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { BindingListInstance } from "./service/binding";
import { NotificationListInstance } from "./service/notification";

/**
 * Options to pass to update a ServiceInstance
 */
export interface ServiceContextUpdateOptions {
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  friendlyName?: string;
  /** The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for APN Bindings. */
  apnCredentialSid?: string;
  /** The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for GCM Bindings. */
  gcmCredentialSid?: string;
  /** The SID of the [Messaging Service](https://www.twilio.com/docs/sms/quickstart#messaging-services) to use for SMS Bindings. This parameter must be set in order to send SMS notifications. */
  messagingServiceSid?: string;
  /** Deprecated. */
  facebookMessengerPageId?: string;
  /** The protocol version to use for sending APNS notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource. */
  defaultApnNotificationProtocolVersion?: string;
  /** The protocol version to use for sending GCM notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource. */
  defaultGcmNotificationProtocolVersion?: string;
  /** The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for FCM Bindings. */
  fcmCredentialSid?: string;
  /** The protocol version to use for sending FCM notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource. */
  defaultFcmNotificationProtocolVersion?: string;
  /** Whether to log notifications. Can be: `true` or `false` and the default is `true`. */
  logEnabled?: boolean;
  /** Deprecated. */
  alexaSkillId?: string;
  /** Deprecated. */
  defaultAlexaNotificationProtocolVersion?: string;
  /** URL to send delivery status callback. */
  deliveryCallbackUrl?: string;
  /** Callback configuration that enables delivery callbacks, default false */
  deliveryCallbackEnabled?: boolean;
}

/**
 * Options to pass to create a ServiceInstance
 */
export interface ServiceListInstanceCreateOptions {
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  friendlyName?: string;
  /** The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for APN Bindings. */
  apnCredentialSid?: string;
  /** The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for GCM Bindings. */
  gcmCredentialSid?: string;
  /** The SID of the [Messaging Service](https://www.twilio.com/docs/sms/quickstart#messaging-services) to use for SMS Bindings. This parameter must be set in order to send SMS notifications. */
  messagingServiceSid?: string;
  /** Deprecated. */
  facebookMessengerPageId?: string;
  /** The protocol version to use for sending APNS notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource. */
  defaultApnNotificationProtocolVersion?: string;
  /** The protocol version to use for sending GCM notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource. */
  defaultGcmNotificationProtocolVersion?: string;
  /** The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for FCM Bindings. */
  fcmCredentialSid?: string;
  /** The protocol version to use for sending FCM notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource. */
  defaultFcmNotificationProtocolVersion?: string;
  /** Whether to log notifications. Can be: `true` or `false` and the default is `true`. */
  logEnabled?: boolean;
  /** Deprecated. */
  alexaSkillId?: string;
  /** Deprecated. */
  defaultAlexaNotificationProtocolVersion?: string;
  /** URL to send delivery status callback. */
  deliveryCallbackUrl?: string;
  /** Callback configuration that enables delivery callbacks, default false */
  deliveryCallbackEnabled?: boolean;
}
/**
 * Options to pass to each
 */
export interface ServiceListInstanceEachOptions {
  /** The string that identifies the Service resources to read. */
  friendlyName?: string;
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
  /** The string that identifies the Service resources to read. */
  friendlyName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ServiceListInstancePageOptions {
  /** The string that identifies the Service resources to read. */
  friendlyName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ServiceContext {
  bindings: BindingListInstance;
  notifications: NotificationListInstance;

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
  protected _notifications?: NotificationListInstance;

  constructor(protected _version: V1, sid: string) {
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

  get notifications(): NotificationListInstance {
    this._notifications =
      this._notifications ||
      NotificationListInstance(this._version, this._solution.sid);
    return this._notifications;
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
    if (params["apnCredentialSid"] !== undefined)
      data["ApnCredentialSid"] = params["apnCredentialSid"];
    if (params["gcmCredentialSid"] !== undefined)
      data["GcmCredentialSid"] = params["gcmCredentialSid"];
    if (params["messagingServiceSid"] !== undefined)
      data["MessagingServiceSid"] = params["messagingServiceSid"];
    if (params["facebookMessengerPageId"] !== undefined)
      data["FacebookMessengerPageId"] = params["facebookMessengerPageId"];
    if (params["defaultApnNotificationProtocolVersion"] !== undefined)
      data["DefaultApnNotificationProtocolVersion"] =
        params["defaultApnNotificationProtocolVersion"];
    if (params["defaultGcmNotificationProtocolVersion"] !== undefined)
      data["DefaultGcmNotificationProtocolVersion"] =
        params["defaultGcmNotificationProtocolVersion"];
    if (params["fcmCredentialSid"] !== undefined)
      data["FcmCredentialSid"] = params["fcmCredentialSid"];
    if (params["defaultFcmNotificationProtocolVersion"] !== undefined)
      data["DefaultFcmNotificationProtocolVersion"] =
        params["defaultFcmNotificationProtocolVersion"];
    if (params["logEnabled"] !== undefined)
      data["LogEnabled"] = serialize.bool(params["logEnabled"]);
    if (params["alexaSkillId"] !== undefined)
      data["AlexaSkillId"] = params["alexaSkillId"];
    if (params["defaultAlexaNotificationProtocolVersion"] !== undefined)
      data["DefaultAlexaNotificationProtocolVersion"] =
        params["defaultAlexaNotificationProtocolVersion"];
    if (params["deliveryCallbackUrl"] !== undefined)
      data["DeliveryCallbackUrl"] = params["deliveryCallbackUrl"];
    if (params["deliveryCallbackEnabled"] !== undefined)
      data["DeliveryCallbackEnabled"] = serialize.bool(
        params["deliveryCallbackEnabled"]
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
  apn_credential_sid: string;
  gcm_credential_sid: string;
  fcm_credential_sid: string;
  messaging_service_sid: string;
  facebook_messenger_page_id: string;
  default_apn_notification_protocol_version: string;
  default_gcm_notification_protocol_version: string;
  default_fcm_notification_protocol_version: string;
  log_enabled: boolean;
  url: string;
  links: Record<string, string>;
  alexa_skill_id: string;
  default_alexa_notification_protocol_version: string;
  delivery_callback_url: string;
  delivery_callback_enabled: boolean;
}

export class ServiceInstance {
  protected _solution: ServiceContextSolution;
  protected _context?: ServiceContext;

  constructor(protected _version: V1, payload: ServiceResource, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.apnCredentialSid = payload.apn_credential_sid;
    this.gcmCredentialSid = payload.gcm_credential_sid;
    this.fcmCredentialSid = payload.fcm_credential_sid;
    this.messagingServiceSid = payload.messaging_service_sid;
    this.facebookMessengerPageId = payload.facebook_messenger_page_id;
    this.defaultApnNotificationProtocolVersion =
      payload.default_apn_notification_protocol_version;
    this.defaultGcmNotificationProtocolVersion =
      payload.default_gcm_notification_protocol_version;
    this.defaultFcmNotificationProtocolVersion =
      payload.default_fcm_notification_protocol_version;
    this.logEnabled = payload.log_enabled;
    this.url = payload.url;
    this.links = payload.links;
    this.alexaSkillId = payload.alexa_skill_id;
    this.defaultAlexaNotificationProtocolVersion =
      payload.default_alexa_notification_protocol_version;
    this.deliveryCallbackUrl = payload.delivery_callback_url;
    this.deliveryCallbackEnabled = payload.delivery_callback_enabled;

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
   * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for APN Bindings.
   */
  apnCredentialSid: string;
  /**
   * The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for GCM Bindings.
   */
  gcmCredentialSid: string;
  /**
   * The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for FCM Bindings.
   */
  fcmCredentialSid: string;
  /**
   * The SID of the [Messaging Service](https://www.twilio.com/docs/sms/quickstart#messaging-services) to use for SMS Bindings. In order to send SMS notifications this parameter has to be set.
   */
  messagingServiceSid: string;
  /**
   * Deprecated.
   */
  facebookMessengerPageId: string;
  /**
   * The protocol version to use for sending APNS notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource.
   */
  defaultApnNotificationProtocolVersion: string;
  /**
   * The protocol version to use for sending GCM notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource.
   */
  defaultGcmNotificationProtocolVersion: string;
  /**
   * The protocol version to use for sending FCM notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource.
   */
  defaultFcmNotificationProtocolVersion: string;
  /**
   * Whether to log notifications. Can be: `true` or `false` and the default is `true`.
   */
  logEnabled: boolean;
  /**
   * The absolute URL of the Service resource.
   */
  url: string;
  /**
   * The URLs of the Binding, Notification, Segment, and User resources related to the service.
   */
  links: Record<string, string>;
  /**
   * Deprecated.
   */
  alexaSkillId: string;
  /**
   * Deprecated.
   */
  defaultAlexaNotificationProtocolVersion: string;
  /**
   * URL to send delivery status callback.
   */
  deliveryCallbackUrl: string;
  /**
   * Callback configuration that enables delivery callbacks, default false
   */
  deliveryCallbackEnabled: boolean;

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
   * Access the notifications.
   */
  notifications(): NotificationListInstance {
    return this._proxy.notifications;
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
      apnCredentialSid: this.apnCredentialSid,
      gcmCredentialSid: this.gcmCredentialSid,
      fcmCredentialSid: this.fcmCredentialSid,
      messagingServiceSid: this.messagingServiceSid,
      facebookMessengerPageId: this.facebookMessengerPageId,
      defaultApnNotificationProtocolVersion:
        this.defaultApnNotificationProtocolVersion,
      defaultGcmNotificationProtocolVersion:
        this.defaultGcmNotificationProtocolVersion,
      defaultFcmNotificationProtocolVersion:
        this.defaultFcmNotificationProtocolVersion,
      logEnabled: this.logEnabled,
      url: this.url,
      links: this.links,
      alexaSkillId: this.alexaSkillId,
      defaultAlexaNotificationProtocolVersion:
        this.defaultAlexaNotificationProtocolVersion,
      deliveryCallbackUrl: this.deliveryCallbackUrl,
      deliveryCallbackEnabled: this.deliveryCallbackEnabled,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ServiceSolution {}

export interface ServiceListInstance {
  _version: V1;
  _solution: ServiceSolution;
  _uri: string;

  (sid: string): ServiceContext;
  get(sid: string): ServiceContext;

  /**
   * Create a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ServiceInstance
   */
  create(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
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

export function ServiceListInstance(version: V1): ServiceListInstance {
  const instance = ((sid) => instance.get(sid)) as ServiceListInstance;

  instance.get = function get(sid): ServiceContext {
    return new ServiceContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Services`;

  instance.create = function create(
    params?:
      | ServiceListInstanceCreateOptions
      | ((error: Error | null, items: ServiceInstance) => any),
    callback?: (error: Error | null, items: ServiceInstance) => any
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
    if (params["apnCredentialSid"] !== undefined)
      data["ApnCredentialSid"] = params["apnCredentialSid"];
    if (params["gcmCredentialSid"] !== undefined)
      data["GcmCredentialSid"] = params["gcmCredentialSid"];
    if (params["messagingServiceSid"] !== undefined)
      data["MessagingServiceSid"] = params["messagingServiceSid"];
    if (params["facebookMessengerPageId"] !== undefined)
      data["FacebookMessengerPageId"] = params["facebookMessengerPageId"];
    if (params["defaultApnNotificationProtocolVersion"] !== undefined)
      data["DefaultApnNotificationProtocolVersion"] =
        params["defaultApnNotificationProtocolVersion"];
    if (params["defaultGcmNotificationProtocolVersion"] !== undefined)
      data["DefaultGcmNotificationProtocolVersion"] =
        params["defaultGcmNotificationProtocolVersion"];
    if (params["fcmCredentialSid"] !== undefined)
      data["FcmCredentialSid"] = params["fcmCredentialSid"];
    if (params["defaultFcmNotificationProtocolVersion"] !== undefined)
      data["DefaultFcmNotificationProtocolVersion"] =
        params["defaultFcmNotificationProtocolVersion"];
    if (params["logEnabled"] !== undefined)
      data["LogEnabled"] = serialize.bool(params["logEnabled"]);
    if (params["alexaSkillId"] !== undefined)
      data["AlexaSkillId"] = params["alexaSkillId"];
    if (params["defaultAlexaNotificationProtocolVersion"] !== undefined)
      data["DefaultAlexaNotificationProtocolVersion"] =
        params["defaultAlexaNotificationProtocolVersion"];
    if (params["deliveryCallbackUrl"] !== undefined)
      data["DeliveryCallbackUrl"] = params["deliveryCallbackUrl"];
    if (params["deliveryCallbackEnabled"] !== undefined)
      data["DeliveryCallbackEnabled"] = serialize.bool(
        params["deliveryCallbackEnabled"]
      );

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

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
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
  V1,
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
    version: V1,
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
