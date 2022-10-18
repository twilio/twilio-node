/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Taskrouter
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");

type WorkerReservationCallStatus = 'initiated'|'ringing'|'answered'|'completed';

type WorkerReservationStatus = 'pending'|'accepted'|'rejected'|'timeout'|'canceled'|'rescinded'|'wrapping'|'completed';

type WorkerReservationConferenceEvent = 'start'|'end'|'join'|'leave'|'mute'|'hold'|'speaker';

/**
 * Options to pass to each
 *
 * @property { WorkerReservationStatus } [reservationStatus] Returns the list of reservations for a worker with a specified ReservationStatus. Can be: &#x60;pending&#x60;, &#x60;accepted&#x60;, &#x60;rejected&#x60;, &#x60;timeout&#x60;, &#x60;canceled&#x60;, or &#x60;rescinded&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ReservationListInstanceEachOptions {
  reservationStatus?: WorkerReservationStatus;
  pageSize?: number;
  callback?: (item: ReservationInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { WorkerReservationStatus } [reservationStatus] Returns the list of reservations for a worker with a specified ReservationStatus. Can be: &#x60;pending&#x60;, &#x60;accepted&#x60;, &#x60;rejected&#x60;, &#x60;timeout&#x60;, &#x60;canceled&#x60;, or &#x60;rescinded&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ReservationListInstanceOptions {
  reservationStatus?: WorkerReservationStatus;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { WorkerReservationStatus } [reservationStatus] Returns the list of reservations for a worker with a specified ReservationStatus. Can be: &#x60;pending&#x60;, &#x60;accepted&#x60;, &#x60;rejected&#x60;, &#x60;timeout&#x60;, &#x60;canceled&#x60;, or &#x60;rescinded&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ReservationListInstancePageOptions {
  reservationStatus?: WorkerReservationStatus;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



/**
 * Options to pass to update a ReservationInstance
 *
 * @property { string } [ifMatch] The If-Match HTTP request header
 * @property { WorkerReservationStatus } [reservationStatus] 
 * @property { string } [workerActivitySid] The new worker activity SID if rejecting a reservation.
 * @property { string } [instruction] The assignment instruction for the reservation.
 * @property { string } [dequeuePostWorkActivitySid] The SID of the Activity resource to start after executing a Dequeue instruction.
 * @property { string } [dequeueFrom] The caller ID of the call to the worker when executing a Dequeue instruction.
 * @property { string } [dequeueRecord] Whether to record both legs of a call when executing a Dequeue instruction or which leg to record.
 * @property { number } [dequeueTimeout] The timeout for call when executing a Dequeue instruction.
 * @property { string } [dequeueTo] The contact URI of the worker when executing a Dequeue instruction. Can be the URI of the Twilio Client, the SIP URI for Programmable SIP, or the [E.164](https://www.twilio.com/docs/glossary/what-e164) formatted phone number, depending on the destination.
 * @property { string } [dequeueStatusCallbackUrl] The callback URL for completed call event when executing a Dequeue instruction.
 * @property { string } [callFrom] The Caller ID of the outbound call when executing a Call instruction.
 * @property { string } [callRecord] Whether to record both legs of a call when executing a Call instruction.
 * @property { number } [callTimeout] The timeout for a call when executing a Call instruction.
 * @property { string } [callTo] The contact URI of the worker when executing a Call instruction. Can be the URI of the Twilio Client, the SIP URI for Programmable SIP, or the [E.164](https://www.twilio.com/docs/glossary/what-e164) formatted phone number, depending on the destination.
 * @property { string } [callUrl] TwiML URI executed on answering the worker\\\&#39;s leg as a result of the Call instruction.
 * @property { string } [callStatusCallbackUrl] The URL to call for the completed call event when executing a Call instruction.
 * @property { boolean } [callAccept] Whether to accept a reservation when executing a Call instruction.
 * @property { string } [redirectCallSid] The Call SID of the call parked in the queue when executing a Redirect instruction.
 * @property { boolean } [redirectAccept] Whether the reservation should be accepted when executing a Redirect instruction.
 * @property { string } [redirectUrl] TwiML URI to redirect the call to when executing the Redirect instruction.
 * @property { string } [to] The Contact URI of the worker when executing a Conference instruction. Can be the URI of the Twilio Client, the SIP URI for Programmable SIP, or the [E.164](https://www.twilio.com/docs/glossary/what-e164) formatted phone number, depending on the destination.
 * @property { string } [from] The caller ID of the call to the worker when executing a Conference instruction.
 * @property { string } [statusCallback] The URL we should call using the &#x60;status_callback_method&#x60; to send status information to your application.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call &#x60;status_callback&#x60;. Can be: &#x60;POST&#x60; or &#x60;GET&#x60; and the default is &#x60;POST&#x60;.
 * @property { Array<WorkerReservationCallStatus> } [statusCallbackEvent] The call progress events that we will send to &#x60;status_callback&#x60;. Can be: &#x60;initiated&#x60;, &#x60;ringing&#x60;, &#x60;answered&#x60;, or &#x60;completed&#x60;.
 * @property { number } [timeout] The timeout for a call when executing a Conference instruction.
 * @property { boolean } [record] Whether to record the participant and their conferences, including the time between conferences. Can be &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;false&#x60;.
 * @property { boolean } [muted] Whether the agent is muted in the conference. Defaults to &#x60;false&#x60;.
 * @property { string } [beep] Whether to play a notification beep when the participant joins or when to play a beep. Can be: &#x60;true&#x60;, &#x60;false&#x60;, &#x60;onEnter&#x60;, or &#x60;onExit&#x60;. The default value is &#x60;true&#x60;.
 * @property { boolean } [startConferenceOnEnter] Whether to start the conference when the participant joins, if it has not already started. Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;true&#x60;. If &#x60;false&#x60; and the conference has not started, the participant is muted and hears background music until another participant starts the conference.
 * @property { boolean } [endConferenceOnExit] Whether to end the conference when the agent leaves.
 * @property { string } [waitUrl] The URL we should call using the &#x60;wait_method&#x60; for the music to play while participants are waiting for the conference to start. The default value is the URL of our standard hold music. [Learn more about hold music](https://www.twilio.com/labs/twimlets/holdmusic).
 * @property { string } [waitMethod] The HTTP method we should use to call &#x60;wait_url&#x60;. Can be &#x60;GET&#x60; or &#x60;POST&#x60; and the default is &#x60;POST&#x60;. When using a static audio file, this should be &#x60;GET&#x60; so that we can cache the file.
 * @property { boolean } [earlyMedia] Whether to allow an agent to hear the state of the outbound call, including ringing or disconnect messages. The default is &#x60;true&#x60;.
 * @property { number } [maxParticipants] The maximum number of participants allowed in the conference. Can be a positive integer from &#x60;2&#x60; to &#x60;250&#x60;. The default value is &#x60;250&#x60;.
 * @property { string } [conferenceStatusCallback] The URL we should call using the &#x60;conference_status_callback_method&#x60; when the conference events in &#x60;conference_status_callback_event&#x60; occur. Only the value set by the first participant to join the conference is used. Subsequent &#x60;conference_status_callback&#x60; values are ignored.
 * @property { string } [conferenceStatusCallbackMethod] The HTTP method we should use to call &#x60;conference_status_callback&#x60;. Can be: &#x60;GET&#x60; or &#x60;POST&#x60; and defaults to &#x60;POST&#x60;.
 * @property { Array<WorkerReservationConferenceEvent> } [conferenceStatusCallbackEvent] The conference status events that we will send to &#x60;conference_status_callback&#x60;. Can be: &#x60;start&#x60;, &#x60;end&#x60;, &#x60;join&#x60;, &#x60;leave&#x60;, &#x60;mute&#x60;, &#x60;hold&#x60;, &#x60;speaker&#x60;.
 * @property { string } [conferenceRecord] Whether to record the conference the participant is joining or when to record the conference. Can be: &#x60;true&#x60;, &#x60;false&#x60;, &#x60;record-from-start&#x60;, and &#x60;do-not-record&#x60;. The default value is &#x60;false&#x60;.
 * @property { string } [conferenceTrim] Whether to trim leading and trailing silence from your recorded conference audio files. Can be: &#x60;trim-silence&#x60; or &#x60;do-not-trim&#x60; and defaults to &#x60;trim-silence&#x60;.
 * @property { string } [recordingChannels] The recording channels for the final recording. Can be: &#x60;mono&#x60; or &#x60;dual&#x60; and the default is &#x60;mono&#x60;.
 * @property { string } [recordingStatusCallback] The URL that we should call using the &#x60;recording_status_callback_method&#x60; when the recording status changes.
 * @property { string } [recordingStatusCallbackMethod] The HTTP method we should use when we call &#x60;recording_status_callback&#x60;. Can be: &#x60;GET&#x60; or &#x60;POST&#x60; and defaults to &#x60;POST&#x60;.
 * @property { string } [conferenceRecordingStatusCallback] The URL we should call using the &#x60;conference_recording_status_callback_method&#x60; when the conference recording is available.
 * @property { string } [conferenceRecordingStatusCallbackMethod] The HTTP method we should use to call &#x60;conference_recording_status_callback&#x60;. Can be: &#x60;GET&#x60; or &#x60;POST&#x60; and defaults to &#x60;POST&#x60;.
 * @property { string } [region] The [region](https://support.twilio.com/hc/en-us/articles/223132167-How-global-low-latency-routing-and-region-selection-work-for-conferences-and-Client-calls) where we should mix the recorded audio. Can be:&#x60;us1&#x60;, &#x60;ie1&#x60;, &#x60;de1&#x60;, &#x60;sg1&#x60;, &#x60;br1&#x60;, &#x60;au1&#x60;, or &#x60;jp1&#x60;.
 * @property { string } [sipAuthUsername] The SIP username used for authentication.
 * @property { string } [sipAuthPassword] The SIP password for authentication.
 * @property { Array<string> } [dequeueStatusCallbackEvent] The call progress events sent via webhooks as a result of a Dequeue instruction.
 * @property { string } [postWorkActivitySid] The new worker activity SID after executing a Conference instruction.
 * @property { boolean } [endConferenceOnCustomerExit] Whether to end the conference when the customer leaves.
 * @property { boolean } [beepOnCustomerEntrance] Whether to play a notification beep when the customer joins.
 */
export interface ReservationContextUpdateOptions {
  ifMatch?: string;
  reservationStatus?: WorkerReservationStatus;
  workerActivitySid?: string;
  instruction?: string;
  dequeuePostWorkActivitySid?: string;
  dequeueFrom?: string;
  dequeueRecord?: string;
  dequeueTimeout?: number;
  dequeueTo?: string;
  dequeueStatusCallbackUrl?: string;
  callFrom?: string;
  callRecord?: string;
  callTimeout?: number;
  callTo?: string;
  callUrl?: string;
  callStatusCallbackUrl?: string;
  callAccept?: boolean;
  redirectCallSid?: string;
  redirectAccept?: boolean;
  redirectUrl?: string;
  to?: string;
  from?: string;
  statusCallback?: string;
  statusCallbackMethod?: string;
  statusCallbackEvent?: Array<WorkerReservationCallStatus>;
  timeout?: number;
  record?: boolean;
  muted?: boolean;
  beep?: string;
  startConferenceOnEnter?: boolean;
  endConferenceOnExit?: boolean;
  waitUrl?: string;
  waitMethod?: string;
  earlyMedia?: boolean;
  maxParticipants?: number;
  conferenceStatusCallback?: string;
  conferenceStatusCallbackMethod?: string;
  conferenceStatusCallbackEvent?: Array<WorkerReservationConferenceEvent>;
  conferenceRecord?: string;
  conferenceTrim?: string;
  recordingChannels?: string;
  recordingStatusCallback?: string;
  recordingStatusCallbackMethod?: string;
  conferenceRecordingStatusCallback?: string;
  conferenceRecordingStatusCallbackMethod?: string;
  region?: string;
  sipAuthUsername?: string;
  sipAuthPassword?: string;
  dequeueStatusCallbackEvent?: Array<string>;
  postWorkActivitySid?: string;
  endConferenceOnCustomerExit?: boolean;
  beepOnCustomerEntrance?: boolean;
}

export interface ReservationListInstance {
  (sid: string): ReservationContext;
  get(sid: string): ReservationContext;



  /**
   * Streams ReservationInstance records from the API.
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
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: ReservationInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams ReservationInstance records from the API.
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
   * @param { ReservationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: ReservationListInstanceEachOptions, callback?: (item: ReservationInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ReservationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: ReservationPage) => any): Promise<ReservationPage>;
  /**
   * Retrieve a single target page of ReservationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ReservationPage) => any): Promise<ReservationPage>;
  getPage(params?: any, callback?: any): Promise<ReservationPage>;
  /**
   * Lists ReservationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ReservationInstance[]) => any): Promise<ReservationInstance[]>;
  /**
   * Lists ReservationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ReservationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: ReservationListInstanceOptions, callback?: (error: Error | null, items: ReservationInstance[]) => any): Promise<ReservationInstance[]>;
  list(params?: any, callback?: any): Promise<ReservationInstance[]>;
  /**
   * Retrieve a single page of ReservationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ReservationPage) => any): Promise<ReservationPage>;
  /**
   * Retrieve a single page of ReservationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ReservationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: ReservationListInstancePageOptions, callback?: (error: Error | null, items: ReservationPage) => any): Promise<ReservationPage>;
  page(params?: any, callback?: any): Promise<ReservationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface ReservationListInstanceImpl extends ReservationListInstance {}
class ReservationListInstanceImpl implements ReservationListInstance {
  _version?: V1;
  _solution?: ReservationSolution;
  _uri?: string;

}

export function ReservationListInstance(version: V1, workspaceSid: string, workerSid: string): ReservationListInstance {
  const instance = ((sid) => instance.get(sid)) as ReservationListInstanceImpl;

  instance.get = function get(sid): ReservationContext {
    return new ReservationContextImpl(version, workspaceSid, workerSid, sid);
  }

  instance._version = version;
  instance._solution = { workspaceSid, workerSid };
  instance._uri = `/Workspaces/${workspaceSid}/Workers/${workerSid}/Reservations`;

  instance.page = function page(params?: any, callback?: any): Promise<ReservationPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.reservationStatus !== undefined) data['ReservationStatus'] = params.reservationStatus;
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ReservationPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<ReservationPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new ReservationPage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }



  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}


export interface ReservationContext {


  /**
   * Fetch a ReservationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ReservationInstance
   */
  fetch(callback?: (error: Error | null, item?: ReservationInstance) => any): Promise<ReservationInstance>


  /**
   * Update a ReservationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ReservationInstance
   */
  update(callback?: (error: Error | null, item?: ReservationInstance) => any): Promise<ReservationInstance>;
  /**
   * Update a ReservationInstance
   *
   * @param { ReservationContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ReservationInstance
   */
  update(params: ReservationContextUpdateOptions, callback?: (error: Error | null, item?: ReservationInstance) => any): Promise<ReservationInstance>;
  update(params?: any, callback?: any): Promise<ReservationInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class ReservationContextImpl implements ReservationContext {
  protected _solution: ReservationSolution;
  protected _uri: string;


  constructor(protected _version: V1, workspaceSid: string, workerSid: string, sid: string) {
    this._solution = { workspaceSid, workerSid, sid };
    this._uri = `/Workspaces/${workspaceSid}/Workers/${workerSid}/Reservations/${sid}`;
  }

  fetch(callback?: any): Promise<ReservationInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new ReservationInstance(operationVersion, payload, this._solution.workspaceSid, this._solution.workerSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  update(params?: any, callback?: any): Promise<ReservationInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.reservationStatus !== undefined) data['ReservationStatus'] = params.reservationStatus;
    if (params.workerActivitySid !== undefined) data['WorkerActivitySid'] = params.workerActivitySid;
    if (params.instruction !== undefined) data['Instruction'] = params.instruction;
    if (params.dequeuePostWorkActivitySid !== undefined) data['DequeuePostWorkActivitySid'] = params.dequeuePostWorkActivitySid;
    if (params.dequeueFrom !== undefined) data['DequeueFrom'] = params.dequeueFrom;
    if (params.dequeueRecord !== undefined) data['DequeueRecord'] = params.dequeueRecord;
    if (params.dequeueTimeout !== undefined) data['DequeueTimeout'] = params.dequeueTimeout;
    if (params.dequeueTo !== undefined) data['DequeueTo'] = params.dequeueTo;
    if (params.dequeueStatusCallbackUrl !== undefined) data['DequeueStatusCallbackUrl'] = params.dequeueStatusCallbackUrl;
    if (params.callFrom !== undefined) data['CallFrom'] = params.callFrom;
    if (params.callRecord !== undefined) data['CallRecord'] = params.callRecord;
    if (params.callTimeout !== undefined) data['CallTimeout'] = params.callTimeout;
    if (params.callTo !== undefined) data['CallTo'] = params.callTo;
    if (params.callUrl !== undefined) data['CallUrl'] = params.callUrl;
    if (params.callStatusCallbackUrl !== undefined) data['CallStatusCallbackUrl'] = params.callStatusCallbackUrl;
    if (params.callAccept !== undefined) data['CallAccept'] = serialize.bool(params.callAccept);
    if (params.redirectCallSid !== undefined) data['RedirectCallSid'] = params.redirectCallSid;
    if (params.redirectAccept !== undefined) data['RedirectAccept'] = serialize.bool(params.redirectAccept);
    if (params.redirectUrl !== undefined) data['RedirectUrl'] = params.redirectUrl;
    if (params.to !== undefined) data['To'] = params.to;
    if (params.from !== undefined) data['From'] = params.from;
    if (params.statusCallback !== undefined) data['StatusCallback'] = params.statusCallback;
    if (params.statusCallbackMethod !== undefined) data['StatusCallbackMethod'] = params.statusCallbackMethod;
    if (params.statusCallbackEvent !== undefined) data['StatusCallbackEvent'] = serialize.map(params.statusCallbackEvent, ((e) => e));
    if (params.timeout !== undefined) data['Timeout'] = params.timeout;
    if (params.record !== undefined) data['Record'] = serialize.bool(params.record);
    if (params.muted !== undefined) data['Muted'] = serialize.bool(params.muted);
    if (params.beep !== undefined) data['Beep'] = params.beep;
    if (params.startConferenceOnEnter !== undefined) data['StartConferenceOnEnter'] = serialize.bool(params.startConferenceOnEnter);
    if (params.endConferenceOnExit !== undefined) data['EndConferenceOnExit'] = serialize.bool(params.endConferenceOnExit);
    if (params.waitUrl !== undefined) data['WaitUrl'] = params.waitUrl;
    if (params.waitMethod !== undefined) data['WaitMethod'] = params.waitMethod;
    if (params.earlyMedia !== undefined) data['EarlyMedia'] = serialize.bool(params.earlyMedia);
    if (params.maxParticipants !== undefined) data['MaxParticipants'] = params.maxParticipants;
    if (params.conferenceStatusCallback !== undefined) data['ConferenceStatusCallback'] = params.conferenceStatusCallback;
    if (params.conferenceStatusCallbackMethod !== undefined) data['ConferenceStatusCallbackMethod'] = params.conferenceStatusCallbackMethod;
    if (params.conferenceStatusCallbackEvent !== undefined) data['ConferenceStatusCallbackEvent'] = serialize.map(params.conferenceStatusCallbackEvent, ((e) => e));
    if (params.conferenceRecord !== undefined) data['ConferenceRecord'] = params.conferenceRecord;
    if (params.conferenceTrim !== undefined) data['ConferenceTrim'] = params.conferenceTrim;
    if (params.recordingChannels !== undefined) data['RecordingChannels'] = params.recordingChannels;
    if (params.recordingStatusCallback !== undefined) data['RecordingStatusCallback'] = params.recordingStatusCallback;
    if (params.recordingStatusCallbackMethod !== undefined) data['RecordingStatusCallbackMethod'] = params.recordingStatusCallbackMethod;
    if (params.conferenceRecordingStatusCallback !== undefined) data['ConferenceRecordingStatusCallback'] = params.conferenceRecordingStatusCallback;
    if (params.conferenceRecordingStatusCallbackMethod !== undefined) data['ConferenceRecordingStatusCallbackMethod'] = params.conferenceRecordingStatusCallbackMethod;
    if (params.region !== undefined) data['Region'] = params.region;
    if (params.sipAuthUsername !== undefined) data['SipAuthUsername'] = params.sipAuthUsername;
    if (params.sipAuthPassword !== undefined) data['SipAuthPassword'] = params.sipAuthPassword;
    if (params.dequeueStatusCallbackEvent !== undefined) data['DequeueStatusCallbackEvent'] = serialize.map(params.dequeueStatusCallbackEvent, ((e) => e));
    if (params.postWorkActivitySid !== undefined) data['PostWorkActivitySid'] = params.postWorkActivitySid;
    if (params.endConferenceOnCustomerExit !== undefined) data['EndConferenceOnCustomerExit'] = serialize.bool(params.endConferenceOnCustomerExit);
    if (params.beepOnCustomerEntrance !== undefined) data['BeepOnCustomerEntrance'] = serialize.bool(params.beepOnCustomerEntrance);

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (params.ifMatch !== undefined) headers['If-Match'] = params.ifMatch;

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ReservationInstance(operationVersion, payload, this._solution.workspaceSid, this._solution.workerSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface ReservationPayload extends ReservationResource, Page.TwilioResponsePayload {
}

interface ReservationResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  reservation_status?: WorkerReservationStatus;
  sid?: string | null;
  task_sid?: string | null;
  worker_name?: string | null;
  worker_sid?: string | null;
  workspace_sid?: string | null;
  url?: string | null;
  links?: object | null;
}

export class ReservationInstance {
  protected _solution: ReservationSolution;
  protected _context?: ReservationContext;

  constructor(protected _version: V1, payload: ReservationPayload, workspaceSid: string, workerSid: string, sid?: string) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.reservationStatus = payload.reservation_status;
    this.sid = payload.sid;
    this.taskSid = payload.task_sid;
    this.workerName = payload.worker_name;
    this.workerSid = payload.worker_sid;
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { workspaceSid, workerSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  reservationStatus?: WorkerReservationStatus;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the reserved Task resource
   */
  taskSid?: string | null;
  /**
   * The friendly_name of the Worker that is reserved
   */
  workerName?: string | null;
  /**
   * The SID of the reserved Worker resource
   */
  workerSid?: string | null;
  /**
   * The SID of the Workspace that this worker is contained within.
   */
  workspaceSid?: string | null;
  /**
   * The absolute URL of the WorkerReservation resource
   */
  url?: string | null;
  /**
   * The URLs of related resources
   */
  links?: object | null;

  private get _proxy(): ReservationContext {
    this._context = this._context || new ReservationContextImpl(this._version, this._solution.workspaceSid, this._solution.workerSid, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a ReservationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ReservationInstance
   */
  fetch(callback?: (error: Error | null, item?: ReservationInstance) => any): Promise<ReservationInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ReservationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ReservationInstance
   */
  update(callback?: (error: Error | null, item?: ReservationInstance) => any): Promise<ReservationInstance>;
  /**
   * Update a ReservationInstance
   *
   * @param { ReservationContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ReservationInstance
   */
  update(params: ReservationContextUpdateOptions, callback?: (error: Error | null, item?: ReservationInstance) => any): Promise<ReservationInstance>;
  update(params?: any, callback?: any): Promise<ReservationInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      reservationStatus: this.reservationStatus, 
      sid: this.sid, 
      taskSid: this.taskSid, 
      workerName: this.workerName, 
      workerSid: this.workerSid, 
      workspaceSid: this.workspaceSid, 
      url: this.url, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface ReservationSolution {
  workspaceSid?: string;
  workerSid?: string;
  sid?: string;
}

export class ReservationPage extends Page<V1, ReservationPayload, ReservationResource, ReservationInstance> {
  /**
   * Initialize the ReservationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ReservationSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ReservationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ReservationPayload): ReservationInstance {
    return new ReservationInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.workerSid,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

