/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to create a PhoneNumberInstance
 *
 * @property { string } phoneNumberSid The SID of the Phone Number being added to the Service.
 */
export interface PhoneNumberListInstanceCreateOptions {
    phoneNumberSid: string;
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
export interface PhoneNumberListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: PhoneNumberInstance, done: (err?: Error) => void) => void;
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
export interface PhoneNumberListInstanceOptions {
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
export interface PhoneNumberListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface PhoneNumberContext {
    /**
     * Remove a PhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a PhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PhoneNumberInstance
     */
    fetch(callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PhoneNumberContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class PhoneNumberContextImpl implements PhoneNumberContext {
    protected _version: V1;
    protected _solution: PhoneNumberContextSolution;
    protected _uri: string;
    constructor(_version: V1, serviceSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<PhoneNumberInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PhoneNumberContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PhoneNumberPayload extends TwilioResponsePayload {
    phone_numbers: PhoneNumberResource[];
}
interface PhoneNumberResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    phone_number?: string | null;
    country_code?: string | null;
    capabilities?: Array<string> | null;
    url?: string | null;
}
export declare class PhoneNumberInstance {
    protected _version: V1;
    protected _solution: PhoneNumberContextSolution;
    protected _context?: PhoneNumberContext;
    constructor(_version: V1, payload: PhoneNumberResource, serviceSid: string, sid?: string);
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
     * The phone number in E.164 format
     */
    phoneNumber?: string | null;
    /**
     * The 2-character ISO Country Code of the number
     */
    countryCode?: string | null;
    /**
     * An array of values that describe whether the number can receive calls or messages
     */
    capabilities?: Array<string> | null;
    /**
     * The absolute URL of the PhoneNumber resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a PhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a PhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PhoneNumberInstance
     */
    fetch(callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
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
        phoneNumber: string | null | undefined;
        countryCode: string | null | undefined;
        capabilities: string[] | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PhoneNumberListInstance {
    (sid: string): PhoneNumberContext;
    get(sid: string): PhoneNumberContext;
    /**
     * Create a PhoneNumberInstance
     *
     * @param { PhoneNumberListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PhoneNumberInstance
     */
    create(params: PhoneNumberListInstanceCreateOptions, callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
    create(params: any, callback?: any): Promise<PhoneNumberInstance>;
    /**
     * Streams PhoneNumberInstance records from the API.
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
    each(callback?: (item: PhoneNumberInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams PhoneNumberInstance records from the API.
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
     * @param { PhoneNumberListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: PhoneNumberListInstanceEachOptions, callback?: (item: PhoneNumberInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of PhoneNumberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: PhoneNumberPage) => any): Promise<PhoneNumberPage>;
    /**
     * Retrieve a single target page of PhoneNumberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: PhoneNumberPage) => any): Promise<PhoneNumberPage>;
    getPage(params?: any, callback?: any): Promise<PhoneNumberPage>;
    /**
     * Lists PhoneNumberInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: PhoneNumberInstance[]) => any): Promise<PhoneNumberInstance[]>;
    /**
     * Lists PhoneNumberInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PhoneNumberListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: PhoneNumberListInstanceOptions, callback?: (error: Error | null, items: PhoneNumberInstance[]) => any): Promise<PhoneNumberInstance[]>;
    list(params?: any, callback?: any): Promise<PhoneNumberInstance[]>;
    /**
     * Retrieve a single page of PhoneNumberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: PhoneNumberPage) => any): Promise<PhoneNumberPage>;
    /**
     * Retrieve a single page of PhoneNumberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PhoneNumberListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: PhoneNumberListInstancePageOptions, callback?: (error: Error | null, items: PhoneNumberPage) => any): Promise<PhoneNumberPage>;
    page(params?: any, callback?: any): Promise<PhoneNumberPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PhoneNumberSolution {
    serviceSid?: string;
}
export declare function PhoneNumberListInstance(version: V1, serviceSid: string): PhoneNumberListInstance;
export declare class PhoneNumberPage extends Page<V1, PhoneNumberPayload, PhoneNumberResource, PhoneNumberInstance> {
    /**
     * Initialize the PhoneNumberPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: PhoneNumberSolution);
    /**
     * Build an instance of PhoneNumberInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: PhoneNumberResource): PhoneNumberInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
