/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import DeployedDevices from "../../DeployedDevices";
/**
 * Options to pass to update a KeyInstance
 *
 * @property { string } [friendlyName] Provides a human readable descriptive text for this Key credential, up to 256 characters long.
 * @property { string } [deviceSid] Provides the unique string identifier of an existing Device to become authenticated with this Key credential.
 */
export interface KeyContextUpdateOptions {
    friendlyName?: string;
    deviceSid?: string;
}
/**
 * Options to pass to create a KeyInstance
 *
 * @property { string } [friendlyName] Provides a human readable descriptive text for this Key credential, up to 256 characters long.
 * @property { string } [deviceSid] Provides the unique string identifier of an existing Device to become authenticated with this Key credential.
 */
export interface KeyListInstanceCreateOptions {
    friendlyName?: string;
    deviceSid?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [deviceSid] Filters the resulting list of Keys by a unique string identifier of an authenticated Device.
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
export interface KeyListInstanceEachOptions {
    deviceSid?: string;
    pageSize?: number;
    callback?: (item: KeyInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [deviceSid] Filters the resulting list of Keys by a unique string identifier of an authenticated Device.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface KeyListInstanceOptions {
    deviceSid?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [deviceSid] Filters the resulting list of Keys by a unique string identifier of an authenticated Device.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface KeyListInstancePageOptions {
    deviceSid?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface KeyContext {
    /**
     * Remove a KeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a KeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed KeyInstance
     */
    fetch(callback?: (error: Error | null, item?: KeyInstance) => any): Promise<KeyInstance>;
    /**
     * Update a KeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed KeyInstance
     */
    update(callback?: (error: Error | null, item?: KeyInstance) => any): Promise<KeyInstance>;
    /**
     * Update a KeyInstance
     *
     * @param { KeyContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed KeyInstance
     */
    update(params: KeyContextUpdateOptions, callback?: (error: Error | null, item?: KeyInstance) => any): Promise<KeyInstance>;
    update(params?: any, callback?: any): Promise<KeyInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface KeyContextSolution {
    fleetSid?: string;
    sid?: string;
}
export declare class KeyContextImpl implements KeyContext {
    protected _version: DeployedDevices;
    protected _solution: KeyContextSolution;
    protected _uri: string;
    constructor(_version: DeployedDevices, fleetSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<KeyInstance>;
    update(params?: any, callback?: any): Promise<KeyInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): KeyContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface KeyPayload extends TwilioResponsePayload {
    keys: KeyResource[];
}
interface KeyResource {
    sid?: string | null;
    url?: string | null;
    friendly_name?: string | null;
    fleet_sid?: string | null;
    account_sid?: string | null;
    device_sid?: string | null;
    secret?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
}
export declare class KeyInstance {
    protected _version: DeployedDevices;
    protected _solution: KeyContextSolution;
    protected _context?: KeyContext;
    constructor(_version: DeployedDevices, payload: KeyResource, fleetSid: string, sid?: string);
    /**
     * A string that uniquely identifies this Key.
     */
    sid?: string | null;
    /**
     * URL of this Key.
     */
    url?: string | null;
    /**
     * A human readable description for this Key.
     */
    friendlyName?: string | null;
    /**
     * The unique identifier of the Fleet.
     */
    fleetSid?: string | null;
    /**
     * The unique SID that identifies this Account.
     */
    accountSid?: string | null;
    /**
     * The unique identifier of a mapped Device.
     */
    deviceSid?: string | null;
    /**
     * The key secret.
     */
    secret?: string | null;
    /**
     * The date this Key credential was created.
     */
    dateCreated?: Date | null;
    /**
     * The date this Key credential was updated.
     */
    dateUpdated?: Date | null;
    private get _proxy();
    /**
     * Remove a KeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a KeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed KeyInstance
     */
    fetch(callback?: (error: Error | null, item?: KeyInstance) => any): Promise<KeyInstance>;
    /**
     * Update a KeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed KeyInstance
     */
    update(callback?: (error: Error | null, item?: KeyInstance) => any): Promise<KeyInstance>;
    /**
     * Update a KeyInstance
     *
     * @param { KeyContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed KeyInstance
     */
    update(params: KeyContextUpdateOptions, callback?: (error: Error | null, item?: KeyInstance) => any): Promise<KeyInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        url: string | null | undefined;
        friendlyName: string | null | undefined;
        fleetSid: string | null | undefined;
        accountSid: string | null | undefined;
        deviceSid: string | null | undefined;
        secret: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface KeyListInstance {
    (sid: string): KeyContext;
    get(sid: string): KeyContext;
    /**
     * Create a KeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed KeyInstance
     */
    create(callback?: (error: Error | null, item?: KeyInstance) => any): Promise<KeyInstance>;
    /**
     * Create a KeyInstance
     *
     * @param { KeyListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed KeyInstance
     */
    create(params: KeyListInstanceCreateOptions, callback?: (error: Error | null, item?: KeyInstance) => any): Promise<KeyInstance>;
    create(params?: any, callback?: any): Promise<KeyInstance>;
    /**
     * Streams KeyInstance records from the API.
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
    each(callback?: (item: KeyInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams KeyInstance records from the API.
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
     * @param { KeyListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: KeyListInstanceEachOptions, callback?: (item: KeyInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of KeyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: KeyPage) => any): Promise<KeyPage>;
    /**
     * Retrieve a single target page of KeyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: KeyPage) => any): Promise<KeyPage>;
    getPage(params?: any, callback?: any): Promise<KeyPage>;
    /**
     * Lists KeyInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: KeyInstance[]) => any): Promise<KeyInstance[]>;
    /**
     * Lists KeyInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { KeyListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: KeyListInstanceOptions, callback?: (error: Error | null, items: KeyInstance[]) => any): Promise<KeyInstance[]>;
    list(params?: any, callback?: any): Promise<KeyInstance[]>;
    /**
     * Retrieve a single page of KeyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: KeyPage) => any): Promise<KeyPage>;
    /**
     * Retrieve a single page of KeyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { KeyListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: KeyListInstancePageOptions, callback?: (error: Error | null, items: KeyPage) => any): Promise<KeyPage>;
    page(params?: any, callback?: any): Promise<KeyPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface KeySolution {
    fleetSid?: string;
}
export declare function KeyListInstance(version: DeployedDevices, fleetSid: string): KeyListInstance;
export declare class KeyPage extends Page<DeployedDevices, KeyPayload, KeyResource, KeyInstance> {
    /**
     * Initialize the KeyPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: DeployedDevices, response: Response<string>, solution: KeySolution);
    /**
     * Build an instance of KeyInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: KeyResource): KeyInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
