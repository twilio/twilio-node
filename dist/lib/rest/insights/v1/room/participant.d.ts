/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
declare type VideoParticipantSummaryCodec = "VP8" | "H264" | "VP9";
declare type VideoParticipantSummaryEdgeLocation = "ashburn" | "dublin" | "frankfurt" | "singapore" | "sydney" | "sao_paulo" | "roaming" | "umatilla" | "tokyo";
declare type VideoParticipantSummaryRoomStatus = "in_progress" | "completed";
declare type VideoParticipantSummaryTwilioRealm = "us1" | "us2" | "au1" | "br1" | "ie1" | "jp1" | "sg1" | "in1" | "de1" | "gll";
/**
 * Options to pass to each
 *
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
    pageSize?: number;
    callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ParticipantListInstanceOptions {
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ParticipantListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ParticipantContext {
    /**
     * Fetch a ParticipantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    fetch(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ParticipantContextSolution {
    roomSid?: string;
    participantSid?: string;
}
export declare class ParticipantContextImpl implements ParticipantContext {
    protected _version: V1;
    protected _solution: ParticipantContextSolution;
    protected _uri: string;
    constructor(_version: V1, roomSid: string, participantSid: string);
    fetch(callback?: any): Promise<ParticipantInstance>;
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
    participant_sid?: string | null;
    participant_identity?: string | null;
    join_time?: Date | null;
    leave_time?: Date | null;
    duration_sec?: number | null;
    account_sid?: string | null;
    room_sid?: string | null;
    status?: VideoParticipantSummaryRoomStatus;
    codecs?: Array<VideoParticipantSummaryCodec> | null;
    end_reason?: string | null;
    error_code?: number | null;
    error_code_url?: string | null;
    media_region?: VideoParticipantSummaryTwilioRealm;
    properties?: any | null;
    edge_location?: VideoParticipantSummaryEdgeLocation;
    publisher_info?: any | null;
    url?: string | null;
}
export declare class ParticipantInstance {
    protected _version: V1;
    protected _solution: ParticipantContextSolution;
    protected _context?: ParticipantContext;
    constructor(_version: V1, payload: ParticipantResource, roomSid: string, participantSid?: string);
    /**
     * Unique identifier for the participant.
     */
    participantSid?: string | null;
    /**
     * The application-defined string that uniquely identifies the participant within a Room.
     */
    participantIdentity?: string | null;
    /**
     * When the participant joined the room.
     */
    joinTime?: Date | null;
    /**
     * When the participant left the room
     */
    leaveTime?: Date | null;
    /**
     * Amount of time in seconds the participant was in the room.
     */
    durationSec?: number | null;
    /**
     * Account SID associated with the room.
     */
    accountSid?: string | null;
    /**
     * Unique identifier for the room.
     */
    roomSid?: string | null;
    status?: VideoParticipantSummaryRoomStatus;
    /**
     * Codecs detected from the participant.
     */
    codecs?: Array<VideoParticipantSummaryCodec> | null;
    /**
     * Reason the participant left the room.
     */
    endReason?: string | null;
    /**
     * Errors encountered by the participant.
     */
    errorCode?: number | null;
    /**
     * Twilio error code dictionary link.
     */
    errorCodeUrl?: string | null;
    mediaRegion?: VideoParticipantSummaryTwilioRealm;
    /**
     * Object containing information about the participant\'s data from the room.
     */
    properties?: any | null;
    edgeLocation?: VideoParticipantSummaryEdgeLocation;
    /**
     * Object containing information about the SDK name and version.
     */
    publisherInfo?: any | null;
    /**
     * URL of the participant resource.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a ParticipantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    fetch(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        participantSid: string | null | undefined;
        participantIdentity: string | null | undefined;
        joinTime: Date | null | undefined;
        leaveTime: Date | null | undefined;
        durationSec: number | null | undefined;
        accountSid: string | null | undefined;
        roomSid: string | null | undefined;
        status: VideoParticipantSummaryRoomStatus | undefined;
        codecs: VideoParticipantSummaryCodec[] | null | undefined;
        endReason: string | null | undefined;
        errorCode: number | null | undefined;
        errorCodeUrl: string | null | undefined;
        mediaRegion: VideoParticipantSummaryTwilioRealm | undefined;
        properties: any;
        edgeLocation: VideoParticipantSummaryEdgeLocation | undefined;
        publisherInfo: any;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ParticipantListInstance {
    (participantSid: string): ParticipantContext;
    get(participantSid: string): ParticipantContext;
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
    roomSid?: string;
}
export declare function ParticipantListInstance(version: V1, roomSid: string): ParticipantListInstance;
export declare class ParticipantPage extends Page<V1, ParticipantPayload, ParticipantResource, ParticipantInstance> {
    /**
     * Initialize the ParticipantPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ParticipantSolution);
    /**
     * Build an instance of ParticipantInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ParticipantResource): ParticipantInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
