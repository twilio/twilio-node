/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");


/**
 * Options to pass to create a InteractionChannelInviteInstance
 *
 * @property { any } routing The Interaction\\\&#39;s routing logic.
 */
export interface InteractionChannelInviteListInstanceCreateOptions {
  routing: any;
}
/**
 * Options to pass to each
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface InteractionChannelInviteListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: InteractionChannelInviteInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface InteractionChannelInviteListInstanceOptions {
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface InteractionChannelInviteListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface InteractionChannelInviteListInstance {


  /**
   * Create a InteractionChannelInviteInstance
   *
   * @param { InteractionChannelInviteListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed InteractionChannelInviteInstance
   */
  create(params: InteractionChannelInviteListInstanceCreateOptions, callback?: (error: Error | null, item?: InteractionChannelInviteInstance) => any): Promise<InteractionChannelInviteInstance>;
  create(params: any, callback?: any): Promise<InteractionChannelInviteInstance>



  /**
   * Streams InteractionChannelInviteInstance records from the API.
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
  each(callback?: (item: InteractionChannelInviteInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams InteractionChannelInviteInstance records from the API.
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
   * @param { InteractionChannelInviteListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: InteractionChannelInviteListInstanceEachOptions, callback?: (item: InteractionChannelInviteInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of InteractionChannelInviteInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: InteractionChannelInvitePage) => any): Promise<InteractionChannelInvitePage>;
  /**
   * Retrieve a single target page of InteractionChannelInviteInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: InteractionChannelInvitePage) => any): Promise<InteractionChannelInvitePage>;
  getPage(params?: any, callback?: any): Promise<InteractionChannelInvitePage>;
  /**
   * Lists InteractionChannelInviteInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: InteractionChannelInviteInstance[]) => any): Promise<InteractionChannelInviteInstance[]>;
  /**
   * Lists InteractionChannelInviteInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InteractionChannelInviteListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: InteractionChannelInviteListInstanceOptions, callback?: (error: Error | null, items: InteractionChannelInviteInstance[]) => any): Promise<InteractionChannelInviteInstance[]>;
  list(params?: any, callback?: any): Promise<InteractionChannelInviteInstance[]>;
  /**
   * Retrieve a single page of InteractionChannelInviteInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: InteractionChannelInvitePage) => any): Promise<InteractionChannelInvitePage>;
  /**
   * Retrieve a single page of InteractionChannelInviteInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InteractionChannelInviteListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: InteractionChannelInviteListInstancePageOptions, callback?: (error: Error | null, items: InteractionChannelInvitePage) => any): Promise<InteractionChannelInvitePage>;
  page(params?: any, callback?: any): Promise<InteractionChannelInvitePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface InteractionChannelInviteListInstanceImpl extends InteractionChannelInviteListInstance {}
class InteractionChannelInviteListInstanceImpl implements InteractionChannelInviteListInstance {
  _version?: V1;
  _solution?: InteractionChannelInviteSolution;
  _uri?: string;

}

export function InteractionChannelInviteListInstance(version: V1, interactionSid: string, channelSid: string): InteractionChannelInviteListInstance {
  const instance = {} as InteractionChannelInviteListInstanceImpl;

  instance._version = version;
  instance._solution = { interactionSid, channelSid };
  instance._uri = `/Interactions/${interactionSid}/Channels/${channelSid}/Invites`;

  instance.create = function create(params: any, callback?: any): Promise<InteractionChannelInviteInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.routing === null || params.routing === undefined) {
      throw new Error('Required parameter "params.routing" missing.');
    }

    const data: any = {};

    data['Routing'] = params.routing;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new InteractionChannelInviteInstance(operationVersion, payload, this._solution.interactionSid, this._solution.channelSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<InteractionChannelInvitePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new InteractionChannelInvitePage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<InteractionChannelInvitePage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new InteractionChannelInvitePage(this._version, payload, this._solution));
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

interface InteractionChannelInvitePayload extends InteractionChannelInviteResource, Page.TwilioResponsePayload {
}

interface InteractionChannelInviteResource {
  sid?: string | null;
  interaction_sid?: string | null;
  channel_sid?: string | null;
  routing?: any | null;
  url?: string | null;
}

export class InteractionChannelInviteInstance {
  protected _solution: InteractionChannelInviteSolution;
  protected _context?: InteractionChannelInviteListInstance;

  constructor(protected _version: V1, payload: InteractionChannelInvitePayload, interactionSid: string, channelSid?: string) {
    this.sid = payload.sid;
    this.interactionSid = payload.interaction_sid;
    this.channelSid = payload.channel_sid;
    this.routing = payload.routing;
    this.url = payload.url;

    this._solution = { interactionSid, channelSid: channelSid || this.channelSid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The Interaction SID for this Channel
   */
  interactionSid?: string | null;
  /**
   * The Channel SID for this Invite
   */
  channelSid?: string | null;
  /**
   * A JSON object representing the routing rules for the Interaction Channel
   */
  routing?: any | null;
  url?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      interactionSid: this.interactionSid, 
      channelSid: this.channelSid, 
      routing: this.routing, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface InteractionChannelInviteSolution {
  interactionSid?: string;
  channelSid?: string;
}

export class InteractionChannelInvitePage extends Page<V1, InteractionChannelInvitePayload, InteractionChannelInviteResource, InteractionChannelInviteInstance> {
  /**
   * Initialize the InteractionChannelInvitePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: InteractionChannelInviteSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of InteractionChannelInviteInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: InteractionChannelInvitePayload): InteractionChannelInviteInstance {
    return new InteractionChannelInviteInstance(
      this._version,
      payload,
      this._solution.interactionSid,
      this._solution.channelSid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

