/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Proxy = require('../../../../Proxy');
import Response = require('../../../../../../http/response');
import serialize = require('../../../../../../base/serialize');
import { SerializableClass } from '../../../../../../interfaces';

/**
 * @description Initialize the MessageInteractionList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 * @param sessionSid - Session Sid.
 * @param participantSid - The participant_sid
 */
declare function MessageInteractionList(version: Proxy, serviceSid: string, sessionSid: string, participantSid: string): MessageInteractionListInstance;

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
  status: MessageInteractionStatus;
  url: string;
}

interface MessageInteractionPayload extends MessageInteractionResource, Page.TwilioResponsePayload {
}

interface MessageInteractionSolution {
  participantSid?: string;
  serviceSid?: string;
  sessionSid?: string;
}

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
  create(opts?: MessageInteractionListInstanceCreateOptions, callback?: (error: Error | null, items: MessageInteractionListInstance) => any): Promise<MessageInteractionInstance>;
  /**
   * Streams MessageInteractionInstance records from the API.
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
  each(opts?: MessageInteractionListInstanceEachOptions, callback?: (item: MessageInteractionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a message_interaction
   *
   * @param sid - A string that uniquely identifies this Interaction.
   */
  get(sid: string): MessageInteractionContext;
  /**
   * Retrieve a single target page of MessageInteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: MessageInteractionPage) => any): Promise<MessageInteractionPage>;
  /**
   * Lists MessageInteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: MessageInteractionListInstanceOptions, callback?: (error: Error | null, items: MessageInteractionInstance[]) => any): Promise<MessageInteractionInstance[]>;
  /**
   * Retrieve a single page of MessageInteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: MessageInteractionListInstancePageOptions, callback?: (error: Error | null, items: MessageInteractionPage) => any): Promise<MessageInteractionPage>;
}


declare class MessageInteractionPage extends Page<Proxy, MessageInteractionPayload, MessageInteractionResource, MessageInteractionInstance> {
  /**
   * Initialize the MessageInteractionPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Proxy, response: Response<string>, solution: MessageInteractionSolution);

  /**
   * Build an instance of MessageInteractionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MessageInteractionPayload): MessageInteractionInstance;
}


declare class MessageInteractionInstance extends SerializableClass {
  /**
   * Initialize the MessageInteractionContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Interaction.
   * @property sessionSid - Session Sid.
   * @property serviceSid - Service Sid.
   * @property accountSid - Account Sid.
   * @property data - What happened in this Interaction.
   * @property status - The Status of this Interaction
   * @property participantSid - The participant_sid
   * @property inboundParticipantSid - The inbound_participant_sid
   * @property inboundResourceSid - The SID of the inbound resource.
   * @property inboundResourceStatus - The Inbound Resource Status of this Interaction
   * @property inboundResourceType - The Twilio object type of the inbound resource.
   * @property inboundResourceUrl - The URL of the inbound resource.
   * @property outboundParticipantSid - The outbound_participant_sid
   * @property outboundResourceSid - The SID of the outbound resource.
   * @property outboundResourceStatus - The Outbound Resource Status of this Interaction
   * @property outboundResourceType - The Twilio object type of the outbound resource.
   * @property outboundResourceUrl - The URL of the outbound resource.
   * @property dateCreated - The date this Interaction was created
   * @property dateUpdated - The date this Interaction was updated
   * @property url - The URL of this Interaction.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param participantSid - The participant_sid
   * @param sid - A string that uniquely identifies this Interaction.
   */
  constructor(version: Proxy, payload: MessageInteractionPayload, serviceSid: string, sessionSid: string, participantSid: string, sid: string);

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
  inboundResourceStatus: message_interaction.resource_status;
  inboundResourceType: string;
  inboundResourceUrl: string;
  outboundParticipantSid: string;
  outboundResourceSid: string;
  outboundResourceStatus: message_interaction.resource_status;
  outboundResourceType: string;
  outboundResourceUrl: string;
  participantSid: string;
  serviceSid: string;
  sessionSid: string;
  sid: string;
  status: message_interaction.status;
  /**
   * Produce a plain JSON object version of the MessageInteractionInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
}


declare class MessageInteractionContext {
  /**
   * Initialize the MessageInteractionContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param participantSid - Participant Sid.
   * @param sid - A string that uniquely identifies this Interaction.
   */
  constructor(version: Proxy, serviceSid: string, sessionSid: string, participantSid: string, sid: string);

  /**
   * fetch a MessageInteractionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MessageInteractionInstance) => any): void;
}

export { MessageInteractionContext, MessageInteractionInstance, MessageInteractionList, MessageInteractionListInstance, MessageInteractionListInstanceCreateOptions, MessageInteractionListInstanceEachOptions, MessageInteractionListInstanceOptions, MessageInteractionListInstancePageOptions, MessageInteractionPage, MessageInteractionPayload, MessageInteractionResource, MessageInteractionSolution }
