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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

type MessageOrderType = "asc" | "desc";

type MessageWebhookEnabledType = "true" | "false";

/**
 * Options to pass to remove a MessageInstance
 *
 * @property { MessageWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 */
export interface MessageContextRemoveOptions {
  xTwilioWebhookEnabled?: MessageWebhookEnabledType;
}

/**
 * Options to pass to update a MessageInstance
 *
 * @property { MessageWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [body] The message to send to the channel. Can be an empty string or `null`, which sets the value as an empty string. You can send structured data in the body by serializing it as a string.
 * @property { string } [attributes] A valid JSON string that contains application-specific data.
 * @property { Date } [dateCreated] The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was created. The default value is the current time set by the Chat service. This parameter should only be used when a Chat\\\'s history is being recreated from a backup/separate source.
 * @property { Date } [dateUpdated] The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was last updated.
 * @property { string } [lastUpdatedBy] The [Identity](https://www.twilio.com/docs/chat/identity) of the User who last updated the Message, if applicable.
 * @property { string } [from] The [Identity](https://www.twilio.com/docs/chat/identity) of the message\\\'s author.
 */
export interface MessageContextUpdateOptions {
  xTwilioWebhookEnabled?: MessageWebhookEnabledType;
  body?: string;
  attributes?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  lastUpdatedBy?: string;
  from?: string;
}

/**
 * Options to pass to create a MessageInstance
 *
 * @property { MessageWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [from] The [Identity](https://www.twilio.com/docs/chat/identity) of the new message\\\'s author. The default value is `system`.
 * @property { string } [attributes] A valid JSON string that contains application-specific data.
 * @property { Date } [dateCreated] The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was created. The default value is the current time set by the Chat service. This parameter should only be used when a Chat\\\'s history is being recreated from a backup/separate source.
 * @property { Date } [dateUpdated] The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was last updated.
 * @property { string } [lastUpdatedBy] The [Identity](https://www.twilio.com/docs/chat/identity) of the User who last updated the Message, if applicable.
 * @property { string } [body] The message to send to the channel. Can be an empty string or `null`, which sets the value as an empty string. You can send structured data in the body by serializing it as a string.
 * @property { string } [mediaSid] The SID of the [Media](https://www.twilio.com/docs/chat/rest/media) to attach to the new Message.
 */
export interface MessageListInstanceCreateOptions {
  xTwilioWebhookEnabled?: MessageWebhookEnabledType;
  from?: string;
  attributes?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  lastUpdatedBy?: string;
  body?: string;
  mediaSid?: string;
}
/**
 * Options to pass to each
 *
 * @property { MessageOrderType } [order] The sort order of the returned messages. Can be: `asc` (ascending) or `desc` (descending) with `asc` as the default.
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
export interface MessageListInstanceEachOptions {
  order?: MessageOrderType;
  pageSize?: number;
  callback?: (item: MessageInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { MessageOrderType } [order] The sort order of the returned messages. Can be: `asc` (ascending) or `desc` (descending) with `asc` as the default.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MessageListInstanceOptions {
  order?: MessageOrderType;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { MessageOrderType } [order] The sort order of the returned messages. Can be: `asc` (ascending) or `desc` (descending) with `asc` as the default.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MessageListInstancePageOptions {
  order?: MessageOrderType;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface MessageContext {
  /**
   * Remove a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a MessageInstance
   *
   * @param { MessageContextRemoveOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  remove(
    params: MessageContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  remove(params?: any, callback?: any): Promise<boolean>;

  /**
   * Fetch a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;

  /**
   * Update a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  update(
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;
  /**
   * Update a MessageInstance
   *
   * @param { MessageContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  update(
    params: MessageContextUpdateOptions,
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;
  update(params?: any, callback?: any): Promise<MessageInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MessageContextSolution {
  serviceSid: string;
  channelSid: string;
  sid: string;
}

export class MessageContextImpl implements MessageContext {
  protected _solution: MessageContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2,
    serviceSid: string,
    channelSid: string,
    sid: string
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(channelSid)) {
      throw new Error("Parameter 'channelSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, channelSid, sid };
    this._uri = `/Services/${serviceSid}/Channels/${channelSid}/Messages/${sid}`;
  }

  remove(params?: any, callback?: any): Promise<boolean> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    const headers: any = {};
    if (params["xTwilioWebhookEnabled"] !== undefined)
      headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        params: data,
        headers,
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<MessageInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new MessageInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.channelSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<MessageInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["body"] !== undefined) data["Body"] = params["body"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];
    if (params["dateCreated"] !== undefined)
      data["DateCreated"] = serialize.iso8601DateTime(params["dateCreated"]);
    if (params["dateUpdated"] !== undefined)
      data["DateUpdated"] = serialize.iso8601DateTime(params["dateUpdated"]);
    if (params["lastUpdatedBy"] !== undefined)
      data["LastUpdatedBy"] = params["lastUpdatedBy"];
    if (params["from"] !== undefined) data["From"] = params["from"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    if (params["xTwilioWebhookEnabled"] !== undefined)
      headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];

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
        new MessageInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.channelSid,
          instance._solution.sid
        )
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

interface MessagePayload extends TwilioResponsePayload {
  messages: MessageResource[];
}

interface MessageResource {
  sid?: string | null;
  account_sid?: string | null;
  attributes?: string | null;
  service_sid?: string | null;
  to?: string | null;
  channel_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  last_updated_by?: string | null;
  was_edited?: boolean | null;
  from?: string | null;
  body?: string | null;
  index?: number | null;
  type?: string | null;
  media?: any | null;
  url?: string | null;
}

export class MessageInstance {
  protected _solution: MessageContextSolution;
  protected _context?: MessageContext;

  constructor(
    protected _version: V2,
    payload: MessageResource,
    serviceSid: string,
    channelSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.attributes = payload.attributes;
    this.serviceSid = payload.service_sid;
    this.to = payload.to;
    this.channelSid = payload.channel_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.lastUpdatedBy = payload.last_updated_by;
    this.wasEdited = payload.was_edited;
    this.from = payload.from;
    this.body = payload.body;
    this.index = deserialize.integer(payload.index);
    this.type = payload.type;
    this.media = payload.media;
    this.url = payload.url;

    this._solution = { serviceSid, channelSid, sid: sid || this.sid };
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
   * The JSON string that stores application-specific data
   */
  attributes?: string | null;
  /**
   * The SID of the Service that the resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The SID of the Channel that the message was sent to
   */
  to?: string | null;
  /**
   * The SID of the Channel the Message resource belongs to
   */
  channelSid?: string | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The Identity of the User who last updated the Message
   */
  lastUpdatedBy?: string | null;
  /**
   * Whether the message has been edited since  it was created
   */
  wasEdited?: boolean | null;
  /**
   * The Identity of the message\'s author
   */
  from?: string | null;
  /**
   * The content of the message
   */
  body?: string | null;
  /**
   * The index of the message within the Channel
   */
  index?: number | null;
  /**
   * The Message type
   */
  type?: string | null;
  /**
   * A Media object that describes the Message\'s media if attached; otherwise, null
   */
  media?: any | null;
  /**
   * The absolute URL of the Message resource
   */
  url?: string | null;

  private get _proxy(): MessageContext {
    this._context =
      this._context ||
      new MessageContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.channelSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a MessageInstance
   *
   * @param { MessageContextRemoveOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  remove(
    params: MessageContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  remove(params?: any, callback?: any): Promise<boolean> {
    return this._proxy.remove(params, callback);
  }

  /**
   * Fetch a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  update(
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;
  /**
   * Update a MessageInstance
   *
   * @param { MessageContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  update(
    params: MessageContextUpdateOptions,
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;
  update(params?: any, callback?: any): Promise<MessageInstance> {
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
      attributes: this.attributes,
      serviceSid: this.serviceSid,
      to: this.to,
      channelSid: this.channelSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      lastUpdatedBy: this.lastUpdatedBy,
      wasEdited: this.wasEdited,
      from: this.from,
      body: this.body,
      index: this.index,
      type: this.type,
      media: this.media,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface MessageSolution {
  serviceSid?: string;
  channelSid?: string;
}

export interface MessageListInstance {
  _version: V2;
  _solution: MessageSolution;
  _uri: string;

  (sid: string): MessageContext;
  get(sid: string): MessageContext;

  /**
   * Create a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  create(
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;
  /**
   * Create a MessageInstance
   *
   * @param { MessageListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  create(
    params: MessageListInstanceCreateOptions,
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;
  create(params?: any, callback?: any): Promise<MessageInstance>;

  /**
   * Streams MessageInstance records from the API.
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
    callback?: (item: MessageInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams MessageInstance records from the API.
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
   * @param { MessageListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: MessageListInstanceEachOptions,
    callback?: (item: MessageInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: MessagePage) => any
  ): Promise<MessagePage>;
  /**
   * Retrieve a single target page of MessageInstance records from the API.
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
    callback?: (error: Error | null, items: MessagePage) => any
  ): Promise<MessagePage>;
  getPage(params?: any, callback?: any): Promise<MessagePage>;
  /**
   * Lists MessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: MessageInstance[]) => any
  ): Promise<MessageInstance[]>;
  /**
   * Lists MessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MessageListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: MessageListInstanceOptions,
    callback?: (error: Error | null, items: MessageInstance[]) => any
  ): Promise<MessageInstance[]>;
  list(params?: any, callback?: any): Promise<MessageInstance[]>;
  /**
   * Retrieve a single page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: MessagePage) => any
  ): Promise<MessagePage>;
  /**
   * Retrieve a single page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MessageListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: MessageListInstancePageOptions,
    callback?: (error: Error | null, items: MessagePage) => any
  ): Promise<MessagePage>;
  page(params?: any, callback?: any): Promise<MessagePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function MessageListInstance(
  version: V2,
  serviceSid: string,
  channelSid: string
): MessageListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(channelSid)) {
    throw new Error("Parameter 'channelSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as MessageListInstance;

  instance.get = function get(sid): MessageContext {
    return new MessageContextImpl(version, serviceSid, channelSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid, channelSid };
  instance._uri = `/Services/${serviceSid}/Channels/${channelSid}/Messages`;

  instance.create = function create(
    params?: any,
    callback?: any
  ): Promise<MessageInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["from"] !== undefined) data["From"] = params["from"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];
    if (params["dateCreated"] !== undefined)
      data["DateCreated"] = serialize.iso8601DateTime(params["dateCreated"]);
    if (params["dateUpdated"] !== undefined)
      data["DateUpdated"] = serialize.iso8601DateTime(params["dateUpdated"]);
    if (params["lastUpdatedBy"] !== undefined)
      data["LastUpdatedBy"] = params["lastUpdatedBy"];
    if (params["body"] !== undefined) data["Body"] = params["body"];
    if (params["mediaSid"] !== undefined) data["MediaSid"] = params["mediaSid"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
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
        new MessageInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.channelSid
        )
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
  ): Promise<MessagePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["order"] !== undefined) data["Order"] = params["order"];
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
        new MessagePage(operationVersion, payload, instance._solution)
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
  ): Promise<MessagePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new MessagePage(instance._version, payload, instance._solution)
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

export class MessagePage extends Page<
  V2,
  MessagePayload,
  MessageResource,
  MessageInstance
> {
  /**
   * Initialize the MessagePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: MessageSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of MessageInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MessageResource): MessageInstance {
    return new MessageInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.channelSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
