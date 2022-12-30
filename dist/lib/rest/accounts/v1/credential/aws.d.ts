/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to update a AwsInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 */
export interface AwsContextUpdateOptions {
    friendlyName?: string;
}
/**
 * Options to pass to create a AwsInstance
 *
 * @property { string } credentials A string that contains the AWS access credentials in the format `<AWS_ACCESS_KEY_ID>:<AWS_SECRET_ACCESS_KEY>`. For example, `AKIAIOSFODNN7EXAMPLE:wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [accountSid] The SID of the Subaccount that this Credential should be associated with. Must be a valid Subaccount of the account issuing the request.
 */
export interface AwsListInstanceCreateOptions {
    credentials: string;
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
export interface AwsListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: AwsInstance, done: (err?: Error) => void) => void;
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
export interface AwsListInstanceOptions {
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
export interface AwsListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface AwsContext {
    /**
     * Remove a AwsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AwsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AwsInstance
     */
    fetch(callback?: (error: Error | null, item?: AwsInstance) => any): Promise<AwsInstance>;
    /**
     * Update a AwsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AwsInstance
     */
    update(callback?: (error: Error | null, item?: AwsInstance) => any): Promise<AwsInstance>;
    /**
     * Update a AwsInstance
     *
     * @param { AwsContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AwsInstance
     */
    update(params: AwsContextUpdateOptions, callback?: (error: Error | null, item?: AwsInstance) => any): Promise<AwsInstance>;
    update(params?: any, callback?: any): Promise<AwsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AwsContextSolution {
    sid?: string;
}
export declare class AwsContextImpl implements AwsContext {
    protected _version: V1;
    protected _solution: AwsContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<AwsInstance>;
    update(params?: any, callback?: any): Promise<AwsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AwsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AwsPayload extends TwilioResponsePayload {
    credentials: AwsResource[];
}
interface AwsResource {
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class AwsInstance {
    protected _version: V1;
    protected _solution: AwsContextSolution;
    protected _context?: AwsContext;
    constructor(_version: V1, payload: AwsResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
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
     * Remove a AwsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AwsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AwsInstance
     */
    fetch(callback?: (error: Error | null, item?: AwsInstance) => any): Promise<AwsInstance>;
    /**
     * Update a AwsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AwsInstance
     */
    update(callback?: (error: Error | null, item?: AwsInstance) => any): Promise<AwsInstance>;
    /**
     * Update a AwsInstance
     *
     * @param { AwsContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AwsInstance
     */
    update(params: AwsContextUpdateOptions, callback?: (error: Error | null, item?: AwsInstance) => any): Promise<AwsInstance>;
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
export interface AwsListInstance {
    (sid: string): AwsContext;
    get(sid: string): AwsContext;
    /**
     * Create a AwsInstance
     *
     * @param { AwsListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AwsInstance
     */
    create(params: AwsListInstanceCreateOptions, callback?: (error: Error | null, item?: AwsInstance) => any): Promise<AwsInstance>;
    create(params: any, callback?: any): Promise<AwsInstance>;
    /**
     * Streams AwsInstance records from the API.
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
    each(callback?: (item: AwsInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams AwsInstance records from the API.
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
     * @param { AwsListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: AwsListInstanceEachOptions, callback?: (item: AwsInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of AwsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: AwsPage) => any): Promise<AwsPage>;
    /**
     * Retrieve a single target page of AwsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: AwsPage) => any): Promise<AwsPage>;
    getPage(params?: any, callback?: any): Promise<AwsPage>;
    /**
     * Lists AwsInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AwsInstance[]) => any): Promise<AwsInstance[]>;
    /**
     * Lists AwsInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AwsListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: AwsListInstanceOptions, callback?: (error: Error | null, items: AwsInstance[]) => any): Promise<AwsInstance[]>;
    list(params?: any, callback?: any): Promise<AwsInstance[]>;
    /**
     * Retrieve a single page of AwsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AwsPage) => any): Promise<AwsPage>;
    /**
     * Retrieve a single page of AwsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AwsListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: AwsListInstancePageOptions, callback?: (error: Error | null, items: AwsPage) => any): Promise<AwsPage>;
    page(params?: any, callback?: any): Promise<AwsPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AwsSolution {
}
export declare function AwsListInstance(version: V1): AwsListInstance;
export declare class AwsPage extends Page<V1, AwsPayload, AwsResource, AwsInstance> {
    /**
     * Initialize the AwsPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: AwsSolution);
    /**
     * Build an instance of AwsInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AwsResource): AwsInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
