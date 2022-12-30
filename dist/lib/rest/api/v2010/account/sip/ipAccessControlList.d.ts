/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
import { IpAddressListInstance } from "./ipAccessControlList/ipAddress";
/**
 * Options to pass to update a IpAccessControlListInstance
 *
 * @property { string } friendlyName A human readable descriptive text, up to 255 characters long.
 */
export interface IpAccessControlListContextUpdateOptions {
    friendlyName: string;
}
/**
 * Options to pass to create a IpAccessControlListInstance
 *
 * @property { string } friendlyName A human readable descriptive text that describes the IpAccessControlList, up to 255 characters long.
 */
export interface IpAccessControlListListInstanceCreateOptions {
    friendlyName: string;
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
export interface IpAccessControlListListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: IpAccessControlListInstance, done: (err?: Error) => void) => void;
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
export interface IpAccessControlListListInstanceOptions {
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
export interface IpAccessControlListListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface IpAccessControlListContext {
    ipAddresses: IpAddressListInstance;
    /**
     * Remove a IpAccessControlListInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a IpAccessControlListInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpAccessControlListInstance
     */
    fetch(callback?: (error: Error | null, item?: IpAccessControlListInstance) => any): Promise<IpAccessControlListInstance>;
    /**
     * Update a IpAccessControlListInstance
     *
     * @param { IpAccessControlListContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpAccessControlListInstance
     */
    update(params: IpAccessControlListContextUpdateOptions, callback?: (error: Error | null, item?: IpAccessControlListInstance) => any): Promise<IpAccessControlListInstance>;
    update(params: any, callback?: any): Promise<IpAccessControlListInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface IpAccessControlListContextSolution {
    accountSid?: string;
    sid?: string;
}
export declare class IpAccessControlListContextImpl implements IpAccessControlListContext {
    protected _version: V2010;
    protected _solution: IpAccessControlListContextSolution;
    protected _uri: string;
    protected _ipAddresses?: IpAddressListInstance;
    constructor(_version: V2010, accountSid: string, sid: string);
    get ipAddresses(): IpAddressListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<IpAccessControlListInstance>;
    update(params: any, callback?: any): Promise<IpAccessControlListInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): IpAccessControlListContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface IpAccessControlListPayload extends TwilioResponsePayload {
    ip_access_control_lists: IpAccessControlListResource[];
}
interface IpAccessControlListResource {
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    subresource_uris?: object | null;
    uri?: string | null;
}
export declare class IpAccessControlListInstance {
    protected _version: V2010;
    protected _solution: IpAccessControlListContextSolution;
    protected _context?: IpAccessControlListContext;
    constructor(_version: V2010, payload: IpAccessControlListResource, accountSid: string, sid?: string);
    /**
     * A string that uniquely identifies this resource
     */
    sid?: string | null;
    /**
     * The unique sid that identifies this account
     */
    accountSid?: string | null;
    /**
     * A human readable description of this resource
     */
    friendlyName?: string | null;
    /**
     * The date this resource was created
     */
    dateCreated?: Date | null;
    /**
     * The date this resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The IP addresses associated with this resource.
     */
    subresourceUris?: object | null;
    /**
     * The URI for this resource
     */
    uri?: string | null;
    private get _proxy();
    /**
     * Remove a IpAccessControlListInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a IpAccessControlListInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpAccessControlListInstance
     */
    fetch(callback?: (error: Error | null, item?: IpAccessControlListInstance) => any): Promise<IpAccessControlListInstance>;
    /**
     * Update a IpAccessControlListInstance
     *
     * @param { IpAccessControlListContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpAccessControlListInstance
     */
    update(params: IpAccessControlListContextUpdateOptions, callback?: (error: Error | null, item?: IpAccessControlListInstance) => any): Promise<IpAccessControlListInstance>;
    /**
     * Access the ipAddresses.
     */
    ipAddresses(): IpAddressListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        subresourceUris: object | null | undefined;
        uri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface IpAccessControlListListInstance {
    (sid: string): IpAccessControlListContext;
    get(sid: string): IpAccessControlListContext;
    /**
     * Create a IpAccessControlListInstance
     *
     * @param { IpAccessControlListListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpAccessControlListInstance
     */
    create(params: IpAccessControlListListInstanceCreateOptions, callback?: (error: Error | null, item?: IpAccessControlListInstance) => any): Promise<IpAccessControlListInstance>;
    create(params: any, callback?: any): Promise<IpAccessControlListInstance>;
    /**
     * Streams IpAccessControlListInstance records from the API.
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
    each(callback?: (item: IpAccessControlListInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams IpAccessControlListInstance records from the API.
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
     * @param { IpAccessControlListListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: IpAccessControlListListInstanceEachOptions, callback?: (item: IpAccessControlListInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of IpAccessControlListInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: IpAccessControlListPage) => any): Promise<IpAccessControlListPage>;
    /**
     * Retrieve a single target page of IpAccessControlListInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: IpAccessControlListPage) => any): Promise<IpAccessControlListPage>;
    getPage(params?: any, callback?: any): Promise<IpAccessControlListPage>;
    /**
     * Lists IpAccessControlListInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: IpAccessControlListInstance[]) => any): Promise<IpAccessControlListInstance[]>;
    /**
     * Lists IpAccessControlListInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { IpAccessControlListListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: IpAccessControlListListInstanceOptions, callback?: (error: Error | null, items: IpAccessControlListInstance[]) => any): Promise<IpAccessControlListInstance[]>;
    list(params?: any, callback?: any): Promise<IpAccessControlListInstance[]>;
    /**
     * Retrieve a single page of IpAccessControlListInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: IpAccessControlListPage) => any): Promise<IpAccessControlListPage>;
    /**
     * Retrieve a single page of IpAccessControlListInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { IpAccessControlListListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: IpAccessControlListListInstancePageOptions, callback?: (error: Error | null, items: IpAccessControlListPage) => any): Promise<IpAccessControlListPage>;
    page(params?: any, callback?: any): Promise<IpAccessControlListPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface IpAccessControlListSolution {
    accountSid?: string;
}
export declare function IpAccessControlListListInstance(version: V2010, accountSid: string): IpAccessControlListListInstance;
export declare class IpAccessControlListPage extends Page<V2010, IpAccessControlListPayload, IpAccessControlListResource, IpAccessControlListInstance> {
    /**
     * Initialize the IpAccessControlListPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: IpAccessControlListSolution);
    /**
     * Build an instance of IpAccessControlListInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: IpAccessControlListResource): IpAccessControlListInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
