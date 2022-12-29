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
import V3 from "../V3";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

type ChannelChannelType = "public" | "private";

type ChannelWebhookEnabledType = "true" | "false";

/**
 * Options to pass to update a ChannelInstance
 *
 * @property { ChannelWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { ChannelChannelType } [type]
 * @property { string } [messagingServiceSid] The unique ID of the [Messaging Service](https://www.twilio.com/docs/sms/services/api) this channel belongs to.
 */
export interface ChannelContextUpdateOptions {
  xTwilioWebhookEnabled?: ChannelWebhookEnabledType;
  type?: ChannelChannelType;
  messagingServiceSid?: string;
}

export interface ChannelContext {
  /**
   * Update a ChannelInstance
   *
   * @param { ChannelContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ChannelInstance
   */
  update(
    params?:
      | ChannelContextUpdateOptions
      | ((error: Error | null, item?: ChannelInstance) => any),
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ChannelContextSolution {
  serviceSid?: string;
  sid?: string;
}

export class ChannelContextImpl implements ChannelContext {
  protected _solution: ChannelContextSolution;
  protected _uri: string;

  constructor(protected _version: V3, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Channels/${sid}`;
  }

  update(params?: any, callback?: any): Promise<ChannelInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["type"] !== undefined) data["Type"] = params["type"];
    if (params["messagingServiceSid"] !== undefined)
      data["MessagingServiceSid"] = params["messagingServiceSid"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    if (params["xTwilioWebhookEnabled"] !== undefined)
      headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ChannelInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
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

interface ChannelPayload extends ChannelResource {}

interface ChannelResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  friendly_name?: string | null;
  unique_name?: string | null;
  attributes?: string | null;
  type?: ChannelChannelType;
  date_created?: Date | null;
  date_updated?: Date | null;
  created_by?: string | null;
  members_count?: number | null;
  messages_count?: number | null;
  messaging_service_sid?: string | null;
  url?: string | null;
}

export class ChannelInstance {
  protected _solution: ChannelContextSolution;
  protected _context?: ChannelContext;

  constructor(
    protected _version: V3,
    payload: ChannelResource,
    serviceSid?: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.friendlyName = payload.friendly_name;
    this.uniqueName = payload.unique_name;
    this.attributes = payload.attributes;
    this.type = payload.type;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;
    this.membersCount = deserialize.integer(payload.members_count);
    this.messagesCount = deserialize.integer(payload.messages_count);
    this.messagingServiceSid = payload.messaging_service_sid;
    this.url = payload.url;

    this._solution = {
      serviceSid: serviceSid || this.serviceSid,
      sid: sid || this.sid,
    };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Service that the resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  /**
   * The JSON string that stores application-specific data
   */
  attributes?: string | null;
  type?: ChannelChannelType;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The identity of the User that created the channel
   */
  createdBy?: string | null;
  /**
   * The number of Members in the Channel
   */
  membersCount?: number | null;
  /**
   * The number of Messages that have been passed in the Channel
   */
  messagesCount?: number | null;
  /**
   * The unique ID of the Messaging Service this channel belongs to.
   */
  messagingServiceSid?: string | null;
  /**
   * The absolute URL of the Channel resource
   */
  url?: string | null;

  private get _proxy(): ChannelContext {
    this._context =
      this._context ||
      new ChannelContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Update a ChannelInstance
   *
   * @param { ChannelContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ChannelInstance
   */
  update(
    params?:
      | ChannelContextUpdateOptions
      | ((error: Error | null, item?: ChannelInstance) => any),
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance> {
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
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      friendlyName: this.friendlyName,
      uniqueName: this.uniqueName,
      attributes: this.attributes,
      type: this.type,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      createdBy: this.createdBy,
      membersCount: this.membersCount,
      messagesCount: this.messagesCount,
      messagingServiceSid: this.messagingServiceSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ChannelListInstance {
  (serviceSid: string, sid: string): ChannelContext;
  get(serviceSid: string, sid: string): ChannelContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ChannelSolution {}

interface ChannelListInstanceImpl extends ChannelListInstance {}
class ChannelListInstanceImpl implements ChannelListInstance {
  _version?: V3;
  _solution?: ChannelSolution;
  _uri?: string;
}

export function ChannelListInstance(version: V3): ChannelListInstance {
  const instance = ((serviceSid, sid) =>
    instance.get(serviceSid, sid)) as ChannelListInstanceImpl;

  instance.get = function get(serviceSid, sid): ChannelContext {
    return new ChannelContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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
