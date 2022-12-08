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
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

type ServiceBindingBindingType = "apn" | "gcm" | "fcm";

/**
 * Options to pass to each
 *
 * @property { Array<ServiceBindingBindingType> } [bindingType] The push technology used by the Binding resources to read.  Can be: `apn`, `gcm`, or `fcm`.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
 * @property { Array<string> } [identity] The identity of a [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource) this binding belongs to. See [access tokens](https://www.twilio.com/docs/conversations/create-tokens) for more details.
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
export interface BindingListInstanceEachOptions {
  bindingType?: Array<ServiceBindingBindingType>;
  identity?: Array<string>;
  pageSize?: number;
  callback?: (item: BindingInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { Array<ServiceBindingBindingType> } [bindingType] The push technology used by the Binding resources to read.  Can be: `apn`, `gcm`, or `fcm`.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
 * @property { Array<string> } [identity] The identity of a [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource) this binding belongs to. See [access tokens](https://www.twilio.com/docs/conversations/create-tokens) for more details.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface BindingListInstanceOptions {
  bindingType?: Array<ServiceBindingBindingType>;
  identity?: Array<string>;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { Array<ServiceBindingBindingType> } [bindingType] The push technology used by the Binding resources to read.  Can be: `apn`, `gcm`, or `fcm`.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
 * @property { Array<string> } [identity] The identity of a [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource) this binding belongs to. See [access tokens](https://www.twilio.com/docs/conversations/create-tokens) for more details.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface BindingListInstancePageOptions {
  bindingType?: Array<ServiceBindingBindingType>;
  identity?: Array<string>;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface BindingContext {
  /**
   * Remove a BindingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a BindingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BindingInstance
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
  chatServiceSid?: string;
  sid?: string;
}

export class BindingContextImpl implements BindingContext {
  protected _solution: BindingContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, chatServiceSid: string, sid: string) {
    if (!isValidPathParam(chatServiceSid)) {
      throw new Error("Parameter 'chatServiceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { chatServiceSid, sid };
    this._uri = `/Services/${chatServiceSid}/Bindings/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
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

  fetch(callback?: any): Promise<BindingInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BindingInstance(
          operationVersion,
          payload,
          this._solution.chatServiceSid,
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

interface BindingPayload extends BindingResource, Page.TwilioResponsePayload {}

interface BindingResource {
  sid?: string | null;
  account_sid?: string | null;
  chat_service_sid?: string | null;
  credential_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  endpoint?: string | null;
  identity?: string | null;
  binding_type?: ServiceBindingBindingType;
  message_types?: Array<string> | null;
  url?: string | null;
}

export class BindingInstance {
  protected _solution: BindingContextSolution;
  protected _context?: BindingContext;

  constructor(
    protected _version: V1,
    payload: BindingPayload,
    chatServiceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.chatServiceSid = payload.chat_service_sid;
    this.credentialSid = payload.credential_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.endpoint = payload.endpoint;
    this.identity = payload.identity;
    this.bindingType = payload.binding_type;
    this.messageTypes = payload.message_types;
    this.url = payload.url;

    this._solution = { chatServiceSid, sid: sid || this.sid };
  }

  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid?: string | null;
  /**
   * The unique ID of the Account responsible for this binding.
   */
  accountSid?: string | null;
  /**
   * The SID of the Conversation Service that the resource is associated with.
   */
  chatServiceSid?: string | null;
  /**
   * The SID of the Credential for the binding.
   */
  credentialSid?: string | null;
  /**
   * The date that this resource was created.
   */
  dateCreated?: Date | null;
  /**
   * The date that this resource was last updated.
   */
  dateUpdated?: Date | null;
  /**
   * The unique endpoint identifier for the Binding.
   */
  endpoint?: string | null;
  /**
   * The identity of Conversation User associated with this binding.
   */
  identity?: string | null;
  bindingType?: ServiceBindingBindingType;
  /**
   * The Conversation message types the binding is subscribed to.
   */
  messageTypes?: Array<string> | null;
  /**
   * An absolute URL for this binding.
   */
  url?: string | null;

  private get _proxy(): BindingContext {
    this._context =
      this._context ||
      new BindingContextImpl(
        this._version,
        this._solution.chatServiceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a BindingInstance
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
   * Fetch a BindingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BindingInstance
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
      chatServiceSid: this.chatServiceSid,
      credentialSid: this.credentialSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      endpoint: this.endpoint,
      identity: this.identity,
      bindingType: this.bindingType,
      messageTypes: this.messageTypes,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface BindingListInstance {
  (sid: string): BindingContext;
  get(sid: string): BindingContext;

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
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: BindingInstance, done: (err?: Error) => void) => void
  ): void;
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
    params?: BindingListInstanceEachOptions,
    callback?: (item: BindingInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage>;
  /**
   * Retrieve a single target page of BindingInstance records from the API.
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
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage>;
  getPage(params?: any, callback?: any): Promise<BindingPage>;
  /**
   * Lists BindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: BindingInstance[]) => any
  ): Promise<BindingInstance[]>;
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
    params?: BindingListInstanceOptions,
    callback?: (error: Error | null, items: BindingInstance[]) => any
  ): Promise<BindingInstance[]>;
  list(params?: any, callback?: any): Promise<BindingInstance[]>;
  /**
   * Retrieve a single page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage>;
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
    params: BindingListInstancePageOptions,
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage>;
  page(params?: any, callback?: any): Promise<BindingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BindingSolution {
  chatServiceSid?: string;
}

interface BindingListInstanceImpl extends BindingListInstance {}
class BindingListInstanceImpl implements BindingListInstance {
  _version?: V1;
  _solution?: BindingSolution;
  _uri?: string;
}

export function BindingListInstance(
  version: V1,
  chatServiceSid: string
): BindingListInstance {
  if (!isValidPathParam(chatServiceSid)) {
    throw new Error("Parameter 'chatServiceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as BindingListInstanceImpl;

  instance.get = function get(sid): BindingContext {
    return new BindingContextImpl(version, chatServiceSid, sid);
  };

  instance._version = version;
  instance._solution = { chatServiceSid };
  instance._uri = `/Services/${chatServiceSid}/Bindings`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<BindingPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["bindingType"] !== undefined)
      data["BindingType"] = serialize.map(params["bindingType"], (e) => e);
    if (params["identity"] !== undefined)
      data["Identity"] = serialize.map(params["identity"], (e) => e);
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
      (payload) => new BindingPage(operationVersion, payload, this._solution)
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
  ): Promise<BindingPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new BindingPage(this._version, payload, this._solution)
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
  getInstance(payload: BindingPayload): BindingInstance {
    return new BindingInstance(
      this._version,
      payload,
      this._solution.chatServiceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
