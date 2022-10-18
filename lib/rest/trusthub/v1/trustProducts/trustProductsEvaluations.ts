/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trusthub
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

type TrustProductEvaluationStatus = 'compliant'|'noncompliant';


/**
 * Options to pass to create a TrustProductsEvaluationsInstance
 *
 * @property { string } policySid The unique string of a policy that is associated to the customer_profile resource.
 */
export interface TrustProductsEvaluationsListInstanceCreateOptions {
  policySid: string;
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
export interface TrustProductsEvaluationsListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: TrustProductsEvaluationsInstance, done: (err?: Error) => void) => void;
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
export interface TrustProductsEvaluationsListInstanceOptions {
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
export interface TrustProductsEvaluationsListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface TrustProductsEvaluationsContext {


  /**
   * Fetch a TrustProductsEvaluationsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrustProductsEvaluationsInstance
   */
  fetch(callback?: (error: Error | null, item?: TrustProductsEvaluationsInstance) => any): Promise<TrustProductsEvaluationsInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class TrustProductsEvaluationsContextImpl implements TrustProductsEvaluationsContext {
  protected _solution: TrustProductsEvaluationsSolution;
  protected _uri: string;


  constructor(protected _version: V1, trustProductSid: string, sid: string) {
    this._solution = { trustProductSid, sid };
    this._uri = `/TrustProducts/${trustProductSid}/Evaluations/${sid}`;
  }

  fetch(callback?: any): Promise<TrustProductsEvaluationsInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new TrustProductsEvaluationsInstance(operationVersion, payload, this._solution.trustProductSid, this._solution.sid));
    

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

interface TrustProductsEvaluationsPayload extends TrustProductsEvaluationsResource, Page.TwilioResponsePayload {
}

interface TrustProductsEvaluationsResource {
  sid?: string | null;
  account_sid?: string | null;
  policy_sid?: string | null;
  trust_product_sid?: string | null;
  status?: TrustProductEvaluationStatus;
  results?: Array<any> | null;
  date_created?: Date | null;
  url?: string | null;
}

export class TrustProductsEvaluationsInstance {
  protected _solution: TrustProductsEvaluationsSolution;
  protected _context?: TrustProductsEvaluationsContext;

  constructor(protected _version: V1, payload: TrustProductsEvaluationsPayload, trustProductSid: string, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.policySid = payload.policy_sid;
    this.trustProductSid = payload.trust_product_sid;
    this.status = payload.status;
    this.results = payload.results;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { trustProductSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the Evaluation resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The unique string of a policy
   */
  policySid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  trustProductSid?: string | null;
  status?: TrustProductEvaluationStatus;
  /**
   * The results of the Evaluation resource
   */
  results?: Array<any> | null;
  dateCreated?: Date | null;
  url?: string | null;

  private get _proxy(): TrustProductsEvaluationsContext {
    this._context = this._context || new TrustProductsEvaluationsContextImpl(this._version, this._solution.trustProductSid, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a TrustProductsEvaluationsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrustProductsEvaluationsInstance
   */
  fetch(callback?: (error: Error | null, item?: TrustProductsEvaluationsInstance) => any): Promise<TrustProductsEvaluationsInstance>
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
      policySid: this.policySid, 
      trustProductSid: this.trustProductSid, 
      status: this.status, 
      results: this.results, 
      dateCreated: this.dateCreated, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface TrustProductsEvaluationsSolution {
  trustProductSid?: string;
  sid?: string;
}

export class TrustProductsEvaluationsPage extends Page<V1, TrustProductsEvaluationsPayload, TrustProductsEvaluationsResource, TrustProductsEvaluationsInstance> {
  /**
   * Initialize the TrustProductsEvaluationsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: TrustProductsEvaluationsSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of TrustProductsEvaluationsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TrustProductsEvaluationsPayload): TrustProductsEvaluationsInstance {
    return new TrustProductsEvaluationsInstance(
      this._version,
      payload,
      this._solution.trustProductSid,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface TrustProductsEvaluationsListInstance {
  (sid: string): TrustProductsEvaluationsContext;
  get(sid: string): TrustProductsEvaluationsContext;


  /**
   * Create a TrustProductsEvaluationsInstance
   *
   * @param { TrustProductsEvaluationsListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrustProductsEvaluationsInstance
   */
  create(params: TrustProductsEvaluationsListInstanceCreateOptions, callback?: (error: Error | null, item?: TrustProductsEvaluationsInstance) => any): Promise<TrustProductsEvaluationsInstance>;
  create(params: any, callback?: any): Promise<TrustProductsEvaluationsInstance>



  /**
   * Streams TrustProductsEvaluationsInstance records from the API.
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
  each(callback?: (item: TrustProductsEvaluationsInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams TrustProductsEvaluationsInstance records from the API.
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
   * @param { TrustProductsEvaluationsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: TrustProductsEvaluationsListInstanceEachOptions, callback?: (item: TrustProductsEvaluationsInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of TrustProductsEvaluationsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: TrustProductsEvaluationsPage) => any): Promise<TrustProductsEvaluationsPage>;
  /**
   * Retrieve a single target page of TrustProductsEvaluationsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: TrustProductsEvaluationsPage) => any): Promise<TrustProductsEvaluationsPage>;
  getPage(params?: any, callback?: any): Promise<TrustProductsEvaluationsPage>;
  /**
   * Lists TrustProductsEvaluationsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: TrustProductsEvaluationsInstance[]) => any): Promise<TrustProductsEvaluationsInstance[]>;
  /**
   * Lists TrustProductsEvaluationsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TrustProductsEvaluationsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: TrustProductsEvaluationsListInstanceOptions, callback?: (error: Error | null, items: TrustProductsEvaluationsInstance[]) => any): Promise<TrustProductsEvaluationsInstance[]>;
  list(params?: any, callback?: any): Promise<TrustProductsEvaluationsInstance[]>;
  /**
   * Retrieve a single page of TrustProductsEvaluationsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: TrustProductsEvaluationsPage) => any): Promise<TrustProductsEvaluationsPage>;
  /**
   * Retrieve a single page of TrustProductsEvaluationsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TrustProductsEvaluationsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: TrustProductsEvaluationsListInstancePageOptions, callback?: (error: Error | null, items: TrustProductsEvaluationsPage) => any): Promise<TrustProductsEvaluationsPage>;
  page(params?: any, callback?: any): Promise<TrustProductsEvaluationsPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface TrustProductsEvaluationsListInstanceImpl extends TrustProductsEvaluationsListInstance {}
class TrustProductsEvaluationsListInstanceImpl implements TrustProductsEvaluationsListInstance {
  _version?: V1;
  _solution?: TrustProductsEvaluationsSolution;
  _uri?: string;

}

export function TrustProductsEvaluationsListInstance(version: V1, trustProductSid: string): TrustProductsEvaluationsListInstance {
  const instance = ((sid) => instance.get(sid)) as TrustProductsEvaluationsListInstanceImpl;

  instance.get = function get(sid): TrustProductsEvaluationsContext {
    return new TrustProductsEvaluationsContextImpl(version, trustProductSid, sid);
  }

  instance._version = version;
  instance._solution = { trustProductSid };
  instance._uri = `/TrustProducts/${trustProductSid}/Evaluations`;

  instance.create = function create(params: any, callback?: any): Promise<TrustProductsEvaluationsInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.policySid === null || params.policySid === undefined) {
      throw new Error('Required parameter "params.policySid" missing.');
    }

    const data: any = {};

    data['PolicySid'] = params.policySid;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new TrustProductsEvaluationsInstance(operationVersion, payload, this._solution.trustProductSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<TrustProductsEvaluationsPage> {
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
    
    operationPromise = operationPromise.then(payload => new TrustProductsEvaluationsPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<TrustProductsEvaluationsPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new TrustProductsEvaluationsPage(this._version, payload, this._solution));
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

