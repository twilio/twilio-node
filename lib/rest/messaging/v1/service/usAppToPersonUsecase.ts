/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Messaging
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");



/**
 * Options to pass to fetch a UsAppToPersonUsecaseInstance
 *
 * @property { string } [brandRegistrationSid] The unique string to identify the A2P brand.
 */
export interface UsAppToPersonUsecaseListInstanceFetchOptions {
  "brandRegistrationSid"?: string;
}

export interface UsAppToPersonUsecaseListInstance {


  /**
   * Fetch a UsAppToPersonUsecaseInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UsAppToPersonUsecaseInstance
   */
  fetch(callback?: (error: Error | null, item?: UsAppToPersonUsecaseInstance) => any): Promise<UsAppToPersonUsecaseInstance>;
  /**
   * Fetch a UsAppToPersonUsecaseInstance
   *
   * @param { UsAppToPersonUsecaseListInstanceFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UsAppToPersonUsecaseInstance
   */
  fetch(params: UsAppToPersonUsecaseListInstanceFetchOptions, callback?: (error: Error | null, item?: UsAppToPersonUsecaseInstance) => any): Promise<UsAppToPersonUsecaseInstance>;
  fetch(params?: any, callback?: any): Promise<UsAppToPersonUsecaseInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UsAppToPersonUsecaseSolution {
  messagingServiceSid?: string;
}

interface UsAppToPersonUsecaseListInstanceImpl extends UsAppToPersonUsecaseListInstance {}
class UsAppToPersonUsecaseListInstanceImpl implements UsAppToPersonUsecaseListInstance {
  _version?: V1;
  _solution?: UsAppToPersonUsecaseSolution;
  _uri?: string;

}

export function UsAppToPersonUsecaseListInstance(version: V1, messagingServiceSid: string): UsAppToPersonUsecaseListInstance {
  const instance = {} as UsAppToPersonUsecaseListInstanceImpl;

  instance._version = version;
  instance._solution = { messagingServiceSid };
  instance._uri = `/Services/${messagingServiceSid}/Compliance/Usa2p/Usecases`;

  instance.fetch = function fetch(params?: any, callback?: any): Promise<UsAppToPersonUsecaseInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["brandRegistrationSid"] !== undefined) data["BrandRegistrationSid"] = params["brandRegistrationSid"];

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new UsAppToPersonUsecaseInstance(operationVersion, payload, this._solution.messagingServiceSid));
    

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

interface UsAppToPersonUsecasePayload extends UsAppToPersonUsecaseResource{
}

interface UsAppToPersonUsecaseResource {
  us_app_to_person_usecases?: Array<any> | null;
}

export class UsAppToPersonUsecaseInstance {

  constructor(protected _version: V1, payload: UsAppToPersonUsecasePayload, messagingServiceSid?: string) {
    this.usAppToPersonUsecases = payload.us_app_to_person_usecases;

  }

  /**
   * Human readable A2P Use Case details
   */
  usAppToPersonUsecases?: Array<any> | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      usAppToPersonUsecases: this.usAppToPersonUsecases
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


