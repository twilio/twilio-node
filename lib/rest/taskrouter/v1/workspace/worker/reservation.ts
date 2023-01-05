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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

type WorkerReservationCallStatus =
  | "initiated"
  | "ringing"
  | "answered"
  | "completed";

type WorkerReservationConferenceEvent =
  | "start"
  | "end"
  | "join"
  | "leave"
  | "mute"
  | "hold"
  | "speaker";

type WorkerReservationStatus =
  | "pending"
  | "accepted"
  | "rejected"
  | "timeout"
  | "canceled"
  | "rescinded"
  | "wrapping"
  | "completed";

/**
 * Options to pass to update a ReservationInstance
 */
export interface ReservationContextUpdateOptions {
  /** The If-Match HTTP request header */
  ifMatch?: string;
  /**  */
  reservationStatus?: WorkerReservationStatus;
  /** The new worker activity SID if rejecting a reservation. */
  workerActivitySid?: string;
  /** The assignment instruction for the reservation. */
  instruction?: string;
  /** The SID of the Activity resource to start after executing a Dequeue instruction. */
  dequeuePostWorkActivitySid?: string;
  /** The caller ID of the call to the worker when executing a Dequeue instruction. */
  dequeueFrom?: string;
  /** Whether to record both legs of a call when executing a Dequeue instruction or which leg to record. */
  dequeueRecord?: string;
  /** The timeout for call when executing a Dequeue instruction. */
  dequeueTimeout?: number;
  /** The contact URI of the worker when executing a Dequeue instruction. Can be the URI of the Twilio Client, the SIP URI for Programmable SIP, or the [E.164](https://www.twilio.com/docs/glossary/what-e164) formatted phone number, depending on the destination. */
  dequeueTo?: string;
  /** The callback URL for completed call event when executing a Dequeue instruction. */
  dequeueStatusCallbackUrl?: string;
  /** The Caller ID of the outbound call when executing a Call instruction. */
  callFrom?: string;
  /** Whether to record both legs of a call when executing a Call instruction. */
  callRecord?: string;
  /** The timeout for a call when executing a Call instruction. */
  callTimeout?: number;
  /** The contact URI of the worker when executing a Call instruction. Can be the URI of the Twilio Client, the SIP URI for Programmable SIP, or the [E.164](https://www.twilio.com/docs/glossary/what-e164) formatted phone number, depending on the destination. */
  callTo?: string;
  /** TwiML URI executed on answering the worker\\\'s leg as a result of the Call instruction. */
  callUrl?: string;
  /** The URL to call for the completed call event when executing a Call instruction. */
  callStatusCallbackUrl?: string;
  /** Whether to accept a reservation when executing a Call instruction. */
  callAccept?: boolean;
  /** The Call SID of the call parked in the queue when executing a Redirect instruction. */
  redirectCallSid?: string;
  /** Whether the reservation should be accepted when executing a Redirect instruction. */
  redirectAccept?: boolean;
  /** TwiML URI to redirect the call to when executing the Redirect instruction. */
  redirectUrl?: string;
  /** The Contact URI of the worker when executing a Conference instruction. Can be the URI of the Twilio Client, the SIP URI for Programmable SIP, or the [E.164](https://www.twilio.com/docs/glossary/what-e164) formatted phone number, depending on the destination. */
  to?: string;
  /** The caller ID of the call to the worker when executing a Conference instruction. */
  from?: string;
  /** The URL we should call using the `status_callback_method` to send status information to your application. */
  statusCallback?: string;
  /** The HTTP method we should use to call `status_callback`. Can be: `POST` or `GET` and the default is `POST`. */
  statusCallbackMethod?: string;
  /** The call progress events that we will send to `status_callback`. Can be: `initiated`, `ringing`, `answered`, or `completed`. */
  statusCallbackEvent?: Array<WorkerReservationCallStatus>;
  /** The timeout for a call when executing a Conference instruction. */
  timeout?: number;
  /** Whether to record the participant and their conferences, including the time between conferences. Can be `true` or `false` and the default is `false`. */
  record?: boolean;
  /** Whether the agent is muted in the conference. Defaults to `false`. */
  muted?: boolean;
  /** Whether to play a notification beep when the participant joins or when to play a beep. Can be: `true`, `false`, `onEnter`, or `onExit`. The default value is `true`. */
  beep?: string;
  /** Whether to start the conference when the participant joins, if it has not already started. Can be: `true` or `false` and the default is `true`. If `false` and the conference has not started, the participant is muted and hears background music until another participant starts the conference. */
  startConferenceOnEnter?: boolean;
  /** Whether to end the conference when the agent leaves. */
  endConferenceOnExit?: boolean;
  /** The URL we should call using the `wait_method` for the music to play while participants are waiting for the conference to start. The default value is the URL of our standard hold music. [Learn more about hold music](https://www.twilio.com/labs/twimlets/holdmusic). */
  waitUrl?: string;
  /** The HTTP method we should use to call `wait_url`. Can be `GET` or `POST` and the default is `POST`. When using a static audio file, this should be `GET` so that we can cache the file. */
  waitMethod?: string;
  /** Whether to allow an agent to hear the state of the outbound call, including ringing or disconnect messages. The default is `true`. */
  earlyMedia?: boolean;
  /** The maximum number of participants allowed in the conference. Can be a positive integer from `2` to `250`. The default value is `250`. */
  maxParticipants?: number;
  /** The URL we should call using the `conference_status_callback_method` when the conference events in `conference_status_callback_event` occur. Only the value set by the first participant to join the conference is used. Subsequent `conference_status_callback` values are ignored. */
  conferenceStatusCallback?: string;
  /** The HTTP method we should use to call `conference_status_callback`. Can be: `GET` or `POST` and defaults to `POST`. */
  conferenceStatusCallbackMethod?: string;
  /** The conference status events that we will send to `conference_status_callback`. Can be: `start`, `end`, `join`, `leave`, `mute`, `hold`, `speaker`. */
  conferenceStatusCallbackEvent?: Array<WorkerReservationConferenceEvent>;
  /** Whether to record the conference the participant is joining or when to record the conference. Can be: `true`, `false`, `record-from-start`, and `do-not-record`. The default value is `false`. */
  conferenceRecord?: string;
  /** Whether to trim leading and trailing silence from your recorded conference audio files. Can be: `trim-silence` or `do-not-trim` and defaults to `trim-silence`. */
  conferenceTrim?: string;
  /** The recording channels for the final recording. Can be: `mono` or `dual` and the default is `mono`. */
  recordingChannels?: string;
  /** The URL that we should call using the `recording_status_callback_method` when the recording status changes. */
  recordingStatusCallback?: string;
  /** The HTTP method we should use when we call `recording_status_callback`. Can be: `GET` or `POST` and defaults to `POST`. */
  recordingStatusCallbackMethod?: string;
  /** The URL we should call using the `conference_recording_status_callback_method` when the conference recording is available. */
  conferenceRecordingStatusCallback?: string;
  /** The HTTP method we should use to call `conference_recording_status_callback`. Can be: `GET` or `POST` and defaults to `POST`. */
  conferenceRecordingStatusCallbackMethod?: string;
  /** The [region](https://support.twilio.com/hc/en-us/articles/223132167-How-global-low-latency-routing-and-region-selection-work-for-conferences-and-Client-calls) where we should mix the recorded audio. Can be:`us1`, `ie1`, `de1`, `sg1`, `br1`, `au1`, or `jp1`. */
  region?: string;
  /** The SIP username used for authentication. */
  sipAuthUsername?: string;
  /** The SIP password for authentication. */
  sipAuthPassword?: string;
  /** The call progress events sent via webhooks as a result of a Dequeue instruction. */
  dequeueStatusCallbackEvent?: Array<string>;
  /** The new worker activity SID after executing a Conference instruction. */
  postWorkActivitySid?: string;
  /** Whether to end the conference when the customer leaves. */
  endConferenceOnCustomerExit?: boolean;
  /** Whether to play a notification beep when the customer joins. */
  beepOnCustomerEntrance?: boolean;
}
/**
 * Options to pass to each
 */
export interface ReservationListInstanceEachOptions {
  /** Returns the list of reservations for a worker with a specified ReservationStatus. Can be: `pending`, `accepted`, `rejected`, `timeout`, `canceled`, or `rescinded`. */
  reservationStatus?: WorkerReservationStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ReservationInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ReservationListInstanceOptions {
  /** Returns the list of reservations for a worker with a specified ReservationStatus. Can be: `pending`, `accepted`, `rejected`, `timeout`, `canceled`, or `rescinded`. */
  reservationStatus?: WorkerReservationStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ReservationListInstancePageOptions {
  /** Returns the list of reservations for a worker with a specified ReservationStatus. Can be: `pending`, `accepted`, `rejected`, `timeout`, `canceled`, or `rescinded`. */
  reservationStatus?: WorkerReservationStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ReservationContext {
  /**
   * Fetch a ReservationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ReservationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ReservationInstance) => any
  ): Promise<ReservationInstance>;

  /**
   * Update a ReservationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ReservationInstance
   */
  update(
    callback?: (error: Error | null, item?: ReservationInstance) => any
  ): Promise<ReservationInstance>;
  /**
   * Update a ReservationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ReservationInstance
   */
  update(
    params: ReservationContextUpdateOptions,
    callback?: (error: Error | null, item?: ReservationInstance) => any
  ): Promise<ReservationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ReservationContextSolution {
  workspaceSid: string;
  workerSid: string;
  sid: string;
}

export class ReservationContextImpl implements ReservationContext {
  protected _solution: ReservationContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    workspaceSid: string,
    workerSid: string,
    sid: string
  ) {
    if (!isValidPathParam(workspaceSid)) {
      throw new Error("Parameter 'workspaceSid' is not valid.");
    }

    if (!isValidPathParam(workerSid)) {
      throw new Error("Parameter 'workerSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { workspaceSid, workerSid, sid };
    this._uri = `/Workspaces/${workspaceSid}/Workers/${workerSid}/Reservations/${sid}`;
  }

  fetch(
    callback?: (error: Error | null, item?: ReservationInstance) => any
  ): Promise<ReservationInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ReservationInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid,
          instance._solution.workerSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | ReservationContextUpdateOptions
      | ((error: Error | null, item?: ReservationInstance) => any),
    callback?: (error: Error | null, item?: ReservationInstance) => any
  ): Promise<ReservationInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["reservationStatus"] !== undefined)
      data["ReservationStatus"] = params["reservationStatus"];
    if (params["workerActivitySid"] !== undefined)
      data["WorkerActivitySid"] = params["workerActivitySid"];
    if (params["instruction"] !== undefined)
      data["Instruction"] = params["instruction"];
    if (params["dequeuePostWorkActivitySid"] !== undefined)
      data["DequeuePostWorkActivitySid"] = params["dequeuePostWorkActivitySid"];
    if (params["dequeueFrom"] !== undefined)
      data["DequeueFrom"] = params["dequeueFrom"];
    if (params["dequeueRecord"] !== undefined)
      data["DequeueRecord"] = params["dequeueRecord"];
    if (params["dequeueTimeout"] !== undefined)
      data["DequeueTimeout"] = params["dequeueTimeout"];
    if (params["dequeueTo"] !== undefined)
      data["DequeueTo"] = params["dequeueTo"];
    if (params["dequeueStatusCallbackUrl"] !== undefined)
      data["DequeueStatusCallbackUrl"] = params["dequeueStatusCallbackUrl"];
    if (params["callFrom"] !== undefined) data["CallFrom"] = params["callFrom"];
    if (params["callRecord"] !== undefined)
      data["CallRecord"] = params["callRecord"];
    if (params["callTimeout"] !== undefined)
      data["CallTimeout"] = params["callTimeout"];
    if (params["callTo"] !== undefined) data["CallTo"] = params["callTo"];
    if (params["callUrl"] !== undefined) data["CallUrl"] = params["callUrl"];
    if (params["callStatusCallbackUrl"] !== undefined)
      data["CallStatusCallbackUrl"] = params["callStatusCallbackUrl"];
    if (params["callAccept"] !== undefined)
      data["CallAccept"] = serialize.bool(params["callAccept"]);
    if (params["redirectCallSid"] !== undefined)
      data["RedirectCallSid"] = params["redirectCallSid"];
    if (params["redirectAccept"] !== undefined)
      data["RedirectAccept"] = serialize.bool(params["redirectAccept"]);
    if (params["redirectUrl"] !== undefined)
      data["RedirectUrl"] = params["redirectUrl"];
    if (params["to"] !== undefined) data["To"] = params["to"];
    if (params["from"] !== undefined) data["From"] = params["from"];
    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["statusCallbackMethod"] !== undefined)
      data["StatusCallbackMethod"] = params["statusCallbackMethod"];
    if (params["statusCallbackEvent"] !== undefined)
      data["StatusCallbackEvent"] = serialize.map(
        params["statusCallbackEvent"],
        (e: WorkerReservationCallStatus) => e
      );
    if (params["timeout"] !== undefined) data["Timeout"] = params["timeout"];
    if (params["record"] !== undefined)
      data["Record"] = serialize.bool(params["record"]);
    if (params["muted"] !== undefined)
      data["Muted"] = serialize.bool(params["muted"]);
    if (params["beep"] !== undefined) data["Beep"] = params["beep"];
    if (params["startConferenceOnEnter"] !== undefined)
      data["StartConferenceOnEnter"] = serialize.bool(
        params["startConferenceOnEnter"]
      );
    if (params["endConferenceOnExit"] !== undefined)
      data["EndConferenceOnExit"] = serialize.bool(
        params["endConferenceOnExit"]
      );
    if (params["waitUrl"] !== undefined) data["WaitUrl"] = params["waitUrl"];
    if (params["waitMethod"] !== undefined)
      data["WaitMethod"] = params["waitMethod"];
    if (params["earlyMedia"] !== undefined)
      data["EarlyMedia"] = serialize.bool(params["earlyMedia"]);
    if (params["maxParticipants"] !== undefined)
      data["MaxParticipants"] = params["maxParticipants"];
    if (params["conferenceStatusCallback"] !== undefined)
      data["ConferenceStatusCallback"] = params["conferenceStatusCallback"];
    if (params["conferenceStatusCallbackMethod"] !== undefined)
      data["ConferenceStatusCallbackMethod"] =
        params["conferenceStatusCallbackMethod"];
    if (params["conferenceStatusCallbackEvent"] !== undefined)
      data["ConferenceStatusCallbackEvent"] = serialize.map(
        params["conferenceStatusCallbackEvent"],
        (e: WorkerReservationConferenceEvent) => e
      );
    if (params["conferenceRecord"] !== undefined)
      data["ConferenceRecord"] = params["conferenceRecord"];
    if (params["conferenceTrim"] !== undefined)
      data["ConferenceTrim"] = params["conferenceTrim"];
    if (params["recordingChannels"] !== undefined)
      data["RecordingChannels"] = params["recordingChannels"];
    if (params["recordingStatusCallback"] !== undefined)
      data["RecordingStatusCallback"] = params["recordingStatusCallback"];
    if (params["recordingStatusCallbackMethod"] !== undefined)
      data["RecordingStatusCallbackMethod"] =
        params["recordingStatusCallbackMethod"];
    if (params["conferenceRecordingStatusCallback"] !== undefined)
      data["ConferenceRecordingStatusCallback"] =
        params["conferenceRecordingStatusCallback"];
    if (params["conferenceRecordingStatusCallbackMethod"] !== undefined)
      data["ConferenceRecordingStatusCallbackMethod"] =
        params["conferenceRecordingStatusCallbackMethod"];
    if (params["region"] !== undefined) data["Region"] = params["region"];
    if (params["sipAuthUsername"] !== undefined)
      data["SipAuthUsername"] = params["sipAuthUsername"];
    if (params["sipAuthPassword"] !== undefined)
      data["SipAuthPassword"] = params["sipAuthPassword"];
    if (params["dequeueStatusCallbackEvent"] !== undefined)
      data["DequeueStatusCallbackEvent"] = serialize.map(
        params["dequeueStatusCallbackEvent"],
        (e: string) => e
      );
    if (params["postWorkActivitySid"] !== undefined)
      data["PostWorkActivitySid"] = params["postWorkActivitySid"];
    if (params["endConferenceOnCustomerExit"] !== undefined)
      data["EndConferenceOnCustomerExit"] = serialize.bool(
        params["endConferenceOnCustomerExit"]
      );
    if (params["beepOnCustomerEntrance"] !== undefined)
      data["BeepOnCustomerEntrance"] = serialize.bool(
        params["beepOnCustomerEntrance"]
      );

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    if (params["ifMatch"] !== undefined)
      headers["If-Match"] = params["ifMatch"];

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ReservationInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid,
          instance._solution.workerSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
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

interface ReservationPayload extends TwilioResponsePayload {
  reservations: ReservationResource[];
}

interface ReservationResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  reservation_status: WorkerReservationStatus;
  sid: string;
  task_sid: string;
  worker_name: string;
  worker_sid: string;
  workspace_sid: string;
  url: string;
  links: Record<string, string>;
}

export class ReservationInstance {
  protected _solution: ReservationContextSolution;
  protected _context?: ReservationContext;

  constructor(
    protected _version: V1,
    payload: ReservationResource,
    workspaceSid: string,
    workerSid: string,
    sid?: string
  ) {
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
  accountSid: string;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated: Date;
  reservationStatus: WorkerReservationStatus;
  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The SID of the reserved Task resource
   */
  taskSid: string;
  /**
   * The friendly_name of the Worker that is reserved
   */
  workerName: string;
  /**
   * The SID of the reserved Worker resource
   */
  workerSid: string;
  /**
   * The SID of the Workspace that this worker is contained within.
   */
  workspaceSid: string;
  /**
   * The absolute URL of the WorkerReservation resource
   */
  url: string;
  /**
   * The URLs of related resources
   */
  links: Record<string, string>;

  private get _proxy(): ReservationContext {
    this._context =
      this._context ||
      new ReservationContextImpl(
        this._version,
        this._solution.workspaceSid,
        this._solution.workerSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a ReservationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ReservationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ReservationInstance) => any
  ): Promise<ReservationInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ReservationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ReservationInstance
   */
  update(
    callback?: (error: Error | null, item?: ReservationInstance) => any
  ): Promise<ReservationInstance>;
  /**
   * Update a ReservationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ReservationInstance
   */
  update(
    params: ReservationContextUpdateOptions,
    callback?: (error: Error | null, item?: ReservationInstance) => any
  ): Promise<ReservationInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: ReservationInstance) => any
  ): Promise<ReservationInstance> {
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
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ReservationSolution {
  workspaceSid: string;
  workerSid: string;
}

export interface ReservationListInstance {
  _version: V1;
  _solution: ReservationSolution;
  _uri: string;

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
   * @param { ReservationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: ReservationInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: ReservationListInstanceEachOptions,
    callback?: (item: ReservationInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of ReservationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ReservationPage) => any
  ): Promise<ReservationPage>;
  /**
   * Lists ReservationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ReservationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ReservationInstance[]) => any
  ): Promise<ReservationInstance[]>;
  list(
    params: ReservationListInstanceOptions,
    callback?: (error: Error | null, items: ReservationInstance[]) => any
  ): Promise<ReservationInstance[]>;
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
  page(
    callback?: (error: Error | null, items: ReservationPage) => any
  ): Promise<ReservationPage>;
  page(
    params: ReservationListInstancePageOptions,
    callback?: (error: Error | null, items: ReservationPage) => any
  ): Promise<ReservationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ReservationListInstance(
  version: V1,
  workspaceSid: string,
  workerSid: string
): ReservationListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  if (!isValidPathParam(workerSid)) {
    throw new Error("Parameter 'workerSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ReservationListInstance;

  instance.get = function get(sid): ReservationContext {
    return new ReservationContextImpl(version, workspaceSid, workerSid, sid);
  };

  instance._version = version;
  instance._solution = { workspaceSid, workerSid };
  instance._uri = `/Workspaces/${workspaceSid}/Workers/${workerSid}/Reservations`;

  instance.page = function page(
    params?:
      | ReservationListInstancePageOptions
      | ((error: Error | null, items: ReservationPage) => any),
    callback?: (error: Error | null, items: ReservationPage) => any
  ): Promise<ReservationPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["reservationStatus"] !== undefined)
      data["ReservationStatus"] = params["reservationStatus"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ReservationPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ReservationPage) => any
  ): Promise<ReservationPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ReservationPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class ReservationPage extends Page<
  V1,
  ReservationPayload,
  ReservationResource,
  ReservationInstance
> {
  /**
   * Initialize the ReservationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ReservationSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ReservationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ReservationResource): ReservationInstance {
    return new ReservationInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.workerSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
