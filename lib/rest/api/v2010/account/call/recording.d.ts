/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

type RecordingSource = 'DialVerb'|'Conference'|'OutboundAPI'|'Trunking'|'RecordVerb'|'StartCallRecordingAPI'|'StartConferenceRecordingAPI';

type RecordingStatus = 'in-progress'|'paused'|'stopped'|'processing'|'completed'|'absent';

/**
 * Initialize the RecordingList
 *
 * @param version - Version of the resource
 * @param accountSid - The SID of the Account that created the resource
 * @param callSid - The SID of the Call the resource is associated with
 */
declare function RecordingList(version: V2010, accountSid: string, callSid: string): RecordingListInstance;

/**
 * Options to pass to update
 *
 * @property pauseBehavior - Whether to record or not during the pause period.
 * @property status - The new status of the recording
 */
interface RecordingInstanceUpdateOptions {
  pauseBehavior?: string;
  status: RecordingStatus;
}

interface RecordingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): RecordingContext;
  /**
   * create a RecordingInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: RecordingListInstanceCreateOptions, callback?: (error: Error | null, item: RecordingInstance) => any): Promise<RecordingInstance>;
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
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: RecordingListInstanceEachOptions, callback?: (item: RecordingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a recording
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): RecordingContext;
  /**
   * Retrieve a single target page of RecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
  /**
   * Lists RecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: RecordingListInstanceOptions, callback?: (error: Error | null, items: RecordingInstance[]) => any): Promise<RecordingInstance[]>;
  /**
   * Retrieve a single page of RecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: RecordingListInstancePageOptions, callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property recordingChannels - The number of channels that the output recording will be configured with
 * @property recordingStatusCallback - The callback URL on each selected recording event
 * @property recordingStatusCallbackEvent - The recording status changes that should generate a callback
 * @property recordingStatusCallbackMethod - The HTTP method we should use to call `recording_status_callback`
 * @property trim - Whether to trim the silence in the recording
 */
interface RecordingListInstanceCreateOptions {
  recordingChannels?: string;
  recordingStatusCallback?: string;
  recordingStatusCallbackEvent?: string[];
  recordingStatusCallbackMethod?: string;
  trim?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property dateCreated - The `YYYY-MM-DD` value of the resources to read
 * @property dateCreatedAfter - The `YYYY-MM-DD` value of the resources to read
 * @property dateCreatedBefore - The `YYYY-MM-DD` value of the resources to read
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface RecordingListInstanceEachOptions {
  callback?: (item: RecordingInstance, done: (err?: Error) => void) => void;
  dateCreated?: Date;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property dateCreated - The `YYYY-MM-DD` value of the resources to read
 * @property dateCreatedAfter - The `YYYY-MM-DD` value of the resources to read
 * @property dateCreatedBefore - The `YYYY-MM-DD` value of the resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface RecordingListInstanceOptions {
  dateCreated?: Date;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property dateCreated - The `YYYY-MM-DD` value of the resources to read
 * @property dateCreatedAfter - The `YYYY-MM-DD` value of the resources to read
 * @property dateCreatedBefore - The `YYYY-MM-DD` value of the resources to read
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface RecordingListInstancePageOptions {
  dateCreated?: Date;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface RecordingPayload extends RecordingResource, Page.TwilioResponsePayload {
}

interface RecordingResource {
  account_sid: string;
  api_version: string;
  call_sid: string;
  channels: number;
  conference_sid: string;
  date_created: Date;
  date_updated: Date;
  duration: string;
  encryption_details: object;
  error_code: number;
  price: number;
  price_unit: string;
  sid: string;
  source: RecordingSource;
  start_time: Date;
  status: RecordingStatus;
  uri: string;
}

interface RecordingSolution {
  accountSid?: string;
  callSid?: string;
}


declare class RecordingContext {
  /**
   * Initialize the RecordingContext
   *
   * @param version - Version of the resource
   * @param accountSid - The SID of the Account that created the resource to fetch
   * @param callSid - The Call SID of the resource to fetch
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2010, accountSid: string, callSid: string, sid: string);

  /**
   * fetch a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RecordingInstance) => any): Promise<RecordingInstance>;
  /**
   * remove a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RecordingInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a RecordingInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: RecordingInstanceUpdateOptions, callback?: (error: Error | null, items: RecordingInstance) => any): Promise<RecordingInstance>;
}


declare class RecordingInstance extends SerializableClass {
  /**
   * Initialize the RecordingContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The SID of the Account that created the resource
   * @param callSid - The SID of the Call the resource is associated with
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2010, payload: RecordingPayload, accountSid: string, callSid: string, sid: string);

  private _proxy: RecordingContext;
  accountSid: string;
  apiVersion: string;
  callSid: string;
  channels: number;
  conferenceSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  duration: string;
  encryptionDetails: object;
  errorCode: number;
  /**
   * fetch a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RecordingInstance) => any): void;
  price: number;
  priceUnit: string;
  /**
   * remove a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RecordingInstance) => any): void;
  sid: string;
  source: RecordingSource;
  startTime: Date;
  status: RecordingStatus;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a RecordingInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: RecordingInstanceUpdateOptions, callback?: (error: Error | null, items: RecordingInstance) => any): void;
  uri: string;
}


declare class RecordingPage extends Page<V2010, RecordingPayload, RecordingResource, RecordingInstance> {
  /**
   * Initialize the RecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: RecordingSolution);

  /**
   * Build an instance of RecordingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RecordingPayload): RecordingInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { RecordingContext, RecordingInstance, RecordingInstanceUpdateOptions, RecordingList, RecordingListInstance, RecordingListInstanceCreateOptions, RecordingListInstanceEachOptions, RecordingListInstanceOptions, RecordingListInstancePageOptions, RecordingPage, RecordingPayload, RecordingResource, RecordingSolution }
