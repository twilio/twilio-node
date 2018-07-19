/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the ReservationList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The ID of the Workspace that this task is contained within.
 * @param taskSid - The ID of the reserved Task
 */
declare function ReservationList(version: V1, workspaceSid: string, taskSid: string): ReservationListInstance;

interface ReservationResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  links: string;
  reservation_status: ReservationStatus;
  sid: string;
  task_sid: string;
  url: string;
  worker_name: string;
  worker_sid: string;
  workspace_sid: string;
}

interface ReservationPayload extends ReservationResource, Page.TwilioResponsePayload {
}

interface ReservationSolution {
  taskSid?: string;
  workspaceSid?: string;
}

interface ReservationListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ReservationContext;
  /**
   * Streams ReservationInstance records from the API.
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
  each(opts?: ReservationListInstanceEachOptions, callback?: (item: ReservationInstance, done: (err?: Error) => void) => void);
  /**
   * Constructs a reservation
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of ReservationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists ReservationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ReservationListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of ReservationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ReservationListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property reservationStatus - Yes
 * @property workerActivitySid - No
 * @property instruction - Yes
 * @property dequeuePostWorkActivitySid - No
 * @property dequeueFrom - Yes
 * @property dequeueRecord - No
 * @property dequeueTimeout - No
 * @property dequeueTo - No
 * @property dequeueStatusCallbackUrl - No
 * @property callFrom - Yes
 * @property callRecord - No
 * @property callTimeout - No
 * @property callTo - No
 * @property callUrl - Yes
 * @property callStatusCallbackUrl - No
 * @property callAccept - No
 * @property redirectCallSid - Yes
 * @property redirectAccept - No
 * @property redirectUrl - Yes
 * @property to - No
 * @property from - No
 * @property statusCallback - The status_callback
 * @property statusCallbackMethod - The status_callback_method
 * @property statusCallbackEvent - The status_callback_event
 * @property timeout - No
 * @property record - The record
 * @property muted - The muted
 * @property beep - The beep
 * @property startConferenceOnEnter - The start_conference_on_enter
 * @property endConferenceOnExit - The end_conference_on_exit
 * @property waitUrl - The wait_url
 * @property waitMethod - The wait_method
 * @property earlyMedia - The early_media
 * @property maxParticipants - The max_participants
 * @property conferenceStatusCallback - The conference_status_callback
 * @property conferenceStatusCallbackMethod - The conference_status_callback_method
 * @property conferenceStatusCallbackEvent - The conference_status_callback_event
 * @property conferenceRecord - The conference_record
 * @property conferenceTrim - The conference_trim
 * @property recordingChannels - The recording_channels
 * @property recordingStatusCallback - The recording_status_callback
 * @property recordingStatusCallbackMethod - The recording_status_callback_method
 * @property conferenceRecordingStatusCallback - The conference_recording_status_callback
 * @property conferenceRecordingStatusCallbackMethod - The conference_recording_status_callback_method
 * @property region - The region
 * @property sipAuthUsername - The sip_auth_username
 * @property sipAuthPassword - The sip_auth_password
 * @property dequeueStatusCallbackEvent - No
 * @property postWorkActivitySid - No
 */
export interface ReservationInstanceUpdateOptions {
  beep?: string;
  callAccept?: boolean;
  callFrom?: string;
  callRecord?: string;
  callStatusCallbackUrl?: string;
  callTimeout?: number;
  callTo?: string;
  callUrl?: string;
  conferenceRecord?: string;
  conferenceRecordingStatusCallback?: string;
  conferenceRecordingStatusCallbackMethod?: string;
  conferenceStatusCallback?: string;
  conferenceStatusCallbackEvent?: reservation.conference_event|list;
  conferenceStatusCallbackMethod?: string;
  conferenceTrim?: string;
  dequeueFrom?: string;
  dequeuePostWorkActivitySid?: string;
  dequeueRecord?: string;
  dequeueStatusCallbackEvent?: string|list;
  dequeueStatusCallbackUrl?: string;
  dequeueTimeout?: number;
  dequeueTo?: string;
  earlyMedia?: boolean;
  endConferenceOnExit?: boolean;
  from?: string;
  instruction?: string;
  maxParticipants?: number;
  muted?: boolean;
  postWorkActivitySid?: string;
  record?: boolean;
  recordingChannels?: string;
  recordingStatusCallback?: string;
  recordingStatusCallbackMethod?: string;
  redirectAccept?: boolean;
  redirectCallSid?: string;
  redirectUrl?: string;
  region?: string;
  reservationStatus?: reservation.status;
  sipAuthPassword?: string;
  sipAuthUsername?: string;
  startConferenceOnEnter?: boolean;
  statusCallback?: string;
  statusCallbackEvent?: reservation.call_status|list;
  statusCallbackMethod?: string;
  timeout?: number;
  to?: string;
  waitMethod?: string;
  waitUrl?: string;
  workerActivitySid?: string;
}

/**
 * Options to pass to update
 *
 * @property reservationStatus - Yes
 * @property workerActivitySid - No
 * @property instruction - Yes
 * @property dequeuePostWorkActivitySid - No
 * @property dequeueFrom - Yes
 * @property dequeueRecord - No
 * @property dequeueTimeout - No
 * @property dequeueTo - No
 * @property dequeueStatusCallbackUrl - No
 * @property callFrom - Yes
 * @property callRecord - No
 * @property callTimeout - No
 * @property callTo - No
 * @property callUrl - Yes
 * @property callStatusCallbackUrl - No
 * @property callAccept - No
 * @property redirectCallSid - Yes
 * @property redirectAccept - No
 * @property redirectUrl - Yes
 * @property to - No
 * @property from - No
 * @property statusCallback - The status_callback
 * @property statusCallbackMethod - The status_callback_method
 * @property statusCallbackEvent - The status_callback_event
 * @property timeout - No
 * @property record - The record
 * @property muted - The muted
 * @property beep - The beep
 * @property startConferenceOnEnter - The start_conference_on_enter
 * @property endConferenceOnExit - The end_conference_on_exit
 * @property waitUrl - The wait_url
 * @property waitMethod - The wait_method
 * @property earlyMedia - The early_media
 * @property maxParticipants - The max_participants
 * @property conferenceStatusCallback - The conference_status_callback
 * @property conferenceStatusCallbackMethod - The conference_status_callback_method
 * @property conferenceStatusCallbackEvent - The conference_status_callback_event
 * @property conferenceRecord - The conference_record
 * @property conferenceTrim - The conference_trim
 * @property recordingChannels - The recording_channels
 * @property recordingStatusCallback - The recording_status_callback
 * @property recordingStatusCallbackMethod - The recording_status_callback_method
 * @property conferenceRecordingStatusCallback - The conference_recording_status_callback
 * @property conferenceRecordingStatusCallbackMethod - The conference_recording_status_callback_method
 * @property region - The region
 * @property sipAuthUsername - The sip_auth_username
 * @property sipAuthPassword - The sip_auth_password
 * @property dequeueStatusCallbackEvent - No
 * @property postWorkActivitySid - No
 */
export interface ReservationContextUpdateOptions {
  beep?: string;
  callAccept?: boolean;
  callFrom?: string;
  callRecord?: string;
  callStatusCallbackUrl?: string;
  callTimeout?: number;
  callTo?: string;
  callUrl?: string;
  conferenceRecord?: string;
  conferenceRecordingStatusCallback?: string;
  conferenceRecordingStatusCallbackMethod?: string;
  conferenceStatusCallback?: string;
  conferenceStatusCallbackEvent?: reservation.conference_event|list;
  conferenceStatusCallbackMethod?: string;
  conferenceTrim?: string;
  dequeueFrom?: string;
  dequeuePostWorkActivitySid?: string;
  dequeueRecord?: string;
  dequeueStatusCallbackEvent?: string|list;
  dequeueStatusCallbackUrl?: string;
  dequeueTimeout?: number;
  dequeueTo?: string;
  earlyMedia?: boolean;
  endConferenceOnExit?: boolean;
  from?: string;
  instruction?: string;
  maxParticipants?: number;
  muted?: boolean;
  postWorkActivitySid?: string;
  record?: boolean;
  recordingChannels?: string;
  recordingStatusCallback?: string;
  recordingStatusCallbackMethod?: string;
  redirectAccept?: boolean;
  redirectCallSid?: string;
  redirectUrl?: string;
  region?: string;
  reservationStatus?: reservation.status;
  sipAuthPassword?: string;
  sipAuthUsername?: string;
  startConferenceOnEnter?: boolean;
  statusCallback?: string;
  statusCallbackEvent?: reservation.call_status|list;
  statusCallbackMethod?: string;
  timeout?: number;
  to?: string;
  waitMethod?: string;
  waitUrl?: string;
  workerActivitySid?: string;
}

/**
 * Options to pass to each
 *
 * @property reservationStatus - Returns the list of reservations for a task with a specified ReservationStatus
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
export interface ReservationListInstanceEachOptions {
  callback?: (item: ReservationInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
  reservationStatus?: reservation.status;
}

/**
 * Options to pass to list
 *
 * @property reservationStatus - Returns the list of reservations for a task with a specified ReservationStatus
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
export interface ReservationListInstanceOptions {
  limit?: number;
  pageSize?: number;
  reservationStatus?: reservation.status;
}

/**
 * Options to pass to page
 *
 * @property reservationStatus - Returns the list of reservations for a task with a specified ReservationStatus
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
export interface ReservationListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  reservationStatus?: reservation.status;
}


declare class ReservationPage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationPage
   * @augments Page
   * @description Initialize the ReservationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of ReservationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ReservationInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationInstance
   * @description Initialize the ReservationContext
   *
   * @property accountSid - The ID of the Account that owns this Task
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property reservationStatus - The current status of the reservation.
   * @property sid - The unique ID of this Reservation.
   * @property taskSid - The ID of the reserved Task
   * @property workerName - Human readable description of the Worker that is reserved
   * @property workerSid - The ID of the reserved Worker
   * @property workspaceSid - The ID of the Workspace that this task is contained within.
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The ID of the Workspace that this task is contained within.
   * @param taskSid - The ID of the reserved Task
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid, taskSid: sid, sid: sid);

  _proxy?: ReservationContext;
  /**
   * fetch a ReservationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the ReservationInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
  /**
   * update a ReservationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ReservationInstanceUpdateOptions, callback?: function);
}


declare class ReservationContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationContext
   * @description Initialize the ReservationContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param taskSid - The task_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid, taskSid: sid, sid: sid);

  /**
   * fetch a ReservationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * update a ReservationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ReservationContextUpdateOptions, callback?: function);
}

export { ReservationContext, ReservationInstance, ReservationList, ReservationListInstance, ReservationPage, ReservationPayload, ReservationResource, ReservationSolution }
