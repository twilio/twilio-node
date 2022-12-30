/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
declare type MemberWebhookEnabledType = "true" | "false";
/**
 * Options to pass to remove a MemberInstance
 *
 * @property { MemberWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 */
export interface MemberContextRemoveOptions {
    xTwilioWebhookEnabled?: MemberWebhookEnabledType;
}
/**
 * Options to pass to update a MemberInstance
 *
 * @property { MemberWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [roleSid]
 * @property { number } [lastConsumedMessageIndex]
 * @property { Date } [lastConsumptionTimestamp]
 * @property { Date } [dateCreated]
 * @property { Date } [dateUpdated]
 * @property { string } [attributes]
 */
export interface MemberContextUpdateOptions {
    xTwilioWebhookEnabled?: MemberWebhookEnabledType;
    roleSid?: string;
    lastConsumedMessageIndex?: number;
    lastConsumptionTimestamp?: Date;
    dateCreated?: Date;
    dateUpdated?: Date;
    attributes?: string;
}
/**
 * Options to pass to create a MemberInstance
 *
 * @property { string } identity
 * @property { MemberWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [roleSid]
 * @property { number } [lastConsumedMessageIndex]
 * @property { Date } [lastConsumptionTimestamp]
 * @property { Date } [dateCreated]
 * @property { Date } [dateUpdated]
 * @property { string } [attributes]
 */
export interface MemberListInstanceCreateOptions {
    identity: string;
    xTwilioWebhookEnabled?: MemberWebhookEnabledType;
    roleSid?: string;
    lastConsumedMessageIndex?: number;
    lastConsumptionTimestamp?: Date;
    dateCreated?: Date;
    dateUpdated?: Date;
    attributes?: string;
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
export interface MemberListInstanceEachOptions {
    identity?: Array<string>;
    pageSize?: number;
    callback?: (item: MemberInstance, done: (err?: Error) => void) => void;
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
export interface MemberListInstanceOptions {
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
export interface MemberListInstancePageOptions {
    identity?: Array<string>;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface MemberContext {
    /**
     * Remove a MemberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a MemberInstance
     *
     * @param { MemberContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MemberInstance
     */
    remove(params: MemberContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    remove(params?: any, callback?: any): Promise<boolean>;
    /**
     * Fetch a MemberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MemberInstance
     */
    fetch(callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>;
    /**
     * Update a MemberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MemberInstance
     */
    update(callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>;
    /**
     * Update a MemberInstance
     *
     * @param { MemberContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MemberInstance
     */
    update(params: MemberContextUpdateOptions, callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>;
    update(params?: any, callback?: any): Promise<MemberInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MemberContextSolution {
    serviceSid?: string;
    channelSid?: string;
    sid?: string;
}
export declare class MemberContextImpl implements MemberContext {
    protected _version: V2;
    protected _solution: MemberContextSolution;
    protected _uri: string;
    constructor(_version: V2, serviceSid: string, channelSid: string, sid: string);
    remove(params?: any, callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<MemberInstance>;
    update(params?: any, callback?: any): Promise<MemberInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): MemberContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface MemberPayload extends TwilioResponsePayload {
    members: MemberResource[];
}
interface MemberResource {
    sid?: string | null;
    account_sid?: string | null;
    channel_sid?: string | null;
    service_sid?: string | null;
    identity?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    role_sid?: string | null;
    last_consumed_message_index?: number | null;
    last_consumption_timestamp?: Date | null;
    url?: string | null;
    attributes?: string | null;
}
export declare class MemberInstance {
    protected _version: V2;
    protected _solution: MemberContextSolution;
    protected _context?: MemberContext;
    constructor(_version: V2, payload: MemberResource, serviceSid: string, channelSid: string, sid?: string);
    sid?: string | null;
    accountSid?: string | null;
    channelSid?: string | null;
    serviceSid?: string | null;
    identity?: string | null;
    dateCreated?: Date | null;
    dateUpdated?: Date | null;
    roleSid?: string | null;
    lastConsumedMessageIndex?: number | null;
    lastConsumptionTimestamp?: Date | null;
    url?: string | null;
    attributes?: string | null;
    private get _proxy();
    /**
     * Remove a MemberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a MemberInstance
     *
     * @param { MemberContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MemberInstance
     */
    remove(params: MemberContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a MemberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MemberInstance
     */
    fetch(callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>;
    /**
     * Update a MemberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MemberInstance
     */
    update(callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>;
    /**
     * Update a MemberInstance
     *
     * @param { MemberContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MemberInstance
     */
    update(params: MemberContextUpdateOptions, callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>;
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
        lastConsumedMessageIndex: number | null | undefined;
        lastConsumptionTimestamp: Date | null | undefined;
        url: string | null | undefined;
        attributes: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface MemberListInstance {
    (sid: string): MemberContext;
    get(sid: string): MemberContext;
    /**
     * Create a MemberInstance
     *
     * @param { MemberListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MemberInstance
     */
    create(params: MemberListInstanceCreateOptions, callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>;
    create(params: any, callback?: any): Promise<MemberInstance>;
    /**
     * Streams MemberInstance records from the API.
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
    each(callback?: (item: MemberInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams MemberInstance records from the API.
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
     * @param { MemberListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: MemberListInstanceEachOptions, callback?: (item: MemberInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of MemberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: MemberPage) => any): Promise<MemberPage>;
    /**
     * Retrieve a single target page of MemberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: MemberPage) => any): Promise<MemberPage>;
    getPage(params?: any, callback?: any): Promise<MemberPage>;
    /**
     * Lists MemberInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: MemberInstance[]) => any): Promise<MemberInstance[]>;
    /**
     * Lists MemberInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MemberListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: MemberListInstanceOptions, callback?: (error: Error | null, items: MemberInstance[]) => any): Promise<MemberInstance[]>;
    list(params?: any, callback?: any): Promise<MemberInstance[]>;
    /**
     * Retrieve a single page of MemberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: MemberPage) => any): Promise<MemberPage>;
    /**
     * Retrieve a single page of MemberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MemberListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: MemberListInstancePageOptions, callback?: (error: Error | null, items: MemberPage) => any): Promise<MemberPage>;
    page(params?: any, callback?: any): Promise<MemberPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MemberSolution {
    serviceSid?: string;
    channelSid?: string;
}
export declare function MemberListInstance(version: V2, serviceSid: string, channelSid: string): MemberListInstance;
export declare class MemberPage extends Page<V2, MemberPayload, MemberResource, MemberInstance> {
    /**
     * Initialize the MemberPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: MemberSolution);
    /**
     * Build an instance of MemberInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: MemberResource): MemberInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
