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
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");

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
export interface AuthorizedConnectAppListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: AuthorizedConnectAppInstance, done: (err?: Error) => void) => void;
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
export interface AuthorizedConnectAppListInstanceOptions {
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
export interface AuthorizedConnectAppListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}




export interface AuthorizedConnectAppListInstance {
  (connectAppSid: string): AuthorizedConnectAppContext;
  get(connectAppSid: string): AuthorizedConnectAppContext;



  /**
   * Streams AuthorizedConnectAppInstance records from the API.
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
  each(callback?: (item: AuthorizedConnectAppInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams AuthorizedConnectAppInstance records from the API.
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
   * @param { AuthorizedConnectAppListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: AuthorizedConnectAppListInstanceEachOptions, callback?: (item: AuthorizedConnectAppInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of AuthorizedConnectAppInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: AuthorizedConnectAppPage) => any): Promise<AuthorizedConnectAppPage>;
  /**
   * Retrieve a single target page of AuthorizedConnectAppInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AuthorizedConnectAppPage) => any): Promise<AuthorizedConnectAppPage>;
  getPage(params?: any, callback?: any): Promise<AuthorizedConnectAppPage>;
  /**
   * Lists AuthorizedConnectAppInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: AuthorizedConnectAppInstance[]) => any): Promise<AuthorizedConnectAppInstance[]>;
  /**
   * Lists AuthorizedConnectAppInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AuthorizedConnectAppListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: AuthorizedConnectAppListInstanceOptions, callback?: (error: Error | null, items: AuthorizedConnectAppInstance[]) => any): Promise<AuthorizedConnectAppInstance[]>;
  list(params?: any, callback?: any): Promise<AuthorizedConnectAppInstance[]>;
  /**
   * Retrieve a single page of AuthorizedConnectAppInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: AuthorizedConnectAppPage) => any): Promise<AuthorizedConnectAppPage>;
  /**
   * Retrieve a single page of AuthorizedConnectAppInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AuthorizedConnectAppListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: AuthorizedConnectAppListInstancePageOptions, callback?: (error: Error | null, items: AuthorizedConnectAppPage) => any): Promise<AuthorizedConnectAppPage>;
  page(params?: any, callback?: any): Promise<AuthorizedConnectAppPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface AuthorizedConnectAppListInstanceImpl extends AuthorizedConnectAppListInstance {}
class AuthorizedConnectAppListInstanceImpl implements AuthorizedConnectAppListInstance {
  _version?: V2010;
  _solution?: AuthorizedConnectAppSolution;
  _uri?: string;

}

export function AuthorizedConnectAppListInstance(version: V2010, accountSid: string): AuthorizedConnectAppListInstance {
  const instance = ((connectAppSid) => instance.get(connectAppSid)) as AuthorizedConnectAppListInstanceImpl;

  instance.get = function get(connectAppSid): AuthorizedConnectAppContext {
    return new AuthorizedConnectAppContextImpl(version, accountSid, connectAppSid);
  }

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/AuthorizedConnectApps.json`;

  instance.page = function page(params?: any, callback?: any): Promise<AuthorizedConnectAppPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new AuthorizedConnectAppPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<AuthorizedConnectAppPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new AuthorizedConnectAppPage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }



  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}


export interface AuthorizedConnectAppContext {


  /**
   * Fetch a AuthorizedConnectAppInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AuthorizedConnectAppInstance
   */
  fetch(callback?: (error: Error | null, item?: AuthorizedConnectAppInstance) => any): Promise<AuthorizedConnectAppInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class AuthorizedConnectAppContextImpl implements AuthorizedConnectAppContext {
  protected _solution: AuthorizedConnectAppSolution;
  protected _uri: string;


  constructor(protected _version: V2010, accountSid: string, connectAppSid: string) {
    this._solution = { accountSid, connectAppSid };
    this._uri = `/Accounts/${accountSid}/AuthorizedConnectApps/${connectAppSid}.json`;
  }

  fetch(callback?: any): Promise<AuthorizedConnectAppInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new AuthorizedConnectAppInstance(operationVersion, payload, this._solution.accountSid, this._solution.connectAppSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
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

interface AuthorizedConnectAppPayload extends AuthorizedConnectAppResource, Page.TwilioResponsePayload {
}

interface AuthorizedConnectAppResource {
  account_sid?: string | null;
  connect_app_company_name?: string | null;
  connect_app_description?: string | null;
  connect_app_friendly_name?: string | null;
  connect_app_homepage_url?: string | null;
  connect_app_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  permissions?: Array<object> | null;
  uri?: string | null;
}

export class AuthorizedConnectAppInstance {
  protected _solution: AuthorizedConnectAppSolution;
  protected _context?: AuthorizedConnectAppContext;

  constructor(protected _version: V2010, payload: AuthorizedConnectAppPayload, accountSid: string, connectAppSid?: string) {
    this.accountSid = payload.account_sid;
    this.connectAppCompanyName = payload.connect_app_company_name;
    this.connectAppDescription = payload.connect_app_description;
    this.connectAppFriendlyName = payload.connect_app_friendly_name;
    this.connectAppHomepageUrl = payload.connect_app_homepage_url;
    this.connectAppSid = payload.connect_app_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.permissions = payload.permissions;
    this.uri = payload.uri;

    this._solution = { accountSid, connectAppSid: connectAppSid || this.connectAppSid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The company name set for the Connect App
   */
  connectAppCompanyName?: string | null;
  /**
   * A detailed description of the app
   */
  connectAppDescription?: string | null;
  /**
   * The name of the Connect App
   */
  connectAppFriendlyName?: string | null;
  /**
   * The public URL for the Connect App
   */
  connectAppHomepageUrl?: string | null;
  /**
   * The SID that we assigned to the Connect App
   */
  connectAppSid?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated?: string | null;
  /**
   * Permissions authorized to the app
   */
  permissions?: Array<object> | null;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;

  private get _proxy(): AuthorizedConnectAppContext {
    this._context = this._context || new AuthorizedConnectAppContextImpl(this._version, this._solution.accountSid, this._solution.connectAppSid);
    return this._context;
  }

  /**
   * Fetch a AuthorizedConnectAppInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AuthorizedConnectAppInstance
   */
  fetch(callback?: (error: Error | null, item?: AuthorizedConnectAppInstance) => any): Promise<AuthorizedConnectAppInstance>
     {
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
      connectAppCompanyName: this.connectAppCompanyName, 
      connectAppDescription: this.connectAppDescription, 
      connectAppFriendlyName: this.connectAppFriendlyName, 
      connectAppHomepageUrl: this.connectAppHomepageUrl, 
      connectAppSid: this.connectAppSid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      permissions: this.permissions, 
      uri: this.uri
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface AuthorizedConnectAppSolution {
  accountSid?: string;
  connectAppSid?: string;
}

export class AuthorizedConnectAppPage extends Page<V2010, AuthorizedConnectAppPayload, AuthorizedConnectAppResource, AuthorizedConnectAppInstance> {
  /**
   * Initialize the AuthorizedConnectAppPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: AuthorizedConnectAppSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AuthorizedConnectAppInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AuthorizedConnectAppPayload): AuthorizedConnectAppInstance {
    return new AuthorizedConnectAppInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.connectAppSid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

