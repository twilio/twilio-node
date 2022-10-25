/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Supersim
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { NetworkAccessProfileNetworkListInstance } from "./networkAccessProfile/networkAccessProfileNetwork";




/**
 * Options to pass to update a NetworkAccessProfileInstance
 *
 * @property { string } [uniqueName] The new unique name of the Network Access Profile.
 */
export interface NetworkAccessProfileContextUpdateOptions {
  uniqueName?: string;
}

/**
 * Options to pass to create a NetworkAccessProfileInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used in place of the resource\\\&#39;s &#x60;sid&#x60; in the URL to address the resource.
 * @property { Array<string> } [networks] List of Network SIDs that this Network Access Profile will allow connections to.
 */
export interface NetworkAccessProfileListInstanceCreateOptions {
  uniqueName?: string;
  networks?: Array<string>;
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
export interface NetworkAccessProfileListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: NetworkAccessProfileInstance, done: (err?: Error) => void) => void;
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
export interface NetworkAccessProfileListInstanceOptions {
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
export interface NetworkAccessProfileListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface NetworkAccessProfileContext {

  networks: NetworkAccessProfileNetworkListInstance;

  /**
   * Fetch a NetworkAccessProfileInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NetworkAccessProfileInstance
   */
  fetch(callback?: (error: Error | null, item?: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>


  /**
   * Update a NetworkAccessProfileInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NetworkAccessProfileInstance
   */
  update(callback?: (error: Error | null, item?: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
  /**
   * Update a NetworkAccessProfileInstance
   *
   * @param { NetworkAccessProfileContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NetworkAccessProfileInstance
   */
  update(params: NetworkAccessProfileContextUpdateOptions, callback?: (error: Error | null, item?: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
  update(params?: any, callback?: any): Promise<NetworkAccessProfileInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface NetworkAccessProfileContextSolution {
  sid?: string;
}

export class NetworkAccessProfileContextImpl implements NetworkAccessProfileContext {
  protected _solution: NetworkAccessProfileContextSolution;
  protected _uri: string;

  protected _networks?: NetworkAccessProfileNetworkListInstance;

  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/NetworkAccessProfiles/${sid}`;
  }

  get networks(): NetworkAccessProfileNetworkListInstance {
    this._networks = this._networks || NetworkAccessProfileNetworkListInstance(this._version, this._solution.sid);
    return this._networks;
  }

  fetch(callback?: any): Promise<NetworkAccessProfileInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new NetworkAccessProfileInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<NetworkAccessProfileInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.uniqueName !== undefined) data['UniqueName'] = params.uniqueName;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new NetworkAccessProfileInstance(operationVersion, payload, this._solution.sid));
    

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

interface NetworkAccessProfilePayload extends NetworkAccessProfileResource, Page.TwilioResponsePayload {
}

interface NetworkAccessProfileResource {
  sid?: string | null;
  unique_name?: string | null;
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class NetworkAccessProfileInstance {
  protected _solution: NetworkAccessProfileContextSolution;
  protected _context?: NetworkAccessProfileContext;

  constructor(protected _version: V1, payload: NetworkAccessProfilePayload, sid?: string) {
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  /**
   * The SID of the Account that the Network Access Profile belongs to
   */
  accountSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;
  links?: object | null;

  private get _proxy(): NetworkAccessProfileContext {
    this._context = this._context || new NetworkAccessProfileContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a NetworkAccessProfileInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NetworkAccessProfileInstance
   */
  fetch(callback?: (error: Error | null, item?: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a NetworkAccessProfileInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NetworkAccessProfileInstance
   */
  update(callback?: (error: Error | null, item?: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
  /**
   * Update a NetworkAccessProfileInstance
   *
   * @param { NetworkAccessProfileContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NetworkAccessProfileInstance
   */
  update(params: NetworkAccessProfileContextUpdateOptions, callback?: (error: Error | null, item?: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
  update(params?: any, callback?: any): Promise<NetworkAccessProfileInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the networks.
   */
  networks(): NetworkAccessProfileNetworkListInstance {
    return this._proxy.networks;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      uniqueName: this.uniqueName, 
      accountSid: this.accountSid, 
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


export interface NetworkAccessProfileListInstance {
  (sid: string): NetworkAccessProfileContext;
  get(sid: string): NetworkAccessProfileContext;


  /**
   * Create a NetworkAccessProfileInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NetworkAccessProfileInstance
   */
  create(callback?: (error: Error | null, item?: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
  /**
   * Create a NetworkAccessProfileInstance
   *
   * @param { NetworkAccessProfileListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NetworkAccessProfileInstance
   */
  create(params: NetworkAccessProfileListInstanceCreateOptions, callback?: (error: Error | null, item?: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
  create(params?: any, callback?: any): Promise<NetworkAccessProfileInstance>



  /**
   * Streams NetworkAccessProfileInstance records from the API.
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
  each(callback?: (item: NetworkAccessProfileInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams NetworkAccessProfileInstance records from the API.
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
   * @param { NetworkAccessProfileListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: NetworkAccessProfileListInstanceEachOptions, callback?: (item: NetworkAccessProfileInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of NetworkAccessProfileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: NetworkAccessProfilePage) => any): Promise<NetworkAccessProfilePage>;
  /**
   * Retrieve a single target page of NetworkAccessProfileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: NetworkAccessProfilePage) => any): Promise<NetworkAccessProfilePage>;
  getPage(params?: any, callback?: any): Promise<NetworkAccessProfilePage>;
  /**
   * Lists NetworkAccessProfileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: NetworkAccessProfileInstance[]) => any): Promise<NetworkAccessProfileInstance[]>;
  /**
   * Lists NetworkAccessProfileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { NetworkAccessProfileListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: NetworkAccessProfileListInstanceOptions, callback?: (error: Error | null, items: NetworkAccessProfileInstance[]) => any): Promise<NetworkAccessProfileInstance[]>;
  list(params?: any, callback?: any): Promise<NetworkAccessProfileInstance[]>;
  /**
   * Retrieve a single page of NetworkAccessProfileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: NetworkAccessProfilePage) => any): Promise<NetworkAccessProfilePage>;
  /**
   * Retrieve a single page of NetworkAccessProfileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { NetworkAccessProfileListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: NetworkAccessProfileListInstancePageOptions, callback?: (error: Error | null, items: NetworkAccessProfilePage) => any): Promise<NetworkAccessProfilePage>;
  page(params?: any, callback?: any): Promise<NetworkAccessProfilePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface NetworkAccessProfileSolution {
}

interface NetworkAccessProfileListInstanceImpl extends NetworkAccessProfileListInstance {}
class NetworkAccessProfileListInstanceImpl implements NetworkAccessProfileListInstance {
  _version?: V1;
  _solution?: NetworkAccessProfileSolution;
  _uri?: string;

}

export function NetworkAccessProfileListInstance(version: V1): NetworkAccessProfileListInstance {
  const instance = ((sid) => instance.get(sid)) as NetworkAccessProfileListInstanceImpl;

  instance.get = function get(sid): NetworkAccessProfileContext {
    return new NetworkAccessProfileContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/NetworkAccessProfiles`;

  instance.create = function create(params?: any, callback?: any): Promise<NetworkAccessProfileInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.uniqueName !== undefined) data['UniqueName'] = params.uniqueName;
    if (params.networks !== undefined) data['Networks'] = serialize.map(params.networks, ((e) => e));

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new NetworkAccessProfileInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<NetworkAccessProfilePage> {
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
    
    operationPromise = operationPromise.then(payload => new NetworkAccessProfilePage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<NetworkAccessProfilePage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new NetworkAccessProfilePage(this._version, payload, this._solution));
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


export class NetworkAccessProfilePage extends Page<V1, NetworkAccessProfilePayload, NetworkAccessProfileResource, NetworkAccessProfileInstance> {
/**
* Initialize the NetworkAccessProfilePage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: NetworkAccessProfileSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of NetworkAccessProfileInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: NetworkAccessProfilePayload): NetworkAccessProfileInstance {
    return new NetworkAccessProfileInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

