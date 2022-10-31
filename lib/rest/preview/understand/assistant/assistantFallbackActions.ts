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
import Understand from "../../Understand";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");



/**
 * Options to pass to update a AssistantFallbackActionsInstance
 *
 * @property { any } [fallbackActions] 
 */
export interface AssistantFallbackActionsListInstanceUpdateOptions {
  "fallbackActions"?: any;
}

export interface AssistantFallbackActionsListInstance {


  /**
   * Fetch a AssistantFallbackActionsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantFallbackActionsInstance
   */
  fetch(callback?: (error: Error | null, item?: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>


  /**
   * Update a AssistantFallbackActionsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantFallbackActionsInstance
   */
  update(callback?: (error: Error | null, item?: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
  /**
   * Update a AssistantFallbackActionsInstance
   *
   * @param { AssistantFallbackActionsListInstanceUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantFallbackActionsInstance
   */
  update(params: AssistantFallbackActionsListInstanceUpdateOptions, callback?: (error: Error | null, item?: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
  update(params?: any, callback?: any): Promise<AssistantFallbackActionsInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssistantFallbackActionsSolution {
  assistantSid?: string;
}

interface AssistantFallbackActionsListInstanceImpl extends AssistantFallbackActionsListInstance {}
class AssistantFallbackActionsListInstanceImpl implements AssistantFallbackActionsListInstance {
  _version?: Understand;
  _solution?: AssistantFallbackActionsSolution;
  _uri?: string;

}

export function AssistantFallbackActionsListInstance(version: Understand, assistantSid: string): AssistantFallbackActionsListInstance {
  const instance = {} as AssistantFallbackActionsListInstanceImpl;

  instance._version = version;
  instance._solution = { assistantSid };
  instance._uri = `/Assistants/${assistantSid}/FallbackActions`;

  instance.fetch = function fetch(callback?: any): Promise<AssistantFallbackActionsInstance> {

    let operationVersion = version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new AssistantFallbackActionsInstance(operationVersion, payload, this._solution.assistantSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.update = function update(params?: any, callback?: any): Promise<AssistantFallbackActionsInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["fallbackActions"] !== undefined) data["FallbackActions"] = params["fallbackActions"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.update({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new AssistantFallbackActionsInstance(operationVersion, payload, this._solution.assistantSid));
    

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

interface AssistantFallbackActionsPayload extends AssistantFallbackActionsResource{
}

interface AssistantFallbackActionsResource {
  account_sid?: string | null;
  assistant_sid?: string | null;
  url?: string | null;
  data?: any | null;
}

export class AssistantFallbackActionsInstance {

  constructor(protected _version: Understand, payload: AssistantFallbackActionsPayload, assistantSid?: string) {
    this.accountSid = payload.account_sid;
    this.assistantSid = payload.assistant_sid;
    this.url = payload.url;
    this.data = payload.data;

  }

  accountSid?: string | null;
  assistantSid?: string | null;
  url?: string | null;
  data?: any | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      assistantSid: this.assistantSid, 
      url: this.url, 
      data: this.data
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


