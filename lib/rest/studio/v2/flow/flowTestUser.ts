/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");


/**
 * Options to pass to create a FlowTestUserInstance
 *
 * @property { Array<string> } testUsers List of test user identities that can test draft versions of the flow.
 */
export interface FlowTestUserListInstanceCreateOptions {
  testUsers: Array<string>;
}

export interface FlowTestUserListInstance {



  /**
   * Streams FlowTestUserInstance records from the API.
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
  each(callback?: (item: FlowTestUserInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams FlowTestUserInstance records from the API.
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
   * @param { FlowTestUserListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: FlowTestUserListInstanceEachOptions, callback?: (item: FlowTestUserInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of FlowTestUserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: FlowTestUserPage) => any): Promise<FlowTestUserPage>;
  /**
   * Retrieve a single target page of FlowTestUserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FlowTestUserPage) => any): Promise<FlowTestUserPage>;
  getPage(params?: any, callback?: any): Promise<FlowTestUserPage>;
  /**
   * Lists FlowTestUserInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: FlowTestUserInstance[]) => any): Promise<FlowTestUserInstance[]>;
  /**
   * Lists FlowTestUserInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FlowTestUserListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: FlowTestUserListInstanceOptions, callback?: (error: Error | null, items: FlowTestUserInstance[]) => any): Promise<FlowTestUserInstance[]>;
  list(params?: any, callback?: any): Promise<FlowTestUserInstance[]>;
  /**
   * Retrieve a single page of FlowTestUserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: FlowTestUserPage) => any): Promise<FlowTestUserPage>;
  /**
   * Retrieve a single page of FlowTestUserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FlowTestUserListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: FlowTestUserListInstancePageOptions, callback?: (error: Error | null, items: FlowTestUserPage) => any): Promise<FlowTestUserPage>;
  page(params?: any, callback?: any): Promise<FlowTestUserPage>;

  /**
   * Create a FlowTestUserInstance
   *
   * @param { FlowTestUserListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlowTestUserInstance
   */
  create(params: FlowTestUserListInstanceCreateOptions, callback?: (error: Error | null, item?: FlowTestUserInstance) => any): Promise<FlowTestUserInstance>;
  create(params: any, callback?: any): Promise<FlowTestUserInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FlowTestUserSolution {
  sid?: string;
}

interface FlowTestUserListInstanceImpl extends FlowTestUserListInstance {}
class FlowTestUserListInstanceImpl implements FlowTestUserListInstance {
  _version?: V2;
  _solution?: FlowTestUserSolution;
  _uri?: string;

}

export function FlowTestUserListInstance(version: V2, sid: string): FlowTestUserListInstance {
  const instance = {} as FlowTestUserListInstanceImpl;

  instance._version = version;
  instance._solution = { sid };
  instance._uri = `/Flows/${sid}/TestUsers`;

  instance.page = function page(callback?: any): Promise<FlowTestUserPage> {

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new FlowTestUserPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<FlowTestUserPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new FlowTestUserPage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }



  instance.create = function create(params: any, callback?: any): Promise<FlowTestUserInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.testUsers === null || params.testUsers === undefined) {
      throw new Error('Required parameter "params.testUsers" missing.');
    }

    const data: any = {};

    data['TestUsers'] = serialize.map(params.testUsers, ((e) => e));

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new FlowTestUserInstance(operationVersion, payload, this._solution.sid));
    

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

interface FlowTestUserPayload extends FlowTestUserResource, Page.TwilioResponsePayload {
}

interface FlowTestUserResource {
  sid?: string | null;
  test_users?: Array<string> | null;
  url?: string | null;
}

export class FlowTestUserInstance {

  constructor(protected _version: V2, payload: FlowTestUserPayload, sid?: string) {
    this.sid = payload.sid;
    this.testUsers = payload.test_users;
    this.url = payload.url;

  }

  /**
   * Unique identifier of the flow.
   */
  sid?: string | null;
  /**
   * List of test user identities that can test draft versions of the flow.
   */
  testUsers?: Array<string> | null;
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
      sid: this.sid, 
      testUsers: this.testUsers, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class FlowTestUserPage extends Page<V2, FlowTestUserPayload, FlowTestUserResource, FlowTestUserInstance> {
  /**
   * Initialize the FlowTestUserPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: FlowTestUserSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FlowTestUserInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FlowTestUserPayload): FlowTestUserInstance {
    return new FlowTestUserInstance(
      this._version,
      payload,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

