/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import AccSecurity = require('../AccSecurity');
import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import { SerializableClass } from '../../../interfaces';
import { VerificationCheckList } from './service/verificationCheck';
import { VerificationList } from './service/verification';

/**
 * @description Initialize the ServiceList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: AccSecurity): ServiceListInstance;

interface ServiceResource {
  account_sid: string;
  code_length: number;
  date_created: Date;
  date_updated: Date;
  links: string;
  name: string;
  sid: string;
  url: string;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceSolution {
}

interface ServiceListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ServiceContext;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ServiceListInstanceCreateOptions, callback?: function);
  /**
   * Streams ServiceInstance records from the API.
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
  each(opts?: ServiceListInstanceEachOptions, callback?: (item: ServiceInstance, done: (err?: Error) => void) => void);
  /**
   * Constructs a service
   *
   * @param sid - Verification Service Instance SID.
   */
  get(sid: string);
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ServiceListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ServiceListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property name - Friendly name of the service
 * @property codeLength - Length of verification code. Valid values are 4-10
 */
export interface ServiceInstanceUpdateOptions {
  codeLength?: number;
  name?: string;
}

/**
 * Options to pass to update
 *
 * @property name - Friendly name of the service
 * @property codeLength - Length of verification code. Valid values are 4-10
 */
export interface ServiceContextUpdateOptions {
  codeLength?: number;
  name?: string;
}

/**
 * Options to pass to create
 *
 * @property name - Friendly name of the service
 * @property codeLength - Length of verification code. Valid values are 4-10
 */
export interface ServiceListInstanceCreateOptions {
  codeLength?: number;
  name: string;
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
export interface ServiceListInstanceEachOptions {
  callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
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
export interface ServiceListInstanceOptions {
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
export interface ServiceListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class ServicePage extends Page {
  /**
   * @constructor Twilio.Preview.AccSecurity.ServicePage
   * @augments Page
   * @description Initialize the ServicePage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.AccSecurity, response: Response<string>, solution: object);

  /**
   * Build an instance of ServiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ServiceInstance {
  /**
   * @constructor Twilio.Preview.AccSecurity.ServiceInstance
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Service.
   * @property accountSid - Account Sid.
   * @property name - Friendly name of the service
   * @property codeLength - Length of verification code. Valid values are 4-10
   * @property dateCreated - The date this Service was created
   * @property dateUpdated - The date this Service was updated
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - Verification Service Instance SID.
   */
  constructor(version: Twilio.Preview.AccSecurity, payload: object, sid: sid);

  _proxy?: ServiceContext;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the ServiceInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: function);
  /**
   * Access the verificationChecks
   */
  verificationChecks();
  /**
   * Access the verifications
   */
  verifications();
}


declare class ServiceContext {
  /**
   * @constructor Twilio.Preview.AccSecurity.ServiceContext
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property verifications - verifications resource
   * @property verificationChecks - verificationChecks resource
   *
   * @param version - Version of the resource
   * @param sid - Verification Service Instance SID.
   */
  constructor(version: Twilio.Preview.AccSecurity, sid: sid);

  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceContextUpdateOptions, callback?: function);
  verificationChecks?: Twilio.Preview.AccSecurity.ServiceContext.VerificationCheckList;
  verifications?: Twilio.Preview.AccSecurity.ServiceContext.VerificationList;
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListInstance, ServicePage, ServicePayload, ServiceResource, ServiceSolution }
