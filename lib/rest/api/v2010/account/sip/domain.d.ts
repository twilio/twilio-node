/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { AuthTypesList } from './domain/authTypes';
import { CredentialListMappingList } from './domain/credentialListMapping';
import { IpAccessControlListMappingList } from './domain/ipAccessControlListMapping';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the DomainList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function DomainList(version: V2010, accountSid: string): DomainListInstance;

/**
 * Options to pass to update
 *
 * @property authType - The auth_type
 * @property friendlyName - A user-specified, human-readable name for the trigger.
 * @property sipRegistration - The sip_registration
 * @property voiceFallbackMethod - The voice_fallback_method
 * @property voiceFallbackUrl - The voice_fallback_url
 * @property voiceMethod - HTTP method to use with voice_url
 * @property voiceStatusCallbackMethod - The voice_status_callback_method
 * @property voiceStatusCallbackUrl - The voice_status_callback_url
 * @property voiceUrl - The voice_url
 */
interface DomainInstanceUpdateOptions {
  authType?: string;
  friendlyName?: string;
  sipRegistration?: boolean;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceStatusCallbackMethod?: string;
  voiceStatusCallbackUrl?: string;
  voiceUrl?: string;
}

interface DomainListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): DomainContext;
  /**
   * create a DomainInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: DomainListInstanceCreateOptions, callback?: (error: Error | null, items: DomainListInstance) => any): Promise<DomainInstance>;
  /**
   * Streams DomainInstance records from the API.
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
  each(opts?: DomainListInstanceEachOptions, callback?: (item: DomainInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a domain
   *
   * @param sid - Fetch by unique Domain Sid
   */
  get(sid: string): DomainContext;
  /**
   * Retrieve a single target page of DomainInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: DomainPage) => any): Promise<DomainPage>;
  /**
   * Lists DomainInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: DomainListInstanceOptions, callback?: (error: Error | null, items: DomainInstance[]) => any): Promise<DomainInstance[]>;
  /**
   * Retrieve a single page of DomainInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: DomainListInstancePageOptions, callback?: (error: Error | null, items: DomainPage) => any): Promise<DomainPage>;
}

/**
 * Options to pass to create
 *
 * @property authType - The types of authentication mapped to the domain
 * @property domainName - The unique address on Twilio to route SIP traffic
 * @property friendlyName - A user-specified, human-readable name for the trigger.
 * @property sipRegistration - The sip_registration
 * @property voiceFallbackMethod - HTTP method used with voice_fallback_url
 * @property voiceFallbackUrl - URL Twilio will request if an error occurs in executing TwiML
 * @property voiceMethod - HTTP method to use with voice_url
 * @property voiceStatusCallbackMethod - The HTTP method Twilio will use to make requests to the StatusCallback URL.
 * @property voiceStatusCallbackUrl - URL that Twilio will request with status updates
 * @property voiceUrl - URL Twilio will request when receiving a call
 */
interface DomainListInstanceCreateOptions {
  authType?: string;
  domainName: string;
  friendlyName?: string;
  sipRegistration?: boolean;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceStatusCallbackMethod?: string;
  voiceStatusCallbackUrl?: string;
  voiceUrl?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
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
interface DomainListInstanceEachOptions {
  callback?: (item: DomainInstance, done: (err?: Error) => void) => void;
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
interface DomainListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface DomainListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface DomainPayload extends DomainResource, Page.TwilioResponsePayload {
}

interface DomainResource {
  account_sid: string;
  api_version: string;
  auth_type: string;
  date_created: Date;
  date_updated: Date;
  domain_name: string;
  friendly_name: string;
  sid: string;
  sip_registration: boolean;
  subresource_uris: string;
  uri: string;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_status_callback_method: string;
  voice_status_callback_url: string;
  voice_url: string;
}

interface DomainSolution {
  accountSid?: string;
}


declare class DomainPage extends Page<V2010, DomainPayload, DomainResource, DomainInstance> {
  /**
   * Initialize the DomainPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: DomainSolution);

  /**
   * Build an instance of DomainInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DomainPayload): DomainInstance;
}


declare class DomainInstance extends SerializableClass {
  /**
   * Initialize the DomainContext
   *
   * @property accountSid - The unique id of the account that sent the message
   * @property apiVersion - The Twilio API version used to process the message
   * @property authType - The types of authentication mapped to the domain
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property domainName - The unique address on Twilio to route SIP traffic
   * @property friendlyName - A user-specified, human-readable name for the trigger.
   * @property sid - A string that uniquely identifies the SIP Domain
   * @property uri - The URI for this resource
   * @property voiceFallbackMethod - HTTP method used with voice_fallback_url
   * @property voiceFallbackUrl - URL Twilio will request if an error occurs in executing TwiML
   * @property voiceMethod - HTTP method to use with voice_url
   * @property voiceStatusCallbackMethod - The HTTP method Twilio will use to make requests to the StatusCallback URL.
   * @property voiceStatusCallbackUrl - URL that Twilio will request with status updates
   * @property voiceUrl - URL Twilio will request when receiving a call
   * @property subresourceUris - The subresource_uris
   * @property sipRegistration - If SIP registration is allowed
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   * @param sid - Fetch by unique Domain Sid
   */
  constructor(version: V2010, payload: DomainPayload, accountSid: string, sid: string);

  private _proxy: DomainContext;
  accountSid: string;
  apiVersion: string;
  /**
   * Access the auth
   */
  auth();
  authType: string;
  /**
   * Access the credentialListMappings
   */
  credentialListMappings();
  dateCreated: Date;
  dateUpdated: Date;
  domainName: string;
  /**
   * fetch a DomainInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DomainInstance) => any): void;
  friendlyName: string;
  /**
   * Access the ipAccessControlListMappings
   */
  ipAccessControlListMappings();
  /**
   * remove a DomainInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: DomainInstance) => any): void;
  sid: string;
  sipRegistration: boolean;
  subresourceUris: string;
  /**
   * Produce a plain JSON object version of the DomainInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a DomainInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: DomainInstanceUpdateOptions, callback?: (error: Error | null, items: DomainInstance) => any): void;
  uri: string;
  voiceFallbackMethod: string;
  voiceFallbackUrl: string;
  voiceMethod: string;
  voiceStatusCallbackMethod: string;
  voiceStatusCallbackUrl: string;
  voiceUrl: string;
}


declare class DomainContext {
  /**
   * Initialize the DomainContext
   *
   * @property ipAccessControlListMappings - ipAccessControlListMappings resource
   * @property credentialListMappings - credentialListMappings resource
   * @property auth - auth resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique Domain Sid
   */
  constructor(version: V2010, accountSid: string, sid: string);

  auth?: AuthTypesList;
  credentialListMappings?: CredentialListMappingList;
  /**
   * fetch a DomainInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DomainInstance) => any): void;
  ipAccessControlListMappings?: IpAccessControlListMappingList;
  /**
   * remove a DomainInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: DomainInstance) => any): void;
  /**
   * update a DomainInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: DomainInstanceUpdateOptions, callback?: (error: Error | null, items: DomainInstance) => any): void;
}

export { DomainContext, DomainInstance, DomainList, DomainListInstance, DomainListInstanceCreateOptions, DomainListInstanceEachOptions, DomainListInstanceOptions, DomainListInstancePageOptions, DomainPage, DomainPayload, DomainResource, DomainSolution }
