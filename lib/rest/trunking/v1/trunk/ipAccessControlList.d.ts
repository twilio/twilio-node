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
 * @description Initialize the IpAccessControlListList
 *
 * @param version - Version of the resource
 * @param trunkSid - The unique sid that identifies the associated Trunk
 */
declare function IpAccessControlListList(version: V1, trunkSid: string): IpAccessControlListListInstance;

interface IpAccessControlListResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  trunk_sid: string;
  url: string;
}

interface IpAccessControlListPayload extends IpAccessControlListResource, Page.TwilioResponsePayload {
}

interface IpAccessControlListSolution {
  trunkSid?: string;
}

interface IpAccessControlListListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): IpAccessControlListContext;
  /**
   * create a IpAccessControlListInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: IpAccessControlListListInstanceCreateOptions, callback?: function);
  /**
   * Streams IpAccessControlListInstance records from the API.
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
  each(opts?: IpAccessControlListListInstanceEachOptions, callback?: (item: IpAccessControlListInstance, done: (err?: Error) => void) => void);
  /**
   * Constructs a ip_access_control_list
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of IpAccessControlListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists IpAccessControlListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: IpAccessControlListListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of IpAccessControlListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: IpAccessControlListListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to create
 *
 * @property ipAccessControlListSid - The SID of the IP Access Control List that you want to associate with this trunk.
 */
export interface IpAccessControlListListInstanceCreateOptions {
  ipAccessControlListSid: string;
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
export interface IpAccessControlListListInstanceEachOptions {
  callback?: (item: IpAccessControlListInstance, done: (err?: Error) => void) => void;
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
export interface IpAccessControlListListInstanceOptions {
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
export interface IpAccessControlListListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class IpAccessControlListPage extends Page {
  /**
   * @constructor Twilio.Trunking.V1.TrunkContext.IpAccessControlListPage
   * @augments Page
   * @description Initialize the IpAccessControlListPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Trunking.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of IpAccessControlListInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class IpAccessControlListInstance {
  /**
   * @constructor Twilio.Trunking.V1.TrunkContext.IpAccessControlListInstance
   * @description Initialize the IpAccessControlListContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property sid - A string that uniquely identifies this resource
   * @property trunkSid - The unique sid that identifies the associated Trunk
   * @property friendlyName - A human readable description of this resource
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param trunkSid - The unique sid that identifies the associated Trunk
   * @param sid - The sid
   */
  constructor(version: Twilio.Trunking.V1, payload: object, trunkSid: sid, sid: sid);

  _proxy?: IpAccessControlListContext;
  /**
   * fetch a IpAccessControlListInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a IpAccessControlListInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the IpAccessControlListInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
}


declare class IpAccessControlListContext {
  /**
   * @constructor Twilio.Trunking.V1.TrunkContext.IpAccessControlListContext
   * @description Initialize the IpAccessControlListContext
   *
   * @param version - Version of the resource
   * @param trunkSid - The trunk_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Trunking.V1, trunkSid: sid, sid: sid);

  /**
   * fetch a IpAccessControlListInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a IpAccessControlListInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { IpAccessControlListContext, IpAccessControlListInstance, IpAccessControlListList, IpAccessControlListListInstance, IpAccessControlListPage, IpAccessControlListPayload, IpAccessControlListResource, IpAccessControlListSolution }
