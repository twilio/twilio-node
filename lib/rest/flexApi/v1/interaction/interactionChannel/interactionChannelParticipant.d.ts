/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';

type InteractionChannelParticipantStatus = 'closed'|'wrapup';

type InteractionChannelParticipantType = 'supervisor'|'customer'|'external'|'agent'|'unknown';

/**
 * Initialize the InteractionChannelParticipantList
 *
 * @param version - Version of the resource
 * @param interactionSid - The Interaction Sid for this channel.
 * @param channelSid - The Channel Sid for this Participant.
 */
declare function InteractionChannelParticipantList(version: V1, interactionSid: string, channelSid: string): InteractionChannelParticipantListInstance;

/**
 * Options to pass to update
 *
 * @property status - The Participant's status.
 */
interface InteractionChannelParticipantInstanceUpdateOptions {
  status: InteractionChannelParticipantStatus;
}

interface InteractionChannelParticipantListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): InteractionChannelParticipantContext;
  /**
   * create a InteractionChannelParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: InteractionChannelParticipantListInstanceCreateOptions, callback?: (error: Error | null, item: InteractionChannelParticipantInstance) => any): Promise<InteractionChannelParticipantInstance>;
  /**
   * Streams InteractionChannelParticipantInstance records from the API.
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
  each(callback?: (item: InteractionChannelParticipantInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams InteractionChannelParticipantInstance records from the API.
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
  each(opts?: InteractionChannelParticipantListInstanceEachOptions, callback?: (item: InteractionChannelParticipantInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a interaction_channel_participant
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): InteractionChannelParticipantContext;
  /**
   * Retrieve a single target page of InteractionChannelParticipantInstance records
   * from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: InteractionChannelParticipantPage) => any): Promise<InteractionChannelParticipantPage>;
  /**
   * Retrieve a single target page of InteractionChannelParticipantInstance records
   * from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: InteractionChannelParticipantPage) => any): Promise<InteractionChannelParticipantPage>;
  /**
   * Lists InteractionChannelParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: InteractionChannelParticipantInstance[]) => any): Promise<InteractionChannelParticipantInstance[]>;
  /**
   * Lists InteractionChannelParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: InteractionChannelParticipantListInstanceOptions, callback?: (error: Error | null, items: InteractionChannelParticipantInstance[]) => any): Promise<InteractionChannelParticipantInstance[]>;
  /**
   * Retrieve a single page of InteractionChannelParticipantInstance records from the
   * API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: InteractionChannelParticipantPage) => any): Promise<InteractionChannelParticipantPage>;
  /**
   * Retrieve a single page of InteractionChannelParticipantInstance records from the
   * API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: InteractionChannelParticipantListInstancePageOptions, callback?: (error: Error | null, items: InteractionChannelParticipantPage) => any): Promise<InteractionChannelParticipantPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property mediaProperties - JSON representing the Media Properties for the new Participant.
 * @property type - Participant type.
 */
interface InteractionChannelParticipantListInstanceCreateOptions {
  mediaProperties: object;
  type: InteractionChannelParticipantType;
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
interface InteractionChannelParticipantListInstanceEachOptions {
  callback?: (item: InteractionChannelParticipantInstance, done: (err?: Error) => void) => void;
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
interface InteractionChannelParticipantListInstanceOptions {
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
interface InteractionChannelParticipantListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface InteractionChannelParticipantPayload extends InteractionChannelParticipantResource, Page.TwilioResponsePayload {
}

interface InteractionChannelParticipantResource {
  channel_sid: string;
  interaction_sid: string;
  sid: string;
  type: InteractionChannelParticipantType;
  url: string;
}

interface InteractionChannelParticipantSolution {
  channelSid?: string;
  interactionSid?: string;
}


declare class InteractionChannelParticipantContext {
  /**
   * Initialize the InteractionChannelParticipantContext
   *
   * @param version - Version of the resource
   * @param interactionSid - The Interaction Sid for this channel.
   * @param channelSid - The Channel Sid for this Participant.
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, interactionSid: string, channelSid: string, sid: string);

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a InteractionChannelParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: InteractionChannelParticipantInstanceUpdateOptions, callback?: (error: Error | null, items: InteractionChannelParticipantInstance) => any): Promise<InteractionChannelParticipantInstance>;
}


declare class InteractionChannelParticipantInstance extends SerializableClass {
  /**
   * Initialize the InteractionChannelParticipantContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param interactionSid - The Interaction Sid for this channel.
   * @param channelSid - The Channel Sid for this Participant.
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, payload: InteractionChannelParticipantPayload, interactionSid: string, channelSid: string, sid: string);

  private _proxy: InteractionChannelParticipantContext;
  channelSid: string;
  interactionSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  type: InteractionChannelParticipantType;
  /**
   * update a InteractionChannelParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: InteractionChannelParticipantInstanceUpdateOptions, callback?: (error: Error | null, items: InteractionChannelParticipantInstance) => any): Promise<InteractionChannelParticipantInstance>;
  url: string;
}


declare class InteractionChannelParticipantPage extends Page<V1, InteractionChannelParticipantPayload, InteractionChannelParticipantResource, InteractionChannelParticipantInstance> {
  /**
   * Initialize the InteractionChannelParticipantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: InteractionChannelParticipantSolution);

  /**
   * Build an instance of InteractionChannelParticipantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: InteractionChannelParticipantPayload): InteractionChannelParticipantInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { InteractionChannelParticipantContext, InteractionChannelParticipantInstance, InteractionChannelParticipantInstanceUpdateOptions, InteractionChannelParticipantList, InteractionChannelParticipantListInstance, InteractionChannelParticipantListInstanceCreateOptions, InteractionChannelParticipantListInstanceEachOptions, InteractionChannelParticipantListInstanceOptions, InteractionChannelParticipantListInstancePageOptions, InteractionChannelParticipantPage, InteractionChannelParticipantPayload, InteractionChannelParticipantResource, InteractionChannelParticipantSolution, InteractionChannelParticipantStatus, InteractionChannelParticipantType }