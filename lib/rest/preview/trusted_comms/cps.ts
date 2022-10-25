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
import TrustedComms from "../TrustedComms";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");



/**
 * Options to pass to fetch a CpsInstance
 *
 * @property { string } [xXcnamSensitivePhoneNumber] Phone number used to retrieve its corresponding CPS.
 */
export interface CpsListInstanceFetchOptions {
  xXcnamSensitivePhoneNumber?: string;
}

export interface CpsListInstance {


  /**
   * Fetch a CpsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CpsInstance
   */
  fetch(callback?: (error: Error | null, item?: CpsInstance) => any): Promise<CpsInstance>;
  /**
   * Fetch a CpsInstance
   *
   * @param { CpsListInstanceFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CpsInstance
   */
  fetch(params: CpsListInstanceFetchOptions, callback?: (error: Error | null, item?: CpsInstance) => any): Promise<CpsInstance>;
  fetch(params?: any, callback?: any): Promise<CpsInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CpsSolution {
}

interface CpsListInstanceImpl extends CpsListInstance {}
class CpsListInstanceImpl implements CpsListInstance {
  _version?: TrustedComms;
  _solution?: CpsSolution;
  _uri?: string;

}

export function CpsListInstance(version: TrustedComms): CpsListInstance {
  const instance = {} as CpsListInstanceImpl;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/CPS`;

  instance.fetch = function fetch(params?: any, callback?: any): Promise<CpsInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};


    const headers: any = {};
    if (params.xXcnamSensitivePhoneNumber !== undefined) headers['X-Xcnam-Sensitive-Phone-Number'] = params.xXcnamSensitivePhoneNumber;

    let operationVersion = version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new CpsInstance(operationVersion, payload));
    

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

interface CpsPayload extends CpsResource{
}

interface CpsResource {
  cps_url?: string | null;
  phone_number?: string | null;
  url?: string | null;
}

export class CpsInstance {

  constructor(protected _version: TrustedComms, payload: CpsPayload) {
    this.cpsUrl = payload.cps_url;
    this.phoneNumber = payload.phone_number;
    this.url = payload.url;

  }

  /**
   * CPS URL of the phone number.
   */
  cpsUrl?: string | null;
  /**
   * Phone number passed.
   */
  phoneNumber?: string | null;
  /**
   * The URL of this resource.
   */
  url?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      cpsUrl: this.cpsUrl, 
      phoneNumber: this.phoneNumber, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


