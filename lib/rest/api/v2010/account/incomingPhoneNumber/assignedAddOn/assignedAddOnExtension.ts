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
import Page from "../../../../../../base/Page";
import Response from "../../../../../../http/response";
import V2010 from "../../../../V2010";
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");

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
export interface AssignedAddOnExtensionListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: AssignedAddOnExtensionInstance, done: (err?: Error) => void) => void;
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
export interface AssignedAddOnExtensionListInstanceOptions {
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
export interface AssignedAddOnExtensionListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}




export interface AssignedAddOnExtensionListInstance {
  (sid: string): AssignedAddOnExtensionContext;
  get(sid: string): AssignedAddOnExtensionContext;



  /**
   * Streams AssignedAddOnExtensionInstance records from the API.
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
  each(callback?: (item: AssignedAddOnExtensionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams AssignedAddOnExtensionInstance records from the API.
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
   * @param { AssignedAddOnExtensionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: AssignedAddOnExtensionListInstanceEachOptions, callback?: (item: AssignedAddOnExtensionInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of AssignedAddOnExtensionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: AssignedAddOnExtensionPage) => any): Promise<AssignedAddOnExtensionPage>;
  /**
   * Retrieve a single target page of AssignedAddOnExtensionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AssignedAddOnExtensionPage) => any): Promise<AssignedAddOnExtensionPage>;
  getPage(params?: any, callback?: any): Promise<AssignedAddOnExtensionPage>;
  /**
   * Lists AssignedAddOnExtensionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: AssignedAddOnExtensionInstance[]) => any): Promise<AssignedAddOnExtensionInstance[]>;
  /**
   * Lists AssignedAddOnExtensionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssignedAddOnExtensionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: AssignedAddOnExtensionListInstanceOptions, callback?: (error: Error | null, items: AssignedAddOnExtensionInstance[]) => any): Promise<AssignedAddOnExtensionInstance[]>;
  list(params?: any, callback?: any): Promise<AssignedAddOnExtensionInstance[]>;
  /**
   * Retrieve a single page of AssignedAddOnExtensionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: AssignedAddOnExtensionPage) => any): Promise<AssignedAddOnExtensionPage>;
  /**
   * Retrieve a single page of AssignedAddOnExtensionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssignedAddOnExtensionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: AssignedAddOnExtensionListInstancePageOptions, callback?: (error: Error | null, items: AssignedAddOnExtensionPage) => any): Promise<AssignedAddOnExtensionPage>;
  page(params?: any, callback?: any): Promise<AssignedAddOnExtensionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface AssignedAddOnExtensionListInstanceImpl extends AssignedAddOnExtensionListInstance {}
class AssignedAddOnExtensionListInstanceImpl implements AssignedAddOnExtensionListInstance {
  _version?: V2010;
  _solution?: AssignedAddOnExtensionSolution;
  _uri?: string;

}

export function AssignedAddOnExtensionListInstance(version: V2010, accountSid: string, resourceSid: string, assignedAddOnSid: string): AssignedAddOnExtensionListInstance {
  const instance = ((sid) => instance.get(sid)) as AssignedAddOnExtensionListInstanceImpl;

  instance.get = function get(sid): AssignedAddOnExtensionContext {
    return new AssignedAddOnExtensionContextImpl(version, accountSid, resourceSid, assignedAddOnSid, sid);
  }

  instance._version = version;
  instance._solution = { accountSid, resourceSid, assignedAddOnSid };
  instance._uri = `/Accounts/${accountSid}/IncomingPhoneNumbers/${resourceSid}/AssignedAddOns/${assignedAddOnSid}/Extensions.json`;

  instance.page = function page(params?: any, callback?: any): Promise<AssignedAddOnExtensionPage> {
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
    
    operationPromise = operationPromise.then(payload => new AssignedAddOnExtensionPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<AssignedAddOnExtensionPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new AssignedAddOnExtensionPage(this._version, payload, this._solution));
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


export interface AssignedAddOnExtensionContext {


  /**
   * Fetch a AssignedAddOnExtensionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssignedAddOnExtensionInstance
   */
  fetch(callback?: (error: Error | null, item?: AssignedAddOnExtensionInstance) => any): Promise<AssignedAddOnExtensionInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class AssignedAddOnExtensionContextImpl implements AssignedAddOnExtensionContext {
  protected _solution: AssignedAddOnExtensionSolution;
  protected _uri: string;


  constructor(protected _version: V2010, accountSid: string, resourceSid: string, assignedAddOnSid: string, sid: string) {
    this._solution = { accountSid, resourceSid, assignedAddOnSid, sid };
    this._uri = `/Accounts/${accountSid}/IncomingPhoneNumbers/${resourceSid}/AssignedAddOns/${assignedAddOnSid}/Extensions/${sid}.json`;
  }

  fetch(callback?: any): Promise<AssignedAddOnExtensionInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new AssignedAddOnExtensionInstance(operationVersion, payload, this._solution.accountSid, this._solution.resourceSid, this._solution.assignedAddOnSid, this._solution.sid));
    

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

interface AssignedAddOnExtensionPayload extends AssignedAddOnExtensionResource, Page.TwilioResponsePayload {
}

interface AssignedAddOnExtensionResource {
  sid?: string | null;
  account_sid?: string | null;
  resource_sid?: string | null;
  assigned_add_on_sid?: string | null;
  friendly_name?: string | null;
  product_name?: string | null;
  unique_name?: string | null;
  uri?: string | null;
  enabled?: boolean | null;
}

export class AssignedAddOnExtensionInstance {
  protected _solution: AssignedAddOnExtensionSolution;
  protected _context?: AssignedAddOnExtensionContext;

  constructor(protected _version: V2010, payload: AssignedAddOnExtensionPayload, accountSid: string, resourceSid: string, assignedAddOnSid: string, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.resourceSid = payload.resource_sid;
    this.assignedAddOnSid = payload.assigned_add_on_sid;
    this.friendlyName = payload.friendly_name;
    this.productName = payload.product_name;
    this.uniqueName = payload.unique_name;
    this.uri = payload.uri;
    this.enabled = payload.enabled;

    this._solution = { accountSid, resourceSid, assignedAddOnSid, sid: sid || this.sid };
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
   * The SID of the Phone Number to which the Add-on is assigned
   */
  resourceSid?: string | null;
  /**
   * The SID that uniquely identifies the assigned Add-on installation
   */
  assignedAddOnSid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * A string that you assigned to describe the Product this Extension is used within
   */
  productName?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;
  /**
   * Whether the Extension will be invoked
   */
  enabled?: boolean | null;

  private get _proxy(): AssignedAddOnExtensionContext {
    this._context = this._context || new AssignedAddOnExtensionContextImpl(this._version, this._solution.accountSid, this._solution.resourceSid, this._solution.assignedAddOnSid, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a AssignedAddOnExtensionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssignedAddOnExtensionInstance
   */
  fetch(callback?: (error: Error | null, item?: AssignedAddOnExtensionInstance) => any): Promise<AssignedAddOnExtensionInstance>
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
      sid: this.sid, 
      accountSid: this.accountSid, 
      resourceSid: this.resourceSid, 
      assignedAddOnSid: this.assignedAddOnSid, 
      friendlyName: this.friendlyName, 
      productName: this.productName, 
      uniqueName: this.uniqueName, 
      uri: this.uri, 
      enabled: this.enabled
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface AssignedAddOnExtensionSolution {
  accountSid?: string;
  resourceSid?: string;
  assignedAddOnSid?: string;
  sid?: string;
}

export class AssignedAddOnExtensionPage extends Page<V2010, AssignedAddOnExtensionPayload, AssignedAddOnExtensionResource, AssignedAddOnExtensionInstance> {
  /**
   * Initialize the AssignedAddOnExtensionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: AssignedAddOnExtensionSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AssignedAddOnExtensionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AssignedAddOnExtensionPayload): AssignedAddOnExtensionInstance {
    return new AssignedAddOnExtensionInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.resourceSid,
      this._solution.assignedAddOnSid,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

