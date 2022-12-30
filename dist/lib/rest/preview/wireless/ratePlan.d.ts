/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import Wireless from "../Wireless";
/**
 * Options to pass to update a RatePlanInstance
 *
 * @property { string } [uniqueName]
 * @property { string } [friendlyName]
 */
export interface RatePlanContextUpdateOptions {
    uniqueName?: string;
    friendlyName?: string;
}
/**
 * Options to pass to create a RatePlanInstance
 *
 * @property { string } [uniqueName]
 * @property { string } [friendlyName]
 * @property { boolean } [dataEnabled]
 * @property { number } [dataLimit]
 * @property { string } [dataMetering]
 * @property { boolean } [messagingEnabled]
 * @property { boolean } [voiceEnabled]
 * @property { boolean } [commandsEnabled]
 * @property { boolean } [nationalRoamingEnabled]
 * @property { Array<string> } [internationalRoaming]
 */
export interface RatePlanListInstanceCreateOptions {
    uniqueName?: string;
    friendlyName?: string;
    dataEnabled?: boolean;
    dataLimit?: number;
    dataMetering?: string;
    messagingEnabled?: boolean;
    voiceEnabled?: boolean;
    commandsEnabled?: boolean;
    nationalRoamingEnabled?: boolean;
    internationalRoaming?: Array<string>;
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
export interface RatePlanListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void;
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
export interface RatePlanListInstanceOptions {
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
export interface RatePlanListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface RatePlanContext {
    /**
     * Remove a RatePlanInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a RatePlanInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RatePlanInstance
     */
    fetch(callback?: (error: Error | null, item?: RatePlanInstance) => any): Promise<RatePlanInstance>;
    /**
     * Update a RatePlanInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RatePlanInstance
     */
    update(callback?: (error: Error | null, item?: RatePlanInstance) => any): Promise<RatePlanInstance>;
    /**
     * Update a RatePlanInstance
     *
     * @param { RatePlanContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RatePlanInstance
     */
    update(params: RatePlanContextUpdateOptions, callback?: (error: Error | null, item?: RatePlanInstance) => any): Promise<RatePlanInstance>;
    update(params?: any, callback?: any): Promise<RatePlanInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RatePlanContextSolution {
    sid?: string;
}
export declare class RatePlanContextImpl implements RatePlanContext {
    protected _version: Wireless;
    protected _solution: RatePlanContextSolution;
    protected _uri: string;
    constructor(_version: Wireless, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<RatePlanInstance>;
    update(params?: any, callback?: any): Promise<RatePlanInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): RatePlanContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface RatePlanPayload extends TwilioResponsePayload {
    rate_plans: RatePlanResource[];
}
interface RatePlanResource {
    sid?: string | null;
    unique_name?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    data_enabled?: boolean | null;
    data_metering?: string | null;
    data_limit?: number | null;
    messaging_enabled?: boolean | null;
    voice_enabled?: boolean | null;
    national_roaming_enabled?: boolean | null;
    international_roaming?: Array<string> | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class RatePlanInstance {
    protected _version: Wireless;
    protected _solution: RatePlanContextSolution;
    protected _context?: RatePlanContext;
    constructor(_version: Wireless, payload: RatePlanResource, sid?: string);
    sid?: string | null;
    uniqueName?: string | null;
    accountSid?: string | null;
    friendlyName?: string | null;
    dataEnabled?: boolean | null;
    dataMetering?: string | null;
    dataLimit?: number | null;
    messagingEnabled?: boolean | null;
    voiceEnabled?: boolean | null;
    nationalRoamingEnabled?: boolean | null;
    internationalRoaming?: Array<string> | null;
    dateCreated?: Date | null;
    dateUpdated?: Date | null;
    url?: string | null;
    private get _proxy();
    /**
     * Remove a RatePlanInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a RatePlanInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RatePlanInstance
     */
    fetch(callback?: (error: Error | null, item?: RatePlanInstance) => any): Promise<RatePlanInstance>;
    /**
     * Update a RatePlanInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RatePlanInstance
     */
    update(callback?: (error: Error | null, item?: RatePlanInstance) => any): Promise<RatePlanInstance>;
    /**
     * Update a RatePlanInstance
     *
     * @param { RatePlanContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RatePlanInstance
     */
    update(params: RatePlanContextUpdateOptions, callback?: (error: Error | null, item?: RatePlanInstance) => any): Promise<RatePlanInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        uniqueName: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        dataEnabled: boolean | null | undefined;
        dataMetering: string | null | undefined;
        dataLimit: number | null | undefined;
        messagingEnabled: boolean | null | undefined;
        voiceEnabled: boolean | null | undefined;
        nationalRoamingEnabled: boolean | null | undefined;
        internationalRoaming: string[] | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface RatePlanListInstance {
    (sid: string): RatePlanContext;
    get(sid: string): RatePlanContext;
    /**
     * Create a RatePlanInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RatePlanInstance
     */
    create(callback?: (error: Error | null, item?: RatePlanInstance) => any): Promise<RatePlanInstance>;
    /**
     * Create a RatePlanInstance
     *
     * @param { RatePlanListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RatePlanInstance
     */
    create(params: RatePlanListInstanceCreateOptions, callback?: (error: Error | null, item?: RatePlanInstance) => any): Promise<RatePlanInstance>;
    create(params?: any, callback?: any): Promise<RatePlanInstance>;
    /**
     * Streams RatePlanInstance records from the API.
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
    each(callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams RatePlanInstance records from the API.
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
     * @param { RatePlanListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: RatePlanListInstanceEachOptions, callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of RatePlanInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: RatePlanPage) => any): Promise<RatePlanPage>;
    /**
     * Retrieve a single target page of RatePlanInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: RatePlanPage) => any): Promise<RatePlanPage>;
    getPage(params?: any, callback?: any): Promise<RatePlanPage>;
    /**
     * Lists RatePlanInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: RatePlanInstance[]) => any): Promise<RatePlanInstance[]>;
    /**
     * Lists RatePlanInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RatePlanListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: RatePlanListInstanceOptions, callback?: (error: Error | null, items: RatePlanInstance[]) => any): Promise<RatePlanInstance[]>;
    list(params?: any, callback?: any): Promise<RatePlanInstance[]>;
    /**
     * Retrieve a single page of RatePlanInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: RatePlanPage) => any): Promise<RatePlanPage>;
    /**
     * Retrieve a single page of RatePlanInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RatePlanListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: RatePlanListInstancePageOptions, callback?: (error: Error | null, items: RatePlanPage) => any): Promise<RatePlanPage>;
    page(params?: any, callback?: any): Promise<RatePlanPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RatePlanSolution {
}
export declare function RatePlanListInstance(version: Wireless): RatePlanListInstance;
export declare class RatePlanPage extends Page<Wireless, RatePlanPayload, RatePlanResource, RatePlanInstance> {
    /**
     * Initialize the RatePlanPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Wireless, response: Response<string>, solution: RatePlanSolution);
    /**
     * Build an instance of RatePlanInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: RatePlanResource): RatePlanInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
