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
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");




/**
 * Options to pass to create a NetworkAccessProfileNetworkInstance
 *
 * @property { string } network The SID of the Network resource to be added to the Network Access Profile resource.
 */
export interface NetworkAccessProfileNetworkListInstanceCreateOptions {
  "network": string;
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
export interface NetworkAccessProfileNetworkListInstanceEachOptions {
  "pageSize"?: number;
  callback?: (item: NetworkAccessProfileNetworkInstance, done: (err?: Error) => void) => void;
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
export interface NetworkAccessProfileNetworkListInstanceOptions {
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
export interface NetworkAccessProfileNetworkListInstancePageOptions {
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface NetworkAccessProfileNetworkContext {


  /**
   * Remove a NetworkAccessProfileNetworkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a NetworkAccessProfileNetworkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NetworkAccessProfileNetworkInstance
   */
  fetch(callback?: (error: Error | null, item?: NetworkAccessProfileNetworkInstance) => any): Promise<NetworkAccessProfileNetworkInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface NetworkAccessProfileNetworkContextSolution {
  "networkAccessProfileSid"?: string;
  "sid"?: string;
}

export class NetworkAccessProfileNetworkContextImpl implements NetworkAccessProfileNetworkContext {
  protected _solution: NetworkAccessProfileNetworkContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, networkAccessProfileSid: string, sid: string) {
    this._solution = { networkAccessProfileSid, sid };
    this._uri = `/NetworkAccessProfiles/${networkAccessProfileSid}/Networks/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: "delete" });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<NetworkAccessProfileNetworkInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new NetworkAccessProfileNetworkInstance(operationVersion, payload, this._solution.networkAccessProfileSid, this._solution.sid));
    

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

interface NetworkAccessProfileNetworkPayload extends NetworkAccessProfileNetworkResource, Page.TwilioResponsePayload {
}

interface NetworkAccessProfileNetworkResource {
  sid?: string | null;
  network_access_profile_sid?: string | null;
  friendly_name?: string | null;
  iso_country?: string | null;
  identifiers?: Array<any> | null;
  url?: string | null;
}

export class NetworkAccessProfileNetworkInstance {
  protected _solution: NetworkAccessProfileNetworkContextSolution;
  protected _context?: NetworkAccessProfileNetworkContext;

  constructor(protected _version: V1, payload: NetworkAccessProfileNetworkPayload, networkAccessProfileSid: string, sid?: string) {
    this.sid = payload.sid;
    this.networkAccessProfileSid = payload.network_access_profile_sid;
    this.friendlyName = payload.friendly_name;
    this.isoCountry = payload.iso_country;
    this.identifiers = payload.identifiers;
    this.url = payload.url;

    this._solution = { networkAccessProfileSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The unique string that identifies the Network Access Profile resource
   */
  networkAccessProfileSid?: string | null;
  /**
   * A human readable identifier of this resource
   */
  friendlyName?: string | null;
  /**
   * The ISO country code of the Network resource
   */
  isoCountry?: string | null;
  /**
   * The MCC/MNCs included in the resource
   */
  identifiers?: Array<any> | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): NetworkAccessProfileNetworkContext {
    this._context = this._context || new NetworkAccessProfileNetworkContextImpl(this._version, this._solution.networkAccessProfileSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a NetworkAccessProfileNetworkInstance
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
   * Fetch a NetworkAccessProfileNetworkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NetworkAccessProfileNetworkInstance
   */
  fetch(callback?: (error: Error | null, item?: NetworkAccessProfileNetworkInstance) => any): Promise<NetworkAccessProfileNetworkInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      networkAccessProfileSid: this.networkAccessProfileSid, 
      friendlyName: this.friendlyName, 
      isoCountry: this.isoCountry, 
      identifiers: this.identifiers, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface NetworkAccessProfileNetworkListInstance {
  (sid: string): NetworkAccessProfileNetworkContext;
  get(sid: string): NetworkAccessProfileNetworkContext;


  /**
   * Create a NetworkAccessProfileNetworkInstance
   *
   * @param { NetworkAccessProfileNetworkListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NetworkAccessProfileNetworkInstance
   */
  create(params: NetworkAccessProfileNetworkListInstanceCreateOptions, callback?: (error: Error | null, item?: NetworkAccessProfileNetworkInstance) => any): Promise<NetworkAccessProfileNetworkInstance>;
  create(params: any, callback?: any): Promise<NetworkAccessProfileNetworkInstance>



  /**
   * Streams NetworkAccessProfileNetworkInstance records from the API.
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
  each(callback?: (item: NetworkAccessProfileNetworkInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams NetworkAccessProfileNetworkInstance records from the API.
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
   * @param { NetworkAccessProfileNetworkListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: NetworkAccessProfileNetworkListInstanceEachOptions, callback?: (item: NetworkAccessProfileNetworkInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of NetworkAccessProfileNetworkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: NetworkAccessProfileNetworkPage) => any): Promise<NetworkAccessProfileNetworkPage>;
  /**
   * Retrieve a single target page of NetworkAccessProfileNetworkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: NetworkAccessProfileNetworkPage) => any): Promise<NetworkAccessProfileNetworkPage>;
  getPage(params?: any, callback?: any): Promise<NetworkAccessProfileNetworkPage>;
  /**
   * Lists NetworkAccessProfileNetworkInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: NetworkAccessProfileNetworkInstance[]) => any): Promise<NetworkAccessProfileNetworkInstance[]>;
  /**
   * Lists NetworkAccessProfileNetworkInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { NetworkAccessProfileNetworkListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: NetworkAccessProfileNetworkListInstanceOptions, callback?: (error: Error | null, items: NetworkAccessProfileNetworkInstance[]) => any): Promise<NetworkAccessProfileNetworkInstance[]>;
  list(params?: any, callback?: any): Promise<NetworkAccessProfileNetworkInstance[]>;
  /**
   * Retrieve a single page of NetworkAccessProfileNetworkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: NetworkAccessProfileNetworkPage) => any): Promise<NetworkAccessProfileNetworkPage>;
  /**
   * Retrieve a single page of NetworkAccessProfileNetworkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { NetworkAccessProfileNetworkListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: NetworkAccessProfileNetworkListInstancePageOptions, callback?: (error: Error | null, items: NetworkAccessProfileNetworkPage) => any): Promise<NetworkAccessProfileNetworkPage>;
  page(params?: any, callback?: any): Promise<NetworkAccessProfileNetworkPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface NetworkAccessProfileNetworkSolution {
  networkAccessProfileSid?: string;
}

interface NetworkAccessProfileNetworkListInstanceImpl extends NetworkAccessProfileNetworkListInstance {}
class NetworkAccessProfileNetworkListInstanceImpl implements NetworkAccessProfileNetworkListInstance {
  _version?: V1;
  _solution?: NetworkAccessProfileNetworkSolution;
  _uri?: string;

}

export function NetworkAccessProfileNetworkListInstance(version: V1, networkAccessProfileSid: string): NetworkAccessProfileNetworkListInstance {
  const instance = ((sid) => instance.get(sid)) as NetworkAccessProfileNetworkListInstanceImpl;

  instance.get = function get(sid): NetworkAccessProfileNetworkContext {
    return new NetworkAccessProfileNetworkContextImpl(version, networkAccessProfileSid, sid);
  }

  instance._version = version;
  instance._solution = { networkAccessProfileSid };
  instance._uri = `/NetworkAccessProfiles/${networkAccessProfileSid}/Networks`;

  instance.create = function create(params: any, callback?: any): Promise<NetworkAccessProfileNetworkInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["network"] === null || params["network"] === undefined) {
      throw new Error('Required parameter "params[\'network\']" missing.');
    }

    const data: any = {};

    data["Network"] = params["network"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new NetworkAccessProfileNetworkInstance(operationVersion, payload, this._solution.networkAccessProfileSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<NetworkAccessProfileNetworkPage> {
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
    
    operationPromise = operationPromise.then(payload => new NetworkAccessProfileNetworkPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<NetworkAccessProfileNetworkPage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new NetworkAccessProfileNetworkPage(this._version, payload, this._solution));
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


export class NetworkAccessProfileNetworkPage extends Page<V1, NetworkAccessProfileNetworkPayload, NetworkAccessProfileNetworkResource, NetworkAccessProfileNetworkInstance> {
/**
* Initialize the NetworkAccessProfileNetworkPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: NetworkAccessProfileNetworkSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of NetworkAccessProfileNetworkInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: NetworkAccessProfileNetworkPayload): NetworkAccessProfileNetworkInstance {
    return new NetworkAccessProfileNetworkInstance(
    this._version,
    payload,
        this._solution.networkAccessProfileSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

