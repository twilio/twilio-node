/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");

type EvaluationStatus = 'compliant'|'noncompliant';

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
export interface EvaluationListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: EvaluationInstance, done: (err?: Error) => void) => void;
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
export interface EvaluationListInstanceOptions {
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
export interface EvaluationListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface EvaluationContext {


  /**
   * Fetch a EvaluationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EvaluationInstance
   */
  fetch(callback?: (error: Error | null, item?: EvaluationInstance) => any): Promise<EvaluationInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class EvaluationContextImpl implements EvaluationContext {
  protected _solution: EvaluationSolution;
  protected _uri: string;


  constructor(protected _version: V2, bundleSid: string, sid: string) {
    this._solution = { bundleSid, sid };
    this._uri = `/RegulatoryCompliance/Bundles/${bundleSid}/Evaluations/${sid}`;
  }

  fetch(callback?: any): Promise<EvaluationInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new EvaluationInstance(operationVersion, payload, this._solution.bundleSid, this._solution.sid));
    

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

interface EvaluationPayload extends EvaluationResource, Page.TwilioResponsePayload {
}

interface EvaluationResource {
  sid?: string | null;
  account_sid?: string | null;
  regulation_sid?: string | null;
  bundle_sid?: string | null;
  status?: EvaluationStatus;
  results?: Array<any> | null;
  date_created?: Date | null;
  url?: string | null;
}

export class EvaluationInstance {
  protected _solution: EvaluationSolution;
  protected _context?: EvaluationContext;

  constructor(protected _version: V2, payload: EvaluationPayload, bundleSid: string, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.regulationSid = payload.regulation_sid;
    this.bundleSid = payload.bundle_sid;
    this.status = payload.status;
    this.results = payload.results;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { bundleSid, sid: sid || this.sid };
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
   * The unique string of a regulation
   */
  regulationSid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  bundleSid?: string | null;
  status?: EvaluationStatus;
  /**
   * The results of the Evaluation resource
   */
  results?: Array<any> | null;
  dateCreated?: Date | null;
  url?: string | null;

  private get _proxy(): EvaluationContext {
    this._context = this._context || new EvaluationContextImpl(this._version, this._solution.bundleSid, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a EvaluationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EvaluationInstance
   */
  fetch(callback?: (error: Error | null, item?: EvaluationInstance) => any): Promise<EvaluationInstance>
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
      regulationSid: this.regulationSid, 
      bundleSid: this.bundleSid, 
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
export interface EvaluationSolution {
  bundleSid?: string;
  sid?: string;
}

export class EvaluationPage extends Page<V2, EvaluationPayload, EvaluationResource, EvaluationInstance> {
  /**
   * Initialize the EvaluationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: EvaluationSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of EvaluationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EvaluationPayload): EvaluationInstance {
    return new EvaluationInstance(
      this._version,
      payload,
      this._solution.bundleSid,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface EvaluationListInstance {
  (sid: string): EvaluationContext;
  get(sid: string): EvaluationContext;


  /**
   * Create a EvaluationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EvaluationInstance
   */
  create(callback?: (error: Error | null, item?: EvaluationInstance) => any): Promise<EvaluationInstance>



  /**
   * Streams EvaluationInstance records from the API.
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
  each(callback?: (item: EvaluationInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams EvaluationInstance records from the API.
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
   * @param { EvaluationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: EvaluationListInstanceEachOptions, callback?: (item: EvaluationInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of EvaluationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: EvaluationPage) => any): Promise<EvaluationPage>;
  /**
   * Retrieve a single target page of EvaluationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: EvaluationPage) => any): Promise<EvaluationPage>;
  getPage(params?: any, callback?: any): Promise<EvaluationPage>;
  /**
   * Lists EvaluationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: EvaluationInstance[]) => any): Promise<EvaluationInstance[]>;
  /**
   * Lists EvaluationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EvaluationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: EvaluationListInstanceOptions, callback?: (error: Error | null, items: EvaluationInstance[]) => any): Promise<EvaluationInstance[]>;
  list(params?: any, callback?: any): Promise<EvaluationInstance[]>;
  /**
   * Retrieve a single page of EvaluationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: EvaluationPage) => any): Promise<EvaluationPage>;
  /**
   * Retrieve a single page of EvaluationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EvaluationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: EvaluationListInstancePageOptions, callback?: (error: Error | null, items: EvaluationPage) => any): Promise<EvaluationPage>;
  page(params?: any, callback?: any): Promise<EvaluationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface EvaluationListInstanceImpl extends EvaluationListInstance {}
class EvaluationListInstanceImpl implements EvaluationListInstance {
  _version?: V2;
  _solution?: EvaluationSolution;
  _uri?: string;

}

export function EvaluationListInstance(version: V2, bundleSid: string): EvaluationListInstance {
  const instance = ((sid) => instance.get(sid)) as EvaluationListInstanceImpl;

  instance.get = function get(sid): EvaluationContext {
    return new EvaluationContextImpl(version, bundleSid, sid);
  }

  instance._version = version;
  instance._solution = { bundleSid };
  instance._uri = `/RegulatoryCompliance/Bundles/${bundleSid}/Evaluations`;

  instance.create = function create(callback?: any): Promise<EvaluationInstance> {

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post' });
    
    operationPromise = operationPromise.then(payload => new EvaluationInstance(operationVersion, payload, this._solution.bundleSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<EvaluationPage> {
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
    
    operationPromise = operationPromise.then(payload => new EvaluationPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<EvaluationPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new EvaluationPage(this._version, payload, this._solution));
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

