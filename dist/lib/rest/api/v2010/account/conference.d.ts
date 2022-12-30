/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
import { ParticipantListInstance } from "./conference/participant";
import { RecordingListInstance } from "./conference/recording";
declare type ConferenceReasonConferenceEnded = "conference-ended-via-api" | "participant-with-end-conference-on-exit-left" | "participant-with-end-conference-on-exit-kicked" | "last-participant-kicked" | "last-participant-left";
declare type ConferenceStatus = "init" | "in-progress" | "completed";
declare type ConferenceUpdateStatus = "completed";
/**
 * Options to pass to update a ConferenceInstance
 *
 * @property { ConferenceUpdateStatus } [status]
 * @property { string } [announceUrl] The URL we should call to announce something into the conference. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs.
 * @property { string } [announceMethod] The HTTP method used to call `announce_url`. Can be: `GET` or `POST` and the default is `POST`
 */
export interface ConferenceContextUpdateOptions {
    status?: ConferenceUpdateStatus;
    announceUrl?: string;
    announceMethod?: string;
}
/**
 * Options to pass to each
 *
 * @property { Date } [dateCreated] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateCreatedBefore] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateCreatedAfter] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdated] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdatedBefore] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdatedAfter] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { string } [friendlyName] The string that identifies the Conference resources to read.
 * @property { ConferenceStatus } [status] The status of the resources to read. Can be: `init`, `in-progress`, or `completed`.
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
export interface ConferenceListInstanceEachOptions {
    dateCreated?: Date;
    dateCreatedBefore?: Date;
    dateCreatedAfter?: Date;
    dateUpdated?: Date;
    dateUpdatedBefore?: Date;
    dateUpdatedAfter?: Date;
    friendlyName?: string;
    status?: ConferenceStatus;
    pageSize?: number;
    callback?: (item: ConferenceInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { Date } [dateCreated] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateCreatedBefore] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateCreatedAfter] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdated] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdatedBefore] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdatedAfter] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { string } [friendlyName] The string that identifies the Conference resources to read.
 * @property { ConferenceStatus } [status] The status of the resources to read. Can be: `init`, `in-progress`, or `completed`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ConferenceListInstanceOptions {
    dateCreated?: Date;
    dateCreatedBefore?: Date;
    dateCreatedAfter?: Date;
    dateUpdated?: Date;
    dateUpdatedBefore?: Date;
    dateUpdatedAfter?: Date;
    friendlyName?: string;
    status?: ConferenceStatus;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { Date } [dateCreated] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateCreatedBefore] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateCreatedAfter] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdated] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdatedBefore] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { Date } [dateUpdatedAfter] The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
 * @property { string } [friendlyName] The string that identifies the Conference resources to read.
 * @property { ConferenceStatus } [status] The status of the resources to read. Can be: `init`, `in-progress`, or `completed`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ConferenceListInstancePageOptions {
    dateCreated?: Date;
    dateCreatedBefore?: Date;
    dateCreatedAfter?: Date;
    dateUpdated?: Date;
    dateUpdatedBefore?: Date;
    dateUpdatedAfter?: Date;
    friendlyName?: string;
    status?: ConferenceStatus;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ConferenceContext {
    participants: ParticipantListInstance;
    recordings: RecordingListInstance;
    /**
     * Fetch a ConferenceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConferenceInstance
     */
    fetch(callback?: (error: Error | null, item?: ConferenceInstance) => any): Promise<ConferenceInstance>;
    /**
     * Update a ConferenceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConferenceInstance
     */
    update(callback?: (error: Error | null, item?: ConferenceInstance) => any): Promise<ConferenceInstance>;
    /**
     * Update a ConferenceInstance
     *
     * @param { ConferenceContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConferenceInstance
     */
    update(params: ConferenceContextUpdateOptions, callback?: (error: Error | null, item?: ConferenceInstance) => any): Promise<ConferenceInstance>;
    update(params?: any, callback?: any): Promise<ConferenceInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ConferenceContextSolution {
    accountSid?: string;
    sid?: string;
}
export declare class ConferenceContextImpl implements ConferenceContext {
    protected _version: V2010;
    protected _solution: ConferenceContextSolution;
    protected _uri: string;
    protected _participants?: ParticipantListInstance;
    protected _recordings?: RecordingListInstance;
    constructor(_version: V2010, accountSid: string, sid: string);
    get participants(): ParticipantListInstance;
    get recordings(): RecordingListInstance;
    fetch(callback?: any): Promise<ConferenceInstance>;
    update(params?: any, callback?: any): Promise<ConferenceInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ConferenceContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ConferencePayload extends TwilioResponsePayload {
    conferences: ConferenceResource[];
}
interface ConferenceResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    api_version?: string | null;
    friendly_name?: string | null;
    region?: string | null;
    sid?: string | null;
    status?: ConferenceStatus;
    uri?: string | null;
    subresource_uris?: object | null;
    reason_conference_ended?: ConferenceReasonConferenceEnded;
    call_sid_ending_conference?: string | null;
}
export declare class ConferenceInstance {
    protected _version: V2010;
    protected _solution: ConferenceContextSolution;
    protected _context?: ConferenceContext;
    constructor(_version: V2010, payload: ConferenceResource, accountSid: string, sid?: string);
    /**
     * The SID of the Account that created this resource
     */
    accountSid?: string | null;
    /**
     * The RFC 2822 date and time in GMT that this resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that this resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The API version used to create this conference
     */
    apiVersion?: string | null;
    /**
     * A string that you assigned to describe this conference room
     */
    friendlyName?: string | null;
    /**
     * A string that represents the Twilio Region where the conference was mixed
     */
    region?: string | null;
    /**
     * The unique string that identifies this resource
     */
    sid?: string | null;
    status?: ConferenceStatus;
    /**
     * The URI of this resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    /**
     * A list of related resources identified by their relative URIs
     */
    subresourceUris?: object | null;
    reasonConferenceEnded?: ConferenceReasonConferenceEnded;
    /**
     * The call SID that caused the conference to end
     */
    callSidEndingConference?: string | null;
    private get _proxy();
    /**
     * Fetch a ConferenceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConferenceInstance
     */
    fetch(callback?: (error: Error | null, item?: ConferenceInstance) => any): Promise<ConferenceInstance>;
    /**
     * Update a ConferenceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConferenceInstance
     */
    update(callback?: (error: Error | null, item?: ConferenceInstance) => any): Promise<ConferenceInstance>;
    /**
     * Update a ConferenceInstance
     *
     * @param { ConferenceContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConferenceInstance
     */
    update(params: ConferenceContextUpdateOptions, callback?: (error: Error | null, item?: ConferenceInstance) => any): Promise<ConferenceInstance>;
    /**
     * Access the participants.
     */
    participants(): ParticipantListInstance;
    /**
     * Access the recordings.
     */
    recordings(): RecordingListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        apiVersion: string | null | undefined;
        friendlyName: string | null | undefined;
        region: string | null | undefined;
        sid: string | null | undefined;
        status: ConferenceStatus | undefined;
        uri: string | null | undefined;
        subresourceUris: object | null | undefined;
        reasonConferenceEnded: ConferenceReasonConferenceEnded | undefined;
        callSidEndingConference: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ConferenceListInstance {
    (sid: string): ConferenceContext;
    get(sid: string): ConferenceContext;
    /**
     * Streams ConferenceInstance records from the API.
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
    each(callback?: (item: ConferenceInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ConferenceInstance records from the API.
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
     * @param { ConferenceListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ConferenceListInstanceEachOptions, callback?: (item: ConferenceInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ConferenceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ConferencePage) => any): Promise<ConferencePage>;
    /**
     * Retrieve a single target page of ConferenceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ConferencePage) => any): Promise<ConferencePage>;
    getPage(params?: any, callback?: any): Promise<ConferencePage>;
    /**
     * Lists ConferenceInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ConferenceInstance[]) => any): Promise<ConferenceInstance[]>;
    /**
     * Lists ConferenceInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ConferenceListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ConferenceListInstanceOptions, callback?: (error: Error | null, items: ConferenceInstance[]) => any): Promise<ConferenceInstance[]>;
    list(params?: any, callback?: any): Promise<ConferenceInstance[]>;
    /**
     * Retrieve a single page of ConferenceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ConferencePage) => any): Promise<ConferencePage>;
    /**
     * Retrieve a single page of ConferenceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ConferenceListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ConferenceListInstancePageOptions, callback?: (error: Error | null, items: ConferencePage) => any): Promise<ConferencePage>;
    page(params?: any, callback?: any): Promise<ConferencePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ConferenceSolution {
    accountSid?: string;
}
export declare function ConferenceListInstance(version: V2010, accountSid: string): ConferenceListInstance;
export declare class ConferencePage extends Page<V2010, ConferencePayload, ConferenceResource, ConferenceInstance> {
    /**
     * Initialize the ConferencePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: ConferenceSolution);
    /**
     * Build an instance of ConferenceInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ConferenceResource): ConferenceInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
