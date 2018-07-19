/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import Understand = require('../../Understand');
import { FieldList } from './intent/field';
import { SampleList } from './intent/sample';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the IntentList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The unique ID of the Assistant.
 */
declare function IntentList(version: Understand, assistantSid: string): IntentListInstance;

interface IntentResource {
  account_sid: string;
  assistant_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface IntentPayload extends IntentResource, Page.TwilioResponsePayload {
}

interface IntentSolution {
  assistantSid?: string;
}

interface IntentListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): IntentContext;
  /**
   * create a IntentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: IntentListInstanceCreateOptions, callback?: function);
  /**
   * Streams IntentInstance records from the API.
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
  each(opts?: IntentListInstanceEachOptions, callback?: (item: IntentInstance, done: (err?: Error) => void) => void);
  /**
   * Constructs a intent
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of IntentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists IntentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: IntentListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of IntentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: IntentListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
 */
export interface IntentInstanceUpdateOptions {
  friendlyName?: string;
  uniqueName?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
 */
export interface IntentContextUpdateOptions {
  friendlyName?: string;
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
export interface IntentListInstanceEachOptions {
  callback?: (item: IntentInstance, done: (err?: Error) => void) => void;
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
export interface IntentListInstanceOptions {
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
export interface IntentListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

/**
 * Options to pass to create
 *
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
 * @property friendlyName - A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
 */
export interface IntentListInstanceCreateOptions {
  friendlyName?: string;
  uniqueName: string;
}


declare class IntentPage extends Page {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.IntentPage
   * @augments Page
   * @description Initialize the IntentPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Understand, response: Response<string>, solution: object);

  /**
   * Build an instance of IntentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class IntentInstance {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.IntentInstance
   * @description Initialize the IntentContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property accountSid - The unique ID of the Account that created this Intent.
   * @property dateCreated - The date that this resource was created
   * @property dateUpdated - The date that this resource was last updated
   * @property friendlyName - A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
   * @property links - The links
   * @property assistantSid - The unique ID of the Assistant.
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The unique ID of the Assistant.
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Understand, payload: object, assistantSid: sid, sid: sid_like);

  _proxy?: IntentContext;
  /**
   * fetch a IntentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the fields
   */
  fields();
  /**
   * remove a IntentInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the samples
   */
  samples();
  /**
   * Produce a plain JSON object version of the IntentInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
  /**
   * update a IntentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: IntentInstanceUpdateOptions, callback?: function);
}


declare class IntentContext {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.IntentContext
   * @description Initialize the IntentContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property fields - fields resource
   * @property samples - samples resource
   *
   * @param version - Version of the resource
   * @param assistantSid - The assistant_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Understand, assistantSid: sid_like, sid: sid_like);

  /**
   * fetch a IntentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  fields?: Twilio.Preview.Understand.AssistantContext.IntentContext.FieldList;
  /**
   * remove a IntentInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  samples?: Twilio.Preview.Understand.AssistantContext.IntentContext.SampleList;
  /**
   * update a IntentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: IntentContextUpdateOptions, callback?: function);
}

export { IntentContext, IntentInstance, IntentList, IntentListInstance, IntentPage, IntentPayload, IntentResource, IntentSolution }
