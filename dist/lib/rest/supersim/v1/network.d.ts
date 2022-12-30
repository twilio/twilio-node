/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
/**
 * Options to pass to each
 *
 * @property { string } [isoCountry] The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Network resources to read.
 * @property { string } [mcc] The \'mobile country code\' of a country. Network resources with this `mcc` in their `identifiers` will be read.
 * @property { string } [mnc] The \'mobile network code\' of a mobile operator network. Network resources with this `mnc` in their `identifiers` will be read.
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
export interface NetworkListInstanceEachOptions {
    isoCountry?: string;
    mcc?: string;
    mnc?: string;
    pageSize?: number;
    callback?: (item: NetworkInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [isoCountry] The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Network resources to read.
 * @property { string } [mcc] The \'mobile country code\' of a country. Network resources with this `mcc` in their `identifiers` will be read.
 * @property { string } [mnc] The \'mobile network code\' of a mobile operator network. Network resources with this `mnc` in their `identifiers` will be read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface NetworkListInstanceOptions {
    isoCountry?: string;
    mcc?: string;
    mnc?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [isoCountry] The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Network resources to read.
 * @property { string } [mcc] The \'mobile country code\' of a country. Network resources with this `mcc` in their `identifiers` will be read.
 * @property { string } [mnc] The \'mobile network code\' of a mobile operator network. Network resources with this `mnc` in their `identifiers` will be read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface NetworkListInstancePageOptions {
    isoCountry?: string;
    mcc?: string;
    mnc?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface NetworkContext {
    /**
     * Fetch a NetworkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NetworkInstance
     */
    fetch(callback?: (error: Error | null, item?: NetworkInstance) => any): Promise<NetworkInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NetworkContextSolution {
    sid?: string;
}
export declare class NetworkContextImpl implements NetworkContext {
    protected _version: V1;
    protected _solution: NetworkContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    fetch(callback?: any): Promise<NetworkInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): NetworkContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface NetworkPayload extends TwilioResponsePayload {
    networks: NetworkResource[];
}
interface NetworkResource {
    sid?: string | null;
    friendly_name?: string | null;
    url?: string | null;
    iso_country?: string | null;
    identifiers?: Array<any> | null;
}
export declare class NetworkInstance {
    protected _version: V1;
    protected _solution: NetworkContextSolution;
    protected _context?: NetworkContext;
    constructor(_version: V1, payload: NetworkResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * A human readable identifier of this resource
     */
    friendlyName?: string | null;
    /**
     * The absolute URL of the Network resource
     */
    url?: string | null;
    /**
     * The ISO country code of the Network resource
     */
    isoCountry?: string | null;
    /**
     * The MCC/MNCs included in the Network resource
     */
    identifiers?: Array<any> | null;
    private get _proxy();
    /**
     * Fetch a NetworkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NetworkInstance
     */
    fetch(callback?: (error: Error | null, item?: NetworkInstance) => any): Promise<NetworkInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        friendlyName: string | null | undefined;
        url: string | null | undefined;
        isoCountry: string | null | undefined;
        identifiers: any[] | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface NetworkListInstance {
    (sid: string): NetworkContext;
    get(sid: string): NetworkContext;
    /**
     * Streams NetworkInstance records from the API.
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
    each(callback?: (item: NetworkInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams NetworkInstance records from the API.
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
     * @param { NetworkListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: NetworkListInstanceEachOptions, callback?: (item: NetworkInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of NetworkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: NetworkPage) => any): Promise<NetworkPage>;
    /**
     * Retrieve a single target page of NetworkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: NetworkPage) => any): Promise<NetworkPage>;
    getPage(params?: any, callback?: any): Promise<NetworkPage>;
    /**
     * Lists NetworkInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: NetworkInstance[]) => any): Promise<NetworkInstance[]>;
    /**
     * Lists NetworkInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { NetworkListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: NetworkListInstanceOptions, callback?: (error: Error | null, items: NetworkInstance[]) => any): Promise<NetworkInstance[]>;
    list(params?: any, callback?: any): Promise<NetworkInstance[]>;
    /**
     * Retrieve a single page of NetworkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: NetworkPage) => any): Promise<NetworkPage>;
    /**
     * Retrieve a single page of NetworkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { NetworkListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: NetworkListInstancePageOptions, callback?: (error: Error | null, items: NetworkPage) => any): Promise<NetworkPage>;
    page(params?: any, callback?: any): Promise<NetworkPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NetworkSolution {
}
export declare function NetworkListInstance(version: V1): NetworkListInstance;
export declare class NetworkPage extends Page<V1, NetworkPayload, NetworkResource, NetworkInstance> {
    /**
     * Initialize the NetworkPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: NetworkSolution);
    /**
     * Build an instance of NetworkInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: NetworkResource): NetworkInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
