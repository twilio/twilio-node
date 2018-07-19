/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import DeployedDevices = require('../../DeployedDevices');
import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the CertificateList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param fleetSid - The unique identifier of the Fleet.
 */
declare function CertificateList(version: DeployedDevices, fleetSid: string): CertificateListInstance;

interface CertificateResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  device_sid: string;
  fleet_sid: string;
  friendly_name: string;
  sid: string;
  thumbprint: string;
  url: string;
}

interface CertificatePayload extends CertificateResource, Page.TwilioResponsePayload {
}

interface CertificateSolution {
  fleetSid?: string;
}

interface CertificateListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CertificateContext;
  /**
   * create a CertificateInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CertificateListInstanceCreateOptions, callback?: function);
  /**
   * Streams CertificateInstance records from the API.
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
  each(opts?: CertificateListInstanceEachOptions, callback?: (item: CertificateInstance, done: (err?: Error) => void) => void);
  /**
   * Constructs a certificate
   *
   * @param sid - A string that uniquely identifies the Certificate.
   */
  get(sid: string);
  /**
   * Retrieve a single target page of CertificateInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists CertificateInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CertificateListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of CertificateInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CertificateListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property friendlyName - The human readable description for this Certificate.
 * @property deviceSid - The unique identifier of a Device to be authenticated.
 */
export interface CertificateInstanceUpdateOptions {
  deviceSid?: string;
  friendlyName?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - The human readable description for this Certificate.
 * @property deviceSid - The unique identifier of a Device to be authenticated.
 */
export interface CertificateContextUpdateOptions {
  deviceSid?: string;
  friendlyName?: string;
}

/**
 * Options to pass to create
 *
 * @property certificateData - The public certificate data.
 * @property friendlyName - The human readable description for this Certificate.
 * @property deviceSid - The unique identifier of a Device to be authenticated.
 */
export interface CertificateListInstanceCreateOptions {
  certificateData: string;
  deviceSid?: string;
  friendlyName?: string;
}

/**
 * Options to pass to each
 *
 * @property deviceSid - Find all Certificates authenticating specified Device.
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
export interface CertificateListInstanceEachOptions {
  callback?: (item: CertificateInstance, done: (err?: Error) => void) => void;
  deviceSid?: string;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property deviceSid - Find all Certificates authenticating specified Device.
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
export interface CertificateListInstanceOptions {
  deviceSid?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property deviceSid - Find all Certificates authenticating specified Device.
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
export interface CertificateListInstancePageOptions {
  deviceSid?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class CertificatePage extends Page {
  /**
   * @constructor Twilio.Preview.DeployedDevices.FleetContext.CertificatePage
   * @augments Page
   * @description Initialize the CertificatePage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.DeployedDevices, response: Response<string>, solution: object);

  /**
   * Build an instance of CertificateInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class CertificateInstance {
  /**
   * @constructor Twilio.Preview.DeployedDevices.FleetContext.CertificateInstance
   * @description Initialize the CertificateContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Certificate.
   * @property url - URL of this Certificate.
   * @property friendlyName - A human readable description for this Certificate.
   * @property fleetSid - The unique identifier of the Fleet.
   * @property accountSid - The unique SID that identifies this Account.
   * @property deviceSid - The unique identifier of a mapped Device.
   * @property thumbprint - A Certificate unique payload hash.
   * @property dateCreated - The date this Certificate was created.
   * @property dateUpdated - The date this Certificate was updated.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param fleetSid - The unique identifier of the Fleet.
   * @param sid - A string that uniquely identifies the Certificate.
   */
  constructor(version: Twilio.Preview.DeployedDevices, payload: object, fleetSid: sid_like, sid: sid);

  _proxy?: CertificateContext;
  /**
   * fetch a CertificateInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CertificateInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the CertificateInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
  /**
   * update a CertificateInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: CertificateInstanceUpdateOptions, callback?: function);
}


declare class CertificateContext {
  /**
   * @constructor Twilio.Preview.DeployedDevices.FleetContext.CertificateContext
   * @description Initialize the CertificateContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param fleetSid - The fleet_sid
   * @param sid - A string that uniquely identifies the Certificate.
   */
  constructor(version: Twilio.Preview.DeployedDevices, fleetSid: sid_like, sid: sid);

  /**
   * fetch a CertificateInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CertificateInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a CertificateInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: CertificateContextUpdateOptions, callback?: function);
}

export { CertificateContext, CertificateInstance, CertificateList, CertificateListInstance, CertificatePage, CertificatePayload, CertificateResource, CertificateSolution }
