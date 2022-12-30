/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
declare type ServiceConversationScopedWebhookMethod = "GET" | "POST";
declare type ServiceConversationScopedWebhookTarget = "webhook" | "trigger" | "studio";
/**
 * Options to pass to update a WebhookInstance
 *
 * @property { string } [configuration.url] The absolute url the webhook request should be sent to.
 * @property { ServiceConversationScopedWebhookMethod } [configuration.method]
 * @property { Array<string> } [configuration.filters] The list of events, firing webhook event for this Conversation.
 * @property { Array<string> } [configuration.triggers] The list of keywords, firing webhook event for this Conversation.
 * @property { string } [configuration.flowSid] The studio flow SID, where the webhook should be sent to.
 */
export interface WebhookContextUpdateOptions {
    "configuration.url"?: string;
    "configuration.method"?: ServiceConversationScopedWebhookMethod;
    "configuration.filters"?: Array<string>;
    "configuration.triggers"?: Array<string>;
    "configuration.flowSid"?: string;
}
/**
 * Options to pass to create a WebhookInstance
 *
 * @property { ServiceConversationScopedWebhookTarget } target
 * @property { string } [configuration.url] The absolute url the webhook request should be sent to.
 * @property { ServiceConversationScopedWebhookMethod } [configuration.method]
 * @property { Array<string> } [configuration.filters] The list of events, firing webhook event for this Conversation.
 * @property { Array<string> } [configuration.triggers] The list of keywords, firing webhook event for this Conversation.
 * @property { string } [configuration.flowSid] The studio flow SID, where the webhook should be sent to.
 * @property { number } [configuration.replayAfter] The message index for which and it\\\'s successors the webhook will be replayed. Not set by default
 */
export interface WebhookListInstanceCreateOptions {
    target: ServiceConversationScopedWebhookTarget;
    "configuration.url"?: string;
    "configuration.method"?: ServiceConversationScopedWebhookMethod;
    "configuration.filters"?: Array<string>;
    "configuration.triggers"?: Array<string>;
    "configuration.flowSid"?: string;
    "configuration.replayAfter"?: number;
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
export interface WebhookListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: WebhookInstance, done: (err?: Error) => void) => void;
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
export interface WebhookListInstanceOptions {
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
export interface WebhookListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface WebhookContext {
    /**
     * Remove a WebhookInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a WebhookInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebhookInstance
     */
    fetch(callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
    /**
     * Update a WebhookInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebhookInstance
     */
    update(callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
    /**
     * Update a WebhookInstance
     *
     * @param { WebhookContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebhookInstance
     */
    update(params: WebhookContextUpdateOptions, callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
    update(params?: any, callback?: any): Promise<WebhookInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WebhookContextSolution {
    chatServiceSid?: string;
    conversationSid?: string;
    sid?: string;
}
export declare class WebhookContextImpl implements WebhookContext {
    protected _version: V1;
    protected _solution: WebhookContextSolution;
    protected _uri: string;
    constructor(_version: V1, chatServiceSid: string, conversationSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<WebhookInstance>;
    update(params?: any, callback?: any): Promise<WebhookInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): WebhookContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface WebhookPayload extends TwilioResponsePayload {
    webhooks: WebhookResource[];
}
interface WebhookResource {
    sid?: string | null;
    account_sid?: string | null;
    chat_service_sid?: string | null;
    conversation_sid?: string | null;
    target?: string | null;
    url?: string | null;
    configuration?: any | null;
    date_created?: Date | null;
    date_updated?: Date | null;
}
export declare class WebhookInstance {
    protected _version: V1;
    protected _solution: WebhookContextSolution;
    protected _context?: WebhookContext;
    constructor(_version: V1, payload: WebhookResource, chatServiceSid: string, conversationSid: string, sid?: string);
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string | null;
    /**
     * The unique ID of the Account responsible for this conversation.
     */
    accountSid?: string | null;
    /**
     * The SID of the Conversation Service that the resource is associated with.
     */
    chatServiceSid?: string | null;
    /**
     * The unique ID of the Conversation for this webhook.
     */
    conversationSid?: string | null;
    /**
     * The target of this webhook.
     */
    target?: string | null;
    /**
     * An absolute URL for this webhook.
     */
    url?: string | null;
    /**
     * The configuration of this webhook.
     */
    configuration?: any | null;
    /**
     * The date that this resource was created.
     */
    dateCreated?: Date | null;
    /**
     * The date that this resource was last updated.
     */
    dateUpdated?: Date | null;
    private get _proxy();
    /**
     * Remove a WebhookInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a WebhookInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebhookInstance
     */
    fetch(callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
    /**
     * Update a WebhookInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebhookInstance
     */
    update(callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
    /**
     * Update a WebhookInstance
     *
     * @param { WebhookContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebhookInstance
     */
    update(params: WebhookContextUpdateOptions, callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        chatServiceSid: string | null | undefined;
        conversationSid: string | null | undefined;
        target: string | null | undefined;
        url: string | null | undefined;
        configuration: any;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface WebhookListInstance {
    (sid: string): WebhookContext;
    get(sid: string): WebhookContext;
    /**
     * Create a WebhookInstance
     *
     * @param { WebhookListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebhookInstance
     */
    create(params: WebhookListInstanceCreateOptions, callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
    create(params: any, callback?: any): Promise<WebhookInstance>;
    /**
     * Streams WebhookInstance records from the API.
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
    each(callback?: (item: WebhookInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams WebhookInstance records from the API.
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
     * @param { WebhookListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: WebhookListInstanceEachOptions, callback?: (item: WebhookInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of WebhookInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: WebhookPage) => any): Promise<WebhookPage>;
    /**
     * Retrieve a single target page of WebhookInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: WebhookPage) => any): Promise<WebhookPage>;
    getPage(params?: any, callback?: any): Promise<WebhookPage>;
    /**
     * Lists WebhookInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: WebhookInstance[]) => any): Promise<WebhookInstance[]>;
    /**
     * Lists WebhookInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { WebhookListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: WebhookListInstanceOptions, callback?: (error: Error | null, items: WebhookInstance[]) => any): Promise<WebhookInstance[]>;
    list(params?: any, callback?: any): Promise<WebhookInstance[]>;
    /**
     * Retrieve a single page of WebhookInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: WebhookPage) => any): Promise<WebhookPage>;
    /**
     * Retrieve a single page of WebhookInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { WebhookListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: WebhookListInstancePageOptions, callback?: (error: Error | null, items: WebhookPage) => any): Promise<WebhookPage>;
    page(params?: any, callback?: any): Promise<WebhookPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WebhookSolution {
    chatServiceSid?: string;
    conversationSid?: string;
}
export declare function WebhookListInstance(version: V1, chatServiceSid: string, conversationSid: string): WebhookListInstance;
export declare class WebhookPage extends Page<V1, WebhookPayload, WebhookResource, WebhookInstance> {
    /**
     * Initialize the WebhookPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: WebhookSolution);
    /**
     * Build an instance of WebhookInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: WebhookResource): WebhookInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
