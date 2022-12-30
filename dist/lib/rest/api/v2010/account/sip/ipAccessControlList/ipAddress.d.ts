/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../../base/Page";
import Response from "../../../../../../http/response";
import V2010 from "../../../../V2010";
/**
 * Options to pass to update a IpAddressInstance
 *
 * @property { string } [ipAddress] An IP address in dotted decimal notation from which you want to accept traffic. Any SIP requests from this IP address will be allowed by Twilio. IPv4 only supported today.
 * @property { string } [friendlyName] A human readable descriptive text for this resource, up to 255 characters long.
 * @property { number } [cidrPrefixLength] An integer representing the length of the CIDR prefix to use with this IP address when accepting traffic. By default the entire IP address is used.
 */
export interface IpAddressContextUpdateOptions {
    ipAddress?: string;
    friendlyName?: string;
    cidrPrefixLength?: number;
}
/**
 * Options to pass to create a IpAddressInstance
 *
 * @property { string } friendlyName A human readable descriptive text for this resource, up to 255 characters long.
 * @property { string } ipAddress An IP address in dotted decimal notation from which you want to accept traffic. Any SIP requests from this IP address will be allowed by Twilio. IPv4 only supported today.
 * @property { number } [cidrPrefixLength] An integer representing the length of the CIDR prefix to use with this IP address when accepting traffic. By default the entire IP address is used.
 */
export interface IpAddressListInstanceCreateOptions {
    friendlyName: string;
    ipAddress: string;
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
export interface IpAddressListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: IpAddressInstance, done: (err?: Error) => void) => void;
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
export interface IpAddressListInstanceOptions {
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
export interface IpAddressListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface IpAddressContext {
    /**
     * Remove a IpAddressInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a IpAddressInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpAddressInstance
     */
    fetch(callback?: (error: Error | null, item?: IpAddressInstance) => any): Promise<IpAddressInstance>;
    /**
     * Update a IpAddressInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpAddressInstance
     */
    update(callback?: (error: Error | null, item?: IpAddressInstance) => any): Promise<IpAddressInstance>;
    /**
     * Update a IpAddressInstance
     *
     * @param { IpAddressContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpAddressInstance
     */
    update(params: IpAddressContextUpdateOptions, callback?: (error: Error | null, item?: IpAddressInstance) => any): Promise<IpAddressInstance>;
    update(params?: any, callback?: any): Promise<IpAddressInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface IpAddressContextSolution {
    accountSid?: string;
    ipAccessControlListSid?: string;
    sid?: string;
}
export declare class IpAddressContextImpl implements IpAddressContext {
    protected _version: V2010;
    protected _solution: IpAddressContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, ipAccessControlListSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<IpAddressInstance>;
    update(params?: any, callback?: any): Promise<IpAddressInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): IpAddressContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface IpAddressPayload extends TwilioResponsePayload {
    ip_addresses: IpAddressResource[];
}
interface IpAddressResource {
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    ip_address?: string | null;
    cidr_prefix_length?: number | null;
    ip_access_control_list_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    uri?: string | null;
}
export declare class IpAddressInstance {
    protected _version: V2010;
    protected _solution: IpAddressContextSolution;
    protected _context?: IpAddressContext;
    constructor(_version: V2010, payload: IpAddressResource, accountSid: string, ipAccessControlListSid: string, sid?: string);
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string | null;
    /**
     * The unique id of the Account that is responsible for this resource.
     */
    accountSid?: string | null;
    /**
     * A human readable descriptive text for this resource, up to 255 characters long.
     */
    friendlyName?: string | null;
    /**
     * An IP address in dotted decimal notation from which you want to accept traffic. Any SIP requests from this IP address will be allowed by Twilio. IPv4 only supported today.
     */
    ipAddress?: string | null;
    /**
     * An integer representing the length of the CIDR prefix to use with this IP address when accepting traffic. By default the entire IP address is used.
     */
    cidrPrefixLength?: number | null;
    /**
     * The unique id of the IpAccessControlList resource that includes this resource.
     */
    ipAccessControlListSid?: string | null;
    /**
     * The date that this resource was created, given as GMT in RFC 2822 format.
     */
    dateCreated?: Date | null;
    /**
     * The date that this resource was last updated, given as GMT in RFC 2822 format.
     */
    dateUpdated?: Date | null;
    /**
     * The URI for this resource, relative to https://api.twilio.com
     */
    uri?: string | null;
    private get _proxy();
    /**
     * Remove a IpAddressInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a IpAddressInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpAddressInstance
     */
    fetch(callback?: (error: Error | null, item?: IpAddressInstance) => any): Promise<IpAddressInstance>;
    /**
     * Update a IpAddressInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpAddressInstance
     */
    update(callback?: (error: Error | null, item?: IpAddressInstance) => any): Promise<IpAddressInstance>;
    /**
     * Update a IpAddressInstance
     *
     * @param { IpAddressContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpAddressInstance
     */
    update(params: IpAddressContextUpdateOptions, callback?: (error: Error | null, item?: IpAddressInstance) => any): Promise<IpAddressInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        ipAddress: string | null | undefined;
        cidrPrefixLength: number | null | undefined;
        ipAccessControlListSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        uri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface IpAddressListInstance {
    (sid: string): IpAddressContext;
    get(sid: string): IpAddressContext;
    /**
     * Create a IpAddressInstance
     *
     * @param { IpAddressListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpAddressInstance
     */
    create(params: IpAddressListInstanceCreateOptions, callback?: (error: Error | null, item?: IpAddressInstance) => any): Promise<IpAddressInstance>;
    create(params: any, callback?: any): Promise<IpAddressInstance>;
    /**
     * Streams IpAddressInstance records from the API.
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
    each(callback?: (item: IpAddressInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams IpAddressInstance records from the API.
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
     * @param { IpAddressListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: IpAddressListInstanceEachOptions, callback?: (item: IpAddressInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of IpAddressInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: IpAddressPage) => any): Promise<IpAddressPage>;
    /**
     * Retrieve a single target page of IpAddressInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: IpAddressPage) => any): Promise<IpAddressPage>;
    getPage(params?: any, callback?: any): Promise<IpAddressPage>;
    /**
     * Lists IpAddressInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: IpAddressInstance[]) => any): Promise<IpAddressInstance[]>;
    /**
     * Lists IpAddressInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { IpAddressListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: IpAddressListInstanceOptions, callback?: (error: Error | null, items: IpAddressInstance[]) => any): Promise<IpAddressInstance[]>;
    list(params?: any, callback?: any): Promise<IpAddressInstance[]>;
    /**
     * Retrieve a single page of IpAddressInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: IpAddressPage) => any): Promise<IpAddressPage>;
    /**
     * Retrieve a single page of IpAddressInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { IpAddressListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: IpAddressListInstancePageOptions, callback?: (error: Error | null, items: IpAddressPage) => any): Promise<IpAddressPage>;
    page(params?: any, callback?: any): Promise<IpAddressPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface IpAddressSolution {
    accountSid?: string;
    ipAccessControlListSid?: string;
}
export declare function IpAddressListInstance(version: V2010, accountSid: string, ipAccessControlListSid: string): IpAddressListInstance;
export declare class IpAddressPage extends Page<V2010, IpAddressPayload, IpAddressResource, IpAddressInstance> {
    /**
     * Initialize the IpAddressPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: IpAddressSolution);
    /**
     * Build an instance of IpAddressInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: IpAddressResource): IpAddressInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
