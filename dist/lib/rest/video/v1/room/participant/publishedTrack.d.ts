/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
declare type RoomParticipantPublishedTrackKind = "audio" | "video" | "data";
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
export interface PublishedTrackListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: PublishedTrackInstance, done: (err?: Error) => void) => void;
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
export interface PublishedTrackListInstanceOptions {
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
export interface PublishedTrackListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface PublishedTrackContext {
    /**
     * Fetch a PublishedTrackInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PublishedTrackInstance
     */
    fetch(callback?: (error: Error | null, item?: PublishedTrackInstance) => any): Promise<PublishedTrackInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PublishedTrackContextSolution {
    roomSid?: string;
    participantSid?: string;
    sid?: string;
}
export declare class PublishedTrackContextImpl implements PublishedTrackContext {
    protected _version: V1;
    protected _solution: PublishedTrackContextSolution;
    protected _uri: string;
    constructor(_version: V1, roomSid: string, participantSid: string, sid: string);
    fetch(callback?: any): Promise<PublishedTrackInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PublishedTrackContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PublishedTrackPayload extends TwilioResponsePayload {
    published_tracks: PublishedTrackResource[];
}
interface PublishedTrackResource {
    sid?: string | null;
    participant_sid?: string | null;
    room_sid?: string | null;
    name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    enabled?: boolean | null;
    kind?: RoomParticipantPublishedTrackKind;
    url?: string | null;
}
export declare class PublishedTrackInstance {
    protected _version: V1;
    protected _solution: PublishedTrackContextSolution;
    protected _context?: PublishedTrackContext;
    constructor(_version: V1, payload: PublishedTrackResource, roomSid: string, participantSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Participant resource with the published track
     */
    participantSid?: string | null;
    /**
     * The SID of the Room resource where the track is published
     */
    roomSid?: string | null;
    /**
     * The track name
     */
    name?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * Whether the track is enabled
     */
    enabled?: boolean | null;
    kind?: RoomParticipantPublishedTrackKind;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a PublishedTrackInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PublishedTrackInstance
     */
    fetch(callback?: (error: Error | null, item?: PublishedTrackInstance) => any): Promise<PublishedTrackInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        participantSid: string | null | undefined;
        roomSid: string | null | undefined;
        name: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        enabled: boolean | null | undefined;
        kind: RoomParticipantPublishedTrackKind | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PublishedTrackListInstance {
    (sid: string): PublishedTrackContext;
    get(sid: string): PublishedTrackContext;
    /**
     * Streams PublishedTrackInstance records from the API.
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
    each(callback?: (item: PublishedTrackInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams PublishedTrackInstance records from the API.
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
     * @param { PublishedTrackListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: PublishedTrackListInstanceEachOptions, callback?: (item: PublishedTrackInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of PublishedTrackInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: PublishedTrackPage) => any): Promise<PublishedTrackPage>;
    /**
     * Retrieve a single target page of PublishedTrackInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: PublishedTrackPage) => any): Promise<PublishedTrackPage>;
    getPage(params?: any, callback?: any): Promise<PublishedTrackPage>;
    /**
     * Lists PublishedTrackInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: PublishedTrackInstance[]) => any): Promise<PublishedTrackInstance[]>;
    /**
     * Lists PublishedTrackInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PublishedTrackListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: PublishedTrackListInstanceOptions, callback?: (error: Error | null, items: PublishedTrackInstance[]) => any): Promise<PublishedTrackInstance[]>;
    list(params?: any, callback?: any): Promise<PublishedTrackInstance[]>;
    /**
     * Retrieve a single page of PublishedTrackInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: PublishedTrackPage) => any): Promise<PublishedTrackPage>;
    /**
     * Retrieve a single page of PublishedTrackInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PublishedTrackListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: PublishedTrackListInstancePageOptions, callback?: (error: Error | null, items: PublishedTrackPage) => any): Promise<PublishedTrackPage>;
    page(params?: any, callback?: any): Promise<PublishedTrackPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PublishedTrackSolution {
    roomSid?: string;
    participantSid?: string;
}
export declare function PublishedTrackListInstance(version: V1, roomSid: string, participantSid: string): PublishedTrackListInstance;
export declare class PublishedTrackPage extends Page<V1, PublishedTrackPayload, PublishedTrackResource, PublishedTrackInstance> {
    /**
     * Initialize the PublishedTrackPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: PublishedTrackSolution);
    /**
     * Build an instance of PublishedTrackInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: PublishedTrackResource): PublishedTrackInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
