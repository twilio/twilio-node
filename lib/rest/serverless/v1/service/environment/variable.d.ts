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

/**
 * Initialize the VariableList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 * @param environmentSid - Environment Sid.
 */
declare function VariableList(version: V1, serviceSid: string, environmentSid: string): VariableListInstance;

/**
 * Options to pass to update
 *
 * @property key - A string by which this Variable can be referenced.
 * @property value - A string that contains the actual value of this Variable.
 */
interface VariableInstanceUpdateOptions {
  key?: string;
  value?: string;
}

interface VariableListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): VariableContext;
  /**
   * create a VariableInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: VariableListInstanceCreateOptions, callback?: (error: Error | null, item: VariableInstance) => any): Promise<VariableInstance>;
  /**
   * Streams VariableInstance records from the API.
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
  each(opts?: VariableListInstanceEachOptions, callback?: (item: VariableInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a variable
   *
   * @param sid - Variable Sid.
   */
  get(sid: string): VariableContext;
  /**
   * Retrieve a single target page of VariableInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: VariablePage) => any): Promise<VariablePage>;
  /**
   * Lists VariableInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: VariableListInstanceOptions, callback?: (error: Error | null, items: VariableInstance[]) => any): Promise<VariableInstance[]>;
  /**
   * Retrieve a single page of VariableInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: VariableListInstancePageOptions, callback?: (error: Error | null, items: VariablePage) => any): Promise<VariablePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property key - A string by which this Variable can be referenced.
 * @property value - A string that contains the actual value of this Variable.
 */
interface VariableListInstanceCreateOptions {
  key: string;
  value: string;
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
interface VariableListInstanceEachOptions {
  callback?: (item: VariableInstance, done: (err?: Error) => void) => void;
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
interface VariableListInstanceOptions {
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
interface VariableListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface VariablePayload extends VariableResource, Page.TwilioResponsePayload {
}

interface VariableResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  environment_sid: string;
  key: string;
  service_sid: string;
  sid: string;
  url: string;
  value: string;
}

interface VariableSolution {
  environmentSid?: string;
  serviceSid?: string;
}


declare class VariableContext {
  /**
   * Initialize the VariableContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Sid.
   * @param environmentSid - Environment Sid.
   * @param sid - Variable Sid.
   */
  constructor(version: V1, serviceSid: string, environmentSid: string, sid: string);

  /**
   * fetch a VariableInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: VariableInstance) => any): Promise<VariableInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a VariableInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: VariableInstanceUpdateOptions, callback?: (error: Error | null, items: VariableInstance) => any): Promise<VariableInstance>;
}


declare class VariableInstance extends SerializableClass {
  /**
   * Initialize the VariableContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param environmentSid - Environment Sid.
   * @param sid - Variable Sid.
   */
  constructor(version: V1, payload: VariablePayload, serviceSid: string, environmentSid: string, sid: string);

  private _proxy: VariableContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  environmentSid: string;
  /**
   * fetch a VariableInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: VariableInstance) => any): void;
  key: string;
  serviceSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a VariableInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: VariableInstanceUpdateOptions, callback?: (error: Error | null, items: VariableInstance) => any): void;
  url: string;
  value: string;
}


declare class VariablePage extends Page<V1, VariablePayload, VariableResource, VariableInstance> {
  /**
   * Initialize the VariablePage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: VariableSolution);

  /**
   * Build an instance of VariableInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: VariablePayload): VariableInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { VariableContext, VariableInstance, VariableList, VariableListInstance, VariableListInstanceCreateOptions, VariableListInstanceEachOptions, VariableListInstanceOptions, VariableListInstancePageOptions, VariablePage, VariablePayload, VariableResource, VariableSolution }
