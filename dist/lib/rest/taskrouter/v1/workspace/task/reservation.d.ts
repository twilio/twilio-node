/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
declare type TaskReservationCallStatus = "initiated" | "ringing" | "answered" | "completed";
declare type TaskReservationConferenceEvent = "start" | "end" | "join" | "leave" | "mute" | "hold" | "speaker";
declare type TaskReservationStatus = "pending" | "accepted" | "rejected" | "timeout" | "canceled" | "rescinded" | "wrapping" | "completed";
declare type TaskReservationSupervisorMode = "monitor" | "whisper" | "barge";
/**
 * Options to pass to update a ReservationInstance
 *
 * @property { string } [ifMatch] The If-Match HTTP request header
 * @property { TaskReservationStatus } [reservationStatus]
 * @property { string } [workerActivitySid] The new worker activity SID if rejecting a reservation.
 * @property { string } [instruction] The assignment instruction for reservation.
 * @property { string } [dequeuePostWorkActivitySid] The SID of the Activity resource to start after executing a Dequeue instruction.
 * @property { string } [dequeueFrom] The Caller ID of the call to the worker when executing a Dequeue instruction.
 * @property { string } [dequeueRecord] Whether to record both legs of a call when executing a Dequeue instruction or which leg to record.
 * @property { number } [dequeueTimeout] Timeout for call when executing a Dequeue instruction.
 * @property { string } [dequeueTo] The Contact URI of the worker when executing a Dequeue instruction. Can be the URI of the Twilio Client, the SIP URI for Programmable SIP, or the [E.164](https://www.twilio.com/docs/glossary/what-e164) formatted phone number, depending on the destination.
 * @property { string } [dequeueStatusCallbackUrl] The Callback URL for completed call event when executing a Dequeue instruction.
 * @property { string } [callFrom] The Caller ID of the outbound call when executing a Call instruction.
 * @property { string } [callRecord] Whether to record both legs of a call when executing a Call instruction or which leg to record.
 * @property { number } [callTimeout] Timeout for call when executing a Call instruction.
 * @property { string } [callTo] The Contact URI of the worker when executing a Call instruction.  Can be the URI of the Twilio Client, the SIP URI for Programmable SIP, or the [E.164](https://www.twilio.com/docs/glossary/what-e164) formatted phone number, depending on the destination.
 * @property { string } [callUrl] TwiML URI executed on answering the worker\\\'s leg as a result of the Call instruction.
 * @property { string } [callStatusCallbackUrl] The URL to call  for the completed call event when executing a Call instruction.
 * @property { boolean } [callAccept] Whether to accept a reservation when executing a Call instruction.
 * @property { string } [redirectCallSid] The Call SID of the call parked in the queue when executing a Redirect instruction.
 * @property { boolean } [redirectAccept] Whether the reservation should be accepted when executing a Redirect instruction.
 * @property { string } [redirectUrl] TwiML URI to redirect the call to when executing the Redirect instruction.
 * @property { string } [to] The Contact URI of the worker when executing a Conference instruction. Can be the URI of the Twilio Client, the SIP URI for Programmable SIP, or the [E.164](https://www.twilio.com/docs/glossary/what-e164) formatted phone number, depending on the destination.
 * @property { string } [from] The Caller ID of the call to the worker when executing a Conference instruction.
 * @property { string } [statusCallback] The URL we should call using the `status_callback_method` to send status information to your application.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call `status_callback`. Can be: `POST` or `GET` and the default is `POST`.
 * @property { Array<TaskReservationCallStatus> } [statusCallbackEvent] The call progress events that we will send to `status_callback`. Can be: `initiated`, `ringing`, `answered`, or `completed`.
 * @property { number } [timeout] Timeout for call when executing a Conference instruction.
 * @property { boolean } [record] Whether to record the participant and their conferences, including the time between conferences. The default is `false`.
 * @property { boolean } [muted] Whether the agent is muted in the conference. The default is `false`.
 * @property { string } [beep] Whether to play a notification beep when the participant joins or when to play a beep. Can be: `true`, `false`, `onEnter`, or `onExit`. The default value is `true`.
 * @property { boolean } [startConferenceOnEnter] Whether to start the conference when the participant joins, if it has not already started. The default is `true`. If `false` and the conference has not started, the participant is muted and hears background music until another participant starts the conference.
 * @property { boolean } [endConferenceOnExit] Whether to end the conference when the agent leaves.
 * @property { string } [waitUrl] The URL we should call using the `wait_method` for the music to play while participants are waiting for the conference to start. The default value is the URL of our standard hold music. [Learn more about hold music](https://www.twilio.com/labs/twimlets/holdmusic).
 * @property { string } [waitMethod] The HTTP method we should use to call `wait_url`. Can be `GET` or `POST` and the default is `POST`. When using a static audio file, this should be `GET` so that we can cache the file.
 * @property { boolean } [earlyMedia] Whether to allow an agent to hear the state of the outbound call, including ringing or disconnect messages. The default is `true`.
 * @property { number } [maxParticipants] The maximum number of participants in the conference. Can be a positive integer from `2` to `250`. The default value is `250`.
 * @property { string } [conferenceStatusCallback] The URL we should call using the `conference_status_callback_method` when the conference events in `conference_status_callback_event` occur. Only the value set by the first participant to join the conference is used. Subsequent `conference_status_callback` values are ignored.
 * @property { string } [conferenceStatusCallbackMethod] The HTTP method we should use to call `conference_status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { Array<TaskReservationConferenceEvent> } [conferenceStatusCallbackEvent] The conference status events that we will send to `conference_status_callback`. Can be: `start`, `end`, `join`, `leave`, `mute`, `hold`, `speaker`.
 * @property { string } [conferenceRecord] Whether to record the conference the participant is joining or when to record the conference. Can be: `true`, `false`, `record-from-start`, and `do-not-record`. The default value is `false`.
 * @property { string } [conferenceTrim] How to trim the leading and trailing silence from your recorded conference audio files. Can be: `trim-silence` or `do-not-trim` and defaults to `trim-silence`.
 * @property { string } [recordingChannels] The recording channels for the final recording. Can be: `mono` or `dual` and the default is `mono`.
 * @property { string } [recordingStatusCallback] The URL that we should call using the `recording_status_callback_method` when the recording status changes.
 * @property { string } [recordingStatusCallbackMethod] The HTTP method we should use when we call `recording_status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [conferenceRecordingStatusCallback] The URL we should call using the `conference_recording_status_callback_method` when the conference recording is available.
 * @property { string } [conferenceRecordingStatusCallbackMethod] The HTTP method we should use to call `conference_recording_status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [region] The [region](https://support.twilio.com/hc/en-us/articles/223132167-How-global-low-latency-routing-and-region-selection-work-for-conferences-and-Client-calls) where we should mix the recorded audio. Can be:`us1`, `ie1`, `de1`, `sg1`, `br1`, `au1`, or `jp1`.
 * @property { string } [sipAuthUsername] The SIP username used for authentication.
 * @property { string } [sipAuthPassword] The SIP password for authentication.
 * @property { Array<string> } [dequeueStatusCallbackEvent] The Call progress events sent via webhooks as a result of a Dequeue instruction.
 * @property { string } [postWorkActivitySid] The new worker activity SID after executing a Conference instruction.
 * @property { TaskReservationSupervisorMode } [supervisorMode]
 * @property { string } [supervisor] The Supervisor SID/URI when executing the Supervise instruction.
 * @property { boolean } [endConferenceOnCustomerExit] Whether to end the conference when the customer leaves.
 * @property { boolean } [beepOnCustomerEntrance] Whether to play a notification beep when the customer joins.
 */
export interface ReservationContextUpdateOptions {
    ifMatch?: string;
    reservationStatus?: TaskReservationStatus;
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
    statusCallbackEvent?: Array<TaskReservationCallStatus>;
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
    conferenceStatusCallbackEvent?: Array<TaskReservationConferenceEvent>;
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
    supervisorMode?: TaskReservationSupervisorMode;
    supervisor?: string;
    endConferenceOnCustomerExit?: boolean;
    beepOnCustomerEntrance?: boolean;
}
/**
 * Options to pass to each
 *
 * @property { TaskReservationStatus } [reservationStatus] Returns the list of reservations for a task with a specified ReservationStatus.  Can be: `pending`, `accepted`, `rejected`, or `timeout`.
 * @property { string } [workerSid] The SID of the reserved Worker resource to read.
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
    reservationStatus?: TaskReservationStatus;
    workerSid?: string;
    pageSize?: number;
    callback?: (item: ReservationInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { TaskReservationStatus } [reservationStatus] Returns the list of reservations for a task with a specified ReservationStatus.  Can be: `pending`, `accepted`, `rejected`, or `timeout`.
 * @property { string } [workerSid] The SID of the reserved Worker resource to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ReservationListInstanceOptions {
    reservationStatus?: TaskReservationStatus;
    workerSid?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { TaskReservationStatus } [reservationStatus] Returns the list of reservations for a task with a specified ReservationStatus.  Can be: `pending`, `accepted`, `rejected`, or `timeout`.
 * @property { string } [workerSid] The SID of the reserved Worker resource to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ReservationListInstancePageOptions {
    reservationStatus?: TaskReservationStatus;
    workerSid?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ReservationContext {
    /**
     * Fetch a ReservationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ReservationInstance
     */
    fetch(callback?: (error: Error | null, item?: ReservationInstance) => any): Promise<ReservationInstance>;
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
    update(params?: any, callback?: any): Promise<ReservationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ReservationContextSolution {
    workspaceSid?: string;
    taskSid?: string;
    sid?: string;
}
export declare class ReservationContextImpl implements ReservationContext {
    protected _version: V1;
    protected _solution: ReservationContextSolution;
    protected _uri: string;
    constructor(_version: V1, workspaceSid: string, taskSid: string, sid: string);
    fetch(callback?: any): Promise<ReservationInstance>;
    update(params?: any, callback?: any): Promise<ReservationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ReservationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ReservationPayload extends TwilioResponsePayload {
    reservations: ReservationResource[];
}
interface ReservationResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    reservation_status?: TaskReservationStatus;
    sid?: string | null;
    task_sid?: string | null;
    worker_name?: string | null;
    worker_sid?: string | null;
    workspace_sid?: string | null;
    url?: string | null;
    links?: object | null;
}
export declare class ReservationInstance {
    protected _version: V1;
    protected _solution: ReservationContextSolution;
    protected _context?: ReservationContext;
    constructor(_version: V1, payload: ReservationResource, workspaceSid: string, taskSid: string, sid?: string);
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
    reservationStatus?: TaskReservationStatus;
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
     * The SID of the Workspace that this task is contained within.
     */
    workspaceSid?: string | null;
    /**
     * The absolute URL of the TaskReservation reservation
     */
    url?: string | null;
    /**
     * The URLs of related resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Fetch a ReservationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ReservationInstance
     */
    fetch(callback?: (error: Error | null, item?: ReservationInstance) => any): Promise<ReservationInstance>;
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
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        reservationStatus: TaskReservationStatus | undefined;
        sid: string | null | undefined;
        taskSid: string | null | undefined;
        workerName: string | null | undefined;
        workerSid: string | null | undefined;
        workspaceSid: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
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
export interface ReservationSolution {
    workspaceSid?: string;
    taskSid?: string;
}
export declare function ReservationListInstance(version: V1, workspaceSid: string, taskSid: string): ReservationListInstance;
export declare class ReservationPage extends Page<V1, ReservationPayload, ReservationResource, ReservationInstance> {
    /**
     * Initialize the ReservationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ReservationSolution);
    /**
     * Build an instance of ReservationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ReservationResource): ReservationInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
