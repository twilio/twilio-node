/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
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
export interface HighriskSpecialPrefixListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: HighriskSpecialPrefixInstance, done: (err?: Error) => void) => void;
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
export interface HighriskSpecialPrefixListInstanceOptions {
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
export interface HighriskSpecialPrefixListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface HighriskSpecialPrefixListInstance {
    /**
     * Streams HighriskSpecialPrefixInstance records from the API.
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
    each(callback?: (item: HighriskSpecialPrefixInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams HighriskSpecialPrefixInstance records from the API.
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
     * @param { HighriskSpecialPrefixListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: HighriskSpecialPrefixListInstanceEachOptions, callback?: (item: HighriskSpecialPrefixInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of HighriskSpecialPrefixInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: HighriskSpecialPrefixPage) => any): Promise<HighriskSpecialPrefixPage>;
    /**
     * Retrieve a single target page of HighriskSpecialPrefixInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: HighriskSpecialPrefixPage) => any): Promise<HighriskSpecialPrefixPage>;
    getPage(params?: any, callback?: any): Promise<HighriskSpecialPrefixPage>;
    /**
     * Lists HighriskSpecialPrefixInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: HighriskSpecialPrefixInstance[]) => any): Promise<HighriskSpecialPrefixInstance[]>;
    /**
     * Lists HighriskSpecialPrefixInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { HighriskSpecialPrefixListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: HighriskSpecialPrefixListInstanceOptions, callback?: (error: Error | null, items: HighriskSpecialPrefixInstance[]) => any): Promise<HighriskSpecialPrefixInstance[]>;
    list(params?: any, callback?: any): Promise<HighriskSpecialPrefixInstance[]>;
    /**
     * Retrieve a single page of HighriskSpecialPrefixInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: HighriskSpecialPrefixPage) => any): Promise<HighriskSpecialPrefixPage>;
    /**
     * Retrieve a single page of HighriskSpecialPrefixInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { HighriskSpecialPrefixListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: HighriskSpecialPrefixListInstancePageOptions, callback?: (error: Error | null, items: HighriskSpecialPrefixPage) => any): Promise<HighriskSpecialPrefixPage>;
    page(params?: any, callback?: any): Promise<HighriskSpecialPrefixPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface HighriskSpecialPrefixSolution {
    isoCode?: string;
}
export declare function HighriskSpecialPrefixListInstance(version: V1, isoCode: string): HighriskSpecialPrefixListInstance;
interface HighriskSpecialPrefixPayload extends TwilioResponsePayload {
    content: HighriskSpecialPrefixResource[];
}
interface HighriskSpecialPrefixResource {
    prefix?: string | null;
}
export declare class HighriskSpecialPrefixInstance {
    protected _version: V1;
    constructor(_version: V1, payload: HighriskSpecialPrefixResource, isoCode: string);
    /**
     * A prefix that includes the E.164 assigned country code
     */
    prefix?: string | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        prefix: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class HighriskSpecialPrefixPage extends Page<V1, HighriskSpecialPrefixPayload, HighriskSpecialPrefixResource, HighriskSpecialPrefixInstance> {
    /**
     * Initialize the HighriskSpecialPrefixPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: HighriskSpecialPrefixSolution);
    /**
     * Build an instance of HighriskSpecialPrefixInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: HighriskSpecialPrefixResource): HighriskSpecialPrefixInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
