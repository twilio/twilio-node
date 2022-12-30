/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to create a NetworkAccessProfileNetworkInstance
 *
 * @property { string } network The SID of the Network resource to be added to the Network Access Profile resource.
 */
export interface NetworkAccessProfileNetworkListInstanceCreateOptions {
    network: string;
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
export interface NetworkAccessProfileNetworkListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: NetworkAccessProfileNetworkInstance, done: (err?: Error) => void) => void;
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
export interface NetworkAccessProfileNetworkListInstanceOptions {
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
export interface NetworkAccessProfileNetworkListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface NetworkAccessProfileNetworkContext {
    /**
     * Remove a NetworkAccessProfileNetworkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a NetworkAccessProfileNetworkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NetworkAccessProfileNetworkInstance
     */
    fetch(callback?: (error: Error | null, item?: NetworkAccessProfileNetworkInstance) => any): Promise<NetworkAccessProfileNetworkInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NetworkAccessProfileNetworkContextSolution {
    networkAccessProfileSid?: string;
    sid?: string;
}
export declare class NetworkAccessProfileNetworkContextImpl implements NetworkAccessProfileNetworkContext {
    protected _version: V1;
    protected _solution: NetworkAccessProfileNetworkContextSolution;
    protected _uri: string;
    constructor(_version: V1, networkAccessProfileSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<NetworkAccessProfileNetworkInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): NetworkAccessProfileNetworkContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface NetworkAccessProfileNetworkPayload extends TwilioResponsePayload {
    networks: NetworkAccessProfileNetworkResource[];
}
interface NetworkAccessProfileNetworkResource {
    sid?: string | null;
    network_access_profile_sid?: string | null;
    friendly_name?: string | null;
    iso_country?: string | null;
    identifiers?: Array<any> | null;
    url?: string | null;
}
export declare class NetworkAccessProfileNetworkInstance {
    protected _version: V1;
    protected _solution: NetworkAccessProfileNetworkContextSolution;
    protected _context?: NetworkAccessProfileNetworkContext;
    constructor(_version: V1, payload: NetworkAccessProfileNetworkResource, networkAccessProfileSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The unique string that identifies the Network Access Profile resource
     */
    networkAccessProfileSid?: string | null;
    /**
     * A human readable identifier of this resource
     */
    friendlyName?: string | null;
    /**
     * The ISO country code of the Network resource
     */
    isoCountry?: string | null;
    /**
     * The MCC/MNCs included in the resource
     */
    identifiers?: Array<any> | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a NetworkAccessProfileNetworkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a NetworkAccessProfileNetworkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NetworkAccessProfileNetworkInstance
     */
    fetch(callback?: (error: Error | null, item?: NetworkAccessProfileNetworkInstance) => any): Promise<NetworkAccessProfileNetworkInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        networkAccessProfileSid: string | null | undefined;
        friendlyName: string | null | undefined;
        isoCountry: string | null | undefined;
        identifiers: any[] | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface NetworkAccessProfileNetworkListInstance {
    (sid: string): NetworkAccessProfileNetworkContext;
    get(sid: string): NetworkAccessProfileNetworkContext;
    /**
     * Create a NetworkAccessProfileNetworkInstance
     *
     * @param { NetworkAccessProfileNetworkListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NetworkAccessProfileNetworkInstance
     */
    create(params: NetworkAccessProfileNetworkListInstanceCreateOptions, callback?: (error: Error | null, item?: NetworkAccessProfileNetworkInstance) => any): Promise<NetworkAccessProfileNetworkInstance>;
    create(params: any, callback?: any): Promise<NetworkAccessProfileNetworkInstance>;
    /**
     * Streams NetworkAccessProfileNetworkInstance records from the API.
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
    each(callback?: (item: NetworkAccessProfileNetworkInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams NetworkAccessProfileNetworkInstance records from the API.
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
     * @param { NetworkAccessProfileNetworkListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: NetworkAccessProfileNetworkListInstanceEachOptions, callback?: (item: NetworkAccessProfileNetworkInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of NetworkAccessProfileNetworkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: NetworkAccessProfileNetworkPage) => any): Promise<NetworkAccessProfileNetworkPage>;
    /**
     * Retrieve a single target page of NetworkAccessProfileNetworkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: NetworkAccessProfileNetworkPage) => any): Promise<NetworkAccessProfileNetworkPage>;
    getPage(params?: any, callback?: any): Promise<NetworkAccessProfileNetworkPage>;
    /**
     * Lists NetworkAccessProfileNetworkInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: NetworkAccessProfileNetworkInstance[]) => any): Promise<NetworkAccessProfileNetworkInstance[]>;
    /**
     * Lists NetworkAccessProfileNetworkInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { NetworkAccessProfileNetworkListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: NetworkAccessProfileNetworkListInstanceOptions, callback?: (error: Error | null, items: NetworkAccessProfileNetworkInstance[]) => any): Promise<NetworkAccessProfileNetworkInstance[]>;
    list(params?: any, callback?: any): Promise<NetworkAccessProfileNetworkInstance[]>;
    /**
     * Retrieve a single page of NetworkAccessProfileNetworkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: NetworkAccessProfileNetworkPage) => any): Promise<NetworkAccessProfileNetworkPage>;
    /**
     * Retrieve a single page of NetworkAccessProfileNetworkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { NetworkAccessProfileNetworkListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: NetworkAccessProfileNetworkListInstancePageOptions, callback?: (error: Error | null, items: NetworkAccessProfileNetworkPage) => any): Promise<NetworkAccessProfileNetworkPage>;
    page(params?: any, callback?: any): Promise<NetworkAccessProfileNetworkPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NetworkAccessProfileNetworkSolution {
    networkAccessProfileSid?: string;
}
export declare function NetworkAccessProfileNetworkListInstance(version: V1, networkAccessProfileSid: string): NetworkAccessProfileNetworkListInstance;
export declare class NetworkAccessProfileNetworkPage extends Page<V1, NetworkAccessProfileNetworkPayload, NetworkAccessProfileNetworkResource, NetworkAccessProfileNetworkInstance> {
    /**
     * Initialize the NetworkAccessProfileNetworkPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: NetworkAccessProfileNetworkSolution);
    /**
     * Build an instance of NetworkAccessProfileNetworkInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: NetworkAccessProfileNetworkResource): NetworkAccessProfileNetworkInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
