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
 * Options to pass to update a StyleSheetInstance
 *
 * @property { any } [styleSheet] The JSON Style sheet string
 */
export interface StyleSheetListInstanceUpdateOptions {
  styleSheet?: any;
}

export interface StyleSheetListInstance {


  /**
   * Fetch a StyleSheetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed StyleSheetInstance
   */
  fetch(callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>


  /**
   * Update a StyleSheetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed StyleSheetInstance
   */
  update(callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
  /**
   * Update a StyleSheetInstance
   *
   * @param { StyleSheetListInstanceUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed StyleSheetInstance
   */
  update(params: StyleSheetListInstanceUpdateOptions, callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
  update(params?: any, callback?: any): Promise<StyleSheetInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface StyleSheetSolution {
  assistantSid?: string;
}

interface StyleSheetListInstanceImpl extends StyleSheetListInstance {}
class StyleSheetListInstanceImpl implements StyleSheetListInstance {
  _version?: Understand;
  _solution?: StyleSheetSolution;
  _uri?: string;

}

export function StyleSheetListInstance(version: Understand, assistantSid: string): StyleSheetListInstance {
  const instance = {} as StyleSheetListInstanceImpl;

  instance._version = version;
  instance._solution = { assistantSid };
  instance._uri = `/Assistants/${assistantSid}/StyleSheet`;

  instance.fetch = function fetch(callback?: any): Promise<StyleSheetInstance> {

    let operationVersion = version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new StyleSheetInstance(operationVersion, payload, this._solution.assistantSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.update = function update(params?: any, callback?: any): Promise<StyleSheetInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.styleSheet !== undefined) data['StyleSheet'] = params.styleSheet;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new StyleSheetInstance(operationVersion, payload, this._solution.assistantSid));
    

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

interface StyleSheetPayload extends StyleSheetResource{
}

interface StyleSheetResource {
  account_sid?: string | null;
  assistant_sid?: string | null;
  url?: string | null;
  data?: any | null;
}

export class StyleSheetInstance {

  constructor(protected _version: Understand, payload: StyleSheetPayload, assistantSid?: string) {
    this.accountSid = payload.account_sid;
    this.assistantSid = payload.assistant_sid;
    this.url = payload.url;
    this.data = payload.data;

  }

  /**
   * The unique ID of the Account that created this Assistant
   */
  accountSid?: string | null;
  /**
   * The unique ID of the Assistant
   */
  assistantSid?: string | null;
  url?: string | null;
  /**
   * The JSON style sheet object
   */
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


