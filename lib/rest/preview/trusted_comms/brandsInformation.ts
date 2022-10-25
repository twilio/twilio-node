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
 * Options to pass to fetch a BrandsInformationInstance
 *
 * @property { string } [ifNoneMatch] Standard &#x60;If-None-Match&#x60; HTTP header. For more information visit: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match.
 */
export interface BrandsInformationListInstanceFetchOptions {
  ifNoneMatch?: string;
}

export interface BrandsInformationListInstance {


  /**
   * Fetch a BrandsInformationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BrandsInformationInstance
   */
  fetch(callback?: (error: Error | null, item?: BrandsInformationInstance) => any): Promise<BrandsInformationInstance>;
  /**
   * Fetch a BrandsInformationInstance
   *
   * @param { BrandsInformationListInstanceFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BrandsInformationInstance
   */
  fetch(params: BrandsInformationListInstanceFetchOptions, callback?: (error: Error | null, item?: BrandsInformationInstance) => any): Promise<BrandsInformationInstance>;
  fetch(params?: any, callback?: any): Promise<BrandsInformationInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BrandsInformationSolution {
}

interface BrandsInformationListInstanceImpl extends BrandsInformationListInstance {}
class BrandsInformationListInstanceImpl implements BrandsInformationListInstance {
  _version?: TrustedComms;
  _solution?: BrandsInformationSolution;
  _uri?: string;

}

export function BrandsInformationListInstance(version: TrustedComms): BrandsInformationListInstance {
  const instance = {} as BrandsInformationListInstanceImpl;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/BrandsInformation`;

  instance.fetch = function fetch(params?: any, callback?: any): Promise<BrandsInformationInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};


    const headers: any = {};
    if (params.ifNoneMatch !== undefined) headers['If-None-Match'] = params.ifNoneMatch;

    let operationVersion = version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new BrandsInformationInstance(operationVersion, payload));
    

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

interface BrandsInformationPayload extends BrandsInformationResource{
}

interface BrandsInformationResource {
  update_time?: Date | null;
  file_link?: string | null;
  file_link_ttl_in_seconds?: string | null;
  url?: string | null;
}

export class BrandsInformationInstance {

  constructor(protected _version: TrustedComms, payload: BrandsInformationPayload) {
    this.updateTime = deserialize.iso8601DateTime(payload.update_time);
    this.fileLink = payload.file_link;
    this.fileLinkTtlInSeconds = payload.file_link_ttl_in_seconds;
    this.url = payload.url;

  }

  /**
   * Creation time of the information retrieved
   */
  updateTime?: Date | null;
  /**
   * The URL to the brands information
   */
  fileLink?: string | null;
  /**
   * How long will be the `file_link` valid
   */
  fileLinkTtlInSeconds?: string | null;
  /**
   * The URL of this resource
   */
  url?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      updateTime: this.updateTime, 
      fileLink: this.fileLink, 
      fileLinkTtlInSeconds: this.fileLinkTtlInSeconds, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


