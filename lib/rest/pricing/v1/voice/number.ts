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
 * The InboundCallPrice record
 */
export class PricingV1VoiceVoiceNumberInboundCallPrice {
  "basePrice"?: number;
  "currentPrice"?: number;
  "numberType"?: string;
}


/**
 * The OutboundCallPrice record
 */
export class PricingV1VoiceVoiceNumberOutboundCallPrice {
  "basePrice"?: number;
  "currentPrice"?: number;
}



export interface NumberListInstance {
  (number: string): NumberContext;
  get(number: string): NumberContext;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface NumberSolution {
}

interface NumberListInstanceImpl extends NumberListInstance {}
class NumberListInstanceImpl implements NumberListInstance {
  _version?: V1;
  _solution?: NumberSolution;
  _uri?: string;

}

export function NumberListInstance(version: V1): NumberListInstance {
  const instance = ((number) => instance.get(number)) as NumberListInstanceImpl;

  instance.get = function get(number): NumberContext {
    return new NumberContextImpl(version, number);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Voice/Numbers`;

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
  fetch(callback?: (error: Error | null, item?: NumberInstance) => any): Promise<NumberInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface NumberContextSolution {
  number?: string;
}

export class NumberContextImpl implements NumberContext {
  protected _solution: NumberContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, number: string) {
    this._solution = { number };
    this._uri = `/Voice/Numbers/${number}`;
  }

  fetch(callback?: any): Promise<NumberInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new NumberInstance(operationVersion, payload, this._solution.number));
    

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
  number?: string | null;
  country?: string | null;
  iso_country?: string | null;
  outbound_call_price?: PricingV1VoiceVoiceNumberOutboundCallPrice | null;
  inbound_call_price?: PricingV1VoiceVoiceNumberInboundCallPrice | null;
  price_unit?: string | null;
  url?: string | null;
}

export class NumberInstance {
  protected _solution: NumberContextSolution;
  protected _context?: NumberContext;

  constructor(protected _version: V1, payload: NumberPayload, number?: string) {
    this.number = payload.number;
    this.country = payload.country;
    this.isoCountry = payload.iso_country;
    this.outboundCallPrice = payload.outbound_call_price;
    this.inboundCallPrice = payload.inbound_call_price;
    this.priceUnit = payload.price_unit;
    this.url = payload.url;

    this._solution = { number: number || this.number };
  }

  /**
   * The phone number
   */
  number?: string | null;
  /**
   * The name of the country
   */
  country?: string | null;
  /**
   * The ISO country code
   */
  isoCountry?: string | null;
  outboundCallPrice?: PricingV1VoiceVoiceNumberOutboundCallPrice | null;
  inboundCallPrice?: PricingV1VoiceVoiceNumberInboundCallPrice | null;
  /**
   * The currency in which prices are measured, in ISO 4127 format (e.g. usd, eur, jpy)
   */
  priceUnit?: string | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): NumberContext {
    this._context = this._context || new NumberContextImpl(this._version, this._solution.number);
    return this._context;
  }

  /**
   * Fetch a NumberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NumberInstance
   */
  fetch(callback?: (error: Error | null, item?: NumberInstance) => any): Promise<NumberInstance>
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
      number: this.number, 
      country: this.country, 
      isoCountry: this.isoCountry, 
      outboundCallPrice: this.outboundCallPrice, 
      inboundCallPrice: this.inboundCallPrice, 
      priceUnit: this.priceUnit, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class NumberPage extends Page<V1, NumberPayload, NumberResource, NumberInstance> {
  /**
   * Initialize the NumberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: NumberSolution) {
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
      this._solution.number,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

