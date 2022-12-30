/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
declare type InteractionResourceStatus = "accepted" | "answered" | "busy" | "canceled" | "completed" | "deleted" | "delivered" | "delivery-unknown" | "failed" | "in-progress" | "initiated" | "no-answer" | "queued" | "received" | "receiving" | "ringing" | "scheduled" | "sending" | "sent" | "undelivered" | "unknown";
declare type InteractionType = "message" | "voice" | "unknown";
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
export interface InteractionListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: InteractionInstance, done: (err?: Error) => void) => void;
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
export interface InteractionListInstanceOptions {
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
export interface InteractionListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface InteractionContext {
    /**
     * Remove a InteractionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a InteractionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InteractionInstance
     */
    fetch(callback?: (error: Error | null, item?: InteractionInstance) => any): Promise<InteractionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface InteractionContextSolution {
    serviceSid?: string;
    sessionSid?: string;
    sid?: string;
}
export declare class InteractionContextImpl implements InteractionContext {
    protected _version: V1;
    protected _solution: InteractionContextSolution;
    protected _uri: string;
    constructor(_version: V1, serviceSid: string, sessionSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<InteractionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): InteractionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface InteractionPayload extends TwilioResponsePayload {
    interactions: InteractionResource[];
}
interface InteractionResource {
    sid?: string | null;
    session_sid?: string | null;
    service_sid?: string | null;
    account_sid?: string | null;
    data?: string | null;
    type?: InteractionType;
    inbound_participant_sid?: string | null;
    inbound_resource_sid?: string | null;
    inbound_resource_status?: InteractionResourceStatus;
    inbound_resource_type?: string | null;
    inbound_resource_url?: string | null;
    outbound_participant_sid?: string | null;
    outbound_resource_sid?: string | null;
    outbound_resource_status?: InteractionResourceStatus;
    outbound_resource_type?: string | null;
    outbound_resource_url?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class InteractionInstance {
    protected _version: V1;
    protected _solution: InteractionContextSolution;
    protected _context?: InteractionContext;
    constructor(_version: V1, payload: InteractionResource, serviceSid: string, sessionSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the resource\'s parent Session
     */
    sessionSid?: string | null;
    /**
     * The SID of the resource\'s parent Service
     */
    serviceSid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * A JSON string that includes the message body of message interactions
     */
    data?: string | null;
    type?: InteractionType;
    /**
     * The SID of the inbound Participant resource
     */
    inboundParticipantSid?: string | null;
    /**
     * The SID of the inbound resource
     */
    inboundResourceSid?: string | null;
    inboundResourceStatus?: InteractionResourceStatus;
    /**
     * The inbound resource type
     */
    inboundResourceType?: string | null;
    /**
     * The URL of the Twilio inbound resource
     */
    inboundResourceUrl?: string | null;
    /**
     * The SID of the outbound Participant
     */
    outboundParticipantSid?: string | null;
    /**
     * The SID of the outbound resource
     */
    outboundResourceSid?: string | null;
    outboundResourceStatus?: InteractionResourceStatus;
    /**
     * The outbound resource type
     */
    outboundResourceType?: string | null;
    /**
     * The URL of the Twilio outbound resource
     */
    outboundResourceUrl?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the Interaction was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the Interaction resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a InteractionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a InteractionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InteractionInstance
     */
    fetch(callback?: (error: Error | null, item?: InteractionInstance) => any): Promise<InteractionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        sessionSid: string | null | undefined;
        serviceSid: string | null | undefined;
        accountSid: string | null | undefined;
        data: string | null | undefined;
        type: InteractionType | undefined;
        inboundParticipantSid: string | null | undefined;
        inboundResourceSid: string | null | undefined;
        inboundResourceStatus: InteractionResourceStatus | undefined;
        inboundResourceType: string | null | undefined;
        inboundResourceUrl: string | null | undefined;
        outboundParticipantSid: string | null | undefined;
        outboundResourceSid: string | null | undefined;
        outboundResourceStatus: InteractionResourceStatus | undefined;
        outboundResourceType: string | null | undefined;
        outboundResourceUrl: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface InteractionListInstance {
    (sid: string): InteractionContext;
    get(sid: string): InteractionContext;
    /**
     * Streams InteractionInstance records from the API.
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
    each(callback?: (item: InteractionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams InteractionInstance records from the API.
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
     * @param { InteractionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: InteractionListInstanceEachOptions, callback?: (item: InteractionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of InteractionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: InteractionPage) => any): Promise<InteractionPage>;
    /**
     * Retrieve a single target page of InteractionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: InteractionPage) => any): Promise<InteractionPage>;
    getPage(params?: any, callback?: any): Promise<InteractionPage>;
    /**
     * Lists InteractionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: InteractionInstance[]) => any): Promise<InteractionInstance[]>;
    /**
     * Lists InteractionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { InteractionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: InteractionListInstanceOptions, callback?: (error: Error | null, items: InteractionInstance[]) => any): Promise<InteractionInstance[]>;
    list(params?: any, callback?: any): Promise<InteractionInstance[]>;
    /**
     * Retrieve a single page of InteractionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: InteractionPage) => any): Promise<InteractionPage>;
    /**
     * Retrieve a single page of InteractionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { InteractionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: InteractionListInstancePageOptions, callback?: (error: Error | null, items: InteractionPage) => any): Promise<InteractionPage>;
    page(params?: any, callback?: any): Promise<InteractionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface InteractionSolution {
    serviceSid?: string;
    sessionSid?: string;
}
export declare function InteractionListInstance(version: V1, serviceSid: string, sessionSid: string): InteractionListInstance;
export declare class InteractionPage extends Page<V1, InteractionPayload, InteractionResource, InteractionInstance> {
    /**
     * Initialize the InteractionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: InteractionSolution);
    /**
     * Build an instance of InteractionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: InteractionResource): InteractionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
