/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import Marketplace from "../../Marketplace";
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
export interface AvailableAddOnExtensionListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: AvailableAddOnExtensionInstance, done: (err?: Error) => void) => void;
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
export interface AvailableAddOnExtensionListInstanceOptions {
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
export interface AvailableAddOnExtensionListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface AvailableAddOnExtensionContext {
    /**
     * Fetch a AvailableAddOnExtensionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AvailableAddOnExtensionInstance
     */
    fetch(callback?: (error: Error | null, item?: AvailableAddOnExtensionInstance) => any): Promise<AvailableAddOnExtensionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AvailableAddOnExtensionContextSolution {
    availableAddOnSid?: string;
    sid?: string;
}
export declare class AvailableAddOnExtensionContextImpl implements AvailableAddOnExtensionContext {
    protected _version: Marketplace;
    protected _solution: AvailableAddOnExtensionContextSolution;
    protected _uri: string;
    constructor(_version: Marketplace, availableAddOnSid: string, sid: string);
    fetch(callback?: any): Promise<AvailableAddOnExtensionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AvailableAddOnExtensionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AvailableAddOnExtensionPayload extends TwilioResponsePayload {
    extensions: AvailableAddOnExtensionResource[];
}
interface AvailableAddOnExtensionResource {
    sid?: string | null;
    available_add_on_sid?: string | null;
    friendly_name?: string | null;
    product_name?: string | null;
    unique_name?: string | null;
    url?: string | null;
}
export declare class AvailableAddOnExtensionInstance {
    protected _version: Marketplace;
    protected _solution: AvailableAddOnExtensionContextSolution;
    protected _context?: AvailableAddOnExtensionContext;
    constructor(_version: Marketplace, payload: AvailableAddOnExtensionResource, availableAddOnSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the AvailableAddOn resource to which this extension applies
     */
    availableAddOnSid?: string | null;
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
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a AvailableAddOnExtensionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AvailableAddOnExtensionInstance
     */
    fetch(callback?: (error: Error | null, item?: AvailableAddOnExtensionInstance) => any): Promise<AvailableAddOnExtensionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        availableAddOnSid: string | null | undefined;
        friendlyName: string | null | undefined;
        productName: string | null | undefined;
        uniqueName: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AvailableAddOnExtensionListInstance {
    (sid: string): AvailableAddOnExtensionContext;
    get(sid: string): AvailableAddOnExtensionContext;
    /**
     * Streams AvailableAddOnExtensionInstance records from the API.
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
    each(callback?: (item: AvailableAddOnExtensionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams AvailableAddOnExtensionInstance records from the API.
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
     * @param { AvailableAddOnExtensionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: AvailableAddOnExtensionListInstanceEachOptions, callback?: (item: AvailableAddOnExtensionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of AvailableAddOnExtensionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: AvailableAddOnExtensionPage) => any): Promise<AvailableAddOnExtensionPage>;
    /**
     * Retrieve a single target page of AvailableAddOnExtensionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: AvailableAddOnExtensionPage) => any): Promise<AvailableAddOnExtensionPage>;
    getPage(params?: any, callback?: any): Promise<AvailableAddOnExtensionPage>;
    /**
     * Lists AvailableAddOnExtensionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AvailableAddOnExtensionInstance[]) => any): Promise<AvailableAddOnExtensionInstance[]>;
    /**
     * Lists AvailableAddOnExtensionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AvailableAddOnExtensionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: AvailableAddOnExtensionListInstanceOptions, callback?: (error: Error | null, items: AvailableAddOnExtensionInstance[]) => any): Promise<AvailableAddOnExtensionInstance[]>;
    list(params?: any, callback?: any): Promise<AvailableAddOnExtensionInstance[]>;
    /**
     * Retrieve a single page of AvailableAddOnExtensionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AvailableAddOnExtensionPage) => any): Promise<AvailableAddOnExtensionPage>;
    /**
     * Retrieve a single page of AvailableAddOnExtensionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AvailableAddOnExtensionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: AvailableAddOnExtensionListInstancePageOptions, callback?: (error: Error | null, items: AvailableAddOnExtensionPage) => any): Promise<AvailableAddOnExtensionPage>;
    page(params?: any, callback?: any): Promise<AvailableAddOnExtensionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AvailableAddOnExtensionSolution {
    availableAddOnSid?: string;
}
export declare function AvailableAddOnExtensionListInstance(version: Marketplace, availableAddOnSid: string): AvailableAddOnExtensionListInstance;
export declare class AvailableAddOnExtensionPage extends Page<Marketplace, AvailableAddOnExtensionPayload, AvailableAddOnExtensionResource, AvailableAddOnExtensionInstance> {
    /**
     * Initialize the AvailableAddOnExtensionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Marketplace, response: Response<string>, solution: AvailableAddOnExtensionSolution);
    /**
     * Build an instance of AvailableAddOnExtensionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AvailableAddOnExtensionResource): AvailableAddOnExtensionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
