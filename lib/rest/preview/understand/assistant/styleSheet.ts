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
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import Understand from "../../Understand";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");


/**
 * Options to pass to create a StyleSheetInstance
 *
 * @property { any } [styleSheet] The JSON Style sheet string
 */
export interface StyleSheetListInstanceCreateOptions {
  styleSheet?: any;
}

export interface StyleSheetListInstance {



  /**
   * Streams StyleSheetInstance records from the API.
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
  each(callback?: (item: StyleSheetInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams StyleSheetInstance records from the API.
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
   * @param { StyleSheetListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: StyleSheetListInstanceEachOptions, callback?: (item: StyleSheetInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of StyleSheetInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: StyleSheetPage) => any): Promise<StyleSheetPage>;
  /**
   * Retrieve a single target page of StyleSheetInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: StyleSheetPage) => any): Promise<StyleSheetPage>;
  getPage(params?: any, callback?: any): Promise<StyleSheetPage>;
  /**
   * Lists StyleSheetInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: StyleSheetInstance[]) => any): Promise<StyleSheetInstance[]>;
  /**
   * Lists StyleSheetInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { StyleSheetListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: StyleSheetListInstanceOptions, callback?: (error: Error | null, items: StyleSheetInstance[]) => any): Promise<StyleSheetInstance[]>;
  list(params?: any, callback?: any): Promise<StyleSheetInstance[]>;
  /**
   * Retrieve a single page of StyleSheetInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: StyleSheetPage) => any): Promise<StyleSheetPage>;
  /**
   * Retrieve a single page of StyleSheetInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { StyleSheetListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: StyleSheetListInstancePageOptions, callback?: (error: Error | null, items: StyleSheetPage) => any): Promise<StyleSheetPage>;
  page(params?: any, callback?: any): Promise<StyleSheetPage>;

  /**
   * Create a StyleSheetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed StyleSheetInstance
   */
  create(callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
  /**
   * Create a StyleSheetInstance
   *
   * @param { StyleSheetListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed StyleSheetInstance
   */
  create(params: StyleSheetListInstanceCreateOptions, callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
  create(params?: any, callback?: any): Promise<StyleSheetInstance>


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

  instance.page = function page(callback?: any): Promise<StyleSheetPage> {

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new StyleSheetPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<StyleSheetPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new StyleSheetPage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }



  instance.create = function create(params?: any, callback?: any): Promise<StyleSheetInstance> {
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
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
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

interface StyleSheetPayload extends StyleSheetResource, Page.TwilioResponsePayload {
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

export class StyleSheetPage extends Page<Understand, StyleSheetPayload, StyleSheetResource, StyleSheetInstance> {
  /**
   * Initialize the StyleSheetPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Understand, response: Response<string>, solution: StyleSheetSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of StyleSheetInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: StyleSheetPayload): StyleSheetInstance {
    return new StyleSheetInstance(
      this._version,
      payload,
      this._solution.assistantSid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

