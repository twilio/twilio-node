/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { ConferenceParticipantListInstance } from "./conference/conferenceParticipant";
declare type ConferenceConferenceEndReason = "last_participant_left" | "conference_ended_via_api" | "participant_with_end_conference_on_exit_left" | "last_participant_kicked" | "participant_with_end_conference_on_exit_kicked";
declare type ConferenceConferenceStatus = "in_progress" | "not_started" | "completed" | "summary_timeout";
declare type ConferenceProcessingState = "complete" | "in_progress" | "timeout";
declare type ConferenceRegion = "us1" | "au1" | "br1" | "ie1" | "jp1" | "sg1" | "de1";
declare type ConferenceTag = "invalid_requested_region" | "duplicate_identity" | "start_failure" | "region_configuration_issues" | "quality_warnings" | "participant_behavior_issues" | "high_packet_loss" | "high_jitter" | "high_latency" | "low_mos" | "detected_silence";
/**
 * Options to pass to each
 *
 * @property { string } [conferenceSid] The SID of the conference.
 * @property { string } [friendlyName] Custom label for the conference resource, up to 64 characters.
 * @property { string } [status] Conference status.
 * @property { string } [createdAfter] Conferences created after the provided timestamp specified in ISO 8601 format
 * @property { string } [createdBefore] Conferences created before the provided timestamp specified in ISO 8601 format.
 * @property { string } [mixerRegion] Twilio region where the conference media was mixed.
 * @property { string } [tags] Tags applied by Twilio for common potential configuration, quality, or performance issues.
 * @property { string } [subaccount] Account SID for the subaccount whose resources you wish to retrieve.
 * @property { string } [detectedIssues] Potential configuration, behavior, or performance issues detected during the conference.
 * @property { string } [endReason] Conference end reason; e.g. last participant left, modified by API, etc.
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
    conferenceSid?: string;
    friendlyName?: string;
    status?: string;
    createdAfter?: string;
    createdBefore?: string;
    mixerRegion?: string;
    tags?: string;
    subaccount?: string;
    detectedIssues?: string;
    endReason?: string;
    pageSize?: number;
    callback?: (item: ConferenceInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [conferenceSid] The SID of the conference.
 * @property { string } [friendlyName] Custom label for the conference resource, up to 64 characters.
 * @property { string } [status] Conference status.
 * @property { string } [createdAfter] Conferences created after the provided timestamp specified in ISO 8601 format
 * @property { string } [createdBefore] Conferences created before the provided timestamp specified in ISO 8601 format.
 * @property { string } [mixerRegion] Twilio region where the conference media was mixed.
 * @property { string } [tags] Tags applied by Twilio for common potential configuration, quality, or performance issues.
 * @property { string } [subaccount] Account SID for the subaccount whose resources you wish to retrieve.
 * @property { string } [detectedIssues] Potential configuration, behavior, or performance issues detected during the conference.
 * @property { string } [endReason] Conference end reason; e.g. last participant left, modified by API, etc.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ConferenceListInstanceOptions {
    conferenceSid?: string;
    friendlyName?: string;
    status?: string;
    createdAfter?: string;
    createdBefore?: string;
    mixerRegion?: string;
    tags?: string;
    subaccount?: string;
    detectedIssues?: string;
    endReason?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [conferenceSid] The SID of the conference.
 * @property { string } [friendlyName] Custom label for the conference resource, up to 64 characters.
 * @property { string } [status] Conference status.
 * @property { string } [createdAfter] Conferences created after the provided timestamp specified in ISO 8601 format
 * @property { string } [createdBefore] Conferences created before the provided timestamp specified in ISO 8601 format.
 * @property { string } [mixerRegion] Twilio region where the conference media was mixed.
 * @property { string } [tags] Tags applied by Twilio for common potential configuration, quality, or performance issues.
 * @property { string } [subaccount] Account SID for the subaccount whose resources you wish to retrieve.
 * @property { string } [detectedIssues] Potential configuration, behavior, or performance issues detected during the conference.
 * @property { string } [endReason] Conference end reason; e.g. last participant left, modified by API, etc.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ConferenceListInstancePageOptions {
    conferenceSid?: string;
    friendlyName?: string;
    status?: string;
    createdAfter?: string;
    createdBefore?: string;
    mixerRegion?: string;
    tags?: string;
    subaccount?: string;
    detectedIssues?: string;
    endReason?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ConferenceContext {
    conferenceParticipants: ConferenceParticipantListInstance;
    /**
     * Fetch a ConferenceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConferenceInstance
     */
    fetch(callback?: (error: Error | null, item?: ConferenceInstance) => any): Promise<ConferenceInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ConferenceContextSolution {
    conferenceSid?: string;
}
export declare class ConferenceContextImpl implements ConferenceContext {
    protected _version: V1;
    protected _solution: ConferenceContextSolution;
    protected _uri: string;
    protected _conferenceParticipants?: ConferenceParticipantListInstance;
    constructor(_version: V1, conferenceSid: string);
    get conferenceParticipants(): ConferenceParticipantListInstance;
    fetch(callback?: any): Promise<ConferenceInstance>;
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
    conference_sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    create_time?: Date | null;
    start_time?: Date | null;
    end_time?: Date | null;
    duration_seconds?: number | null;
    connect_duration_seconds?: number | null;
    status?: ConferenceConferenceStatus;
    max_participants?: number | null;
    max_concurrent_participants?: number | null;
    unique_participants?: number | null;
    end_reason?: ConferenceConferenceEndReason;
    ended_by?: string | null;
    mixer_region?: ConferenceRegion;
    mixer_region_requested?: ConferenceRegion;
    recording_enabled?: boolean | null;
    detected_issues?: any | null;
    tags?: Array<ConferenceTag> | null;
    tag_info?: any | null;
    processing_state?: ConferenceProcessingState;
    url?: string | null;
    links?: object | null;
}
export declare class ConferenceInstance {
    protected _version: V1;
    protected _solution: ConferenceContextSolution;
    protected _context?: ConferenceContext;
    constructor(_version: V1, payload: ConferenceResource, conferenceSid?: string);
    /**
     * Conference SID.
     */
    conferenceSid?: string | null;
    /**
     * Account SID.
     */
    accountSid?: string | null;
    /**
     * Custom label for the conference.
     */
    friendlyName?: string | null;
    /**
     * Conference creation date/time.
     */
    createTime?: Date | null;
    /**
     * Timestamp in ISO 8601 format when the conference started.
     */
    startTime?: Date | null;
    /**
     * Conference end date/time.
     */
    endTime?: Date | null;
    /**
     * Conference duration in seconds.
     */
    durationSeconds?: number | null;
    /**
     * Duration of the conference in seconds.
     */
    connectDurationSeconds?: number | null;
    status?: ConferenceConferenceStatus;
    /**
     * Max participants specified in config.
     */
    maxParticipants?: number | null;
    /**
     * Actual maximum concurrent participants.
     */
    maxConcurrentParticipants?: number | null;
    /**
     * Unique conference participants.
     */
    uniqueParticipants?: number | null;
    endReason?: ConferenceConferenceEndReason;
    /**
     * Call SID that ended the conference.
     */
    endedBy?: string | null;
    mixerRegion?: ConferenceRegion;
    mixerRegionRequested?: ConferenceRegion;
    /**
     * Boolean. Indicates whether recording was enabled.
     */
    recordingEnabled?: boolean | null;
    /**
     * Potential issues detected during the conference.
     */
    detectedIssues?: any | null;
    /**
     * Tags for detected conference conditions and participant behaviors.
     */
    tags?: Array<ConferenceTag> | null;
    /**
     * Object. Contains details about conference tags.
     */
    tagInfo?: any | null;
    processingState?: ConferenceProcessingState;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    /**
     * Nested resource URLs.
     */
    links?: object | null;
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
     * Access the conferenceParticipants.
     */
    conferenceParticipants(): ConferenceParticipantListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        conferenceSid: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        createTime: Date | null | undefined;
        startTime: Date | null | undefined;
        endTime: Date | null | undefined;
        durationSeconds: number | null | undefined;
        connectDurationSeconds: number | null | undefined;
        status: ConferenceConferenceStatus | undefined;
        maxParticipants: number | null | undefined;
        maxConcurrentParticipants: number | null | undefined;
        uniqueParticipants: number | null | undefined;
        endReason: ConferenceConferenceEndReason | undefined;
        endedBy: string | null | undefined;
        mixerRegion: ConferenceRegion | undefined;
        mixerRegionRequested: ConferenceRegion | undefined;
        recordingEnabled: boolean | null | undefined;
        detectedIssues: any;
        tags: ConferenceTag[] | null | undefined;
        tagInfo: any;
        processingState: ConferenceProcessingState | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ConferenceListInstance {
    (conferenceSid: string): ConferenceContext;
    get(conferenceSid: string): ConferenceContext;
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
}
export declare function ConferenceListInstance(version: V1): ConferenceListInstance;
export declare class ConferencePage extends Page<V1, ConferencePayload, ConferenceResource, ConferenceInstance> {
    /**
     * Initialize the ConferencePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ConferenceSolution);
    /**
     * Build an instance of ConferenceInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ConferenceResource): ConferenceInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
