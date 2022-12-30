/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type FleetDataMetering = "payg";
/**
 * Options to pass to update a FleetInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used in place of the resource\\\'s `sid` in the URL to address the resource.
 * @property { string } [networkAccessProfile] The SID or unique name of the Network Access Profile that will control which cellular networks the Fleet\\\'s SIMs can connect to.
 * @property { string } [ipCommandsUrl] The URL that will receive a webhook when a Super SIM in the Fleet is used to send an IP Command from your device to a special IP address. Your server should respond with an HTTP status code in the 200 range; any response body will be ignored.
 * @property { string } [ipCommandsMethod] A string representing the HTTP method to use when making a request to `ip_commands_url`. Can be one of `POST` or `GET`. Defaults to `POST`.
 * @property { string } [smsCommandsUrl] The URL that will receive a webhook when a Super SIM in the Fleet is used to send an SMS from your device to the SMS Commands number. Your server should respond with an HTTP status code in the 200 range; any response body will be ignored.
 * @property { string } [smsCommandsMethod] A string representing the HTTP method to use when making a request to `sms_commands_url`. Can be one of `POST` or `GET`. Defaults to `POST`.
 * @property { number } [dataLimit] The total data usage (download and upload combined) in Megabytes that each Super SIM assigned to the Fleet can consume during a billing period (normally one month). Value must be between 1MB (1) and 2TB (2,000,000). Defaults to 1GB (1,000).
 */
export interface FleetContextUpdateOptions {
    uniqueName?: string;
    networkAccessProfile?: string;
    ipCommandsUrl?: string;
    ipCommandsMethod?: string;
    smsCommandsUrl?: string;
    smsCommandsMethod?: string;
    dataLimit?: number;
}
/**
 * Options to pass to create a FleetInstance
 *
 * @property { string } networkAccessProfile The SID or unique name of the Network Access Profile that will control which cellular networks the Fleet\\\'s SIMs can connect to.
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used in place of the resource\\\'s `sid` in the URL to address the resource.
 * @property { boolean } [dataEnabled] Defines whether SIMs in the Fleet are capable of using 2G/3G/4G/LTE/CAT-M data connectivity. Defaults to `true`.
 * @property { number } [dataLimit] The total data usage (download and upload combined) in Megabytes that each Super SIM assigned to the Fleet can consume during a billing period (normally one month). Value must be between 1MB (1) and 2TB (2,000,000). Defaults to 1GB (1,000).
 * @property { string } [ipCommandsUrl] The URL that will receive a webhook when a Super SIM in the Fleet is used to send an IP Command from your device to a special IP address. Your server should respond with an HTTP status code in the 200 range; any response body will be ignored.
 * @property { string } [ipCommandsMethod] A string representing the HTTP method to use when making a request to `ip_commands_url`. Can be one of `POST` or `GET`. Defaults to `POST`.
 * @property { boolean } [smsCommandsEnabled] Defines whether SIMs in the Fleet are capable of sending and receiving machine-to-machine SMS via Commands. Defaults to `true`.
 * @property { string } [smsCommandsUrl] The URL that will receive a webhook when a Super SIM in the Fleet is used to send an SMS from your device to the SMS Commands number. Your server should respond with an HTTP status code in the 200 range; any response body will be ignored.
 * @property { string } [smsCommandsMethod] A string representing the HTTP method to use when making a request to `sms_commands_url`. Can be one of `POST` or `GET`. Defaults to `POST`.
 */
export interface FleetListInstanceCreateOptions {
    networkAccessProfile: string;
    uniqueName?: string;
    dataEnabled?: boolean;
    dataLimit?: number;
    ipCommandsUrl?: string;
    ipCommandsMethod?: string;
    smsCommandsEnabled?: boolean;
    smsCommandsUrl?: string;
    smsCommandsMethod?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [networkAccessProfile] The SID or unique name of the Network Access Profile that controls which cellular networks the Fleet\'s SIMs can connect to.
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
export interface FleetListInstanceEachOptions {
    networkAccessProfile?: string;
    pageSize?: number;
    callback?: (item: FleetInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [networkAccessProfile] The SID or unique name of the Network Access Profile that controls which cellular networks the Fleet\'s SIMs can connect to.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface FleetListInstanceOptions {
    networkAccessProfile?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [networkAccessProfile] The SID or unique name of the Network Access Profile that controls which cellular networks the Fleet\'s SIMs can connect to.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface FleetListInstancePageOptions {
    networkAccessProfile?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface FleetContext {
    /**
     * Fetch a FleetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FleetInstance
     */
    fetch(callback?: (error: Error | null, item?: FleetInstance) => any): Promise<FleetInstance>;
    /**
     * Update a FleetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FleetInstance
     */
    update(callback?: (error: Error | null, item?: FleetInstance) => any): Promise<FleetInstance>;
    /**
     * Update a FleetInstance
     *
     * @param { FleetContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FleetInstance
     */
    update(params: FleetContextUpdateOptions, callback?: (error: Error | null, item?: FleetInstance) => any): Promise<FleetInstance>;
    update(params?: any, callback?: any): Promise<FleetInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FleetContextSolution {
    sid?: string;
}
export declare class FleetContextImpl implements FleetContext {
    protected _version: V1;
    protected _solution: FleetContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    fetch(callback?: any): Promise<FleetInstance>;
    update(params?: any, callback?: any): Promise<FleetInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FleetContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type FleetSmsCommandsMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type FleetIpCommandsMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface FleetPayload extends TwilioResponsePayload {
    fleets: FleetResource[];
}
interface FleetResource {
    account_sid?: string | null;
    sid?: string | null;
    unique_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    data_enabled?: boolean | null;
    data_limit?: number | null;
    data_metering?: FleetDataMetering;
    sms_commands_enabled?: boolean | null;
    sms_commands_url?: string | null;
    sms_commands_method?: FleetSmsCommandsMethod;
    network_access_profile_sid?: string | null;
    ip_commands_url?: string | null;
    ip_commands_method?: FleetIpCommandsMethod;
}
export declare class FleetInstance {
    protected _version: V1;
    protected _solution: FleetContextSolution;
    protected _context?: FleetContext;
    constructor(_version: V1, payload: FleetResource, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the Fleet resource
     */
    url?: string | null;
    /**
     * Defines whether SIMs in the Fleet are capable of using data connectivity
     */
    dataEnabled?: boolean | null;
    /**
     * The total data usage (download and upload combined) in Megabytes that each Super SIM assigned to the Fleet can consume
     */
    dataLimit?: number | null;
    dataMetering?: FleetDataMetering;
    /**
     * Defines whether SIMs in the Fleet are capable of sending and receiving machine-to-machine SMS via Commands
     */
    smsCommandsEnabled?: boolean | null;
    /**
     * The URL that will receive a webhook when a Super SIM in the Fleet is used to send an SMS from your device to the SMS Commands number
     */
    smsCommandsUrl?: string | null;
    /**
     * A string representing the HTTP method to use when making a request to `sms_commands_url`
     */
    smsCommandsMethod?: FleetSmsCommandsMethod;
    /**
     * The SID of the Network Access Profile of the Fleet
     */
    networkAccessProfileSid?: string | null;
    /**
     * The URL that will receive a webhook when a Super SIM in the Fleet is used to send an IP Command from your device
     */
    ipCommandsUrl?: string | null;
    /**
     * A string representing the HTTP method to use when making a request to `ip_commands_url`
     */
    ipCommandsMethod?: FleetIpCommandsMethod;
    private get _proxy();
    /**
     * Fetch a FleetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FleetInstance
     */
    fetch(callback?: (error: Error | null, item?: FleetInstance) => any): Promise<FleetInstance>;
    /**
     * Update a FleetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FleetInstance
     */
    update(callback?: (error: Error | null, item?: FleetInstance) => any): Promise<FleetInstance>;
    /**
     * Update a FleetInstance
     *
     * @param { FleetContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FleetInstance
     */
    update(params: FleetContextUpdateOptions, callback?: (error: Error | null, item?: FleetInstance) => any): Promise<FleetInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        sid: string | null | undefined;
        uniqueName: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        dataEnabled: boolean | null | undefined;
        dataLimit: number | null | undefined;
        dataMetering: "payg" | undefined;
        smsCommandsEnabled: boolean | null | undefined;
        smsCommandsUrl: string | null | undefined;
        smsCommandsMethod: FleetSmsCommandsMethod | undefined;
        networkAccessProfileSid: string | null | undefined;
        ipCommandsUrl: string | null | undefined;
        ipCommandsMethod: FleetIpCommandsMethod | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FleetListInstance {
    (sid: string): FleetContext;
    get(sid: string): FleetContext;
    /**
     * Create a FleetInstance
     *
     * @param { FleetListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FleetInstance
     */
    create(params: FleetListInstanceCreateOptions, callback?: (error: Error | null, item?: FleetInstance) => any): Promise<FleetInstance>;
    create(params: any, callback?: any): Promise<FleetInstance>;
    /**
     * Streams FleetInstance records from the API.
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
    each(callback?: (item: FleetInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams FleetInstance records from the API.
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
     * @param { FleetListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: FleetListInstanceEachOptions, callback?: (item: FleetInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of FleetInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: FleetPage) => any): Promise<FleetPage>;
    /**
     * Retrieve a single target page of FleetInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: FleetPage) => any): Promise<FleetPage>;
    getPage(params?: any, callback?: any): Promise<FleetPage>;
    /**
     * Lists FleetInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: FleetInstance[]) => any): Promise<FleetInstance[]>;
    /**
     * Lists FleetInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FleetListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: FleetListInstanceOptions, callback?: (error: Error | null, items: FleetInstance[]) => any): Promise<FleetInstance[]>;
    list(params?: any, callback?: any): Promise<FleetInstance[]>;
    /**
     * Retrieve a single page of FleetInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: FleetPage) => any): Promise<FleetPage>;
    /**
     * Retrieve a single page of FleetInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FleetListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: FleetListInstancePageOptions, callback?: (error: Error | null, items: FleetPage) => any): Promise<FleetPage>;
    page(params?: any, callback?: any): Promise<FleetPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FleetSolution {
}
export declare function FleetListInstance(version: V1): FleetListInstance;
export declare class FleetPage extends Page<V1, FleetPayload, FleetResource, FleetInstance> {
    /**
     * Initialize the FleetPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: FleetSolution);
    /**
     * Build an instance of FleetInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: FleetResource): FleetInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
