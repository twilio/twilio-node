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
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: FlowListInstanceEachOptions, callback?: (item: FlowInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a flow
   *
   * @param sid - The sid
   */
  get(sid: string): FlowContext;
  /**
   * Retrieve a single target page of FlowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FlowPage) => any): Promise<FlowPage>;
  /**
   * Lists FlowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: FlowListInstanceOptions, callback?: (error: Error | null, items: FlowInstance[]) => any): Promise<FlowInstance[]>;
  /**
   * Retrieve a single page of FlowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: FlowListInstancePageOptions, callback?: (error: Error | null, items: FlowPage) => any): Promise<FlowPage>;
}


declare class FlowPage extends Page<V1, FlowPayload, FlowResource, FlowInstance> {
  /**
   * Initialize the FlowPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: FlowSolution);

  /**
   * Build an instance of FlowInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FlowPayload): FlowInstance;
}


declare class FlowInstance extends SerializableClass {
  /**
   * Initialize the FlowContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
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
  constructor(version: V1, payload: FlowPayload, sid: string);

  private _proxy: FlowContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * Access the engagements
   */
  engagements();
  /**
   * fetch a FlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FlowInstance) => any): void;
  friendlyName: string;
  links: string;
  /**
   * remove a FlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FlowInstance) => any): void;
  sid: string;
  status: flow.status;
  /**
   * Produce a plain JSON object version of the FlowInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
  version: number;
}


declare class FlowContext {
  /**
   * Initialize the FlowContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property engagements - engagements resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: V1, sid: string);

  engagements?: Twilio.Studio.V1.FlowContext.EngagementList;
  /**
   * fetch a FlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FlowInstance) => any): void;
  /**
   * remove a FlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FlowInstance) => any): void;
}

export { FlowContext, FlowInstance, FlowList, FlowListInstance, FlowListInstanceEachOptions, FlowListInstanceOptions, FlowListInstancePageOptions, FlowPage, FlowPayload, FlowResource, FlowSolution }
