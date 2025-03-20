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

/**
 * Current state of this conversation. Can be either `initializing`, `active`, `inactive` or `closed` and defaults to `active`
 */
export type ConversationWithParticipantsState =
  | "inactive"
  | "active"
  | "closed";

export type ConversationWithParticipantsWebhookEnabledType = "true" | "false";

/**
 * Options to pass to create a ConversationWithParticipantsInstance
 */
export interface ConversationWithParticipantsListInstanceCreateOptions {
  /** The X-Twilio-Webhook-Enabled HTTP request header */
  xTwilioWebhookEnabled?: ConversationWithParticipantsWebhookEnabledType;
  /** The human-readable name of this conversation, limited to 256 characters. Optional. */
  friendlyName?: string;
  /** An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource\\\'s `sid` in the URL. */
  uniqueName?: string;
  /** The date that this resource was created. */
  dateCreated?: Date;
  /** The date that this resource was last updated. */
  dateUpdated?: Date;
  /** The unique ID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) this conversation belongs to. */
  messagingServiceSid?: string;
  /** An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \\\"{}\\\" will be returned. */
  attributes?: string;
  /**  */
  state?: ConversationWithParticipantsState;
  /** ISO8601 duration when conversation will be switched to `inactive` state. Minimum value for this timer is 1 minute. */
  "timers.inactive"?: string;
  /** ISO8601 duration when conversation will be switched to `closed` state. Minimum value for this timer is 10 minutes. */
  "timers.closed"?: string;
  /** The default email address that will be used when sending outbound emails in this conversation. */
  "bindings.email.address"?: string;
  /** The default name that will be used when sending outbound emails in this conversation. */
  "bindings.email.name"?: string;
  /** The participant to be added to the conversation in JSON format. The JSON object attributes are as parameters in [Participant Resource](https://www.twilio.com/docs/conversations/api/conversation-participant-resource). The maximum number of participants that can be added in a single request is 10. */
  participant?: Array<string>;
}

export interface ConversationWithParticipantsSolution {
  chatServiceSid: string;
}

export interface ConversationWithParticipantsListInstance {
  _version: V1;
  _solution: ConversationWithParticipantsSolution;
  _uri: string;

  /**
   * Create a ConversationWithParticipantsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConversationWithParticipantsInstance
   */
  create(
    callback?: (
      error: Error | null,
      item?: ConversationWithParticipantsInstance
    ) => any
  ): Promise<ConversationWithParticipantsInstance>;
  /**
   * Create a ConversationWithParticipantsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConversationWithParticipantsInstance
   */
  create(
    params: ConversationWithParticipantsListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: ConversationWithParticipantsInstance
    ) => any
  ): Promise<ConversationWithParticipantsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ConversationWithParticipantsListInstance(
  version: V1,
  chatServiceSid: string
): ConversationWithParticipantsListInstance {
  if (!isValidPathParam(chatServiceSid)) {
    throw new Error("Parameter 'chatServiceSid' is not valid.");
  }

  const instance = {} as ConversationWithParticipantsListInstance;

  instance._version = version;
  instance._solution = { chatServiceSid };
  instance._uri = `/Services/${chatServiceSid}/ConversationWithParticipants`;

  instance.create = function create(
    params?:
      | ConversationWithParticipantsListInstanceCreateOptions
      | ((
          error: Error | null,
          items: ConversationWithParticipantsInstance
        ) => any),
    callback?: (
      error: Error | null,
      items: ConversationWithParticipantsInstance
    ) => any
  ): Promise<ConversationWithParticipantsInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["dateCreated"] !== undefined)
      data["DateCreated"] = serialize.iso8601DateTime(params["dateCreated"]);
    if (params["dateUpdated"] !== undefined)
      data["DateUpdated"] = serialize.iso8601DateTime(params["dateUpdated"]);
    if (params["messagingServiceSid"] !== undefined)
      data["MessagingServiceSid"] = params["messagingServiceSid"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];
    if (params["state"] !== undefined) data["State"] = params["state"];
    if (params["timers.inactive"] !== undefined)
      data["Timers.Inactive"] = params["timers.inactive"];
    if (params["timers.closed"] !== undefined)
      data["Timers.Closed"] = params["timers.closed"];
    if (params["bindings.email.address"] !== undefined)
      data["Bindings.Email.Address"] = params["bindings.email.address"];
    if (params["bindings.email.name"] !== undefined)
      data["Bindings.Email.Name"] = params["bindings.email.name"];
    if (params["participant"] !== undefined)
      data["Participant"] = serialize.map(
        params["participant"],
        (e: string) => e
      );

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";
    if (params["xTwilioWebhookEnabled"] !== undefined)
      headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ConversationWithParticipantsInstance(
          operationVersion,
          payload,
          instance._solution.chatServiceSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
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

interface ConversationWithParticipantsPayload
  extends ConversationWithParticipantsResource {}

interface ConversationWithParticipantsResource {
  account_sid: string;
  chat_service_sid: string;
  messaging_service_sid: string;
  sid: string;
  friendly_name: string;
  unique_name: string;
  attributes: string;
  state: ConversationWithParticipantsState;
  date_created: Date;
  date_updated: Date;
  timers: Record<string, object>;
  links: Record<string, string>;
  bindings: Record<string, object>;
  url: string;
}

export class ConversationWithParticipantsInstance {
  constructor(
    protected _version: V1,
    payload: ConversationWithParticipantsResource,
    chatServiceSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.chatServiceSid = payload.chat_service_sid;
    this.messagingServiceSid = payload.messaging_service_sid;
    this.sid = payload.sid;
    this.friendlyName = payload.friendly_name;
    this.uniqueName = payload.unique_name;
    this.attributes = payload.attributes;
    this.state = payload.state;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.timers = payload.timers;
    this.links = payload.links;
    this.bindings = payload.bindings;
    this.url = payload.url;
  }

  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this conversation.
   */
  accountSid: string;
  /**
   * The unique ID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation belongs to.
   */
  chatServiceSid: string;
  /**
   * The unique ID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) this conversation belongs to.
   */
  messagingServiceSid: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The human-readable name of this conversation, limited to 256 characters. Optional.
   */
  friendlyName: string;
  /**
   * An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource\'s `sid` in the URL.
   */
  uniqueName: string;
  /**
   * An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \"{}\" will be returned.
   */
  attributes: string;
  state: ConversationWithParticipantsState;
  /**
   * The date that this resource was created.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated.
   */
  dateUpdated: Date;
  /**
   * Timer date values representing state update for this conversation.
   */
  timers: Record<string, object>;
  /**
   * Contains absolute URLs to access the [participants](https://www.twilio.com/docs/conversations/api/conversation-participant-resource), [messages](https://www.twilio.com/docs/conversations/api/conversation-message-resource) and [webhooks](https://www.twilio.com/docs/conversations/api/conversation-scoped-webhook-resource) of this conversation.
   */
  links: Record<string, string>;
  bindings: Record<string, object>;
  /**
   * An absolute API resource URL for this conversation.
   */
  url: string;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      chatServiceSid: this.chatServiceSid,
      messagingServiceSid: this.messagingServiceSid,
      sid: this.sid,
      friendlyName: this.friendlyName,
      uniqueName: this.uniqueName,
      attributes: this.attributes,
      state: this.state,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      timers: this.timers,
      links: this.links,
      bindings: this.bindings,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
