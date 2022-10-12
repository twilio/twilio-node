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
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");



/**
 * Options to pass to fetch a NumberInstance
 *
 * @property { string } [originationNumber] The origination phone number, in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, for which to fetch the origin-based voice pricing information. E.164 format consists of a + followed by the country code and subscriber number.
 */
export interface NumberContextFetchOptions {
  originationNumber?: string;
}

export interface NumberListInstance {
  (destinationNumber: string): NumberContext;
  get(destinationNumber: string): NumberContext;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface NumberListInstanceImpl extends NumberListInstance {}
class NumberListInstanceImpl implements NumberListInstance {
  _version?: V2;
  _solution?: NumberSolution;
  _uri?: string;

}

export function NumberListInstance(version: V2): NumberListInstance {
  const instance = ((destinationNumber) => instance.get(destinationNumber)) as NumberListInstanceImpl;

  instance.get = function get(destinationNumber): NumberContext {
    return new NumberContextImpl(version, destinationNumber);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Trunking/Numbers`;

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}


export interface NumberContext {


  /**
   * Fetch a NumberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NumberInstance
   */
  fetch(callback?: (error: Error | null, item?: NumberInstance) => any): Promise<NumberInstance>;
  /**
   * Fetch a NumberInstance
   *
   * @param { NumberContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NumberInstance
   */
  fetch(params: NumberContextFetchOptions, callback?: (error: Error | null, item?: NumberInstance) => any): Promise<NumberInstance>;
  fetch(params?: any, callback?: any): Promise<NumberInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class NumberContextImpl implements NumberContext {
  protected _solution: NumberSolution;
  protected _uri: string;


  constructor(protected _version: V2, destinationNumber: string) {
    this._solution = { destinationNumber };
    this._uri = `/Trunking/Numbers/${destinationNumber}`;
  }

  fetch(params?: any, callback?: any): Promise<NumberInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.originationNumber !== undefined) data['OriginationNumber'] = params.originationNumber;

    const headers: any = {};

    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new NumberInstance(operationVersion, payload, this._solution.destinationNumber));
    

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

interface NumberPayload extends NumberResource, Page.TwilioResponsePayload {
}

interface NumberResource {
  destination_number?: string | null;
  origination_number?: string | null;
  country?: string | null;
  iso_country?: string | null;
  terminating_prefix_prices?: Array<object> | null;
  originating_call_price?: object | null;
  price_unit?: string | null;
  url?: string | null;
}

export class NumberInstance {
  protected _solution: NumberSolution;
  protected _context?: NumberContext;

  constructor(protected _version: V2, payload: NumberPayload, destinationNumber?: string) {
    this.destinationNumber = payload.destination_number;
    this.originationNumber = payload.origination_number;
    this.country = payload.country;
    this.isoCountry = payload.iso_country;
    this.terminatingPrefixPrices = payload.terminating_prefix_prices;
    this.originatingCallPrice = payload.originating_call_price;
    this.priceUnit = payload.price_unit;
    this.url = payload.url;

    this._solution = { destinationNumber: destinationNumber || this.destinationNumber };
  }

  /**
   * The destination phone number, in E.164 format
   */
  destinationNumber?: string | null;
  /**
   * The origination phone number, in E.164 format
   */
  originationNumber?: string | null;
  /**
   * The name of the country
   */
  country?: string | null;
  /**
   * The ISO country code
   */
  isoCountry?: string | null;
  terminatingPrefixPrices?: Array<object> | null;
  originatingCallPrice?: object | null;
  /**
   * The currency in which prices are measured, in ISO 4127 format (e.g. usd, eur, jpy)
   */
  priceUnit?: string | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): NumberContext {
    this._context = this._context || new NumberContextImpl(this._version, this._solution.destinationNumber);
    return this._context;
  }

  /**
   * Fetch a NumberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NumberInstance
   */
  fetch(callback?: (error: Error | null, item?: NumberInstance) => any): Promise<NumberInstance>;
  /**
   * Fetch a NumberInstance
   *
   * @param { NumberContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NumberInstance
   */
  fetch(params: NumberContextFetchOptions, callback?: (error: Error | null, item?: NumberInstance) => any): Promise<NumberInstance>;
  fetch(params?: any, callback?: any): Promise<NumberInstance>
     {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      destinationNumber: this.destinationNumber, 
      originationNumber: this.originationNumber, 
      country: this.country, 
      isoCountry: this.isoCountry, 
      terminatingPrefixPrices: this.terminatingPrefixPrices, 
      originatingCallPrice: this.originatingCallPrice, 
      priceUnit: this.priceUnit, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface NumberSolution {
  destinationNumber?: string;
}

export class NumberPage extends Page<V2, NumberPayload, NumberResource, NumberInstance> {
  /**
   * Initialize the NumberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: NumberSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of NumberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: NumberPayload): NumberInstance {
    return new NumberInstance(
      this._version,
      payload,
      this._solution.destinationNumber,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

