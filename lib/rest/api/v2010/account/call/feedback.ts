/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");

type CallFeedbackIssues = 'audio-latency'|'digits-not-captured'|'dropped-call'|'imperfect-audio'|'incorrect-caller-id'|'one-way-audio'|'post-dial-delay'|'unsolicited-call';


/**
 * Options to pass to create a FeedbackInstance
 *
 * @property { number } [qualityScore] The call quality expressed as an integer from &#x60;1&#x60; to &#x60;5&#x60; where &#x60;1&#x60; represents very poor call quality and &#x60;5&#x60; represents a perfect call.
 * @property { Array<CallFeedbackIssues> } [issue] One or more issues experienced during the call. The issues can be: &#x60;imperfect-audio&#x60;, &#x60;dropped-call&#x60;, &#x60;incorrect-caller-id&#x60;, &#x60;post-dial-delay&#x60;, &#x60;digits-not-captured&#x60;, &#x60;audio-latency&#x60;, &#x60;unsolicited-call&#x60;, or &#x60;one-way-audio&#x60;.
 */
export interface FeedbackListInstanceCreateOptions {
  qualityScore?: number;
  issue?: Array<CallFeedbackIssues>;
}

export interface FeedbackListInstance {



  /**
   * Streams FeedbackInstance records from the API.
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
  each(callback?: (item: FeedbackInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams FeedbackInstance records from the API.
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
   * @param { FeedbackListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: FeedbackListInstanceEachOptions, callback?: (item: FeedbackInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of FeedbackInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: FeedbackPage) => any): Promise<FeedbackPage>;
  /**
   * Retrieve a single target page of FeedbackInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FeedbackPage) => any): Promise<FeedbackPage>;
  getPage(params?: any, callback?: any): Promise<FeedbackPage>;
  /**
   * Lists FeedbackInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: FeedbackInstance[]) => any): Promise<FeedbackInstance[]>;
  /**
   * Lists FeedbackInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FeedbackListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: FeedbackListInstanceOptions, callback?: (error: Error | null, items: FeedbackInstance[]) => any): Promise<FeedbackInstance[]>;
  list(params?: any, callback?: any): Promise<FeedbackInstance[]>;
  /**
   * Retrieve a single page of FeedbackInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: FeedbackPage) => any): Promise<FeedbackPage>;
  /**
   * Retrieve a single page of FeedbackInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FeedbackListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: FeedbackListInstancePageOptions, callback?: (error: Error | null, items: FeedbackPage) => any): Promise<FeedbackPage>;
  page(params?: any, callback?: any): Promise<FeedbackPage>;

  /**
   * Create a FeedbackInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FeedbackInstance
   */
  create(callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
  /**
   * Create a FeedbackInstance
   *
   * @param { FeedbackListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FeedbackInstance
   */
  create(params: FeedbackListInstanceCreateOptions, callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
  create(params?: any, callback?: any): Promise<FeedbackInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FeedbackSolution {
  accountSid?: string;
  callSid?: string;
}

interface FeedbackListInstanceImpl extends FeedbackListInstance {}
class FeedbackListInstanceImpl implements FeedbackListInstance {
  _version?: V2010;
  _solution?: FeedbackSolution;
  _uri?: string;

}

export function FeedbackListInstance(version: V2010, accountSid: string, callSid: string): FeedbackListInstance {
  const instance = {} as FeedbackListInstanceImpl;

  instance._version = version;
  instance._solution = { accountSid, callSid };
  instance._uri = `/Accounts/${accountSid}/Calls/${callSid}/Feedback.json`;

  instance.page = function page(callback?: any): Promise<FeedbackPage> {

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new FeedbackPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<FeedbackPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new FeedbackPage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }



  instance.create = function create(params?: any, callback?: any): Promise<FeedbackInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.qualityScore !== undefined) data['QualityScore'] = params.qualityScore;
    if (params.issue !== undefined) data['Issue'] = serialize.map(params.issue, ((e) => e));

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new FeedbackInstance(operationVersion, payload, this._solution.accountSid, this._solution.callSid));
    

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

interface FeedbackPayload extends FeedbackResource, Page.TwilioResponsePayload {
}

interface FeedbackResource {
  account_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  issues?: Array<CallFeedbackIssues> | null;
  quality_score?: number | null;
  sid?: string | null;
}

export class FeedbackInstance {

  constructor(protected _version: V2010, payload: FeedbackPayload, accountSid: string, callSid?: string) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.issues = payload.issues;
    this.qualityScore = deserialize.integer(payload.quality_score);
    this.sid = payload.sid;

  }

  /**
   * The unique sid that identifies this account
   */
  accountSid?: string | null;
  /**
   * The date this resource was created
   */
  dateCreated?: string | null;
  /**
   * The date this resource was last updated
   */
  dateUpdated?: string | null;
  /**
   * Issues experienced during the call
   */
  issues?: Array<CallFeedbackIssues> | null;
  /**
   * 1 to 5 quality score
   */
  qualityScore?: number | null;
  /**
   * A string that uniquely identifies this feedback resource
   */
  sid?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      issues: this.issues, 
      qualityScore: this.qualityScore, 
      sid: this.sid
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class FeedbackPage extends Page<V2010, FeedbackPayload, FeedbackResource, FeedbackInstance> {
  /**
   * Initialize the FeedbackPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: FeedbackSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FeedbackInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FeedbackPayload): FeedbackInstance {
    return new FeedbackInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.callSid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

