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
 * Options to pass to create a AssistantInitiationActionsInstance
 *
 * @property { any } [initiationActions] 
 */
export interface AssistantInitiationActionsListInstanceCreateOptions {
  initiationActions?: any;
}

export interface AssistantInitiationActionsListInstance {



  /**
   * Streams AssistantInitiationActionsInstance records from the API.
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
  each(callback?: (item: AssistantInitiationActionsInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams AssistantInitiationActionsInstance records from the API.
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
   * @param { AssistantInitiationActionsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: AssistantInitiationActionsListInstanceEachOptions, callback?: (item: AssistantInitiationActionsInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of AssistantInitiationActionsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: AssistantInitiationActionsPage) => any): Promise<AssistantInitiationActionsPage>;
  /**
   * Retrieve a single target page of AssistantInitiationActionsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AssistantInitiationActionsPage) => any): Promise<AssistantInitiationActionsPage>;
  getPage(params?: any, callback?: any): Promise<AssistantInitiationActionsPage>;
  /**
   * Lists AssistantInitiationActionsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: AssistantInitiationActionsInstance[]) => any): Promise<AssistantInitiationActionsInstance[]>;
  /**
   * Lists AssistantInitiationActionsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssistantInitiationActionsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: AssistantInitiationActionsListInstanceOptions, callback?: (error: Error | null, items: AssistantInitiationActionsInstance[]) => any): Promise<AssistantInitiationActionsInstance[]>;
  list(params?: any, callback?: any): Promise<AssistantInitiationActionsInstance[]>;
  /**
   * Retrieve a single page of AssistantInitiationActionsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: AssistantInitiationActionsPage) => any): Promise<AssistantInitiationActionsPage>;
  /**
   * Retrieve a single page of AssistantInitiationActionsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssistantInitiationActionsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: AssistantInitiationActionsListInstancePageOptions, callback?: (error: Error | null, items: AssistantInitiationActionsPage) => any): Promise<AssistantInitiationActionsPage>;
  page(params?: any, callback?: any): Promise<AssistantInitiationActionsPage>;

  /**
   * Create a AssistantInitiationActionsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInitiationActionsInstance
   */
  create(callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
  /**
   * Create a AssistantInitiationActionsInstance
   *
   * @param { AssistantInitiationActionsListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInitiationActionsInstance
   */
  create(params: AssistantInitiationActionsListInstanceCreateOptions, callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
  create(params?: any, callback?: any): Promise<AssistantInitiationActionsInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssistantInitiationActionsSolution {
  assistantSid?: string;
}

interface AssistantInitiationActionsListInstanceImpl extends AssistantInitiationActionsListInstance {}
class AssistantInitiationActionsListInstanceImpl implements AssistantInitiationActionsListInstance {
  _version?: Understand;
  _solution?: AssistantInitiationActionsSolution;
  _uri?: string;

}

export function AssistantInitiationActionsListInstance(version: Understand, assistantSid: string): AssistantInitiationActionsListInstance {
  const instance = {} as AssistantInitiationActionsListInstanceImpl;

  instance._version = version;
  instance._solution = { assistantSid };
  instance._uri = `/Assistants/${assistantSid}/InitiationActions`;

  instance.page = function page(callback?: any): Promise<AssistantInitiationActionsPage> {

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new AssistantInitiationActionsPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<AssistantInitiationActionsPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new AssistantInitiationActionsPage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }



  instance.create = function create(params?: any, callback?: any): Promise<AssistantInitiationActionsInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.initiationActions !== undefined) data['InitiationActions'] = params.initiationActions;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new AssistantInitiationActionsInstance(operationVersion, payload, this._solution.assistantSid));
    

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

interface AssistantInitiationActionsPayload extends AssistantInitiationActionsResource, Page.TwilioResponsePayload {
}

interface AssistantInitiationActionsResource {
  account_sid?: string | null;
  assistant_sid?: string | null;
  url?: string | null;
  data?: any | null;
}

export class AssistantInitiationActionsInstance {

  constructor(protected _version: Understand, payload: AssistantInitiationActionsPayload, assistantSid?: string) {
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

export class AssistantInitiationActionsPage extends Page<Understand, AssistantInitiationActionsPayload, AssistantInitiationActionsResource, AssistantInitiationActionsInstance> {
  /**
   * Initialize the AssistantInitiationActionsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Understand, response: Response<string>, solution: AssistantInitiationActionsSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AssistantInitiationActionsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AssistantInitiationActionsPayload): AssistantInitiationActionsInstance {
    return new AssistantInitiationActionsInstance(
      this._version,
      payload,
      this._solution.assistantSid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

