/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
/**
 * Options to pass to update a IpRecordInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
 */
export interface IpRecordContextUpdateOptions {
    friendlyName?: string;
}
/**
 * Options to pass to create a IpRecordInstance
 *
 * @property { string } ipAddress An IP address in dotted decimal notation, IPv4 only.
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
 * @property { number } [cidrPrefixLength] An integer representing the length of the [CIDR](https://tools.ietf.org/html/rfc4632) prefix to use with this IP address. By default the entire IP address is used, which for IPv4 is value 32.
 */
export interface IpRecordListInstanceCreateOptions {
    ipAddress: string;
    friendlyName?: string;
    cidrPrefixLength?: number;
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
export interface IpRecordListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: IpRecordInstance, done: (err?: Error) => void) => void;
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
export interface IpRecordListInstanceOptions {
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
export interface IpRecordListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface IpRecordContext {
    /**
     * Remove a IpRecordInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a IpRecordInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpRecordInstance
     */
    fetch(callback?: (error: Error | null, item?: IpRecordInstance) => any): Promise<IpRecordInstance>;
    /**
     * Update a IpRecordInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpRecordInstance
     */
    update(callback?: (error: Error | null, item?: IpRecordInstance) => any): Promise<IpRecordInstance>;
    /**
     * Update a IpRecordInstance
     *
     * @param { IpRecordContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpRecordInstance
     */
    update(params: IpRecordContextUpdateOptions, callback?: (error: Error | null, item?: IpRecordInstance) => any): Promise<IpRecordInstance>;
    update(params?: any, callback?: any): Promise<IpRecordInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface IpRecordContextSolution {
    sid?: string;
}
export declare class IpRecordContextImpl implements IpRecordContext {
    protected _version: V1;
    protected _solution: IpRecordContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<IpRecordInstance>;
    update(params?: any, callback?: any): Promise<IpRecordInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): IpRecordContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface IpRecordPayload extends TwilioResponsePayload {
    ip_records: IpRecordResource[];
}
interface IpRecordResource {
    account_sid?: string | null;
    sid?: string | null;
    friendly_name?: string | null;
    ip_address?: string | null;
    cidr_prefix_length?: number | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class IpRecordInstance {
    protected _version: V1;
    protected _solution: IpRecordContextSolution;
    protected _context?: IpRecordContext;
    constructor(_version: V1, payload: IpRecordResource, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * An IP address in dotted decimal notation, IPv4 only.
     */
    ipAddress?: string | null;
    /**
     * An integer representing the length of the [CIDR](https://tools.ietf.org/html/rfc4632) prefix to use with this IP address. By default the entire IP address is used, which for IPv4 is value 32.
     */
    cidrPrefixLength?: number | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a IpRecordInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a IpRecordInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpRecordInstance
     */
    fetch(callback?: (error: Error | null, item?: IpRecordInstance) => any): Promise<IpRecordInstance>;
    /**
     * Update a IpRecordInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpRecordInstance
     */
    update(callback?: (error: Error | null, item?: IpRecordInstance) => any): Promise<IpRecordInstance>;
    /**
     * Update a IpRecordInstance
     *
     * @param { IpRecordContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpRecordInstance
     */
    update(params: IpRecordContextUpdateOptions, callback?: (error: Error | null, item?: IpRecordInstance) => any): Promise<IpRecordInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        sid: string | null | undefined;
        friendlyName: string | null | undefined;
        ipAddress: string | null | undefined;
        cidrPrefixLength: number | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface IpRecordListInstance {
    (sid: string): IpRecordContext;
    get(sid: string): IpRecordContext;
    /**
     * Create a IpRecordInstance
     *
     * @param { IpRecordListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpRecordInstance
     */
    create(params: IpRecordListInstanceCreateOptions, callback?: (error: Error | null, item?: IpRecordInstance) => any): Promise<IpRecordInstance>;
    create(params: any, callback?: any): Promise<IpRecordInstance>;
    /**
     * Streams IpRecordInstance records from the API.
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
    each(callback?: (item: IpRecordInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams IpRecordInstance records from the API.
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
     * @param { IpRecordListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: IpRecordListInstanceEachOptions, callback?: (item: IpRecordInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of IpRecordInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: IpRecordPage) => any): Promise<IpRecordPage>;
    /**
     * Retrieve a single target page of IpRecordInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: IpRecordPage) => any): Promise<IpRecordPage>;
    getPage(params?: any, callback?: any): Promise<IpRecordPage>;
    /**
     * Lists IpRecordInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: IpRecordInstance[]) => any): Promise<IpRecordInstance[]>;
    /**
     * Lists IpRecordInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { IpRecordListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: IpRecordListInstanceOptions, callback?: (error: Error | null, items: IpRecordInstance[]) => any): Promise<IpRecordInstance[]>;
    list(params?: any, callback?: any): Promise<IpRecordInstance[]>;
    /**
     * Retrieve a single page of IpRecordInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: IpRecordPage) => any): Promise<IpRecordPage>;
    /**
     * Retrieve a single page of IpRecordInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { IpRecordListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: IpRecordListInstancePageOptions, callback?: (error: Error | null, items: IpRecordPage) => any): Promise<IpRecordPage>;
    page(params?: any, callback?: any): Promise<IpRecordPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface IpRecordSolution {
}
export declare function IpRecordListInstance(version: V1): IpRecordListInstance;
export declare class IpRecordPage extends Page<V1, IpRecordPayload, IpRecordResource, IpRecordInstance> {
    /**
     * Initialize the IpRecordPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: IpRecordSolution);
    /**
     * Build an instance of IpRecordInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: IpRecordResource): IpRecordInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
