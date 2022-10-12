/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Media
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
 * Options to pass to update a MediaProcessorInstance
 *
 * @property { MediaProcessorEnumUpdateStatus } status 
 */
export interface MediaProcessorContextUpdateOptions {
  status: MediaProcessorEnumUpdateStatus;
}


/**
 * Options to pass to create a MediaProcessorInstance
 *
 * @property { string } extension The [Media Extension](/docs/live/api/media-extensions-overview) name or URL. Ex: &#x60;video-composer-v2&#x60;
 * @property { string } extensionContext The context of the Media Extension, represented as a JSON dictionary. See the documentation for the specific [Media Extension](/docs/live/api/media-extensions-overview) you are using for more information about the context to send.
 * @property { any } [extensionEnvironment] User-defined environment variables for the Media Extension, represented as a JSON dictionary of key/value strings. See the documentation for the specific [Media Extension](/docs/live/api/media-extensions-overview) you are using for more information about whether you need to provide this.
 * @property { string } [statusCallback] The URL to which Twilio will send asynchronous webhook requests for every MediaProcessor event. See [Status Callbacks](/docs/live/status-callbacks) for details.
 * @property { string } [statusCallbackMethod] The HTTP method Twilio should use to call the &#x60;status_callback&#x60; URL. Can be &#x60;POST&#x60; or &#x60;GET&#x60; and the default is &#x60;POST&#x60;.
 * @property { number } [maxDuration] The maximum time, in seconds, that the MediaProcessor can run before automatically ends. The default value is 300 seconds, and the maximum value is 90000 seconds. Once this maximum duration is reached, Twilio will end the MediaProcessor, regardless of whether media is still streaming.
 */
export interface MediaProcessorListInstanceCreateOptions {
  extension: string;
  extensionContext: string;
  extensionEnvironment?: any;
  statusCallback?: string;
  statusCallbackMethod?: string;
  maxDuration?: number;
}
/**
 * Options to pass to each
 *
 * @property { MediaProcessorEnumOrder } [order] The sort order of the list by &#x60;date_created&#x60;. Can be: &#x60;asc&#x60; (ascending) or &#x60;desc&#x60; (descending) with &#x60;desc&#x60; as the default.
 * @property { MediaProcessorEnumStatus } [status] Status to filter by, with possible values &#x60;started&#x60;, &#x60;ended&#x60; or &#x60;failed&#x60;.
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
export interface MediaProcessorListInstanceEachOptions {
  order?: MediaProcessorEnumOrder;
  status?: MediaProcessorEnumStatus;
  pageSize?: number;
  callback?: (item: MediaProcessorInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { MediaProcessorEnumOrder } [order] The sort order of the list by &#x60;date_created&#x60;. Can be: &#x60;asc&#x60; (ascending) or &#x60;desc&#x60; (descending) with &#x60;desc&#x60; as the default.
 * @property { MediaProcessorEnumStatus } [status] Status to filter by, with possible values &#x60;started&#x60;, &#x60;ended&#x60; or &#x60;failed&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MediaProcessorListInstanceOptions {
  order?: MediaProcessorEnumOrder;
  status?: MediaProcessorEnumStatus;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { MediaProcessorEnumOrder } [order] The sort order of the list by &#x60;date_created&#x60;. Can be: &#x60;asc&#x60; (ascending) or &#x60;desc&#x60; (descending) with &#x60;desc&#x60; as the default.
 * @property { MediaProcessorEnumStatus } [status] Status to filter by, with possible values &#x60;started&#x60;, &#x60;ended&#x60; or &#x60;failed&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MediaProcessorListInstancePageOptions {
  order?: MediaProcessorEnumOrder;
  status?: MediaProcessorEnumStatus;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface MediaProcessorContext {


  /**
   * Fetch a MediaProcessorInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MediaProcessorInstance
   */
  fetch(callback?: (error: Error | null, item?: MediaProcessorInstance) => any): Promise<MediaProcessorInstance>


  /**
   * Update a MediaProcessorInstance
   *
   * @param { MediaProcessorContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MediaProcessorInstance
   */
  update(params: MediaProcessorContextUpdateOptions, callback?: (error: Error | null, item?: MediaProcessorInstance) => any): Promise<MediaProcessorInstance>;
  update(params: any, callback?: any): Promise<MediaProcessorInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class MediaProcessorContextImpl implements MediaProcessorContext {
  protected _solution: MediaProcessorSolution;
  protected _uri: string;


  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/MediaProcessors/${sid}`;
  }

  fetch(callback?: any): Promise<MediaProcessorInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new MediaProcessorInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  update(params: any, callback?: any): Promise<MediaProcessorInstance> {
      if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.status === null || params.status === undefined) {
      throw new Error('Required parameter "params.status" missing.');
    }

    const data: any = {};

    data['Status'] = params.status;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new MediaProcessorInstance(operationVersion, payload, this._solution.sid));
    

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
export type MediaProcessorStatusCallbackMethod = 'HEAD'|'GET'|'POST'|'PATCH'|'PUT'|'DELETE';

interface MediaProcessorPayload extends MediaProcessorResource, Page.TwilioResponsePayload {
}

interface MediaProcessorResource {
  account_sid?: string | null;
  sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  extension?: string | null;
  extension_context?: string | null;
  status?: object;
  url?: string | null;
  ended_reason?: string | null;
  status_callback?: string | null;
  status_callback_method?: MediaProcessorStatusCallbackMethod;
  max_duration?: number | null;
}

export class MediaProcessorInstance {
  protected _solution: MediaProcessorSolution;
  protected _context?: MediaProcessorContext;

  constructor(protected _version: V1, payload: MediaProcessorPayload, sid?: string) {
    this.accountSid = payload.account_sid;
    this.sid = payload.sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.extension = payload.extension;
    this.extensionContext = payload.extension_context;
    this.status = payload.status;
    this.url = payload.url;
    this.endedReason = payload.ended_reason;
    this.statusCallback = payload.status_callback;
    this.statusCallbackMethod = payload.status_callback_method;
    this.maxDuration = deserialize.integer(payload.max_duration);

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The Media Extension name or URL
   */
  extension?: string | null;
  /**
   * The Media Extension context
   */
  extensionContext?: string | null;
  status?: object;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;
  /**
   * The reason why a MediaProcessor ended
   */
  endedReason?: string | null;
  /**
   * The URL to which Twilio will send MediaProcessor event updates
   */
  statusCallback?: string | null;
  /**
   * The HTTP method Twilio should use to call the `status_callback` URL
   */
  statusCallbackMethod?: MediaProcessorStatusCallbackMethod;
  /**
   * Maximum MediaProcessor duration in seconds
   */
  maxDuration?: number | null;

  private get _proxy(): MediaProcessorContext {
    this._context = this._context || new MediaProcessorContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a MediaProcessorInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MediaProcessorInstance
   */
  fetch(callback?: (error: Error | null, item?: MediaProcessorInstance) => any): Promise<MediaProcessorInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a MediaProcessorInstance
   *
   * @param { MediaProcessorContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MediaProcessorInstance
   */
  update(params: MediaProcessorContextUpdateOptions, callback?: (error: Error | null, item?: MediaProcessorInstance) => any): Promise<MediaProcessorInstance>;
  update(params: any, callback?: any): Promise<MediaProcessorInstance>
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
      sid: this.sid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      extension: this.extension, 
      extensionContext: this.extensionContext, 
      status: this.status, 
      url: this.url, 
      endedReason: this.endedReason, 
      statusCallback: this.statusCallback, 
      statusCallbackMethod: this.statusCallbackMethod, 
      maxDuration: this.maxDuration
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface MediaProcessorSolution {
  sid?: string;
}

export class MediaProcessorPage extends Page<V1, MediaProcessorPayload, MediaProcessorResource, MediaProcessorInstance> {
  /**
   * Initialize the MediaProcessorPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: MediaProcessorSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of MediaProcessorInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MediaProcessorPayload): MediaProcessorInstance {
    return new MediaProcessorInstance(
      this._version,
      payload,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface MediaProcessorListInstance {
  (sid: string): MediaProcessorContext;
  get(sid: string): MediaProcessorContext;


  /**
   * Create a MediaProcessorInstance
   *
   * @param { MediaProcessorListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MediaProcessorInstance
   */
  create(params: MediaProcessorListInstanceCreateOptions, callback?: (error: Error | null, item?: MediaProcessorInstance) => any): Promise<MediaProcessorInstance>;
  create(params: any, callback?: any): Promise<MediaProcessorInstance>



  /**
   * Streams MediaProcessorInstance records from the API.
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
  each(callback?: (item: MediaProcessorInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams MediaProcessorInstance records from the API.
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
   * @param { MediaProcessorListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: MediaProcessorListInstanceEachOptions, callback?: (item: MediaProcessorInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of MediaProcessorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: MediaProcessorPage) => any): Promise<MediaProcessorPage>;
  /**
   * Retrieve a single target page of MediaProcessorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: MediaProcessorPage) => any): Promise<MediaProcessorPage>;
  getPage(params?: any, callback?: any): Promise<MediaProcessorPage>;
  /**
   * Lists MediaProcessorInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: MediaProcessorInstance[]) => any): Promise<MediaProcessorInstance[]>;
  /**
   * Lists MediaProcessorInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MediaProcessorListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: MediaProcessorListInstanceOptions, callback?: (error: Error | null, items: MediaProcessorInstance[]) => any): Promise<MediaProcessorInstance[]>;
  list(params?: any, callback?: any): Promise<MediaProcessorInstance[]>;
  /**
   * Retrieve a single page of MediaProcessorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: MediaProcessorPage) => any): Promise<MediaProcessorPage>;
  /**
   * Retrieve a single page of MediaProcessorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MediaProcessorListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: MediaProcessorListInstancePageOptions, callback?: (error: Error | null, items: MediaProcessorPage) => any): Promise<MediaProcessorPage>;
  page(params?: any, callback?: any): Promise<MediaProcessorPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface MediaProcessorListInstanceImpl extends MediaProcessorListInstance {}
class MediaProcessorListInstanceImpl implements MediaProcessorListInstance {
  _version?: V1;
  _solution?: MediaProcessorSolution;
  _uri?: string;

}

export function MediaProcessorListInstance(version: V1): MediaProcessorListInstance {
  const instance = ((sid) => instance.get(sid)) as MediaProcessorListInstanceImpl;

  instance.get = function get(sid): MediaProcessorContext {
    return new MediaProcessorContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/MediaProcessors`;

  instance.create = function create(params: any, callback?: any): Promise<MediaProcessorInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.extension === null || params.extension === undefined) {
      throw new Error('Required parameter "params.extension" missing.');
    }

    if (params.extensionContext === null || params.extensionContext === undefined) {
      throw new Error('Required parameter "params.extensionContext" missing.');
    }

    const data: any = {};

    data['Extension'] = params.extension;
    data['ExtensionContext'] = params.extensionContext;
    if (params.extensionEnvironment !== undefined) data['ExtensionEnvironment'] = params.extensionEnvironment;
    if (params.statusCallback !== undefined) data['StatusCallback'] = params.statusCallback;
    if (params.statusCallbackMethod !== undefined) data['StatusCallbackMethod'] = params.statusCallbackMethod;
    if (params.maxDuration !== undefined) data['MaxDuration'] = params.maxDuration;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new MediaProcessorInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<MediaProcessorPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.order !== undefined) data['Order'] = params.order;
    if (params.status !== undefined) data['Status'] = params.status;
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new MediaProcessorPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<MediaProcessorPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new MediaProcessorPage(this._version, payload, this._solution));
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

