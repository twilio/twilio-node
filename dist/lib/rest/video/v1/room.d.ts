/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { ParticipantListInstance } from "./room/participant";
import { RecordingRulesListInstance } from "./room/recordingRules";
import { RoomRecordingListInstance } from "./room/roomRecording";
declare type RoomRoomStatus = "in-progress" | "completed" | "failed";
declare type RoomRoomType = "go" | "peer-to-peer" | "group" | "group-small";
declare type RoomVideoCodec = "VP8" | "H264";
/**
 * Options to pass to update a RoomInstance
 *
 * @property { RoomRoomStatus } status
 */
export interface RoomContextUpdateOptions {
    status: RoomRoomStatus;
}
/**
 * Options to pass to create a RoomInstance
 *
 * @property { boolean } [enableTurn] Deprecated, now always considered to be true.
 * @property { RoomRoomType } [type]
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used as a `room_sid` in place of the resource\\\'s `sid` in the URL to address the resource, assuming it does not contain any [reserved characters](https://tools.ietf.org/html/rfc3986#section-2.2) that would need to be URL encoded. This value is unique for `in-progress` rooms. SDK clients can use this name to connect to the room. REST API clients can use this name in place of the Room SID to interact with the room as long as the room is `in-progress`.
 * @property { string } [statusCallback] The URL we should call using the `status_callback_method` to send status information to your application on every room event. See [Status Callbacks](https://www.twilio.com/docs/video/api/status-callbacks) for more info.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call `status_callback`. Can be `POST` or `GET`.
 * @property { number } [maxParticipants] The maximum number of concurrent Participants allowed in the room. Peer-to-peer rooms can have up to 10 Participants. Small Group rooms can have up to 4 Participants. Group rooms can have up to 50 Participants.
 * @property { boolean } [recordParticipantsOnConnect] Whether to start recording when Participants connect. ***This feature is not available in `peer-to-peer` rooms.***
 * @property { Array<RoomVideoCodec> } [videoCodecs] An array of the video codecs that are supported when publishing a track in the room.  Can be: `VP8` and `H264`.  ***This feature is not available in `peer-to-peer` rooms***
 * @property { string } [mediaRegion] The region for the media server in Group Rooms.  Can be: one of the [available Media Regions](https://www.twilio.com/docs/video/ip-address-whitelisting#group-rooms-media-servers). ***This feature is not available in `peer-to-peer` rooms.***
 * @property { any } [recordingRules] A collection of Recording Rules that describe how to include or exclude matching tracks for recording
 * @property { boolean } [audioOnly] When set to true, indicates that the participants in the room will only publish audio. No video tracks will be allowed. Group rooms only.
 * @property { number } [maxParticipantDuration] The maximum number of seconds a Participant can be connected to the room. The maximum possible value is 86400 seconds (24 hours). The default is 14400 seconds (4 hours).
 * @property { number } [emptyRoomTimeout] Configures how long (in minutes) a room will remain active after last participant leaves. Valid values range from 1 to 60 minutes (no fractions).
 * @property { number } [unusedRoomTimeout] Configures how long (in minutes) a room will remain active if no one joins. Valid values range from 1 to 60 minutes (no fractions).
 * @property { boolean } [largeRoom] When set to true, indicated that this is the large room.
 */
export interface RoomListInstanceCreateOptions {
    enableTurn?: boolean;
    type?: RoomRoomType;
    uniqueName?: string;
    statusCallback?: string;
    statusCallbackMethod?: string;
    maxParticipants?: number;
    recordParticipantsOnConnect?: boolean;
    videoCodecs?: Array<RoomVideoCodec>;
    mediaRegion?: string;
    recordingRules?: any;
    audioOnly?: boolean;
    maxParticipantDuration?: number;
    emptyRoomTimeout?: number;
    unusedRoomTimeout?: number;
    largeRoom?: boolean;
}
/**
 * Options to pass to each
 *
 * @property { RoomRoomStatus } [status] Read only the rooms with this status. Can be: `in-progress` (default) or `completed`
 * @property { string } [uniqueName] Read only rooms with the this `unique_name`.
 * @property { Date } [dateCreatedAfter] Read only rooms that started on or after this date, given as `YYYY-MM-DD`.
 * @property { Date } [dateCreatedBefore] Read only rooms that started before this date, given as `YYYY-MM-DD`.
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
    status?: RoomRoomStatus;
    uniqueName?: string;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    pageSize?: number;
    callback?: (item: RoomInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { RoomRoomStatus } [status] Read only the rooms with this status. Can be: `in-progress` (default) or `completed`
 * @property { string } [uniqueName] Read only rooms with the this `unique_name`.
 * @property { Date } [dateCreatedAfter] Read only rooms that started on or after this date, given as `YYYY-MM-DD`.
 * @property { Date } [dateCreatedBefore] Read only rooms that started before this date, given as `YYYY-MM-DD`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface RoomListInstanceOptions {
    status?: RoomRoomStatus;
    uniqueName?: string;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { RoomRoomStatus } [status] Read only the rooms with this status. Can be: `in-progress` (default) or `completed`
 * @property { string } [uniqueName] Read only rooms with the this `unique_name`.
 * @property { Date } [dateCreatedAfter] Read only rooms that started on or after this date, given as `YYYY-MM-DD`.
 * @property { Date } [dateCreatedBefore] Read only rooms that started before this date, given as `YYYY-MM-DD`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface RoomListInstancePageOptions {
    status?: RoomRoomStatus;
    uniqueName?: string;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface RoomContext {
    participants: ParticipantListInstance;
    recordingRules: RecordingRulesListInstance;
    recordings: RoomRecordingListInstance;
    /**
     * Fetch a RoomInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RoomInstance
     */
    fetch(callback?: (error: Error | null, item?: RoomInstance) => any): Promise<RoomInstance>;
    /**
     * Update a RoomInstance
     *
     * @param { RoomContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RoomInstance
     */
    update(params: RoomContextUpdateOptions, callback?: (error: Error | null, item?: RoomInstance) => any): Promise<RoomInstance>;
    update(params: any, callback?: any): Promise<RoomInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RoomContextSolution {
    sid?: string;
}
export declare class RoomContextImpl implements RoomContext {
    protected _version: V1;
    protected _solution: RoomContextSolution;
    protected _uri: string;
    protected _participants?: ParticipantListInstance;
    protected _recordingRules?: RecordingRulesListInstance;
    protected _recordings?: RoomRecordingListInstance;
    constructor(_version: V1, sid: string);
    get participants(): ParticipantListInstance;
    get recordingRules(): RecordingRulesListInstance;
    get recordings(): RoomRecordingListInstance;
    fetch(callback?: any): Promise<RoomInstance>;
    update(params: any, callback?: any): Promise<RoomInstance>;
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
    sid?: string | null;
    status?: RoomRoomStatus;
    date_created?: Date | null;
    date_updated?: Date | null;
    account_sid?: string | null;
    enable_turn?: boolean | null;
    unique_name?: string | null;
    status_callback?: string | null;
    status_callback_method?: RoomStatusCallbackMethod;
    end_time?: Date | null;
    duration?: number | null;
    type?: RoomRoomType;
    max_participants?: number | null;
    max_participant_duration?: number | null;
    max_concurrent_published_tracks?: number | null;
    record_participants_on_connect?: boolean | null;
    video_codecs?: Array<RoomVideoCodec> | null;
    media_region?: string | null;
    audio_only?: boolean | null;
    empty_room_timeout?: number | null;
    unused_room_timeout?: number | null;
    large_room?: boolean | null;
    url?: string | null;
    links?: object | null;
}
export declare class RoomInstance {
    protected _version: V1;
    protected _solution: RoomContextSolution;
    protected _context?: RoomContext;
    constructor(_version: V1, payload: RoomResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    status?: RoomRoomStatus;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * Enable Twilio\'s Network Traversal TURN service
     */
    enableTurn?: boolean | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The URL to send status information to your application
     */
    statusCallback?: string | null;
    /**
     * The HTTP method we use to call status_callback
     */
    statusCallbackMethod?: RoomStatusCallbackMethod;
    /**
     * The UTC end time of the room in UTC ISO 8601 format
     */
    endTime?: Date | null;
    /**
     * The duration of the room in seconds
     */
    duration?: number | null;
    type?: RoomRoomType;
    /**
     * The maximum number of concurrent Participants allowed in the room
     */
    maxParticipants?: number | null;
    /**
     * The maximum number of seconds a Participant can be connected to the room
     */
    maxParticipantDuration?: number | null;
    /**
     * The maximum number of published tracks allowed in the room at the same time
     */
    maxConcurrentPublishedTracks?: number | null;
    /**
     * Whether to start recording when Participants connect
     */
    recordParticipantsOnConnect?: boolean | null;
    /**
     * An array of the video codecs that are supported when publishing a track in the room
     */
    videoCodecs?: Array<RoomVideoCodec> | null;
    /**
     * The region for the media server in Group Rooms
     */
    mediaRegion?: string | null;
    /**
     * Indicates whether the room will only contain audio track participants for group rooms.
     */
    audioOnly?: boolean | null;
    /**
     * The time a room will remain active after last participant leaves.
     */
    emptyRoomTimeout?: number | null;
    /**
     * The time a room will remain active when no one joins.
     */
    unusedRoomTimeout?: number | null;
    /**
     * Indicates if this is a large room.
     */
    largeRoom?: boolean | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    /**
     * The URLs of related resources
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
     * Update a RoomInstance
     *
     * @param { RoomContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RoomInstance
     */
    update(params: RoomContextUpdateOptions, callback?: (error: Error | null, item?: RoomInstance) => any): Promise<RoomInstance>;
    /**
     * Access the participants.
     */
    participants(): ParticipantListInstance;
    /**
     * Access the recordingRules.
     */
    recordingRules(): RecordingRulesListInstance;
    /**
     * Access the recordings.
     */
    recordings(): RoomRecordingListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        status: RoomRoomStatus | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        accountSid: string | null | undefined;
        enableTurn: boolean | null | undefined;
        uniqueName: string | null | undefined;
        statusCallback: string | null | undefined;
        statusCallbackMethod: RoomStatusCallbackMethod | undefined;
        endTime: Date | null | undefined;
        duration: number | null | undefined;
        type: RoomRoomType | undefined;
        maxParticipants: number | null | undefined;
        maxParticipantDuration: number | null | undefined;
        maxConcurrentPublishedTracks: number | null | undefined;
        recordParticipantsOnConnect: boolean | null | undefined;
        videoCodecs: RoomVideoCodec[] | null | undefined;
        mediaRegion: string | null | undefined;
        audioOnly: boolean | null | undefined;
        emptyRoomTimeout: number | null | undefined;
        unusedRoomTimeout: number | null | undefined;
        largeRoom: boolean | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface RoomListInstance {
    (sid: string): RoomContext;
    get(sid: string): RoomContext;
    /**
     * Create a RoomInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RoomInstance
     */
    create(callback?: (error: Error | null, item?: RoomInstance) => any): Promise<RoomInstance>;
    /**
     * Create a RoomInstance
     *
     * @param { RoomListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RoomInstance
     */
    create(params: RoomListInstanceCreateOptions, callback?: (error: Error | null, item?: RoomInstance) => any): Promise<RoomInstance>;
    create(params?: any, callback?: any): Promise<RoomInstance>;
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
