/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
/**
 * Options to pass to create a InviteInstance
 *
 * @property { string } identity
 * @property { string } [roleSid]
 */
export interface InviteListInstanceCreateOptions {
    identity: string;
    roleSid?: string;
}
/**
 * Options to pass to each
 *
 * @property { Array<string> } [identity]
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
export interface InviteListInstanceEachOptions {
    identity?: Array<string>;
    pageSize?: number;
    callback?: (item: InviteInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { Array<string> } [identity]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface InviteListInstanceOptions {
    identity?: Array<string>;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { Array<string> } [identity]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface InviteListInstancePageOptions {
    identity?: Array<string>;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface InviteContext {
    /**
     * Remove a InviteInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a InviteInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InviteInstance
     */
    fetch(callback?: (error: Error | null, item?: InviteInstance) => any): Promise<InviteInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface InviteContextSolution {
    serviceSid?: string;
    channelSid?: string;
    sid?: string;
}
export declare class InviteContextImpl implements InviteContext {
    protected _version: V2;
    protected _solution: InviteContextSolution;
    protected _uri: string;
    constructor(_version: V2, serviceSid: string, channelSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<InviteInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): InviteContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface InvitePayload extends TwilioResponsePayload {
    invites: InviteResource[];
}
interface InviteResource {
    sid?: string | null;
    account_sid?: string | null;
    channel_sid?: string | null;
    service_sid?: string | null;
    identity?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    role_sid?: string | null;
    created_by?: string | null;
    url?: string | null;
}
export declare class InviteInstance {
    protected _version: V2;
    protected _solution: InviteContextSolution;
    protected _context?: InviteContext;
    constructor(_version: V2, payload: InviteResource, serviceSid: string, channelSid: string, sid?: string);
    sid?: string | null;
    accountSid?: string | null;
    channelSid?: string | null;
    serviceSid?: string | null;
    identity?: string | null;
    dateCreated?: Date | null;
    dateUpdated?: Date | null;
    roleSid?: string | null;
    createdBy?: string | null;
    url?: string | null;
    private get _proxy();
    /**
     * Remove a InviteInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a InviteInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InviteInstance
     */
    fetch(callback?: (error: Error | null, item?: InviteInstance) => any): Promise<InviteInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        channelSid: string | null | undefined;
        serviceSid: string | null | undefined;
        identity: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        roleSid: string | null | undefined;
        createdBy: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface InviteListInstance {
    (sid: string): InviteContext;
    get(sid: string): InviteContext;
    /**
     * Create a InviteInstance
     *
     * @param { InviteListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InviteInstance
     */
    create(params: InviteListInstanceCreateOptions, callback?: (error: Error | null, item?: InviteInstance) => any): Promise<InviteInstance>;
    create(params: any, callback?: any): Promise<InviteInstance>;
    /**
     * Streams InviteInstance records from the API.
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
    each(callback?: (item: InviteInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams InviteInstance records from the API.
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
     * @param { InviteListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: InviteListInstanceEachOptions, callback?: (item: InviteInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of InviteInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: InvitePage) => any): Promise<InvitePage>;
    /**
     * Retrieve a single target page of InviteInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: InvitePage) => any): Promise<InvitePage>;
    getPage(params?: any, callback?: any): Promise<InvitePage>;
    /**
     * Lists InviteInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: InviteInstance[]) => any): Promise<InviteInstance[]>;
    /**
     * Lists InviteInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { InviteListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: InviteListInstanceOptions, callback?: (error: Error | null, items: InviteInstance[]) => any): Promise<InviteInstance[]>;
    list(params?: any, callback?: any): Promise<InviteInstance[]>;
    /**
     * Retrieve a single page of InviteInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: InvitePage) => any): Promise<InvitePage>;
    /**
     * Retrieve a single page of InviteInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { InviteListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: InviteListInstancePageOptions, callback?: (error: Error | null, items: InvitePage) => any): Promise<InvitePage>;
    page(params?: any, callback?: any): Promise<InvitePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface InviteSolution {
    serviceSid?: string;
    channelSid?: string;
}
export declare function InviteListInstance(version: V2, serviceSid: string, channelSid: string): InviteListInstance;
export declare class InvitePage extends Page<V2, InvitePayload, InviteResource, InviteInstance> {
    /**
     * Initialize the InvitePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: InviteSolution);
    /**
     * Build an instance of InviteInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: InviteResource): InviteInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
