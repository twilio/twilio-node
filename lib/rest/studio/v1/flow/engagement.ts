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
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { EngagementContextListInstance } from "./engagement/engagementContext";
import { StepListInstance } from "./engagement/step";



type EngagementStatus = 'active'|'ended';


/**
 * Options to pass to create a EngagementInstance
 *
 * @property { string } to The Contact phone number to start a Studio Flow Engagement, available as variable &#x60;{{contact.channel.address}}&#x60;.
 * @property { string } from The Twilio phone number to send messages or initiate calls from during the Flow Engagement. Available as variable &#x60;{{flow.channel.address}}&#x60;
 * @property { any } [parameters] A JSON string we will add to your flow\\\&#39;s context and that you can access as variables inside your flow. For example, if you pass in &#x60;Parameters&#x3D;{\\\&#39;name\\\&#39;:\\\&#39;Zeke\\\&#39;}&#x60; then inside a widget you can reference the variable &#x60;{{flow.data.name}}&#x60; which will return the string \\\&#39;Zeke\\\&#39;. Note: the JSON value must explicitly be passed as a string, not as a hash object. Depending on your particular HTTP library, you may need to add quotes or URL encode your JSON string.
 */
export interface EngagementListInstanceCreateOptions {
  "to": string;
  "from": string;
  "parameters"?: any;
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
export interface EngagementListInstanceEachOptions {
  "pageSize"?: number;
  callback?: (item: EngagementInstance, done: (err?: Error) => void) => void;
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
export interface EngagementListInstanceOptions {
  "pageSize"?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface EngagementListInstancePageOptions {
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface EngagementContext {

  engagementContext: EngagementContextListInstance;
  steps: StepListInstance;

  /**
   * Remove a EngagementInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a EngagementInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EngagementInstance
   */
  fetch(callback?: (error: Error | null, item?: EngagementInstance) => any): Promise<EngagementInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface EngagementContextSolution {
  "flowSid"?: string;
  "sid"?: string;
}

export class EngagementContextImpl implements EngagementContext {
  protected _solution: EngagementContextSolution;
  protected _uri: string;

  protected _engagementContext?: EngagementContextListInstance;
  protected _steps?: StepListInstance;

  constructor(protected _version: V1, flowSid: string, sid: string) {
    this._solution = { flowSid, sid };
    this._uri = `/Flows/${flowSid}/Engagements/${sid}`;
  }

  get engagementContext(): EngagementContextListInstance {
    this._engagementContext = this._engagementContext || EngagementContextListInstance(this._version, this._solution.flowSid, this._solution.sid);
    return this._engagementContext;
  }

  get steps(): StepListInstance {
    this._steps = this._steps || StepListInstance(this._version, this._solution.flowSid, this._solution.sid);
    return this._steps;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: "delete" });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<EngagementInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new EngagementInstance(operationVersion, payload, this._solution.flowSid, this._solution.sid));
    

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

interface EngagementPayload extends EngagementResource, Page.TwilioResponsePayload {
}

interface EngagementResource {
  sid?: string | null;
  account_sid?: string | null;
  flow_sid?: string | null;
  contact_sid?: string | null;
  contact_channel_address?: string | null;
  context?: any | null;
  status?: EngagementStatus;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class EngagementInstance {
  protected _solution: EngagementContextSolution;
  protected _context?: EngagementContext;

  constructor(protected _version: V1, payload: EngagementPayload, flowSid: string, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.flowSid = payload.flow_sid;
    this.contactSid = payload.contact_sid;
    this.contactChannelAddress = payload.contact_channel_address;
    this.context = payload.context;
    this.status = payload.status;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { flowSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Flow
   */
  flowSid?: string | null;
  /**
   * The SID of the Contact
   */
  contactSid?: string | null;
  /**
   * The phone number, SIP address or Client identifier that triggered this Engagement
   */
  contactChannelAddress?: string | null;
  /**
   * The current state of the execution flow
   */
  context?: any | null;
  status?: EngagementStatus;
  /**
   * The ISO 8601 date and time in GMT when the Engagement was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the Engagement was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;
  /**
   * The URLs of the Engagement\'s nested resources
   */
  links?: object | null;

  private get _proxy(): EngagementContext {
    this._context = this._context || new EngagementContextImpl(this._version, this._solution.flowSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a EngagementInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a EngagementInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EngagementInstance
   */
  fetch(callback?: (error: Error | null, item?: EngagementInstance) => any): Promise<EngagementInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the engagementContext.
   */
  engagementContext(): EngagementContextListInstance {
    return this._proxy.engagementContext;
  }

  /**
   * Access the steps.
   */
  steps(): StepListInstance {
    return this._proxy.steps;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      accountSid: this.accountSid, 
      flowSid: this.flowSid, 
      contactSid: this.contactSid, 
      contactChannelAddress: this.contactChannelAddress, 
      context: this.context, 
      status: this.status, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      url: this.url, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface EngagementListInstance {
  (sid: string): EngagementContext;
  get(sid: string): EngagementContext;


  /**
   * Create a EngagementInstance
   *
   * @param { EngagementListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EngagementInstance
   */
  create(params: EngagementListInstanceCreateOptions, callback?: (error: Error | null, item?: EngagementInstance) => any): Promise<EngagementInstance>;
  create(params: any, callback?: any): Promise<EngagementInstance>



  /**
   * Streams EngagementInstance records from the API.
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
  each(callback?: (item: EngagementInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams EngagementInstance records from the API.
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
   * @param { EngagementListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: EngagementListInstanceEachOptions, callback?: (item: EngagementInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of EngagementInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: EngagementPage) => any): Promise<EngagementPage>;
  /**
   * Retrieve a single target page of EngagementInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: EngagementPage) => any): Promise<EngagementPage>;
  getPage(params?: any, callback?: any): Promise<EngagementPage>;
  /**
   * Lists EngagementInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: EngagementInstance[]) => any): Promise<EngagementInstance[]>;
  /**
   * Lists EngagementInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EngagementListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: EngagementListInstanceOptions, callback?: (error: Error | null, items: EngagementInstance[]) => any): Promise<EngagementInstance[]>;
  list(params?: any, callback?: any): Promise<EngagementInstance[]>;
  /**
   * Retrieve a single page of EngagementInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: EngagementPage) => any): Promise<EngagementPage>;
  /**
   * Retrieve a single page of EngagementInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EngagementListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: EngagementListInstancePageOptions, callback?: (error: Error | null, items: EngagementPage) => any): Promise<EngagementPage>;
  page(params?: any, callback?: any): Promise<EngagementPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface EngagementSolution {
  flowSid?: string;
}

interface EngagementListInstanceImpl extends EngagementListInstance {}
class EngagementListInstanceImpl implements EngagementListInstance {
  _version?: V1;
  _solution?: EngagementSolution;
  _uri?: string;

}

export function EngagementListInstance(version: V1, flowSid: string): EngagementListInstance {
  const instance = ((sid) => instance.get(sid)) as EngagementListInstanceImpl;

  instance.get = function get(sid): EngagementContext {
    return new EngagementContextImpl(version, flowSid, sid);
  }

  instance._version = version;
  instance._solution = { flowSid };
  instance._uri = `/Flows/${flowSid}/Engagements`;

  instance.create = function create(params: any, callback?: any): Promise<EngagementInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["to"] === null || params["to"] === undefined) {
      throw new Error('Required parameter "params[\'to\']" missing.');
    }

    if (params["from"] === null || params["from"] === undefined) {
      throw new Error('Required parameter "params[\'from\']" missing.');
    }

    const data: any = {};

    data["To"] = params["to"];
    data["From"] = params["from"];
    if (params["parameters"] !== undefined) data["Parameters"] = params["parameters"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new EngagementInstance(operationVersion, payload, this._solution.flowSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<EngagementPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];
    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new EngagementPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<EngagementPage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new EngagementPage(this._version, payload, this._solution));
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


export class EngagementPage extends Page<V1, EngagementPayload, EngagementResource, EngagementInstance> {
/**
* Initialize the EngagementPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: EngagementSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of EngagementInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: EngagementPayload): EngagementInstance {
    return new EngagementInstance(
    this._version,
    payload,
        this._solution.flowSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }
