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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

type BindingBindingType =
  | "apn"
  | "gcm"
  | "sms"
  | "fcm"
  | "facebook-messenger"
  | "alexa";

/**
 * Options to pass to create a BindingInstance
 */
export interface BindingListInstanceCreateOptions {
  /** The `identity` value that uniquely identifies the new resource\\\'s [User](https://www.twilio.com/docs/chat/rest/user-resource) within the [Service](https://www.twilio.com/docs/notify/api/service-resource). Up to 20 Bindings can be created for the same Identity in a given Service. */
  identity: string;
  /**  */
  bindingType: BindingBindingType;
  /** The channel-specific address. For APNS, the device token. For FCM and GCM, the registration token. For SMS, a phone number in E.164 format. For Facebook Messenger, the Messenger ID of the user or a phone number in E.164 format. */
  address: string;
  /** A tag that can be used to select the Bindings to notify. Repeat this parameter to specify more than one tag, up to a total of 20 tags. */
  tag?: Array<string>;
  /** The protocol version to use to send the notification. This defaults to the value of `default_xxxx_notification_protocol_version` for the protocol in the [Service](https://www.twilio.com/docs/notify/api/service-resource). The current version is `\\\"3\\\"` for `apn`, `fcm`, and `gcm` type Bindings. The parameter is not applicable to `sms` and `facebook-messenger` type Bindings as the data format is fixed. */
  notificationProtocolVersion?: string;
  /** The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) resource to be used to send notifications to this Binding. If present, this overrides the Credential specified in the Service resource. Applies to only `apn`, `fcm`, and `gcm` type Bindings. */
  credentialSid?: string;
  /** Deprecated. */
  endpoint?: string;
}
/**
 * Options to pass to each
 */
export interface BindingListInstanceEachOptions {
  /** Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. */
  startDate?: Date;
  /** Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`. */
  endDate?: Date;
  /** The [User](https://www.twilio.com/docs/chat/rest/user-resource)\'s `identity` value of the resources to read. */
  identity?: Array<string>;
  /** Only list Bindings that have all of the specified Tags. The following implicit tags are available: `all`, `apn`, `fcm`, `gcm`, `sms`, `facebook-messenger`. Up to 5 tags are allowed. */
  tag?: Array<string>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: BindingInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface BindingListInstanceOptions {
  /** Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. */
  startDate?: Date;
  /** Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`. */
  endDate?: Date;
  /** The [User](https://www.twilio.com/docs/chat/rest/user-resource)\'s `identity` value of the resources to read. */
  identity?: Array<string>;
  /** Only list Bindings that have all of the specified Tags. The following implicit tags are available: `all`, `apn`, `fcm`, `gcm`, `sms`, `facebook-messenger`. Up to 5 tags are allowed. */
  tag?: Array<string>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface BindingListInstancePageOptions {
  /** Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. */
  startDate?: Date;
  /** Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`. */
  endDate?: Date;
  /** The [User](https://www.twilio.com/docs/chat/rest/user-resource)\'s `identity` value of the resources to read. */
  identity?: Array<string>;
  /** Only list Bindings that have all of the specified Tags. The following implicit tags are available: `all`, `apn`, `fcm`, `gcm`, `sms`, `facebook-messenger`. Up to 5 tags are allowed. */
  tag?: Array<string>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface BindingContext {
  /**
   * Remove a BindingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a BindingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BindingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BindingInstance) => any
  ): Promise<BindingInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BindingContextSolution {
  serviceSid: string;
  sid: string;
}

export class BindingContextImpl implements BindingContext {
  protected _solution: BindingContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Bindings/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
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

  fetch(
    callback?: (error: Error | null, item?: BindingInstance) => any
  ): Promise<BindingInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BindingInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
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

interface BindingPayload extends TwilioResponsePayload {
  bindings: BindingResource[];
}

interface BindingResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  credential_sid: string;
  date_created: Date;
  date_updated: Date;
  notification_protocol_version: string;
  endpoint: string;
  identity: string;
  binding_type: string;
  address: string;
  tags: Array<string>;
  url: string;
  links: object;
}

export class BindingInstance {
  protected _solution: BindingContextSolution;
  protected _context?: BindingContext;

  constructor(
    protected _version: V1,
    payload: BindingResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.credentialSid = payload.credential_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.notificationProtocolVersion = payload.notification_protocol_version;
    this.endpoint = payload.endpoint;
    this.identity = payload.identity;
    this.bindingType = payload.binding_type;
    this.address = payload.address;
    this.tags = payload.tags;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The SID of the Service that the resource is associated with
   */
  serviceSid: string;
  /**
   * The SID of the Credential resource to be used to send notifications to this Binding
   */
  credentialSid: string;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated: Date;
  /**
   * The protocol version to use to send the notification
   */
  notificationProtocolVersion: string;
  /**
   * Deprecated
   */
  endpoint: string;
  /**
   * The `identity` value that identifies the new resource\'s User
   */
  identity: string;
  /**
   * The type of the Binding
   */
  bindingType: string;
  /**
   * The channel-specific address
   */
  address: string;
  /**
   * The list of tags associated with this Binding
   */
  tags: Array<string>;
  /**
   * The absolute URL of the Binding resource
   */
  url: string;
  /**
   * The URLs of related resources
   */
  links: object;

  private get _proxy(): BindingContext {
    this._context =
      this._context ||
      new BindingContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a BindingInstance
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
   * Fetch a BindingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BindingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BindingInstance) => any
  ): Promise<BindingInstance> {
    return this._proxy.fetch(callback);
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
      credentialSid: this.credentialSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      notificationProtocolVersion: this.notificationProtocolVersion,
      endpoint: this.endpoint,
      identity: this.identity,
      bindingType: this.bindingType,
      address: this.address,
      tags: this.tags,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface BindingSolution {
  serviceSid: string;
}

export interface BindingListInstance {
  _version: V1;
  _solution: BindingSolution;
  _uri: string;

  (sid: string): BindingContext;
  get(sid: string): BindingContext;

  /**
   * Create a BindingInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BindingInstance
   */
  create(
    params: BindingListInstanceCreateOptions,
    callback?: (error: Error | null, item?: BindingInstance) => any
  ): Promise<BindingInstance>;

  /**
   * Streams BindingInstance records from the API.
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
   * @param { BindingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: BindingInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: BindingListInstanceEachOptions,
    callback?: (item: BindingInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage>;
  /**
   * Lists BindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BindingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: BindingInstance[]) => any
  ): Promise<BindingInstance[]>;
  list(
    params: BindingListInstanceOptions,
    callback?: (error: Error | null, items: BindingInstance[]) => any
  ): Promise<BindingInstance[]>;
  /**
   * Retrieve a single page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BindingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage>;
  page(
    params: BindingListInstancePageOptions,
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function BindingListInstance(
  version: V1,
  serviceSid: string
): BindingListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as BindingListInstance;

  instance.get = function get(sid): BindingContext {
    return new BindingContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Bindings`;

  instance.create = function create(
    params: BindingListInstanceCreateOptions,
    callback?: (error: Error | null, item?: BindingInstance) => any
  ): Promise<BindingInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["identity"] === null || params["identity"] === undefined) {
      throw new Error("Required parameter \"params['identity']\" missing.");
    }

    if (params["bindingType"] === null || params["bindingType"] === undefined) {
      throw new Error("Required parameter \"params['bindingType']\" missing.");
    }

    if (params["address"] === null || params["address"] === undefined) {
      throw new Error("Required parameter \"params['address']\" missing.");
    }

    let data: any = {};

    data["Identity"] = params["identity"];

    data["BindingType"] = params["bindingType"];

    data["Address"] = params["address"];
    if (params["tag"] !== undefined)
      data["Tag"] = serialize.map(params["tag"], (e) => e);
    if (params["notificationProtocolVersion"] !== undefined)
      data["NotificationProtocolVersion"] =
        params["notificationProtocolVersion"];
    if (params["credentialSid"] !== undefined)
      data["CredentialSid"] = params["credentialSid"];
    if (params["endpoint"] !== undefined) data["Endpoint"] = params["endpoint"];

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
        new BindingInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | BindingListInstancePageOptions
      | ((error: Error | null, item?: BindingPage) => any),
    callback?: (error: Error | null, item?: BindingPage) => any
  ): Promise<BindingPage> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: BindingPage) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["startDate"] !== undefined)
      data["StartDate"] = serialize.iso8601Date(params["startDate"]);
    if (params["endDate"] !== undefined)
      data["EndDate"] = serialize.iso8601Date(params["endDate"]);
    if (params["identity"] !== undefined)
      data["Identity"] = serialize.map(params["identity"], (e) => e);
    if (params["tag"] !== undefined)
      data["Tag"] = serialize.map(params["tag"], (e) => e);
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
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
        new BindingPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new BindingPage(instance._version, payload, instance._solution)
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

export class BindingPage extends Page<
  V1,
  BindingPayload,
  BindingResource,
  BindingInstance
> {
  /**
   * Initialize the BindingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: BindingSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of BindingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BindingResource): BindingInstance {
    return new BindingInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
