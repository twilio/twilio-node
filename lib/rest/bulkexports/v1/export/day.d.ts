/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the DayList
 *
 * @param version - Version of the resource
 * @param resourceType - The type of communication – Messages, Calls, Conferences, and Participants
 */
declare function DayList(version: V1, resourceType: string): DayListInstance;

interface DayListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): DayContext;
  /**
   * Streams DayInstance records from the API.
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
   * @param callback - Function to process each record
   */
  each(callback?: (item: DayInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams DayInstance records from the API.
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
  each(opts?: DayListInstanceEachOptions, callback?: (item: DayInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a day
   *
   * @param day - The date of the data in the file
   */
  get(day: string): DayContext;
  /**
   * Retrieve a single target page of DayInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: DayPage) => any): Promise<DayPage>;
  /**
   * Retrieve a single target page of DayInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: DayPage) => any): Promise<DayPage>;
  /**
   * Lists DayInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: DayInstance[]) => any): Promise<DayInstance[]>;
  /**
   * Lists DayInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: DayListInstanceOptions, callback?: (error: Error | null, items: DayInstance[]) => any): Promise<DayInstance[]>;
  /**
   * Retrieve a single page of DayInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: DayPage) => any): Promise<DayPage>;
  /**
   * Retrieve a single page of DayInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: DayListInstancePageOptions, callback?: (error: Error | null, items: DayPage) => any): Promise<DayPage>;
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
interface DayListInstanceEachOptions {
  callback?: (item: DayInstance, done: (err?: Error) => void) => void;
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
interface DayListInstanceOptions {
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
interface DayListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface DayPayload extends DayResource, Page.TwilioResponsePayload {
}

interface DayResource {
  create_date?: string;
  day?: string;
  friendly_name?: string;
  redirect_to?: string;
  resource_type?: string;
  size?: number;
}

interface DaySolution {
  resourceType?: string;
}


declare class DayContext {
  /**
   * Initialize the DayContext
   *
   * @param version - Version of the resource
   * @param resourceType - The type of communication – Messages, Calls, Conferences, and Participants
   * @param day - The date of the data in the file
   */
  constructor(version: V1, resourceType: string, day: string);

  /**
   * fetch a DayInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DayInstance) => any): Promise<DayInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class DayInstance extends SerializableClass {
  /**
   * Initialize the DayContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param resourceType - The type of communication – Messages, Calls, Conferences, and Participants
   * @param day - The date of the data in the file
   */
  constructor(version: V1, payload: DayPayload, resourceType: string, day: string);

  private _proxy: DayContext;
  createDate: string;
  day: string;
  /**
   * fetch a DayInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DayInstance) => any): Promise<DayInstance>;
  friendlyName: string;
  redirectTo: string;
  resourceType: string;
  size: number;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class DayPage extends Page<V1, DayPayload, DayResource, DayInstance> {
  /**
   * Initialize the DayPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: DaySolution);

  /**
   * Build an instance of DayInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DayPayload): DayInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { DayContext, DayInstance, DayList, DayListInstance, DayListInstanceEachOptions, DayListInstanceOptions, DayListInstancePageOptions, DayPage, DayPayload, DayResource, DaySolution }