/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V1 = require('../../../../V1');
import serialize = require('../../../../../../base/serialize');
import { SerializableClass } from '../../../../../../interfaces';

type MessageInteractionResourceStatus = 'accepted'|'answered'|'busy'|'canceled'|'completed'|'deleted'|'delivered'|'delivery-unknown'|'failed'|'in-progress'|'initiated'|'no-answer'|'queued'|'received'|'receiving'|'ringing'|'scheduled'|'sending'|'sent'|'undelivered'|'unknown';

type MessageInteractionType = 'message'|'voice'|'unknown';

/**
 * Initialize the MessageInteractionList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 * @param sessionSid - Session Sid.
 * @param participantSid - Participant Sid.
 */
declare function MessageInteractionList(version: V1, serviceSid: string, sessionSid: string, participantSid: string): MessageInteractionListInstance;

interface MessageInteractionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): MessageInteractionContext;
  /**
   * create a MessageInteractionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: MessageInteractionListInstanceCreateOptions, callback?: (error: Error | null, item: MessageInteractionInstance) => any): Promise<MessageInteractionInstance>;
  /**
   * Streams MessageInteractionInstance records from the API.
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
  each(opts?: MessageInteractionListInstanceEachOptions, callback?: (item: MessageInteractionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a message_interaction
   *
   * @param sid - The sid
   */
  get(sid: string): MessageInteractionContext;
  /**
   * Retrieve a single target page of MessageInteractionInstance records from the
   * API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: MessageInteractionPage) => any): Promise<MessageInteractionPage>;
  /**
   * Lists MessageInteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: MessageInteractionListInstanceOptions, callback?: (error: Error | null, items: MessageInteractionInstance[]) => any): Promise<MessageInteractionInstance[]>;
  /**
   * Retrieve a single page of MessageInteractionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: MessageInteractionListInstancePageOptions, callback?: (error: Error | null, items: MessageInteractionPage) => any): Promise<MessageInteractionPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property body - Message body
 * @property mediaUrl - Not supported in beta
 */
interface MessageInteractionListInstanceCreateOptions {
  body?: string;
  mediaUrl?: string[];
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
interface MessageInteractionListInstanceEachOptions {
  callback?: (item: MessageInteractionInstance, done: (err?: Error) => void) => void;
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
interface MessageInteractionListInstanceOptions {
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
interface MessageInteractionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface MessageInteractionPayload extends MessageInteractionResource, Page.TwilioResponsePayload {
}

interface MessageInteractionResource {
  account_sid: string;
  data: string;
  date_created: Date;
  date_updated: Date;
  inbound_participant_sid: string;
  inbound_resource_sid: string;
  inbound_resource_status: MessageInteractionResourceStatus;
  inbound_resource_type: string;
  inbound_resource_url: string;
  outbound_participant_sid: string;
  outbound_resource_sid: string;
  outbound_resource_status: MessageInteractionResourceStatus;
  outbound_resource_type: string;
  outbound_resource_url: string;
  participant_sid: string;
  service_sid: string;
  session_sid: string;
  sid: string;
  type: MessageInteractionType;
  url: string;
}

interface MessageInteractionSolution {
  participantSid?: string;
  serviceSid?: string;
  sessionSid?: string;
}


declare class MessageInteractionContext {
  /**
   * Initialize the MessageInteractionContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sessionSid - The session_sid
   * @param participantSid - The participant_sid
   * @param sid - The sid
   */
  constructor(version: V1, serviceSid: string, sessionSid: string, participantSid: string, sid: string);

  /**
   * fetch a MessageInteractionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MessageInteractionInstance) => any): Promise<MessageInteractionInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class MessageInteractionInstance extends SerializableClass {
  /**
   * Initialize the MessageInteractionContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param participantSid - Participant Sid.
   * @param sid - The sid
   */
  constructor(version: V1, payload: MessageInteractionPayload, serviceSid: string, sessionSid: string, participantSid: string, sid: string);

  private _proxy: MessageInteractionContext;
  accountSid: string;
  data: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a MessageInteractionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MessageInteractionInstance) => any): void;
  inboundParticipantSid: string;
  inboundResourceSid: string;
  inboundResourceStatus: MessageInteractionResourceStatus;
  inboundResourceType: string;
  inboundResourceUrl: string;
  outboundParticipantSid: string;
  outboundResourceSid: string;
  outboundResourceStatus: MessageInteractionResourceStatus;
  outboundResourceType: string;
  outboundResourceUrl: string;
  participantSid: string;
  serviceSid: string;
  sessionSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  type: MessageInteractionType;
  url: string;
}


declare class MessageInteractionPage extends Page<V1, MessageInteractionPayload, MessageInteractionResource, MessageInteractionInstance> {
  /**
   * Initialize the MessageInteractionPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: MessageInteractionSolution);

  /**
   * Build an instance of MessageInteractionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MessageInteractionPayload): MessageInteractionInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { MessageInteractionContext, MessageInteractionInstance, MessageInteractionList, MessageInteractionListInstance, MessageInteractionListInstanceCreateOptions, MessageInteractionListInstanceEachOptions, MessageInteractionListInstanceOptions, MessageInteractionListInstancePageOptions, MessageInteractionPage, MessageInteractionPayload, MessageInteractionResource, MessageInteractionSolution }
