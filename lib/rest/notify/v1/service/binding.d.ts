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
 * @description Initialize the BindingList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 */
declare function BindingList(version: V1, serviceSid: string): BindingListInstance;

interface BindingResource {
  account_sid: string;
  address: string;
  binding_type: string;
  credential_sid: string;
  date_created: Date;
  date_updated: Date;
  endpoint: string;
  identity: string;
  links: string;
  notification_protocol_version: string;
  service_sid: string;
  sid: string;
  tags: string;
  url: string;
}

interface BindingPayload extends BindingResource, Page.TwilioResponsePayload {
}

interface BindingSolution {
  serviceSid?: string;
}

interface BindingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): BindingContext;
  /**
   * create a BindingInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: BindingListInstanceCreateOptions, callback?: (error: Error | null, items: BindingListInstance) => any): Promise<BindingInstance>;
  /**
   * Streams BindingInstance records from the API.
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
  each(opts?: BindingListInstanceEachOptions, callback?: (item: BindingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a binding
   *
   * @param sid - The sid
   */
  get(sid: string): BindingContext;
  /**
   * Retrieve a single target page of BindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function): Promise<BindingPage>;
  /**
   * @description Lists BindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: BindingListInstanceOptions, callback?: function): Promise<BindingInstance[]>;
  /**
   * Retrieve a single page of BindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: BindingListInstancePageOptions, callback?: function): Promise<BindingPage>;
}

/**
 * Options to pass to create
 *
 * @property identity - The Identity to which this Binding belongs to.
 * @property bindingType - The type of the Binding.
 * @property address - The address specific to the channel.
 * @property tag - The list of tags associated with this Binding.
 * @property notificationProtocolVersion - The version of the protocol used to send the notification.
 * @property credentialSid - The unique identifier of the Credential resource to be used to send notifications to this Binding.
 * @property endpoint - DEPRECATED*
 */
export interface BindingListInstanceCreateOptions {
  address: string;
  bindingType: binding.binding_type;
  credentialSid?: string;
  endpoint?: string;
  identity: string;
  notificationProtocolVersion?: string;
  tag?: string|list;
}

/**
 * Options to pass to each
 *
 * @property startDate - Only list Bindings created on or after the given date.
 * @property endDate - Only list Bindings created on or before the given date.
 * @property identity - Only list Bindings that have any of the specified Identities.
 * @property tag - Only list Bindings that have all of the specified Tags.
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
export interface BindingListInstanceEachOptions {
  callback?: (item: BindingInstance, done: (err?: Error) => void) => void;
  done?: Function;
  endDate?: Date;
  identity?: string|list;
  limit?: number;
  pageSize?: number;
  startDate?: Date;
  tag?: string|list;
}

/**
 * Options to pass to list
 *
 * @property startDate - Only list Bindings created on or after the given date.
 * @property endDate - Only list Bindings created on or before the given date.
 * @property identity - Only list Bindings that have any of the specified Identities.
 * @property tag - Only list Bindings that have all of the specified Tags.
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
export interface BindingListInstanceOptions {
  endDate?: Date;
  identity?: string|list;
  limit?: number;
  pageSize?: number;
  startDate?: Date;
  tag?: string|list;
}

/**
 * Options to pass to page
 *
 * @property startDate - Only list Bindings created on or after the given date.
 * @property endDate - Only list Bindings created on or before the given date.
 * @property identity - Only list Bindings that have any of the specified Identities.
 * @property tag - Only list Bindings that have all of the specified Tags.
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
export interface BindingListInstancePageOptions {
  endDate?: Date;
  identity?: string|list;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  startDate?: Date;
  tag?: string|list;
}


declare class BindingPage extends Page {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.BindingPage
   * @augments Page
   * @description Initialize the BindingPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Notify.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of BindingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class BindingInstance {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.BindingInstance
   * @description Initialize the BindingContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property credentialSid - The unique identifier of the Credential resource to be used to send notifications to this Binding.
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property notificationProtocolVersion - The version of the protocol used to send the notification.
   * @property endpoint - DEPRECATED*
   * @property identity - The Identity to which this Binding belongs to.
   * @property bindingType - The type of the Binding.
   * @property address - The address specific to the channel.
   * @property tags - The list of tags associated with this Binding.
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, payload: object, serviceSid: sid, sid: sid);

  _proxy?: BindingContext;
  /**
   * fetch a BindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: BindingInstance) => any);
  /**
   * remove a BindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: BindingInstance) => any);
  /**
   * Produce a plain JSON object version of the BindingInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
}


declare class BindingContext {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.BindingContext
   * @description Initialize the BindingContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, serviceSid: sid, sid: sid);

  /**
   * fetch a BindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: BindingContext) => any);
  /**
   * remove a BindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: BindingContext) => any);
}

export { BindingContext, BindingInstance, BindingList, BindingListInstance, BindingPage, BindingPayload, BindingResource, BindingSolution }
