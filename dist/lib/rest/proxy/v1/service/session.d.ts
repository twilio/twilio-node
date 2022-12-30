/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { InteractionListInstance } from "./session/interaction";
import { ParticipantListInstance } from "./session/participant";
declare type SessionMode = "message-only" | "voice-only" | "voice-and-message";
declare type SessionStatus = "open" | "in-progress" | "closed" | "failed" | "unknown";
/**
 * Options to pass to update a SessionInstance
 *
 * @property { Date } [dateExpiry] The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session should expire. If this is value is present, it overrides the `ttl` value.
 * @property { number } [ttl] The time, in seconds, when the session will expire. The time is measured from the last Session create or the Session\\\'s last Interaction.
 * @property { SessionStatus } [status]
 */
export interface SessionContextUpdateOptions {
    dateExpiry?: Date;
    ttl?: number;
    status?: SessionStatus;
}
/**
 * Options to pass to create a SessionInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. This value must be 191 characters or fewer in length and be unique. **This value should not have PII.**
 * @property { Date } [dateExpiry] The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session should expire. If this is value is present, it overrides the `ttl` value.
 * @property { number } [ttl] The time, in seconds, when the session will expire. The time is measured from the last Session create or the Session\\\'s last Interaction.
 * @property { SessionMode } [mode]
 * @property { SessionStatus } [status]
 * @property { Array<any> } [participants] The Participant objects to include in the new session.
 */
export interface SessionListInstanceCreateOptions {
    uniqueName?: string;
    dateExpiry?: Date;
    ttl?: number;
    mode?: SessionMode;
    status?: SessionStatus;
    participants?: Array<any>;
}
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
export interface SessionListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: SessionInstance, done: (err?: Error) => void) => void;
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
export interface SessionListInstanceOptions {
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
export interface SessionListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SessionContext {
    interactions: InteractionListInstance;
    participants: ParticipantListInstance;
    /**
     * Remove a SessionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SessionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SessionInstance
     */
    fetch(callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>;
    /**
     * Update a SessionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SessionInstance
     */
    update(callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>;
    /**
     * Update a SessionInstance
     *
     * @param { SessionContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SessionInstance
     */
    update(params: SessionContextUpdateOptions, callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>;
    update(params?: any, callback?: any): Promise<SessionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SessionContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class SessionContextImpl implements SessionContext {
    protected _version: V1;
    protected _solution: SessionContextSolution;
    protected _uri: string;
    protected _interactions?: InteractionListInstance;
    protected _participants?: ParticipantListInstance;
    constructor(_version: V1, serviceSid: string, sid: string);
    get interactions(): InteractionListInstance;
    get participants(): ParticipantListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<SessionInstance>;
    update(params?: any, callback?: any): Promise<SessionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SessionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SessionPayload extends TwilioResponsePayload {
    sessions: SessionResource[];
}
interface SessionResource {
    sid?: string | null;
    service_sid?: string | null;
    account_sid?: string | null;
    date_started?: Date | null;
    date_ended?: Date | null;
    date_last_interaction?: Date | null;
    date_expiry?: Date | null;
    unique_name?: string | null;
    status?: SessionStatus;
    closed_reason?: string | null;
    ttl?: number | null;
    mode?: SessionMode;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class SessionInstance {
    protected _version: V1;
    protected _solution: SessionContextSolution;
    protected _context?: SessionContext;
    constructor(_version: V1, payload: SessionResource, serviceSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the resource\'s parent Service
     */
    serviceSid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The ISO 8601 date when the Session started
     */
    dateStarted?: Date | null;
    /**
     * The ISO 8601 date when the Session ended
     */
    dateEnded?: Date | null;
    /**
     * The ISO 8601 date when the Session last had an interaction
     */
    dateLastInteraction?: Date | null;
    /**
     * The ISO 8601 date when the Session should expire
     */
    dateExpiry?: Date | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    status?: SessionStatus;
    /**
     * The reason the Session ended
     */
    closedReason?: string | null;
    /**
     * When the session will expire
     */
    ttl?: number | null;
    mode?: SessionMode;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the Session resource
     */
    url?: string | null;
    /**
     * The URLs of resources related to the Session
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a SessionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SessionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SessionInstance
     */
    fetch(callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>;
    /**
     * Update a SessionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SessionInstance
     */
    update(callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>;
    /**
     * Update a SessionInstance
     *
     * @param { SessionContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SessionInstance
     */
    update(params: SessionContextUpdateOptions, callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>;
    /**
     * Access the interactions.
     */
    interactions(): InteractionListInstance;
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
        sid: string | null | undefined;
        serviceSid: string | null | undefined;
        accountSid: string | null | undefined;
        dateStarted: Date | null | undefined;
        dateEnded: Date | null | undefined;
        dateLastInteraction: Date | null | undefined;
        dateExpiry: Date | null | undefined;
        uniqueName: string | null | undefined;
        status: SessionStatus | undefined;
        closedReason: string | null | undefined;
        ttl: number | null | undefined;
        mode: SessionMode | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SessionListInstance {
    (sid: string): SessionContext;
    get(sid: string): SessionContext;
    /**
     * Create a SessionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SessionInstance
     */
    create(callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>;
    /**
     * Create a SessionInstance
     *
     * @param { SessionListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SessionInstance
     */
    create(params: SessionListInstanceCreateOptions, callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>;
    create(params?: any, callback?: any): Promise<SessionInstance>;
    /**
     * Streams SessionInstance records from the API.
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
    each(callback?: (item: SessionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SessionInstance records from the API.
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
     * @param { SessionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SessionListInstanceEachOptions, callback?: (item: SessionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SessionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;
    /**
     * Retrieve a single target page of SessionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;
    getPage(params?: any, callback?: any): Promise<SessionPage>;
    /**
     * Lists SessionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SessionInstance[]) => any): Promise<SessionInstance[]>;
    /**
     * Lists SessionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SessionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SessionListInstanceOptions, callback?: (error: Error | null, items: SessionInstance[]) => any): Promise<SessionInstance[]>;
    list(params?: any, callback?: any): Promise<SessionInstance[]>;
    /**
     * Retrieve a single page of SessionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;
    /**
     * Retrieve a single page of SessionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SessionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SessionListInstancePageOptions, callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;
    page(params?: any, callback?: any): Promise<SessionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SessionSolution {
    serviceSid?: string;
}
export declare function SessionListInstance(version: V1, serviceSid: string): SessionListInstance;
export declare class SessionPage extends Page<V1, SessionPayload, SessionResource, SessionInstance> {
    /**
     * Initialize the SessionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SessionSolution);
    /**
     * Build an instance of SessionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SessionResource): SessionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
