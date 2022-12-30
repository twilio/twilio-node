/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { PhoneNumberCapabilities } from "../../../../../lib/interfaces";
/**
 * Options to pass to update a ShortCodeInstance
 *
 * @property { boolean } [isReserved] Whether the short code should be reserved and not be assigned to a participant using proxy pool logic. See [Reserved Phone Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information.
 */
export interface ShortCodeContextUpdateOptions {
    isReserved?: boolean;
}
/**
 * Options to pass to create a ShortCodeInstance
 *
 * @property { string } sid The SID of a Twilio [ShortCode](https://www.twilio.com/docs/sms/api/short-code) resource that represents the short code you would like to assign to your Proxy Service.
 */
export interface ShortCodeListInstanceCreateOptions {
    sid: string;
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
export interface ShortCodeListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: ShortCodeInstance, done: (err?: Error) => void) => void;
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
export interface ShortCodeListInstanceOptions {
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
export interface ShortCodeListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ShortCodeContext {
    /**
     * Remove a ShortCodeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ShortCodeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ShortCodeInstance
     */
    fetch(callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;
    /**
     * Update a ShortCodeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ShortCodeInstance
     */
    update(callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;
    /**
     * Update a ShortCodeInstance
     *
     * @param { ShortCodeContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ShortCodeInstance
     */
    update(params: ShortCodeContextUpdateOptions, callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;
    update(params?: any, callback?: any): Promise<ShortCodeInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ShortCodeContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class ShortCodeContextImpl implements ShortCodeContext {
    protected _version: V1;
    protected _solution: ShortCodeContextSolution;
    protected _uri: string;
    constructor(_version: V1, serviceSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<ShortCodeInstance>;
    update(params?: any, callback?: any): Promise<ShortCodeInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ShortCodeContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ShortCodePayload extends TwilioResponsePayload {
    short_codes: ShortCodeResource[];
}
interface ShortCodeResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    short_code?: string | null;
    iso_country?: string | null;
    capabilities?: PhoneNumberCapabilities | null;
    url?: string | null;
    is_reserved?: boolean | null;
}
export declare class ShortCodeInstance {
    protected _version: V1;
    protected _solution: ShortCodeContextSolution;
    protected _context?: ShortCodeContext;
    constructor(_version: V1, payload: ShortCodeResource, serviceSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the resource\'s parent Service
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
     * The short code\'s number
     */
    shortCode?: string | null;
    /**
     * The ISO Country Code
     */
    isoCountry?: string | null;
    capabilities?: PhoneNumberCapabilities | null;
    /**
     * The absolute URL of the ShortCode resource
     */
    url?: string | null;
    /**
     * Whether the short code should be reserved for manual assignment to participants only
     */
    isReserved?: boolean | null;
    private get _proxy();
    /**
     * Remove a ShortCodeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ShortCodeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ShortCodeInstance
     */
    fetch(callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;
    /**
     * Update a ShortCodeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ShortCodeInstance
     */
    update(callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;
    /**
     * Update a ShortCodeInstance
     *
     * @param { ShortCodeContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ShortCodeInstance
     */
    update(params: ShortCodeContextUpdateOptions, callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;
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
        shortCode: string | null | undefined;
        isoCountry: string | null | undefined;
        capabilities: PhoneNumberCapabilities | null | undefined;
        url: string | null | undefined;
        isReserved: boolean | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ShortCodeListInstance {
    (sid: string): ShortCodeContext;
    get(sid: string): ShortCodeContext;
    /**
     * Create a ShortCodeInstance
     *
     * @param { ShortCodeListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ShortCodeInstance
     */
    create(params: ShortCodeListInstanceCreateOptions, callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;
    create(params: any, callback?: any): Promise<ShortCodeInstance>;
    /**
     * Streams ShortCodeInstance records from the API.
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
    each(callback?: (item: ShortCodeInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ShortCodeInstance records from the API.
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
     * @param { ShortCodeListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ShortCodeListInstanceEachOptions, callback?: (item: ShortCodeInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ShortCodeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ShortCodePage) => any): Promise<ShortCodePage>;
    /**
     * Retrieve a single target page of ShortCodeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ShortCodePage) => any): Promise<ShortCodePage>;
    getPage(params?: any, callback?: any): Promise<ShortCodePage>;
    /**
     * Lists ShortCodeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ShortCodeInstance[]) => any): Promise<ShortCodeInstance[]>;
    /**
     * Lists ShortCodeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ShortCodeListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ShortCodeListInstanceOptions, callback?: (error: Error | null, items: ShortCodeInstance[]) => any): Promise<ShortCodeInstance[]>;
    list(params?: any, callback?: any): Promise<ShortCodeInstance[]>;
    /**
     * Retrieve a single page of ShortCodeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ShortCodePage) => any): Promise<ShortCodePage>;
    /**
     * Retrieve a single page of ShortCodeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ShortCodeListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ShortCodeListInstancePageOptions, callback?: (error: Error | null, items: ShortCodePage) => any): Promise<ShortCodePage>;
    page(params?: any, callback?: any): Promise<ShortCodePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ShortCodeSolution {
    serviceSid?: string;
}
export declare function ShortCodeListInstance(version: V1, serviceSid: string): ShortCodeListInstance;
export declare class ShortCodePage extends Page<V1, ShortCodePayload, ShortCodeResource, ShortCodeInstance> {
    /**
     * Initialize the ShortCodePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ShortCodeSolution);
    /**
     * Build an instance of ShortCodeInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ShortCodeResource): ShortCodeInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
