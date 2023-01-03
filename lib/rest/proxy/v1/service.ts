/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Proxy
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
import { PhoneNumberListInstance } from "./service/phoneNumber";
import { SessionListInstance } from "./service/session";
import { ShortCodeListInstance } from "./service/shortCode";

type ServiceGeoMatchLevel = "area-code" | "overlay" | "radius" | "country";

type ServiceNumberSelectionBehavior = "avoid-sticky" | "prefer-sticky";

/**
 * Options to pass to update a ServiceInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. This value must be 191 characters or fewer in length and be unique. **This value should not have PII.**
 * @property { number } [defaultTtl] The default `ttl` value to set for Sessions created in the Service. The TTL (time to live) is measured in seconds after the Session\\\'s last create or last Interaction. The default value of `0` indicates an unlimited Session length. You can override a Session\\\'s default TTL value by setting its `ttl` value.
 * @property { string } [callbackUrl] The URL we should call when the interaction status changes.
 * @property { ServiceGeoMatchLevel } [geoMatchLevel]
 * @property { ServiceNumberSelectionBehavior } [numberSelectionBehavior]
 * @property { string } [interceptCallbackUrl] The URL we call on each interaction. If we receive a 403 status, we block the interaction; otherwise the interaction continues.
 * @property { string } [outOfSessionCallbackUrl] The URL we should call when an inbound call or SMS action occurs on a closed or non-existent Session. If your server (or a Twilio [function](https://www.twilio.com/functions)) responds with valid [TwiML](https://www.twilio.com/docs/voice/twiml), we will process it. This means it is possible, for example, to play a message for a call, send an automated text message response, or redirect a call to another Phone Number. See [Out-of-Session Callback Response Guide](https://www.twilio.com/docs/proxy/out-session-callback-response-guide) for more information.
 * @property { string } [chatInstanceSid] The SID of the Chat Service Instance managed by Proxy Service. The Chat Service enables Proxy to forward SMS and channel messages to this chat instance. This is a one-to-one relationship.
 */
export interface ServiceContextUpdateOptions {
  uniqueName?: string;
  defaultTtl?: number;
  callbackUrl?: string;
  geoMatchLevel?: ServiceGeoMatchLevel;
  numberSelectionBehavior?: ServiceNumberSelectionBehavior;
  interceptCallbackUrl?: string;
  outOfSessionCallbackUrl?: string;
  chatInstanceSid?: string;
}

/**
 * Options to pass to create a ServiceInstance
 *
 * @property { string } uniqueName An application-defined string that uniquely identifies the resource. This value must be 191 characters or fewer in length and be unique. **This value should not have PII.**
 * @property { number } [defaultTtl] The default `ttl` value to set for Sessions created in the Service. The TTL (time to live) is measured in seconds after the Session\\\'s last create or last Interaction. The default value of `0` indicates an unlimited Session length. You can override a Session\\\'s default TTL value by setting its `ttl` value.
 * @property { string } [callbackUrl] The URL we should call when the interaction status changes.
 * @property { ServiceGeoMatchLevel } [geoMatchLevel]
 * @property { ServiceNumberSelectionBehavior } [numberSelectionBehavior]
 * @property { string } [interceptCallbackUrl] The URL we call on each interaction. If we receive a 403 status, we block the interaction; otherwise the interaction continues.
 * @property { string } [outOfSessionCallbackUrl] The URL we should call when an inbound call or SMS action occurs on a closed or non-existent Session. If your server (or a Twilio [function](https://www.twilio.com/functions)) responds with valid [TwiML](https://www.twilio.com/docs/voice/twiml), we will process it. This means it is possible, for example, to play a message for a call, send an automated text message response, or redirect a call to another Phone Number. See [Out-of-Session Callback Response Guide](https://www.twilio.com/docs/proxy/out-session-callback-response-guide) for more information.
 * @property { string } [chatInstanceSid] The SID of the Chat Service Instance managed by Proxy Service. The Chat Service enables Proxy to forward SMS and channel messages to this chat instance. This is a one-to-one relationship.
 */
export interface ServiceListInstanceCreateOptions {
  uniqueName: string;
  defaultTtl?: number;
  callbackUrl?: string;
  geoMatchLevel?: ServiceGeoMatchLevel;
  numberSelectionBehavior?: ServiceNumberSelectionBehavior;
  interceptCallbackUrl?: string;
  outOfSessionCallbackUrl?: string;
  chatInstanceSid?: string;
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
  phoneNumbers: PhoneNumberListInstance;
  sessions: SessionListInstance;
  shortCodes: ShortCodeListInstance;

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

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ServiceContextSolution {
  sid?: string;
}

export class ServiceContextImpl implements ServiceContext {
  protected _solution: ServiceContextSolution;
  protected _uri: string;

  protected _phoneNumbers?: PhoneNumberListInstance;
  protected _sessions?: SessionListInstance;
  protected _shortCodes?: ShortCodeListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Services/${sid}`;
  }

  get phoneNumbers(): PhoneNumberListInstance {
    this._phoneNumbers =
      this._phoneNumbers ||
      PhoneNumberListInstance(this._version, this._solution.sid);
    return this._phoneNumbers;
  }

  get sessions(): SessionListInstance {
    this._sessions =
      this._sessions || SessionListInstance(this._version, this._solution.sid);
    return this._sessions;
  }

  get shortCodes(): ShortCodeListInstance {
    this._shortCodes =
      this._shortCodes ||
      ShortCodeListInstance(this._version, this._solution.sid);
    return this._shortCodes;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ServiceInstance(operationVersion, payload, this._solution.sid)
    );

    operationPromise = this._version.setPromiseCallback(
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
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: ServiceInstance) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["defaultTtl"] !== undefined)
      data["DefaultTtl"] = params["defaultTtl"];
    if (params["callbackUrl"] !== undefined)
      data["CallbackUrl"] = params["callbackUrl"];
    if (params["geoMatchLevel"] !== undefined)
      data["GeoMatchLevel"] = params["geoMatchLevel"];
    if (params["numberSelectionBehavior"] !== undefined)
      data["NumberSelectionBehavior"] = params["numberSelectionBehavior"];
    if (params["interceptCallbackUrl"] !== undefined)
      data["InterceptCallbackUrl"] = params["interceptCallbackUrl"];
    if (params["outOfSessionCallbackUrl"] !== undefined)
      data["OutOfSessionCallbackUrl"] = params["outOfSessionCallbackUrl"];
    if (params["chatInstanceSid"] !== undefined)
      data["ChatInstanceSid"] = params["chatInstanceSid"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ServiceInstance(operationVersion, payload, this._solution.sid)
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

interface ServicePayload extends TwilioResponsePayload {
  services: ServiceResource[];
}

interface ServiceResource {
  sid?: string | null;
  unique_name?: string | null;
  account_sid?: string | null;
  chat_instance_sid?: string | null;
  callback_url?: string | null;
  default_ttl?: number | null;
  number_selection_behavior?: ServiceNumberSelectionBehavior;
  geo_match_level?: ServiceGeoMatchLevel;
  intercept_callback_url?: string | null;
  out_of_session_callback_url?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class ServiceInstance {
  protected _solution: ServiceContextSolution;
  protected _context?: ServiceContext;

  constructor(protected _version: V1, payload: ServiceResource, sid?: string) {
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.accountSid = payload.account_sid;
    this.chatInstanceSid = payload.chat_instance_sid;
    this.callbackUrl = payload.callback_url;
    this.defaultTtl = deserialize.integer(payload.default_ttl);
    this.numberSelectionBehavior = payload.number_selection_behavior;
    this.geoMatchLevel = payload.geo_match_level;
    this.interceptCallbackUrl = payload.intercept_callback_url;
    this.outOfSessionCallbackUrl = payload.out_of_session_callback_url;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Chat Service Instance
   */
  chatInstanceSid?: string | null;
  /**
   * The URL we call when the interaction status changes
   */
  callbackUrl?: string | null;
  /**
   * Default TTL for a Session, in seconds
   */
  defaultTtl?: number | null;
  numberSelectionBehavior?: ServiceNumberSelectionBehavior;
  geoMatchLevel?: ServiceGeoMatchLevel;
  /**
   * The URL we call on each interaction
   */
  interceptCallbackUrl?: string | null;
  /**
   * The URL we call when an inbound call or SMS action occurs on a closed or non-existent Session
   */
  outOfSessionCallbackUrl?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the Service resource
   */
  url?: string | null;
  /**
   * The URLs of resources related to the Service
   */
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
   * @param { ServiceContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(
    params?: ServiceContextUpdateOptions,
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the phoneNumbers.
   */
  phoneNumbers(): PhoneNumberListInstance {
    return this._proxy.phoneNumbers;
  }

  /**
   * Access the sessions.
   */
  sessions(): SessionListInstance {
    return this._proxy.sessions;
  }

  /**
   * Access the shortCodes.
   */
  shortCodes(): ShortCodeListInstance {
    return this._proxy.shortCodes;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      uniqueName: this.uniqueName,
      accountSid: this.accountSid,
      chatInstanceSid: this.chatInstanceSid,
      callbackUrl: this.callbackUrl,
      defaultTtl: this.defaultTtl,
      numberSelectionBehavior: this.numberSelectionBehavior,
      geoMatchLevel: this.geoMatchLevel,
      interceptCallbackUrl: this.interceptCallbackUrl,
      outOfSessionCallbackUrl: this.outOfSessionCallbackUrl,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ServiceListInstance {
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

export interface ServiceSolution {}

interface ServiceListInstanceImpl extends ServiceListInstance {}
class ServiceListInstanceImpl implements ServiceListInstance {
  _version?: V1;
  _solution?: ServiceSolution;
  _uri?: string;
}

export function ServiceListInstance(version: V1): ServiceListInstance {
  const instance = ((sid) => instance.get(sid)) as ServiceListInstanceImpl;

  instance.get = function get(sid): ServiceContext {
    return new ServiceContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Services`;

  instance.create = function create(
    params: ServiceListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["uniqueName"] === null || params["uniqueName"] === undefined) {
      throw new Error("Required parameter \"params['uniqueName']\" missing.");
    }

    let data: any = {};

    data["UniqueName"] = params["uniqueName"];
    if (params["defaultTtl"] !== undefined)
      data["DefaultTtl"] = params["defaultTtl"];
    if (params["callbackUrl"] !== undefined)
      data["CallbackUrl"] = params["callbackUrl"];
    if (params["geoMatchLevel"] !== undefined)
      data["GeoMatchLevel"] = params["geoMatchLevel"];
    if (params["numberSelectionBehavior"] !== undefined)
      data["NumberSelectionBehavior"] = params["numberSelectionBehavior"];
    if (params["interceptCallbackUrl"] !== undefined)
      data["InterceptCallbackUrl"] = params["interceptCallbackUrl"];
    if (params["outOfSessionCallbackUrl"] !== undefined)
      data["OutOfSessionCallbackUrl"] = params["outOfSessionCallbackUrl"];
    if (params["chatInstanceSid"] !== undefined)
      data["ChatInstanceSid"] = params["chatInstanceSid"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new ServiceInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | ServiceListInstancePageOptions
      | ((error: Error | null, item?: ServicePage) => any),
    callback?: (error: Error | null, item?: ServicePage) => any
  ): Promise<ServicePage> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: ServicePage) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
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
      (payload) => new ServicePage(operationVersion, payload, this._solution)
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
    targetUrl: string,
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new ServicePage(this._version, payload, this._solution)
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
