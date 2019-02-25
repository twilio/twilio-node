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
import { MessageList } from './session/message';
import { MessageListInstance } from './session/message';
import { ParticipantList } from './session/participant';
import { ParticipantListInstance } from './session/participant';
import { SerializableClass } from '../../../interfaces';

/**
 * Initialize the SessionList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function SessionList(version: V1): SessionListInstance;

/**
 * Options to pass to update
 *
 * @property attributes - An optional string metadata field you can use to store any data you wish.
 * @property createdBy - Identity of the session's creator.
 * @property dateCreated - The date that this resource was created.
 * @property dateUpdated - The date that this resource was last updated.
 * @property friendlyName - The human-readable name of this session.
 */
interface SessionInstanceUpdateOptions {
  attributes?: string;
  createdBy?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  friendlyName?: string;
}

interface SessionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SessionContext;
  /**
   * create a SessionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: SessionListInstanceCreateOptions, callback?: (error: Error | null, item: SessionInstance) => any): Promise<SessionInstance>;
  /**
   * Streams SessionInstance records from the API.
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
  each(opts?: SessionListInstanceEachOptions, callback?: (item: SessionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a session
   *
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  get(sid: string): SessionContext;
  /**
   * Retrieve a single target page of SessionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;
  /**
   * Lists SessionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SessionListInstanceOptions, callback?: (error: Error | null, items: SessionInstance[]) => any): Promise<SessionInstance[]>;
  /**
   * Retrieve a single page of SessionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SessionListInstancePageOptions, callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property attributes - An optional string metadata field you can use to store any data you wish.
 * @property createdBy - Identity of the session's creator.
 * @property dateCreated - The date that this resource was created.
 * @property dateUpdated - The date that this resource was last updated.
 * @property friendlyName - The human-readable name of this session.
 * @property messagingServiceSid - The unique id of the SMS Service this session belongs to.
 * @property twilioAddress - Twilio address the participant is contacting to.
 * @property userAddress - Address the participant is contacting from.
 */
interface SessionListInstanceCreateOptions {
  attributes?: string;
  createdBy?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  friendlyName?: string;
  messagingServiceSid: string;
  twilioAddress?: string;
  userAddress?: string;
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
interface SessionListInstanceEachOptions {
  callback?: (item: SessionInstance, done: (err?: Error) => void) => void;
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
interface SessionListInstanceOptions {
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
interface SessionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SessionPayload extends SessionResource, Page.TwilioResponsePayload {
}

interface SessionResource {
  account_sid: string;
  attributes: string;
  created_by: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  messaging_service_sid: string;
  service_sid: string;
  sid: string;
  url: string;
}

interface SessionSolution {
}


declare class SessionContext {
  /**
   * Initialize the SessionContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SessionInstance) => any): Promise<SessionInstance>;
  messages: MessageListInstance;
  participants: ParticipantListInstance;
  /**
   * remove a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SessionInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SessionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SessionInstanceUpdateOptions, callback?: (error: Error | null, items: SessionInstance) => any): Promise<SessionInstance>;
}


declare class SessionInstance extends SerializableClass {
  /**
   * Initialize the SessionContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: V1, payload: SessionPayload, sid: string);

  private _proxy: SessionContext;
  accountSid: string;
  attributes: string;
  createdBy: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SessionInstance) => any): void;
  friendlyName: string;
  links: string;
  /**
   * Access the messages
   */
  messages(): MessageListInstance;
  messagingServiceSid: string;
  /**
   * Access the participants
   */
  participants(): ParticipantListInstance;
  /**
   * remove a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SessionInstance) => any): void;
  serviceSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SessionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SessionInstanceUpdateOptions, callback?: (error: Error | null, items: SessionInstance) => any): void;
  url: string;
}


declare class SessionPage extends Page<V1, SessionPayload, SessionResource, SessionInstance> {
  /**
   * Initialize the SessionPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SessionSolution);

  /**
   * Build an instance of SessionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SessionPayload): SessionInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SessionContext, SessionInstance, SessionList, SessionListInstance, SessionListInstanceCreateOptions, SessionListInstanceEachOptions, SessionListInstanceOptions, SessionListInstancePageOptions, SessionPage, SessionPayload, SessionResource, SessionSolution }
