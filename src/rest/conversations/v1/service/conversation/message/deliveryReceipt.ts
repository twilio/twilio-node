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
import Page, { TwilioResponsePayload } from "../../../../../../base/Page";
import Response from "../../../../../../http/response";
import V1 from "../../../../V1";
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");
import { isValidPathParam } from "../../../../../../base/utility";

/**
 * The message delivery status, can be `read`, `failed`, `delivered`, `undelivered`, `sent` or null.
 */
export type DeliveryReceiptDeliveryStatus =
  | "read"
  | "failed"
  | "delivered"
  | "undelivered"
  | "sent";

/**
 * Options to pass to each
 */
export interface DeliveryReceiptListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 50. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: DeliveryReceiptInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface DeliveryReceiptListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 50. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface DeliveryReceiptListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 50. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface DeliveryReceiptContext {
  /**
   * Fetch a DeliveryReceiptInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeliveryReceiptInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DeliveryReceiptInstance) => any
  ): Promise<DeliveryReceiptInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DeliveryReceiptContextSolution {
  chatServiceSid: string;
  conversationSid: string;
  messageSid: string;
  sid: string;
}

export class DeliveryReceiptContextImpl implements DeliveryReceiptContext {
  protected _solution: DeliveryReceiptContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    chatServiceSid: string,
    conversationSid: string,
    messageSid: string,
    sid: string
  ) {
    if (!isValidPathParam(chatServiceSid)) {
      throw new Error("Parameter 'chatServiceSid' is not valid.");
    }

    if (!isValidPathParam(conversationSid)) {
      throw new Error("Parameter 'conversationSid' is not valid.");
    }

    if (!isValidPathParam(messageSid)) {
      throw new Error("Parameter 'messageSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { chatServiceSid, conversationSid, messageSid, sid };
    this._uri = `/Services/${chatServiceSid}/Conversations/${conversationSid}/Messages/${messageSid}/Receipts/${sid}`;
  }

  fetch(
    callback?: (error: Error | null, item?: DeliveryReceiptInstance) => any
  ): Promise<DeliveryReceiptInstance> {
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
        new DeliveryReceiptInstance(
          operationVersion,
          payload,
          instance._solution.chatServiceSid,
          instance._solution.conversationSid,
          instance._solution.messageSid,
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

interface DeliveryReceiptPayload extends TwilioResponsePayload {
  delivery_receipts: DeliveryReceiptResource[];
}

interface DeliveryReceiptResource {
  account_sid: string;
  chat_service_sid: string;
  conversation_sid: string;
  message_sid: string;
  sid: string;
  channel_message_sid: string;
  participant_sid: string;
  status: DeliveryReceiptDeliveryStatus;
  error_code: number;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class DeliveryReceiptInstance {
  protected _solution: DeliveryReceiptContextSolution;
  protected _context?: DeliveryReceiptContext;

  constructor(
    protected _version: V1,
    payload: DeliveryReceiptResource,
    chatServiceSid: string,
    conversationSid: string,
    messageSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.chatServiceSid = payload.chat_service_sid;
    this.conversationSid = payload.conversation_sid;
    this.messageSid = payload.message_sid;
    this.sid = payload.sid;
    this.channelMessageSid = payload.channel_message_sid;
    this.participantSid = payload.participant_sid;
    this.status = payload.status;
    this.errorCode = deserialize.integer(payload.error_code);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = {
      chatServiceSid,
      conversationSid,
      messageSid,
      sid: sid || this.sid,
    };
  }

  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this participant.
   */
  accountSid: string;
  /**
   * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Message resource is associated with.
   */
  chatServiceSid: string;
  /**
   * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this message.
   */
  conversationSid: string;
  /**
   * The SID of the message within a [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) the delivery receipt belongs to
   */
  messageSid: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * A messaging channel-specific identifier for the message delivered to participant e.g. `SMxx` for SMS, `WAxx` for Whatsapp etc.
   */
  channelMessageSid: string;
  /**
   * The unique ID of the participant the delivery receipt belongs to.
   */
  participantSid: string;
  status: DeliveryReceiptDeliveryStatus;
  /**
   * The message [delivery error code](https://www.twilio.com/docs/sms/api/message-resource#delivery-related-errors) for a `failed` status,
   */
  errorCode: number;
  /**
   * The date that this resource was created.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated. `null` if the delivery receipt has not been updated.
   */
  dateUpdated: Date;
  /**
   * An absolute API resource URL for this delivery receipt.
   */
  url: string;

  private get _proxy(): DeliveryReceiptContext {
    this._context =
      this._context ||
      new DeliveryReceiptContextImpl(
        this._version,
        this._solution.chatServiceSid,
        this._solution.conversationSid,
        this._solution.messageSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a DeliveryReceiptInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeliveryReceiptInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DeliveryReceiptInstance) => any
  ): Promise<DeliveryReceiptInstance> {
    return this._proxy.fetch(callback);
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
      conversationSid: this.conversationSid,
      messageSid: this.messageSid,
      sid: this.sid,
      channelMessageSid: this.channelMessageSid,
      participantSid: this.participantSid,
      status: this.status,
      errorCode: this.errorCode,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface DeliveryReceiptSolution {
  chatServiceSid: string;
  conversationSid: string;
  messageSid: string;
}

export interface DeliveryReceiptListInstance {
  _version: V1;
  _solution: DeliveryReceiptSolution;
  _uri: string;

  (sid: string): DeliveryReceiptContext;
  get(sid: string): DeliveryReceiptContext;

  /**
   * Streams DeliveryReceiptInstance records from the API.
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
   * @param { DeliveryReceiptListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: DeliveryReceiptInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: DeliveryReceiptListInstanceEachOptions,
    callback?: (
      item: DeliveryReceiptInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of DeliveryReceiptInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: DeliveryReceiptPage) => any
  ): Promise<DeliveryReceiptPage>;
  /**
   * Lists DeliveryReceiptInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DeliveryReceiptListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: DeliveryReceiptInstance[]) => any
  ): Promise<DeliveryReceiptInstance[]>;
  list(
    params: DeliveryReceiptListInstanceOptions,
    callback?: (error: Error | null, items: DeliveryReceiptInstance[]) => any
  ): Promise<DeliveryReceiptInstance[]>;
  /**
   * Retrieve a single page of DeliveryReceiptInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DeliveryReceiptListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: DeliveryReceiptPage) => any
  ): Promise<DeliveryReceiptPage>;
  page(
    params: DeliveryReceiptListInstancePageOptions,
    callback?: (error: Error | null, items: DeliveryReceiptPage) => any
  ): Promise<DeliveryReceiptPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function DeliveryReceiptListInstance(
  version: V1,
  chatServiceSid: string,
  conversationSid: string,
  messageSid: string
): DeliveryReceiptListInstance {
  if (!isValidPathParam(chatServiceSid)) {
    throw new Error("Parameter 'chatServiceSid' is not valid.");
  }

  if (!isValidPathParam(conversationSid)) {
    throw new Error("Parameter 'conversationSid' is not valid.");
  }

  if (!isValidPathParam(messageSid)) {
    throw new Error("Parameter 'messageSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as DeliveryReceiptListInstance;

  instance.get = function get(sid): DeliveryReceiptContext {
    return new DeliveryReceiptContextImpl(
      version,
      chatServiceSid,
      conversationSid,
      messageSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { chatServiceSid, conversationSid, messageSid };
  instance._uri = `/Services/${chatServiceSid}/Conversations/${conversationSid}/Messages/${messageSid}/Receipts`;

  instance.page = function page(
    params?:
      | DeliveryReceiptListInstancePageOptions
      | ((error: Error | null, items: DeliveryReceiptPage) => any),
    callback?: (error: Error | null, items: DeliveryReceiptPage) => any
  ): Promise<DeliveryReceiptPage> {
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
        new DeliveryReceiptPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: DeliveryReceiptPage) => any
  ): Promise<DeliveryReceiptPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new DeliveryReceiptPage(instance._version, payload, instance._solution)
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

export class DeliveryReceiptPage extends Page<
  V1,
  DeliveryReceiptPayload,
  DeliveryReceiptResource,
  DeliveryReceiptInstance
> {
  /**
   * Initialize the DeliveryReceiptPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: DeliveryReceiptSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of DeliveryReceiptInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DeliveryReceiptResource): DeliveryReceiptInstance {
    return new DeliveryReceiptInstance(
      this._version,
      payload,
      this._solution.chatServiceSid,
      this._solution.conversationSid,
      this._solution.messageSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
