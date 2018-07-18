/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { EngagementList } from './flow/engagement';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the FlowList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function FlowList(version: V1): FlowListInstance;

interface FlowResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  sid: string;
  status: FlowStatus;
  url: string;
  version: number;
}

interface FlowPayload extends FlowResource, Page.TwilioResponsePayload {
}

interface FlowSolution {
}

interface FlowListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FlowContext;
  /**
   * Streams FlowInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Studio.V1.FlowList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a flow
   *
   * @function get
   * @memberof Twilio.Studio.V1.FlowList
   * @instance
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of FlowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Studio.V1.FlowList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists FlowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Studio.V1.FlowList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of FlowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Studio.V1.FlowList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class FlowPage extends Page {
  /**
   * @constructor Twilio.Studio.V1.FlowPage
   * @augments Page
   * @description Initialize the FlowPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Studio.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of FlowInstance
   *
   * @function getInstance
   * @memberof Twilio.Studio.V1.FlowPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class FlowInstance {
  /**
   * @constructor Twilio.Studio.V1.FlowInstance
   * @description Initialize the FlowContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property friendlyName - The friendly_name
   * @property status - The status
   * @property version - The version
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Studio.V1, payload: object, sid: sid);

  _proxy?: FlowContext;
  /**
   * Access the engagements
   *
   * @function engagements
   * @memberof Twilio.Studio.V1.FlowInstance
   * @instance
   */
  engagements();
  /**
   * fetch a FlowInstance
   *
   * @function fetch
   * @memberof Twilio.Studio.V1.FlowInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a FlowInstance
   *
   * @function remove
   * @memberof Twilio.Studio.V1.FlowInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the FlowInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Studio.V1.FlowInstance
   * @instance
   */
  toJSON();
}


declare class FlowContext {
  /**
   * @constructor Twilio.Studio.V1.FlowContext
   * @description Initialize the FlowContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property engagements - engagements resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Studio.V1, sid: sid);

  engagements?: Twilio.Studio.V1.FlowContext.EngagementList;
  /**
   * fetch a FlowInstance
   *
   * @function fetch
   * @memberof Twilio.Studio.V1.FlowContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a FlowInstance
   *
   * @function remove
   * @memberof Twilio.Studio.V1.FlowContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { FlowContext, FlowInstance, FlowList, FlowListInstance, FlowPage, FlowPayload, FlowResource, FlowSolution }
