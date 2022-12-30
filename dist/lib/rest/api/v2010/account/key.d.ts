/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
/**
 * Options to pass to update a KeyInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 */
export interface KeyContextUpdateOptions {
    friendlyName?: string;
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
export interface KeyListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: KeyInstance, done: (err?: Error) => void) => void;
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
export interface KeyListInstanceOptions {
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
export interface KeyListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface KeyContext {
    /**
     * Remove a KeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a KeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed KeyInstance
     */
    fetch(callback?: (error: Error | null, item?: KeyInstance) => any): Promise<KeyInstance>;
    /**
     * Update a KeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed KeyInstance
     */
    update(callback?: (error: Error | null, item?: KeyInstance) => any): Promise<KeyInstance>;
    /**
     * Update a KeyInstance
     *
     * @param { KeyContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed KeyInstance
     */
    update(params: KeyContextUpdateOptions, callback?: (error: Error | null, item?: KeyInstance) => any): Promise<KeyInstance>;
    update(params?: any, callback?: any): Promise<KeyInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface KeyContextSolution {
    accountSid?: string;
    sid?: string;
}
export declare class KeyContextImpl implements KeyContext {
    protected _version: V2010;
    protected _solution: KeyContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<KeyInstance>;
    update(params?: any, callback?: any): Promise<KeyInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): KeyContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface KeyPayload extends TwilioResponsePayload {
    keys: KeyResource[];
}
interface KeyResource {
    sid?: string | null;
    friendly_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
}
export declare class KeyInstance {
    protected _version: V2010;
    protected _solution: KeyContextSolution;
    protected _context?: KeyContext;
    constructor(_version: V2010, payload: KeyResource, accountSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    private get _proxy();
    /**
     * Remove a KeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a KeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed KeyInstance
     */
    fetch(callback?: (error: Error | null, item?: KeyInstance) => any): Promise<KeyInstance>;
    /**
     * Update a KeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed KeyInstance
     */
    update(callback?: (error: Error | null, item?: KeyInstance) => any): Promise<KeyInstance>;
    /**
     * Update a KeyInstance
     *
     * @param { KeyContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed KeyInstance
     */
    update(params: KeyContextUpdateOptions, callback?: (error: Error | null, item?: KeyInstance) => any): Promise<KeyInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        friendlyName: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface KeyListInstance {
    (sid: string): KeyContext;
    get(sid: string): KeyContext;
    /**
     * Streams KeyInstance records from the API.
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
    each(callback?: (item: KeyInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams KeyInstance records from the API.
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
     * @param { KeyListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: KeyListInstanceEachOptions, callback?: (item: KeyInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of KeyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: KeyPage) => any): Promise<KeyPage>;
    /**
     * Retrieve a single target page of KeyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: KeyPage) => any): Promise<KeyPage>;
    getPage(params?: any, callback?: any): Promise<KeyPage>;
    /**
     * Lists KeyInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: KeyInstance[]) => any): Promise<KeyInstance[]>;
    /**
     * Lists KeyInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { KeyListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: KeyListInstanceOptions, callback?: (error: Error | null, items: KeyInstance[]) => any): Promise<KeyInstance[]>;
    list(params?: any, callback?: any): Promise<KeyInstance[]>;
    /**
     * Retrieve a single page of KeyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: KeyPage) => any): Promise<KeyPage>;
    /**
     * Retrieve a single page of KeyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { KeyListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: KeyListInstancePageOptions, callback?: (error: Error | null, items: KeyPage) => any): Promise<KeyPage>;
    page(params?: any, callback?: any): Promise<KeyPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface KeySolution {
    accountSid?: string;
}
export declare function KeyListInstance(version: V2010, accountSid: string): KeyListInstance;
export declare class KeyPage extends Page<V2010, KeyPayload, KeyResource, KeyInstance> {
    /**
     * Initialize the KeyPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: KeySolution);
    /**
     * Build an instance of KeyInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: KeyResource): KeyInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
