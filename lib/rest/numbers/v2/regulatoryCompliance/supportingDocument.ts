/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
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



type SupportingDocumentStatus = 'draft'|'pending-review'|'rejected'|'approved'|'expired'|'provisionally-approved';


/**
 * Options to pass to create a SupportingDocumentInstance
 *
 * @property { string } friendlyName The string that you assigned to describe the resource.
 * @property { string } type The type of the Supporting Document.
 * @property { any } [attributes] The set of parameters that are the attributes of the Supporting Documents resource which are derived Supporting Document Types.
 */
export interface SupportingDocumentListInstanceCreateOptions {
  friendlyName: string;
  type: string;
  attributes?: any;
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
export interface SupportingDocumentListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: SupportingDocumentInstance, done: (err?: Error) => void) => void;
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
export interface SupportingDocumentListInstanceOptions {
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
export interface SupportingDocumentListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



/**
 * Options to pass to update a SupportingDocumentInstance
 *
 * @property { string } [friendlyName] The string that you assigned to describe the resource.
 * @property { any } [attributes] The set of parameters that are the attributes of the Supporting Document resource which are derived Supporting Document Types.
 */
export interface SupportingDocumentContextUpdateOptions {
  friendlyName?: string;
  attributes?: any;
}

export interface SupportingDocumentListInstance {
  (sid: string): SupportingDocumentContext;
  get(sid: string): SupportingDocumentContext;


  /**
   * Create a SupportingDocumentInstance
   *
   * @param { SupportingDocumentListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SupportingDocumentInstance
   */
  create(params: SupportingDocumentListInstanceCreateOptions, callback?: (error: Error | null, item?: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
  create(params: any, callback?: any): Promise<SupportingDocumentInstance>



  /**
   * Streams SupportingDocumentInstance records from the API.
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
  each(callback?: (item: SupportingDocumentInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SupportingDocumentInstance records from the API.
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
   * @param { SupportingDocumentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: SupportingDocumentListInstanceEachOptions, callback?: (item: SupportingDocumentInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of SupportingDocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SupportingDocumentPage) => any): Promise<SupportingDocumentPage>;
  /**
   * Retrieve a single target page of SupportingDocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SupportingDocumentPage) => any): Promise<SupportingDocumentPage>;
  getPage(params?: any, callback?: any): Promise<SupportingDocumentPage>;
  /**
   * Lists SupportingDocumentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SupportingDocumentInstance[]) => any): Promise<SupportingDocumentInstance[]>;
  /**
   * Lists SupportingDocumentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SupportingDocumentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: SupportingDocumentListInstanceOptions, callback?: (error: Error | null, items: SupportingDocumentInstance[]) => any): Promise<SupportingDocumentInstance[]>;
  list(params?: any, callback?: any): Promise<SupportingDocumentInstance[]>;
  /**
   * Retrieve a single page of SupportingDocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SupportingDocumentPage) => any): Promise<SupportingDocumentPage>;
  /**
   * Retrieve a single page of SupportingDocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SupportingDocumentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: SupportingDocumentListInstancePageOptions, callback?: (error: Error | null, items: SupportingDocumentPage) => any): Promise<SupportingDocumentPage>;
  page(params?: any, callback?: any): Promise<SupportingDocumentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SupportingDocumentSolution {
}

interface SupportingDocumentListInstanceImpl extends SupportingDocumentListInstance {}
class SupportingDocumentListInstanceImpl implements SupportingDocumentListInstance {
  _version?: V2;
  _solution?: SupportingDocumentSolution;
  _uri?: string;

}

export function SupportingDocumentListInstance(version: V2): SupportingDocumentListInstance {
  const instance = ((sid) => instance.get(sid)) as SupportingDocumentListInstanceImpl;

  instance.get = function get(sid): SupportingDocumentContext {
    return new SupportingDocumentContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/RegulatoryCompliance/SupportingDocuments`;

  instance.create = function create(params: any, callback?: any): Promise<SupportingDocumentInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.friendlyName === null || params.friendlyName === undefined) {
      throw new Error('Required parameter "params.friendlyName" missing.');
    }

    if (params.type === null || params.type === undefined) {
      throw new Error('Required parameter "params.type" missing.');
    }

    const data: any = {};

    data['FriendlyName'] = params.friendlyName;
    data['Type'] = params.type;
    if (params.attributes !== undefined) data['Attributes'] = params.attributes;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new SupportingDocumentInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<SupportingDocumentPage> {
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
    
    operationPromise = operationPromise.then(payload => new SupportingDocumentPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<SupportingDocumentPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new SupportingDocumentPage(this._version, payload, this._solution));
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


export interface SupportingDocumentContext {


  /**
   * Remove a SupportingDocumentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a SupportingDocumentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SupportingDocumentInstance
   */
  fetch(callback?: (error: Error | null, item?: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>


  /**
   * Update a SupportingDocumentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SupportingDocumentInstance
   */
  update(callback?: (error: Error | null, item?: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
  /**
   * Update a SupportingDocumentInstance
   *
   * @param { SupportingDocumentContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SupportingDocumentInstance
   */
  update(params: SupportingDocumentContextUpdateOptions, callback?: (error: Error | null, item?: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
  update(params?: any, callback?: any): Promise<SupportingDocumentInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SupportingDocumentContextSolution {
  sid?: string;
}

export class SupportingDocumentContextImpl implements SupportingDocumentContext {
  protected _solution: SupportingDocumentContextSolution;
  protected _uri: string;


  constructor(protected _version: V2, sid: string) {
    this._solution = { sid };
    this._uri = `/RegulatoryCompliance/SupportingDocuments/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<SupportingDocumentInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new SupportingDocumentInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<SupportingDocumentInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.attributes !== undefined) data['Attributes'] = params.attributes;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new SupportingDocumentInstance(operationVersion, payload, this._solution.sid));
    

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

interface SupportingDocumentPayload extends SupportingDocumentResource, Page.TwilioResponsePayload {
}

interface SupportingDocumentResource {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  mime_type?: string | null;
  status?: SupportingDocumentStatus;
  failure_reason?: string | null;
  type?: string | null;
  attributes?: any | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class SupportingDocumentInstance {
  protected _solution: SupportingDocumentContextSolution;
  protected _context?: SupportingDocumentContext;

  constructor(protected _version: V2, payload: SupportingDocumentPayload, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.mimeType = payload.mime_type;
    this.status = payload.status;
    this.failureReason = payload.failure_reason;
    this.type = payload.type;
    this.attributes = payload.attributes;
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
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * The image type of the file
   */
  mimeType?: string | null;
  status?: SupportingDocumentStatus;
  /**
   * The failure reason of the Supporting Document Resource.
   */
  failureReason?: string | null;
  /**
   * The type of the Supporting Document
   */
  type?: string | null;
  /**
   * The set of parameters that compose the Supporting Documents resource
   */
  attributes?: any | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the Supporting Document resource
   */
  url?: string | null;

  private get _proxy(): SupportingDocumentContext {
    this._context = this._context || new SupportingDocumentContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a SupportingDocumentInstance
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
   * Fetch a SupportingDocumentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SupportingDocumentInstance
   */
  fetch(callback?: (error: Error | null, item?: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SupportingDocumentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SupportingDocumentInstance
   */
  update(callback?: (error: Error | null, item?: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
  /**
   * Update a SupportingDocumentInstance
   *
   * @param { SupportingDocumentContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SupportingDocumentInstance
   */
  update(params: SupportingDocumentContextUpdateOptions, callback?: (error: Error | null, item?: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
  update(params?: any, callback?: any): Promise<SupportingDocumentInstance>
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
      accountSid: this.accountSid, 
      friendlyName: this.friendlyName, 
      mimeType: this.mimeType, 
      status: this.status, 
      failureReason: this.failureReason, 
      type: this.type, 
      attributes: this.attributes, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class SupportingDocumentPage extends Page<V2, SupportingDocumentPayload, SupportingDocumentResource, SupportingDocumentInstance> {
/**
* Initialize the SupportingDocumentPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2, response: Response<string>, solution: SupportingDocumentSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of SupportingDocumentInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: SupportingDocumentPayload): SupportingDocumentInstance {
    return new SupportingDocumentInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }


