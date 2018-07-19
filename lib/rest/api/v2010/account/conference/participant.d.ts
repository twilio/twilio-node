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
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the ParticipantList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 * @param conferenceSid - A string that uniquely identifies this conference
 */
declare function ParticipantList(version: V2010, accountSid: string, conferenceSid: string): ParticipantListInstance;

interface ParticipantResource {
  account_sid: string;
  call_sid: string;
  conference_sid: string;
  date_created: Date;
  date_updated: Date;
  end_conference_on_exit: boolean;
  hold: boolean;
  muted: boolean;
  start_conference_on_enter: boolean;
  status: ParticipantStatus;
  uri: string;
}

interface ParticipantPayload extends ParticipantResource, Page.TwilioResponsePayload {
}

interface ParticipantSolution {
  accountSid?: string;
  conferenceSid?: string;
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
  create(opts: ParticipantListInstanceCreateOptions, callback?: function);
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
  each(opts?: ParticipantListInstanceEachOptions, callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void);
  /**
   * Constructs a participant
   *
   * @param callSid - Fetch by unique participant Call SID
   */
  get(callSid: string);
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ParticipantListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ParticipantListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property muted - Indicates if the participant should be muted
 * @property hold - Specifying true will hold the participant, while false will un-hold.
 * @property holdUrl - The 'HoldUrl' attribute lets you specify a URL for music that plays when a participant is held.
 * @property holdMethod - Specify GET or POST, defaults to GET
 * @property announceUrl - The 'AnnounceUrl' attribute lets you specify a URL for announcing something to the participant.
 * @property announceMethod - Specify GET or POST, defaults to POST
 */
export interface ParticipantInstanceUpdateOptions {
  announceMethod?: string;
  announceUrl?: string;
  hold?: boolean;
  holdMethod?: string;
  holdUrl?: string;
  muted?: boolean;
}

/**
 * Options to pass to update
 *
 * @property muted - Indicates if the participant should be muted
 * @property hold - Specifying true will hold the participant, while false will un-hold.
 * @property holdUrl - The 'HoldUrl' attribute lets you specify a URL for music that plays when a participant is held.
 * @property holdMethod - Specify GET or POST, defaults to GET
 * @property announceUrl - The 'AnnounceUrl' attribute lets you specify a URL for announcing something to the participant.
 * @property announceMethod - Specify GET or POST, defaults to POST
 */
export interface ParticipantContextUpdateOptions {
  announceMethod?: string;
  announceUrl?: string;
  hold?: boolean;
  holdMethod?: string;
  holdUrl?: string;
  muted?: boolean;
}

/**
 * Options to pass to create
 *
 * @property from - The `from` phone number used to invite a participant.
 * @property to - The number, client id, or sip address of the new participant.
 * @property statusCallback - URL for conference event callback.
 * @property statusCallbackMethod - Method Twilio should use to reach the status callback URL.
 * @property statusCallbackEvent - Set state change events that will trigger a callback.
 * @property timeout - Number of seconds Twilio will wait for an answer.
 * @property record - Record the agent and their conferences.
 * @property muted - Mute the agent.
 * @property beep - Play a beep when the participant joins the conference.
 * @property startConferenceOnEnter - Begin the conference when the participant joins.
 * @property endConferenceOnExit - End the conference when the participant leaves.
 * @property waitUrl - URL that hosts pre-conference hold music
 * @property waitMethod - The method Twilio should use to request `WaitUrl`.
 * @property earlyMedia - Agents can hear the state of the outbound call.
 * @property maxParticipants - Maximum number of agent conference participants.
 * @property conferenceRecord - Record the conference.
 * @property conferenceTrim - Trim silence from audio files.
 * @property conferenceStatusCallback - Callback URL for conference events.
 * @property conferenceStatusCallbackMethod - HTTP method for requesting `ConferenceStatusCallback` URL.
 * @property conferenceStatusCallbackEvent - Set which conference state changes should webhook to the `ConferenceStatusCallback`
 * @property recordingChannels - Specify `mono` or `dual` recording channels.
 * @property recordingStatusCallback - The absolute URL for Twilio's webhook with recording status information.
 * @property recordingStatusCallbackMethod - HTTP method for `RecordingStatusCallback`
 * @property sipAuthUsername - SIP username used for authenticating.
 * @property sipAuthPassword - SIP password for authentication.
 * @property region - The region where Twilio should mix the conference audio.
 * @property conferenceRecordingStatusCallback - Conference recording callback URL.
 * @property conferenceRecordingStatusCallbackMethod - Method Twilio should use to request the `ConferenceRecordingStatusCallback` URL.
 * @property recordingStatusCallbackEvent - The recording_status_callback_event
 * @property conferenceRecordingStatusCallbackEvent - The conference_recording_status_callback_event
 */
export interface ParticipantListInstanceCreateOptions {
  beep?: string;
  conferenceRecord?: string;
  conferenceRecordingStatusCallback?: string;
  conferenceRecordingStatusCallbackEvent?: string|list;
  conferenceRecordingStatusCallbackMethod?: string;
  conferenceStatusCallback?: string;
  conferenceStatusCallbackEvent?: string|list;
  conferenceStatusCallbackMethod?: string;
  conferenceTrim?: string;
  earlyMedia?: boolean;
  endConferenceOnExit?: boolean;
  from: string;
  maxParticipants?: number;
  muted?: boolean;
  record?: boolean;
  recordingChannels?: string;
  recordingStatusCallback?: string;
  recordingStatusCallbackEvent?: string|list;
  recordingStatusCallbackMethod?: string;
  region?: string;
  sipAuthPassword?: string;
  sipAuthUsername?: string;
  startConferenceOnEnter?: boolean;
  statusCallback?: string;
  statusCallbackEvent?: string|list;
  statusCallbackMethod?: string;
  timeout?: number;
  to: string;
  waitMethod?: string;
  waitUrl?: string;
}

/**
 * Options to pass to each
 *
 * @property muted - Filter by muted participants
 * @property hold - Only show participants that are held or unheld.
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
export interface ParticipantListInstanceEachOptions {
  callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void;
  done?: Function;
  hold?: boolean;
  limit?: number;
  muted?: boolean;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property muted - Filter by muted participants
 * @property hold - Only show participants that are held or unheld.
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
export interface ParticipantListInstanceOptions {
  hold?: boolean;
  limit?: number;
  muted?: boolean;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property muted - Filter by muted participants
 * @property hold - Only show participants that are held or unheld.
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
export interface ParticipantListInstancePageOptions {
  hold?: boolean;
  muted?: boolean;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class ParticipantPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantPage
   * @augments Page
   * @description Initialize the ParticipantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of ParticipantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ParticipantInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantInstance
   * @description Initialize the ParticipantContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property callSid - A string that uniquely identifies this call
   * @property conferenceSid - A string that uniquely identifies this conference
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property endConferenceOnExit - Indicates if the endConferenceOnExit was set
   * @property muted - Indicates if the participant is muted
   * @property hold - true if this participant is currently held.
   * @property startConferenceOnEnter - Indicates if the startConferenceOnEnter attribute was set
   * @property status - The status
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param conferenceSid - A string that uniquely identifies this conference
   * @param callSid - Fetch by unique participant Call SID
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, conferenceSid: sid, callSid: sid);

  _proxy?: ParticipantContext;
  /**
   * fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the ParticipantInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
  /**
   * update a ParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ParticipantInstanceUpdateOptions, callback?: function);
}


declare class ParticipantContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext
   * @description Initialize the ParticipantContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param conferenceSid - The string that uniquely identifies this conference
   * @param callSid - Fetch by unique participant Call SID
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, conferenceSid: sid, callSid: sid);

  /**
   * fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a ParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ParticipantContextUpdateOptions, callback?: function);
}

export { ParticipantContext, ParticipantInstance, ParticipantList, ParticipantListInstance, ParticipantPage, ParticipantPayload, ParticipantResource, ParticipantSolution }
