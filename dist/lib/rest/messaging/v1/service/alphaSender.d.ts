/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to create a AlphaSenderInstance
 *
 * @property { string } alphaSender The Alphanumeric Sender ID string. Can be up to 11 characters long. Valid characters are A-Z, a-z, 0-9, space, hyphen `-`, plus `+`, underscore `_` and ampersand `&`. This value cannot contain only numbers.
 */
export interface AlphaSenderListInstanceCreateOptions {
    alphaSender: string;
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
export interface AlphaSenderListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: AlphaSenderInstance, done: (err?: Error) => void) => void;
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
export interface AlphaSenderListInstanceOptions {
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
export interface AlphaSenderListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface AlphaSenderContext {
    /**
     * Remove a AlphaSenderInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AlphaSenderInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AlphaSenderInstance
     */
    fetch(callback?: (error: Error | null, item?: AlphaSenderInstance) => any): Promise<AlphaSenderInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AlphaSenderContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class AlphaSenderContextImpl implements AlphaSenderContext {
    protected _version: V1;
    protected _solution: AlphaSenderContextSolution;
    protected _uri: string;
    constructor(_version: V1, serviceSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<AlphaSenderInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AlphaSenderContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AlphaSenderPayload extends TwilioResponsePayload {
    alpha_senders: AlphaSenderResource[];
}
interface AlphaSenderResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    alpha_sender?: string | null;
    capabilities?: Array<string> | null;
    url?: string | null;
}
export declare class AlphaSenderInstance {
    protected _version: V1;
    protected _solution: AlphaSenderContextSolution;
    protected _context?: AlphaSenderContext;
    constructor(_version: V1, payload: AlphaSenderResource, serviceSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The Alphanumeric Sender ID string
     */
    alphaSender?: string | null;
    /**
     * An array of values that describe whether the number can receive calls or messages
     */
    capabilities?: Array<string> | null;
    /**
     * The absolute URL of the AlphaSender resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a AlphaSenderInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AlphaSenderInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AlphaSenderInstance
     */
    fetch(callback?: (error: Error | null, item?: AlphaSenderInstance) => any): Promise<AlphaSenderInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        alphaSender: string | null | undefined;
        capabilities: string[] | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AlphaSenderListInstance {
    (sid: string): AlphaSenderContext;
    get(sid: string): AlphaSenderContext;
    /**
     * Create a AlphaSenderInstance
     *
     * @param { AlphaSenderListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AlphaSenderInstance
     */
    create(params: AlphaSenderListInstanceCreateOptions, callback?: (error: Error | null, item?: AlphaSenderInstance) => any): Promise<AlphaSenderInstance>;
    create(params: any, callback?: any): Promise<AlphaSenderInstance>;
    /**
     * Streams AlphaSenderInstance records from the API.
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
    each(callback?: (item: AlphaSenderInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams AlphaSenderInstance records from the API.
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
     * @param { AlphaSenderListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: AlphaSenderListInstanceEachOptions, callback?: (item: AlphaSenderInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of AlphaSenderInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: AlphaSenderPage) => any): Promise<AlphaSenderPage>;
    /**
     * Retrieve a single target page of AlphaSenderInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: AlphaSenderPage) => any): Promise<AlphaSenderPage>;
    getPage(params?: any, callback?: any): Promise<AlphaSenderPage>;
    /**
     * Lists AlphaSenderInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AlphaSenderInstance[]) => any): Promise<AlphaSenderInstance[]>;
    /**
     * Lists AlphaSenderInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AlphaSenderListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: AlphaSenderListInstanceOptions, callback?: (error: Error | null, items: AlphaSenderInstance[]) => any): Promise<AlphaSenderInstance[]>;
    list(params?: any, callback?: any): Promise<AlphaSenderInstance[]>;
    /**
     * Retrieve a single page of AlphaSenderInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AlphaSenderPage) => any): Promise<AlphaSenderPage>;
    /**
     * Retrieve a single page of AlphaSenderInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AlphaSenderListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: AlphaSenderListInstancePageOptions, callback?: (error: Error | null, items: AlphaSenderPage) => any): Promise<AlphaSenderPage>;
    page(params?: any, callback?: any): Promise<AlphaSenderPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AlphaSenderSolution {
    serviceSid?: string;
}
export declare function AlphaSenderListInstance(version: V1, serviceSid: string): AlphaSenderListInstance;
export declare class AlphaSenderPage extends Page<V1, AlphaSenderPayload, AlphaSenderResource, AlphaSenderInstance> {
    /**
     * Initialize the AlphaSenderPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: AlphaSenderSolution);
    /**
     * Build an instance of AlphaSenderInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AlphaSenderResource): AlphaSenderInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
