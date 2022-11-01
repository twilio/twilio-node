/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Events
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
export interface SchemaVersionListInstanceEachOptions {
  "pageSize"?: number;
  callback?: (item: SchemaVersionInstance, done: (err?: Error) => void) => void;
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
export interface SchemaVersionListInstanceOptions {
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
export interface SchemaVersionListInstancePageOptions {
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface SchemaVersionContext {


  /**
   * Fetch a SchemaVersionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SchemaVersionInstance
   */
  fetch(callback?: (error: Error | null, item?: SchemaVersionInstance) => any): Promise<SchemaVersionInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SchemaVersionContextSolution {
  "id"?: string;
  "schemaVersion"?: number;
}

export class SchemaVersionContextImpl implements SchemaVersionContext {
  protected _solution: SchemaVersionContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, id: string, schemaVersion: number) {
    this._solution = { id, schemaVersion };
    this._uri = `/Schemas/${id}/Versions/${schemaVersion}`;
  }

  fetch(callback?: any): Promise<SchemaVersionInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new SchemaVersionInstance(operationVersion, payload, this._solution.id, this._solution.schemaVersion));
    

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

interface SchemaVersionPayload extends SchemaVersionResource, Page.TwilioResponsePayload {
}

interface SchemaVersionResource {
  id?: string | null;
  schema_version?: number | null;
  date_created?: Date | null;
  url?: string | null;
  raw?: string | null;
}

export class SchemaVersionInstance {
  protected _solution: SchemaVersionContextSolution;
  protected _context?: SchemaVersionContext;

  constructor(protected _version: V1, payload: SchemaVersionPayload, id: string, schemaVersion?: number) {
    this.id = payload.id;
    this.schemaVersion = deserialize.integer(payload.schema_version);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;
    this.raw = payload.raw;

    this._solution = { id, schemaVersion: schemaVersion || this.schemaVersion };
  }

  /**
   * The unique identifier of the schema.
   */
  id?: string | null;
  /**
   * The version of this schema.
   */
  schemaVersion?: number | null;
  /**
   * The date the schema version was created.
   */
  dateCreated?: Date | null;
  /**
   * The URL of this resource.
   */
  url?: string | null;
  raw?: string | null;

  private get _proxy(): SchemaVersionContext {
    this._context = this._context || new SchemaVersionContextImpl(this._version, this._solution.id, this._solution.schemaVersion);
    return this._context;
  }

  /**
   * Fetch a SchemaVersionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SchemaVersionInstance
   */
  fetch(callback?: (error: Error | null, item?: SchemaVersionInstance) => any): Promise<SchemaVersionInstance>
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
      id: this.id, 
      schemaVersion: this.schemaVersion, 
      dateCreated: this.dateCreated, 
      url: this.url, 
      raw: this.raw
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface SchemaVersionListInstance {
  (schemaVersion: number): SchemaVersionContext;
  get(schemaVersion: number): SchemaVersionContext;



  /**
   * Streams SchemaVersionInstance records from the API.
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
  each(callback?: (item: SchemaVersionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SchemaVersionInstance records from the API.
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
   * @param { SchemaVersionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: SchemaVersionListInstanceEachOptions, callback?: (item: SchemaVersionInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of SchemaVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SchemaVersionPage) => any): Promise<SchemaVersionPage>;
  /**
   * Retrieve a single target page of SchemaVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SchemaVersionPage) => any): Promise<SchemaVersionPage>;
  getPage(params?: any, callback?: any): Promise<SchemaVersionPage>;
  /**
   * Lists SchemaVersionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SchemaVersionInstance[]) => any): Promise<SchemaVersionInstance[]>;
  /**
   * Lists SchemaVersionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SchemaVersionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: SchemaVersionListInstanceOptions, callback?: (error: Error | null, items: SchemaVersionInstance[]) => any): Promise<SchemaVersionInstance[]>;
  list(params?: any, callback?: any): Promise<SchemaVersionInstance[]>;
  /**
   * Retrieve a single page of SchemaVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SchemaVersionPage) => any): Promise<SchemaVersionPage>;
  /**
   * Retrieve a single page of SchemaVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SchemaVersionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: SchemaVersionListInstancePageOptions, callback?: (error: Error | null, items: SchemaVersionPage) => any): Promise<SchemaVersionPage>;
  page(params?: any, callback?: any): Promise<SchemaVersionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SchemaVersionSolution {
  id?: string;
}

interface SchemaVersionListInstanceImpl extends SchemaVersionListInstance {}
class SchemaVersionListInstanceImpl implements SchemaVersionListInstance {
  _version?: V1;
  _solution?: SchemaVersionSolution;
  _uri?: string;

}

export function SchemaVersionListInstance(version: V1, id: string): SchemaVersionListInstance {
  const instance = ((schemaVersion) => instance.get(schemaVersion)) as SchemaVersionListInstanceImpl;

  instance.get = function get(schemaVersion): SchemaVersionContext {
    return new SchemaVersionContextImpl(version, id, schemaVersion);
  }

  instance._version = version;
  instance._solution = { id };
  instance._uri = `/Schemas/${id}/Versions`;

  instance.page = function page(params?: any, callback?: any): Promise<SchemaVersionPage> {
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
    
    operationPromise = operationPromise.then(payload => new SchemaVersionPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<SchemaVersionPage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new SchemaVersionPage(this._version, payload, this._solution));
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


export class SchemaVersionPage extends Page<V1, SchemaVersionPayload, SchemaVersionResource, SchemaVersionInstance> {
/**
* Initialize the SchemaVersionPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: SchemaVersionSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of SchemaVersionInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: SchemaVersionPayload): SchemaVersionInstance {
    return new SchemaVersionInstance(
    this._version,
    payload,
        this._solution.id,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }
