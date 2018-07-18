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
import { FaxMediaList } from './fax/faxMedia';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the FaxList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function FaxList(version: V1): FaxListInstance;

interface FaxResource {
  account_sid: string;
  api_version: string;
  date_created: Date;
  date_updated: Date;
  direction: FaxDirection;
  duration: number;
  from: string;
  links: string;
  media_sid: string;
  media_url: string;
  num_pages: number;
  price: number;
  price_unit: string;
  quality: FaxQuality;
  sid: string;
  status: FaxStatus;
  to: string;
  url: string;
}

interface FaxPayload extends FaxResource, Page.TwilioResponsePayload {
}

interface FaxSolution {
}

interface FaxListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FaxContext;
  /**
   * create a FaxInstance
   *
   * @function create
   * @memberof Twilio.Fax.V1.FaxList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * Streams FaxInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Fax.V1.FaxList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a fax
   *
   * @function get
   * @memberof Twilio.Fax.V1.FaxList
   * @instance
   *
   * @param sid - A string that uniquely identifies this fax.
   */
  get(sid: string);
  /**
   * Retrieve a single target page of FaxInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Fax.V1.FaxList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists FaxInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Fax.V1.FaxList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of FaxInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Fax.V1.FaxList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property status - The updated status of this fax
 */
export interface UpdateOptions {
  status?: fax.update_status;
}

/**
 * Options to pass to update
 *
 * @property status - The updated status of this fax
 */
export interface UpdateOptions {
  status?: fax.update_status;
}


declare class FaxPage extends Page {
  /**
   * @constructor Twilio.Fax.V1.FaxPage
   * @augments Page
   * @description Initialize the FaxPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Fax.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of FaxInstance
   *
   * @function getInstance
   * @memberof Twilio.Fax.V1.FaxPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class FaxInstance {
  /**
   * @constructor Twilio.Fax.V1.FaxInstance
   * @description Initialize the FaxContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this fax.
   * @property accountSid - Account SID
   * @property from - The party that sent the fax
   * @property to - The party that received the fax
   * @property quality - The quality of this fax
   * @property mediaSid - Media SID
   * @property mediaUrl - URL pointing to fax media
   * @property numPages - Number of pages
   * @property duration - The time taken to transmit the fax
   * @property status - The status of this fax
   * @property direction - The direction of this fax
   * @property apiVersion - The API version used
   * @property price - Fax transmission price
   * @property priceUnit - Currency used for billing
   * @property dateCreated - The date this fax was created
   * @property dateUpdated - The date this fax was updated
   * @property links - Nested resource URLs
   * @property url - The URL of this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - A string that uniquely identifies this fax.
   */
  constructor(version: Twilio.Fax.V1, payload: object, sid: sid);

  _proxy?: FaxContext;
  /**
   * fetch a FaxInstance
   *
   * @function fetch
   * @memberof Twilio.Fax.V1.FaxInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the media
   *
   * @function media
   * @memberof Twilio.Fax.V1.FaxInstance
   * @instance
   */
  media();
  /**
   * remove a FaxInstance
   *
   * @function remove
   * @memberof Twilio.Fax.V1.FaxInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the FaxInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Fax.V1.FaxInstance
   * @instance
   */
  toJSON();
  /**
   * update a FaxInstance
   *
   * @function update
   * @memberof Twilio.Fax.V1.FaxInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class FaxContext {
  /**
   * @constructor Twilio.Fax.V1.FaxContext
   * @description Initialize the FaxContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property media - media resource
   *
   * @param version - Version of the resource
   * @param sid - A string that uniquely identifies this fax.
   */
  constructor(version: Twilio.Fax.V1, sid: sid);

  /**
   * fetch a FaxInstance
   *
   * @function fetch
   * @memberof Twilio.Fax.V1.FaxContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  media?: Twilio.Fax.V1.FaxContext.FaxMediaList;
  /**
   * remove a FaxInstance
   *
   * @function remove
   * @memberof Twilio.Fax.V1.FaxContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a FaxInstance
   *
   * @function update
   * @memberof Twilio.Fax.V1.FaxContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { FaxContext, FaxInstance, FaxList, FaxListInstance, FaxPage, FaxPayload, FaxResource, FaxSolution }
