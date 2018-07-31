/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import Studio = require('../Studio');
import { EngagementList } from './flow/engagement';
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the FlowList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function FlowList(version: Studio): FlowListInstance;

interface FlowResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  debug: boolean;
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


declare class FlowPage extends Page<Studio, FlowPayload, FlowResource, FlowInstance> {
  /**
   * Initialize the FlowPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Studio, response: Response<string>, solution: FlowSolution);

  /**
   * Build an instance of FlowInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FlowPayload): FlowInstance;
}


declare class FlowInstance extends SerializableClass {
  /**
   * Initialize the FlowContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Flow.
   * @property accountSid - Account Sid.
   * @property friendlyName - A human readable description of this resource.
   * @property status - The Status of this Flow
   * @property debug - Toggle extra logging.
   * @property version - The latest version number of this Flow's definition.
   * @property dateCreated - The date this Flow was created
   * @property dateUpdated - The date this Flow was updated
   * @property url - The URL of this resource.
   * @property links - Nested resource URLs.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Studio, payload: FlowPayload, sid: string);

  private _proxy: FlowContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  debug: boolean;
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
   * Initialize the FlowContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property engagements - engagements resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Studio, sid: string);

  engagements?: Twilio.Preview.Studio.FlowContext.EngagementList;
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
