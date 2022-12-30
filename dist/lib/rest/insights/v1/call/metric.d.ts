/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
declare type MetricStreamDirection = "unknown" | "inbound" | "outbound" | "both";
declare type MetricTwilioEdge = "unknown_edge" | "carrier_edge" | "sip_edge" | "sdk_edge" | "client_edge";
/**
 * Options to pass to each
 *
 * @property { MetricTwilioEdge } [edge]
 * @property { MetricStreamDirection } [direction]
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
export interface MetricListInstanceEachOptions {
    edge?: MetricTwilioEdge;
    direction?: MetricStreamDirection;
    pageSize?: number;
    callback?: (item: MetricInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { MetricTwilioEdge } [edge]
 * @property { MetricStreamDirection } [direction]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MetricListInstanceOptions {
    edge?: MetricTwilioEdge;
    direction?: MetricStreamDirection;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { MetricTwilioEdge } [edge]
 * @property { MetricStreamDirection } [direction]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MetricListInstancePageOptions {
    edge?: MetricTwilioEdge;
    direction?: MetricStreamDirection;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface MetricListInstance {
    /**
     * Streams MetricInstance records from the API.
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
    each(callback?: (item: MetricInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams MetricInstance records from the API.
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
     * @param { MetricListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: MetricListInstanceEachOptions, callback?: (item: MetricInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of MetricInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: MetricPage) => any): Promise<MetricPage>;
    /**
     * Retrieve a single target page of MetricInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: MetricPage) => any): Promise<MetricPage>;
    getPage(params?: any, callback?: any): Promise<MetricPage>;
    /**
     * Lists MetricInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: MetricInstance[]) => any): Promise<MetricInstance[]>;
    /**
     * Lists MetricInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MetricListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: MetricListInstanceOptions, callback?: (error: Error | null, items: MetricInstance[]) => any): Promise<MetricInstance[]>;
    list(params?: any, callback?: any): Promise<MetricInstance[]>;
    /**
     * Retrieve a single page of MetricInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: MetricPage) => any): Promise<MetricPage>;
    /**
     * Retrieve a single page of MetricInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MetricListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: MetricListInstancePageOptions, callback?: (error: Error | null, items: MetricPage) => any): Promise<MetricPage>;
    page(params?: any, callback?: any): Promise<MetricPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MetricSolution {
    callSid?: string;
}
export declare function MetricListInstance(version: V1, callSid: string): MetricListInstance;
interface MetricPayload extends TwilioResponsePayload {
    metrics: MetricResource[];
}
interface MetricResource {
    timestamp?: string | null;
    call_sid?: string | null;
    account_sid?: string | null;
    edge?: MetricTwilioEdge;
    direction?: MetricStreamDirection;
    carrier_edge?: any | null;
    sip_edge?: any | null;
    sdk_edge?: any | null;
    client_edge?: any | null;
}
export declare class MetricInstance {
    protected _version: V1;
    constructor(_version: V1, payload: MetricResource, callSid: string);
    timestamp?: string | null;
    callSid?: string | null;
    accountSid?: string | null;
    edge?: MetricTwilioEdge;
    direction?: MetricStreamDirection;
    carrierEdge?: any | null;
    sipEdge?: any | null;
    sdkEdge?: any | null;
    clientEdge?: any | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        timestamp: string | null | undefined;
        callSid: string | null | undefined;
        accountSid: string | null | undefined;
        edge: MetricTwilioEdge | undefined;
        direction: MetricStreamDirection | undefined;
        carrierEdge: any;
        sipEdge: any;
        sdkEdge: any;
        clientEdge: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class MetricPage extends Page<V1, MetricPayload, MetricResource, MetricInstance> {
    /**
     * Initialize the MetricPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: MetricSolution);
    /**
     * Build an instance of MetricInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: MetricResource): MetricInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
