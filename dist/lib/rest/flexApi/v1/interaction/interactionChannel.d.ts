/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { InteractionChannelInviteListInstance } from "./interactionChannel/interactionChannelInvite";
import { InteractionChannelParticipantListInstance } from "./interactionChannel/interactionChannelParticipant";
declare type InteractionChannelChannelStatus = "setup" | "active" | "failed" | "closed";
declare type InteractionChannelStatus = "closed" | "wrapup";
declare type InteractionChannelType = "voice" | "sms" | "email" | "web" | "whatsapp" | "chat" | "messenger" | "gbm";
/**
 * Options to pass to update a InteractionChannelInstance
 *
 * @property { InteractionChannelStatus } status
 * @property { any } [routing] Optional. The state of associated tasks. If not specified, all tasks will be set to `wrapping`.
 */
export interface InteractionChannelContextUpdateOptions {
    status: InteractionChannelStatus;
    routing?: any;
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
export interface InteractionChannelListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: InteractionChannelInstance, done: (err?: Error) => void) => void;
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
export interface InteractionChannelListInstanceOptions {
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
export interface InteractionChannelListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface InteractionChannelContext {
    invites: InteractionChannelInviteListInstance;
    participants: InteractionChannelParticipantListInstance;
    /**
     * Fetch a InteractionChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InteractionChannelInstance
     */
    fetch(callback?: (error: Error | null, item?: InteractionChannelInstance) => any): Promise<InteractionChannelInstance>;
    /**
     * Update a InteractionChannelInstance
     *
     * @param { InteractionChannelContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InteractionChannelInstance
     */
    update(params: InteractionChannelContextUpdateOptions, callback?: (error: Error | null, item?: InteractionChannelInstance) => any): Promise<InteractionChannelInstance>;
    update(params: any, callback?: any): Promise<InteractionChannelInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface InteractionChannelContextSolution {
    interactionSid?: string;
    sid?: string;
}
export declare class InteractionChannelContextImpl implements InteractionChannelContext {
    protected _version: V1;
    protected _solution: InteractionChannelContextSolution;
    protected _uri: string;
    protected _invites?: InteractionChannelInviteListInstance;
    protected _participants?: InteractionChannelParticipantListInstance;
    constructor(_version: V1, interactionSid: string, sid: string);
    get invites(): InteractionChannelInviteListInstance;
    get participants(): InteractionChannelParticipantListInstance;
    fetch(callback?: any): Promise<InteractionChannelInstance>;
    update(params: any, callback?: any): Promise<InteractionChannelInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): InteractionChannelContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface InteractionChannelPayload extends TwilioResponsePayload {
    channels: InteractionChannelResource[];
}
interface InteractionChannelResource {
    sid?: string | null;
    interaction_sid?: string | null;
    type?: InteractionChannelType;
    status?: InteractionChannelChannelStatus;
    error_code?: number | null;
    error_message?: string | null;
    url?: string | null;
    links?: object | null;
}
export declare class InteractionChannelInstance {
    protected _version: V1;
    protected _solution: InteractionChannelContextSolution;
    protected _context?: InteractionChannelContext;
    constructor(_version: V1, payload: InteractionChannelResource, interactionSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The unique string that identifies the resource.
     */
    interactionSid?: string | null;
    type?: InteractionChannelType;
    status?: InteractionChannelChannelStatus;
    /**
     * The Twilio error code for a failed channel.
     */
    errorCode?: number | null;
    /**
     * The error message for a failed channel.
     */
    errorMessage?: string | null;
    url?: string | null;
    links?: object | null;
    private get _proxy();
    /**
     * Fetch a InteractionChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InteractionChannelInstance
     */
    fetch(callback?: (error: Error | null, item?: InteractionChannelInstance) => any): Promise<InteractionChannelInstance>;
    /**
     * Update a InteractionChannelInstance
     *
     * @param { InteractionChannelContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InteractionChannelInstance
     */
    update(params: InteractionChannelContextUpdateOptions, callback?: (error: Error | null, item?: InteractionChannelInstance) => any): Promise<InteractionChannelInstance>;
    /**
     * Access the invites.
     */
    invites(): InteractionChannelInviteListInstance;
    /**
     * Access the participants.
     */
    participants(): InteractionChannelParticipantListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        interactionSid: string | null | undefined;
        type: InteractionChannelType | undefined;
        status: InteractionChannelChannelStatus | undefined;
        errorCode: number | null | undefined;
        errorMessage: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface InteractionChannelListInstance {
    (sid: string): InteractionChannelContext;
    get(sid: string): InteractionChannelContext;
    /**
     * Streams InteractionChannelInstance records from the API.
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
    each(callback?: (item: InteractionChannelInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams InteractionChannelInstance records from the API.
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
     * @param { InteractionChannelListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: InteractionChannelListInstanceEachOptions, callback?: (item: InteractionChannelInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of InteractionChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: InteractionChannelPage) => any): Promise<InteractionChannelPage>;
    /**
     * Retrieve a single target page of InteractionChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: InteractionChannelPage) => any): Promise<InteractionChannelPage>;
    getPage(params?: any, callback?: any): Promise<InteractionChannelPage>;
    /**
     * Lists InteractionChannelInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: InteractionChannelInstance[]) => any): Promise<InteractionChannelInstance[]>;
    /**
     * Lists InteractionChannelInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { InteractionChannelListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: InteractionChannelListInstanceOptions, callback?: (error: Error | null, items: InteractionChannelInstance[]) => any): Promise<InteractionChannelInstance[]>;
    list(params?: any, callback?: any): Promise<InteractionChannelInstance[]>;
    /**
     * Retrieve a single page of InteractionChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: InteractionChannelPage) => any): Promise<InteractionChannelPage>;
    /**
     * Retrieve a single page of InteractionChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { InteractionChannelListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: InteractionChannelListInstancePageOptions, callback?: (error: Error | null, items: InteractionChannelPage) => any): Promise<InteractionChannelPage>;
    page(params?: any, callback?: any): Promise<InteractionChannelPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface InteractionChannelSolution {
    interactionSid?: string;
}
export declare function InteractionChannelListInstance(version: V1, interactionSid: string): InteractionChannelListInstance;
export declare class InteractionChannelPage extends Page<V1, InteractionChannelPayload, InteractionChannelResource, InteractionChannelInstance> {
    /**
     * Initialize the InteractionChannelPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: InteractionChannelSolution);
    /**
     * Build an instance of InteractionChannelInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: InteractionChannelResource): InteractionChannelInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
