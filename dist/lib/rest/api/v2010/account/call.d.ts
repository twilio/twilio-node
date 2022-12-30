/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
import { EventListInstance } from "./call/event";
import { FeedbackListInstance } from "./call/feedback";
import { FeedbackSummaryListInstance } from "./call/feedbackSummary";
import { NotificationListInstance } from "./call/notification";
import { PaymentListInstance } from "./call/payment";
import { RecordingListInstance } from "./call/recording";
import { SiprecListInstance } from "./call/siprec";
import { StreamListInstance } from "./call/stream";
import { UserDefinedMessageListInstance } from "./call/userDefinedMessage";
import { UserDefinedMessageSubscriptionListInstance } from "./call/userDefinedMessageSubscription";
declare type CallStatus = "queued" | "ringing" | "in-progress" | "completed" | "busy" | "failed" | "no-answer" | "canceled";
declare type CallUpdateStatus = "canceled" | "completed";
/**
 * Options to pass to update a CallInstance
 *
 * @property { string } [url] The absolute URL that returns the TwiML instructions for the call. We will call this URL using the `method` when the call connects. For more information, see the [Url Parameter](https://www.twilio.com/docs/voice/make-calls#specify-a-url-parameter) section in [Making Calls](https://www.twilio.com/docs/voice/make-calls).
 * @property { string } [method] The HTTP method we should use when calling the `url`. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
 * @property { CallUpdateStatus } [status]
 * @property { string } [fallbackUrl] The URL that we call using the `fallback_method` if an error occurs when requesting or executing the TwiML at `url`. If an `application_sid` parameter is present, this parameter is ignored.
 * @property { string } [fallbackMethod] The HTTP method that we should use to request the `fallback_url`. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
 * @property { string } [statusCallback] The URL we should call using the `status_callback_method` to send status information to your application. If no `status_callback_event` is specified, we will send the `completed` status. If an `application_sid` parameter is present, this parameter is ignored. URLs must contain a valid hostname (underscores are not permitted).
 * @property { string } [statusCallbackMethod] The HTTP method we should use when requesting the `status_callback` URL. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
 * @property { string } [twiml] TwiML instructions for the call Twilio will use without fetching Twiml from url. Twiml and url parameters are mutually exclusive
 * @property { number } [timeLimit] The maximum duration of the call in seconds. Constraints depend on account and configuration.
 */
export interface CallContextUpdateOptions {
    url?: string;
    method?: string;
    status?: CallUpdateStatus;
    fallbackUrl?: string;
    fallbackMethod?: string;
    statusCallback?: string;
    statusCallbackMethod?: string;
    twiml?: string;
    timeLimit?: number;
}
/**
 * Options to pass to create a CallInstance
 *
 * @property { string } to The phone number, SIP address, or client identifier to call.
 * @property { string } from The phone number or client identifier to use as the caller id. If using a phone number, it must be a Twilio number or a Verified [outgoing caller id](https://www.twilio.com/docs/voice/api/outgoing-caller-ids) for your account. If the `to` parameter is a phone number, `From` must also be a phone number.
 * @property { string } [method] The HTTP method we should use when calling the `url` parameter\\\'s value. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
 * @property { string } [fallbackUrl] The URL that we call using the `fallback_method` if an error occurs when requesting or executing the TwiML at `url`. If an `application_sid` parameter is present, this parameter is ignored.
 * @property { string } [fallbackMethod] The HTTP method that we should use to request the `fallback_url`. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
 * @property { string } [statusCallback] The URL we should call using the `status_callback_method` to send status information to your application. If no `status_callback_event` is specified, we will send the `completed` status. If an `application_sid` parameter is present, this parameter is ignored. URLs must contain a valid hostname (underscores are not permitted).
 * @property { Array<string> } [statusCallbackEvent] The call progress events that we will send to the `status_callback` URL. Can be: `initiated`, `ringing`, `answered`, and `completed`. If no event is specified, we send the `completed` status. If you want to receive multiple events, specify each one in a separate `status_callback_event` parameter. See the code sample for [monitoring call progress](https://www.twilio.com/docs/voice/api/call-resource?code-sample=code-create-a-call-resource-and-specify-a-statuscallbackevent&code-sdk-version=json). If an `application_sid` is present, this parameter is ignored.
 * @property { string } [statusCallbackMethod] The HTTP method we should use when calling the `status_callback` URL. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
 * @property { string } [sendDigits] A string of keys to dial after connecting to the number, maximum of 32 digits. Valid digits in the string include: any digit (`0`-`9`), \\\'`#`\\\', \\\'`*`\\\' and \\\'`w`\\\', to insert a half second pause. For example, if you connected to a company phone number and wanted to pause for one second, and then dial extension 1234 followed by the pound key, the value of this parameter would be `ww1234#`. Remember to URL-encode this string, since the \\\'`#`\\\' character has special meaning in a URL. If both `SendDigits` and `MachineDetection` parameters are provided, then `MachineDetection` will be ignored.
 * @property { number } [timeout] The integer number of seconds that we should allow the phone to ring before assuming there is no answer. The default is `60` seconds and the maximum is `600` seconds. For some call flows, we will add a 5-second buffer to the timeout value you provide. For this reason, a timeout value of 10 seconds could result in an actual timeout closer to 15 seconds. You can set this to a short time, such as `15` seconds, to hang up before reaching an answering machine or voicemail.
 * @property { boolean } [record] Whether to record the call. Can be `true` to record the phone call, or `false` to not. The default is `false`. The `recording_url` is sent to the `status_callback` URL.
 * @property { string } [recordingChannels] The number of channels in the final recording. Can be: `mono` or `dual`. The default is `mono`. `mono` records both legs of the call in a single channel of the recording file. `dual` records each leg to a separate channel of the recording file. The first channel of a dual-channel recording contains the parent call and the second channel contains the child call.
 * @property { string } [recordingStatusCallback] The URL that we call when the recording is available to be accessed.
 * @property { string } [recordingStatusCallbackMethod] The HTTP method we should use when calling the `recording_status_callback` URL. Can be: `GET` or `POST` and the default is `POST`.
 * @property { string } [sipAuthUsername] The username used to authenticate the caller making a SIP call.
 * @property { string } [sipAuthPassword] The password required to authenticate the user account specified in `sip_auth_username`.
 * @property { string } [machineDetection] Whether to detect if a human, answering machine, or fax has picked up the call. Can be: `Enable` or `DetectMessageEnd`. Use `Enable` if you would like us to return `AnsweredBy` as soon as the called party is identified. Use `DetectMessageEnd`, if you would like to leave a message on an answering machine. If `send_digits` is provided, this parameter is ignored. For more information, see [Answering Machine Detection](https://www.twilio.com/docs/voice/answering-machine-detection).
 * @property { number } [machineDetectionTimeout] The number of seconds that we should attempt to detect an answering machine before timing out and sending a voice request with `AnsweredBy` of `unknown`. The default timeout is 30 seconds.
 * @property { Array<string> } [recordingStatusCallbackEvent] The recording status events that will trigger calls to the URL specified in `recording_status_callback`. Can be: `in-progress`, `completed` and `absent`. Defaults to `completed`. Separate  multiple values with a space.
 * @property { string } [trim] Whether to trim any leading and trailing silence from the recording. Can be: `trim-silence` or `do-not-trim` and the default is `trim-silence`.
 * @property { string } [callerId] The phone number, SIP address, or Client identifier that made this call. Phone numbers are in [E.164 format](https://wwnw.twilio.com/docs/glossary/what-e164) (e.g., +16175551212). SIP addresses are formatted as `name@company.com`.
 * @property { number } [machineDetectionSpeechThreshold] The number of milliseconds that is used as the measuring stick for the length of the speech activity, where durations lower than this value will be interpreted as a human and longer than this value as a machine. Possible Values: 1000-6000. Default: 2400.
 * @property { number } [machineDetectionSpeechEndThreshold] The number of milliseconds of silence after speech activity at which point the speech activity is considered complete. Possible Values: 500-5000. Default: 1200.
 * @property { number } [machineDetectionSilenceTimeout] The number of milliseconds of initial silence after which an `unknown` AnsweredBy result will be returned. Possible Values: 2000-10000. Default: 5000.
 * @property { string } [asyncAmd] Select whether to perform answering machine detection in the background. Default, blocks the execution of the call until Answering Machine Detection is completed. Can be: `true` or `false`.
 * @property { string } [asyncAmdStatusCallback] The URL that we should call using the `async_amd_status_callback_method` to notify customer application whether the call was answered by human, machine or fax.
 * @property { string } [asyncAmdStatusCallbackMethod] The HTTP method we should use when calling the `async_amd_status_callback` URL. Can be: `GET` or `POST` and the default is `POST`.
 * @property { string } [byoc] The SID of a BYOC (Bring Your Own Carrier) trunk to route this call with. Note that `byoc` is only meaningful when `to` is a phone number; it will otherwise be ignored. (Beta)
 * @property { string } [callReason] The Reason for the outgoing call. Use it to specify the purpose of the call that is presented on the called party\\\'s phone. (Branded Calls Beta)
 * @property { string } [callToken] A token string needed to invoke a forwarded call. A call_token is generated when an incoming call is received on a Twilio number. Pass an incoming call\\\'s call_token value to a forwarded call via the call_token parameter when creating a new call. A forwarded call should bear the same CallerID of the original incoming call.
 * @property { string } [recordingTrack] The audio track to record for the call. Can be: `inbound`, `outbound` or `both`. The default is `both`. `inbound` records the audio that is received by Twilio. `outbound` records the audio that is generated from Twilio. `both` records the audio that is received and generated by Twilio.
 * @property { number } [timeLimit] The maximum duration of the call in seconds. Constraints depend on account and configuration.
 * @property { string } [url] The absolute URL that returns the TwiML instructions for the call. We will call this URL using the `method` when the call connects. For more information, see the [Url Parameter](https://www.twilio.com/docs/voice/make-calls#specify-a-url-parameter) section in [Making Calls](https://www.twilio.com/docs/voice/make-calls).
 * @property { string } [twiml] TwiML instructions for the call Twilio will use without fetching Twiml from url parameter. If both `twiml` and `url` are provided then `twiml` parameter will be ignored. Max 4000 characters.
 * @property { string } [applicationSid] The SID of the Application resource that will handle the call, if the call will be handled by an application.
 */
export interface CallListInstanceCreateOptions {
    to: string;
    from: string;
    method?: string;
    fallbackUrl?: string;
    fallbackMethod?: string;
    statusCallback?: string;
    statusCallbackEvent?: Array<string>;
    statusCallbackMethod?: string;
    sendDigits?: string;
    timeout?: number;
    record?: boolean;
    recordingChannels?: string;
    recordingStatusCallback?: string;
    recordingStatusCallbackMethod?: string;
    sipAuthUsername?: string;
    sipAuthPassword?: string;
    machineDetection?: string;
    machineDetectionTimeout?: number;
    recordingStatusCallbackEvent?: Array<string>;
    trim?: string;
    callerId?: string;
    machineDetectionSpeechThreshold?: number;
    machineDetectionSpeechEndThreshold?: number;
    machineDetectionSilenceTimeout?: number;
    asyncAmd?: string;
    asyncAmdStatusCallback?: string;
    asyncAmdStatusCallbackMethod?: string;
    byoc?: string;
    callReason?: string;
    callToken?: string;
    recordingTrack?: string;
    timeLimit?: number;
    url?: string;
    twiml?: string;
    applicationSid?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [to] Only show calls made to this phone number, SIP address, Client identifier or SIM SID.
 * @property { string } [from] Only include calls from this phone number, SIP address, Client identifier or SIM SID.
 * @property { string } [parentCallSid] Only include calls spawned by calls with this SID.
 * @property { CallStatus } [status] The status of the calls to include. Can be: `queued`, `ringing`, `in-progress`, `canceled`, `completed`, `failed`, `busy`, or `no-answer`.
 * @property { Date } [startTime] Only include calls that started on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that started on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read calls that started on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read calls that started on or after midnight of this date.
 * @property { Date } [startTimeBefore] Only include calls that started on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that started on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read calls that started on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read calls that started on or after midnight of this date.
 * @property { Date } [startTimeAfter] Only include calls that started on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that started on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read calls that started on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read calls that started on or after midnight of this date.
 * @property { Date } [endTime] Only include calls that ended on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that ended on this date. You can also specify an inequality, such as `EndTime<=YYYY-MM-DD`, to read calls that ended on or before midnight of this date, and `EndTime>=YYYY-MM-DD` to read calls that ended on or after midnight of this date.
 * @property { Date } [endTimeBefore] Only include calls that ended on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that ended on this date. You can also specify an inequality, such as `EndTime<=YYYY-MM-DD`, to read calls that ended on or before midnight of this date, and `EndTime>=YYYY-MM-DD` to read calls that ended on or after midnight of this date.
 * @property { Date } [endTimeAfter] Only include calls that ended on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that ended on this date. You can also specify an inequality, such as `EndTime<=YYYY-MM-DD`, to read calls that ended on or before midnight of this date, and `EndTime>=YYYY-MM-DD` to read calls that ended on or after midnight of this date.
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
export interface CallListInstanceEachOptions {
    to?: string;
    from?: string;
    parentCallSid?: string;
    status?: CallStatus;
    startTime?: Date;
    startTimeBefore?: Date;
    startTimeAfter?: Date;
    endTime?: Date;
    endTimeBefore?: Date;
    endTimeAfter?: Date;
    pageSize?: number;
    callback?: (item: CallInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [to] Only show calls made to this phone number, SIP address, Client identifier or SIM SID.
 * @property { string } [from] Only include calls from this phone number, SIP address, Client identifier or SIM SID.
 * @property { string } [parentCallSid] Only include calls spawned by calls with this SID.
 * @property { CallStatus } [status] The status of the calls to include. Can be: `queued`, `ringing`, `in-progress`, `canceled`, `completed`, `failed`, `busy`, or `no-answer`.
 * @property { Date } [startTime] Only include calls that started on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that started on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read calls that started on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read calls that started on or after midnight of this date.
 * @property { Date } [startTimeBefore] Only include calls that started on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that started on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read calls that started on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read calls that started on or after midnight of this date.
 * @property { Date } [startTimeAfter] Only include calls that started on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that started on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read calls that started on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read calls that started on or after midnight of this date.
 * @property { Date } [endTime] Only include calls that ended on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that ended on this date. You can also specify an inequality, such as `EndTime<=YYYY-MM-DD`, to read calls that ended on or before midnight of this date, and `EndTime>=YYYY-MM-DD` to read calls that ended on or after midnight of this date.
 * @property { Date } [endTimeBefore] Only include calls that ended on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that ended on this date. You can also specify an inequality, such as `EndTime<=YYYY-MM-DD`, to read calls that ended on or before midnight of this date, and `EndTime>=YYYY-MM-DD` to read calls that ended on or after midnight of this date.
 * @property { Date } [endTimeAfter] Only include calls that ended on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that ended on this date. You can also specify an inequality, such as `EndTime<=YYYY-MM-DD`, to read calls that ended on or before midnight of this date, and `EndTime>=YYYY-MM-DD` to read calls that ended on or after midnight of this date.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CallListInstanceOptions {
    to?: string;
    from?: string;
    parentCallSid?: string;
    status?: CallStatus;
    startTime?: Date;
    startTimeBefore?: Date;
    startTimeAfter?: Date;
    endTime?: Date;
    endTimeBefore?: Date;
    endTimeAfter?: Date;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [to] Only show calls made to this phone number, SIP address, Client identifier or SIM SID.
 * @property { string } [from] Only include calls from this phone number, SIP address, Client identifier or SIM SID.
 * @property { string } [parentCallSid] Only include calls spawned by calls with this SID.
 * @property { CallStatus } [status] The status of the calls to include. Can be: `queued`, `ringing`, `in-progress`, `canceled`, `completed`, `failed`, `busy`, or `no-answer`.
 * @property { Date } [startTime] Only include calls that started on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that started on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read calls that started on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read calls that started on or after midnight of this date.
 * @property { Date } [startTimeBefore] Only include calls that started on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that started on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read calls that started on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read calls that started on or after midnight of this date.
 * @property { Date } [startTimeAfter] Only include calls that started on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that started on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read calls that started on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read calls that started on or after midnight of this date.
 * @property { Date } [endTime] Only include calls that ended on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that ended on this date. You can also specify an inequality, such as `EndTime<=YYYY-MM-DD`, to read calls that ended on or before midnight of this date, and `EndTime>=YYYY-MM-DD` to read calls that ended on or after midnight of this date.
 * @property { Date } [endTimeBefore] Only include calls that ended on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that ended on this date. You can also specify an inequality, such as `EndTime<=YYYY-MM-DD`, to read calls that ended on or before midnight of this date, and `EndTime>=YYYY-MM-DD` to read calls that ended on or after midnight of this date.
 * @property { Date } [endTimeAfter] Only include calls that ended on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read only calls that ended on this date. You can also specify an inequality, such as `EndTime<=YYYY-MM-DD`, to read calls that ended on or before midnight of this date, and `EndTime>=YYYY-MM-DD` to read calls that ended on or after midnight of this date.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CallListInstancePageOptions {
    to?: string;
    from?: string;
    parentCallSid?: string;
    status?: CallStatus;
    startTime?: Date;
    startTimeBefore?: Date;
    startTimeAfter?: Date;
    endTime?: Date;
    endTimeBefore?: Date;
    endTimeAfter?: Date;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface CallContext {
    events: EventListInstance;
    feedback: FeedbackListInstance;
    notifications: NotificationListInstance;
    payments: PaymentListInstance;
    recordings: RecordingListInstance;
    siprec: SiprecListInstance;
    streams: StreamListInstance;
    userDefinedMessages: UserDefinedMessageListInstance;
    userDefinedMessageSubscriptions: UserDefinedMessageSubscriptionListInstance;
    /**
     * Remove a CallInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CallInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CallInstance
     */
    fetch(callback?: (error: Error | null, item?: CallInstance) => any): Promise<CallInstance>;
    /**
     * Update a CallInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CallInstance
     */
    update(callback?: (error: Error | null, item?: CallInstance) => any): Promise<CallInstance>;
    /**
     * Update a CallInstance
     *
     * @param { CallContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CallInstance
     */
    update(params: CallContextUpdateOptions, callback?: (error: Error | null, item?: CallInstance) => any): Promise<CallInstance>;
    update(params?: any, callback?: any): Promise<CallInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CallContextSolution {
    accountSid?: string;
    sid?: string;
}
export declare class CallContextImpl implements CallContext {
    protected _version: V2010;
    protected _solution: CallContextSolution;
    protected _uri: string;
    protected _events?: EventListInstance;
    protected _feedback?: FeedbackListInstance;
    protected _notifications?: NotificationListInstance;
    protected _payments?: PaymentListInstance;
    protected _recordings?: RecordingListInstance;
    protected _siprec?: SiprecListInstance;
    protected _streams?: StreamListInstance;
    protected _userDefinedMessages?: UserDefinedMessageListInstance;
    protected _userDefinedMessageSubscriptions?: UserDefinedMessageSubscriptionListInstance;
    constructor(_version: V2010, accountSid: string, sid: string);
    get events(): EventListInstance;
    get feedback(): FeedbackListInstance;
    get notifications(): NotificationListInstance;
    get payments(): PaymentListInstance;
    get recordings(): RecordingListInstance;
    get siprec(): SiprecListInstance;
    get streams(): StreamListInstance;
    get userDefinedMessages(): UserDefinedMessageListInstance;
    get userDefinedMessageSubscriptions(): UserDefinedMessageSubscriptionListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<CallInstance>;
    update(params?: any, callback?: any): Promise<CallInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): CallContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface CallPayload extends TwilioResponsePayload {
    calls: CallResource[];
}
interface CallResource {
    sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    parent_call_sid?: string | null;
    account_sid?: string | null;
    to?: string | null;
    to_formatted?: string | null;
    from?: string | null;
    from_formatted?: string | null;
    phone_number_sid?: string | null;
    status?: CallStatus;
    start_time?: Date | null;
    end_time?: Date | null;
    duration?: string | null;
    price?: string | null;
    price_unit?: string | null;
    direction?: string | null;
    answered_by?: string | null;
    api_version?: string | null;
    forwarded_from?: string | null;
    group_sid?: string | null;
    caller_name?: string | null;
    queue_time?: string | null;
    trunk_sid?: string | null;
    uri?: string | null;
    subresource_uris?: object | null;
}
export declare class CallInstance {
    protected _version: V2010;
    protected _solution: CallContextSolution;
    protected _context?: CallContext;
    constructor(_version: V2010, payload: CallResource, accountSid: string, sid?: string);
    /**
     * The unique string that identifies this resource
     */
    sid?: string | null;
    /**
     * The RFC 2822 date and time in GMT that this resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that this resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The SID that identifies the call that created this leg.
     */
    parentCallSid?: string | null;
    /**
     * The SID of the Account that created this resource
     */
    accountSid?: string | null;
    /**
     * The phone number, SIP address or Client identifier that received this call. Phone numbers are in E.164 format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`.
     */
    to?: string | null;
    /**
     * The phone number, SIP address or Client identifier that received this call. Formatted for display.
     */
    toFormatted?: string | null;
    /**
     * The phone number, SIP address or Client identifier that made this call. Phone numbers are in E.164 format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`.
     */
    from?: string | null;
    /**
     * The calling phone number, SIP address, or Client identifier formatted for display.
     */
    fromFormatted?: string | null;
    /**
     * If the call was inbound, this is the SID of the IncomingPhoneNumber resource that received the call. If the call was outbound, it is the SID of the OutgoingCallerId resource from which the call was placed.
     */
    phoneNumberSid?: string | null;
    status?: CallStatus;
    /**
     * The start time of the call. Null if the call has not yet been dialed.
     */
    startTime?: Date | null;
    /**
     * The end time of the call. Null if the call did not complete successfully.
     */
    endTime?: Date | null;
    /**
     * The length of the call in seconds.
     */
    duration?: string | null;
    /**
     * The charge for this call, in the currency associated with the account. Populated after the call is completed. May not be immediately available.
     */
    price?: string | null;
    /**
     * The currency in which `Price` is measured.
     */
    priceUnit?: string | null;
    /**
     * A string describing the direction of the call. `inbound` for inbound calls, `outbound-api` for calls initiated via the REST API or `outbound-dial` for calls initiated by a `Dial` verb.
     */
    direction?: string | null;
    /**
     * Either `human` or `machine` if this call was initiated with answering machine detection. Empty otherwise.
     */
    answeredBy?: string | null;
    /**
     * The API Version used to create the call
     */
    apiVersion?: string | null;
    /**
     * The forwarding phone number if this call was an incoming call forwarded from another number (depends on carrier supporting forwarding). Otherwise, empty.
     */
    forwardedFrom?: string | null;
    /**
     * The Group SID associated with this call. If no Group is associated with the call, the field is empty.
     */
    groupSid?: string | null;
    /**
     * The caller\'s name if this call was an incoming call to a phone number with caller ID Lookup enabled. Otherwise, empty.
     */
    callerName?: string | null;
    /**
     * The wait time in milliseconds before the call is placed.
     */
    queueTime?: string | null;
    /**
     * The (optional) unique identifier of the trunk resource that was used for this call.
     */
    trunkSid?: string | null;
    /**
     * The URI of this resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    /**
     * A list of related subresources identified by their relative URIs
     */
    subresourceUris?: object | null;
    private get _proxy();
    /**
     * Remove a CallInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CallInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CallInstance
     */
    fetch(callback?: (error: Error | null, item?: CallInstance) => any): Promise<CallInstance>;
    /**
     * Update a CallInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CallInstance
     */
    update(callback?: (error: Error | null, item?: CallInstance) => any): Promise<CallInstance>;
    /**
     * Update a CallInstance
     *
     * @param { CallContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CallInstance
     */
    update(params: CallContextUpdateOptions, callback?: (error: Error | null, item?: CallInstance) => any): Promise<CallInstance>;
    /**
     * Access the events.
     */
    events(): EventListInstance;
    /**
     * Access the feedback.
     */
    feedback(): FeedbackListInstance;
    /**
     * Access the notifications.
     */
    notifications(): NotificationListInstance;
    /**
     * Access the payments.
     */
    payments(): PaymentListInstance;
    /**
     * Access the recordings.
     */
    recordings(): RecordingListInstance;
    /**
     * Access the siprec.
     */
    siprec(): SiprecListInstance;
    /**
     * Access the streams.
     */
    streams(): StreamListInstance;
    /**
     * Access the userDefinedMessages.
     */
    userDefinedMessages(): UserDefinedMessageListInstance;
    /**
     * Access the userDefinedMessageSubscriptions.
     */
    userDefinedMessageSubscriptions(): UserDefinedMessageSubscriptionListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        parentCallSid: string | null | undefined;
        accountSid: string | null | undefined;
        to: string | null | undefined;
        toFormatted: string | null | undefined;
        from: string | null | undefined;
        fromFormatted: string | null | undefined;
        phoneNumberSid: string | null | undefined;
        status: CallStatus | undefined;
        startTime: Date | null | undefined;
        endTime: Date | null | undefined;
        duration: string | null | undefined;
        price: string | null | undefined;
        priceUnit: string | null | undefined;
        direction: string | null | undefined;
        answeredBy: string | null | undefined;
        apiVersion: string | null | undefined;
        forwardedFrom: string | null | undefined;
        groupSid: string | null | undefined;
        callerName: string | null | undefined;
        queueTime: string | null | undefined;
        trunkSid: string | null | undefined;
        uri: string | null | undefined;
        subresourceUris: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface CallListInstance {
    (sid: string): CallContext;
    get(sid: string): CallContext;
    feedbackSummaries: FeedbackSummaryListInstance;
    /**
     * Create a CallInstance
     *
     * @param { CallListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CallInstance
     */
    create(params: CallListInstanceCreateOptions, callback?: (error: Error | null, item?: CallInstance) => any): Promise<CallInstance>;
    create(params: any, callback?: any): Promise<CallInstance>;
    /**
     * Streams CallInstance records from the API.
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
    each(callback?: (item: CallInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams CallInstance records from the API.
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
     * @param { CallListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: CallListInstanceEachOptions, callback?: (item: CallInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of CallInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: CallPage) => any): Promise<CallPage>;
    /**
     * Retrieve a single target page of CallInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: CallPage) => any): Promise<CallPage>;
    getPage(params?: any, callback?: any): Promise<CallPage>;
    /**
     * Lists CallInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: CallInstance[]) => any): Promise<CallInstance[]>;
    /**
     * Lists CallInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CallListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: CallListInstanceOptions, callback?: (error: Error | null, items: CallInstance[]) => any): Promise<CallInstance[]>;
    list(params?: any, callback?: any): Promise<CallInstance[]>;
    /**
     * Retrieve a single page of CallInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: CallPage) => any): Promise<CallPage>;
    /**
     * Retrieve a single page of CallInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CallListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: CallListInstancePageOptions, callback?: (error: Error | null, items: CallPage) => any): Promise<CallPage>;
    page(params?: any, callback?: any): Promise<CallPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CallSolution {
    accountSid?: string;
}
export declare function CallListInstance(version: V2010, accountSid: string): CallListInstance;
export declare class CallPage extends Page<V2010, CallPayload, CallResource, CallInstance> {
    /**
     * Initialize the CallPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: CallSolution);
    /**
     * Build an instance of CallInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: CallResource): CallInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
