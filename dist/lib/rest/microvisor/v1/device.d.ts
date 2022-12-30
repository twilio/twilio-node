/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
/**
 * Options to pass to update a DeviceInstance
 *
 * @property { string } [uniqueName] A unique and addressable name to be assigned to this Device by the developer. It may be used in place of the Device SID.
 * @property { string } [targetApp] The SID or unique name of the App to be targeted to the Device.
 * @property { boolean } [loggingEnabled] A Boolean flag specifying whether to enable application logging. Logs will be enabled or extended for 24 hours.
 */
export interface DeviceContextUpdateOptions {
    uniqueName?: string;
    targetApp?: string;
    loggingEnabled?: boolean;
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
export interface DeviceListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: DeviceInstance, done: (err?: Error) => void) => void;
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
export interface DeviceListInstanceOptions {
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
export interface DeviceListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface DeviceContext {
    /**
     * Fetch a DeviceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeviceInstance
     */
    fetch(callback?: (error: Error | null, item?: DeviceInstance) => any): Promise<DeviceInstance>;
    /**
     * Update a DeviceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeviceInstance
     */
    update(callback?: (error: Error | null, item?: DeviceInstance) => any): Promise<DeviceInstance>;
    /**
     * Update a DeviceInstance
     *
     * @param { DeviceContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeviceInstance
     */
    update(params: DeviceContextUpdateOptions, callback?: (error: Error | null, item?: DeviceInstance) => any): Promise<DeviceInstance>;
    update(params?: any, callback?: any): Promise<DeviceInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DeviceContextSolution {
    sid?: string;
}
export declare class DeviceContextImpl implements DeviceContext {
    protected _version: V1;
    protected _solution: DeviceContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    fetch(callback?: any): Promise<DeviceInstance>;
    update(params?: any, callback?: any): Promise<DeviceInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): DeviceContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface DevicePayload extends TwilioResponsePayload {
    devices: DeviceResource[];
}
interface DeviceResource {
    sid?: string | null;
    unique_name?: string | null;
    account_sid?: string | null;
    app?: any | null;
    logging?: any | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class DeviceInstance {
    protected _version: V1;
    protected _solution: DeviceContextSolution;
    protected _context?: DeviceContext;
    constructor(_version: V1, payload: DeviceResource, sid?: string);
    /**
     * A string that uniquely identifies this Device.
     */
    sid?: string | null;
    /**
     * A developer-defined string that uniquely identifies the Device.
     */
    uniqueName?: string | null;
    /**
     * Account SID.
     */
    accountSid?: string | null;
    /**
     * Information about the target App and the App reported by this Device.
     */
    app?: any | null;
    /**
     * Object specifying whether application logging is enabled for this Device.
     */
    logging?: any | null;
    /**
     * The date that this Device was created.
     */
    dateCreated?: Date | null;
    /**
     * The date that this Device was last updated.
     */
    dateUpdated?: Date | null;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    /**
     * The absolute URLs of related resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Fetch a DeviceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeviceInstance
     */
    fetch(callback?: (error: Error | null, item?: DeviceInstance) => any): Promise<DeviceInstance>;
    /**
     * Update a DeviceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeviceInstance
     */
    update(callback?: (error: Error | null, item?: DeviceInstance) => any): Promise<DeviceInstance>;
    /**
     * Update a DeviceInstance
     *
     * @param { DeviceContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeviceInstance
     */
    update(params: DeviceContextUpdateOptions, callback?: (error: Error | null, item?: DeviceInstance) => any): Promise<DeviceInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        uniqueName: string | null | undefined;
        accountSid: string | null | undefined;
        app: any;
        logging: any;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface DeviceListInstance {
    (sid: string): DeviceContext;
    get(sid: string): DeviceContext;
    /**
     * Streams DeviceInstance records from the API.
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
    each(callback?: (item: DeviceInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams DeviceInstance records from the API.
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
     * @param { DeviceListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: DeviceListInstanceEachOptions, callback?: (item: DeviceInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of DeviceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: DevicePage) => any): Promise<DevicePage>;
    /**
     * Retrieve a single target page of DeviceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: DevicePage) => any): Promise<DevicePage>;
    getPage(params?: any, callback?: any): Promise<DevicePage>;
    /**
     * Lists DeviceInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: DeviceInstance[]) => any): Promise<DeviceInstance[]>;
    /**
     * Lists DeviceInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DeviceListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: DeviceListInstanceOptions, callback?: (error: Error | null, items: DeviceInstance[]) => any): Promise<DeviceInstance[]>;
    list(params?: any, callback?: any): Promise<DeviceInstance[]>;
    /**
     * Retrieve a single page of DeviceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: DevicePage) => any): Promise<DevicePage>;
    /**
     * Retrieve a single page of DeviceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DeviceListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: DeviceListInstancePageOptions, callback?: (error: Error | null, items: DevicePage) => any): Promise<DevicePage>;
    page(params?: any, callback?: any): Promise<DevicePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DeviceSolution {
}
export declare function DeviceListInstance(version: V1): DeviceListInstance;
export declare class DevicePage extends Page<V1, DevicePayload, DeviceResource, DeviceInstance> {
    /**
     * Initialize the DevicePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: DeviceSolution);
    /**
     * Build an instance of DeviceInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: DeviceResource): DeviceInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
