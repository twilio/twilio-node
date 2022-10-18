/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Messaging
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

type BrandVettingVettingProvider = 'campaign-verify';


/**
 * Options to pass to create a BrandVettingInstance
 *
 * @property { BrandVettingVettingProvider } vettingProvider 
 * @property { string } [vettingId] The unique ID of the vetting
 */
export interface BrandVettingListInstanceCreateOptions {
  vettingProvider: BrandVettingVettingProvider;
  vettingId?: string;
}
/**
 * Options to pass to each
 *
 * @property { BrandVettingVettingProvider } [vettingProvider] The third-party provider of the vettings to read
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
export interface BrandVettingListInstanceEachOptions {
  vettingProvider?: BrandVettingVettingProvider;
  pageSize?: number;
  callback?: (item: BrandVettingInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { BrandVettingVettingProvider } [vettingProvider] The third-party provider of the vettings to read
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface BrandVettingListInstanceOptions {
  vettingProvider?: BrandVettingVettingProvider;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { BrandVettingVettingProvider } [vettingProvider] The third-party provider of the vettings to read
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface BrandVettingListInstancePageOptions {
  vettingProvider?: BrandVettingVettingProvider;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface BrandVettingContext {


  /**
   * Fetch a BrandVettingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BrandVettingInstance
   */
  fetch(callback?: (error: Error | null, item?: BrandVettingInstance) => any): Promise<BrandVettingInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class BrandVettingContextImpl implements BrandVettingContext {
  protected _solution: BrandVettingSolution;
  protected _uri: string;


  constructor(protected _version: V1, brandSid: string, brandVettingSid: string) {
    this._solution = { brandSid, brandVettingSid };
    this._uri = `/a2p/BrandRegistrations/${brandSid}/Vettings/${brandVettingSid}`;
  }

  fetch(callback?: any): Promise<BrandVettingInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new BrandVettingInstance(operationVersion, payload, this._solution.brandSid, this._solution.brandVettingSid));
    

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

interface BrandVettingPayload extends BrandVettingResource, Page.TwilioResponsePayload {
}

interface BrandVettingResource {
  account_sid?: string | null;
  brand_sid?: string | null;
  brand_vetting_sid?: string | null;
  date_updated?: Date | null;
  date_created?: Date | null;
  vetting_id?: string | null;
  vetting_class?: string | null;
  vetting_status?: string | null;
  vetting_provider?: BrandVettingVettingProvider;
  url?: string | null;
}

export class BrandVettingInstance {
  protected _solution: BrandVettingSolution;
  protected _context?: BrandVettingContext;

  constructor(protected _version: V1, payload: BrandVettingPayload, brandSid: string, brandVettingSid?: string) {
    this.accountSid = payload.account_sid;
    this.brandSid = payload.brand_sid;
    this.brandVettingSid = payload.brand_vetting_sid;
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.vettingId = payload.vetting_id;
    this.vettingClass = payload.vetting_class;
    this.vettingStatus = payload.vetting_status;
    this.vettingProvider = payload.vetting_provider;
    this.url = payload.url;

    this._solution = { brandSid, brandVettingSid: brandVettingSid || this.brandVettingSid };
  }

  /**
   * The SID of the Account that created the vetting
   */
  accountSid?: string | null;
  /**
   * A2P BrandRegistration Sid
   */
  brandSid?: string | null;
  /**
   * SID for third-party vetting record
   */
  brandVettingSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The unique ID of the vetting
   */
  vettingId?: string | null;
  /**
   * The type of vetting
   */
  vettingClass?: string | null;
  /**
   * Status of vetting attempt
   */
  vettingStatus?: string | null;
  vettingProvider?: BrandVettingVettingProvider;
  /**
   * The absolute URL of the Brand Vetting
   */
  url?: string | null;

  private get _proxy(): BrandVettingContext {
    this._context = this._context || new BrandVettingContextImpl(this._version, this._solution.brandSid, this._solution.brandVettingSid);
    return this._context;
  }

  /**
   * Fetch a BrandVettingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BrandVettingInstance
   */
  fetch(callback?: (error: Error | null, item?: BrandVettingInstance) => any): Promise<BrandVettingInstance>
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
      brandSid: this.brandSid, 
      brandVettingSid: this.brandVettingSid, 
      dateUpdated: this.dateUpdated, 
      dateCreated: this.dateCreated, 
      vettingId: this.vettingId, 
      vettingClass: this.vettingClass, 
      vettingStatus: this.vettingStatus, 
      vettingProvider: this.vettingProvider, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface BrandVettingSolution {
  brandSid?: string;
  brandVettingSid?: string;
}

export class BrandVettingPage extends Page<V1, BrandVettingPayload, BrandVettingResource, BrandVettingInstance> {
  /**
   * Initialize the BrandVettingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: BrandVettingSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of BrandVettingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BrandVettingPayload): BrandVettingInstance {
    return new BrandVettingInstance(
      this._version,
      payload,
      this._solution.brandSid,
      this._solution.brandVettingSid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface BrandVettingListInstance {
  (brandVettingSid: string): BrandVettingContext;
  get(brandVettingSid: string): BrandVettingContext;


  /**
   * Create a BrandVettingInstance
   *
   * @param { BrandVettingListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BrandVettingInstance
   */
  create(params: BrandVettingListInstanceCreateOptions, callback?: (error: Error | null, item?: BrandVettingInstance) => any): Promise<BrandVettingInstance>;
  create(params: any, callback?: any): Promise<BrandVettingInstance>



  /**
   * Streams BrandVettingInstance records from the API.
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
  each(callback?: (item: BrandVettingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams BrandVettingInstance records from the API.
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
   * @param { BrandVettingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: BrandVettingListInstanceEachOptions, callback?: (item: BrandVettingInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of BrandVettingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: BrandVettingPage) => any): Promise<BrandVettingPage>;
  /**
   * Retrieve a single target page of BrandVettingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: BrandVettingPage) => any): Promise<BrandVettingPage>;
  getPage(params?: any, callback?: any): Promise<BrandVettingPage>;
  /**
   * Lists BrandVettingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: BrandVettingInstance[]) => any): Promise<BrandVettingInstance[]>;
  /**
   * Lists BrandVettingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BrandVettingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: BrandVettingListInstanceOptions, callback?: (error: Error | null, items: BrandVettingInstance[]) => any): Promise<BrandVettingInstance[]>;
  list(params?: any, callback?: any): Promise<BrandVettingInstance[]>;
  /**
   * Retrieve a single page of BrandVettingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: BrandVettingPage) => any): Promise<BrandVettingPage>;
  /**
   * Retrieve a single page of BrandVettingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BrandVettingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: BrandVettingListInstancePageOptions, callback?: (error: Error | null, items: BrandVettingPage) => any): Promise<BrandVettingPage>;
  page(params?: any, callback?: any): Promise<BrandVettingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface BrandVettingListInstanceImpl extends BrandVettingListInstance {}
class BrandVettingListInstanceImpl implements BrandVettingListInstance {
  _version?: V1;
  _solution?: BrandVettingSolution;
  _uri?: string;

}

export function BrandVettingListInstance(version: V1, brandSid: string): BrandVettingListInstance {
  const instance = ((brandVettingSid) => instance.get(brandVettingSid)) as BrandVettingListInstanceImpl;

  instance.get = function get(brandVettingSid): BrandVettingContext {
    return new BrandVettingContextImpl(version, brandSid, brandVettingSid);
  }

  instance._version = version;
  instance._solution = { brandSid };
  instance._uri = `/a2p/BrandRegistrations/${brandSid}/Vettings`;

  instance.create = function create(params: any, callback?: any): Promise<BrandVettingInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.vettingProvider === null || params.vettingProvider === undefined) {
      throw new Error('Required parameter "params.vettingProvider" missing.');
    }

    const data: any = {};

    data['VettingProvider'] = params.vettingProvider;
    if (params.vettingId !== undefined) data['VettingId'] = params.vettingId;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new BrandVettingInstance(operationVersion, payload, this._solution.brandSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<BrandVettingPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.vettingProvider !== undefined) data['VettingProvider'] = params.vettingProvider;
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new BrandVettingPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<BrandVettingPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new BrandVettingPage(this._version, payload, this._solution));
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

