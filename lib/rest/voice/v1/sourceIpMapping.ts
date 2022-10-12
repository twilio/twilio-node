/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Voice
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


/**
 * Options to pass to create a SourceIpMappingInstance
 *
 * @property { string } ipRecordSid The Twilio-provided string that uniquely identifies the IP Record resource to map from.
 * @property { string } sipDomainSid The SID of the SIP Domain that the IP Record should be mapped to.
 */
export interface SourceIpMappingListInstanceCreateOptions {
  ipRecordSid: string;
  sipDomainSid: string;
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
export interface SourceIpMappingListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: SourceIpMappingInstance, done: (err?: Error) => void) => void;
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
export interface SourceIpMappingListInstanceOptions {
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
export interface SourceIpMappingListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}




/**
 * Options to pass to update a SourceIpMappingInstance
 *
 * @property { string } sipDomainSid The SID of the SIP Domain that the IP Record should be mapped to.
 */
export interface SourceIpMappingContextUpdateOptions {
  sipDomainSid: string;
}

export interface SourceIpMappingListInstance {
  (sid: string): SourceIpMappingContext;
  get(sid: string): SourceIpMappingContext;


  /**
   * Create a SourceIpMappingInstance
   *
   * @param { SourceIpMappingListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SourceIpMappingInstance
   */
  create(params: SourceIpMappingListInstanceCreateOptions, callback?: (error: Error | null, item?: SourceIpMappingInstance) => any): Promise<SourceIpMappingInstance>;
  create(params: any, callback?: any): Promise<SourceIpMappingInstance>



  /**
   * Streams SourceIpMappingInstance records from the API.
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
  each(callback?: (item: SourceIpMappingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SourceIpMappingInstance records from the API.
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
   * @param { SourceIpMappingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: SourceIpMappingListInstanceEachOptions, callback?: (item: SourceIpMappingInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of SourceIpMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SourceIpMappingPage) => any): Promise<SourceIpMappingPage>;
  /**
   * Retrieve a single target page of SourceIpMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SourceIpMappingPage) => any): Promise<SourceIpMappingPage>;
  getPage(params?: any, callback?: any): Promise<SourceIpMappingPage>;
  /**
   * Lists SourceIpMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SourceIpMappingInstance[]) => any): Promise<SourceIpMappingInstance[]>;
  /**
   * Lists SourceIpMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SourceIpMappingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: SourceIpMappingListInstanceOptions, callback?: (error: Error | null, items: SourceIpMappingInstance[]) => any): Promise<SourceIpMappingInstance[]>;
  list(params?: any, callback?: any): Promise<SourceIpMappingInstance[]>;
  /**
   * Retrieve a single page of SourceIpMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SourceIpMappingPage) => any): Promise<SourceIpMappingPage>;
  /**
   * Retrieve a single page of SourceIpMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SourceIpMappingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: SourceIpMappingListInstancePageOptions, callback?: (error: Error | null, items: SourceIpMappingPage) => any): Promise<SourceIpMappingPage>;
  page(params?: any, callback?: any): Promise<SourceIpMappingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface SourceIpMappingListInstanceImpl extends SourceIpMappingListInstance {}
class SourceIpMappingListInstanceImpl implements SourceIpMappingListInstance {
  _version?: V1;
  _solution?: SourceIpMappingSolution;
  _uri?: string;

}

export function SourceIpMappingListInstance(version: V1): SourceIpMappingListInstance {
  const instance = ((sid) => instance.get(sid)) as SourceIpMappingListInstanceImpl;

  instance.get = function get(sid): SourceIpMappingContext {
    return new SourceIpMappingContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/SourceIpMappings`;

  instance.create = function create(params: any, callback?: any): Promise<SourceIpMappingInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.ipRecordSid === null || params.ipRecordSid === undefined) {
      throw new Error('Required parameter "params.ipRecordSid" missing.');
    }

    if (params.sipDomainSid === null || params.sipDomainSid === undefined) {
      throw new Error('Required parameter "params.sipDomainSid" missing.');
    }

    const data: any = {};

    data['IpRecordSid'] = params.ipRecordSid;
    data['SipDomainSid'] = params.sipDomainSid;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new SourceIpMappingInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<SourceIpMappingPage> {
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
    
    operationPromise = operationPromise.then(payload => new SourceIpMappingPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<SourceIpMappingPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new SourceIpMappingPage(this._version, payload, this._solution));
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


export interface SourceIpMappingContext {


  /**
   * Remove a SourceIpMappingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: SourceIpMappingInstance) => any): Promise<boolean>


  /**
   * Fetch a SourceIpMappingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SourceIpMappingInstance
   */
  fetch(callback?: (error: Error | null, item?: SourceIpMappingInstance) => any): Promise<SourceIpMappingInstance>


  /**
   * Update a SourceIpMappingInstance
   *
   * @param { SourceIpMappingContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SourceIpMappingInstance
   */
  update(params: SourceIpMappingContextUpdateOptions, callback?: (error: Error | null, item?: SourceIpMappingInstance) => any): Promise<SourceIpMappingInstance>;
  update(params: any, callback?: any): Promise<SourceIpMappingInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class SourceIpMappingContextImpl implements SourceIpMappingContext {
  protected _solution: SourceIpMappingSolution;
  protected _uri: string;


  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/SourceIpMappings/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<SourceIpMappingInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new SourceIpMappingInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  update(params: any, callback?: any): Promise<SourceIpMappingInstance> {
      if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.sipDomainSid === null || params.sipDomainSid === undefined) {
      throw new Error('Required parameter "params.sipDomainSid" missing.');
    }

    const data: any = {};

    data['SipDomainSid'] = params.sipDomainSid;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new SourceIpMappingInstance(operationVersion, payload, this._solution.sid));
    

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

interface SourceIpMappingPayload extends SourceIpMappingResource, Page.TwilioResponsePayload {
}

interface SourceIpMappingResource {
  sid?: string | null;
  ip_record_sid?: string | null;
  sip_domain_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class SourceIpMappingInstance {
  protected _solution: SourceIpMappingSolution;
  protected _context?: SourceIpMappingContext;

  constructor(protected _version: V1, payload: SourceIpMappingPayload, sid?: string) {
    this.sid = payload.sid;
    this.ipRecordSid = payload.ip_record_sid;
    this.sipDomainSid = payload.sip_domain_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The unique string that identifies an IP Record
   */
  ipRecordSid?: string | null;
  /**
   * The unique string that identifies a SIP Domain
   */
  sipDomainSid?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): SourceIpMappingContext {
    this._context = this._context || new SourceIpMappingContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a SourceIpMappingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: SourceIpMappingInstance) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a SourceIpMappingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SourceIpMappingInstance
   */
  fetch(callback?: (error: Error | null, item?: SourceIpMappingInstance) => any): Promise<SourceIpMappingInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SourceIpMappingInstance
   *
   * @param { SourceIpMappingContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SourceIpMappingInstance
   */
  update(params: SourceIpMappingContextUpdateOptions, callback?: (error: Error | null, item?: SourceIpMappingInstance) => any): Promise<SourceIpMappingInstance>;
  update(params: any, callback?: any): Promise<SourceIpMappingInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      ipRecordSid: this.ipRecordSid, 
      sipDomainSid: this.sipDomainSid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface SourceIpMappingSolution {
  sid?: string;
}

export class SourceIpMappingPage extends Page<V1, SourceIpMappingPayload, SourceIpMappingResource, SourceIpMappingInstance> {
  /**
   * Initialize the SourceIpMappingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SourceIpMappingSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SourceIpMappingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SourceIpMappingPayload): SourceIpMappingInstance {
    return new SourceIpMappingInstance(
      this._version,
      payload,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

