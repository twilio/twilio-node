/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Media
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");


/**
 * Options to pass to create a PlaybackGrantInstance
 *
 * @property { number } [ttl] The time to live of the PlaybackGrant. Default value is 15 seconds. Maximum value is 60 seconds.
 * @property { string } [accessControlAllowOrigin] The full origin URL where the livestream can be streamed. If this is not provided, it can be streamed from any domain.
 */
export interface PlaybackGrantListInstanceCreateOptions {
  ttl?: number;
  accessControlAllowOrigin?: string;
}

export interface PlaybackGrantListInstance {


  /**
   * Create a PlaybackGrantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PlaybackGrantInstance
   */
  create(callback?: (error: Error | null, item?: PlaybackGrantInstance) => any): Promise<PlaybackGrantInstance>;
  /**
   * Create a PlaybackGrantInstance
   *
   * @param { PlaybackGrantListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PlaybackGrantInstance
   */
  create(params: PlaybackGrantListInstanceCreateOptions, callback?: (error: Error | null, item?: PlaybackGrantInstance) => any): Promise<PlaybackGrantInstance>;
  create(params?: any, callback?: any): Promise<PlaybackGrantInstance>



  /**
   * Streams PlaybackGrantInstance records from the API.
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
  each(callback?: (item: PlaybackGrantInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams PlaybackGrantInstance records from the API.
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
   * @param { PlaybackGrantListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: PlaybackGrantListInstanceEachOptions, callback?: (item: PlaybackGrantInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of PlaybackGrantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: PlaybackGrantPage) => any): Promise<PlaybackGrantPage>;
  /**
   * Retrieve a single target page of PlaybackGrantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: PlaybackGrantPage) => any): Promise<PlaybackGrantPage>;
  getPage(params?: any, callback?: any): Promise<PlaybackGrantPage>;
  /**
   * Lists PlaybackGrantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: PlaybackGrantInstance[]) => any): Promise<PlaybackGrantInstance[]>;
  /**
   * Lists PlaybackGrantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PlaybackGrantListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: PlaybackGrantListInstanceOptions, callback?: (error: Error | null, items: PlaybackGrantInstance[]) => any): Promise<PlaybackGrantInstance[]>;
  list(params?: any, callback?: any): Promise<PlaybackGrantInstance[]>;
  /**
   * Retrieve a single page of PlaybackGrantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: PlaybackGrantPage) => any): Promise<PlaybackGrantPage>;
  /**
   * Retrieve a single page of PlaybackGrantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PlaybackGrantListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: PlaybackGrantListInstancePageOptions, callback?: (error: Error | null, items: PlaybackGrantPage) => any): Promise<PlaybackGrantPage>;
  page(params?: any, callback?: any): Promise<PlaybackGrantPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface PlaybackGrantListInstanceImpl extends PlaybackGrantListInstance {}
class PlaybackGrantListInstanceImpl implements PlaybackGrantListInstance {
  _version?: V1;
  _solution?: PlaybackGrantSolution;
  _uri?: string;

}

export function PlaybackGrantListInstance(version: V1, sid: string): PlaybackGrantListInstance {
  const instance = {} as PlaybackGrantListInstanceImpl;

  instance._version = version;
  instance._solution = { sid };
  instance._uri = `/PlayerStreamers/${sid}/PlaybackGrant`;

  instance.create = function create(params?: any, callback?: any): Promise<PlaybackGrantInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.ttl !== undefined) data['Ttl'] = params.ttl;
    if (params.accessControlAllowOrigin !== undefined) data['AccessControlAllowOrigin'] = params.accessControlAllowOrigin;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new PlaybackGrantInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(callback?: any): Promise<PlaybackGrantPage> {

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new PlaybackGrantPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<PlaybackGrantPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new PlaybackGrantPage(this._version, payload, this._solution));
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

interface PlaybackGrantPayload extends PlaybackGrantResource, Page.TwilioResponsePayload {
}

interface PlaybackGrantResource {
  sid?: string | null;
  url?: string | null;
  account_sid?: string | null;
  date_created?: Date | null;
  grant?: any | null;
}

export class PlaybackGrantInstance {
  protected _solution: PlaybackGrantSolution;
  protected _context?: PlaybackGrantListInstance;

  constructor(protected _version: V1, payload: PlaybackGrantPayload, sid?: string) {
    this.sid = payload.sid;
    this.url = payload.url;
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.grant = payload.grant;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the PlayerStreamer associated with this PlaybackGrant.
   */
  sid?: string | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The grant that authorizes the player sdk to connect to the livestream
   */
  grant?: any | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      url: this.url, 
      accountSid: this.accountSid, 
      dateCreated: this.dateCreated, 
      grant: this.grant
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface PlaybackGrantSolution {
  sid?: string;
}

export class PlaybackGrantPage extends Page<V1, PlaybackGrantPayload, PlaybackGrantResource, PlaybackGrantInstance> {
  /**
   * Initialize the PlaybackGrantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: PlaybackGrantSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of PlaybackGrantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: PlaybackGrantPayload): PlaybackGrantInstance {
    return new PlaybackGrantInstance(
      this._version,
      payload,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

