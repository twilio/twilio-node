/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type WebChannelChatStatus = "inactive";
/**
 * Options to pass to update a WebChannelInstance
 *
 * @property { WebChannelChatStatus } [chatStatus]
 * @property { string } [postEngagementData] The post-engagement data.
 */
export interface WebChannelContextUpdateOptions {
    chatStatus?: WebChannelChatStatus;
    postEngagementData?: string;
}
/**
 * Options to pass to create a WebChannelInstance
 *
 * @property { string } flexFlowSid The SID of the Flex Flow.
 * @property { string } identity The chat identity.
 * @property { string } customerFriendlyName The chat participant\\\'s friendly name.
 * @property { string } chatFriendlyName The chat channel\\\'s friendly name.
 * @property { string } [chatUniqueName] The chat channel\\\'s unique name.
 * @property { string } [preEngagementData] The pre-engagement data.
 */
export interface WebChannelListInstanceCreateOptions {
    flexFlowSid: string;
    identity: string;
    customerFriendlyName: string;
    chatFriendlyName: string;
    chatUniqueName?: string;
    preEngagementData?: string;
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
export interface WebChannelListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: WebChannelInstance, done: (err?: Error) => void) => void;
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
export interface WebChannelListInstanceOptions {
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
export interface WebChannelListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface WebChannelContext {
    /**
     * Remove a WebChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a WebChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebChannelInstance
     */
    fetch(callback?: (error: Error | null, item?: WebChannelInstance) => any): Promise<WebChannelInstance>;
    /**
     * Update a WebChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebChannelInstance
     */
    update(callback?: (error: Error | null, item?: WebChannelInstance) => any): Promise<WebChannelInstance>;
    /**
     * Update a WebChannelInstance
     *
     * @param { WebChannelContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebChannelInstance
     */
    update(params: WebChannelContextUpdateOptions, callback?: (error: Error | null, item?: WebChannelInstance) => any): Promise<WebChannelInstance>;
    update(params?: any, callback?: any): Promise<WebChannelInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WebChannelContextSolution {
    sid?: string;
}
export declare class WebChannelContextImpl implements WebChannelContext {
    protected _version: V1;
    protected _solution: WebChannelContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<WebChannelInstance>;
    update(params?: any, callback?: any): Promise<WebChannelInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): WebChannelContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface WebChannelPayload extends TwilioResponsePayload {
    flex_chat_channels: WebChannelResource[];
}
interface WebChannelResource {
    account_sid?: string | null;
    flex_flow_sid?: string | null;
    sid?: string | null;
    url?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
}
export declare class WebChannelInstance {
    protected _version: V1;
    protected _solution: WebChannelContextSolution;
    protected _context?: WebChannelContext;
    constructor(_version: V1, payload: WebChannelResource, sid?: string);
    /**
     * The SID of the Account that created the resource and owns this Workflow
     */
    accountSid?: string | null;
    /**
     * The SID of the Flex Flow
     */
    flexFlowSid?: string | null;
    /**
     * The unique string that identifies the WebChannel resource
     */
    sid?: string | null;
    /**
     * The absolute URL of the WebChannel resource
     */
    url?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    private get _proxy();
    /**
     * Remove a WebChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a WebChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebChannelInstance
     */
    fetch(callback?: (error: Error | null, item?: WebChannelInstance) => any): Promise<WebChannelInstance>;
    /**
     * Update a WebChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebChannelInstance
     */
    update(callback?: (error: Error | null, item?: WebChannelInstance) => any): Promise<WebChannelInstance>;
    /**
     * Update a WebChannelInstance
     *
     * @param { WebChannelContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebChannelInstance
     */
    update(params: WebChannelContextUpdateOptions, callback?: (error: Error | null, item?: WebChannelInstance) => any): Promise<WebChannelInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        flexFlowSid: string | null | undefined;
        sid: string | null | undefined;
        url: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface WebChannelListInstance {
    (sid: string): WebChannelContext;
    get(sid: string): WebChannelContext;
    /**
     * Create a WebChannelInstance
     *
     * @param { WebChannelListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebChannelInstance
     */
    create(params: WebChannelListInstanceCreateOptions, callback?: (error: Error | null, item?: WebChannelInstance) => any): Promise<WebChannelInstance>;
    create(params: any, callback?: any): Promise<WebChannelInstance>;
    /**
     * Streams WebChannelInstance records from the API.
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
    each(callback?: (item: WebChannelInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams WebChannelInstance records from the API.
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
     * @param { WebChannelListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: WebChannelListInstanceEachOptions, callback?: (item: WebChannelInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of WebChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: WebChannelPage) => any): Promise<WebChannelPage>;
    /**
     * Retrieve a single target page of WebChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: WebChannelPage) => any): Promise<WebChannelPage>;
    getPage(params?: any, callback?: any): Promise<WebChannelPage>;
    /**
     * Lists WebChannelInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: WebChannelInstance[]) => any): Promise<WebChannelInstance[]>;
    /**
     * Lists WebChannelInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { WebChannelListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: WebChannelListInstanceOptions, callback?: (error: Error | null, items: WebChannelInstance[]) => any): Promise<WebChannelInstance[]>;
    list(params?: any, callback?: any): Promise<WebChannelInstance[]>;
    /**
     * Retrieve a single page of WebChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: WebChannelPage) => any): Promise<WebChannelPage>;
    /**
     * Retrieve a single page of WebChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { WebChannelListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: WebChannelListInstancePageOptions, callback?: (error: Error | null, items: WebChannelPage) => any): Promise<WebChannelPage>;
    page(params?: any, callback?: any): Promise<WebChannelPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WebChannelSolution {
}
export declare function WebChannelListInstance(version: V1): WebChannelListInstance;
export declare class WebChannelPage extends Page<V1, WebChannelPayload, WebChannelResource, WebChannelInstance> {
    /**
     * Initialize the WebChannelPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: WebChannelSolution);
    /**
     * Build an instance of WebChannelInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: WebChannelResource): WebChannelInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
