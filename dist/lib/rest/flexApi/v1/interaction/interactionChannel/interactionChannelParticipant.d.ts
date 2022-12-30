/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
declare type InteractionChannelParticipantStatus = "closed" | "wrapup";
declare type InteractionChannelParticipantType = "supervisor" | "customer" | "external" | "agent" | "unknown";
/**
 * Options to pass to update a InteractionChannelParticipantInstance
 *
 * @property { InteractionChannelParticipantStatus } status
 */
export interface InteractionChannelParticipantContextUpdateOptions {
    status: InteractionChannelParticipantStatus;
}
/**
 * Options to pass to create a InteractionChannelParticipantInstance
 *
 * @property { InteractionChannelParticipantType } type
 * @property { any } mediaProperties JSON representing the Media Properties for the new Participant.
 */
export interface InteractionChannelParticipantListInstanceCreateOptions {
    type: InteractionChannelParticipantType;
    mediaProperties: any;
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
export interface InteractionChannelParticipantListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: InteractionChannelParticipantInstance, done: (err?: Error) => void) => void;
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
export interface InteractionChannelParticipantListInstanceOptions {
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
export interface InteractionChannelParticipantListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface InteractionChannelParticipantContext {
    /**
     * Update a InteractionChannelParticipantInstance
     *
     * @param { InteractionChannelParticipantContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InteractionChannelParticipantInstance
     */
    update(params: InteractionChannelParticipantContextUpdateOptions, callback?: (error: Error | null, item?: InteractionChannelParticipantInstance) => any): Promise<InteractionChannelParticipantInstance>;
    update(params: any, callback?: any): Promise<InteractionChannelParticipantInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface InteractionChannelParticipantContextSolution {
    interactionSid?: string;
    channelSid?: string;
    sid?: string;
}
export declare class InteractionChannelParticipantContextImpl implements InteractionChannelParticipantContext {
    protected _version: V1;
    protected _solution: InteractionChannelParticipantContextSolution;
    protected _uri: string;
    constructor(_version: V1, interactionSid: string, channelSid: string, sid: string);
    update(params: any, callback?: any): Promise<InteractionChannelParticipantInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): InteractionChannelParticipantContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface InteractionChannelParticipantPayload extends TwilioResponsePayload {
    participants: InteractionChannelParticipantResource[];
}
interface InteractionChannelParticipantResource {
    sid?: string | null;
    type?: InteractionChannelParticipantType;
    interaction_sid?: string | null;
    channel_sid?: string | null;
    url?: string | null;
}
export declare class InteractionChannelParticipantInstance {
    protected _version: V1;
    protected _solution: InteractionChannelParticipantContextSolution;
    protected _context?: InteractionChannelParticipantContext;
    constructor(_version: V1, payload: InteractionChannelParticipantResource, interactionSid: string, channelSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    type?: InteractionChannelParticipantType;
    /**
     * The Interaction Sid for this channel.
     */
    interactionSid?: string | null;
    /**
     * The Channel Sid for this Participant.
     */
    channelSid?: string | null;
    url?: string | null;
    private get _proxy();
    /**
     * Update a InteractionChannelParticipantInstance
     *
     * @param { InteractionChannelParticipantContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InteractionChannelParticipantInstance
     */
    update(params: InteractionChannelParticipantContextUpdateOptions, callback?: (error: Error | null, item?: InteractionChannelParticipantInstance) => any): Promise<InteractionChannelParticipantInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        type: InteractionChannelParticipantType | undefined;
        interactionSid: string | null | undefined;
        channelSid: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface InteractionChannelParticipantListInstance {
    (sid: string): InteractionChannelParticipantContext;
    get(sid: string): InteractionChannelParticipantContext;
    /**
     * Create a InteractionChannelParticipantInstance
     *
     * @param { InteractionChannelParticipantListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InteractionChannelParticipantInstance
     */
    create(params: InteractionChannelParticipantListInstanceCreateOptions, callback?: (error: Error | null, item?: InteractionChannelParticipantInstance) => any): Promise<InteractionChannelParticipantInstance>;
    create(params: any, callback?: any): Promise<InteractionChannelParticipantInstance>;
    /**
     * Streams InteractionChannelParticipantInstance records from the API.
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
    each(callback?: (item: InteractionChannelParticipantInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams InteractionChannelParticipantInstance records from the API.
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
     * @param { InteractionChannelParticipantListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: InteractionChannelParticipantListInstanceEachOptions, callback?: (item: InteractionChannelParticipantInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of InteractionChannelParticipantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: InteractionChannelParticipantPage) => any): Promise<InteractionChannelParticipantPage>;
    /**
     * Retrieve a single target page of InteractionChannelParticipantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: InteractionChannelParticipantPage) => any): Promise<InteractionChannelParticipantPage>;
    getPage(params?: any, callback?: any): Promise<InteractionChannelParticipantPage>;
    /**
     * Lists InteractionChannelParticipantInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: InteractionChannelParticipantInstance[]) => any): Promise<InteractionChannelParticipantInstance[]>;
    /**
     * Lists InteractionChannelParticipantInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { InteractionChannelParticipantListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: InteractionChannelParticipantListInstanceOptions, callback?: (error: Error | null, items: InteractionChannelParticipantInstance[]) => any): Promise<InteractionChannelParticipantInstance[]>;
    list(params?: any, callback?: any): Promise<InteractionChannelParticipantInstance[]>;
    /**
     * Retrieve a single page of InteractionChannelParticipantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: InteractionChannelParticipantPage) => any): Promise<InteractionChannelParticipantPage>;
    /**
     * Retrieve a single page of InteractionChannelParticipantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { InteractionChannelParticipantListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: InteractionChannelParticipantListInstancePageOptions, callback?: (error: Error | null, items: InteractionChannelParticipantPage) => any): Promise<InteractionChannelParticipantPage>;
    page(params?: any, callback?: any): Promise<InteractionChannelParticipantPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface InteractionChannelParticipantSolution {
    interactionSid?: string;
    channelSid?: string;
}
export declare function InteractionChannelParticipantListInstance(version: V1, interactionSid: string, channelSid: string): InteractionChannelParticipantListInstance;
export declare class InteractionChannelParticipantPage extends Page<V1, InteractionChannelParticipantPayload, InteractionChannelParticipantResource, InteractionChannelParticipantInstance> {
    /**
     * Initialize the InteractionChannelParticipantPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: InteractionChannelParticipantSolution);
    /**
     * Build an instance of InteractionChannelParticipantInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: InteractionChannelParticipantResource): InteractionChannelParticipantInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
