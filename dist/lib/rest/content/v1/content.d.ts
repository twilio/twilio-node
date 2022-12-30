/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { ApprovalFetchListInstance } from "./content/approvalFetch";
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
export interface ContentListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: ContentInstance, done: (err?: Error) => void) => void;
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
export interface ContentListInstanceOptions {
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
export interface ContentListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ContentContext {
    approvalFetch: ApprovalFetchListInstance;
    /**
     * Remove a ContentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ContentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ContentInstance
     */
    fetch(callback?: (error: Error | null, item?: ContentInstance) => any): Promise<ContentInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ContentContextSolution {
    sid?: string;
}
export declare class ContentContextImpl implements ContentContext {
    protected _version: V1;
    protected _solution: ContentContextSolution;
    protected _uri: string;
    protected _approvalFetch?: ApprovalFetchListInstance;
    constructor(_version: V1, sid: string);
    get approvalFetch(): ApprovalFetchListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<ContentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ContentContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ContentPayload extends TwilioResponsePayload {
    contents: ContentResource[];
}
interface ContentResource {
    date_created?: Date | null;
    date_updated?: Date | null;
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    language?: string | null;
    variables?: any | null;
    types?: any | null;
    url?: string | null;
    links?: object | null;
}
export declare class ContentInstance {
    protected _version: V1;
    protected _solution: ContentContextSolution;
    protected _context?: ContentContext;
    constructor(_version: V1, payload: ContentResource, sid?: string);
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * A string name used to describe the Content resource
     */
    friendlyName?: string | null;
    /**
     * Two-letter language code identifying the language the Content resource is in.
     */
    language?: string | null;
    /**
     * Defines the default placeholder values for variables included in the Content resource
     */
    variables?: any | null;
    /**
     * The Content types (e.g. twilio/text) for this Content resource
     */
    types?: any | null;
    /**
     * The URL of the resource, relative to `https://content.twilio.com`
     */
    url?: string | null;
    /**
     * A list of links related to the Content resource
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a ContentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ContentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ContentInstance
     */
    fetch(callback?: (error: Error | null, item?: ContentInstance) => any): Promise<ContentInstance>;
    /**
     * Access the approvalFetch.
     */
    approvalFetch(): ApprovalFetchListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        language: string | null | undefined;
        variables: any;
        types: any;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ContentListInstance {
    (sid: string): ContentContext;
    get(sid: string): ContentContext;
    /**
     * Streams ContentInstance records from the API.
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
    each(callback?: (item: ContentInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ContentInstance records from the API.
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
     * @param { ContentListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ContentListInstanceEachOptions, callback?: (item: ContentInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ContentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ContentPage) => any): Promise<ContentPage>;
    /**
     * Retrieve a single target page of ContentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ContentPage) => any): Promise<ContentPage>;
    getPage(params?: any, callback?: any): Promise<ContentPage>;
    /**
     * Lists ContentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ContentInstance[]) => any): Promise<ContentInstance[]>;
    /**
     * Lists ContentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ContentListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ContentListInstanceOptions, callback?: (error: Error | null, items: ContentInstance[]) => any): Promise<ContentInstance[]>;
    list(params?: any, callback?: any): Promise<ContentInstance[]>;
    /**
     * Retrieve a single page of ContentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ContentPage) => any): Promise<ContentPage>;
    /**
     * Retrieve a single page of ContentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ContentListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ContentListInstancePageOptions, callback?: (error: Error | null, items: ContentPage) => any): Promise<ContentPage>;
    page(params?: any, callback?: any): Promise<ContentPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ContentSolution {
}
export declare function ContentListInstance(version: V1): ContentListInstance;
export declare class ContentPage extends Page<V1, ContentPayload, ContentResource, ContentInstance> {
    /**
     * Initialize the ContentPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ContentSolution);
    /**
     * Build an instance of ContentInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ContentResource): ContentInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
