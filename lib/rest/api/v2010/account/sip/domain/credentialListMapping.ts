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
import Page from "../../../../../../base/Page";
import Response from "../../../../../../http/response";
import V2010 from "../../../../V2010";
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");




/**
 * Options to pass to create a CredentialListMappingInstance
 *
 * @property { string } credentialListSid A 34 character string that uniquely identifies the CredentialList resource to map to the SIP domain.
 */
export interface CredentialListMappingListInstanceCreateOptions {
  credentialListSid: string;
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
export interface CredentialListMappingListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: CredentialListMappingInstance, done: (err?: Error) => void) => void;
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
export interface CredentialListMappingListInstanceOptions {
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
export interface CredentialListMappingListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface CredentialListMappingListInstance {
  (sid: string): CredentialListMappingContext;
  get(sid: string): CredentialListMappingContext;


  /**
   * Create a CredentialListMappingInstance
   *
   * @param { CredentialListMappingListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CredentialListMappingInstance
   */
  create(params: CredentialListMappingListInstanceCreateOptions, callback?: (error: Error | null, item?: CredentialListMappingInstance) => any): Promise<CredentialListMappingInstance>;
  create(params: any, callback?: any): Promise<CredentialListMappingInstance>



  /**
   * Streams CredentialListMappingInstance records from the API.
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
  each(callback?: (item: CredentialListMappingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams CredentialListMappingInstance records from the API.
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
   * @param { CredentialListMappingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: CredentialListMappingListInstanceEachOptions, callback?: (item: CredentialListMappingInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of CredentialListMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: CredentialListMappingPage) => any): Promise<CredentialListMappingPage>;
  /**
   * Retrieve a single target page of CredentialListMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CredentialListMappingPage) => any): Promise<CredentialListMappingPage>;
  getPage(params?: any, callback?: any): Promise<CredentialListMappingPage>;
  /**
   * Lists CredentialListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: CredentialListMappingInstance[]) => any): Promise<CredentialListMappingInstance[]>;
  /**
   * Lists CredentialListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CredentialListMappingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: CredentialListMappingListInstanceOptions, callback?: (error: Error | null, items: CredentialListMappingInstance[]) => any): Promise<CredentialListMappingInstance[]>;
  list(params?: any, callback?: any): Promise<CredentialListMappingInstance[]>;
  /**
   * Retrieve a single page of CredentialListMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: CredentialListMappingPage) => any): Promise<CredentialListMappingPage>;
  /**
   * Retrieve a single page of CredentialListMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CredentialListMappingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: CredentialListMappingListInstancePageOptions, callback?: (error: Error | null, items: CredentialListMappingPage) => any): Promise<CredentialListMappingPage>;
  page(params?: any, callback?: any): Promise<CredentialListMappingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CredentialListMappingSolution {
  accountSid?: string;
  domainSid?: string;
}

interface CredentialListMappingListInstanceImpl extends CredentialListMappingListInstance {}
class CredentialListMappingListInstanceImpl implements CredentialListMappingListInstance {
  _version?: V2010;
  _solution?: CredentialListMappingSolution;
  _uri?: string;

}

export function CredentialListMappingListInstance(version: V2010, accountSid: string, domainSid: string): CredentialListMappingListInstance {
  const instance = ((sid) => instance.get(sid)) as CredentialListMappingListInstanceImpl;

  instance.get = function get(sid): CredentialListMappingContext {
    return new CredentialListMappingContextImpl(version, accountSid, domainSid, sid);
  }

  instance._version = version;
  instance._solution = { accountSid, domainSid };
  instance._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/CredentialListMappings.json`;

  instance.create = function create(params: any, callback?: any): Promise<CredentialListMappingInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.credentialListSid === null || params.credentialListSid === undefined) {
      throw new Error('Required parameter "params.credentialListSid" missing.');
    }

    const data: any = {};

    data['CredentialListSid'] = params.credentialListSid;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new CredentialListMappingInstance(operationVersion, payload, this._solution.accountSid, this._solution.domainSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<CredentialListMappingPage> {
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
    
    operationPromise = operationPromise.then(payload => new CredentialListMappingPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<CredentialListMappingPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new CredentialListMappingPage(this._version, payload, this._solution));
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


export interface CredentialListMappingContext {


  /**
   * Remove a CredentialListMappingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a CredentialListMappingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CredentialListMappingInstance
   */
  fetch(callback?: (error: Error | null, item?: CredentialListMappingInstance) => any): Promise<CredentialListMappingInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CredentialListMappingContextSolution {
  accountSid?: string;
  domainSid?: string;
  sid?: string;
}

export class CredentialListMappingContextImpl implements CredentialListMappingContext {
  protected _solution: CredentialListMappingContextSolution;
  protected _uri: string;


  constructor(protected _version: V2010, accountSid: string, domainSid: string, sid: string) {
    this._solution = { accountSid, domainSid, sid };
    this._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/CredentialListMappings/${sid}.json`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<CredentialListMappingInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new CredentialListMappingInstance(operationVersion, payload, this._solution.accountSid, this._solution.domainSid, this._solution.sid));
    

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

interface CredentialListMappingPayload extends CredentialListMappingResource, Page.TwilioResponsePayload {
}

interface CredentialListMappingResource {
  account_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  domain_sid?: string | null;
  friendly_name?: string | null;
  sid?: string | null;
  uri?: string | null;
}

export class CredentialListMappingInstance {
  protected _solution: CredentialListMappingContextSolution;
  protected _context?: CredentialListMappingContext;

  constructor(protected _version: V2010, payload: CredentialListMappingPayload, accountSid: string, domainSid: string, sid?: string) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.domainSid = payload.domain_sid;
    this.friendlyName = payload.friendly_name;
    this.sid = payload.sid;
    this.uri = payload.uri;

    this._solution = { accountSid, domainSid, sid: sid || this.sid };
  }

  /**
   * The unique id of the Account that is responsible for this resource.
   */
  accountSid?: string | null;
  /**
   * The date that this resource was created, given as GMT in RFC 2822 format.
   */
  dateCreated?: string | null;
  /**
   * The date that this resource was last updated, given as GMT in RFC 2822 format.
   */
  dateUpdated?: string | null;
  /**
   * The unique string that identifies the SipDomain resource.
   */
  domainSid?: string | null;
  /**
   * A human readable descriptive text for this resource, up to 64 characters long.
   */
  friendlyName?: string | null;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid?: string | null;
  /**
   * The URI for this resource, relative to https://api.twilio.com
   */
  uri?: string | null;

  private get _proxy(): CredentialListMappingContext {
    this._context = this._context || new CredentialListMappingContextImpl(this._version, this._solution.accountSid, this._solution.domainSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a CredentialListMappingInstance
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
   * Fetch a CredentialListMappingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CredentialListMappingInstance
   */
  fetch(callback?: (error: Error | null, item?: CredentialListMappingInstance) => any): Promise<CredentialListMappingInstance>
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
      accountSid: this.accountSid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      domainSid: this.domainSid, 
      friendlyName: this.friendlyName, 
      sid: this.sid, 
      uri: this.uri
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class CredentialListMappingPage extends Page<V2010, CredentialListMappingPayload, CredentialListMappingResource, CredentialListMappingInstance> {
/**
* Initialize the CredentialListMappingPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2010, response: Response<string>, solution: CredentialListMappingSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of CredentialListMappingInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: CredentialListMappingPayload): CredentialListMappingInstance {
    return new CredentialListMappingInstance(
    this._version,
    payload,
        this._solution.accountSid,
        this._solution.domainSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }


