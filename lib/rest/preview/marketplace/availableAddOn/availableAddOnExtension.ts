/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import Marketplace from "../../Marketplace";
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
export interface AvailableAddOnExtensionListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: AvailableAddOnExtensionInstance, done: (err?: Error) => void) => void;
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
export interface AvailableAddOnExtensionListInstanceOptions {
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
export interface AvailableAddOnExtensionListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface AvailableAddOnExtensionListInstance {
  (sid: string): AvailableAddOnExtensionContext;
  get(sid: string): AvailableAddOnExtensionContext;



  /**
   * Streams AvailableAddOnExtensionInstance records from the API.
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
  each(callback?: (item: AvailableAddOnExtensionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams AvailableAddOnExtensionInstance records from the API.
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
   * @param { AvailableAddOnExtensionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: AvailableAddOnExtensionListInstanceEachOptions, callback?: (item: AvailableAddOnExtensionInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of AvailableAddOnExtensionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: AvailableAddOnExtensionPage) => any): Promise<AvailableAddOnExtensionPage>;
  /**
   * Retrieve a single target page of AvailableAddOnExtensionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AvailableAddOnExtensionPage) => any): Promise<AvailableAddOnExtensionPage>;
  getPage(params?: any, callback?: any): Promise<AvailableAddOnExtensionPage>;
  /**
   * Lists AvailableAddOnExtensionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: AvailableAddOnExtensionInstance[]) => any): Promise<AvailableAddOnExtensionInstance[]>;
  /**
   * Lists AvailableAddOnExtensionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AvailableAddOnExtensionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: AvailableAddOnExtensionListInstanceOptions, callback?: (error: Error | null, items: AvailableAddOnExtensionInstance[]) => any): Promise<AvailableAddOnExtensionInstance[]>;
  list(params?: any, callback?: any): Promise<AvailableAddOnExtensionInstance[]>;
  /**
   * Retrieve a single page of AvailableAddOnExtensionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: AvailableAddOnExtensionPage) => any): Promise<AvailableAddOnExtensionPage>;
  /**
   * Retrieve a single page of AvailableAddOnExtensionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AvailableAddOnExtensionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: AvailableAddOnExtensionListInstancePageOptions, callback?: (error: Error | null, items: AvailableAddOnExtensionPage) => any): Promise<AvailableAddOnExtensionPage>;
  page(params?: any, callback?: any): Promise<AvailableAddOnExtensionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface AvailableAddOnExtensionListInstanceImpl extends AvailableAddOnExtensionListInstance {}
class AvailableAddOnExtensionListInstanceImpl implements AvailableAddOnExtensionListInstance {
  _version?: Marketplace;
  _solution?: AvailableAddOnExtensionSolution;
  _uri?: string;

}

export function AvailableAddOnExtensionListInstance(version: Marketplace, availableAddOnSid: string): AvailableAddOnExtensionListInstance {
  const instance = ((sid) => instance.get(sid)) as AvailableAddOnExtensionListInstanceImpl;

  instance.get = function get(sid): AvailableAddOnExtensionContext {
    return new AvailableAddOnExtensionContextImpl(version, availableAddOnSid, sid);
  }

  instance._version = version;
  instance._solution = { availableAddOnSid };
  instance._uri = `/AvailableAddOns/${availableAddOnSid}/Extensions`;

  instance.page = function page(params?: any, callback?: any): Promise<AvailableAddOnExtensionPage> {
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
    
    operationPromise = operationPromise.then(payload => new AvailableAddOnExtensionPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<AvailableAddOnExtensionPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new AvailableAddOnExtensionPage(this._version, payload, this._solution));
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


export interface AvailableAddOnExtensionContext {


  /**
   * Fetch a AvailableAddOnExtensionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AvailableAddOnExtensionInstance
   */
  fetch(callback?: (error: Error | null, item?: AvailableAddOnExtensionInstance) => any): Promise<AvailableAddOnExtensionInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class AvailableAddOnExtensionContextImpl implements AvailableAddOnExtensionContext {
  protected _solution: AvailableAddOnExtensionSolution;
  protected _uri: string;


  constructor(protected _version: Marketplace, availableAddOnSid: string, sid: string) {
    this._solution = { availableAddOnSid, sid };
    this._uri = `/AvailableAddOns/${availableAddOnSid}/Extensions/${sid}`;
  }

  fetch(callback?: any): Promise<AvailableAddOnExtensionInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new AvailableAddOnExtensionInstance(operationVersion, payload, this._solution.availableAddOnSid, this._solution.sid));
    

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

interface AvailableAddOnExtensionPayload extends AvailableAddOnExtensionResource, Page.TwilioResponsePayload {
}

interface AvailableAddOnExtensionResource {
  sid?: string | null;
  available_add_on_sid?: string | null;
  friendly_name?: string | null;
  product_name?: string | null;
  unique_name?: string | null;
  url?: string | null;
}

export class AvailableAddOnExtensionInstance {
  protected _solution: AvailableAddOnExtensionSolution;
  protected _context?: AvailableAddOnExtensionContext;

  constructor(protected _version: Marketplace, payload: AvailableAddOnExtensionPayload, availableAddOnSid: string, sid?: string) {
    this.sid = payload.sid;
    this.availableAddOnSid = payload.available_add_on_sid;
    this.friendlyName = payload.friendly_name;
    this.productName = payload.product_name;
    this.uniqueName = payload.unique_name;
    this.url = payload.url;

    this._solution = { availableAddOnSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the AvailableAddOn resource to which this extension applies
   */
  availableAddOnSid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * The name of the Extension\'s Product
   */
  productName?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): AvailableAddOnExtensionContext {
    this._context = this._context || new AvailableAddOnExtensionContextImpl(this._version, this._solution.availableAddOnSid, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a AvailableAddOnExtensionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AvailableAddOnExtensionInstance
   */
  fetch(callback?: (error: Error | null, item?: AvailableAddOnExtensionInstance) => any): Promise<AvailableAddOnExtensionInstance>
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
      availableAddOnSid: this.availableAddOnSid, 
      friendlyName: this.friendlyName, 
      productName: this.productName, 
      uniqueName: this.uniqueName, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface AvailableAddOnExtensionSolution {
  availableAddOnSid?: string;
  sid?: string;
}

export class AvailableAddOnExtensionPage extends Page<Marketplace, AvailableAddOnExtensionPayload, AvailableAddOnExtensionResource, AvailableAddOnExtensionInstance> {
  /**
   * Initialize the AvailableAddOnExtensionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Marketplace, response: Response<string>, solution: AvailableAddOnExtensionSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AvailableAddOnExtensionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AvailableAddOnExtensionPayload): AvailableAddOnExtensionInstance {
    return new AvailableAddOnExtensionInstance(
      this._version,
      payload,
      this._solution.availableAddOnSid,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

