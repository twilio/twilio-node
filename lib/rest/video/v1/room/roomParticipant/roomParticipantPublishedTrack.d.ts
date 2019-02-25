/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';

type PublishedTrackKind = 'audio'|'video'|'data';

/**
 * Initialize the PublishedTrackList
 *
 * @param version - Version of the resource
 * @param roomSid - Unique Room identifier where this Track is published.
 * @param participantSid - Unique Participant identifier that publishes this Track.
 */
declare function PublishedTrackList(version: V1, roomSid: string, participantSid: string): PublishedTrackListInstance;

interface PublishedTrackListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): PublishedTrackContext;
  /**
   * Streams PublishedTrackInstance records from the API.
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
  each(opts?: PublishedTrackListInstanceEachOptions, callback?: (item: PublishedTrackInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a published_track
   *
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  get(sid: string): PublishedTrackContext;
  /**
   * Retrieve a single target page of PublishedTrackInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: PublishedTrackPage) => any): Promise<PublishedTrackPage>;
  /**
   * Lists PublishedTrackInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: PublishedTrackListInstanceOptions, callback?: (error: Error | null, items: PublishedTrackInstance[]) => any): Promise<PublishedTrackInstance[]>;
  /**
   * Retrieve a single page of PublishedTrackInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: PublishedTrackListInstancePageOptions, callback?: (error: Error | null, items: PublishedTrackPage) => any): Promise<PublishedTrackPage>;
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
interface PublishedTrackListInstanceEachOptions {
  callback?: (item: PublishedTrackInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
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
interface PublishedTrackListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface PublishedTrackListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface PublishedTrackPayload extends PublishedTrackResource, Page.TwilioResponsePayload {
}

interface PublishedTrackResource {
  date_created: Date;
  date_updated: Date;
  enabled: boolean;
  kind: PublishedTrackKind;
  name: string;
  participant_sid: string;
  room_sid: string;
  sid: string;
  url: string;
}

interface PublishedTrackSolution {
  participantSid?: string;
  roomSid?: string;
}


declare class PublishedTrackContext {
  /**
   * Initialize the PublishedTrackContext
   *
   * @param version - Version of the resource
   * @param roomSid - Unique Room identifier where this Track is published.
   * @param participantSid - Unique Participant identifier that publishes this Track.
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: V1, roomSid: string, participantSid: string, sid: string);

  /**
   * fetch a PublishedTrackInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: PublishedTrackInstance) => any): Promise<PublishedTrackInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class PublishedTrackInstance extends SerializableClass {
  /**
   * Initialize the PublishedTrackContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param roomSid - Unique Room identifier where this Track is published.
   * @param participantSid - Unique Participant identifier that publishes this Track.
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: V1, payload: PublishedTrackPayload, roomSid: string, participantSid: string, sid: string);

  private _proxy: PublishedTrackContext;
  dateCreated: Date;
  dateUpdated: Date;
  enabled: boolean;
  /**
   * fetch a PublishedTrackInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: PublishedTrackInstance) => any): void;
  kind: PublishedTrackKind;
  name: string;
  participantSid: string;
  roomSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class PublishedTrackPage extends Page<V1, PublishedTrackPayload, PublishedTrackResource, PublishedTrackInstance> {
  /**
   * Initialize the PublishedTrackPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: PublishedTrackSolution);

  /**
   * Build an instance of PublishedTrackInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: PublishedTrackPayload): PublishedTrackInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { PublishedTrackContext, PublishedTrackInstance, PublishedTrackList, PublishedTrackListInstance, PublishedTrackListInstanceEachOptions, PublishedTrackListInstanceOptions, PublishedTrackListInstancePageOptions, PublishedTrackPage, PublishedTrackPayload, PublishedTrackResource, PublishedTrackSolution }
