/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { NetworkAccessProfileNetworkListInstance } from "./networkAccessProfile/networkAccessProfileNetwork";
/**
 * Options to pass to update a NetworkAccessProfileInstance
 *
 * @property { string } [uniqueName] The new unique name of the Network Access Profile.
 */
export interface NetworkAccessProfileContextUpdateOptions {
    uniqueName?: string;
}
/**
 * Options to pass to create a NetworkAccessProfileInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used in place of the resource\\\'s `sid` in the URL to address the resource.
 * @property { Array<string> } [networks] List of Network SIDs that this Network Access Profile will allow connections to.
 */
export interface NetworkAccessProfileListInstanceCreateOptions {
    uniqueName?: string;
    networks?: Array<string>;
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
export interface NetworkAccessProfileListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: NetworkAccessProfileInstance, done: (err?: Error) => void) => void;
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
export interface NetworkAccessProfileListInstanceOptions {
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
export interface NetworkAccessProfileListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface NetworkAccessProfileContext {
    networks: NetworkAccessProfileNetworkListInstance;
    /**
     * Fetch a NetworkAccessProfileInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NetworkAccessProfileInstance
     */
    fetch(callback?: (error: Error | null, item?: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
    /**
     * Update a NetworkAccessProfileInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NetworkAccessProfileInstance
     */
    update(callback?: (error: Error | null, item?: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
    /**
     * Update a NetworkAccessProfileInstance
     *
     * @param { NetworkAccessProfileContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NetworkAccessProfileInstance
     */
    update(params: NetworkAccessProfileContextUpdateOptions, callback?: (error: Error | null, item?: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
    update(params?: any, callback?: any): Promise<NetworkAccessProfileInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NetworkAccessProfileContextSolution {
    sid?: string;
}
export declare class NetworkAccessProfileContextImpl implements NetworkAccessProfileContext {
    protected _version: V1;
    protected _solution: NetworkAccessProfileContextSolution;
    protected _uri: string;
    protected _networks?: NetworkAccessProfileNetworkListInstance;
    constructor(_version: V1, sid: string);
    get networks(): NetworkAccessProfileNetworkListInstance;
    fetch(callback?: any): Promise<NetworkAccessProfileInstance>;
    update(params?: any, callback?: any): Promise<NetworkAccessProfileInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): NetworkAccessProfileContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface NetworkAccessProfilePayload extends TwilioResponsePayload {
    network_access_profiles: NetworkAccessProfileResource[];
}
interface NetworkAccessProfileResource {
    sid?: string | null;
    unique_name?: string | null;
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class NetworkAccessProfileInstance {
    protected _version: V1;
    protected _solution: NetworkAccessProfileContextSolution;
    protected _context?: NetworkAccessProfileContext;
    constructor(_version: V1, payload: NetworkAccessProfileResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The SID of the Account that the Network Access Profile belongs to
     */
    accountSid?: string | null;
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
    links?: object | null;
    private get _proxy();
    /**
     * Fetch a NetworkAccessProfileInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NetworkAccessProfileInstance
     */
    fetch(callback?: (error: Error | null, item?: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
    /**
     * Update a NetworkAccessProfileInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NetworkAccessProfileInstance
     */
    update(callback?: (error: Error | null, item?: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
    /**
     * Update a NetworkAccessProfileInstance
     *
     * @param { NetworkAccessProfileContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NetworkAccessProfileInstance
     */
    update(params: NetworkAccessProfileContextUpdateOptions, callback?: (error: Error | null, item?: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
    /**
     * Access the networks.
     */
    networks(): NetworkAccessProfileNetworkListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        uniqueName: string | null | undefined;
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface NetworkAccessProfileListInstance {
    (sid: string): NetworkAccessProfileContext;
    get(sid: string): NetworkAccessProfileContext;
    /**
     * Create a NetworkAccessProfileInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NetworkAccessProfileInstance
     */
    create(callback?: (error: Error | null, item?: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
    /**
     * Create a NetworkAccessProfileInstance
     *
     * @param { NetworkAccessProfileListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NetworkAccessProfileInstance
     */
    create(params: NetworkAccessProfileListInstanceCreateOptions, callback?: (error: Error | null, item?: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
    create(params?: any, callback?: any): Promise<NetworkAccessProfileInstance>;
    /**
     * Streams NetworkAccessProfileInstance records from the API.
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
    each(callback?: (item: NetworkAccessProfileInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams NetworkAccessProfileInstance records from the API.
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
     * @param { NetworkAccessProfileListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: NetworkAccessProfileListInstanceEachOptions, callback?: (item: NetworkAccessProfileInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of NetworkAccessProfileInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: NetworkAccessProfilePage) => any): Promise<NetworkAccessProfilePage>;
    /**
     * Retrieve a single target page of NetworkAccessProfileInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: NetworkAccessProfilePage) => any): Promise<NetworkAccessProfilePage>;
    getPage(params?: any, callback?: any): Promise<NetworkAccessProfilePage>;
    /**
     * Lists NetworkAccessProfileInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: NetworkAccessProfileInstance[]) => any): Promise<NetworkAccessProfileInstance[]>;
    /**
     * Lists NetworkAccessProfileInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { NetworkAccessProfileListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: NetworkAccessProfileListInstanceOptions, callback?: (error: Error | null, items: NetworkAccessProfileInstance[]) => any): Promise<NetworkAccessProfileInstance[]>;
    list(params?: any, callback?: any): Promise<NetworkAccessProfileInstance[]>;
    /**
     * Retrieve a single page of NetworkAccessProfileInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: NetworkAccessProfilePage) => any): Promise<NetworkAccessProfilePage>;
    /**
     * Retrieve a single page of NetworkAccessProfileInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { NetworkAccessProfileListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: NetworkAccessProfileListInstancePageOptions, callback?: (error: Error | null, items: NetworkAccessProfilePage) => any): Promise<NetworkAccessProfilePage>;
    page(params?: any, callback?: any): Promise<NetworkAccessProfilePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NetworkAccessProfileSolution {
}
export declare function NetworkAccessProfileListInstance(version: V1): NetworkAccessProfileListInstance;
export declare class NetworkAccessProfilePage extends Page<V1, NetworkAccessProfilePayload, NetworkAccessProfileResource, NetworkAccessProfileInstance> {
    /**
     * Initialize the NetworkAccessProfilePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: NetworkAccessProfileSolution);
    /**
     * Build an instance of NetworkAccessProfileInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: NetworkAccessProfileResource): NetworkAccessProfileInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
