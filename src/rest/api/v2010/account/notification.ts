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

/**
 * Options to pass to each
 */
export interface NotificationListInstanceEachOptions {
  /** Only read notifications of the specified log level. Can be:  `0` to read only ERROR notifications or `1` to read only WARNING notifications. By default, all notifications are read. */
  log?: number;
  /** Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
  messageDate?: Date;
  /** Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
  messageDateBefore?: Date;
  /** Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
  messageDateAfter?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: NotificationInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface NotificationListInstanceOptions {
  /** Only read notifications of the specified log level. Can be:  `0` to read only ERROR notifications or `1` to read only WARNING notifications. By default, all notifications are read. */
  log?: number;
  /** Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
  messageDate?: Date;
  /** Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
  messageDateBefore?: Date;
  /** Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
  messageDateAfter?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface NotificationListInstancePageOptions {
  /** Only read notifications of the specified log level. Can be:  `0` to read only ERROR notifications or `1` to read only WARNING notifications. By default, all notifications are read. */
  log?: number;
  /** Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
  messageDate?: Date;
  /** Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
  messageDateBefore?: Date;
  /** Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
  messageDateAfter?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
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
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface NotificationContextSolution {
  accountSid: string;
  sid: string;
}

export class NotificationContextImpl implements NotificationContext {
  protected _solution: NotificationContextSolution;
  protected _uri: string;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/Notifications/${sid}.json`;
  }

  fetch(
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

    operationPromise = operationPromise.then(
      (payload) =>
        new NotificationInstance(
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

interface NotificationPayload extends TwilioResponsePayload {
  notifications: NotificationResource[];
}

interface NotificationResource {
  account_sid: string;
  api_version: string;
  call_sid: string;
  date_created: Date;
  date_updated: Date;
  error_code: string;
  log: string;
  message_date: Date;
  message_text: string;
  more_info: string;
  request_method: string;
  request_url: string;
  request_variables: string;
  response_body: string;
  response_headers: string;
  sid: string;
  uri: string;
}

export class NotificationInstance {
  protected _solution: NotificationContextSolution;
  protected _context?: NotificationContext;

  constructor(
    protected _version: V2010,
    payload: NotificationResource,
    accountSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.apiVersion = payload.api_version;
    this.callSid = payload.call_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.errorCode = payload.error_code;
    this.log = payload.log;
    this.messageDate = deserialize.rfc2822DateTime(payload.message_date);
    this.messageText = payload.message_text;
    this.moreInfo = payload.more_info;
    this.requestMethod = payload.request_method;
    this.requestUrl = payload.request_url;
    this.requestVariables = payload.request_variables;
    this.responseBody = payload.response_body;
    this.responseHeaders = payload.response_headers;
    this.sid = payload.sid;
    this.uri = payload.uri;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Notification resource.
   */
  accountSid: string;
  /**
   * The API version used to generate the notification. Can be empty for events that don\'t have a specific API version, such as incoming phone calls.
   */
  apiVersion: string;
  /**
   * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Notification resource is associated with.
   */
  callSid: string;
  /**
   * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * A unique error code for the error condition that is described in our [Error Dictionary](https://www.twilio.com/docs/api/errors).
   */
  errorCode: string;
  /**
   * An integer log level that corresponds to the type of notification: `0` is ERROR, `1` is WARNING.
   */
  log: string;
  /**
   * The date the notification was actually generated in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. Message buffering can cause this value to differ from `date_created`.
   */
  messageDate: Date;
  /**
   * The text of the notification.
   */
  messageText: string;
  /**
   * The URL for more information about the error condition. This value is a page in our [Error Dictionary](https://www.twilio.com/docs/api/errors).
   */
  moreInfo: string;
  /**
   * The HTTP method used to generate the notification. If the notification was generated during a phone call, this is the HTTP Method used to request the resource on your server. If the notification was generated by your use of our REST API, this is the HTTP method used to call the resource on our servers.
   */
  requestMethod: string;
  /**
   * The URL of the resource that generated the notification. If the notification was generated during a phone call, this is the URL of the resource on your server that caused the notification. If the notification was generated by your use of our REST API, this is the URL of the resource you called.
   */
  requestUrl: string;
  /**
   * The HTTP GET or POST variables we sent to your server. However, if the notification was generated by our REST API, this contains the HTTP POST or PUT variables you sent to our API.
   */
  requestVariables: string;
  /**
   * The HTTP body returned by your server.
   */
  responseBody: string;
  /**
   * The HTTP headers returned by your server.
   */
  responseHeaders: string;
  /**
   * The unique string that that we created to identify the Notification resource.
   */
  sid: string;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`.
   */
  uri: string;

  private get _proxy(): NotificationContext {
    this._context =
      this._context ||
      new NotificationContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
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
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      apiVersion: this.apiVersion,
      callSid: this.callSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      errorCode: this.errorCode,
      log: this.log,
      messageDate: this.messageDate,
      messageText: this.messageText,
      moreInfo: this.moreInfo,
      requestMethod: this.requestMethod,
      requestUrl: this.requestUrl,
      requestVariables: this.requestVariables,
      responseBody: this.responseBody,
      responseHeaders: this.responseHeaders,
      sid: this.sid,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface NotificationSolution {
  accountSid: string;
}

export interface NotificationListInstance {
  _version: V2010;
  _solution: NotificationSolution;
  _uri: string;

  (sid: string): NotificationContext;
  get(sid: string): NotificationContext;

  /**
   * Streams NotificationInstance records from the API.
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
   * @param { NotificationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: NotificationInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: NotificationListInstanceEachOptions,
    callback?: (item: NotificationInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of NotificationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: NotificationPage) => any
  ): Promise<NotificationPage>;
  /**
   * Lists NotificationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { NotificationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: NotificationInstance[]) => any
  ): Promise<NotificationInstance[]>;
  list(
    params: NotificationListInstanceOptions,
    callback?: (error: Error | null, items: NotificationInstance[]) => any
  ): Promise<NotificationInstance[]>;
  /**
   * Retrieve a single page of NotificationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { NotificationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: NotificationPage) => any
  ): Promise<NotificationPage>;
  page(
    params: NotificationListInstancePageOptions,
    callback?: (error: Error | null, items: NotificationPage) => any
  ): Promise<NotificationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function NotificationListInstance(
  version: V2010,
  accountSid: string
): NotificationListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as NotificationListInstance;

  instance.get = function get(sid): NotificationContext {
    return new NotificationContextImpl(version, accountSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Notifications.json`;

  instance.page = function page(
    params?:
      | NotificationListInstancePageOptions
      | ((error: Error | null, items: NotificationPage) => any),
    callback?: (error: Error | null, items: NotificationPage) => any
  ): Promise<NotificationPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["log"] !== undefined) data["Log"] = params["log"];
    if (params["messageDate"] !== undefined)
      data["MessageDate"] = serialize.iso8601Date(params["messageDate"]);
    if (params["messageDateBefore"] !== undefined)
      data["MessageDate<"] = serialize.iso8601Date(params["messageDateBefore"]);
    if (params["messageDateAfter"] !== undefined)
      data["MessageDate>"] = serialize.iso8601Date(params["messageDateAfter"]);
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
        new NotificationPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: NotificationPage) => any
  ): Promise<NotificationPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new NotificationPage(instance._version, payload, instance._solution)
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

export class NotificationPage extends Page<
  V2010,
  NotificationPayload,
  NotificationResource,
  NotificationInstance
> {
  /**
   * Initialize the NotificationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: NotificationSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of NotificationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: NotificationResource): NotificationInstance {
    return new NotificationInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
