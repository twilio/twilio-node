/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { ParticipantListInstance } from "./room/participant";
declare type VideoRoomSummaryCodec = "VP8" | "H264" | "VP9";
declare type VideoRoomSummaryCreatedMethod = "sdk" | "ad_hoc" | "api";
declare type VideoRoomSummaryEdgeLocation = "ashburn" | "dublin" | "frankfurt" | "singapore" | "sydney" | "sao_paulo" | "roaming" | "umatilla" | "tokyo";
declare type VideoRoomSummaryEndReason = "room_ended_via_api" | "timeout";
declare type VideoRoomSummaryProcessingState = "complete" | "in_progress";
declare type VideoRoomSummaryRoomStatus = "in_progress" | "completed";
declare type VideoRoomSummaryRoomType = "go" | "peer_to_peer" | "group" | "group_small";
declare type VideoRoomSummaryTwilioRealm = "us1" | "us2" | "au1" | "br1" | "ie1" | "jp1" | "sg1" | "in1" | "de1" | "gll";
/**
 * Options to pass to each
 *
 * @property { Array<VideoRoomSummaryRoomType> } [roomType] Type of room. Can be `go`, `peer_to_peer`, `group`, or `group_small`.
 * @property { Array<VideoRoomSummaryCodec> } [codec] Codecs used by participants in the room. Can be `VP8`, `H264`, or `VP9`.
 * @property { string } [roomName] Room friendly name.
 * @property { Date } [createdAfter] Only read rooms that started on or after this ISO 8601 timestamp.
 * @property { Date } [createdBefore] Only read rooms that started before this ISO 8601 timestamp.
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
export interface RoomListInstanceEachOptions {
    roomType?: Array<VideoRoomSummaryRoomType>;
    codec?: Array<VideoRoomSummaryCodec>;
    roomName?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    pageSize?: number;
    callback?: (item: RoomInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { Array<VideoRoomSummaryRoomType> } [roomType] Type of room. Can be `go`, `peer_to_peer`, `group`, or `group_small`.
 * @property { Array<VideoRoomSummaryCodec> } [codec] Codecs used by participants in the room. Can be `VP8`, `H264`, or `VP9`.
 * @property { string } [roomName] Room friendly name.
 * @property { Date } [createdAfter] Only read rooms that started on or after this ISO 8601 timestamp.
 * @property { Date } [createdBefore] Only read rooms that started before this ISO 8601 timestamp.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface RoomListInstanceOptions {
    roomType?: Array<VideoRoomSummaryRoomType>;
    codec?: Array<VideoRoomSummaryCodec>;
    roomName?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { Array<VideoRoomSummaryRoomType> } [roomType] Type of room. Can be `go`, `peer_to_peer`, `group`, or `group_small`.
 * @property { Array<VideoRoomSummaryCodec> } [codec] Codecs used by participants in the room. Can be `VP8`, `H264`, or `VP9`.
 * @property { string } [roomName] Room friendly name.
 * @property { Date } [createdAfter] Only read rooms that started on or after this ISO 8601 timestamp.
 * @property { Date } [createdBefore] Only read rooms that started before this ISO 8601 timestamp.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface RoomListInstancePageOptions {
    roomType?: Array<VideoRoomSummaryRoomType>;
    codec?: Array<VideoRoomSummaryCodec>;
    roomName?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface RoomContext {
    participants: ParticipantListInstance;
    /**
     * Fetch a RoomInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RoomInstance
     */
    fetch(callback?: (error: Error | null, item?: RoomInstance) => any): Promise<RoomInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RoomContextSolution {
    roomSid?: string;
}
export declare class RoomContextImpl implements RoomContext {
    protected _version: V1;
    protected _solution: RoomContextSolution;
    protected _uri: string;
    protected _participants?: ParticipantListInstance;
    constructor(_version: V1, roomSid: string);
    get participants(): ParticipantListInstance;
    fetch(callback?: any): Promise<RoomInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): RoomContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type RoomStatusCallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface RoomPayload extends TwilioResponsePayload {
    rooms: RoomResource[];
}
interface RoomResource {
    account_sid?: string | null;
    room_sid?: string | null;
    room_name?: string | null;
    create_time?: Date | null;
    end_time?: Date | null;
    room_type?: VideoRoomSummaryRoomType;
    room_status?: VideoRoomSummaryRoomStatus;
    status_callback?: string | null;
    status_callback_method?: RoomStatusCallbackMethod;
    created_method?: VideoRoomSummaryCreatedMethod;
    end_reason?: VideoRoomSummaryEndReason;
    max_participants?: number | null;
    unique_participants?: number | null;
    unique_participant_identities?: number | null;
    concurrent_participants?: number | null;
    max_concurrent_participants?: number | null;
    codecs?: Array<VideoRoomSummaryCodec> | null;
    media_region?: VideoRoomSummaryTwilioRealm;
    duration_sec?: number | null;
    total_participant_duration_sec?: number | null;
    total_recording_duration_sec?: number | null;
    processing_state?: VideoRoomSummaryProcessingState;
    recording_enabled?: boolean | null;
    edge_location?: VideoRoomSummaryEdgeLocation;
    url?: string | null;
    links?: object | null;
}
export declare class RoomInstance {
    protected _version: V1;
    protected _solution: RoomContextSolution;
    protected _context?: RoomContext;
    constructor(_version: V1, payload: RoomResource, roomSid?: string);
    /**
     * Account SID associated with this room.
     */
    accountSid?: string | null;
    /**
     * Unique identifier for the room.
     */
    roomSid?: string | null;
    /**
     * room friendly name.
     */
    roomName?: string | null;
    /**
     * Creation time of the room.
     */
    createTime?: Date | null;
    /**
     * End time for the room.
     */
    endTime?: Date | null;
    roomType?: VideoRoomSummaryRoomType;
    roomStatus?: VideoRoomSummaryRoomStatus;
    /**
     * Webhook provided for status callbacks.
     */
    statusCallback?: string | null;
    /**
     * HTTP method provided for status callback URL.
     */
    statusCallbackMethod?: RoomStatusCallbackMethod;
    createdMethod?: VideoRoomSummaryCreatedMethod;
    endReason?: VideoRoomSummaryEndReason;
    /**
     * Max number of total participants allowed by the application settings.
     */
    maxParticipants?: number | null;
    /**
     * Number of participants. May include duplicate identities for participants who left and rejoined.
     */
    uniqueParticipants?: number | null;
    /**
     * Unique number of participant identities.
     */
    uniqueParticipantIdentities?: number | null;
    /**
     * Actual number of concurrent participants.
     */
    concurrentParticipants?: number | null;
    /**
     * Maximum number of participants allowed in the room at the same time allowed by the application settings.
     */
    maxConcurrentParticipants?: number | null;
    /**
     * Codecs used by participants in the room.
     */
    codecs?: Array<VideoRoomSummaryCodec> | null;
    mediaRegion?: VideoRoomSummaryTwilioRealm;
    /**
     * Total room duration from create time to end time.
     */
    durationSec?: number | null;
    /**
     * Combined amount of participant time in the room.
     */
    totalParticipantDurationSec?: number | null;
    /**
     * Combined amount of recorded seconds for participants in the room.
     */
    totalRecordingDurationSec?: number | null;
    processingState?: VideoRoomSummaryProcessingState;
    /**
     * Boolean indicating if recording is enabled for the room.
     */
    recordingEnabled?: boolean | null;
    edgeLocation?: VideoRoomSummaryEdgeLocation;
    /**
     * URL for the room resource.
     */
    url?: string | null;
    /**
     * Room subresources.
     */
    links?: object | null;
    private get _proxy();
    /**
     * Fetch a RoomInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RoomInstance
     */
    fetch(callback?: (error: Error | null, item?: RoomInstance) => any): Promise<RoomInstance>;
    /**
     * Access the participants.
     */
    participants(): ParticipantListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        roomSid: string | null | undefined;
        roomName: string | null | undefined;
        createTime: Date | null | undefined;
        endTime: Date | null | undefined;
        roomType: VideoRoomSummaryRoomType | undefined;
        roomStatus: VideoRoomSummaryRoomStatus | undefined;
        statusCallback: string | null | undefined;
        statusCallbackMethod: RoomStatusCallbackMethod | undefined;
        createdMethod: VideoRoomSummaryCreatedMethod | undefined;
        endReason: VideoRoomSummaryEndReason | undefined;
        maxParticipants: number | null | undefined;
        uniqueParticipants: number | null | undefined;
        uniqueParticipantIdentities: number | null | undefined;
        concurrentParticipants: number | null | undefined;
        maxConcurrentParticipants: number | null | undefined;
        codecs: VideoRoomSummaryCodec[] | null | undefined;
        mediaRegion: VideoRoomSummaryTwilioRealm | undefined;
        durationSec: number | null | undefined;
        totalParticipantDurationSec: number | null | undefined;
        totalRecordingDurationSec: number | null | undefined;
        processingState: VideoRoomSummaryProcessingState | undefined;
        recordingEnabled: boolean | null | undefined;
        edgeLocation: VideoRoomSummaryEdgeLocation | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface RoomListInstance {
    (roomSid: string): RoomContext;
    get(roomSid: string): RoomContext;
    /**
     * Streams RoomInstance records from the API.
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
    each(callback?: (item: RoomInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams RoomInstance records from the API.
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
     * @param { RoomListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: RoomListInstanceEachOptions, callback?: (item: RoomInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of RoomInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: RoomPage) => any): Promise<RoomPage>;
    /**
     * Retrieve a single target page of RoomInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: RoomPage) => any): Promise<RoomPage>;
    getPage(params?: any, callback?: any): Promise<RoomPage>;
    /**
     * Lists RoomInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: RoomInstance[]) => any): Promise<RoomInstance[]>;
    /**
     * Lists RoomInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RoomListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: RoomListInstanceOptions, callback?: (error: Error | null, items: RoomInstance[]) => any): Promise<RoomInstance[]>;
    list(params?: any, callback?: any): Promise<RoomInstance[]>;
    /**
     * Retrieve a single page of RoomInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: RoomPage) => any): Promise<RoomPage>;
    /**
     * Retrieve a single page of RoomInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RoomListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: RoomListInstancePageOptions, callback?: (error: Error | null, items: RoomPage) => any): Promise<RoomPage>;
    page(params?: any, callback?: any): Promise<RoomPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RoomSolution {
}
export declare function RoomListInstance(version: V1): RoomListInstance;
export declare class RoomPage extends Page<V1, RoomPayload, RoomResource, RoomInstance> {
    /**
     * Initialize the RoomPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: RoomSolution);
    /**
     * Build an instance of RoomInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: RoomResource): RoomInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
