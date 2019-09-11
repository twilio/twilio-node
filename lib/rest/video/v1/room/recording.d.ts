/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

type RoomRecordingCodec = 'VP8'|'H264'|'OPUS'|'PCMU';

type RoomRecordingFormat = 'mka'|'mkv';

type RoomRecordingStatus = 'processing'|'completed'|'deleted'|'failed';

type RoomRecordingType = 'audio'|'video'|'data';

/**
 * Initialize the RoomRecordingList
 *
 * @param version - Version of the resource
 * @param roomSid - The room_sid
 */
declare function RoomRecordingList(version: V1, roomSid: string): RoomRecordingListInstance;

interface RoomRecordingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): RoomRecordingContext;
  /**
   * Streams RoomRecordingInstance records from the API.
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
  each(opts?: RoomRecordingListInstanceEachOptions, callback?: (item: RoomRecordingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a room_recording
   *
   * @param sid - The sid
   */
  get(sid: string): RoomRecordingContext;
  /**
   * Retrieve a single target page of RoomRecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: RoomRecordingPage) => any): Promise<RoomRecordingPage>;
  /**
   * Lists RoomRecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: RoomRecordingListInstanceOptions, callback?: (error: Error | null, items: RoomRecordingInstance[]) => any): Promise<RoomRecordingInstance[]>;
  /**
   * Retrieve a single page of RoomRecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: RoomRecordingListInstancePageOptions, callback?: (error: Error | null, items: RoomRecordingPage) => any): Promise<RoomRecordingPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property dateCreatedAfter - The date_created_after
 * @property dateCreatedBefore - The date_created_before
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
 * @property sourceSid - The source_sid
 * @property status - The status
 */
interface RoomRecordingListInstanceEachOptions {
  callback?: (item: RoomRecordingInstance, done: (err?: Error) => void) => void;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  done?: Function;
  limit?: number;
  pageSize?: number;
  sourceSid?: string;
  status?: RoomRecordingStatus;
}

/**
 * Options to pass to list
 *
 * @property dateCreatedAfter - The date_created_after
 * @property dateCreatedBefore - The date_created_before
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
 * @property sourceSid - The source_sid
 * @property status - The status
 */
interface RoomRecordingListInstanceOptions {
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  limit?: number;
  pageSize?: number;
  sourceSid?: string;
  status?: RoomRecordingStatus;
}

/**
 * Options to pass to page
 *
 * @property dateCreatedAfter - The date_created_after
 * @property dateCreatedBefore - The date_created_before
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property sourceSid - The source_sid
 * @property status - The status
 */
interface RoomRecordingListInstancePageOptions {
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  sourceSid?: string;
  status?: RoomRecordingStatus;
}

interface RoomRecordingPayload extends RoomRecordingResource, Page.TwilioResponsePayload {
}

interface RoomRecordingResource {
  account_sid: string;
  codec: RoomRecordingCodec;
  container_format: RoomRecordingFormat;
  date_created: Date;
  duration: number;
  grouping_sids: object;
  links: string;
  offset: number;
  room_sid: string;
  sid: string;
  size: number;
  source_sid: string;
  status: RoomRecordingStatus;
  track_name: string;
  type: RoomRecordingType;
  url: string;
}

interface RoomRecordingSolution {
  roomSid?: string;
}


declare class RoomRecordingContext {
  /**
   * Initialize the RoomRecordingContext
   *
   * @param version - Version of the resource
   * @param roomSid - The room_sid
   * @param sid - The sid
   */
  constructor(version: V1, roomSid: string, sid: string);

  /**
   * fetch a RoomRecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RoomRecordingInstance) => any): Promise<RoomRecordingInstance>;
  /**
   * remove a RoomRecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RoomRecordingInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class RoomRecordingInstance extends SerializableClass {
  /**
   * Initialize the RoomRecordingContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param roomSid - The room_sid
   * @param sid - The sid
   */
  constructor(version: V1, payload: RoomRecordingPayload, roomSid: string, sid: string);

  private _proxy: RoomRecordingContext;
  accountSid: string;
  codec: RoomRecordingCodec;
  containerFormat: RoomRecordingFormat;
  dateCreated: Date;
  duration: number;
  /**
   * fetch a RoomRecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RoomRecordingInstance) => any): void;
  groupingSids: object;
  links: string;
  offset: number;
  /**
   * remove a RoomRecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RoomRecordingInstance) => any): void;
  roomSid: string;
  sid: string;
  size: number;
  sourceSid: string;
  status: RoomRecordingStatus;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  trackName: string;
  type: RoomRecordingType;
  url: string;
}


declare class RoomRecordingPage extends Page<V1, RoomRecordingPayload, RoomRecordingResource, RoomRecordingInstance> {
  /**
   * Initialize the RoomRecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: RoomRecordingSolution);

  /**
   * Build an instance of RoomRecordingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RoomRecordingPayload): RoomRecordingInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { RoomRecordingContext, RoomRecordingInstance, RoomRecordingList, RoomRecordingListInstance, RoomRecordingListInstanceEachOptions, RoomRecordingListInstanceOptions, RoomRecordingListInstancePageOptions, RoomRecordingPage, RoomRecordingPayload, RoomRecordingResource, RoomRecordingSolution }
