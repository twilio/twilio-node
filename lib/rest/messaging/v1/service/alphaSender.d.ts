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
 * @description Initialize the AlphaSenderList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The 34 character unique sid of the Messaging Service.
 */
declare function AlphaSenderList(version: V1, serviceSid: string): AlphaSenderListInstance;

interface AlphaSenderResource {
  account_sid: string;
  alpha_sender: string;
  capabilities: string;
  date_created: Date;
  date_updated: Date;
  service_sid: string;
  sid: string;
  url: string;
}

interface AlphaSenderPayload extends AlphaSenderResource, Page.TwilioResponsePayload {
}

interface AlphaSenderSolution {
  serviceSid?: string;
}

interface AlphaSenderListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AlphaSenderContext;
  /**
   * create a AlphaSenderInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: AlphaSenderListInstanceCreateOptions, callback?: function);
  /**
   * Streams AlphaSenderInstance records from the API.
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
  each(opts?: AlphaSenderListInstanceEachOptions, callback?: (item: AlphaSenderInstance, done: (err?: Error) => void) => void);
  /**
   * Constructs a alpha_sender
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of AlphaSenderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists AlphaSenderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AlphaSenderListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of AlphaSenderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AlphaSenderListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to create
 *
 * @property alphaSender - An Alphanumeric Sender ID string, up to 11 characters.
 */
export interface AlphaSenderListInstanceCreateOptions {
  alphaSender: string;
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
export interface AlphaSenderListInstanceEachOptions {
  callback?: (item: AlphaSenderInstance, done: (err?: Error) => void) => void;
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
export interface AlphaSenderListInstanceOptions {
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
export interface AlphaSenderListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class AlphaSenderPage extends Page {
  /**
   * @constructor Twilio.Messaging.V1.ServiceContext.AlphaSenderPage
   * @augments Page
   * @description Initialize the AlphaSenderPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Messaging.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of AlphaSenderInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class AlphaSenderInstance {
  /**
   * @constructor Twilio.Messaging.V1.ServiceContext.AlphaSenderInstance
   * @description Initialize the AlphaSenderContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The 34 character unique sid of the Alpha Sender ID.
   * @property accountSid - The 34 character unique sid of the Account.
   * @property serviceSid - The 34 character unique sid of the Messaging Service.
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property alphaSender - An Alphanumeric Sender ID string, up to 11 characters.
   * @property capabilities - An array of values that indicate whether the number can receive calls or messages.
   * @property url - The absolute URL for this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The 34 character unique sid of the Messaging Service.
   * @param sid - The sid
   */
  constructor(version: Twilio.Messaging.V1, payload: object, serviceSid: sid, sid: sid_like);

  _proxy?: AlphaSenderContext;
  /**
   * fetch a AlphaSenderInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a AlphaSenderInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the AlphaSenderInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
}


declare class AlphaSenderContext {
  /**
   * @constructor Twilio.Messaging.V1.ServiceContext.AlphaSenderContext
   * @description Initialize the AlphaSenderContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Messaging.V1, serviceSid: sid, sid: sid_like);

  /**
   * fetch a AlphaSenderInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a AlphaSenderInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { AlphaSenderContext, AlphaSenderInstance, AlphaSenderList, AlphaSenderListInstance, AlphaSenderPage, AlphaSenderPayload, AlphaSenderResource, AlphaSenderSolution }
