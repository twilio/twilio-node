/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Lookups
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");



type PhoneNumberValidationError = 'TOO_SHORT'|'TOO_LONG'|'INVALID_BUT_POSSIBLE'|'INVALID_COUNTRY_CODE'|'INVALID_LENGTH'|'NOT_A_NUMBER';


/**
 * Options to pass to fetch a PhoneNumberInstance
 *
 * @property { string } [fields] A comma-separated list of fields to return. Possible values are caller_name, sim_swap, call_forwarding, live_activity, line_type_intelligence.
 * @property { string } [countryCode] The [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) used if the phone number provided is in national format.
 */
export interface PhoneNumberContextFetchOptions {
  fields?: string;
  countryCode?: string;
}

export interface PhoneNumberContext {


  /**
   * Fetch a PhoneNumberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  fetch(callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
  /**
   * Fetch a PhoneNumberInstance
   *
   * @param { PhoneNumberContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  fetch(params: PhoneNumberContextFetchOptions, callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
  fetch(params?: any, callback?: any): Promise<PhoneNumberInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PhoneNumberContextSolution {
  phoneNumber?: string;
}

export class PhoneNumberContextImpl implements PhoneNumberContext {
  protected _solution: PhoneNumberContextSolution;
  protected _uri: string;


  constructor(protected _version: V2, phoneNumber: string) {
    this._solution = { phoneNumber };
    this._uri = `/PhoneNumbers/${phoneNumber}`;
  }

  fetch(params?: any, callback?: any): Promise<PhoneNumberInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.fields !== undefined) data['Fields'] = params.fields;
    if (params.countryCode !== undefined) data['CountryCode'] = params.countryCode;

    const headers: any = {};

    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new PhoneNumberInstance(operationVersion, payload, this._solution.phoneNumber));
    

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

interface PhoneNumberPayload extends PhoneNumberResource{
}

interface PhoneNumberResource {
  calling_country_code?: string | null;
  country_code?: string | null;
  phone_number?: string | null;
  national_format?: string | null;
  valid?: boolean | null;
  validation_errors?: Array<PhoneNumberValidationError> | null;
  caller_name?: any | null;
  sim_swap?: any | null;
  call_forwarding?: any | null;
  live_activity?: any | null;
  line_type_intelligence?: any | null;
  url?: string | null;
}

export class PhoneNumberInstance {
  protected _solution: PhoneNumberContextSolution;
  protected _context?: PhoneNumberContext;

  constructor(protected _version: V2, payload: PhoneNumberPayload, phoneNumber?: string) {
    this.callingCountryCode = payload.calling_country_code;
    this.countryCode = payload.country_code;
    this.phoneNumber = payload.phone_number;
    this.nationalFormat = payload.national_format;
    this.valid = payload.valid;
    this.validationErrors = payload.validation_errors;
    this.callerName = payload.caller_name;
    this.simSwap = payload.sim_swap;
    this.callForwarding = payload.call_forwarding;
    this.liveActivity = payload.live_activity;
    this.lineTypeIntelligence = payload.line_type_intelligence;
    this.url = payload.url;

    this._solution = { phoneNumber: phoneNumber || this.phoneNumber };
  }

  /**
   * International dialing prefix
   */
  callingCountryCode?: string | null;
  /**
   * Phone number\'s ISO country code
   */
  countryCode?: string | null;
  /**
   * Phone number in E.164 format
   */
  phoneNumber?: string | null;
  /**
   * Phone number in national format
   */
  nationalFormat?: string | null;
  /**
   * Boolean which indicates if the phone number is valid
   */
  valid?: boolean | null;
  /**
   * Contains reasons why a phone number is invalid
   */
  validationErrors?: Array<PhoneNumberValidationError> | null;
  /**
   * An object that contains caller name information
   */
  callerName?: any | null;
  /**
   * An object that contains SIM swap information
   */
  simSwap?: any | null;
  /**
   * An object that contains call forwarding status information
   */
  callForwarding?: any | null;
  /**
   * An object that contains live activity information
   */
  liveActivity?: any | null;
  /**
   * An object that contains line type information
   */
  lineTypeIntelligence?: any | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): PhoneNumberContext {
    this._context = this._context || new PhoneNumberContextImpl(this._version, this._solution.phoneNumber);
    return this._context;
  }

  /**
   * Fetch a PhoneNumberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  fetch(callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
  /**
   * Fetch a PhoneNumberInstance
   *
   * @param { PhoneNumberContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  fetch(params: PhoneNumberContextFetchOptions, callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
  fetch(params?: any, callback?: any): Promise<PhoneNumberInstance>
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
      callingCountryCode: this.callingCountryCode, 
      countryCode: this.countryCode, 
      phoneNumber: this.phoneNumber, 
      nationalFormat: this.nationalFormat, 
      valid: this.valid, 
      validationErrors: this.validationErrors, 
      callerName: this.callerName, 
      simSwap: this.simSwap, 
      callForwarding: this.callForwarding, 
      liveActivity: this.liveActivity, 
      lineTypeIntelligence: this.lineTypeIntelligence, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface PhoneNumberListInstance {
  (phoneNumber: string): PhoneNumberContext;
  get(phoneNumber: string): PhoneNumberContext;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PhoneNumberSolution {
}

interface PhoneNumberListInstanceImpl extends PhoneNumberListInstance {}
class PhoneNumberListInstanceImpl implements PhoneNumberListInstance {
  _version?: V2;
  _solution?: PhoneNumberSolution;
  _uri?: string;

}

export function PhoneNumberListInstance(version: V2): PhoneNumberListInstance {
  const instance = ((phoneNumber) => instance.get(phoneNumber)) as PhoneNumberListInstanceImpl;

  instance.get = function get(phoneNumber): PhoneNumberContext {
    return new PhoneNumberContextImpl(version, phoneNumber);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/PhoneNumbers`;

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}



