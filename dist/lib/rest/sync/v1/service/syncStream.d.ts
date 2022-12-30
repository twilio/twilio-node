/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { StreamMessageListInstance } from "./syncStream/streamMessage";
/**
 * Options to pass to update a SyncStreamInstance
 *
 * @property { number } [ttl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Stream expires and is deleted (time-to-live).
 */
export interface SyncStreamContextUpdateOptions {
    ttl?: number;
}
/**
 * Options to pass to create a SyncStreamInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. This value must be unique within its Service and it can be up to 320 characters long. The `unique_name` value can be used as an alternative to the `sid` in the URL path to address the resource.
 * @property { number } [ttl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Stream expires and is deleted (time-to-live).
 */
export interface SyncStreamListInstanceCreateOptions {
    uniqueName?: string;
    ttl?: number;
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
export interface SyncStreamListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: SyncStreamInstance, done: (err?: Error) => void) => void;
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
export interface SyncStreamListInstanceOptions {
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
export interface SyncStreamListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SyncStreamContext {
    streamMessages: StreamMessageListInstance;
    /**
     * Remove a SyncStreamInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SyncStreamInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncStreamInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncStreamInstance) => any): Promise<SyncStreamInstance>;
    /**
     * Update a SyncStreamInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncStreamInstance
     */
    update(callback?: (error: Error | null, item?: SyncStreamInstance) => any): Promise<SyncStreamInstance>;
    /**
     * Update a SyncStreamInstance
     *
     * @param { SyncStreamContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncStreamInstance
     */
    update(params: SyncStreamContextUpdateOptions, callback?: (error: Error | null, item?: SyncStreamInstance) => any): Promise<SyncStreamInstance>;
    update(params?: any, callback?: any): Promise<SyncStreamInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SyncStreamContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class SyncStreamContextImpl implements SyncStreamContext {
    protected _version: V1;
    protected _solution: SyncStreamContextSolution;
    protected _uri: string;
    protected _streamMessages?: StreamMessageListInstance;
    constructor(_version: V1, serviceSid: string, sid: string);
    get streamMessages(): StreamMessageListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<SyncStreamInstance>;
    update(params?: any, callback?: any): Promise<SyncStreamInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SyncStreamContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SyncStreamPayload extends TwilioResponsePayload {
    streams: SyncStreamResource[];
}
interface SyncStreamResource {
    sid?: string | null;
    unique_name?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    url?: string | null;
    links?: object | null;
    date_expires?: Date | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    created_by?: string | null;
}
export declare class SyncStreamInstance {
    protected _version: V1;
    protected _solution: SyncStreamContextSolution;
    protected _context?: SyncStreamContext;
    constructor(_version: V1, payload: SyncStreamResource, serviceSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Sync Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The absolute URL of the Message Stream resource
     */
    url?: string | null;
    /**
     * The URLs of the Stream\'s nested resources
     */
    links?: object | null;
    /**
     * The ISO 8601 date and time in GMT when the Message Stream expires
     */
    dateExpires?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The Identity of the Stream\'s creator
     */
    createdBy?: string | null;
    private get _proxy();
    /**
     * Remove a SyncStreamInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SyncStreamInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncStreamInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncStreamInstance) => any): Promise<SyncStreamInstance>;
    /**
     * Update a SyncStreamInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncStreamInstance
     */
    update(callback?: (error: Error | null, item?: SyncStreamInstance) => any): Promise<SyncStreamInstance>;
    /**
     * Update a SyncStreamInstance
     *
     * @param { SyncStreamContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncStreamInstance
     */
    update(params: SyncStreamContextUpdateOptions, callback?: (error: Error | null, item?: SyncStreamInstance) => any): Promise<SyncStreamInstance>;
    /**
     * Access the streamMessages.
     */
    streamMessages(): StreamMessageListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        uniqueName: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
        dateExpires: Date | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        createdBy: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SyncStreamListInstance {
    (sid: string): SyncStreamContext;
    get(sid: string): SyncStreamContext;
    /**
     * Create a SyncStreamInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncStreamInstance
     */
    create(callback?: (error: Error | null, item?: SyncStreamInstance) => any): Promise<SyncStreamInstance>;
    /**
     * Create a SyncStreamInstance
     *
     * @param { SyncStreamListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncStreamInstance
     */
    create(params: SyncStreamListInstanceCreateOptions, callback?: (error: Error | null, item?: SyncStreamInstance) => any): Promise<SyncStreamInstance>;
    create(params?: any, callback?: any): Promise<SyncStreamInstance>;
    /**
     * Streams SyncStreamInstance records from the API.
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
    each(callback?: (item: SyncStreamInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SyncStreamInstance records from the API.
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
     * @param { SyncStreamListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SyncStreamListInstanceEachOptions, callback?: (item: SyncStreamInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SyncStreamInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SyncStreamPage) => any): Promise<SyncStreamPage>;
    /**
     * Retrieve a single target page of SyncStreamInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncStreamPage) => any): Promise<SyncStreamPage>;
    getPage(params?: any, callback?: any): Promise<SyncStreamPage>;
    /**
     * Lists SyncStreamInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SyncStreamInstance[]) => any): Promise<SyncStreamInstance[]>;
    /**
     * Lists SyncStreamInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncStreamListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SyncStreamListInstanceOptions, callback?: (error: Error | null, items: SyncStreamInstance[]) => any): Promise<SyncStreamInstance[]>;
    list(params?: any, callback?: any): Promise<SyncStreamInstance[]>;
    /**
     * Retrieve a single page of SyncStreamInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SyncStreamPage) => any): Promise<SyncStreamPage>;
    /**
     * Retrieve a single page of SyncStreamInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncStreamListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SyncStreamListInstancePageOptions, callback?: (error: Error | null, items: SyncStreamPage) => any): Promise<SyncStreamPage>;
    page(params?: any, callback?: any): Promise<SyncStreamPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SyncStreamSolution {
    serviceSid?: string;
}
export declare function SyncStreamListInstance(version: V1, serviceSid: string): SyncStreamListInstance;
export declare class SyncStreamPage extends Page<V1, SyncStreamPayload, SyncStreamResource, SyncStreamInstance> {
    /**
     * Initialize the SyncStreamPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SyncStreamSolution);
    /**
     * Build an instance of SyncStreamInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SyncStreamResource): SyncStreamInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
