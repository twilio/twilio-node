/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Content
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
import { ApprovalFetchListInstance } from "./content/approvalFetch";

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
export interface ContentListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: ContentInstance, done: (err?: Error) => void) => void;
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
export interface ContentListInstanceOptions {
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
export interface ContentListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface ContentContext {
  approvalFetch: ApprovalFetchListInstance;

  /**
   * Remove a ContentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ContentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ContentInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ContentInstance) => any
  ): Promise<ContentInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ContentContextSolution {
  sid?: string;
}

export class ContentContextImpl implements ContentContext {
  protected _solution: ContentContextSolution;
  protected _uri: string;

  protected _approvalFetch?: ApprovalFetchListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Content/${sid}`;
  }

  get approvalFetch(): ApprovalFetchListInstance {
    this._approvalFetch =
      this._approvalFetch ||
      ApprovalFetchListInstance(this._version, this._solution.sid);
    return this._approvalFetch;
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

  fetch(callback?: any): Promise<ContentInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ContentInstance(operationVersion, payload, this._solution.sid)
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

interface ContentPayload extends ContentResource, TwilioResponsePayload {}

interface ContentResource {
  date_created?: Date | null;
  date_updated?: Date | null;
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  language?: string | null;
  variables?: any | null;
  types?: any | null;
  url?: string | null;
  links?: object | null;
}

export class ContentInstance {
  protected _solution: ContentContextSolution;
  protected _context?: ContentContext;

  constructor(protected _version: V1, payload: ContentPayload, sid?: string) {
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.language = payload.language;
    this.variables = payload.variables;
    this.types = payload.types;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * A string name used to describe the Content resource
   */
  friendlyName?: string | null;
  /**
   * Two-letter language code identifying the language the Content resource is in.
   */
  language?: string | null;
  /**
   * Defines the default placeholder values for variables included in the Content resource
   */
  variables?: any | null;
  /**
   * The Content types (e.g. twilio/text) for this Content resource
   */
  types?: any | null;
  /**
   * The URL of the resource, relative to `https://content.twilio.com`
   */
  url?: string | null;
  /**
   * A list of links related to the Content resource
   */
  links?: object | null;

  private get _proxy(): ContentContext {
    this._context =
      this._context ||
      new ContentContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ContentInstance
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
   * Fetch a ContentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ContentInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ContentInstance) => any
  ): Promise<ContentInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the approvalFetch.
   */
  approvalFetch(): ApprovalFetchListInstance {
    return this._proxy.approvalFetch;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      sid: this.sid,
      accountSid: this.accountSid,
      friendlyName: this.friendlyName,
      language: this.language,
      variables: this.variables,
      types: this.types,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ContentListInstance {
  (sid: string): ContentContext;
  get(sid: string): ContentContext;

  /**
   * Streams ContentInstance records from the API.
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
    callback?: (item: ContentInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams ContentInstance records from the API.
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
   * @param { ContentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: ContentListInstanceEachOptions,
    callback?: (item: ContentInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ContentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: ContentPage) => any
  ): Promise<ContentPage>;
  /**
   * Retrieve a single target page of ContentInstance records from the API.
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
    callback?: (error: Error | null, items: ContentPage) => any
  ): Promise<ContentPage>;
  getPage(params?: any, callback?: any): Promise<ContentPage>;
  /**
   * Lists ContentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ContentInstance[]) => any
  ): Promise<ContentInstance[]>;
  /**
   * Lists ContentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ContentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: ContentListInstanceOptions,
    callback?: (error: Error | null, items: ContentInstance[]) => any
  ): Promise<ContentInstance[]>;
  list(params?: any, callback?: any): Promise<ContentInstance[]>;
  /**
   * Retrieve a single page of ContentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ContentPage) => any
  ): Promise<ContentPage>;
  /**
   * Retrieve a single page of ContentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ContentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: ContentListInstancePageOptions,
    callback?: (error: Error | null, items: ContentPage) => any
  ): Promise<ContentPage>;
  page(params?: any, callback?: any): Promise<ContentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ContentSolution {}

interface ContentListInstanceImpl extends ContentListInstance {}
class ContentListInstanceImpl implements ContentListInstance {
  _version?: V1;
  _solution?: ContentSolution;
  _uri?: string;
}

export function ContentListInstance(version: V1): ContentListInstance {
  const instance = ((sid) => instance.get(sid)) as ContentListInstanceImpl;

  instance.get = function get(sid): ContentContext {
    return new ContentContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Content`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<ContentPage> {
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
      (payload) => new ContentPage(operationVersion, payload, this._solution)
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
  ): Promise<ContentPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new ContentPage(this._version, payload, this._solution)
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

export class ContentPage extends Page<
  V1,
  ContentPayload,
  ContentResource,
  ContentInstance
> {
  /**
   * Initialize the ContentPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ContentSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ContentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ContentPayload): ContentInstance {
    return new ContentInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
