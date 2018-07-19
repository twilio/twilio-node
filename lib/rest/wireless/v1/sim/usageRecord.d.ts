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

/**
 * @description Initialize the UsageRecordList
 *
 * @param version - Version of the resource
 * @param simSid - The unique id of the SIM resource that this Usage Record is for.
 */
declare function UsageRecordList(version: V1, simSid: string): UsageRecordListInstance;

interface UsageRecordResource {
  account_sid: string;
  commands: string;
  data: string;
  period: string;
  sim_sid: string;
}

interface UsageRecordPayload extends UsageRecordResource, Page.TwilioResponsePayload {
}

interface UsageRecordSolution {
  simSid?: string;
}

interface UsageRecordListInstance {
  /**
   * Streams UsageRecordInstance records from the API.
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
  each(opts?: UsageRecordListInstanceEachOptions, callback?: (item: UsageRecordInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of UsageRecordInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function): Promise<UsageRecordPage>;
  /**
   * @description Lists UsageRecordInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: UsageRecordListInstanceOptions, callback?: function): Promise<UsageRecordInstance[]>;
  /**
   * Retrieve a single page of UsageRecordInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: UsageRecordListInstancePageOptions, callback?: function): Promise<UsageRecordPage>;
}

/**
 * Options to pass to each
 *
 * @property end - Only include usage that has occurred on or before this date.
 * @property start - Only include usage that has occurred on or after this date.
 * @property granularity - The time-based grouping that results are aggregated by.
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
export interface UsageRecordListInstanceEachOptions {
  callback?: (item: UsageRecordInstance, done: (err?: Error) => void) => void;
  done?: Function;
  end?: Date;
  granularity?: usage_record.granularity;
  limit?: number;
  pageSize?: number;
  start?: Date;
}

/**
 * Options to pass to list
 *
 * @property end - Only include usage that has occurred on or before this date.
 * @property start - Only include usage that has occurred on or after this date.
 * @property granularity - The time-based grouping that results are aggregated by.
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
export interface UsageRecordListInstanceOptions {
  end?: Date;
  granularity?: usage_record.granularity;
  limit?: number;
  pageSize?: number;
  start?: Date;
}

/**
 * Options to pass to page
 *
 * @property end - Only include usage that has occurred on or before this date.
 * @property start - Only include usage that has occurred on or after this date.
 * @property granularity - The time-based grouping that results are aggregated by.
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
export interface UsageRecordListInstancePageOptions {
  end?: Date;
  granularity?: usage_record.granularity;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  start?: Date;
}


declare class UsageRecordPage extends Page {
  /**
   * @constructor Twilio.Wireless.V1.SimContext.UsageRecordPage
   * @augments Page
   * @description Initialize the UsageRecordPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Wireless.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of UsageRecordInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class UsageRecordInstance {
  /**
   * @constructor Twilio.Wireless.V1.SimContext.UsageRecordInstance
   * @description Initialize the UsageRecordContext
   *
   * @property simSid - The unique id of the SIM resource that this Usage Record is for.
   * @property accountSid - The unique id of the Account that the SIM belongs to.
   * @property period - The time period for which usage is reported.
   * @property commands - An object representing the Commands usage for the SIM over the period.
   * @property data - An object representing the Data usage for the SIM over the period.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param simSid - The unique id of the SIM resource that this Usage Record is for.
   */
  constructor(version: Twilio.Wireless.V1, payload: object, simSid: sid_like);

  /**
   * Produce a plain JSON object version of the UsageRecordInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
}

export { UsageRecordInstance, UsageRecordList, UsageRecordListInstance, UsageRecordPage, UsageRecordPayload, UsageRecordResource, UsageRecordSolution }
