/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
declare type EndUserType = "individual" | "business";
/**
 * Options to pass to update a EndUserInstance
 *
 * @property { string } [friendlyName] The string that you assigned to describe the resource.
 * @property { any } [attributes] The set of parameters that are the attributes of the End User resource which are derived End User Types.
 */
export interface EndUserContextUpdateOptions {
    friendlyName?: string;
    attributes?: any;
}
/**
 * Options to pass to create a EndUserInstance
 *
 * @property { string } friendlyName The string that you assigned to describe the resource.
 * @property { EndUserType } type
 * @property { any } [attributes] The set of parameters that are the attributes of the End User resource which are derived End User Types.
 */
export interface EndUserListInstanceCreateOptions {
    friendlyName: string;
    type: EndUserType;
    attributes?: any;
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
export interface EndUserListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: EndUserInstance, done: (err?: Error) => void) => void;
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
export interface EndUserListInstanceOptions {
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
export interface EndUserListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface EndUserContext {
    /**
     * Remove a EndUserInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a EndUserInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EndUserInstance
     */
    fetch(callback?: (error: Error | null, item?: EndUserInstance) => any): Promise<EndUserInstance>;
    /**
     * Update a EndUserInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EndUserInstance
     */
    update(callback?: (error: Error | null, item?: EndUserInstance) => any): Promise<EndUserInstance>;
    /**
     * Update a EndUserInstance
     *
     * @param { EndUserContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EndUserInstance
     */
    update(params: EndUserContextUpdateOptions, callback?: (error: Error | null, item?: EndUserInstance) => any): Promise<EndUserInstance>;
    update(params?: any, callback?: any): Promise<EndUserInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EndUserContextSolution {
    sid?: string;
}
export declare class EndUserContextImpl implements EndUserContext {
    protected _version: V2;
    protected _solution: EndUserContextSolution;
    protected _uri: string;
    constructor(_version: V2, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<EndUserInstance>;
    update(params?: any, callback?: any): Promise<EndUserInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): EndUserContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface EndUserPayload extends TwilioResponsePayload {
    results: EndUserResource[];
}
interface EndUserResource {
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    type?: EndUserType;
    attributes?: any | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class EndUserInstance {
    protected _version: V2;
    protected _solution: EndUserContextSolution;
    protected _context?: EndUserContext;
    constructor(_version: V2, payload: EndUserResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    type?: EndUserType;
    /**
     * The set of parameters that compose the End Users resource
     */
    attributes?: any | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the End User resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a EndUserInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a EndUserInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EndUserInstance
     */
    fetch(callback?: (error: Error | null, item?: EndUserInstance) => any): Promise<EndUserInstance>;
    /**
     * Update a EndUserInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EndUserInstance
     */
    update(callback?: (error: Error | null, item?: EndUserInstance) => any): Promise<EndUserInstance>;
    /**
     * Update a EndUserInstance
     *
     * @param { EndUserContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EndUserInstance
     */
    update(params: EndUserContextUpdateOptions, callback?: (error: Error | null, item?: EndUserInstance) => any): Promise<EndUserInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        type: EndUserType | undefined;
        attributes: any;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface EndUserListInstance {
    (sid: string): EndUserContext;
    get(sid: string): EndUserContext;
    /**
     * Create a EndUserInstance
     *
     * @param { EndUserListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EndUserInstance
     */
    create(params: EndUserListInstanceCreateOptions, callback?: (error: Error | null, item?: EndUserInstance) => any): Promise<EndUserInstance>;
    create(params: any, callback?: any): Promise<EndUserInstance>;
    /**
     * Streams EndUserInstance records from the API.
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
    each(callback?: (item: EndUserInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams EndUserInstance records from the API.
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
     * @param { EndUserListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: EndUserListInstanceEachOptions, callback?: (item: EndUserInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of EndUserInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: EndUserPage) => any): Promise<EndUserPage>;
    /**
     * Retrieve a single target page of EndUserInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: EndUserPage) => any): Promise<EndUserPage>;
    getPage(params?: any, callback?: any): Promise<EndUserPage>;
    /**
     * Lists EndUserInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: EndUserInstance[]) => any): Promise<EndUserInstance[]>;
    /**
     * Lists EndUserInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EndUserListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: EndUserListInstanceOptions, callback?: (error: Error | null, items: EndUserInstance[]) => any): Promise<EndUserInstance[]>;
    list(params?: any, callback?: any): Promise<EndUserInstance[]>;
    /**
     * Retrieve a single page of EndUserInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: EndUserPage) => any): Promise<EndUserPage>;
    /**
     * Retrieve a single page of EndUserInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EndUserListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: EndUserListInstancePageOptions, callback?: (error: Error | null, items: EndUserPage) => any): Promise<EndUserPage>;
    page(params?: any, callback?: any): Promise<EndUserPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EndUserSolution {
}
export declare function EndUserListInstance(version: V2): EndUserListInstance;
export declare class EndUserPage extends Page<V2, EndUserPayload, EndUserResource, EndUserInstance> {
    /**
     * Initialize the EndUserPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: EndUserSolution);
    /**
     * Build an instance of EndUserInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: EndUserResource): EndUserInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
