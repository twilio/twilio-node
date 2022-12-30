/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
declare type RoomParticipantSubscribedTrackKind = "audio" | "video" | "data";
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
export interface SubscribedTrackListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: SubscribedTrackInstance, done: (err?: Error) => void) => void;
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
export interface SubscribedTrackListInstanceOptions {
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
export interface SubscribedTrackListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SubscribedTrackContext {
    /**
     * Fetch a SubscribedTrackInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscribedTrackInstance
     */
    fetch(callback?: (error: Error | null, item?: SubscribedTrackInstance) => any): Promise<SubscribedTrackInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SubscribedTrackContextSolution {
    roomSid?: string;
    participantSid?: string;
    sid?: string;
}
export declare class SubscribedTrackContextImpl implements SubscribedTrackContext {
    protected _version: V1;
    protected _solution: SubscribedTrackContextSolution;
    protected _uri: string;
    constructor(_version: V1, roomSid: string, participantSid: string, sid: string);
    fetch(callback?: any): Promise<SubscribedTrackInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SubscribedTrackContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SubscribedTrackPayload extends TwilioResponsePayload {
    subscribed_tracks: SubscribedTrackResource[];
}
interface SubscribedTrackResource {
    sid?: string | null;
    participant_sid?: string | null;
    publisher_sid?: string | null;
    room_sid?: string | null;
    name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    enabled?: boolean | null;
    kind?: RoomParticipantSubscribedTrackKind;
    url?: string | null;
}
export declare class SubscribedTrackInstance {
    protected _version: V1;
    protected _solution: SubscribedTrackContextSolution;
    protected _context?: SubscribedTrackContext;
    constructor(_version: V1, payload: SubscribedTrackResource, roomSid: string, participantSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the participant that subscribes to the track
     */
    participantSid?: string | null;
    /**
     * The SID of the participant that publishes the track
     */
    publisherSid?: string | null;
    /**
     * The SID of the room where the track is published
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
    kind?: RoomParticipantSubscribedTrackKind;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a SubscribedTrackInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscribedTrackInstance
     */
    fetch(callback?: (error: Error | null, item?: SubscribedTrackInstance) => any): Promise<SubscribedTrackInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        participantSid: string | null | undefined;
        publisherSid: string | null | undefined;
        roomSid: string | null | undefined;
        name: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        enabled: boolean | null | undefined;
        kind: RoomParticipantSubscribedTrackKind | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SubscribedTrackListInstance {
    (sid: string): SubscribedTrackContext;
    get(sid: string): SubscribedTrackContext;
    /**
     * Streams SubscribedTrackInstance records from the API.
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
    each(callback?: (item: SubscribedTrackInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SubscribedTrackInstance records from the API.
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
     * @param { SubscribedTrackListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SubscribedTrackListInstanceEachOptions, callback?: (item: SubscribedTrackInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SubscribedTrackInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SubscribedTrackPage) => any): Promise<SubscribedTrackPage>;
    /**
     * Retrieve a single target page of SubscribedTrackInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SubscribedTrackPage) => any): Promise<SubscribedTrackPage>;
    getPage(params?: any, callback?: any): Promise<SubscribedTrackPage>;
    /**
     * Lists SubscribedTrackInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SubscribedTrackInstance[]) => any): Promise<SubscribedTrackInstance[]>;
    /**
     * Lists SubscribedTrackInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SubscribedTrackListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SubscribedTrackListInstanceOptions, callback?: (error: Error | null, items: SubscribedTrackInstance[]) => any): Promise<SubscribedTrackInstance[]>;
    list(params?: any, callback?: any): Promise<SubscribedTrackInstance[]>;
    /**
     * Retrieve a single page of SubscribedTrackInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SubscribedTrackPage) => any): Promise<SubscribedTrackPage>;
    /**
     * Retrieve a single page of SubscribedTrackInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SubscribedTrackListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SubscribedTrackListInstancePageOptions, callback?: (error: Error | null, items: SubscribedTrackPage) => any): Promise<SubscribedTrackPage>;
    page(params?: any, callback?: any): Promise<SubscribedTrackPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SubscribedTrackSolution {
    roomSid?: string;
    participantSid?: string;
}
export declare function SubscribedTrackListInstance(version: V1, roomSid: string, participantSid: string): SubscribedTrackListInstance;
export declare class SubscribedTrackPage extends Page<V1, SubscribedTrackPayload, SubscribedTrackResource, SubscribedTrackInstance> {
    /**
     * Initialize the SubscribedTrackPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SubscribedTrackSolution);
    /**
     * Build an instance of SubscribedTrackInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SubscribedTrackResource): SubscribedTrackInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
