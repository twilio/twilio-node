/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../../base/Page";
import Response from "../../../../../../http/response";
import V1 from "../../../../V1";
declare type MessageInteractionResourceStatus = "accepted" | "answered" | "busy" | "canceled" | "completed" | "deleted" | "delivered" | "delivery-unknown" | "failed" | "in-progress" | "initiated" | "no-answer" | "queued" | "received" | "receiving" | "ringing" | "scheduled" | "sending" | "sent" | "undelivered" | "unknown";
declare type MessageInteractionType = "message" | "voice" | "unknown";
/**
 * Options to pass to create a MessageInteractionInstance
 *
 * @property { string } [body] The message to send to the participant
 * @property { Array<string> } [mediaUrl] Reserved. Not currently supported.
 */
export interface MessageInteractionListInstanceCreateOptions {
    body?: string;
    mediaUrl?: Array<string>;
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
export interface MessageInteractionListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: MessageInteractionInstance, done: (err?: Error) => void) => void;
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
export interface MessageInteractionListInstanceOptions {
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
export interface MessageInteractionListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface MessageInteractionContext {
    /**
     * Fetch a MessageInteractionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInteractionInstance
     */
    fetch(callback?: (error: Error | null, item?: MessageInteractionInstance) => any): Promise<MessageInteractionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MessageInteractionContextSolution {
    serviceSid?: string;
    sessionSid?: string;
    participantSid?: string;
    sid?: string;
}
export declare class MessageInteractionContextImpl implements MessageInteractionContext {
    protected _version: V1;
    protected _solution: MessageInteractionContextSolution;
    protected _uri: string;
    constructor(_version: V1, serviceSid: string, sessionSid: string, participantSid: string, sid: string);
    fetch(callback?: any): Promise<MessageInteractionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): MessageInteractionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface MessageInteractionPayload extends TwilioResponsePayload {
    interactions: MessageInteractionResource[];
}
interface MessageInteractionResource {
    sid?: string | null;
    session_sid?: string | null;
    service_sid?: string | null;
    account_sid?: string | null;
    data?: string | null;
    type?: MessageInteractionType;
    participant_sid?: string | null;
    inbound_participant_sid?: string | null;
    inbound_resource_sid?: string | null;
    inbound_resource_status?: MessageInteractionResourceStatus;
    inbound_resource_type?: string | null;
    inbound_resource_url?: string | null;
    outbound_participant_sid?: string | null;
    outbound_resource_sid?: string | null;
    outbound_resource_status?: MessageInteractionResourceStatus;
    outbound_resource_type?: string | null;
    outbound_resource_url?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class MessageInteractionInstance {
    protected _version: V1;
    protected _solution: MessageInteractionContextSolution;
    protected _context?: MessageInteractionContext;
    constructor(_version: V1, payload: MessageInteractionResource, serviceSid: string, sessionSid: string, participantSid: string, sid?: string);
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
     * A JSON string that includes the message body sent to the participant
     */
    data?: string | null;
    type?: MessageInteractionType;
    /**
     * The SID of the Participant resource
     */
    participantSid?: string | null;
    /**
     * Always empty for Message Interactions
     */
    inboundParticipantSid?: string | null;
    /**
     * Always empty for Message Interactions
     */
    inboundResourceSid?: string | null;
    inboundResourceStatus?: MessageInteractionResourceStatus;
    /**
     * Always empty for Message Interactions
     */
    inboundResourceType?: string | null;
    /**
     * Always empty for Message Interactions
     */
    inboundResourceUrl?: string | null;
    /**
     * The SID of the outbound Participant resource
     */
    outboundParticipantSid?: string | null;
    /**
     * The SID of the outbound Message resource
     */
    outboundResourceSid?: string | null;
    outboundResourceStatus?: MessageInteractionResourceStatus;
    /**
     * The outbound resource type
     */
    outboundResourceType?: string | null;
    /**
     * The URL of the Twilio message resource
     */
    outboundResourceUrl?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the MessageInteraction resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a MessageInteractionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInteractionInstance
     */
    fetch(callback?: (error: Error | null, item?: MessageInteractionInstance) => any): Promise<MessageInteractionInstance>;
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
        type: MessageInteractionType | undefined;
        participantSid: string | null | undefined;
        inboundParticipantSid: string | null | undefined;
        inboundResourceSid: string | null | undefined;
        inboundResourceStatus: MessageInteractionResourceStatus | undefined;
        inboundResourceType: string | null | undefined;
        inboundResourceUrl: string | null | undefined;
        outboundParticipantSid: string | null | undefined;
        outboundResourceSid: string | null | undefined;
        outboundResourceStatus: MessageInteractionResourceStatus | undefined;
        outboundResourceType: string | null | undefined;
        outboundResourceUrl: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface MessageInteractionListInstance {
    (sid: string): MessageInteractionContext;
    get(sid: string): MessageInteractionContext;
    /**
     * Create a MessageInteractionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInteractionInstance
     */
    create(callback?: (error: Error | null, item?: MessageInteractionInstance) => any): Promise<MessageInteractionInstance>;
    /**
     * Create a MessageInteractionInstance
     *
     * @param { MessageInteractionListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInteractionInstance
     */
    create(params: MessageInteractionListInstanceCreateOptions, callback?: (error: Error | null, item?: MessageInteractionInstance) => any): Promise<MessageInteractionInstance>;
    create(params?: any, callback?: any): Promise<MessageInteractionInstance>;
    /**
     * Streams MessageInteractionInstance records from the API.
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
    each(callback?: (item: MessageInteractionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams MessageInteractionInstance records from the API.
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
     * @param { MessageInteractionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: MessageInteractionListInstanceEachOptions, callback?: (item: MessageInteractionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of MessageInteractionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: MessageInteractionPage) => any): Promise<MessageInteractionPage>;
    /**
     * Retrieve a single target page of MessageInteractionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: MessageInteractionPage) => any): Promise<MessageInteractionPage>;
    getPage(params?: any, callback?: any): Promise<MessageInteractionPage>;
    /**
     * Lists MessageInteractionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: MessageInteractionInstance[]) => any): Promise<MessageInteractionInstance[]>;
    /**
     * Lists MessageInteractionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MessageInteractionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: MessageInteractionListInstanceOptions, callback?: (error: Error | null, items: MessageInteractionInstance[]) => any): Promise<MessageInteractionInstance[]>;
    list(params?: any, callback?: any): Promise<MessageInteractionInstance[]>;
    /**
     * Retrieve a single page of MessageInteractionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: MessageInteractionPage) => any): Promise<MessageInteractionPage>;
    /**
     * Retrieve a single page of MessageInteractionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MessageInteractionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: MessageInteractionListInstancePageOptions, callback?: (error: Error | null, items: MessageInteractionPage) => any): Promise<MessageInteractionPage>;
    page(params?: any, callback?: any): Promise<MessageInteractionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MessageInteractionSolution {
    serviceSid?: string;
    sessionSid?: string;
    participantSid?: string;
}
export declare function MessageInteractionListInstance(version: V1, serviceSid: string, sessionSid: string, participantSid: string): MessageInteractionListInstance;
export declare class MessageInteractionPage extends Page<V1, MessageInteractionPayload, MessageInteractionResource, MessageInteractionInstance> {
    /**
     * Initialize the MessageInteractionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: MessageInteractionSolution);
    /**
     * Build an instance of MessageInteractionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: MessageInteractionResource): MessageInteractionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
