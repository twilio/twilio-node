/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import Sync from "../../../Sync";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");

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
export interface DocumentPermissionListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: DocumentPermissionInstance, done: (err?: Error) => void) => void;
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
export interface DocumentPermissionListInstanceOptions {
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
export interface DocumentPermissionListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



/**
 * Options to pass to update a DocumentPermissionInstance
 *
 * @property { boolean } read Boolean flag specifying whether the identity can read the Sync Document.
 * @property { boolean } write Boolean flag specifying whether the identity can update the Sync Document.
 * @property { boolean } manage Boolean flag specifying whether the identity can delete the Sync Document.
 */
export interface DocumentPermissionContextUpdateOptions {
  read: boolean;
  write: boolean;
  manage: boolean;
}

export interface DocumentPermissionListInstance {
  (identity: string): DocumentPermissionContext;
  get(identity: string): DocumentPermissionContext;



  /**
   * Streams DocumentPermissionInstance records from the API.
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
  each(callback?: (item: DocumentPermissionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams DocumentPermissionInstance records from the API.
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
   * @param { DocumentPermissionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: DocumentPermissionListInstanceEachOptions, callback?: (item: DocumentPermissionInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of DocumentPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: DocumentPermissionPage) => any): Promise<DocumentPermissionPage>;
  /**
   * Retrieve a single target page of DocumentPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: DocumentPermissionPage) => any): Promise<DocumentPermissionPage>;
  getPage(params?: any, callback?: any): Promise<DocumentPermissionPage>;
  /**
   * Lists DocumentPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: DocumentPermissionInstance[]) => any): Promise<DocumentPermissionInstance[]>;
  /**
   * Lists DocumentPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DocumentPermissionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: DocumentPermissionListInstanceOptions, callback?: (error: Error | null, items: DocumentPermissionInstance[]) => any): Promise<DocumentPermissionInstance[]>;
  list(params?: any, callback?: any): Promise<DocumentPermissionInstance[]>;
  /**
   * Retrieve a single page of DocumentPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: DocumentPermissionPage) => any): Promise<DocumentPermissionPage>;
  /**
   * Retrieve a single page of DocumentPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DocumentPermissionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: DocumentPermissionListInstancePageOptions, callback?: (error: Error | null, items: DocumentPermissionPage) => any): Promise<DocumentPermissionPage>;
  page(params?: any, callback?: any): Promise<DocumentPermissionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DocumentPermissionSolution {
  serviceSid?: string;
  documentSid?: string;
}

interface DocumentPermissionListInstanceImpl extends DocumentPermissionListInstance {}
class DocumentPermissionListInstanceImpl implements DocumentPermissionListInstance {
  _version?: Sync;
  _solution?: DocumentPermissionSolution;
  _uri?: string;

}

export function DocumentPermissionListInstance(version: Sync, serviceSid: string, documentSid: string): DocumentPermissionListInstance {
  const instance = ((identity) => instance.get(identity)) as DocumentPermissionListInstanceImpl;

  instance.get = function get(identity): DocumentPermissionContext {
    return new DocumentPermissionContextImpl(version, serviceSid, documentSid, identity);
  }

  instance._version = version;
  instance._solution = { serviceSid, documentSid };
  instance._uri = `/Services/${serviceSid}/Documents/${documentSid}/Permissions`;

  instance.page = function page(params?: any, callback?: any): Promise<DocumentPermissionPage> {
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
    
    operationPromise = operationPromise.then(payload => new DocumentPermissionPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<DocumentPermissionPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new DocumentPermissionPage(this._version, payload, this._solution));
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


export interface DocumentPermissionContext {


  /**
   * Remove a DocumentPermissionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a DocumentPermissionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DocumentPermissionInstance
   */
  fetch(callback?: (error: Error | null, item?: DocumentPermissionInstance) => any): Promise<DocumentPermissionInstance>


  /**
   * Update a DocumentPermissionInstance
   *
   * @param { DocumentPermissionContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DocumentPermissionInstance
   */
  update(params: DocumentPermissionContextUpdateOptions, callback?: (error: Error | null, item?: DocumentPermissionInstance) => any): Promise<DocumentPermissionInstance>;
  update(params: any, callback?: any): Promise<DocumentPermissionInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DocumentPermissionContextSolution {
  serviceSid?: string;
  documentSid?: string;
  identity?: string;
}

export class DocumentPermissionContextImpl implements DocumentPermissionContext {
  protected _solution: DocumentPermissionContextSolution;
  protected _uri: string;


  constructor(protected _version: Sync, serviceSid: string, documentSid: string, identity: string) {
    this._solution = { serviceSid, documentSid, identity };
    this._uri = `/Services/${serviceSid}/Documents/${documentSid}/Permissions/${identity}`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<DocumentPermissionInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new DocumentPermissionInstance(operationVersion, payload, this._solution.serviceSid, this._solution.documentSid, this._solution.identity));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  update(params: any, callback?: any): Promise<DocumentPermissionInstance> {
      if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.read === null || params.read === undefined) {
      throw new Error('Required parameter "params.read" missing.');
    }

    if (params.write === null || params.write === undefined) {
      throw new Error('Required parameter "params.write" missing.');
    }

    if (params.manage === null || params.manage === undefined) {
      throw new Error('Required parameter "params.manage" missing.');
    }

    const data: any = {};

    data['Read'] = serialize.bool(params.read);
    data['Write'] = serialize.bool(params.write);
    data['Manage'] = serialize.bool(params.manage);

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new DocumentPermissionInstance(operationVersion, payload, this._solution.serviceSid, this._solution.documentSid, this._solution.identity));
    

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

interface DocumentPermissionPayload extends DocumentPermissionResource, Page.TwilioResponsePayload {
}

interface DocumentPermissionResource {
  account_sid?: string | null;
  service_sid?: string | null;
  document_sid?: string | null;
  identity?: string | null;
  read?: boolean | null;
  write?: boolean | null;
  manage?: boolean | null;
  url?: string | null;
}

export class DocumentPermissionInstance {
  protected _solution: DocumentPermissionContextSolution;
  protected _context?: DocumentPermissionContext;

  constructor(protected _version: Sync, payload: DocumentPermissionPayload, serviceSid: string, documentSid: string, identity?: string) {
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.documentSid = payload.document_sid;
    this.identity = payload.identity;
    this.read = payload.read;
    this.write = payload.write;
    this.manage = payload.manage;
    this.url = payload.url;

    this._solution = { serviceSid, documentSid, identity: identity || this.identity };
  }

  /**
   * Twilio Account SID.
   */
  accountSid?: string | null;
  /**
   * Sync Service Instance SID.
   */
  serviceSid?: string | null;
  /**
   * Sync Document SID.
   */
  documentSid?: string | null;
  /**
   * Identity of the user to whom the Sync Document Permission applies.
   */
  identity?: string | null;
  /**
   * Read access.
   */
  read?: boolean | null;
  /**
   * Write access.
   */
  write?: boolean | null;
  /**
   * Manage access.
   */
  manage?: boolean | null;
  /**
   * URL of this Sync Document Permission.
   */
  url?: string | null;

  private get _proxy(): DocumentPermissionContext {
    this._context = this._context || new DocumentPermissionContextImpl(this._version, this._solution.serviceSid, this._solution.documentSid, this._solution.identity);
    return this._context;
  }

  /**
   * Remove a DocumentPermissionInstance
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
   * Fetch a DocumentPermissionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DocumentPermissionInstance
   */
  fetch(callback?: (error: Error | null, item?: DocumentPermissionInstance) => any): Promise<DocumentPermissionInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a DocumentPermissionInstance
   *
   * @param { DocumentPermissionContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DocumentPermissionInstance
   */
  update(params: DocumentPermissionContextUpdateOptions, callback?: (error: Error | null, item?: DocumentPermissionInstance) => any): Promise<DocumentPermissionInstance>;
  update(params: any, callback?: any): Promise<DocumentPermissionInstance>
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
      accountSid: this.accountSid, 
      serviceSid: this.serviceSid, 
      documentSid: this.documentSid, 
      identity: this.identity, 
      read: this.read, 
      write: this.write, 
      manage: this.manage, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class DocumentPermissionPage extends Page<Sync, DocumentPermissionPayload, DocumentPermissionResource, DocumentPermissionInstance> {
  /**
   * Initialize the DocumentPermissionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Sync, response: Response<string>, solution: DocumentPermissionSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of DocumentPermissionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DocumentPermissionPayload): DocumentPermissionInstance {
    return new DocumentPermissionInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.documentSid,
      this._solution.identity,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

