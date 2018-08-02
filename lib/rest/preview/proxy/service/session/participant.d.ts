/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Proxy = require('../../../Proxy');
import Response = require('../../../../../http/response');
import { MessageInteractionList } from './participant/messageInteraction';
import { SerializableClass } from '../../../../../interfaces';

type ParticipantParticipantType = 'sms'|'voice'|'phone';

/**
 * @description Initialize the ParticipantList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 * @param sessionSid - Session Sid.
 */
declare function ParticipantList(version: Proxy, serviceSid: string, sessionSid: string): ParticipantListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of this resource
 * @property identifier - The Participant's contact identifier, normally a phone number.
 * @property participantType - The Type of this Participant
 */
interface ParticipantInstanceUpdateOptions {
  friendlyName?: string;
  identifier?: string;
  participantType?: ParticipantParticipantType;
}

interface ParticipantListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ParticipantContext;
  /**
   * create a ParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ParticipantListInstanceCreateOptions, callback?: (error: Error | null, items: ParticipantListInstance) => any): Promise<ParticipantInstance>;
  /**
   * Streams ParticipantInstance records from the API.
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
  each(opts?: ParticipantListInstanceEachOptions, callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a participant
   *
   * @param sid - A string that uniquely identifies this Participant.
   */
  get(sid: string): ParticipantContext;
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ParticipantListInstanceOptions, callback?: (error: Error | null, items: ParticipantInstance[]) => any): Promise<ParticipantInstance[]>;
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ParticipantListInstancePageOptions, callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - A human readable description of this resource
 * @property identifier - The Participant's contact identifier, normally a phone number.
 * @property participantType - The Type of this Participant
 */
interface ParticipantListInstanceCreateOptions {
  friendlyName?: string;
  identifier: string;
  participantType?: ParticipantParticipantType;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property identifier - The Participant's contact identifier, normally a phone number.
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
 * @property participantType - The Type of this Participant
 */
interface ParticipantListInstanceEachOptions {
  callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void;
  done?: Function;
  identifier?: string;
  limit?: number;
  pageSize?: number;
  participantType?: ParticipantParticipantType;
}

/**
 * Options to pass to list
 *
 * @property identifier - The Participant's contact identifier, normally a phone number.
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
 * @property participantType - The Type of this Participant
 */
interface ParticipantListInstanceOptions {
  identifier?: string;
  limit?: number;
  pageSize?: number;
  participantType?: ParticipantParticipantType;
}

/**
 * Options to pass to page
 *
 * @property identifier - The Participant's contact identifier, normally a phone number.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property participantType - The Type of this Participant
 */
interface ParticipantListInstancePageOptions {
  identifier?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  participantType?: ParticipantParticipantType;
}

interface ParticipantPayload extends ParticipantResource, Page.TwilioResponsePayload {
}

interface ParticipantResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  identifier: string;
  links: string;
  participant_type: ParticipantParticipantType;
  proxy_identifier: string;
  service_sid: string;
  session_sid: string;
  sid: string;
  url: string;
}

interface ParticipantSolution {
  serviceSid?: string;
  sessionSid?: string;
}


declare class ParticipantPage extends Page<Proxy, ParticipantPayload, ParticipantResource, ParticipantInstance> {
  /**
   * Initialize the ParticipantPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Proxy, response: Response<string>, solution: ParticipantSolution);

  /**
   * Build an instance of ParticipantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ParticipantPayload): ParticipantInstance;
}


declare class ParticipantInstance extends SerializableClass {
  /**
   * Initialize the ParticipantContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Participant.
   * @property sessionSid - Session Sid.
   * @property serviceSid - Service Sid.
   * @property accountSid - Account Sid.
   * @property friendlyName - A human readable description of this resource
   * @property participantType - The Type of this Participant
   * @property identifier - The Participant's contact identifier, normally a phone number.
   * @property proxyIdentifier - What this Participant communicates with, normally a phone number.
   * @property dateCreated - The date this Participant was created
   * @property dateUpdated - The date this Participant was updated
   * @property url - The URL of this resource.
   * @property links - Nested resource URLs.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param sid - A string that uniquely identifies this Participant.
   */
  constructor(version: Proxy, payload: ParticipantPayload, serviceSid: string, sessionSid: string, sid: string);

  private _proxy: ParticipantContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ParticipantInstance) => any): void;
  friendlyName: string;
  identifier: string;
  links: string;
  /**
   * Access the messageInteractions
   */
  messageInteractions();
  participantType: ParticipantParticipantType;
  proxyIdentifier: string;
  /**
   * remove a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ParticipantInstance) => any): void;
  serviceSid: string;
  sessionSid: string;
  sid: string;
  /**
   * Produce a plain JSON object version of the ParticipantInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a ParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ParticipantInstanceUpdateOptions, callback?: (error: Error | null, items: ParticipantInstance) => any): void;
  url: string;
}


declare class ParticipantContext {
  /**
   * Initialize the ParticipantContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property messageInteractions - messageInteractions resource
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param sid - A string that uniquely identifies this Participant.
   */
  constructor(version: Proxy, serviceSid: string, sessionSid: string, sid: string);

  /**
   * fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ParticipantInstance) => any): void;
  messageInteractions?: MessageInteractionList;
  /**
   * remove a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ParticipantInstance) => any): void;
  /**
   * update a ParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ParticipantInstanceUpdateOptions, callback?: (error: Error | null, items: ParticipantInstance) => any): void;
}

export { ParticipantContext, ParticipantInstance, ParticipantList, ParticipantListInstance, ParticipantListInstanceCreateOptions, ParticipantListInstanceEachOptions, ParticipantListInstanceOptions, ParticipantListInstancePageOptions, ParticipantPage, ParticipantPayload, ParticipantResource, ParticipantSolution }
