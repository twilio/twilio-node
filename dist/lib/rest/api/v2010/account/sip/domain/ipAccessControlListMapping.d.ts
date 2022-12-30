/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../../base/Page";
import Response from "../../../../../../http/response";
import V2010 from "../../../../V2010";
/**
 * Options to pass to create a IpAccessControlListMappingInstance
 *
 * @property { string } ipAccessControlListSid The unique id of the IP access control list to map to the SIP domain.
 */
export interface IpAccessControlListMappingListInstanceCreateOptions {
    ipAccessControlListSid: string;
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
export interface IpAccessControlListMappingListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: IpAccessControlListMappingInstance, done: (err?: Error) => void) => void;
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
export interface IpAccessControlListMappingListInstanceOptions {
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
export interface IpAccessControlListMappingListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface IpAccessControlListMappingContext {
    /**
     * Remove a IpAccessControlListMappingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a IpAccessControlListMappingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpAccessControlListMappingInstance
     */
    fetch(callback?: (error: Error | null, item?: IpAccessControlListMappingInstance) => any): Promise<IpAccessControlListMappingInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface IpAccessControlListMappingContextSolution {
    accountSid?: string;
    domainSid?: string;
    sid?: string;
}
export declare class IpAccessControlListMappingContextImpl implements IpAccessControlListMappingContext {
    protected _version: V2010;
    protected _solution: IpAccessControlListMappingContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, domainSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<IpAccessControlListMappingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): IpAccessControlListMappingContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface IpAccessControlListMappingPayload extends TwilioResponsePayload {
    ip_access_control_list_mappings: IpAccessControlListMappingResource[];
}
interface IpAccessControlListMappingResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    domain_sid?: string | null;
    friendly_name?: string | null;
    sid?: string | null;
    uri?: string | null;
}
export declare class IpAccessControlListMappingInstance {
    protected _version: V2010;
    protected _solution: IpAccessControlListMappingContextSolution;
    protected _context?: IpAccessControlListMappingContext;
    constructor(_version: V2010, payload: IpAccessControlListMappingResource, accountSid: string, domainSid: string, sid?: string);
    /**
     * The unique id of the Account that is responsible for this resource.
     */
    accountSid?: string | null;
    /**
     * The date that this resource was created, given as GMT in RFC 2822 format.
     */
    dateCreated?: Date | null;
    /**
     * The date that this resource was last updated, given as GMT in RFC 2822 format.
     */
    dateUpdated?: Date | null;
    /**
     * The unique string that identifies the SipDomain resource.
     */
    domainSid?: string | null;
    /**
     * A human readable descriptive text for this resource, up to 64 characters long.
     */
    friendlyName?: string | null;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string | null;
    /**
     * The URI for this resource, relative to https://api.twilio.com
     */
    uri?: string | null;
    private get _proxy();
    /**
     * Remove a IpAccessControlListMappingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a IpAccessControlListMappingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpAccessControlListMappingInstance
     */
    fetch(callback?: (error: Error | null, item?: IpAccessControlListMappingInstance) => any): Promise<IpAccessControlListMappingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        domainSid: string | null | undefined;
        friendlyName: string | null | undefined;
        sid: string | null | undefined;
        uri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface IpAccessControlListMappingListInstance {
    (sid: string): IpAccessControlListMappingContext;
    get(sid: string): IpAccessControlListMappingContext;
    /**
     * Create a IpAccessControlListMappingInstance
     *
     * @param { IpAccessControlListMappingListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpAccessControlListMappingInstance
     */
    create(params: IpAccessControlListMappingListInstanceCreateOptions, callback?: (error: Error | null, item?: IpAccessControlListMappingInstance) => any): Promise<IpAccessControlListMappingInstance>;
    create(params: any, callback?: any): Promise<IpAccessControlListMappingInstance>;
    /**
     * Streams IpAccessControlListMappingInstance records from the API.
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
    each(callback?: (item: IpAccessControlListMappingInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams IpAccessControlListMappingInstance records from the API.
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
     * @param { IpAccessControlListMappingListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: IpAccessControlListMappingListInstanceEachOptions, callback?: (item: IpAccessControlListMappingInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of IpAccessControlListMappingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: IpAccessControlListMappingPage) => any): Promise<IpAccessControlListMappingPage>;
    /**
     * Retrieve a single target page of IpAccessControlListMappingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: IpAccessControlListMappingPage) => any): Promise<IpAccessControlListMappingPage>;
    getPage(params?: any, callback?: any): Promise<IpAccessControlListMappingPage>;
    /**
     * Lists IpAccessControlListMappingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: IpAccessControlListMappingInstance[]) => any): Promise<IpAccessControlListMappingInstance[]>;
    /**
     * Lists IpAccessControlListMappingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { IpAccessControlListMappingListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: IpAccessControlListMappingListInstanceOptions, callback?: (error: Error | null, items: IpAccessControlListMappingInstance[]) => any): Promise<IpAccessControlListMappingInstance[]>;
    list(params?: any, callback?: any): Promise<IpAccessControlListMappingInstance[]>;
    /**
     * Retrieve a single page of IpAccessControlListMappingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: IpAccessControlListMappingPage) => any): Promise<IpAccessControlListMappingPage>;
    /**
     * Retrieve a single page of IpAccessControlListMappingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { IpAccessControlListMappingListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: IpAccessControlListMappingListInstancePageOptions, callback?: (error: Error | null, items: IpAccessControlListMappingPage) => any): Promise<IpAccessControlListMappingPage>;
    page(params?: any, callback?: any): Promise<IpAccessControlListMappingPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface IpAccessControlListMappingSolution {
    accountSid?: string;
    domainSid?: string;
}
export declare function IpAccessControlListMappingListInstance(version: V2010, accountSid: string, domainSid: string): IpAccessControlListMappingListInstance;
export declare class IpAccessControlListMappingPage extends Page<V2010, IpAccessControlListMappingPayload, IpAccessControlListMappingResource, IpAccessControlListMappingInstance> {
    /**
     * Initialize the IpAccessControlListMappingPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: IpAccessControlListMappingSolution);
    /**
     * Build an instance of IpAccessControlListMappingInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: IpAccessControlListMappingResource): IpAccessControlListMappingInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
