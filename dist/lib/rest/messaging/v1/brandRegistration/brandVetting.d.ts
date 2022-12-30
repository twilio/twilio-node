/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
declare type BrandVettingVettingProvider = "campaign-verify";
/**
 * Options to pass to create a BrandVettingInstance
 *
 * @property { BrandVettingVettingProvider } vettingProvider
 * @property { string } [vettingId] The unique ID of the vetting
 */
export interface BrandVettingListInstanceCreateOptions {
    vettingProvider: BrandVettingVettingProvider;
    vettingId?: string;
}
/**
 * Options to pass to each
 *
 * @property { BrandVettingVettingProvider } [vettingProvider] The third-party provider of the vettings to read
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
export interface BrandVettingListInstanceEachOptions {
    vettingProvider?: BrandVettingVettingProvider;
    pageSize?: number;
    callback?: (item: BrandVettingInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { BrandVettingVettingProvider } [vettingProvider] The third-party provider of the vettings to read
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface BrandVettingListInstanceOptions {
    vettingProvider?: BrandVettingVettingProvider;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { BrandVettingVettingProvider } [vettingProvider] The third-party provider of the vettings to read
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface BrandVettingListInstancePageOptions {
    vettingProvider?: BrandVettingVettingProvider;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface BrandVettingContext {
    /**
     * Fetch a BrandVettingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BrandVettingInstance
     */
    fetch(callback?: (error: Error | null, item?: BrandVettingInstance) => any): Promise<BrandVettingInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BrandVettingContextSolution {
    brandSid?: string;
    brandVettingSid?: string;
}
export declare class BrandVettingContextImpl implements BrandVettingContext {
    protected _version: V1;
    protected _solution: BrandVettingContextSolution;
    protected _uri: string;
    constructor(_version: V1, brandSid: string, brandVettingSid: string);
    fetch(callback?: any): Promise<BrandVettingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): BrandVettingContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface BrandVettingPayload extends TwilioResponsePayload {
    data: BrandVettingResource[];
}
interface BrandVettingResource {
    account_sid?: string | null;
    brand_sid?: string | null;
    brand_vetting_sid?: string | null;
    date_updated?: Date | null;
    date_created?: Date | null;
    vetting_id?: string | null;
    vetting_class?: string | null;
    vetting_status?: string | null;
    vetting_provider?: BrandVettingVettingProvider;
    url?: string | null;
}
export declare class BrandVettingInstance {
    protected _version: V1;
    protected _solution: BrandVettingContextSolution;
    protected _context?: BrandVettingContext;
    constructor(_version: V1, payload: BrandVettingResource, brandSid: string, brandVettingSid?: string);
    /**
     * The SID of the Account that created the vetting
     */
    accountSid?: string | null;
    /**
     * A2P BrandRegistration Sid
     */
    brandSid?: string | null;
    /**
     * SID for third-party vetting record
     */
    brandVettingSid?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The unique ID of the vetting
     */
    vettingId?: string | null;
    /**
     * The type of vetting
     */
    vettingClass?: string | null;
    /**
     * Status of vetting attempt
     */
    vettingStatus?: string | null;
    vettingProvider?: BrandVettingVettingProvider;
    /**
     * The absolute URL of the Brand Vetting
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a BrandVettingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BrandVettingInstance
     */
    fetch(callback?: (error: Error | null, item?: BrandVettingInstance) => any): Promise<BrandVettingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        brandSid: string | null | undefined;
        brandVettingSid: string | null | undefined;
        dateUpdated: Date | null | undefined;
        dateCreated: Date | null | undefined;
        vettingId: string | null | undefined;
        vettingClass: string | null | undefined;
        vettingStatus: string | null | undefined;
        vettingProvider: "campaign-verify" | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface BrandVettingListInstance {
    (brandVettingSid: string): BrandVettingContext;
    get(brandVettingSid: string): BrandVettingContext;
    /**
     * Create a BrandVettingInstance
     *
     * @param { BrandVettingListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BrandVettingInstance
     */
    create(params: BrandVettingListInstanceCreateOptions, callback?: (error: Error | null, item?: BrandVettingInstance) => any): Promise<BrandVettingInstance>;
    create(params: any, callback?: any): Promise<BrandVettingInstance>;
    /**
     * Streams BrandVettingInstance records from the API.
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
    each(callback?: (item: BrandVettingInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams BrandVettingInstance records from the API.
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
     * @param { BrandVettingListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: BrandVettingListInstanceEachOptions, callback?: (item: BrandVettingInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of BrandVettingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: BrandVettingPage) => any): Promise<BrandVettingPage>;
    /**
     * Retrieve a single target page of BrandVettingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: BrandVettingPage) => any): Promise<BrandVettingPage>;
    getPage(params?: any, callback?: any): Promise<BrandVettingPage>;
    /**
     * Lists BrandVettingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: BrandVettingInstance[]) => any): Promise<BrandVettingInstance[]>;
    /**
     * Lists BrandVettingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { BrandVettingListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: BrandVettingListInstanceOptions, callback?: (error: Error | null, items: BrandVettingInstance[]) => any): Promise<BrandVettingInstance[]>;
    list(params?: any, callback?: any): Promise<BrandVettingInstance[]>;
    /**
     * Retrieve a single page of BrandVettingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: BrandVettingPage) => any): Promise<BrandVettingPage>;
    /**
     * Retrieve a single page of BrandVettingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { BrandVettingListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: BrandVettingListInstancePageOptions, callback?: (error: Error | null, items: BrandVettingPage) => any): Promise<BrandVettingPage>;
    page(params?: any, callback?: any): Promise<BrandVettingPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BrandVettingSolution {
    brandSid?: string;
}
export declare function BrandVettingListInstance(version: V1, brandSid: string): BrandVettingListInstance;
export declare class BrandVettingPage extends Page<V1, BrandVettingPayload, BrandVettingResource, BrandVettingInstance> {
    /**
     * Initialize the BrandVettingPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: BrandVettingSolution);
    /**
     * Build an instance of BrandVettingInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: BrandVettingResource): BrandVettingInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
