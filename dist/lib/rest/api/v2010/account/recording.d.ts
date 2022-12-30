/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
import { AddOnResultListInstance } from "./recording/addOnResult";
import { TranscriptionListInstance } from "./recording/transcription";
declare type RecordingSource = "DialVerb" | "Conference" | "OutboundAPI" | "Trunking" | "RecordVerb" | "StartCallRecordingAPI" | "StartConferenceRecordingAPI";
declare type RecordingStatus = "in-progress" | "paused" | "stopped" | "processing" | "completed" | "absent" | "deleted";
/**
 * Options to pass to fetch a RecordingInstance
 *
 * @property { boolean } [includeSoftDeleted] A boolean parameter indicating whether to retrieve soft deleted recordings or not. Recordings metadata are kept after deletion for a retention period of 40 days.
 */
export interface RecordingContextFetchOptions {
    includeSoftDeleted?: boolean;
}
/**
 * Options to pass to each
 *
 * @property { Date } [dateCreated] Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date.
 * @property { Date } [dateCreatedBefore] Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date.
 * @property { Date } [dateCreatedAfter] Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date.
 * @property { string } [callSid] The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resources to read.
 * @property { string } [conferenceSid] The Conference SID that identifies the conference associated with the recording to read.
 * @property { boolean } [includeSoftDeleted] A boolean parameter indicating whether to retrieve soft deleted recordings or not. Recordings metadata are kept after deletion for a retention period of 40 days.
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
export interface RecordingListInstanceEachOptions {
    dateCreated?: Date;
    dateCreatedBefore?: Date;
    dateCreatedAfter?: Date;
    callSid?: string;
    conferenceSid?: string;
    includeSoftDeleted?: boolean;
    pageSize?: number;
    callback?: (item: RecordingInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { Date } [dateCreated] Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date.
 * @property { Date } [dateCreatedBefore] Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date.
 * @property { Date } [dateCreatedAfter] Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date.
 * @property { string } [callSid] The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resources to read.
 * @property { string } [conferenceSid] The Conference SID that identifies the conference associated with the recording to read.
 * @property { boolean } [includeSoftDeleted] A boolean parameter indicating whether to retrieve soft deleted recordings or not. Recordings metadata are kept after deletion for a retention period of 40 days.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface RecordingListInstanceOptions {
    dateCreated?: Date;
    dateCreatedBefore?: Date;
    dateCreatedAfter?: Date;
    callSid?: string;
    conferenceSid?: string;
    includeSoftDeleted?: boolean;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { Date } [dateCreated] Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date.
 * @property { Date } [dateCreatedBefore] Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date.
 * @property { Date } [dateCreatedAfter] Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date.
 * @property { string } [callSid] The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resources to read.
 * @property { string } [conferenceSid] The Conference SID that identifies the conference associated with the recording to read.
 * @property { boolean } [includeSoftDeleted] A boolean parameter indicating whether to retrieve soft deleted recordings or not. Recordings metadata are kept after deletion for a retention period of 40 days.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface RecordingListInstancePageOptions {
    dateCreated?: Date;
    dateCreatedBefore?: Date;
    dateCreatedAfter?: Date;
    callSid?: string;
    conferenceSid?: string;
    includeSoftDeleted?: boolean;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface RecordingContext {
    addOnResults: AddOnResultListInstance;
    transcriptions: TranscriptionListInstance;
    /**
     * Remove a RecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a RecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingInstance
     */
    fetch(callback?: (error: Error | null, item?: RecordingInstance) => any): Promise<RecordingInstance>;
    /**
     * Fetch a RecordingInstance
     *
     * @param { RecordingContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingInstance
     */
    fetch(params: RecordingContextFetchOptions, callback?: (error: Error | null, item?: RecordingInstance) => any): Promise<RecordingInstance>;
    fetch(params?: any, callback?: any): Promise<RecordingInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RecordingContextSolution {
    accountSid?: string;
    sid?: string;
}
export declare class RecordingContextImpl implements RecordingContext {
    protected _version: V2010;
    protected _solution: RecordingContextSolution;
    protected _uri: string;
    protected _addOnResults?: AddOnResultListInstance;
    protected _transcriptions?: TranscriptionListInstance;
    constructor(_version: V2010, accountSid: string, sid: string);
    get addOnResults(): AddOnResultListInstance;
    get transcriptions(): TranscriptionListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(params?: any, callback?: any): Promise<RecordingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): RecordingContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface RecordingPayload extends TwilioResponsePayload {
    recordings: RecordingResource[];
}
interface RecordingResource {
    account_sid?: string | null;
    api_version?: string | null;
    call_sid?: string | null;
    conference_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    start_time?: Date | null;
    duration?: string | null;
    sid?: string | null;
    price?: string | null;
    price_unit?: string | null;
    status?: RecordingStatus;
    channels?: number | null;
    source?: RecordingSource;
    error_code?: number | null;
    uri?: string | null;
    encryption_details?: any | null;
    subresource_uris?: object | null;
    media_url?: string | null;
}
export declare class RecordingInstance {
    protected _version: V2010;
    protected _solution: RecordingContextSolution;
    protected _context?: RecordingContext;
    constructor(_version: V2010, payload: RecordingResource, accountSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The API version used during the recording.
     */
    apiVersion?: string | null;
    /**
     * The SID of the Call the resource is associated with
     */
    callSid?: string | null;
    /**
     * The unique ID for the conference associated with the recording.
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
     * The start time of the recording, given in RFC 2822 format
     */
    startTime?: Date | null;
    /**
     * The length of the recording in seconds.
     */
    duration?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The one-time cost of creating the recording.
     */
    price?: string | null;
    /**
     * The currency used in the price property.
     */
    priceUnit?: string | null;
    status?: RecordingStatus;
    /**
     * The number of channels in the final recording file as an integer.
     */
    channels?: number | null;
    source?: RecordingSource;
    /**
     * More information about why the recording is missing, if status is `absent`.
     */
    errorCode?: number | null;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    /**
     * How to decrypt the recording.
     */
    encryptionDetails?: any | null;
    /**
     * A list of related resources identified by their relative URIs
     */
    subresourceUris?: object | null;
    /**
     * The URL of the media file.
     */
    mediaUrl?: string | null;
    private get _proxy();
    /**
     * Remove a RecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a RecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingInstance
     */
    fetch(callback?: (error: Error | null, item?: RecordingInstance) => any): Promise<RecordingInstance>;
    /**
     * Fetch a RecordingInstance
     *
     * @param { RecordingContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingInstance
     */
    fetch(params: RecordingContextFetchOptions, callback?: (error: Error | null, item?: RecordingInstance) => any): Promise<RecordingInstance>;
    /**
     * Access the addOnResults.
     */
    addOnResults(): AddOnResultListInstance;
    /**
     * Access the transcriptions.
     */
    transcriptions(): TranscriptionListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        apiVersion: string | null | undefined;
        callSid: string | null | undefined;
        conferenceSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        startTime: Date | null | undefined;
        duration: string | null | undefined;
        sid: string | null | undefined;
        price: string | null | undefined;
        priceUnit: string | null | undefined;
        status: RecordingStatus | undefined;
        channels: number | null | undefined;
        source: RecordingSource | undefined;
        errorCode: number | null | undefined;
        uri: string | null | undefined;
        encryptionDetails: any;
        subresourceUris: object | null | undefined;
        mediaUrl: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface RecordingListInstance {
    (sid: string): RecordingContext;
    get(sid: string): RecordingContext;
    /**
     * Streams RecordingInstance records from the API.
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
    each(callback?: (item: RecordingInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams RecordingInstance records from the API.
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
     * @param { RecordingListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: RecordingListInstanceEachOptions, callback?: (item: RecordingInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of RecordingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
    /**
     * Retrieve a single target page of RecordingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
    getPage(params?: any, callback?: any): Promise<RecordingPage>;
    /**
     * Lists RecordingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: RecordingInstance[]) => any): Promise<RecordingInstance[]>;
    /**
     * Lists RecordingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RecordingListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: RecordingListInstanceOptions, callback?: (error: Error | null, items: RecordingInstance[]) => any): Promise<RecordingInstance[]>;
    list(params?: any, callback?: any): Promise<RecordingInstance[]>;
    /**
     * Retrieve a single page of RecordingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
    /**
     * Retrieve a single page of RecordingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RecordingListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: RecordingListInstancePageOptions, callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
    page(params?: any, callback?: any): Promise<RecordingPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RecordingSolution {
    accountSid?: string;
}
export declare function RecordingListInstance(version: V2010, accountSid: string): RecordingListInstance;
export declare class RecordingPage extends Page<V2010, RecordingPayload, RecordingResource, RecordingInstance> {
    /**
     * Initialize the RecordingPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: RecordingSolution);
    /**
     * Build an instance of RecordingInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: RecordingResource): RecordingInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
