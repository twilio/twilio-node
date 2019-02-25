/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import Understand = require('../../../Understand');
import { SerializableClass } from '../../../../../interfaces';

/**
 * Initialize the SampleList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The unique ID of the Assistant.
 * @param taskSid - The unique ID of the Task associated with this Sample.
 */
declare function SampleList(version: Understand, assistantSid: string, taskSid: string): SampleListInstance;

/**
 * Options to pass to update
 *
 * @property language - An ISO language-country string of the sample.
 * @property sourceChannel - The communication channel the sample was captured. It can be: voice, sms, chat, alexa, google-assistant, or slack. If not included the value will be null
 * @property taggedText - The text example of how end-users may express this task. The sample may contain Field tag blocks.
 */
interface SampleInstanceUpdateOptions {
  language?: string;
  sourceChannel?: string;
  taggedText?: string;
}

interface SampleListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SampleContext;
  /**
   * create a SampleInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: SampleListInstanceCreateOptions, callback?: (error: Error | null, item: SampleInstance) => any): Promise<SampleInstance>;
  /**
   * Streams SampleInstance records from the API.
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
  each(opts?: SampleListInstanceEachOptions, callback?: (item: SampleInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a sample
   *
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  get(sid: string): SampleContext;
  /**
   * Retrieve a single target page of SampleInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SamplePage) => any): Promise<SamplePage>;
  /**
   * Lists SampleInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SampleListInstanceOptions, callback?: (error: Error | null, items: SampleInstance[]) => any): Promise<SampleInstance[]>;
  /**
   * Retrieve a single page of SampleInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SampleListInstancePageOptions, callback?: (error: Error | null, items: SamplePage) => any): Promise<SamplePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property language - An ISO language-country string of the sample.
 * @property sourceChannel - The communication channel the sample was captured. It can be: voice, sms, chat, alexa, google-assistant, or slack. If not included the value will be null
 * @property taggedText - The text example of how end-users may express this task. The sample may contain Field tag blocks.
 */
interface SampleListInstanceCreateOptions {
  language: string;
  sourceChannel?: string;
  taggedText: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property language - An ISO language-country string of the sample.
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
interface SampleListInstanceEachOptions {
  callback?: (item: SampleInstance, done: (err?: Error) => void) => void;
  done?: Function;
  language?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property language - An ISO language-country string of the sample.
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
interface SampleListInstanceOptions {
  language?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property language - An ISO language-country string of the sample.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface SampleListInstancePageOptions {
  language?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SamplePayload extends SampleResource, Page.TwilioResponsePayload {
}

interface SampleResource {
  account_sid: string;
  assistant_sid: string;
  date_created: Date;
  date_updated: Date;
  language: string;
  sid: string;
  source_channel: string;
  tagged_text: string;
  task_sid: string;
  url: string;
}

interface SampleSolution {
  assistantSid?: string;
  taskSid?: string;
}


declare class SampleContext {
  /**
   * Initialize the SampleContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param assistantSid - The unique ID of the Assistant.
   * @param taskSid - The unique ID of the Task associated with this Sample.
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: Understand, assistantSid: string, taskSid: string, sid: string);

  /**
   * fetch a SampleInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SampleInstance) => any): Promise<SampleInstance>;
  /**
   * remove a SampleInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SampleInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SampleInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SampleInstanceUpdateOptions, callback?: (error: Error | null, items: SampleInstance) => any): Promise<SampleInstance>;
}


declare class SampleInstance extends SerializableClass {
  /**
   * Initialize the SampleContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The unique ID of the Assistant.
   * @param taskSid - The unique ID of the Task associated with this Sample.
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: Understand, payload: SamplePayload, assistantSid: string, taskSid: string, sid: string);

  private _proxy: SampleContext;
  accountSid: string;
  assistantSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a SampleInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SampleInstance) => any): void;
  language: string;
  /**
   * remove a SampleInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SampleInstance) => any): void;
  sid: string;
  sourceChannel: string;
  taggedText: string;
  taskSid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SampleInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SampleInstanceUpdateOptions, callback?: (error: Error | null, items: SampleInstance) => any): void;
  url: string;
}


declare class SamplePage extends Page<Understand, SamplePayload, SampleResource, SampleInstance> {
  /**
   * Initialize the SamplePage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Understand, response: Response<string>, solution: SampleSolution);

  /**
   * Build an instance of SampleInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SamplePayload): SampleInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SampleContext, SampleInstance, SampleList, SampleListInstance, SampleListInstanceCreateOptions, SampleListInstanceEachOptions, SampleListInstanceOptions, SampleListInstancePageOptions, SamplePage, SamplePayload, SampleResource, SampleSolution }
