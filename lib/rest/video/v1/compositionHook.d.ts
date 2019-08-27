/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { SerializableClass } from '../../../interfaces';

type CompositionHookFormat = 'mp4'|'webm';

/**
 * Initialize the CompositionHookList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function CompositionHookList(version: V1): CompositionHookListInstance;

/**
 * Options to pass to update
 *
 * @property audioSources - A list of audio sources related to this Composition Hook.
 * @property audioSourcesExcluded - A list of audio sources excluded related to this Composition Hook.
 * @property enabled - Boolean flag indicating if the Composition Hook is active.
 * @property format - Container format of the Composition Hook media file. Any of the following: `mp4`, `webm`.
 * @property friendlyName - Friendly name of the Composition Hook to be shown in the console.
 * @property resolution - Pixel resolution of the composed video.
 * @property statusCallback - A URL that Twilio sends asynchronous webhook requests to on every composition event.
 * @property statusCallbackMethod - HTTP method Twilio should use when requesting the above URL.
 * @property trim - Boolean flag for clipping intervals that have no media.
 * @property videoLayout - The JSON video layout description.
 */
interface CompositionHookInstanceUpdateOptions {
  audioSources?: string[];
  audioSourcesExcluded?: string[];
  enabled?: boolean;
  format?: CompositionHookFormat;
  friendlyName: string;
  resolution?: string;
  statusCallback?: string;
  statusCallbackMethod?: string;
  trim?: boolean;
  videoLayout?: string;
}

interface CompositionHookListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CompositionHookContext;
  /**
   * create a CompositionHookInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CompositionHookListInstanceCreateOptions, callback?: (error: Error | null, item: CompositionHookInstance) => any): Promise<CompositionHookInstance>;
  /**
   * Streams CompositionHookInstance records from the API.
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
  each(opts?: CompositionHookListInstanceEachOptions, callback?: (item: CompositionHookInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a composition_hook
   *
   * @param sid - The Composition Hook Sid that uniquely identifies the Composition Hook to fetch.
   */
  get(sid: string): CompositionHookContext;
  /**
   * Retrieve a single target page of CompositionHookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CompositionHookPage) => any): Promise<CompositionHookPage>;
  /**
   * Lists CompositionHookInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CompositionHookListInstanceOptions, callback?: (error: Error | null, items: CompositionHookInstance[]) => any): Promise<CompositionHookInstance[]>;
  /**
   * Retrieve a single page of CompositionHookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CompositionHookListInstancePageOptions, callback?: (error: Error | null, items: CompositionHookPage) => any): Promise<CompositionHookPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property audioSources - A list of audio sources related to this Composition Hook.
 * @property audioSourcesExcluded - A list of audio sources excluded related to this Composition Hook.
 * @property enabled - Boolean flag indicating if the Composition Hook is active.
 * @property format - Container format of the Composition Hook media file. Any of the following: `mp4`, `webm`.
 * @property friendlyName - Friendly name of the Composition Hook to be shown in the console.
 * @property resolution - Pixel resolution of the composed video.
 * @property statusCallback - A URL that Twilio sends asynchronous webhook requests to on every composition event.
 * @property statusCallbackMethod - HTTP method Twilio should use when requesting the above URL.
 * @property trim - Boolean flag for clipping intervals that have no media.
 * @property videoLayout - The JSON video layout description.
 */
interface CompositionHookListInstanceCreateOptions {
  audioSources?: string[];
  audioSourcesExcluded?: string[];
  enabled?: boolean;
  format?: CompositionHookFormat;
  friendlyName: string;
  resolution?: string;
  statusCallback?: string;
  statusCallbackMethod?: string;
  trim?: boolean;
  videoLayout?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property dateCreatedAfter - Only show Composition Hooks created on or after this ISO8601 date-time with timezone.
 * @property dateCreatedBefore - Only show Composition Hooks created before this ISO8601 date-time with timezone.
 * @property done - Function to be called upon completion of streaming
 * @property enabled - Only show Composition Hooks enabled or disabled.
 * @property friendlyName - Only show Composition Hooks with friendly name that match this name.
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
interface CompositionHookListInstanceEachOptions {
  callback?: (item: CompositionHookInstance, done: (err?: Error) => void) => void;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  done?: Function;
  enabled?: boolean;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property dateCreatedAfter - Only show Composition Hooks created on or after this ISO8601 date-time with timezone.
 * @property dateCreatedBefore - Only show Composition Hooks created before this ISO8601 date-time with timezone.
 * @property enabled - Only show Composition Hooks enabled or disabled.
 * @property friendlyName - Only show Composition Hooks with friendly name that match this name.
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
interface CompositionHookListInstanceOptions {
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  enabled?: boolean;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property dateCreatedAfter - Only show Composition Hooks created on or after this ISO8601 date-time with timezone.
 * @property dateCreatedBefore - Only show Composition Hooks created before this ISO8601 date-time with timezone.
 * @property enabled - Only show Composition Hooks enabled or disabled.
 * @property friendlyName - Only show Composition Hooks with friendly name that match this name.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface CompositionHookListInstancePageOptions {
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  enabled?: boolean;
  friendlyName?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface CompositionHookPayload extends CompositionHookResource, Page.TwilioResponsePayload {
}

interface CompositionHookResource {
  account_sid: string;
  audio_sources: string;
  audio_sources_excluded: string;
  date_created: Date;
  date_updated: string;
  enabled: boolean;
  format: CompositionHookFormat;
  friendly_name: string;
  resolution: string;
  sid: string;
  status_callback: string;
  status_callback_method: string;
  trim: boolean;
  url: string;
  video_layout: string;
}

interface CompositionHookSolution {
}


declare class CompositionHookContext {
  /**
   * Initialize the CompositionHookContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - The Composition Hook Sid that uniquely identifies the Composition Hook to fetch.
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a CompositionHookInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CompositionHookInstance) => any): Promise<CompositionHookInstance>;
  /**
   * remove a CompositionHookInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CompositionHookInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a CompositionHookInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: CompositionHookInstanceUpdateOptions, callback?: (error: Error | null, items: CompositionHookInstance) => any): Promise<CompositionHookInstance>;
}


declare class CompositionHookInstance extends SerializableClass {
  /**
   * Initialize the CompositionHookContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The Composition Hook Sid that uniquely identifies the Composition Hook to fetch.
   */
  constructor(version: V1, payload: CompositionHookPayload, sid: string);

  private _proxy: CompositionHookContext;
  accountSid: string;
  audioSources: string;
  audioSourcesExcluded: string;
  dateCreated: Date;
  dateUpdated: string;
  enabled: boolean;
  /**
   * fetch a CompositionHookInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CompositionHookInstance) => any): void;
  format: CompositionHookFormat;
  friendlyName: string;
  /**
   * remove a CompositionHookInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CompositionHookInstance) => any): void;
  resolution: string;
  sid: string;
  statusCallback: string;
  statusCallbackMethod: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  trim: boolean;
  /**
   * update a CompositionHookInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: CompositionHookInstanceUpdateOptions, callback?: (error: Error | null, items: CompositionHookInstance) => any): void;
  url: string;
  videoLayout: string;
}


declare class CompositionHookPage extends Page<V1, CompositionHookPayload, CompositionHookResource, CompositionHookInstance> {
  /**
   * Initialize the CompositionHookPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: CompositionHookSolution);

  /**
   * Build an instance of CompositionHookInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CompositionHookPayload): CompositionHookInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { CompositionHookContext, CompositionHookInstance, CompositionHookInstanceUpdateOptions, CompositionHookList, CompositionHookListInstance, CompositionHookListInstanceCreateOptions, CompositionHookListInstanceEachOptions, CompositionHookListInstanceOptions, CompositionHookListInstancePageOptions, CompositionHookPage, CompositionHookPayload, CompositionHookResource, CompositionHookSolution }
