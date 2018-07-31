/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the TranscriptionList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function TranscriptionList(version: V2010, accountSid: string): TranscriptionListInstance;

interface TranscriptionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): TranscriptionContext;
  /**
   * Streams TranscriptionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: TranscriptionListInstanceEachOptions, callback?: (item: TranscriptionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a transcription
   *
   * @param sid - Fetch by unique transcription SID
   */
  get(sid: string): TranscriptionContext;
  /**
   * Retrieve a single target page of TranscriptionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: TranscriptionPage) => any): Promise<TranscriptionPage>;
  /**
   * Lists TranscriptionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: TranscriptionListInstanceOptions, callback?: (error: Error | null, items: TranscriptionInstance[]) => any): Promise<TranscriptionInstance[]>;
  /**
   * Retrieve a single page of TranscriptionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: TranscriptionListInstancePageOptions, callback?: (error: Error | null, items: TranscriptionPage) => any): Promise<TranscriptionPage>;
}

/**
 * Options to pass to each
 *
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
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 */
interface TranscriptionListInstanceEachOptions {
  callback?: (item: TranscriptionInstance, done: (err?: Error) => void) => void;
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
interface TranscriptionListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
interface TranscriptionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface TranscriptionPayload extends TranscriptionResource, Page.TwilioResponsePayload {
}

interface TranscriptionResource {
  account_sid: string;
  api_version: string;
  date_created: Date;
  date_updated: Date;
  duration: string;
  price: number;
  price_unit: string;
  recording_sid: string;
  sid: string;
  status: TranscriptionStatus;
  transcription_text: string;
  type: string;
  uri: string;
}

interface TranscriptionSolution {
  accountSid?: string;
}


declare class TranscriptionPage extends Page<V2010, TranscriptionPayload, TranscriptionResource, TranscriptionInstance> {
  /**
   * Initialize the TranscriptionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: TranscriptionSolution);

  /**
   * Build an instance of TranscriptionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TranscriptionPayload): TranscriptionInstance;
}


declare class TranscriptionInstance extends SerializableClass {
  /**
   * Initialize the TranscriptionContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property apiVersion - The api_version
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property duration - The duration of the transcribed audio, in seconds.
   * @property price - The charge for this transcription
   * @property priceUnit - The currency in which Price is measured
   * @property recordingSid - The string that uniquely identifies the recording
   * @property sid - A string that uniquely identifies this transcription
   * @property status - The status of the transcription
   * @property transcriptionText - The text content of the transcription.
   * @property type - The type
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param sid - Fetch by unique transcription SID
   */
  constructor(version: V2010, payload: TranscriptionPayload, accountSid: string, sid: string);

  private _proxy: TranscriptionContext;
  accountSid: string;
  apiVersion: string;
  dateCreated: Date;
  dateUpdated: Date;
  duration: string;
  /**
   * fetch a TranscriptionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TranscriptionInstance) => any): void;
  price: number;
  priceUnit: string;
  recordingSid: string;
  /**
   * remove a TranscriptionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: TranscriptionInstance) => any): void;
  sid: string;
  status: transcription.status;
  /**
   * Produce a plain JSON object version of the TranscriptionInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  transcriptionText: string;
  type: string;
  uri: string;
}


declare class TranscriptionContext {
  /**
   * Initialize the TranscriptionContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique transcription SID
   */
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a TranscriptionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TranscriptionInstance) => any): void;
  /**
   * remove a TranscriptionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: TranscriptionInstance) => any): void;
}

export { TranscriptionContext, TranscriptionInstance, TranscriptionList, TranscriptionListInstance, TranscriptionListInstanceEachOptions, TranscriptionListInstanceOptions, TranscriptionListInstancePageOptions, TranscriptionPage, TranscriptionPayload, TranscriptionResource, TranscriptionSolution }
