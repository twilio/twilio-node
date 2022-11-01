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
export interface BrandsInformationContextFetchOptions {
  "ifNoneMatch"?: string;
}

export interface BrandsInformationContext {


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
   * @param { BrandsInformationContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BrandsInformationInstance
   */
  fetch(params: BrandsInformationContextFetchOptions, callback?: (error: Error | null, item?: BrandsInformationInstance) => any): Promise<BrandsInformationInstance>;
  fetch(params?: any, callback?: any): Promise<BrandsInformationInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BrandsInformationContextSolution {
}

export class BrandsInformationContextImpl implements BrandsInformationContext {
  protected _solution: BrandsInformationContextSolution;
  protected _uri: string;


  constructor(protected _version: TrustedComms) {
    this._solution = {  };
    this._uri = `/BrandsInformation`;
  }

  fetch(params?: any, callback?: any): Promise<BrandsInformationInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};


    const headers: any = {};
    if (params["ifNoneMatch"] !== undefined) headers["If-None-Match"] = params["ifNoneMatch"];

    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new BrandsInformationInstance(operationVersion, payload));
    

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

interface BrandsInformationPayload extends BrandsInformationResource{
}

interface BrandsInformationResource {
  update_time?: Date | null;
  file_link?: string | null;
  file_link_ttl_in_seconds?: string | null;
  url?: string | null;
}

export class BrandsInformationInstance {
  protected _solution: BrandsInformationContextSolution;
  protected _context?: BrandsInformationContext;

  constructor(protected _version: TrustedComms, payload: BrandsInformationPayload) {
    this.updateTime = deserialize.iso8601DateTime(payload.update_time);
    this.fileLink = payload.file_link;
    this.fileLinkTtlInSeconds = payload.file_link_ttl_in_seconds;
    this.url = payload.url;

    this._solution = {  };
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

  private get _proxy(): BrandsInformationContext {
    this._context = this._context || new BrandsInformationContextImpl(this._version);
    return this._context;
  }

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
   * @param { BrandsInformationContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BrandsInformationInstance
   */
  fetch(params: BrandsInformationContextFetchOptions, callback?: (error: Error | null, item?: BrandsInformationInstance) => any): Promise<BrandsInformationInstance>;
  fetch(params?: any, callback?: any): Promise<BrandsInformationInstance>
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


export interface BrandsInformationListInstance {
  (): BrandsInformationContext;
  get(): BrandsInformationContext;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface Solution {
}

interface BrandsInformationListInstanceImpl extends BrandsInformationListInstance {}
class BrandsInformationListInstanceImpl implements BrandsInformationListInstance {
  _version?: TrustedComms;
  _solution?: Solution;
  _uri?: string;

}

export function BrandsInformationListInstance(version: TrustedComms): BrandsInformationListInstance {
  const instance = (() => instance.get()) as BrandsInformationListInstanceImpl;

  instance.get = function get(): BrandsInformationContext {
    return new BrandsInformationContextImpl(version);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/BrandsInformation`;

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}


