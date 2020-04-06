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

type MetricStreamDirection = 'unknown'|'inbound'|'outbound'|'both';

type MetricTwilioEdge = 'unknown_edge'|'carrier_edge'|'sip_edge'|'sdk_edge'|'client_edge';

/**
 * Initialize the MetricList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param callSid - The call_sid
 */
declare function MetricList(version: V1, callSid: string): MetricListInstance;

interface MetricListInstance {
  /**
   * Streams MetricInstance records from the API.
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
   * @param callback - Function to process each record
   */
  each(callback?: (item: MetricInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams MetricInstance records from the API.
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
  each(opts?: MetricListInstanceEachOptions, callback?: (item: MetricInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of MetricInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: MetricPage) => any): Promise<MetricPage>;
  /**
   * Retrieve a single target page of MetricInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: MetricPage) => any): Promise<MetricPage>;
  /**
   * Lists MetricInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: MetricInstance[]) => any): Promise<MetricInstance[]>;
  /**
   * Lists MetricInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: MetricListInstanceOptions, callback?: (error: Error | null, items: MetricInstance[]) => any): Promise<MetricInstance[]>;
  /**
   * Retrieve a single page of MetricInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: MetricPage) => any): Promise<MetricPage>;
  /**
   * Retrieve a single page of MetricInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: MetricListInstancePageOptions, callback?: (error: Error | null, items: MetricPage) => any): Promise<MetricPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property direction - The direction
 * @property done - Function to be called upon completion of streaming
 * @property edge - The edge
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
interface MetricListInstanceEachOptions {
  callback?: (item: MetricInstance, done: (err?: Error) => void) => void;
  direction?: MetricStreamDirection;
  done?: Function;
  edge?: MetricTwilioEdge;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property direction - The direction
 * @property edge - The edge
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
interface MetricListInstanceOptions {
  direction?: MetricStreamDirection;
  edge?: MetricTwilioEdge;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property direction - The direction
 * @property edge - The edge
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface MetricListInstancePageOptions {
  direction?: MetricStreamDirection;
  edge?: MetricTwilioEdge;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface MetricPayload extends MetricResource, Page.TwilioResponsePayload {
}

interface MetricResource {
  account_sid: string;
  call_sid: string;
  carrier_edge: object;
  client_edge: object;
  direction: MetricStreamDirection;
  edge: MetricTwilioEdge;
  sdk_edge: object;
  sip_edge: object;
  timestamp: string;
}

interface MetricSolution {
  callSid?: string;
}


declare class MetricInstance extends SerializableClass {
  /**
   * Initialize the MetricContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param callSid - The call_sid
   */
  constructor(version: V1, payload: MetricPayload, callSid: string);

  accountSid: string;
  callSid: string;
  carrierEdge: any;
  clientEdge: any;
  direction: MetricStreamDirection;
  edge: MetricTwilioEdge;
  sdkEdge: any;
  sipEdge: any;
  timestamp: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class MetricPage extends Page<V1, MetricPayload, MetricResource, MetricInstance> {
  /**
   * Initialize the MetricPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: MetricSolution);

  /**
   * Build an instance of MetricInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MetricPayload): MetricInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { MetricInstance, MetricList, MetricListInstance, MetricListInstanceEachOptions, MetricListInstanceOptions, MetricListInstancePageOptions, MetricPage, MetricPayload, MetricResource, MetricSolution, MetricStreamDirection, MetricTwilioEdge }
