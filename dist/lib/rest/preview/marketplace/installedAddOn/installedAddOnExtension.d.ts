/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import Marketplace from "../../Marketplace";
/**
 * Options to pass to update a InstalledAddOnExtensionInstance
 *
 * @property { boolean } enabled Whether the Extension should be invoked.
 */
export interface InstalledAddOnExtensionContextUpdateOptions {
    enabled: boolean;
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
export interface InstalledAddOnExtensionListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: InstalledAddOnExtensionInstance, done: (err?: Error) => void) => void;
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
export interface InstalledAddOnExtensionListInstanceOptions {
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
export interface InstalledAddOnExtensionListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface InstalledAddOnExtensionContext {
    /**
     * Fetch a InstalledAddOnExtensionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InstalledAddOnExtensionInstance
     */
    fetch(callback?: (error: Error | null, item?: InstalledAddOnExtensionInstance) => any): Promise<InstalledAddOnExtensionInstance>;
    /**
     * Update a InstalledAddOnExtensionInstance
     *
     * @param { InstalledAddOnExtensionContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InstalledAddOnExtensionInstance
     */
    update(params: InstalledAddOnExtensionContextUpdateOptions, callback?: (error: Error | null, item?: InstalledAddOnExtensionInstance) => any): Promise<InstalledAddOnExtensionInstance>;
    update(params: any, callback?: any): Promise<InstalledAddOnExtensionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface InstalledAddOnExtensionContextSolution {
    installedAddOnSid?: string;
    sid?: string;
}
export declare class InstalledAddOnExtensionContextImpl implements InstalledAddOnExtensionContext {
    protected _version: Marketplace;
    protected _solution: InstalledAddOnExtensionContextSolution;
    protected _uri: string;
    constructor(_version: Marketplace, installedAddOnSid: string, sid: string);
    fetch(callback?: any): Promise<InstalledAddOnExtensionInstance>;
    update(params: any, callback?: any): Promise<InstalledAddOnExtensionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): InstalledAddOnExtensionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface InstalledAddOnExtensionPayload extends TwilioResponsePayload {
    extensions: InstalledAddOnExtensionResource[];
}
interface InstalledAddOnExtensionResource {
    sid?: string | null;
    installed_add_on_sid?: string | null;
    friendly_name?: string | null;
    product_name?: string | null;
    unique_name?: string | null;
    enabled?: boolean | null;
    url?: string | null;
}
export declare class InstalledAddOnExtensionInstance {
    protected _version: Marketplace;
    protected _solution: InstalledAddOnExtensionContextSolution;
    protected _context?: InstalledAddOnExtensionContext;
    constructor(_version: Marketplace, payload: InstalledAddOnExtensionResource, installedAddOnSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the InstalledAddOn resource to which this extension applies
     */
    installedAddOnSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The name of the Extension\'s Product
     */
    productName?: string | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * Whether the Extension will be invoked
     */
    enabled?: boolean | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a InstalledAddOnExtensionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InstalledAddOnExtensionInstance
     */
    fetch(callback?: (error: Error | null, item?: InstalledAddOnExtensionInstance) => any): Promise<InstalledAddOnExtensionInstance>;
    /**
     * Update a InstalledAddOnExtensionInstance
     *
     * @param { InstalledAddOnExtensionContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InstalledAddOnExtensionInstance
     */
    update(params: InstalledAddOnExtensionContextUpdateOptions, callback?: (error: Error | null, item?: InstalledAddOnExtensionInstance) => any): Promise<InstalledAddOnExtensionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        installedAddOnSid: string | null | undefined;
        friendlyName: string | null | undefined;
        productName: string | null | undefined;
        uniqueName: string | null | undefined;
        enabled: boolean | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface InstalledAddOnExtensionListInstance {
    (sid: string): InstalledAddOnExtensionContext;
    get(sid: string): InstalledAddOnExtensionContext;
    /**
     * Streams InstalledAddOnExtensionInstance records from the API.
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
    each(callback?: (item: InstalledAddOnExtensionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams InstalledAddOnExtensionInstance records from the API.
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
     * @param { InstalledAddOnExtensionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: InstalledAddOnExtensionListInstanceEachOptions, callback?: (item: InstalledAddOnExtensionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of InstalledAddOnExtensionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: InstalledAddOnExtensionPage) => any): Promise<InstalledAddOnExtensionPage>;
    /**
     * Retrieve a single target page of InstalledAddOnExtensionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: InstalledAddOnExtensionPage) => any): Promise<InstalledAddOnExtensionPage>;
    getPage(params?: any, callback?: any): Promise<InstalledAddOnExtensionPage>;
    /**
     * Lists InstalledAddOnExtensionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: InstalledAddOnExtensionInstance[]) => any): Promise<InstalledAddOnExtensionInstance[]>;
    /**
     * Lists InstalledAddOnExtensionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { InstalledAddOnExtensionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: InstalledAddOnExtensionListInstanceOptions, callback?: (error: Error | null, items: InstalledAddOnExtensionInstance[]) => any): Promise<InstalledAddOnExtensionInstance[]>;
    list(params?: any, callback?: any): Promise<InstalledAddOnExtensionInstance[]>;
    /**
     * Retrieve a single page of InstalledAddOnExtensionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: InstalledAddOnExtensionPage) => any): Promise<InstalledAddOnExtensionPage>;
    /**
     * Retrieve a single page of InstalledAddOnExtensionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { InstalledAddOnExtensionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: InstalledAddOnExtensionListInstancePageOptions, callback?: (error: Error | null, items: InstalledAddOnExtensionPage) => any): Promise<InstalledAddOnExtensionPage>;
    page(params?: any, callback?: any): Promise<InstalledAddOnExtensionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface InstalledAddOnExtensionSolution {
    installedAddOnSid?: string;
}
export declare function InstalledAddOnExtensionListInstance(version: Marketplace, installedAddOnSid: string): InstalledAddOnExtensionListInstance;
export declare class InstalledAddOnExtensionPage extends Page<Marketplace, InstalledAddOnExtensionPayload, InstalledAddOnExtensionResource, InstalledAddOnExtensionInstance> {
    /**
     * Initialize the InstalledAddOnExtensionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Marketplace, response: Response<string>, solution: InstalledAddOnExtensionSolution);
    /**
     * Build an instance of InstalledAddOnExtensionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: InstalledAddOnExtensionResource): InstalledAddOnExtensionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
