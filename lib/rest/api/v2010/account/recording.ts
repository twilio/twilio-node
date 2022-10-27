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
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { AddOnResultListInstance } from "./recording/addOnResult";
import { TranscriptionListInstance } from "./recording/transcription";



type RecordingSource = 'DialVerb'|'Conference'|'OutboundAPI'|'Trunking'|'RecordVerb'|'StartCallRecordingAPI'|'StartConferenceRecordingAPI';

type RecordingStatus = 'in-progress'|'paused'|'stopped'|'processing'|'completed'|'absent'|'deleted';


/**
 * Options to pass to fetch a RecordingInstance
 *
 * @property { boolean } [includeSoftDeleted] A boolean parameter indicating whether to retrieve soft deleted recordings or not. Recordings metadata are kept after deletion for a retention period of 40 days.
 */
export interface RecordingContextFetchOptions {
  includeSoftDeleted?: boolean;
}
/**
 * Options to pass to each
 *
 * @property { Date } [dateCreated] Only include recordings that were created on this date. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT, for example: &#x60;2009-07-06&#x60;, to read recordings that were created on this date. You can also specify an inequality, such as &#x60;DateCreated&lt;&#x3D;YYYY-MM-DD&#x60;, to read recordings that were created on or before midnight of this date, and &#x60;DateCreated&gt;&#x3D;YYYY-MM-DD&#x60; to read recordings that were created on or after midnight of this date.
 * @property { Date } [dateCreatedBefore] Only include recordings that were created on this date. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT, for example: &#x60;2009-07-06&#x60;, to read recordings that were created on this date. You can also specify an inequality, such as &#x60;DateCreated&lt;&#x3D;YYYY-MM-DD&#x60;, to read recordings that were created on or before midnight of this date, and &#x60;DateCreated&gt;&#x3D;YYYY-MM-DD&#x60; to read recordings that were created on or after midnight of this date.
 * @property { Date } [dateCreatedAfter] Only include recordings that were created on this date. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT, for example: &#x60;2009-07-06&#x60;, to read recordings that were created on this date. You can also specify an inequality, such as &#x60;DateCreated&lt;&#x3D;YYYY-MM-DD&#x60;, to read recordings that were created on or before midnight of this date, and &#x60;DateCreated&gt;&#x3D;YYYY-MM-DD&#x60; to read recordings that were created on or after midnight of this date.
 * @property { string } [callSid] The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resources to read.
 * @property { string } [conferenceSid] The Conference SID that identifies the conference associated with the recording to read.
 * @property { boolean } [includeSoftDeleted] A boolean parameter indicating whether to retrieve soft deleted recordings or not. Recordings metadata are kept after deletion for a retention period of 40 days.
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
export interface RecordingListInstanceEachOptions {
  dateCreated?: Date;
  dateCreatedBefore?: Date;
  dateCreatedAfter?: Date;
  callSid?: string;
  conferenceSid?: string;
  includeSoftDeleted?: boolean;
  pageSize?: number;
  callback?: (item: RecordingInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { Date } [dateCreated] Only include recordings that were created on this date. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT, for example: &#x60;2009-07-06&#x60;, to read recordings that were created on this date. You can also specify an inequality, such as &#x60;DateCreated&lt;&#x3D;YYYY-MM-DD&#x60;, to read recordings that were created on or before midnight of this date, and &#x60;DateCreated&gt;&#x3D;YYYY-MM-DD&#x60; to read recordings that were created on or after midnight of this date.
 * @property { Date } [dateCreatedBefore] Only include recordings that were created on this date. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT, for example: &#x60;2009-07-06&#x60;, to read recordings that were created on this date. You can also specify an inequality, such as &#x60;DateCreated&lt;&#x3D;YYYY-MM-DD&#x60;, to read recordings that were created on or before midnight of this date, and &#x60;DateCreated&gt;&#x3D;YYYY-MM-DD&#x60; to read recordings that were created on or after midnight of this date.
 * @property { Date } [dateCreatedAfter] Only include recordings that were created on this date. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT, for example: &#x60;2009-07-06&#x60;, to read recordings that were created on this date. You can also specify an inequality, such as &#x60;DateCreated&lt;&#x3D;YYYY-MM-DD&#x60;, to read recordings that were created on or before midnight of this date, and &#x60;DateCreated&gt;&#x3D;YYYY-MM-DD&#x60; to read recordings that were created on or after midnight of this date.
 * @property { string } [callSid] The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resources to read.
 * @property { string } [conferenceSid] The Conference SID that identifies the conference associated with the recording to read.
 * @property { boolean } [includeSoftDeleted] A boolean parameter indicating whether to retrieve soft deleted recordings or not. Recordings metadata are kept after deletion for a retention period of 40 days.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface RecordingListInstanceOptions {
  dateCreated?: Date;
  dateCreatedBefore?: Date;
  dateCreatedAfter?: Date;
  callSid?: string;
  conferenceSid?: string;
  includeSoftDeleted?: boolean;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { Date } [dateCreated] Only include recordings that were created on this date. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT, for example: &#x60;2009-07-06&#x60;, to read recordings that were created on this date. You can also specify an inequality, such as &#x60;DateCreated&lt;&#x3D;YYYY-MM-DD&#x60;, to read recordings that were created on or before midnight of this date, and &#x60;DateCreated&gt;&#x3D;YYYY-MM-DD&#x60; to read recordings that were created on or after midnight of this date.
 * @property { Date } [dateCreatedBefore] Only include recordings that were created on this date. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT, for example: &#x60;2009-07-06&#x60;, to read recordings that were created on this date. You can also specify an inequality, such as &#x60;DateCreated&lt;&#x3D;YYYY-MM-DD&#x60;, to read recordings that were created on or before midnight of this date, and &#x60;DateCreated&gt;&#x3D;YYYY-MM-DD&#x60; to read recordings that were created on or after midnight of this date.
 * @property { Date } [dateCreatedAfter] Only include recordings that were created on this date. Specify a date as &#x60;YYYY-MM-DD&#x60; in GMT, for example: &#x60;2009-07-06&#x60;, to read recordings that were created on this date. You can also specify an inequality, such as &#x60;DateCreated&lt;&#x3D;YYYY-MM-DD&#x60;, to read recordings that were created on or before midnight of this date, and &#x60;DateCreated&gt;&#x3D;YYYY-MM-DD&#x60; to read recordings that were created on or after midnight of this date.
 * @property { string } [callSid] The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resources to read.
 * @property { string } [conferenceSid] The Conference SID that identifies the conference associated with the recording to read.
 * @property { boolean } [includeSoftDeleted] A boolean parameter indicating whether to retrieve soft deleted recordings or not. Recordings metadata are kept after deletion for a retention period of 40 days.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface RecordingListInstancePageOptions {
  dateCreated?: Date;
  dateCreatedBefore?: Date;
  dateCreatedAfter?: Date;
  callSid?: string;
  conferenceSid?: string;
  includeSoftDeleted?: boolean;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface RecordingContext {

  addOnResults: AddOnResultListInstance;
  transcriptions: TranscriptionListInstance;

  /**
   * Remove a RecordingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a RecordingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RecordingInstance
   */
  fetch(callback?: (error: Error | null, item?: RecordingInstance) => any): Promise<RecordingInstance>;
  /**
   * Fetch a RecordingInstance
   *
   * @param { RecordingContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RecordingInstance
   */
  fetch(params: RecordingContextFetchOptions, callback?: (error: Error | null, item?: RecordingInstance) => any): Promise<RecordingInstance>;
  fetch(params?: any, callback?: any): Promise<RecordingInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RecordingContextSolution {
  accountSid?: string;
  sid?: string;
}

export class RecordingContextImpl implements RecordingContext {
  protected _solution: RecordingContextSolution;
  protected _uri: string;

  protected _addOnResults?: AddOnResultListInstance;
  protected _transcriptions?: TranscriptionListInstance;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/Recordings/${sid}.json`;
  }

  get addOnResults(): AddOnResultListInstance {
    this._addOnResults = this._addOnResults || AddOnResultListInstance(this._version, this._solution.accountSid, this._solution.sid);
    return this._addOnResults;
  }

  get transcriptions(): TranscriptionListInstance {
    this._transcriptions = this._transcriptions || TranscriptionListInstance(this._version, this._solution.accountSid, this._solution.sid);
    return this._transcriptions;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(params?: any, callback?: any): Promise<RecordingInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.includeSoftDeleted !== undefined) data['IncludeSoftDeleted'] = serialize.bool(params.includeSoftDeleted);

    const headers: any = {};

    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new RecordingInstance(operationVersion, payload, this._solution.accountSid, this._solution.sid));
    

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

interface RecordingPayload extends RecordingResource, Page.TwilioResponsePayload {
}

interface RecordingResource {
  account_sid?: string | null;
  api_version?: string | null;
  call_sid?: string | null;
  conference_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  start_time?: string | null;
  duration?: string | null;
  sid?: string | null;
  price?: string | null;
  price_unit?: string | null;
  status?: RecordingStatus;
  channels?: number | null;
  source?: RecordingSource;
  error_code?: number | null;
  uri?: string | null;
  encryption_details?: any | null;
  subresource_uris?: object | null;
  media_url?: string | null;
}

export class RecordingInstance {
  protected _solution: RecordingContextSolution;
  protected _context?: RecordingContext;

  constructor(protected _version: V2010, payload: RecordingPayload, accountSid: string, sid?: string) {
    this.accountSid = payload.account_sid;
    this.apiVersion = payload.api_version;
    this.callSid = payload.call_sid;
    this.conferenceSid = payload.conference_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.startTime = deserialize.rfc2822DateTime(payload.start_time);
    this.duration = payload.duration;
    this.sid = payload.sid;
    this.price = payload.price;
    this.priceUnit = payload.price_unit;
    this.status = payload.status;
    this.channels = deserialize.integer(payload.channels);
    this.source = payload.source;
    this.errorCode = deserialize.integer(payload.error_code);
    this.uri = payload.uri;
    this.encryptionDetails = payload.encryption_details;
    this.subresourceUris = payload.subresource_uris;
    this.mediaUrl = payload.media_url;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The API version used during the recording.
   */
  apiVersion?: string | null;
  /**
   * The SID of the Call the resource is associated with
   */
  callSid?: string | null;
  /**
   * The unique ID for the conference associated with the recording.
   */
  conferenceSid?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated?: string | null;
  /**
   * The start time of the recording, given in RFC 2822 format
   */
  startTime?: string | null;
  /**
   * The length of the recording in seconds.
   */
  duration?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The one-time cost of creating the recording.
   */
  price?: string | null;
  /**
   * The currency used in the price property.
   */
  priceUnit?: string | null;
  status?: RecordingStatus;
  /**
   * The number of channels in the final recording file as an integer.
   */
  channels?: number | null;
  source?: RecordingSource;
  /**
   * More information about why the recording is missing, if status is `absent`.
   */
  errorCode?: number | null;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;
  /**
   * How to decrypt the recording.
   */
  encryptionDetails?: any | null;
  /**
   * A list of related resources identified by their relative URIs
   */
  subresourceUris?: object | null;
  /**
   * The URL of the media file.
   */
  mediaUrl?: string | null;

  private get _proxy(): RecordingContext {
    this._context = this._context || new RecordingContextImpl(this._version, this._solution.accountSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a RecordingInstance
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
   * Fetch a RecordingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RecordingInstance
   */
  fetch(callback?: (error: Error | null, item?: RecordingInstance) => any): Promise<RecordingInstance>;
  /**
   * Fetch a RecordingInstance
   *
   * @param { RecordingContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RecordingInstance
   */
  fetch(params: RecordingContextFetchOptions, callback?: (error: Error | null, item?: RecordingInstance) => any): Promise<RecordingInstance>;
  fetch(params?: any, callback?: any): Promise<RecordingInstance>
     {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Access the addOnResults.
   */
  addOnResults(): AddOnResultListInstance {
    return this._proxy.addOnResults;
  }

  /**
   * Access the transcriptions.
   */
  transcriptions(): TranscriptionListInstance {
    return this._proxy.transcriptions;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      apiVersion: this.apiVersion, 
      callSid: this.callSid, 
      conferenceSid: this.conferenceSid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      startTime: this.startTime, 
      duration: this.duration, 
      sid: this.sid, 
      price: this.price, 
      priceUnit: this.priceUnit, 
      status: this.status, 
      channels: this.channels, 
      source: this.source, 
      errorCode: this.errorCode, 
      uri: this.uri, 
      encryptionDetails: this.encryptionDetails, 
      subresourceUris: this.subresourceUris, 
      mediaUrl: this.mediaUrl
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface RecordingListInstance {
  (sid: string): RecordingContext;
  get(sid: string): RecordingContext;



  /**
   * Streams RecordingInstance records from the API.
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
  each(callback?: (item: RecordingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams RecordingInstance records from the API.
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
   * @param { RecordingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: RecordingListInstanceEachOptions, callback?: (item: RecordingInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of RecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
  /**
   * Retrieve a single target page of RecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
  getPage(params?: any, callback?: any): Promise<RecordingPage>;
  /**
   * Lists RecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: RecordingInstance[]) => any): Promise<RecordingInstance[]>;
  /**
   * Lists RecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RecordingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: RecordingListInstanceOptions, callback?: (error: Error | null, items: RecordingInstance[]) => any): Promise<RecordingInstance[]>;
  list(params?: any, callback?: any): Promise<RecordingInstance[]>;
  /**
   * Retrieve a single page of RecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
  /**
   * Retrieve a single page of RecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RecordingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: RecordingListInstancePageOptions, callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
  page(params?: any, callback?: any): Promise<RecordingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RecordingSolution {
  accountSid?: string;
}

interface RecordingListInstanceImpl extends RecordingListInstance {}
class RecordingListInstanceImpl implements RecordingListInstance {
  _version?: V2010;
  _solution?: RecordingSolution;
  _uri?: string;

}

export function RecordingListInstance(version: V2010, accountSid: string): RecordingListInstance {
  const instance = ((sid) => instance.get(sid)) as RecordingListInstanceImpl;

  instance.get = function get(sid): RecordingContext {
    return new RecordingContextImpl(version, accountSid, sid);
  }

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Recordings.json`;

  instance.page = function page(params?: any, callback?: any): Promise<RecordingPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.dateCreated !== undefined) data['DateCreated'] = serialize.iso8601DateTime(params.dateCreated);
    if (params.dateCreatedBefore !== undefined) data['DateCreated<'] = serialize.iso8601DateTime(params.dateCreatedBefore);
    if (params.dateCreatedAfter !== undefined) data['DateCreated>'] = serialize.iso8601DateTime(params.dateCreatedAfter);
    if (params.callSid !== undefined) data['CallSid'] = params.callSid;
    if (params.conferenceSid !== undefined) data['ConferenceSid'] = params.conferenceSid;
    if (params.includeSoftDeleted !== undefined) data['IncludeSoftDeleted'] = serialize.bool(params.includeSoftDeleted);
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new RecordingPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<RecordingPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new RecordingPage(this._version, payload, this._solution));
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


export class RecordingPage extends Page<V2010, RecordingPayload, RecordingResource, RecordingInstance> {
/**
* Initialize the RecordingPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2010, response: Response<string>, solution: RecordingSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of RecordingInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: RecordingPayload): RecordingInstance {
    return new RecordingInstance(
    this._version,
    payload,
        this._solution.accountSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

