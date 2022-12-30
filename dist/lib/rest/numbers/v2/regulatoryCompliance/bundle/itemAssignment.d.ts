/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
/**
 * Options to pass to create a ItemAssignmentInstance
 *
 * @property { string } objectSid The SID of an object bag that holds information of the different items.
 */
export interface ItemAssignmentListInstanceCreateOptions {
    objectSid: string;
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
export interface ItemAssignmentListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: ItemAssignmentInstance, done: (err?: Error) => void) => void;
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
export interface ItemAssignmentListInstanceOptions {
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
export interface ItemAssignmentListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ItemAssignmentContext {
    /**
     * Remove a ItemAssignmentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ItemAssignmentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ItemAssignmentInstance
     */
    fetch(callback?: (error: Error | null, item?: ItemAssignmentInstance) => any): Promise<ItemAssignmentInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ItemAssignmentContextSolution {
    bundleSid?: string;
    sid?: string;
}
export declare class ItemAssignmentContextImpl implements ItemAssignmentContext {
    protected _version: V2;
    protected _solution: ItemAssignmentContextSolution;
    protected _uri: string;
    constructor(_version: V2, bundleSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<ItemAssignmentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ItemAssignmentContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ItemAssignmentPayload extends TwilioResponsePayload {
    results: ItemAssignmentResource[];
}
interface ItemAssignmentResource {
    sid?: string | null;
    bundle_sid?: string | null;
    account_sid?: string | null;
    object_sid?: string | null;
    date_created?: Date | null;
    url?: string | null;
}
export declare class ItemAssignmentInstance {
    protected _version: V2;
    protected _solution: ItemAssignmentContextSolution;
    protected _context?: ItemAssignmentContext;
    constructor(_version: V2, payload: ItemAssignmentResource, bundleSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The unique string that identifies the Bundle resource.
     */
    bundleSid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The sid of an object bag
     */
    objectSid?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The absolute URL of the Identity resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a ItemAssignmentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ItemAssignmentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ItemAssignmentInstance
     */
    fetch(callback?: (error: Error | null, item?: ItemAssignmentInstance) => any): Promise<ItemAssignmentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        bundleSid: string | null | undefined;
        accountSid: string | null | undefined;
        objectSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ItemAssignmentListInstance {
    (sid: string): ItemAssignmentContext;
    get(sid: string): ItemAssignmentContext;
    /**
     * Create a ItemAssignmentInstance
     *
     * @param { ItemAssignmentListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ItemAssignmentInstance
     */
    create(params: ItemAssignmentListInstanceCreateOptions, callback?: (error: Error | null, item?: ItemAssignmentInstance) => any): Promise<ItemAssignmentInstance>;
    create(params: any, callback?: any): Promise<ItemAssignmentInstance>;
    /**
     * Streams ItemAssignmentInstance records from the API.
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
    each(callback?: (item: ItemAssignmentInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ItemAssignmentInstance records from the API.
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
     * @param { ItemAssignmentListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ItemAssignmentListInstanceEachOptions, callback?: (item: ItemAssignmentInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ItemAssignmentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ItemAssignmentPage) => any): Promise<ItemAssignmentPage>;
    /**
     * Retrieve a single target page of ItemAssignmentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ItemAssignmentPage) => any): Promise<ItemAssignmentPage>;
    getPage(params?: any, callback?: any): Promise<ItemAssignmentPage>;
    /**
     * Lists ItemAssignmentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ItemAssignmentInstance[]) => any): Promise<ItemAssignmentInstance[]>;
    /**
     * Lists ItemAssignmentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ItemAssignmentListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ItemAssignmentListInstanceOptions, callback?: (error: Error | null, items: ItemAssignmentInstance[]) => any): Promise<ItemAssignmentInstance[]>;
    list(params?: any, callback?: any): Promise<ItemAssignmentInstance[]>;
    /**
     * Retrieve a single page of ItemAssignmentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ItemAssignmentPage) => any): Promise<ItemAssignmentPage>;
    /**
     * Retrieve a single page of ItemAssignmentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ItemAssignmentListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ItemAssignmentListInstancePageOptions, callback?: (error: Error | null, items: ItemAssignmentPage) => any): Promise<ItemAssignmentPage>;
    page(params?: any, callback?: any): Promise<ItemAssignmentPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ItemAssignmentSolution {
    bundleSid?: string;
}
export declare function ItemAssignmentListInstance(version: V2, bundleSid: string): ItemAssignmentListInstance;
export declare class ItemAssignmentPage extends Page<V2, ItemAssignmentPayload, ItemAssignmentResource, ItemAssignmentInstance> {
    /**
     * Initialize the ItemAssignmentPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: ItemAssignmentSolution);
    /**
     * Build an instance of ItemAssignmentInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ItemAssignmentResource): ItemAssignmentInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
