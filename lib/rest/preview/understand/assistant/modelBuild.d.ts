/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import Understand = require('../../Understand');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the ModelBuildList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The unique ID of the parent Assistant.
 */
declare function ModelBuildList(version: Understand, assistantSid: string): ModelBuildListInstance;

/**
 * Options to pass to update
 *
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. For example: v0.1
 */
interface ModelBuildInstanceUpdateOptions {
  uniqueName?: string;
}

interface ModelBuildListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ModelBuildContext;
  /**
   * create a ModelBuildInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: ModelBuildListInstanceCreateOptions, callback?: (error: Error | null, items: ModelBuildListInstance) => any): Promise<ModelBuildInstance>;
  /**
   * Streams ModelBuildInstance records from the API.
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
  each(opts?: ModelBuildListInstanceEachOptions, callback?: (item: ModelBuildInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a model_build
   *
   * @param sid - The sid
   */
  get(sid: string): ModelBuildContext;
  /**
   * Retrieve a single target page of ModelBuildInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ModelBuildPage) => any): Promise<ModelBuildPage>;
  /**
   * Lists ModelBuildInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ModelBuildListInstanceOptions, callback?: (error: Error | null, items: ModelBuildInstance[]) => any): Promise<ModelBuildInstance[]>;
  /**
   * Retrieve a single page of ModelBuildInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ModelBuildListInstancePageOptions, callback?: (error: Error | null, items: ModelBuildPage) => any): Promise<ModelBuildPage>;
}

/**
 * Options to pass to create
 *
 * @property statusCallback - The status_callback
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. For example: v0.1
 */
interface ModelBuildListInstanceCreateOptions {
  statusCallback?: string;
  uniqueName?: string;
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
interface ModelBuildListInstanceEachOptions {
  callback?: (item: ModelBuildInstance, done: (err?: Error) => void) => void;
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
interface ModelBuildListInstanceOptions {
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
interface ModelBuildListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ModelBuildPayload extends ModelBuildResource, Page.TwilioResponsePayload {
}

interface ModelBuildResource {
  account_sid: string;
  assistant_sid: string;
  build_duration: number;
  date_created: Date;
  date_updated: Date;
  error_code: number;
  sid: string;
  status: ModelBuildStatus;
  unique_name: string;
  url: string;
}

interface ModelBuildSolution {
  assistantSid?: string;
}


declare class ModelBuildPage extends Page<Understand, ModelBuildPayload, ModelBuildResource, ModelBuildInstance> {
  /**
   * Initialize the ModelBuildPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Understand, response: Response<string>, solution: ModelBuildSolution);

  /**
   * Build an instance of ModelBuildInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ModelBuildPayload): ModelBuildInstance;
}


declare class ModelBuildInstance extends SerializableClass {
  /**
   * Initialize the ModelBuildContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property accountSid - The unique ID of the Account that created this Model Build.
   * @property dateCreated - The date that this resource was created
   * @property dateUpdated - The date that this resource was last updated
   * @property assistantSid - The unique ID of the parent Assistant.
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property status - A string that described the model build status. The values can be: enqueued, building, completed, failed
   * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
   * @property url - The url
   * @property buildDuration - The time in seconds it took to build the model.
   * @property errorCode - The error_code
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The unique ID of the parent Assistant.
   * @param sid - The sid
   */
  constructor(version: Understand, payload: ModelBuildPayload, assistantSid: string, sid: string);

  private _proxy: ModelBuildContext;
  accountSid: string;
  assistantSid: string;
  buildDuration: number;
  dateCreated: Date;
  dateUpdated: Date;
  errorCode: number;
  /**
   * fetch a ModelBuildInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ModelBuildInstance) => any): void;
  /**
   * remove a ModelBuildInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ModelBuildInstance) => any): void;
  sid: string;
  status: model_build.status;
  /**
   * Produce a plain JSON object version of the ModelBuildInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a ModelBuildInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ModelBuildInstanceUpdateOptions, callback?: (error: Error | null, items: ModelBuildInstance) => any): void;
  url: string;
}


declare class ModelBuildContext {
  /**
   * Initialize the ModelBuildContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param assistantSid - The assistant_sid
   * @param sid - The sid
   */
  constructor(version: Understand, assistantSid: string, sid: string);

  /**
   * fetch a ModelBuildInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ModelBuildInstance) => any): void;
  /**
   * remove a ModelBuildInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ModelBuildInstance) => any): void;
  /**
   * update a ModelBuildInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ModelBuildInstanceUpdateOptions, callback?: (error: Error | null, items: ModelBuildInstance) => any): void;
}

export { ModelBuildContext, ModelBuildInstance, ModelBuildList, ModelBuildListInstance, ModelBuildListInstanceCreateOptions, ModelBuildListInstanceEachOptions, ModelBuildListInstanceOptions, ModelBuildListInstancePageOptions, ModelBuildPage, ModelBuildPayload, ModelBuildResource, ModelBuildSolution }
