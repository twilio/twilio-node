/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
/**
 * Options to pass to create a PlaybackGrantInstance
 *
 * @property { number } [ttl] The time to live of the PlaybackGrant. Default value is 15 seconds. Maximum value is 60 seconds.
 * @property { string } [accessControlAllowOrigin] The full origin URL where the livestream can be streamed. If this is not provided, it can be streamed from any domain.
 */
export interface PlaybackGrantContextCreateOptions {
    ttl?: number;
    accessControlAllowOrigin?: string;
}
export interface PlaybackGrantContext {
    /**
     * Create a PlaybackGrantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PlaybackGrantInstance
     */
    create(callback?: (error: Error | null, item?: PlaybackGrantInstance) => any): Promise<PlaybackGrantInstance>;
    /**
     * Create a PlaybackGrantInstance
     *
     * @param { PlaybackGrantContextCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PlaybackGrantInstance
     */
    create(params: PlaybackGrantContextCreateOptions, callback?: (error: Error | null, item?: PlaybackGrantInstance) => any): Promise<PlaybackGrantInstance>;
    create(params?: any, callback?: any): Promise<PlaybackGrantInstance>;
    /**
     * Fetch a PlaybackGrantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PlaybackGrantInstance
     */
    fetch(callback?: (error: Error | null, item?: PlaybackGrantInstance) => any): Promise<PlaybackGrantInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PlaybackGrantContextSolution {
    sid?: string;
}
export declare class PlaybackGrantContextImpl implements PlaybackGrantContext {
    protected _version: V1;
    protected _solution: PlaybackGrantContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    create(params?: any, callback?: any): Promise<PlaybackGrantInstance>;
    fetch(callback?: any): Promise<PlaybackGrantInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PlaybackGrantContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PlaybackGrantResource {
    sid?: string | null;
    url?: string | null;
    account_sid?: string | null;
    date_created?: Date | null;
    grant?: any | null;
}
export declare class PlaybackGrantInstance {
    protected _version: V1;
    protected _solution: PlaybackGrantContextSolution;
    protected _context?: PlaybackGrantContext;
    constructor(_version: V1, payload: PlaybackGrantResource, sid: string);
    /**
     * The unique string that identifies the PlayerStreamer associated with this PlaybackGrant.
     */
    sid?: string | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The grant that authorizes the player sdk to connect to the livestream
     */
    grant?: any | null;
    private get _proxy();
    /**
     * Create a PlaybackGrantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PlaybackGrantInstance
     */
    create(callback?: (error: Error | null, item?: PlaybackGrantInstance) => any): Promise<PlaybackGrantInstance>;
    /**
     * Create a PlaybackGrantInstance
     *
     * @param { PlaybackGrantContextCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PlaybackGrantInstance
     */
    create(params: PlaybackGrantContextCreateOptions, callback?: (error: Error | null, item?: PlaybackGrantInstance) => any): Promise<PlaybackGrantInstance>;
    /**
     * Fetch a PlaybackGrantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PlaybackGrantInstance
     */
    fetch(callback?: (error: Error | null, item?: PlaybackGrantInstance) => any): Promise<PlaybackGrantInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        url: string | null | undefined;
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        grant: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PlaybackGrantListInstance {
    (): PlaybackGrantContext;
    get(): PlaybackGrantContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PlaybackGrantSolution {
    sid?: string;
}
export declare function PlaybackGrantListInstance(version: V1, sid: string): PlaybackGrantListInstance;
export {};
