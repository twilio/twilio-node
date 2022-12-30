/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
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
export interface DayListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: DayInstance, done: (err?: Error) => void) => void;
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
export interface DayListInstanceOptions {
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
export interface DayListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface DayContext {
    /**
     * Fetch a DayInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DayInstance
     */
    fetch(callback?: (error: Error | null, item?: DayInstance) => any): Promise<DayInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DayContextSolution {
    resourceType?: string;
    day?: string;
}
export declare class DayContextImpl implements DayContext {
    protected _version: V1;
    protected _solution: DayContextSolution;
    protected _uri: string;
    constructor(_version: V1, resourceType: string, day: string);
    fetch(callback?: any): Promise<DayInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): DayContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface DayPayload extends TwilioResponsePayload {
    days: DayResource[];
}
interface DayResource {
    redirect_to?: string | null;
    day?: string | null;
    size?: number | null;
    create_date?: string | null;
    friendly_name?: string | null;
    resource_type?: string | null;
}
export declare class DayInstance {
    protected _version: V1;
    protected _solution: DayContextSolution;
    protected _context?: DayContext;
    constructor(_version: V1, payload: DayResource, resourceType: string, day?: string);
    redirectTo?: string | null;
    /**
     * The date of the data in the file
     */
    day?: string | null;
    /**
     * Size of the file in bytes
     */
    size?: number | null;
    /**
     * The date when resource is created
     */
    createDate?: string | null;
    /**
     * The friendly name specified when creating the job
     */
    friendlyName?: string | null;
    /**
     * The type of communication – Messages, Calls, Conferences, and Participants
     */
    resourceType?: string | null;
    private get _proxy();
    /**
     * Fetch a DayInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DayInstance
     */
    fetch(callback?: (error: Error | null, item?: DayInstance) => any): Promise<DayInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        redirectTo: string | null | undefined;
        day: string | null | undefined;
        size: number | null | undefined;
        createDate: string | null | undefined;
        friendlyName: string | null | undefined;
        resourceType: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface DayListInstance {
    (day: string): DayContext;
    get(day: string): DayContext;
    /**
     * Streams DayInstance records from the API.
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
    each(callback?: (item: DayInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams DayInstance records from the API.
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
     * @param { DayListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: DayListInstanceEachOptions, callback?: (item: DayInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of DayInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: DayPage) => any): Promise<DayPage>;
    /**
     * Retrieve a single target page of DayInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: DayPage) => any): Promise<DayPage>;
    getPage(params?: any, callback?: any): Promise<DayPage>;
    /**
     * Lists DayInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: DayInstance[]) => any): Promise<DayInstance[]>;
    /**
     * Lists DayInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DayListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: DayListInstanceOptions, callback?: (error: Error | null, items: DayInstance[]) => any): Promise<DayInstance[]>;
    list(params?: any, callback?: any): Promise<DayInstance[]>;
    /**
     * Retrieve a single page of DayInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: DayPage) => any): Promise<DayPage>;
    /**
     * Retrieve a single page of DayInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DayListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: DayListInstancePageOptions, callback?: (error: Error | null, items: DayPage) => any): Promise<DayPage>;
    page(params?: any, callback?: any): Promise<DayPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DaySolution {
    resourceType?: string;
}
export declare function DayListInstance(version: V1, resourceType: string): DayListInstance;
export declare class DayPage extends Page<V1, DayPayload, DayResource, DayInstance> {
    /**
     * Initialize the DayPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: DaySolution);
    /**
     * Build an instance of DayInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: DayResource): DayInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
