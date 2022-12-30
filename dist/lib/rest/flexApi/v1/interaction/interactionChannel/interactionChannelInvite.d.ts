/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
/**
 * Options to pass to create a InteractionChannelInviteInstance
 *
 * @property { any } routing The Interaction\\\'s routing logic.
 */
export interface InteractionChannelInviteListInstanceCreateOptions {
    routing: any;
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
export interface InteractionChannelInviteListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: InteractionChannelInviteInstance, done: (err?: Error) => void) => void;
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
export interface InteractionChannelInviteListInstanceOptions {
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
export interface InteractionChannelInviteListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface InteractionChannelInviteListInstance {
    /**
     * Create a InteractionChannelInviteInstance
     *
     * @param { InteractionChannelInviteListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InteractionChannelInviteInstance
     */
    create(params: InteractionChannelInviteListInstanceCreateOptions, callback?: (error: Error | null, item?: InteractionChannelInviteInstance) => any): Promise<InteractionChannelInviteInstance>;
    create(params: any, callback?: any): Promise<InteractionChannelInviteInstance>;
    /**
     * Streams InteractionChannelInviteInstance records from the API.
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
    each(callback?: (item: InteractionChannelInviteInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams InteractionChannelInviteInstance records from the API.
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
     * @param { InteractionChannelInviteListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: InteractionChannelInviteListInstanceEachOptions, callback?: (item: InteractionChannelInviteInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of InteractionChannelInviteInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: InteractionChannelInvitePage) => any): Promise<InteractionChannelInvitePage>;
    /**
     * Retrieve a single target page of InteractionChannelInviteInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: InteractionChannelInvitePage) => any): Promise<InteractionChannelInvitePage>;
    getPage(params?: any, callback?: any): Promise<InteractionChannelInvitePage>;
    /**
     * Lists InteractionChannelInviteInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: InteractionChannelInviteInstance[]) => any): Promise<InteractionChannelInviteInstance[]>;
    /**
     * Lists InteractionChannelInviteInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { InteractionChannelInviteListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: InteractionChannelInviteListInstanceOptions, callback?: (error: Error | null, items: InteractionChannelInviteInstance[]) => any): Promise<InteractionChannelInviteInstance[]>;
    list(params?: any, callback?: any): Promise<InteractionChannelInviteInstance[]>;
    /**
     * Retrieve a single page of InteractionChannelInviteInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: InteractionChannelInvitePage) => any): Promise<InteractionChannelInvitePage>;
    /**
     * Retrieve a single page of InteractionChannelInviteInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { InteractionChannelInviteListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: InteractionChannelInviteListInstancePageOptions, callback?: (error: Error | null, items: InteractionChannelInvitePage) => any): Promise<InteractionChannelInvitePage>;
    page(params?: any, callback?: any): Promise<InteractionChannelInvitePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface InteractionChannelInviteSolution {
    interactionSid?: string;
    channelSid?: string;
}
export declare function InteractionChannelInviteListInstance(version: V1, interactionSid: string, channelSid: string): InteractionChannelInviteListInstance;
interface InteractionChannelInvitePayload extends TwilioResponsePayload {
    invites: InteractionChannelInviteResource[];
}
interface InteractionChannelInviteResource {
    sid?: string | null;
    interaction_sid?: string | null;
    channel_sid?: string | null;
    routing?: any | null;
    url?: string | null;
}
export declare class InteractionChannelInviteInstance {
    protected _version: V1;
    constructor(_version: V1, payload: InteractionChannelInviteResource, interactionSid: string, channelSid: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The Interaction SID for this Channel
     */
    interactionSid?: string | null;
    /**
     * The Channel SID for this Invite
     */
    channelSid?: string | null;
    /**
     * A JSON object representing the routing rules for the Interaction Channel
     */
    routing?: any | null;
    url?: string | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        interactionSid: string | null | undefined;
        channelSid: string | null | undefined;
        routing: any;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class InteractionChannelInvitePage extends Page<V1, InteractionChannelInvitePayload, InteractionChannelInviteResource, InteractionChannelInviteInstance> {
    /**
     * Initialize the InteractionChannelInvitePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: InteractionChannelInviteSolution);
    /**
     * Build an instance of InteractionChannelInviteInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: InteractionChannelInviteResource): InteractionChannelInviteInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
