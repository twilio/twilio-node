/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

declare function InteractionList(version: V1, serviceSid: string, sessionSid: string): InteractionListInstance

type InteractionType = 'message'|'voice'|'unknown';

type InteractionResourceStatus = 'accepted'|'answered'|'busy'|'canceled'|'completed'|'deleted'|'delivered'|'delivery-unknown'|'failed'|'in-progress'|'initiated'|'no-answer'|'queued'|'received'|'receiving'|'ringing'|'scheduled'|'sending'|'sent'|'undelivered'|'unknown';

interface InteractionResource {
  /**
   * The unique SID identifier of the Account.
   */
  account_sid: string;
  /**
   * JSON string that includes the message body of message interactions (e.g. `{"body": "hello"}`) or the call duration (when available) of a call (e.g. `{"duration": "5"}`).
   */
  data: string;
  /**
   * The date that this Interaction was created, given in ISO 8601 format.
   */
  date_created: Date;
  /**
   * The date that this Interaction was last updated, given in ISO 8601 format.
   */
  date_updated: Date;
  /**
   * The unique SID identifier of the Inbound [Participant](https://www.twilio.com/docs/proxy/api/participants).
   */
  inbound_participant_sid: string;
  /**
   * The unique SID identifier of the Inbound Resource (the [Call](https://www.twilio.com/docs/voice/api/call) or [Message](https://www.twilio.com/docs/sms/api/message).
   */
  inbound_resource_sid: string;
  /**
   * The Status of the Inbound Resource associated with this Interaction. One of `accepted`, `answered`, `busy`, `canceled`, `completed`, `deleted`, `delivered`, `delivery-unknown`, `failed`, `in-progress`, `initiated`, `no-answer`, `queued`, `received`, `receiving`, `ringing`, `scheduled`, `sending`, `sent`, `undelivered` or `unknown`.
   */
  inbound_resource_status: InteractionResourceStatus;
  /**
   * The type of the Inbound Resource, [Call](https://www.twilio.com/docs/voice/api/call) or [Message](https://www.twilio.com/docs/sms/api/message).
   */
  inbound_resource_type: string;
  /**
   * The URL of the Twilio inbound resource.
   */
  inbound_resource_url: string;
  /**
   * The unique SID identifier of the Outbound [Participant](https://www.twilio.com/docs/proxy/api/participants).
   */
  outbound_participant_sid: string;
  /**
   * The unique SID identifier of the Outbound Resource (the [Call](https://www.twilio.com/docs/voice/api/call) or [Message](https://www.twilio.com/docs/sms/api/message).
   */
  outbound_resource_sid: string;
  /**
   * The Status of the Outbound Resource associated with this Interaction. One of `accepted`, `answered`, `busy`, `canceled`, `completed`, `deleted`, `delivered`, `delivery-unknown`, `failed`, `in-progress`, `initiated`, `no-answer`, `queued`, `received`, `receiving`, `ringing`, `scheduled`, `sending`, `sent`, `undelivered` or `unknown`.
   */
  outbound_resource_status: InteractionResourceStatus;
  /**
   * The type of the Outbound Resource, [Call](https://www.twilio.com/docs/voice/api/call) or [Message](https://www.twilio.com/docs/sms/api/message).
   */
  outbound_resource_type: string;
  /**
   * The URL of the Twilio outbound resource.
   */
  outbound_resource_url: string;
  /**
   * The unique SID identifier of the parent [Service](https://www.twilio.com/docs/proxy/api/service).
   */
  service_sid: string;
  /**
   * The unique SID identifier of the parent [Session](https://www.twilio.com/docs/proxy/api/session).
   */
  session_sid: string;
  /**
   * A 34 character string that uniquely identifies this Interaction.
   */
  sid: string;
  /**
   * The Type of this Interaction. One of `message`, `voice` or `unknown`.
   */
  type: InteractionType;
  /**
   * The URL of this resource.
   */
  url: string;
}

interface InteractionPayload extends InteractionResource, Page.TwilioResponsePayload {
}

interface InteractionSolution {
  serviceSid: string;
  sessionSid: string;
}

interface InteractionListEachOptions extends ListEachOptions<InteractionInstance> {
  /**
   * The inbound_participant_status
   */
  inboundParticipantStatus?: InteractionResourceStatus;
  /**
   * The outbound_participant_status
   */
  outboundParticipantStatus?: InteractionResourceStatus;
}

interface InteractionListOptions extends ListOptions<InteractionInstance> {
  /**
   * The inbound_participant_status
   */
  inboundParticipantStatus?: InteractionResourceStatus;
  /**
   * The outbound_participant_status
   */
  outboundParticipantStatus?: InteractionResourceStatus;
}

interface InteractionListPageOptions extends PageOptions<InteractionPage> {
  /**
   * The inbound_participant_status
   */
  inboundParticipantStatus?: InteractionResourceStatus;
  /**
   * The outbound_participant_status
   */
  outboundParticipantStatus?: InteractionResourceStatus;
}

interface InteractionListInstance {
  /**
   * Gets context of a single Interaction resource
   *
   * @param sid - A string that uniquely identifies this Interaction.
   */
  (sid: string): InteractionContext;
  /**
   * Streams InteractionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  each(opts?: InteractionListEachOptions): void;
  /**
   * Streams InteractionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  each(callback: (item: InteractionInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Interaction resource
   *
   * @param sid - A string that uniquely identifies this Interaction.
   */
  get(sid: string): InteractionContext;
  /**
   * Retrieve a single target page of InteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<InteractionPage>;
  /**
   * Retrieve a single target page of InteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: InteractionPage) => any): void;
  /**
   * Lists InteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: InteractionListOptions): Promise<InteractionInstance[]>;
  /**
   * Lists InteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: InteractionListOptions, callback: (error: Error | null, items: InteractionInstance[]) => any): void;
  /**
   * Lists InteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: InteractionInstance[]) => any): void;
  /**
   * Retrieve a single page of InteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: InteractionListPageOptions): Promise<InteractionPage>;
  /**
   * Retrieve a single page of InteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: InteractionListPageOptions, callback: (error: Error | null, items: InteractionPage) => any): void;
  /**
   * Retrieve a single page of InteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: InteractionPage) => any): void;
}

declare class InteractionPage extends Page<V1, InteractionPayload, InteractionResource, InteractionInstance> {
  constructor(version: V1, response: Response<string>, solution: InteractionSolution);

  /**
   * Build an instance of InteractionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: InteractionPayload): InteractionInstance;
}

declare class InteractionInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param sid - A string that uniquely identifies this Interaction.
   */
  constructor(version: V1, payload: InteractionPayload, serviceSid: string, sessionSid: string, sid: string);

  private _proxy: InteractionContext;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * JSON string that includes the message body of message interactions (e.g. `{"body": "hello"}`) or the call duration (when available) of a call (e.g. `{"duration": "5"}`).
   */
  data: string;
  /**
   * The date that this Interaction was created, given in ISO 8601 format.
   */
  dateCreated: Date;
  /**
   * The date that this Interaction was last updated, given in ISO 8601 format.
   */
  dateUpdated: Date;
  /**
   * fetch a InteractionInstance
   *
   * @returns Promise that resolves to processed InteractionInstance
   */
  fetch(): Promise<InteractionInstance>;
  /**
   * fetch a InteractionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: InteractionInstance) => any): void;
  /**
   * The unique SID identifier of the Inbound [Participant](https://www.twilio.com/docs/proxy/api/participants).
   */
  inboundParticipantSid: string;
  /**
   * The unique SID identifier of the Inbound Resource (the [Call](https://www.twilio.com/docs/voice/api/call) or [Message](https://www.twilio.com/docs/sms/api/message).
   */
  inboundResourceSid: string;
  /**
   * The Status of the Inbound Resource associated with this Interaction. One of `accepted`, `answered`, `busy`, `canceled`, `completed`, `deleted`, `delivered`, `delivery-unknown`, `failed`, `in-progress`, `initiated`, `no-answer`, `queued`, `received`, `receiving`, `ringing`, `scheduled`, `sending`, `sent`, `undelivered` or `unknown`.
   */
  inboundResourceStatus: InteractionResourceStatus;
  /**
   * The type of the Inbound Resource, [Call](https://www.twilio.com/docs/voice/api/call) or [Message](https://www.twilio.com/docs/sms/api/message).
   */
  inboundResourceType: string;
  /**
   * The URL of the Twilio inbound resource.
   */
  inboundResourceUrl: string;
  /**
   * The unique SID identifier of the Outbound [Participant](https://www.twilio.com/docs/proxy/api/participants).
   */
  outboundParticipantSid: string;
  /**
   * The unique SID identifier of the Outbound Resource (the [Call](https://www.twilio.com/docs/voice/api/call) or [Message](https://www.twilio.com/docs/sms/api/message).
   */
  outboundResourceSid: string;
  /**
   * The Status of the Outbound Resource associated with this Interaction. One of `accepted`, `answered`, `busy`, `canceled`, `completed`, `deleted`, `delivered`, `delivery-unknown`, `failed`, `in-progress`, `initiated`, `no-answer`, `queued`, `received`, `receiving`, `ringing`, `scheduled`, `sending`, `sent`, `undelivered` or `unknown`.
   */
  outboundResourceStatus: InteractionResourceStatus;
  /**
   * The type of the Outbound Resource, [Call](https://www.twilio.com/docs/voice/api/call) or [Message](https://www.twilio.com/docs/sms/api/message).
   */
  outboundResourceType: string;
  /**
   * The URL of the Twilio outbound resource.
   */
  outboundResourceUrl: string;
  /**
   * remove a InteractionInstance
   *
   * @returns Promise that resolves to processed InteractionInstance
   */
  remove(): Promise<InteractionInstance>;
  /**
   * remove a InteractionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: InteractionInstance) => any): void;
  /**
   * The unique SID identifier of the parent [Service](https://www.twilio.com/docs/proxy/api/service).
   */
  serviceSid: string;
  /**
   * The unique SID identifier of the parent [Session](https://www.twilio.com/docs/proxy/api/session).
   */
  sessionSid: string;
  /**
   * A 34 character string that uniquely identifies this Interaction.
   */
  sid: string;
  /**
   * The Type of this Interaction. One of `message`, `voice` or `unknown`.
   */
  type: InteractionType;
  /**
   * The URL of this resource.
   */
  url: string;
}

declare class InteractionContext {
  constructor(version: V1, serviceSid: string, sessionSid: string, sid: string);

  /**
   * fetch a InteractionInstance
   *
   * @returns Promise that resolves to processed InteractionInstance
   */
  fetch(): Promise<InteractionInstance>;
  /**
   * fetch a InteractionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: InteractionInstance) => any): void;
  /**
   * remove a InteractionInstance
   *
   * @returns Promise that resolves to processed InteractionInstance
   */
  remove(): Promise<InteractionInstance>;
  /**
   * remove a InteractionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: InteractionInstance) => any): void;
}

export { InteractionContext, InteractionInstance, InteractionList, InteractionListEachOptions, InteractionListInstance, InteractionListOptions, InteractionListPageOptions, InteractionPage, InteractionPayload, InteractionResource, InteractionResourceStatus, InteractionSolution, InteractionType }
