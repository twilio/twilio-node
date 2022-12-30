/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to update a PublicKeyInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 */
export interface PublicKeyContextUpdateOptions {
    friendlyName?: string;
}
/**
 * Options to pass to create a PublicKeyInstance
 *
 * @property { string } publicKey A URL encoded representation of the public key. For example, `-----BEGIN PUBLIC KEY-----MIIBIjANB.pa9xQIDAQAB-----END PUBLIC KEY-----`
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [accountSid] The SID of the Subaccount that this Credential should be associated with. Must be a valid Subaccount of the account issuing the request
 */
export interface PublicKeyListInstanceCreateOptions {
    publicKey: string;
    friendlyName?: string;
    accountSid?: string;
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
export interface PublicKeyListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: PublicKeyInstance, done: (err?: Error) => void) => void;
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
export interface PublicKeyListInstanceOptions {
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
export interface PublicKeyListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface PublicKeyContext {
    /**
     * Remove a PublicKeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a PublicKeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PublicKeyInstance
     */
    fetch(callback?: (error: Error | null, item?: PublicKeyInstance) => any): Promise<PublicKeyInstance>;
    /**
     * Update a PublicKeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PublicKeyInstance
     */
    update(callback?: (error: Error | null, item?: PublicKeyInstance) => any): Promise<PublicKeyInstance>;
    /**
     * Update a PublicKeyInstance
     *
     * @param { PublicKeyContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PublicKeyInstance
     */
    update(params: PublicKeyContextUpdateOptions, callback?: (error: Error | null, item?: PublicKeyInstance) => any): Promise<PublicKeyInstance>;
    update(params?: any, callback?: any): Promise<PublicKeyInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PublicKeyContextSolution {
    sid?: string;
}
export declare class PublicKeyContextImpl implements PublicKeyContext {
    protected _version: V1;
    protected _solution: PublicKeyContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<PublicKeyInstance>;
    update(params?: any, callback?: any): Promise<PublicKeyInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PublicKeyContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PublicKeyPayload extends TwilioResponsePayload {
    credentials: PublicKeyResource[];
}
interface PublicKeyResource {
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class PublicKeyInstance {
    protected _version: V1;
    protected _solution: PublicKeyContextSolution;
    protected _context?: PublicKeyContext;
    constructor(_version: V1, payload: PublicKeyResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the Credential that the PublicKey resource belongs to
     */
    accountSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The URI for this resource, relative to `https://accounts.twilio.com`
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a PublicKeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a PublicKeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PublicKeyInstance
     */
    fetch(callback?: (error: Error | null, item?: PublicKeyInstance) => any): Promise<PublicKeyInstance>;
    /**
     * Update a PublicKeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PublicKeyInstance
     */
    update(callback?: (error: Error | null, item?: PublicKeyInstance) => any): Promise<PublicKeyInstance>;
    /**
     * Update a PublicKeyInstance
     *
     * @param { PublicKeyContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PublicKeyInstance
     */
    update(params: PublicKeyContextUpdateOptions, callback?: (error: Error | null, item?: PublicKeyInstance) => any): Promise<PublicKeyInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PublicKeyListInstance {
    (sid: string): PublicKeyContext;
    get(sid: string): PublicKeyContext;
    /**
     * Create a PublicKeyInstance
     *
     * @param { PublicKeyListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PublicKeyInstance
     */
    create(params: PublicKeyListInstanceCreateOptions, callback?: (error: Error | null, item?: PublicKeyInstance) => any): Promise<PublicKeyInstance>;
    create(params: any, callback?: any): Promise<PublicKeyInstance>;
    /**
     * Streams PublicKeyInstance records from the API.
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
    each(callback?: (item: PublicKeyInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams PublicKeyInstance records from the API.
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
     * @param { PublicKeyListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: PublicKeyListInstanceEachOptions, callback?: (item: PublicKeyInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of PublicKeyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: PublicKeyPage) => any): Promise<PublicKeyPage>;
    /**
     * Retrieve a single target page of PublicKeyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: PublicKeyPage) => any): Promise<PublicKeyPage>;
    getPage(params?: any, callback?: any): Promise<PublicKeyPage>;
    /**
     * Lists PublicKeyInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: PublicKeyInstance[]) => any): Promise<PublicKeyInstance[]>;
    /**
     * Lists PublicKeyInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PublicKeyListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: PublicKeyListInstanceOptions, callback?: (error: Error | null, items: PublicKeyInstance[]) => any): Promise<PublicKeyInstance[]>;
    list(params?: any, callback?: any): Promise<PublicKeyInstance[]>;
    /**
     * Retrieve a single page of PublicKeyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: PublicKeyPage) => any): Promise<PublicKeyPage>;
    /**
     * Retrieve a single page of PublicKeyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PublicKeyListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: PublicKeyListInstancePageOptions, callback?: (error: Error | null, items: PublicKeyPage) => any): Promise<PublicKeyPage>;
    page(params?: any, callback?: any): Promise<PublicKeyPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PublicKeySolution {
}
export declare function PublicKeyListInstance(version: V1): PublicKeyListInstance;
export declare class PublicKeyPage extends Page<V1, PublicKeyPayload, PublicKeyResource, PublicKeyInstance> {
    /**
     * Initialize the PublicKeyPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: PublicKeySolution);
    /**
     * Build an instance of PublicKeyInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: PublicKeyResource): PublicKeyInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
