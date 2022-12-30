/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
declare type FlowRevisionStatus = "draft" | "published";
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
export interface FlowRevisionListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: FlowRevisionInstance, done: (err?: Error) => void) => void;
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
export interface FlowRevisionListInstanceOptions {
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
export interface FlowRevisionListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface FlowRevisionContext {
    /**
     * Fetch a FlowRevisionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlowRevisionInstance
     */
    fetch(callback?: (error: Error | null, item?: FlowRevisionInstance) => any): Promise<FlowRevisionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FlowRevisionContextSolution {
    sid?: string;
    revision?: string;
}
export declare class FlowRevisionContextImpl implements FlowRevisionContext {
    protected _version: V2;
    protected _solution: FlowRevisionContextSolution;
    protected _uri: string;
    constructor(_version: V2, sid: string, revision: string);
    fetch(callback?: any): Promise<FlowRevisionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FlowRevisionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FlowRevisionPayload extends TwilioResponsePayload {
    revisions: FlowRevisionResource[];
}
interface FlowRevisionResource {
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    definition?: any | null;
    status?: FlowRevisionStatus;
    revision?: number | null;
    commit_message?: string | null;
    valid?: boolean | null;
    errors?: Array<any> | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class FlowRevisionInstance {
    protected _version: V2;
    protected _solution: FlowRevisionContextSolution;
    protected _context?: FlowRevisionContext;
    constructor(_version: V2, payload: FlowRevisionResource, sid: string, revision?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The string that you assigned to describe the Flow
     */
    friendlyName?: string | null;
    /**
     * JSON representation of flow definition
     */
    definition?: any | null;
    status?: FlowRevisionStatus;
    /**
     * The latest revision number of the Flow\'s definition
     */
    revision?: number | null;
    /**
     * Description of change made in the revision
     */
    commitMessage?: string | null;
    /**
     * Boolean if the flow definition is valid
     */
    valid?: boolean | null;
    /**
     * List of error in the flow definition
     */
    errors?: Array<any> | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a FlowRevisionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlowRevisionInstance
     */
    fetch(callback?: (error: Error | null, item?: FlowRevisionInstance) => any): Promise<FlowRevisionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        definition: any;
        status: FlowRevisionStatus | undefined;
        revision: number | null | undefined;
        commitMessage: string | null | undefined;
        valid: boolean | null | undefined;
        errors: any[] | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FlowRevisionListInstance {
    (revision: string): FlowRevisionContext;
    get(revision: string): FlowRevisionContext;
    /**
     * Streams FlowRevisionInstance records from the API.
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
    each(callback?: (item: FlowRevisionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams FlowRevisionInstance records from the API.
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
     * @param { FlowRevisionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: FlowRevisionListInstanceEachOptions, callback?: (item: FlowRevisionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of FlowRevisionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: FlowRevisionPage) => any): Promise<FlowRevisionPage>;
    /**
     * Retrieve a single target page of FlowRevisionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: FlowRevisionPage) => any): Promise<FlowRevisionPage>;
    getPage(params?: any, callback?: any): Promise<FlowRevisionPage>;
    /**
     * Lists FlowRevisionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: FlowRevisionInstance[]) => any): Promise<FlowRevisionInstance[]>;
    /**
     * Lists FlowRevisionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FlowRevisionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: FlowRevisionListInstanceOptions, callback?: (error: Error | null, items: FlowRevisionInstance[]) => any): Promise<FlowRevisionInstance[]>;
    list(params?: any, callback?: any): Promise<FlowRevisionInstance[]>;
    /**
     * Retrieve a single page of FlowRevisionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: FlowRevisionPage) => any): Promise<FlowRevisionPage>;
    /**
     * Retrieve a single page of FlowRevisionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FlowRevisionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: FlowRevisionListInstancePageOptions, callback?: (error: Error | null, items: FlowRevisionPage) => any): Promise<FlowRevisionPage>;
    page(params?: any, callback?: any): Promise<FlowRevisionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FlowRevisionSolution {
    sid?: string;
}
export declare function FlowRevisionListInstance(version: V2, sid: string): FlowRevisionListInstance;
export declare class FlowRevisionPage extends Page<V2, FlowRevisionPayload, FlowRevisionResource, FlowRevisionInstance> {
    /**
     * Initialize the FlowRevisionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: FlowRevisionSolution);
    /**
     * Build an instance of FlowRevisionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: FlowRevisionResource): FlowRevisionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
