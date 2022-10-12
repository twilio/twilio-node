/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Pricing
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
export interface CountryListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: CountryInstance, done: (err?: Error) => void) => void;
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
export interface CountryListInstanceOptions {
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
export interface CountryListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface CountryContext {


  /**
   * Fetch a CountryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CountryInstance
   */
  fetch(callback?: (error: Error | null, item?: CountryInstance) => any): Promise<CountryInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class CountryContextImpl implements CountryContext {
  protected _solution: CountrySolution;
  protected _uri: string;


  constructor(protected _version: V1, isoCountry: string) {
    this._solution = { isoCountry };
    this._uri = `/Messaging/Countries/${isoCountry}`;
  }

  fetch(callback?: any): Promise<CountryInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new CountryInstance(operationVersion, payload, this._solution.isoCountry));
    

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

interface CountryPayload extends CountryResource, Page.TwilioResponsePayload {
}

interface CountryResource {
  country?: string | null;
  iso_country?: string | null;
  outbound_sms_prices?: Array<object> | null;
  inbound_sms_prices?: Array<object> | null;
  price_unit?: string | null;
  url?: string | null;
}

export class CountryInstance {
  protected _solution: CountrySolution;
  protected _context?: CountryContext;

  constructor(protected _version: V1, payload: CountryPayload, isoCountry?: string) {
    this.country = payload.country;
    this.isoCountry = payload.iso_country;
    this.outboundSmsPrices = payload.outbound_sms_prices;
    this.inboundSmsPrices = payload.inbound_sms_prices;
    this.priceUnit = payload.price_unit;
    this.url = payload.url;

    this._solution = { isoCountry: isoCountry || this.isoCountry };
  }

  /**
   * The name of the country
   */
  country?: string | null;
  /**
   * The ISO country code
   */
  isoCountry?: string | null;
  /**
   * The list of OutboundSMSPrice records
   */
  outboundSmsPrices?: Array<object> | null;
  /**
   * The list of InboundPrice records
   */
  inboundSmsPrices?: Array<object> | null;
  /**
   * The currency in which prices are measured, in ISO 4127 format (e.g. usd, eur, jpy)
   */
  priceUnit?: string | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): CountryContext {
    this._context = this._context || new CountryContextImpl(this._version, this._solution.isoCountry);
    return this._context;
  }

  /**
   * Fetch a CountryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CountryInstance
   */
  fetch(callback?: (error: Error | null, item?: CountryInstance) => any): Promise<CountryInstance>
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
      country: this.country, 
      isoCountry: this.isoCountry, 
      outboundSmsPrices: this.outboundSmsPrices, 
      inboundSmsPrices: this.inboundSmsPrices, 
      priceUnit: this.priceUnit, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface CountrySolution {
  isoCountry?: string;
}

export class CountryPage extends Page<V1, CountryPayload, CountryResource, CountryInstance> {
  /**
   * Initialize the CountryPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: CountrySolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CountryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CountryPayload): CountryInstance {
    return new CountryInstance(
      this._version,
      payload,
      this._solution.isoCountry,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface CountryListInstance {
  (isoCountry: string): CountryContext;
  get(isoCountry: string): CountryContext;



  /**
   * Streams CountryInstance records from the API.
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
  each(callback?: (item: CountryInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams CountryInstance records from the API.
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
   * @param { CountryListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: CountryListInstanceEachOptions, callback?: (item: CountryInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of CountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: CountryPage) => any): Promise<CountryPage>;
  /**
   * Retrieve a single target page of CountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CountryPage) => any): Promise<CountryPage>;
  getPage(params?: any, callback?: any): Promise<CountryPage>;
  /**
   * Lists CountryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: CountryInstance[]) => any): Promise<CountryInstance[]>;
  /**
   * Lists CountryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CountryListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: CountryListInstanceOptions, callback?: (error: Error | null, items: CountryInstance[]) => any): Promise<CountryInstance[]>;
  list(params?: any, callback?: any): Promise<CountryInstance[]>;
  /**
   * Retrieve a single page of CountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: CountryPage) => any): Promise<CountryPage>;
  /**
   * Retrieve a single page of CountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CountryListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: CountryListInstancePageOptions, callback?: (error: Error | null, items: CountryPage) => any): Promise<CountryPage>;
  page(params?: any, callback?: any): Promise<CountryPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface CountryListInstanceImpl extends CountryListInstance {}
class CountryListInstanceImpl implements CountryListInstance {
  _version?: V1;
  _solution?: CountrySolution;
  _uri?: string;

}

export function CountryListInstance(version: V1): CountryListInstance {
  const instance = ((isoCountry) => instance.get(isoCountry)) as CountryListInstanceImpl;

  instance.get = function get(isoCountry): CountryContext {
    return new CountryContextImpl(version, isoCountry);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Messaging/Countries`;

  instance.page = function page(params?: any, callback?: any): Promise<CountryPage> {
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
    
    operationPromise = operationPromise.then(payload => new CountryPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<CountryPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new CountryPage(this._version, payload, this._solution));
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

