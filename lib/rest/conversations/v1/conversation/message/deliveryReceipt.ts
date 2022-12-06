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
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

type ConversationMessageReceiptDeliveryStatus =
  | "read"
  | "failed"
  | "delivered"
  | "undelivered"
  | "sent";

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
export interface DeliveryReceiptListInstanceEachOptions {
  pageSize?: number;
  callback?: (
    item: DeliveryReceiptInstance,
    done: (err?: Error) => void
  ) => void;
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
export interface DeliveryReceiptListInstanceOptions {
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
export interface DeliveryReceiptListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface DeliveryReceiptContext {
  /**
   * Fetch a DeliveryReceiptInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeliveryReceiptInstance
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
  conversationSid?: string;
  messageSid?: string;
  sid?: string;
}

export class DeliveryReceiptContextImpl implements DeliveryReceiptContext {
  protected _solution: DeliveryReceiptContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    conversationSid: string,
    messageSid: string,
    sid: string
  ) {
    if (!isValidPathParam(conversationSid)) {
      throw new Error("Parameter 'conversationSid' is not valid.");
    }

    if (!isValidPathParam(messageSid)) {
      throw new Error("Parameter 'messageSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { conversationSid, messageSid, sid };
    this._uri = `/Conversations/${conversationSid}/Messages/${messageSid}/Receipts/${sid}`;
  }

  fetch(callback?: any): Promise<DeliveryReceiptInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DeliveryReceiptInstance(
          operationVersion,
          payload,
          this._solution.conversationSid,
          this._solution.messageSid,
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

interface DeliveryReceiptPayload
  extends DeliveryReceiptResource,
    Page.TwilioResponsePayload {}

interface DeliveryReceiptResource {
  account_sid?: string | null;
  conversation_sid?: string | null;
  sid?: string | null;
  message_sid?: string | null;
  channel_message_sid?: string | null;
  participant_sid?: string | null;
  status?: ConversationMessageReceiptDeliveryStatus;
  error_code?: number | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class DeliveryReceiptInstance {
  protected _solution: DeliveryReceiptContextSolution;
  protected _context?: DeliveryReceiptContext;

  constructor(
    protected _version: V1,
    payload: DeliveryReceiptPayload,
    conversationSid: string,
    messageSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.conversationSid = payload.conversation_sid;
    this.sid = payload.sid;
    this.messageSid = payload.message_sid;
    this.channelMessageSid = payload.channel_message_sid;
    this.participantSid = payload.participant_sid;
    this.status = payload.status;
    this.errorCode = deserialize.integer(payload.error_code);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { conversationSid, messageSid, sid: sid || this.sid };
  }

  /**
   * The unique ID of the Account responsible for this participant.
   */
  accountSid?: string | null;
  /**
   * The unique ID of the Conversation for this message.
   */
  conversationSid?: string | null;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid?: string | null;
  /**
   * The SID of the message the delivery receipt belongs to
   */
  messageSid?: string | null;
  /**
   * A messaging channel-specific identifier for the message delivered to participant
   */
  channelMessageSid?: string | null;
  /**
   * The unique ID of the participant the delivery receipt belongs to.
   */
  participantSid?: string | null;
  status?: ConversationMessageReceiptDeliveryStatus;
  /**
   * The message [delivery error code](https://www.twilio.com/docs/sms/api/message-resource#delivery-related-errors) for a `failed` status
   */
  errorCode?: number | null;
  /**
   * The date that this resource was created.
   */
  dateCreated?: Date | null;
  /**
   * The date that this resource was last updated.
   */
  dateUpdated?: Date | null;
  /**
   * An absolute URL for this delivery receipt.
   */
  url?: string | null;

  private get _proxy(): DeliveryReceiptContext {
    this._context =
      this._context ||
      new DeliveryReceiptContextImpl(
        this._version,
        this._solution.conversationSid,
        this._solution.messageSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a DeliveryReceiptInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeliveryReceiptInstance
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
      conversationSid: this.conversationSid,
      sid: this.sid,
      messageSid: this.messageSid,
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

export interface DeliveryReceiptListInstance {
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
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: DeliveryReceiptInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
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
    params?: DeliveryReceiptListInstanceEachOptions,
    callback?: (
      item: DeliveryReceiptInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of DeliveryReceiptInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: DeliveryReceiptPage) => any
  ): Promise<DeliveryReceiptPage>;
  /**
   * Retrieve a single target page of DeliveryReceiptInstance records from the API.
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
    callback?: (error: Error | null, items: DeliveryReceiptPage) => any
  ): Promise<DeliveryReceiptPage>;
  getPage(params?: any, callback?: any): Promise<DeliveryReceiptPage>;
  /**
   * Lists DeliveryReceiptInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: DeliveryReceiptInstance[]) => any
  ): Promise<DeliveryReceiptInstance[]>;
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
    params?: DeliveryReceiptListInstanceOptions,
    callback?: (error: Error | null, items: DeliveryReceiptInstance[]) => any
  ): Promise<DeliveryReceiptInstance[]>;
  list(params?: any, callback?: any): Promise<DeliveryReceiptInstance[]>;
  /**
   * Retrieve a single page of DeliveryReceiptInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: DeliveryReceiptPage) => any
  ): Promise<DeliveryReceiptPage>;
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
    params: DeliveryReceiptListInstancePageOptions,
    callback?: (error: Error | null, items: DeliveryReceiptPage) => any
  ): Promise<DeliveryReceiptPage>;
  page(params?: any, callback?: any): Promise<DeliveryReceiptPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DeliveryReceiptSolution {
  conversationSid?: string;
  messageSid?: string;
}

interface DeliveryReceiptListInstanceImpl extends DeliveryReceiptListInstance {}
class DeliveryReceiptListInstanceImpl implements DeliveryReceiptListInstance {
  _version?: V1;
  _solution?: DeliveryReceiptSolution;
  _uri?: string;
}

export function DeliveryReceiptListInstance(
  version: V1,
  conversationSid: string,
  messageSid: string
): DeliveryReceiptListInstance {
  if (!isValidPathParam(conversationSid)) {
    throw new Error("Parameter 'conversationSid' is not valid.");
  }

  if (!isValidPathParam(messageSid)) {
    throw new Error("Parameter 'messageSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as DeliveryReceiptListInstanceImpl;

  instance.get = function get(sid): DeliveryReceiptContext {
    return new DeliveryReceiptContextImpl(
      version,
      conversationSid,
      messageSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { conversationSid, messageSid };
  instance._uri = `/Conversations/${conversationSid}/Messages/${messageSid}/Receipts`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<DeliveryReceiptPage> {
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
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DeliveryReceiptPage(operationVersion, payload, this._solution)
    );

    operationPromise = this._version.setPromiseCallback(
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
  ): Promise<DeliveryReceiptPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new DeliveryReceiptPage(this._version, payload, this._solution)
    );
    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

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
  getInstance(payload: DeliveryReceiptPayload): DeliveryReceiptInstance {
    return new DeliveryReceiptInstance(
      this._version,
      payload,
      this._solution.conversationSid,
      this._solution.messageSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
