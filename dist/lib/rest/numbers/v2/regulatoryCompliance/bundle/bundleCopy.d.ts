/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
declare type BundleCopyStatus = "draft" | "pending-review" | "in-review" | "twilio-rejected" | "twilio-approved" | "provisionally-approved";
/**
 * Options to pass to create a BundleCopyInstance
 *
 * @property { string } [friendlyName] The string that you assigned to describe the copied bundle.
 */
export interface BundleCopyListInstanceCreateOptions {
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
export interface BundleCopyListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: BundleCopyInstance, done: (err?: Error) => void) => void;
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
export interface BundleCopyListInstanceOptions {
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
export interface BundleCopyListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface BundleCopyListInstance {
    /**
     * Create a BundleCopyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BundleCopyInstance
     */
    create(callback?: (error: Error | null, item?: BundleCopyInstance) => any): Promise<BundleCopyInstance>;
    /**
     * Create a BundleCopyInstance
     *
     * @param { BundleCopyListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BundleCopyInstance
     */
    create(params: BundleCopyListInstanceCreateOptions, callback?: (error: Error | null, item?: BundleCopyInstance) => any): Promise<BundleCopyInstance>;
    create(params?: any, callback?: any): Promise<BundleCopyInstance>;
    /**
     * Streams BundleCopyInstance records from the API.
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
    each(callback?: (item: BundleCopyInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams BundleCopyInstance records from the API.
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
     * @param { BundleCopyListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: BundleCopyListInstanceEachOptions, callback?: (item: BundleCopyInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of BundleCopyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: BundleCopyPage) => any): Promise<BundleCopyPage>;
    /**
     * Retrieve a single target page of BundleCopyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: BundleCopyPage) => any): Promise<BundleCopyPage>;
    getPage(params?: any, callback?: any): Promise<BundleCopyPage>;
    /**
     * Lists BundleCopyInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: BundleCopyInstance[]) => any): Promise<BundleCopyInstance[]>;
    /**
     * Lists BundleCopyInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { BundleCopyListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: BundleCopyListInstanceOptions, callback?: (error: Error | null, items: BundleCopyInstance[]) => any): Promise<BundleCopyInstance[]>;
    list(params?: any, callback?: any): Promise<BundleCopyInstance[]>;
    /**
     * Retrieve a single page of BundleCopyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: BundleCopyPage) => any): Promise<BundleCopyPage>;
    /**
     * Retrieve a single page of BundleCopyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { BundleCopyListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: BundleCopyListInstancePageOptions, callback?: (error: Error | null, items: BundleCopyPage) => any): Promise<BundleCopyPage>;
    page(params?: any, callback?: any): Promise<BundleCopyPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BundleCopySolution {
    bundleSid?: string;
}
export declare function BundleCopyListInstance(version: V2, bundleSid: string): BundleCopyListInstance;
interface BundleCopyPayload extends TwilioResponsePayload {
    results: BundleCopyResource[];
}
interface BundleCopyResource {
    sid?: string | null;
    account_sid?: string | null;
    regulation_sid?: string | null;
    friendly_name?: string | null;
    status?: BundleCopyStatus;
    valid_until?: Date | null;
    email?: string | null;
    status_callback?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
}
export declare class BundleCopyInstance {
    protected _version: V2;
    constructor(_version: V2, payload: BundleCopyResource, bundleSid: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The unique string of a regulation
     */
    regulationSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    status?: BundleCopyStatus;
    /**
     * The ISO 8601 date and time in GMT when the resource will be valid until
     */
    validUntil?: Date | null;
    /**
     * The email address
     */
    email?: string | null;
    /**
     * The URL we call to inform your application of status changes
     */
    statusCallback?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        regulationSid: string | null | undefined;
        friendlyName: string | null | undefined;
        status: BundleCopyStatus | undefined;
        validUntil: Date | null | undefined;
        email: string | null | undefined;
        statusCallback: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class BundleCopyPage extends Page<V2, BundleCopyPayload, BundleCopyResource, BundleCopyInstance> {
    /**
     * Initialize the BundleCopyPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: BundleCopySolution);
    /**
     * Build an instance of BundleCopyInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: BundleCopyResource): BundleCopyInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
