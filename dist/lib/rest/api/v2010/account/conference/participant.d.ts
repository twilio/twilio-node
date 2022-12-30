/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
declare type ParticipantStatus = "queued" | "connecting" | "ringing" | "connected" | "complete" | "failed";
/**
 * Options to pass to update a ParticipantInstance
 *
 * @property { boolean } [muted] Whether the participant should be muted. Can be `true` or `false`. `true` will mute the participant, and `false` will un-mute them. Anything value other than `true` or `false` is interpreted as `false`.
 * @property { boolean } [hold] Whether the participant should be on hold. Can be: `true` or `false`. `true` puts the participant on hold, and `false` lets them rejoin the conference.
 * @property { string } [holdUrl] The URL we call using the `hold_method` for music that plays when the participant is on hold. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs.
 * @property { string } [holdMethod] The HTTP method we should use to call `hold_url`. Can be: `GET` or `POST` and the default is `GET`.
 * @property { string } [announceUrl] The URL we call using the `announce_method` for an announcement to the participant. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs.
 * @property { string } [announceMethod] The HTTP method we should use to call `announce_url`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [waitUrl] The URL we call using the `wait_method` for the music to play while participants are waiting for the conference to start. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs. The default value is the URL of our standard hold music. [Learn more about hold music](https://www.twilio.com/labs/twimlets/holdmusic).
 * @property { string } [waitMethod] The HTTP method we should use to call `wait_url`. Can be `GET` or `POST` and the default is `POST`. When using a static audio file, this should be `GET` so that we can cache the file.
 * @property { boolean } [beepOnExit] Whether to play a notification beep to the conference when the participant exits. Can be: `true` or `false`.
 * @property { boolean } [endConferenceOnExit] Whether to end the conference when the participant leaves. Can be: `true` or `false` and defaults to `false`.
 * @property { boolean } [coaching] Whether the participant is coaching another call. Can be: `true` or `false`. If not present, defaults to `false` unless `call_sid_to_coach` is defined. If `true`, `call_sid_to_coach` must be defined.
 * @property { string } [callSidToCoach] The SID of the participant who is being `coached`. The participant being coached is the only participant who can hear the participant who is `coaching`.
 */
export interface ParticipantContextUpdateOptions {
    muted?: boolean;
    hold?: boolean;
    holdUrl?: string;
    holdMethod?: string;
    announceUrl?: string;
    announceMethod?: string;
    waitUrl?: string;
    waitMethod?: string;
    beepOnExit?: boolean;
    endConferenceOnExit?: boolean;
    coaching?: boolean;
    callSidToCoach?: string;
}
/**
 * Options to pass to create a ParticipantInstance
 *
 * @property { string } from The phone number, Client identifier, or username portion of SIP address that made this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). Client identifiers are formatted `client:name`. If using a phone number, it must be a Twilio number or a Verified [outgoing caller id](https://www.twilio.com/docs/voice/api/outgoing-caller-ids) for your account. If the `to` parameter is a phone number, `from` must also be a phone number. If `to` is sip address, this value of `from` should be a username portion to be used to populate the P-Asserted-Identity header that is passed to the SIP endpoint.
 * @property { string } to The phone number, SIP address, or Client identifier that received this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). SIP addresses are formatted as `sip:name@company.com`. Client identifiers are formatted `client:name`. [Custom parameters](https://www.twilio.com/docs/voice/api/conference-participant-resource#custom-parameters) may also be specified.
 * @property { string } [statusCallback] The URL we should call using the `status_callback_method` to send status information to your application.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call `status_callback`. Can be: `GET` and `POST` and defaults to `POST`.
 * @property { Array<string> } [statusCallbackEvent] The conference state changes that should generate a call to `status_callback`. Can be: `initiated`, `ringing`, `answered`, and `completed`. Separate multiple values with a space. The default value is `completed`.
 * @property { string } [label] A label for this participant. If one is supplied, it may subsequently be used to fetch, update or delete the participant.
 * @property { number } [timeout] The number of seconds that we should allow the phone to ring before assuming there is no answer. Can be an integer between `5` and `600`, inclusive. The default value is `60`. We always add a 5-second timeout buffer to outgoing calls, so  value of 10 would result in an actual timeout that was closer to 15 seconds.
 * @property { boolean } [record] Whether to record the participant and their conferences, including the time between conferences. Can be `true` or `false` and the default is `false`.
 * @property { boolean } [muted] Whether the agent is muted in the conference. Can be `true` or `false` and the default is `false`.
 * @property { string } [beep] Whether to play a notification beep to the conference when the participant joins. Can be: `true`, `false`, `onEnter`, or `onExit`. The default value is `true`.
 * @property { boolean } [startConferenceOnEnter] Whether to start the conference when the participant joins, if it has not already started. Can be: `true` or `false` and the default is `true`. If `false` and the conference has not started, the participant is muted and hears background music until another participant starts the conference.
 * @property { boolean } [endConferenceOnExit] Whether to end the conference when the participant leaves. Can be: `true` or `false` and defaults to `false`.
 * @property { string } [waitUrl] The URL we should call using the `wait_method` for the music to play while participants are waiting for the conference to start. The default value is the URL of our standard hold music. [Learn more about hold music](https://www.twilio.com/labs/twimlets/holdmusic).
 * @property { string } [waitMethod] The HTTP method we should use to call `wait_url`. Can be `GET` or `POST` and the default is `POST`. When using a static audio file, this should be `GET` so that we can cache the file.
 * @property { boolean } [earlyMedia] Whether to allow an agent to hear the state of the outbound call, including ringing or disconnect messages. Can be: `true` or `false` and defaults to `true`.
 * @property { number } [maxParticipants] The maximum number of participants in the conference. Can be a positive integer from `2` to `250`. The default value is `250`.
 * @property { string } [conferenceRecord] Whether to record the conference the participant is joining. Can be: `true`, `false`, `record-from-start`, and `do-not-record`. The default value is `false`.
 * @property { string } [conferenceTrim] Whether to trim leading and trailing silence from your recorded conference audio files. Can be: `trim-silence` or `do-not-trim` and defaults to `trim-silence`.
 * @property { string } [conferenceStatusCallback] The URL we should call using the `conference_status_callback_method` when the conference events in `conference_status_callback_event` occur. Only the value set by the first participant to join the conference is used. Subsequent `conference_status_callback` values are ignored.
 * @property { string } [conferenceStatusCallbackMethod] The HTTP method we should use to call `conference_status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { Array<string> } [conferenceStatusCallbackEvent] The conference state changes that should generate a call to `conference_status_callback`. Can be: `start`, `end`, `join`, `leave`, `mute`, `hold`, `modify`, `speaker`, and `announcement`. Separate multiple values with a space. Defaults to `start end`.
 * @property { string } [recordingChannels] The recording channels for the final recording. Can be: `mono` or `dual` and the default is `mono`.
 * @property { string } [recordingStatusCallback] The URL that we should call using the `recording_status_callback_method` when the recording status changes.
 * @property { string } [recordingStatusCallbackMethod] The HTTP method we should use when we call `recording_status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [sipAuthUsername] The SIP username used for authentication.
 * @property { string } [sipAuthPassword] The SIP password for authentication.
 * @property { string } [region] The [region](https://support.twilio.com/hc/en-us/articles/223132167-How-global-low-latency-routing-and-region-selection-work-for-conferences-and-Client-calls) where we should mix the recorded audio. Can be:`us1`, `ie1`, `de1`, `sg1`, `br1`, `au1`, or `jp1`.
 * @property { string } [conferenceRecordingStatusCallback] The URL we should call using the `conference_recording_status_callback_method` when the conference recording is available.
 * @property { string } [conferenceRecordingStatusCallbackMethod] The HTTP method we should use to call `conference_recording_status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { Array<string> } [recordingStatusCallbackEvent] The recording state changes that should generate a call to `recording_status_callback`. Can be: `started`, `in-progress`, `paused`, `resumed`, `stopped`, `completed`, `failed`, and `absent`. Separate multiple values with a space, ex: `\\\'in-progress completed failed\\\'`.
 * @property { Array<string> } [conferenceRecordingStatusCallbackEvent] The conference recording state changes that generate a call to `conference_recording_status_callback`. Can be: `in-progress`, `completed`, `failed`, and `absent`. Separate multiple values with a space, ex: `\\\'in-progress completed failed\\\'`
 * @property { boolean } [coaching] Whether the participant is coaching another call. Can be: `true` or `false`. If not present, defaults to `false` unless `call_sid_to_coach` is defined. If `true`, `call_sid_to_coach` must be defined.
 * @property { string } [callSidToCoach] The SID of the participant who is being `coached`. The participant being coached is the only participant who can hear the participant who is `coaching`.
 * @property { string } [jitterBufferSize] Jitter buffer size for the connecting participant. Twilio will use this setting to apply Jitter Buffer before participant\\\'s audio is mixed into the conference. Can be: `off`, `small`, `medium`, and `large`. Default to `large`.
 * @property { string } [byoc] The SID of a BYOC (Bring Your Own Carrier) trunk to route this call with. Note that `byoc` is only meaningful when `to` is a phone number; it will otherwise be ignored. (Beta)
 * @property { string } [callerId] The phone number, Client identifier, or username portion of SIP address that made this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). Client identifiers are formatted `client:name`. If using a phone number, it must be a Twilio number or a Verified [outgoing caller id](https://www.twilio.com/docs/voice/api/outgoing-caller-ids) for your account. If the `to` parameter is a phone number, `callerId` must also be a phone number. If `to` is sip address, this value of `callerId` should be a username portion to be used to populate the From header that is passed to the SIP endpoint.
 * @property { string } [callReason] The Reason for the outgoing call. Use it to specify the purpose of the call that is presented on the called party\\\'s phone. (Branded Calls Beta)
 * @property { string } [recordingTrack] The audio track to record for the call. Can be: `inbound`, `outbound` or `both`. The default is `both`. `inbound` records the audio that is received by Twilio. `outbound` records the audio that is sent from Twilio. `both` records the audio that is received and sent by Twilio.
 * @property { number } [timeLimit] The maximum duration of the call in seconds. Constraints depend on account and configuration.
 * @property { string } [machineDetection] Whether to detect if a human, answering machine, or fax has picked up the call. Can be: `Enable` or `DetectMessageEnd`. Use `Enable` if you would like us to return `AnsweredBy` as soon as the called party is identified. Use `DetectMessageEnd`, if you would like to leave a message on an answering machine. If `send_digits` is provided, this parameter is ignored. For more information, see [Answering Machine Detection](https://www.twilio.com/docs/voice/answering-machine-detection).
 * @property { number } [machineDetectionTimeout] The number of seconds that we should attempt to detect an answering machine before timing out and sending a voice request with `AnsweredBy` of `unknown`. The default timeout is 30 seconds.
 * @property { number } [machineDetectionSpeechThreshold] The number of milliseconds that is used as the measuring stick for the length of the speech activity, where durations lower than this value will be interpreted as a human and longer than this value as a machine. Possible Values: 1000-6000. Default: 2400.
 * @property { number } [machineDetectionSpeechEndThreshold] The number of milliseconds of silence after speech activity at which point the speech activity is considered complete. Possible Values: 500-5000. Default: 1200.
 * @property { number } [machineDetectionSilenceTimeout] The number of milliseconds of initial silence after which an `unknown` AnsweredBy result will be returned. Possible Values: 2000-10000. Default: 5000.
 * @property { string } [amdStatusCallback] The URL that we should call using the `amd_status_callback_method` to notify customer application whether the call was answered by human, machine or fax.
 * @property { string } [amdStatusCallbackMethod] The HTTP method we should use when calling the `amd_status_callback` URL. Can be: `GET` or `POST` and the default is `POST`.
 */
export interface ParticipantListInstanceCreateOptions {
    from: string;
    to: string;
    statusCallback?: string;
    statusCallbackMethod?: string;
    statusCallbackEvent?: Array<string>;
    label?: string;
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
    conferenceRecord?: string;
    conferenceTrim?: string;
    conferenceStatusCallback?: string;
    conferenceStatusCallbackMethod?: string;
    conferenceStatusCallbackEvent?: Array<string>;
    recordingChannels?: string;
    recordingStatusCallback?: string;
    recordingStatusCallbackMethod?: string;
    sipAuthUsername?: string;
    sipAuthPassword?: string;
    region?: string;
    conferenceRecordingStatusCallback?: string;
    conferenceRecordingStatusCallbackMethod?: string;
    recordingStatusCallbackEvent?: Array<string>;
    conferenceRecordingStatusCallbackEvent?: Array<string>;
    coaching?: boolean;
    callSidToCoach?: string;
    jitterBufferSize?: string;
    byoc?: string;
    callerId?: string;
    callReason?: string;
    recordingTrack?: string;
    timeLimit?: number;
    machineDetection?: string;
    machineDetectionTimeout?: number;
    machineDetectionSpeechThreshold?: number;
    machineDetectionSpeechEndThreshold?: number;
    machineDetectionSilenceTimeout?: number;
    amdStatusCallback?: string;
    amdStatusCallbackMethod?: string;
}
/**
 * Options to pass to each
 *
 * @property { boolean } [muted] Whether to return only participants that are muted. Can be: `true` or `false`.
 * @property { boolean } [hold] Whether to return only participants that are on hold. Can be: `true` or `false`.
 * @property { boolean } [coaching] Whether to return only participants who are coaching another call. Can be: `true` or `false`.
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
export interface ParticipantListInstanceEachOptions {
    muted?: boolean;
    hold?: boolean;
    coaching?: boolean;
    pageSize?: number;
    callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { boolean } [muted] Whether to return only participants that are muted. Can be: `true` or `false`.
 * @property { boolean } [hold] Whether to return only participants that are on hold. Can be: `true` or `false`.
 * @property { boolean } [coaching] Whether to return only participants who are coaching another call. Can be: `true` or `false`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ParticipantListInstanceOptions {
    muted?: boolean;
    hold?: boolean;
    coaching?: boolean;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { boolean } [muted] Whether to return only participants that are muted. Can be: `true` or `false`.
 * @property { boolean } [hold] Whether to return only participants that are on hold. Can be: `true` or `false`.
 * @property { boolean } [coaching] Whether to return only participants who are coaching another call. Can be: `true` or `false`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ParticipantListInstancePageOptions {
    muted?: boolean;
    hold?: boolean;
    coaching?: boolean;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ParticipantContext {
    /**
     * Remove a ParticipantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ParticipantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    fetch(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
    /**
     * Update a ParticipantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    update(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
    /**
     * Update a ParticipantInstance
     *
     * @param { ParticipantContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    update(params: ParticipantContextUpdateOptions, callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
    update(params?: any, callback?: any): Promise<ParticipantInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ParticipantContextSolution {
    accountSid?: string;
    conferenceSid?: string;
    callSid?: string;
}
export declare class ParticipantContextImpl implements ParticipantContext {
    protected _version: V2010;
    protected _solution: ParticipantContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, conferenceSid: string, callSid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<ParticipantInstance>;
    update(params?: any, callback?: any): Promise<ParticipantInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ParticipantContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ParticipantPayload extends TwilioResponsePayload {
    participants: ParticipantResource[];
}
interface ParticipantResource {
    account_sid?: string | null;
    call_sid?: string | null;
    label?: string | null;
    call_sid_to_coach?: string | null;
    coaching?: boolean | null;
    conference_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    end_conference_on_exit?: boolean | null;
    muted?: boolean | null;
    hold?: boolean | null;
    start_conference_on_enter?: boolean | null;
    status?: ParticipantStatus;
    uri?: string | null;
}
export declare class ParticipantInstance {
    protected _version: V2010;
    protected _solution: ParticipantContextSolution;
    protected _context?: ParticipantContext;
    constructor(_version: V2010, payload: ParticipantResource, accountSid: string, conferenceSid: string, callSid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Call the resource is associated with
     */
    callSid?: string | null;
    /**
     * The label of this participant
     */
    label?: string | null;
    /**
     * The SID of the participant who is being `coached`
     */
    callSidToCoach?: string | null;
    /**
     * Indicates if the participant changed to coach
     */
    coaching?: boolean | null;
    /**
     * The SID of the conference the participant is in
     */
    conferenceSid?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * Whether the conference ends when the participant leaves
     */
    endConferenceOnExit?: boolean | null;
    /**
     * Whether the participant is muted
     */
    muted?: boolean | null;
    /**
     * Whether the participant is on hold
     */
    hold?: boolean | null;
    /**
     * Whether the conference starts when the participant joins the conference
     */
    startConferenceOnEnter?: boolean | null;
    status?: ParticipantStatus;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    private get _proxy();
    /**
     * Remove a ParticipantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ParticipantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    fetch(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
    /**
     * Update a ParticipantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    update(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
    /**
     * Update a ParticipantInstance
     *
     * @param { ParticipantContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    update(params: ParticipantContextUpdateOptions, callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        callSid: string | null | undefined;
        label: string | null | undefined;
        callSidToCoach: string | null | undefined;
        coaching: boolean | null | undefined;
        conferenceSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        endConferenceOnExit: boolean | null | undefined;
        muted: boolean | null | undefined;
        hold: boolean | null | undefined;
        startConferenceOnEnter: boolean | null | undefined;
        status: ParticipantStatus | undefined;
        uri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ParticipantListInstance {
    (callSid: string): ParticipantContext;
    get(callSid: string): ParticipantContext;
    /**
     * Create a ParticipantInstance
     *
     * @param { ParticipantListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    create(params: ParticipantListInstanceCreateOptions, callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
    create(params: any, callback?: any): Promise<ParticipantInstance>;
    /**
     * Streams ParticipantInstance records from the API.
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
    each(callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ParticipantInstance records from the API.
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
     * @param { ParticipantListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ParticipantListInstanceEachOptions, callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ParticipantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
    /**
     * Retrieve a single target page of ParticipantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
    getPage(params?: any, callback?: any): Promise<ParticipantPage>;
    /**
     * Lists ParticipantInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ParticipantInstance[]) => any): Promise<ParticipantInstance[]>;
    /**
     * Lists ParticipantInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ParticipantListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ParticipantListInstanceOptions, callback?: (error: Error | null, items: ParticipantInstance[]) => any): Promise<ParticipantInstance[]>;
    list(params?: any, callback?: any): Promise<ParticipantInstance[]>;
    /**
     * Retrieve a single page of ParticipantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
    /**
     * Retrieve a single page of ParticipantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ParticipantListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ParticipantListInstancePageOptions, callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
    page(params?: any, callback?: any): Promise<ParticipantPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ParticipantSolution {
    accountSid?: string;
    conferenceSid?: string;
}
export declare function ParticipantListInstance(version: V2010, accountSid: string, conferenceSid: string): ParticipantListInstance;
export declare class ParticipantPage extends Page<V2010, ParticipantPayload, ParticipantResource, ParticipantInstance> {
    /**
     * Initialize the ParticipantPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: ParticipantSolution);
    /**
     * Build an instance of ParticipantInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ParticipantResource): ParticipantInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
