/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to update a OriginationUrlInstance
 *
 * @property { number } [weight] The value that determines the relative share of the load the URI should receive compared to other URIs with the same priority. Can be an integer from 1 to 65535, inclusive, and the default is 10. URLs with higher values receive more load than those with lower ones with the same priority.
 * @property { number } [priority] The relative importance of the URI. Can be an integer from 0 to 65535, inclusive, and the default is 10. The lowest number represents the most important URI.
 * @property { boolean } [enabled] Whether the URL is enabled. The default is `true`.
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [sipUrl] The SIP address you want Twilio to route your Origination calls to. This must be a `sip:` schema. `sips` is NOT supported.
 */
export interface OriginationUrlContextUpdateOptions {
    weight?: number;
    priority?: number;
    enabled?: boolean;
    friendlyName?: string;
    sipUrl?: string;
}
/**
 * Options to pass to create a OriginationUrlInstance
 *
 * @property { number } weight The value that determines the relative share of the load the URI should receive compared to other URIs with the same priority. Can be an integer from 1 to 65535, inclusive, and the default is 10. URLs with higher values receive more load than those with lower ones with the same priority.
 * @property { number } priority The relative importance of the URI. Can be an integer from 0 to 65535, inclusive, and the default is 10. The lowest number represents the most important URI.
 * @property { boolean } enabled Whether the URL is enabled. The default is `true`.
 * @property { string } friendlyName A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } sipUrl The SIP address you want Twilio to route your Origination calls to. This must be a `sip:` schema.
 */
export interface OriginationUrlListInstanceCreateOptions {
    weight: number;
    priority: number;
    enabled: boolean;
    friendlyName: string;
    sipUrl: string;
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
export interface OriginationUrlListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: OriginationUrlInstance, done: (err?: Error) => void) => void;
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
export interface OriginationUrlListInstanceOptions {
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
export interface OriginationUrlListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface OriginationUrlContext {
    /**
     * Remove a OriginationUrlInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a OriginationUrlInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed OriginationUrlInstance
     */
    fetch(callback?: (error: Error | null, item?: OriginationUrlInstance) => any): Promise<OriginationUrlInstance>;
    /**
     * Update a OriginationUrlInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed OriginationUrlInstance
     */
    update(callback?: (error: Error | null, item?: OriginationUrlInstance) => any): Promise<OriginationUrlInstance>;
    /**
     * Update a OriginationUrlInstance
     *
     * @param { OriginationUrlContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed OriginationUrlInstance
     */
    update(params: OriginationUrlContextUpdateOptions, callback?: (error: Error | null, item?: OriginationUrlInstance) => any): Promise<OriginationUrlInstance>;
    update(params?: any, callback?: any): Promise<OriginationUrlInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface OriginationUrlContextSolution {
    trunkSid?: string;
    sid?: string;
}
export declare class OriginationUrlContextImpl implements OriginationUrlContext {
    protected _version: V1;
    protected _solution: OriginationUrlContextSolution;
    protected _uri: string;
    constructor(_version: V1, trunkSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<OriginationUrlInstance>;
    update(params?: any, callback?: any): Promise<OriginationUrlInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): OriginationUrlContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface OriginationUrlPayload extends TwilioResponsePayload {
    origination_urls: OriginationUrlResource[];
}
interface OriginationUrlResource {
    account_sid?: string | null;
    sid?: string | null;
    trunk_sid?: string | null;
    weight?: number | null;
    enabled?: boolean | null;
    sip_url?: string | null;
    friendly_name?: string | null;
    priority?: number | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class OriginationUrlInstance {
    protected _version: V1;
    protected _solution: OriginationUrlContextSolution;
    protected _context?: OriginationUrlContext;
    constructor(_version: V1, payload: OriginationUrlResource, trunkSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Trunk that owns the Origination URL
     */
    trunkSid?: string | null;
    /**
     * The value that determines the relative load the URI should receive compared to others with the same priority
     */
    weight?: number | null;
    /**
     * Whether the URL is enabled
     */
    enabled?: boolean | null;
    /**
     * The SIP address you want Twilio to route your Origination calls to
     */
    sipUrl?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The relative importance of the URI
     */
    priority?: number | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a OriginationUrlInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a OriginationUrlInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed OriginationUrlInstance
     */
    fetch(callback?: (error: Error | null, item?: OriginationUrlInstance) => any): Promise<OriginationUrlInstance>;
    /**
     * Update a OriginationUrlInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed OriginationUrlInstance
     */
    update(callback?: (error: Error | null, item?: OriginationUrlInstance) => any): Promise<OriginationUrlInstance>;
    /**
     * Update a OriginationUrlInstance
     *
     * @param { OriginationUrlContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed OriginationUrlInstance
     */
    update(params: OriginationUrlContextUpdateOptions, callback?: (error: Error | null, item?: OriginationUrlInstance) => any): Promise<OriginationUrlInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        sid: string | null | undefined;
        trunkSid: string | null | undefined;
        weight: number | null | undefined;
        enabled: boolean | null | undefined;
        sipUrl: string | null | undefined;
        friendlyName: string | null | undefined;
        priority: number | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface OriginationUrlListInstance {
    (sid: string): OriginationUrlContext;
    get(sid: string): OriginationUrlContext;
    /**
     * Create a OriginationUrlInstance
     *
     * @param { OriginationUrlListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed OriginationUrlInstance
     */
    create(params: OriginationUrlListInstanceCreateOptions, callback?: (error: Error | null, item?: OriginationUrlInstance) => any): Promise<OriginationUrlInstance>;
    create(params: any, callback?: any): Promise<OriginationUrlInstance>;
    /**
     * Streams OriginationUrlInstance records from the API.
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
    each(callback?: (item: OriginationUrlInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams OriginationUrlInstance records from the API.
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
     * @param { OriginationUrlListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: OriginationUrlListInstanceEachOptions, callback?: (item: OriginationUrlInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of OriginationUrlInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: OriginationUrlPage) => any): Promise<OriginationUrlPage>;
    /**
     * Retrieve a single target page of OriginationUrlInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: OriginationUrlPage) => any): Promise<OriginationUrlPage>;
    getPage(params?: any, callback?: any): Promise<OriginationUrlPage>;
    /**
     * Lists OriginationUrlInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: OriginationUrlInstance[]) => any): Promise<OriginationUrlInstance[]>;
    /**
     * Lists OriginationUrlInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { OriginationUrlListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: OriginationUrlListInstanceOptions, callback?: (error: Error | null, items: OriginationUrlInstance[]) => any): Promise<OriginationUrlInstance[]>;
    list(params?: any, callback?: any): Promise<OriginationUrlInstance[]>;
    /**
     * Retrieve a single page of OriginationUrlInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: OriginationUrlPage) => any): Promise<OriginationUrlPage>;
    /**
     * Retrieve a single page of OriginationUrlInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { OriginationUrlListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: OriginationUrlListInstancePageOptions, callback?: (error: Error | null, items: OriginationUrlPage) => any): Promise<OriginationUrlPage>;
    page(params?: any, callback?: any): Promise<OriginationUrlPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface OriginationUrlSolution {
    trunkSid?: string;
}
export declare function OriginationUrlListInstance(version: V1, trunkSid: string): OriginationUrlListInstance;
export declare class OriginationUrlPage extends Page<V1, OriginationUrlPayload, OriginationUrlResource, OriginationUrlInstance> {
    /**
     * Initialize the OriginationUrlPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: OriginationUrlSolution);
    /**
     * Build an instance of OriginationUrlInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: OriginationUrlResource): OriginationUrlInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
