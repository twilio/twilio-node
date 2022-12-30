/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
declare type SimIpAddressIpAddressVersion = "IPv4" | "IPv6";
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
export interface SimIpAddressListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: SimIpAddressInstance, done: (err?: Error) => void) => void;
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
export interface SimIpAddressListInstanceOptions {
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
export interface SimIpAddressListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SimIpAddressListInstance {
    /**
     * Streams SimIpAddressInstance records from the API.
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
    each(callback?: (item: SimIpAddressInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SimIpAddressInstance records from the API.
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
     * @param { SimIpAddressListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SimIpAddressListInstanceEachOptions, callback?: (item: SimIpAddressInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SimIpAddressInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SimIpAddressPage) => any): Promise<SimIpAddressPage>;
    /**
     * Retrieve a single target page of SimIpAddressInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SimIpAddressPage) => any): Promise<SimIpAddressPage>;
    getPage(params?: any, callback?: any): Promise<SimIpAddressPage>;
    /**
     * Lists SimIpAddressInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SimIpAddressInstance[]) => any): Promise<SimIpAddressInstance[]>;
    /**
     * Lists SimIpAddressInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SimIpAddressListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SimIpAddressListInstanceOptions, callback?: (error: Error | null, items: SimIpAddressInstance[]) => any): Promise<SimIpAddressInstance[]>;
    list(params?: any, callback?: any): Promise<SimIpAddressInstance[]>;
    /**
     * Retrieve a single page of SimIpAddressInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SimIpAddressPage) => any): Promise<SimIpAddressPage>;
    /**
     * Retrieve a single page of SimIpAddressInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SimIpAddressListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SimIpAddressListInstancePageOptions, callback?: (error: Error | null, items: SimIpAddressPage) => any): Promise<SimIpAddressPage>;
    page(params?: any, callback?: any): Promise<SimIpAddressPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SimIpAddressSolution {
    simSid?: string;
}
export declare function SimIpAddressListInstance(version: V1, simSid: string): SimIpAddressListInstance;
interface SimIpAddressPayload extends TwilioResponsePayload {
    ip_addresses: SimIpAddressResource[];
}
interface SimIpAddressResource {
    ip_address?: string | null;
    ip_address_version?: SimIpAddressIpAddressVersion;
}
export declare class SimIpAddressInstance {
    protected _version: V1;
    constructor(_version: V1, payload: SimIpAddressResource, simSid: string);
    /**
     * IP address assigned to the given Super SIM
     */
    ipAddress?: string | null;
    ipAddressVersion?: SimIpAddressIpAddressVersion;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        ipAddress: string | null | undefined;
        ipAddressVersion: SimIpAddressIpAddressVersion | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class SimIpAddressPage extends Page<V1, SimIpAddressPayload, SimIpAddressResource, SimIpAddressInstance> {
    /**
     * Initialize the SimIpAddressPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SimIpAddressSolution);
    /**
     * Build an instance of SimIpAddressInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SimIpAddressResource): SimIpAddressInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
