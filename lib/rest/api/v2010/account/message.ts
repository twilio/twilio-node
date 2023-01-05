/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { FeedbackListInstance } from "./message/feedback";
import { MediaListInstance } from "./message/media";

type MessageAddressRetention = "retain";

type MessageContentRetention = "retain";

type MessageDirection =
  | "inbound"
  | "outbound-api"
  | "outbound-call"
  | "outbound-reply";

type MessageScheduleType = "fixed";

type MessageStatus =
  | "queued"
  | "sending"
  | "sent"
  | "failed"
  | "delivered"
  | "undelivered"
  | "receiving"
  | "received"
  | "accepted"
  | "scheduled"
  | "read"
  | "partially_delivered"
  | "canceled";

type MessageUpdateStatus = "canceled";

/**
 * Options to pass to update a MessageInstance
 */
export interface MessageContextUpdateOptions {
  /** The text of the message you want to send. Can be up to 1,600 characters long. */
  body?: string;
  /**  */
  status?: MessageUpdateStatus;
}

/**
 * Options to pass to create a MessageInstance
 */
export interface MessageListInstanceCreateOptions {
  /** The destination phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format for SMS/MMS or [Channel user address](https://www.twilio.com/docs/sms/channels#channel-addresses) for other 3rd-party channels. */
  to: string;
  /** The URL we should call using the `status_callback_method` to send status information to your application. If specified, we POST these message status changes to the URL: `queued`, `failed`, `sent`, `delivered`, or `undelivered`. Twilio will POST its [standard request parameters](https://www.twilio.com/docs/sms/twiml#request-parameters) as well as some additional parameters including `MessageSid`, `MessageStatus`, and `ErrorCode`. If you include this parameter with the `messaging_service_sid`, we use this URL instead of the Status Callback URL of the [Messaging Service](https://www.twilio.com/docs/sms/services/api). URLs must contain a valid hostname and underscores are not allowed. */
  statusCallback?: string;
  /** The SID of the application that should receive message status. We POST a `message_sid` parameter and a `message_status` parameter with a value of `sent` or `failed` to the [application](https://www.twilio.com/docs/usage/api/applications)\\\'s `message_status_callback`. If a `status_callback` parameter is also passed, it will be ignored and the application\\\'s `message_status_callback` parameter will be used. */
  applicationSid?: string;
  /** The maximum total price in US dollars that you will pay for the message to be delivered. Can be a decimal value that has up to 4 decimal places. All messages are queued for delivery and the message cost is checked before the message is sent. If the cost exceeds `max_price`, the message will fail and a status of `Failed` is sent to the status callback. If `MaxPrice` is not set, the message cost is not checked. */
  maxPrice?: number;
  /** Whether to confirm delivery of the message. Set this value to `true` if you are sending messages that have a trackable user action and you intend to confirm delivery of the message using the [Message Feedback API](https://www.twilio.com/docs/sms/api/message-feedback-resource). This parameter is `false` by default. */
  provideFeedback?: boolean;
  /** Total number of attempts made ( including this ) to send out the message regardless of the provider used */
  attempt?: number;
  /** How long in seconds the message can remain in our outgoing message queue. After this period elapses, the message fails and we call your status callback. Can be between 1 and the default value of 14,400 seconds. After a message has been accepted by a carrier, however, we cannot guarantee that the message will not be queued after this period. We recommend that this value be at least 5 seconds. */
  validityPeriod?: number;
  /** Reserved */
  forceDelivery?: boolean;
  /**  */
  contentRetention?: MessageContentRetention;
  /**  */
  addressRetention?: MessageAddressRetention;
  /** Whether to detect Unicode characters that have a similar GSM-7 character and replace them. Can be: `true` or `false`. */
  smartEncoded?: boolean;
  /** Rich actions for Channels Messages. */
  persistentAction?: Array<string>;
  /** Determines the usage of Click Tracking. Setting it to `true` will instruct Twilio to replace all links in the Message with a shortened version based on the associated Domain Sid and track clicks on them. If this parameter is not set on an API call, we will use the value set on the Messaging Service. If this parameter is not set and the value is not configured on the Messaging Service used this will default to `false`. */
  shortenUrls?: boolean;
  /**  */
  scheduleType?: MessageScheduleType;
  /** The time that Twilio will send the message. Must be in ISO 8601 format. */
  sendAt?: Date;
  /** If set to True, Twilio will deliver the message as a single MMS message, regardless of the presence of media. */
  sendAsMms?: boolean;
  /** The SID of the Content object returned at Content API content create time (https://www.twilio.com/docs/content-api/create-and-send-your-first-content-api-template#create-a-template). If this parameter is not specified, then the Content API will not be utilized. */
  contentSid?: string;
  /** Key-value pairs of variable names to substitution values, used alongside a content_sid. If not specified, Content API will default to the default variables defined at create time. */
  contentVariables?: string;
  /** A Twilio phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, an [alphanumeric sender ID](https://www.twilio.com/docs/sms/send-messages#use-an-alphanumeric-sender-id), or a [Channel Endpoint address](https://www.twilio.com/docs/sms/channels#channel-addresses) that is enabled for the type of message you want to send. Phone numbers or [short codes](https://www.twilio.com/docs/sms/api/short-code) purchased from Twilio also work here. You cannot, for example, spoof messages from a private cell phone number. If you are using `messaging_service_sid`, this parameter must be empty. */
  from?: string;
  /** The SID of the [Messaging Service](https://www.twilio.com/docs/sms/services#send-a-message-with-copilot) you want to associate with the Message. Set this parameter to use the [Messaging Service Settings and Copilot Features](https://www.twilio.com/console/sms/services) you have configured and leave the `from` parameter empty. When only this parameter is set, Twilio will use your enabled Copilot Features to select the `from` phone number for delivery. */
  messagingServiceSid?: string;
  /** The text of the message you want to send. Can be up to 1,600 characters in length. */
  body?: string;
  /** The URL of the media to send with the message. The media can be of type `gif`, `png`, and `jpeg` and will be formatted correctly on the recipient\\\'s device. The media size limit is 5MB for supported file types (JPEG, PNG, GIF) and 500KB for [other types](https://www.twilio.com/docs/sms/accepted-mime-types) of accepted media. To send more than one image in the message body, provide multiple `media_url` parameters in the POST request. You can include up to 10 `media_url` parameters per message. You can send images in an SMS message in only the US and Canada. */
  mediaUrl?: Array<string>;
}
/**
 * Options to pass to each
 */
export interface MessageListInstanceEachOptions {
  /** Read messages sent to only this phone number. */
  to?: string;
  /** Read messages sent from only this phone number or alphanumeric sender ID. */
  from?: string;
  /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
  dateSent?: Date;
  /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
  dateSentBefore?: Date;
  /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
  dateSentAfter?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: MessageInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface MessageListInstanceOptions {
  /** Read messages sent to only this phone number. */
  to?: string;
  /** Read messages sent from only this phone number or alphanumeric sender ID. */
  from?: string;
  /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
  dateSent?: Date;
  /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
  dateSentBefore?: Date;
  /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
  dateSentAfter?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface MessageListInstancePageOptions {
  /** Read messages sent to only this phone number. */
  to?: string;
  /** Read messages sent from only this phone number or alphanumeric sender ID. */
  from?: string;
  /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
  dateSent?: Date;
  /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
  dateSentBefore?: Date;
  /** The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date. */
  dateSentAfter?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface MessageContext {
  feedback: FeedbackListInstance;
  media: MediaListInstance;

  /**
   * Remove a MessageInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a MessageInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MessageInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;

  /**
   * Update a MessageInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MessageInstance
   */
  update(
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;
  /**
   * Update a MessageInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MessageInstance
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
  accountSid: string;
  sid: string;
}

export class MessageContextImpl implements MessageContext {
  protected _solution: MessageContextSolution;
  protected _uri: string;

  protected _feedback?: FeedbackListInstance;
  protected _media?: MediaListInstance;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/Messages/${sid}.json`;
  }

  get feedback(): FeedbackListInstance {
    this._feedback =
      this._feedback ||
      FeedbackListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._feedback;
  }

  get media(): MediaListInstance {
    this._media =
      this._media ||
      MediaListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._media;
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
          instance._solution.accountSid,
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
    if (params["status"] !== undefined) data["Status"] = params["status"];

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
        new MessageInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
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
  body: string;
  num_segments: string;
  direction: MessageDirection;
  from: string;
  to: string;
  date_updated: Date;
  price: string;
  error_message: string;
  uri: string;
  account_sid: string;
  num_media: string;
  status: MessageStatus;
  messaging_service_sid: string;
  sid: string;
  date_sent: Date;
  date_created: Date;
  error_code: number;
  price_unit: string;
  api_version: string;
  subresource_uris: object;
}

export class MessageInstance {
  protected _solution: MessageContextSolution;
  protected _context?: MessageContext;

  constructor(
    protected _version: V2010,
    payload: MessageResource,
    accountSid: string,
    sid?: string
  ) {
    this.body = payload.body;
    this.numSegments = payload.num_segments;
    this.direction = payload.direction;
    this.from = payload.from;
    this.to = payload.to;
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.price = payload.price;
    this.errorMessage = payload.error_message;
    this.uri = payload.uri;
    this.accountSid = payload.account_sid;
    this.numMedia = payload.num_media;
    this.status = payload.status;
    this.messagingServiceSid = payload.messaging_service_sid;
    this.sid = payload.sid;
    this.dateSent = deserialize.rfc2822DateTime(payload.date_sent);
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.errorCode = deserialize.integer(payload.error_code);
    this.priceUnit = payload.price_unit;
    this.apiVersion = payload.api_version;
    this.subresourceUris = payload.subresource_uris;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The message text
   */
  body: string;
  /**
   * The number of messages used to deliver the message body
   */
  numSegments: string;
  direction: MessageDirection;
  /**
   * The phone number that initiated the message
   */
  from: string;
  /**
   * The phone number that received the message
   */
  to: string;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated: Date;
  /**
   * The amount billed for the message
   */
  price: string;
  /**
   * The description of the error_code
   */
  errorMessage: string;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri: string;
  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The number of media files associated with the message
   */
  numMedia: string;
  status: MessageStatus;
  /**
   * The SID of the Messaging Service used with the message.
   */
  messagingServiceSid: string;
  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The RFC 2822 date and time in GMT when the message was sent
   */
  dateSent: Date;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated: Date;
  /**
   * The error code associated with the message
   */
  errorCode: number;
  /**
   * The currency in which price is measured
   */
  priceUnit: string;
  /**
   * The API version used to process the message
   */
  apiVersion: string;
  /**
   * A list of related resources identified by their relative URIs
   */
  subresourceUris: object;

  private get _proxy(): MessageContext {
    this._context =
      this._context ||
      new MessageContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a MessageInstance
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
   * Fetch a MessageInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MessageInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a MessageInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MessageInstance
   */
  update(
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;
  /**
   * Update a MessageInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MessageInstance
   */
  update(
    params: MessageContextUpdateOptions,
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;
  update(params?: any, callback?: any): Promise<MessageInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the feedback.
   */
  feedback(): FeedbackListInstance {
    return this._proxy.feedback;
  }

  /**
   * Access the media.
   */
  media(): MediaListInstance {
    return this._proxy.media;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      body: this.body,
      numSegments: this.numSegments,
      direction: this.direction,
      from: this.from,
      to: this.to,
      dateUpdated: this.dateUpdated,
      price: this.price,
      errorMessage: this.errorMessage,
      uri: this.uri,
      accountSid: this.accountSid,
      numMedia: this.numMedia,
      status: this.status,
      messagingServiceSid: this.messagingServiceSid,
      sid: this.sid,
      dateSent: this.dateSent,
      dateCreated: this.dateCreated,
      errorCode: this.errorCode,
      priceUnit: this.priceUnit,
      apiVersion: this.apiVersion,
      subresourceUris: this.subresourceUris,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface MessageSolution {
  accountSid: string;
}

export interface MessageListInstance {
  _version: V2010;
  _solution: MessageSolution;
  _uri: string;

  (sid: string): MessageContext;
  get(sid: string): MessageContext;

  /**
   * Create a MessageInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MessageInstance
   */
  create(
    params: MessageListInstanceCreateOptions,
    callback?: (error: Error | null, item?: MessageInstance) => any
  ): Promise<MessageInstance>;
  create(params: any, callback?: any): Promise<MessageInstance>;

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
  version: V2010,
  accountSid: string
): MessageListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as MessageListInstance;

  instance.get = function get(sid): MessageContext {
    return new MessageContextImpl(version, accountSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Messages.json`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<MessageInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["to"] === null || params["to"] === undefined) {
      throw new Error("Required parameter \"params['to']\" missing.");
    }

    let data: any = {};

    data["To"] = params["to"];
    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["applicationSid"] !== undefined)
      data["ApplicationSid"] = params["applicationSid"];
    if (params["maxPrice"] !== undefined) data["MaxPrice"] = params["maxPrice"];
    if (params["provideFeedback"] !== undefined)
      data["ProvideFeedback"] = serialize.bool(params["provideFeedback"]);
    if (params["attempt"] !== undefined) data["Attempt"] = params["attempt"];
    if (params["validityPeriod"] !== undefined)
      data["ValidityPeriod"] = params["validityPeriod"];
    if (params["forceDelivery"] !== undefined)
      data["ForceDelivery"] = serialize.bool(params["forceDelivery"]);
    if (params["contentRetention"] !== undefined)
      data["ContentRetention"] = params["contentRetention"];
    if (params["addressRetention"] !== undefined)
      data["AddressRetention"] = params["addressRetention"];
    if (params["smartEncoded"] !== undefined)
      data["SmartEncoded"] = serialize.bool(params["smartEncoded"]);
    if (params["persistentAction"] !== undefined)
      data["PersistentAction"] = serialize.map(
        params["persistentAction"],
        (e: string) => e
      );
    if (params["shortenUrls"] !== undefined)
      data["ShortenUrls"] = serialize.bool(params["shortenUrls"]);
    if (params["scheduleType"] !== undefined)
      data["ScheduleType"] = params["scheduleType"];
    if (params["sendAt"] !== undefined)
      data["SendAt"] = serialize.iso8601DateTime(params["sendAt"]);
    if (params["sendAsMms"] !== undefined)
      data["SendAsMms"] = serialize.bool(params["sendAsMms"]);
    if (params["contentSid"] !== undefined)
      data["ContentSid"] = params["contentSid"];
    if (params["contentVariables"] !== undefined)
      data["ContentVariables"] = params["contentVariables"];
    if (params["from"] !== undefined) data["From"] = params["from"];
    if (params["messagingServiceSid"] !== undefined)
      data["MessagingServiceSid"] = params["messagingServiceSid"];
    if (params["body"] !== undefined) data["Body"] = params["body"];
    if (params["mediaUrl"] !== undefined)
      data["MediaUrl"] = serialize.map(params["mediaUrl"], (e: string) => e);

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
      (payload) =>
        new MessageInstance(
          operationVersion,
          payload,
          instance._solution.accountSid
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

    if (params["to"] !== undefined) data["To"] = params["to"];
    if (params["from"] !== undefined) data["From"] = params["from"];
    if (params["dateSent"] !== undefined)
      data["DateSent"] = serialize.iso8601DateTime(params["dateSent"]);
    if (params["dateSentBefore"] !== undefined)
      data["DateSent<"] = serialize.iso8601DateTime(params["dateSentBefore"]);
    if (params["dateSentAfter"] !== undefined)
      data["DateSent>"] = serialize.iso8601DateTime(params["dateSentAfter"]);
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
  V2010,
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
    version: V2010,
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
      this._solution.accountSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
