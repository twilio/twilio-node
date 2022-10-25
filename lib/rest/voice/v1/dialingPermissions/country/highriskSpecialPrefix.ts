/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Voice
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");


export class VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes {
  /**
   * A prefix that includes the E.164 assigned country code
   */
  "prefix"?: string | null;
}


export class ListByocTrunkResponseMeta {
  "firstPageUrl"?: string;
  "nextPageUrl"?: string;
  "page"?: number;
  "pageSize"?: number;
  "previousPageUrl"?: string;
  "url"?: string;
  "key"?: string;
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
export interface HighriskSpecialPrefixListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: HighriskSpecialPrefixInstance, done: (err?: Error) => void) => void;
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
export interface HighriskSpecialPrefixListInstanceOptions {
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
export interface HighriskSpecialPrefixListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface HighriskSpecialPrefixListInstance {



  /**
   * Streams HighriskSpecialPrefixInstance records from the API.
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
  each(callback?: (item: HighriskSpecialPrefixInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams HighriskSpecialPrefixInstance records from the API.
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
   * @param { HighriskSpecialPrefixListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: HighriskSpecialPrefixListInstanceEachOptions, callback?: (item: HighriskSpecialPrefixInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of HighriskSpecialPrefixInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: HighriskSpecialPrefixPage) => any): Promise<HighriskSpecialPrefixPage>;
  /**
   * Retrieve a single target page of HighriskSpecialPrefixInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: HighriskSpecialPrefixPage) => any): Promise<HighriskSpecialPrefixPage>;
  getPage(params?: any, callback?: any): Promise<HighriskSpecialPrefixPage>;
  /**
   * Lists HighriskSpecialPrefixInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: HighriskSpecialPrefixInstance[]) => any): Promise<HighriskSpecialPrefixInstance[]>;
  /**
   * Lists HighriskSpecialPrefixInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { HighriskSpecialPrefixListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: HighriskSpecialPrefixListInstanceOptions, callback?: (error: Error | null, items: HighriskSpecialPrefixInstance[]) => any): Promise<HighriskSpecialPrefixInstance[]>;
  list(params?: any, callback?: any): Promise<HighriskSpecialPrefixInstance[]>;
  /**
   * Retrieve a single page of HighriskSpecialPrefixInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: HighriskSpecialPrefixPage) => any): Promise<HighriskSpecialPrefixPage>;
  /**
   * Retrieve a single page of HighriskSpecialPrefixInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { HighriskSpecialPrefixListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: HighriskSpecialPrefixListInstancePageOptions, callback?: (error: Error | null, items: HighriskSpecialPrefixPage) => any): Promise<HighriskSpecialPrefixPage>;
  page(params?: any, callback?: any): Promise<HighriskSpecialPrefixPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface HighriskSpecialPrefixSolution {
  isoCode?: string;
}

interface HighriskSpecialPrefixListInstanceImpl extends HighriskSpecialPrefixListInstance {}
class HighriskSpecialPrefixListInstanceImpl implements HighriskSpecialPrefixListInstance {
  _version?: V1;
  _solution?: HighriskSpecialPrefixSolution;
  _uri?: string;

}

export function HighriskSpecialPrefixListInstance(version: V1, isoCode: string): HighriskSpecialPrefixListInstance {
  const instance = {} as HighriskSpecialPrefixListInstanceImpl;

  instance._version = version;
  instance._solution = { isoCode };
  instance._uri = `/DialingPermissions/Countries/${isoCode}/HighRiskSpecialPrefixes`;

  instance.page = function page(params?: any, callback?: any): Promise<HighriskSpecialPrefixPage> {
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
    
    operationPromise = operationPromise.then(payload => new HighriskSpecialPrefixPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<HighriskSpecialPrefixPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new HighriskSpecialPrefixPage(this._version, payload, this._solution));
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

interface HighriskSpecialPrefixPayload extends HighriskSpecialPrefixResource, Page.TwilioResponsePayload {
}

interface HighriskSpecialPrefixResource {
  content?: Array<VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes>;
  meta?: ListByocTrunkResponseMeta;
}

export class HighriskSpecialPrefixInstance {

  constructor(protected _version: V1, payload: HighriskSpecialPrefixPayload, isoCode?: string) {
    this.content = payload.content;
    this.meta = payload.meta;

  }

  content?: Array<VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes>;
  meta?: ListByocTrunkResponseMeta;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      content: this.content, 
      meta: this.meta
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class HighriskSpecialPrefixPage extends Page<V1, HighriskSpecialPrefixPayload, HighriskSpecialPrefixResource, HighriskSpecialPrefixInstance> {
/**
* Initialize the HighriskSpecialPrefixPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: HighriskSpecialPrefixSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of HighriskSpecialPrefixInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: HighriskSpecialPrefixPayload): HighriskSpecialPrefixInstance {
    return new HighriskSpecialPrefixInstance(
    this._version,
    payload,
        this._solution.isoCode,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

