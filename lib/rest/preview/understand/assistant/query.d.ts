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
 * @description Initialize the QueryList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The unique ID of the parent Assistant.
 */
declare function QueryList(version: Understand, assistantSid: string): QueryListInstance;

interface QueryResource {
  account_sid: string;
  assistant_sid: string;
  date_created: Date;
  date_updated: Date;
  language: string;
  model_build_sid: string;
  query: string;
  results: string;
  sample_sid: string;
  sid: string;
  source_channel: string;
  status: string;
  url: string;
}

interface QueryPayload extends QueryResource, Page.TwilioResponsePayload {
}

interface QuerySolution {
  assistantSid?: string;
}

interface QueryListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): QueryContext;
  /**
   * create a QueryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: QueryListInstanceCreateOptions, callback?: function);
  /**
   * Streams QueryInstance records from the API.
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
  each(opts?: QueryListInstanceEachOptions, callback?: (item: QueryInstance, done: (err?: Error) => void) => void);
  /**
   * Constructs a query
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of QueryInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists QueryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: QueryListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of QueryInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: QueryListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property sampleSid - The sample_sid
 * @property status - A string that described the query status. The values can be: pending_review, reviewed, discarded
 */
export interface QueryInstanceUpdateOptions {
  sampleSid?: string;
  status?: string;
}

/**
 * Options to pass to update
 *
 * @property sampleSid - The sample_sid
 * @property status - A string that described the query status. The values can be: pending_review, reviewed, discarded
 */
export interface QueryContextUpdateOptions {
  sampleSid?: string;
  status?: string;
}

/**
 * Options to pass to each
 *
 * @property language - An ISO language-country string of the sample.
 * @property modelBuild - The Model Build Sid or unique name of the Model Build to be queried.
 * @property status - A string that described the query status. The values can be: pending_review, reviewed, discarded
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
export interface QueryListInstanceEachOptions {
  callback?: (item: QueryInstance, done: (err?: Error) => void) => void;
  done?: Function;
  language?: string;
  limit?: number;
  modelBuild?: string;
  pageSize?: number;
  status?: string;
}

/**
 * Options to pass to list
 *
 * @property language - An ISO language-country string of the sample.
 * @property modelBuild - The Model Build Sid or unique name of the Model Build to be queried.
 * @property status - A string that described the query status. The values can be: pending_review, reviewed, discarded
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
export interface QueryListInstanceOptions {
  language?: string;
  limit?: number;
  modelBuild?: string;
  pageSize?: number;
  status?: string;
}

/**
 * Options to pass to page
 *
 * @property language - An ISO language-country string of the sample.
 * @property modelBuild - The Model Build Sid or unique name of the Model Build to be queried.
 * @property status - A string that described the query status. The values can be: pending_review, reviewed, discarded
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
export interface QueryListInstancePageOptions {
  language?: string;
  modelBuild?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  status?: string;
}

/**
 * Options to pass to create
 *
 * @property language - An ISO language-country string of the sample.
 * @property query - A user-provided string that uniquely identifies this resource as an alternative to the sid. It can be up to 2048 characters long.
 * @property intents - Constraints the query to a set of intents. Useful when you need to constrain the paths the user can take. Intents should be comma separated intent-unique-name-1, intent-unique-name-2
 * @property modelBuild - The Model Build Sid or unique name of the Model Build to be queried.
 * @property field - Constraints the query to a given Field with an intent. Useful when you know the Field you are expecting. It accepts one field in the format intent-unique-name-1:field-unique-name
 */
export interface QueryListInstanceCreateOptions {
  field?: string;
  intents?: string;
  language: string;
  modelBuild?: string;
  query: string;
}


declare class QueryPage extends Page {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.QueryPage
   * @augments Page
   * @description Initialize the QueryPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Understand, response: Response<string>, solution: object);

  /**
   * Build an instance of QueryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class QueryInstance {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.QueryInstance
   * @description Initialize the QueryContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property accountSid - The unique ID of the Account that created this Query.
   * @property dateCreated - The date that this resource was created
   * @property dateUpdated - The date that this resource was last updated
   * @property results - The natural language analysis results which include the Intent recognized, the confidence score and a list of identified Fields.
   * @property language - An ISO language-country string of the sample.
   * @property modelBuildSid - The unique ID of the Model Build queried.
   * @property query - The end-user's natural language input.
   * @property sampleSid - An optional reference to the Sample created from this query.
   * @property assistantSid - The unique ID of the parent Assistant.
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property status - A string that described the query status. The values can be: pending_review, reviewed, discarded
   * @property url - The url
   * @property sourceChannel - The communication channel where this end-user input came from
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The unique ID of the parent Assistant.
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Understand, payload: object, assistantSid: sid, sid: sid_like);

  _proxy?: QueryContext;
  /**
   * fetch a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the QueryInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
  /**
   * update a QueryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: QueryInstanceUpdateOptions, callback?: function);
}


declare class QueryContext {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.QueryContext
   * @description Initialize the QueryContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param assistantSid - The assistant_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Understand, assistantSid: sid_like, sid: sid_like);

  /**
   * fetch a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a QueryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: QueryContextUpdateOptions, callback?: function);
}

export { QueryContext, QueryInstance, QueryList, QueryListInstance, QueryPage, QueryPayload, QueryResource, QuerySolution }
