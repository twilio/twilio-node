/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
declare type ConversationMessageReceiptDeliveryStatus = "read" | "failed" | "delivered" | "undelivered" | "sent";
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
export interface DeliveryReceiptListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: DeliveryReceiptInstance, done: (err?: Error) => void) => void;
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
export interface DeliveryReceiptListInstanceOptions {
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
export interface DeliveryReceiptListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface DeliveryReceiptContext {
    /**
     * Fetch a DeliveryReceiptInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeliveryReceiptInstance
     */
    fetch(callback?: (error: Error | null, item?: DeliveryReceiptInstance) => any): Promise<DeliveryReceiptInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DeliveryReceiptContextSolution {
    conversationSid?: string;
    messageSid?: string;
    sid?: string;
}
export declare class DeliveryReceiptContextImpl implements DeliveryReceiptContext {
    protected _version: V1;
    protected _solution: DeliveryReceiptContextSolution;
    protected _uri: string;
    constructor(_version: V1, conversationSid: string, messageSid: string, sid: string);
    fetch(callback?: any): Promise<DeliveryReceiptInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): DeliveryReceiptContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface DeliveryReceiptPayload extends TwilioResponsePayload {
    delivery_receipts: DeliveryReceiptResource[];
}
interface DeliveryReceiptResource {
    account_sid?: string | null;
    conversation_sid?: string | null;
    sid?: string | null;
    message_sid?: string | null;
    channel_message_sid?: string | null;
    participant_sid?: string | null;
    status?: ConversationMessageReceiptDeliveryStatus;
    error_code?: number | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class DeliveryReceiptInstance {
    protected _version: V1;
    protected _solution: DeliveryReceiptContextSolution;
    protected _context?: DeliveryReceiptContext;
    constructor(_version: V1, payload: DeliveryReceiptResource, conversationSid: string, messageSid: string, sid?: string);
    /**
     * The unique ID of the Account responsible for this participant.
     */
    accountSid?: string | null;
    /**
     * The unique ID of the Conversation for this message.
     */
    conversationSid?: string | null;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string | null;
    /**
     * The SID of the message the delivery receipt belongs to
     */
    messageSid?: string | null;
    /**
     * A messaging channel-specific identifier for the message delivered to participant
     */
    channelMessageSid?: string | null;
    /**
     * The unique ID of the participant the delivery receipt belongs to.
     */
    participantSid?: string | null;
    status?: ConversationMessageReceiptDeliveryStatus;
    /**
     * The message [delivery error code](https://www.twilio.com/docs/sms/api/message-resource#delivery-related-errors) for a `failed` status
     */
    errorCode?: number | null;
    /**
     * The date that this resource was created.
     */
    dateCreated?: Date | null;
    /**
     * The date that this resource was last updated.
     */
    dateUpdated?: Date | null;
    /**
     * An absolute URL for this delivery receipt.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a DeliveryReceiptInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeliveryReceiptInstance
     */
    fetch(callback?: (error: Error | null, item?: DeliveryReceiptInstance) => any): Promise<DeliveryReceiptInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        conversationSid: string | null | undefined;
        sid: string | null | undefined;
        messageSid: string | null | undefined;
        channelMessageSid: string | null | undefined;
        participantSid: string | null | undefined;
        status: ConversationMessageReceiptDeliveryStatus | undefined;
        errorCode: number | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface DeliveryReceiptListInstance {
    (sid: string): DeliveryReceiptContext;
    get(sid: string): DeliveryReceiptContext;
    /**
     * Streams DeliveryReceiptInstance records from the API.
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
    each(callback?: (item: DeliveryReceiptInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams DeliveryReceiptInstance records from the API.
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
     * @param { DeliveryReceiptListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: DeliveryReceiptListInstanceEachOptions, callback?: (item: DeliveryReceiptInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of DeliveryReceiptInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: DeliveryReceiptPage) => any): Promise<DeliveryReceiptPage>;
    /**
     * Retrieve a single target page of DeliveryReceiptInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: DeliveryReceiptPage) => any): Promise<DeliveryReceiptPage>;
    getPage(params?: any, callback?: any): Promise<DeliveryReceiptPage>;
    /**
     * Lists DeliveryReceiptInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: DeliveryReceiptInstance[]) => any): Promise<DeliveryReceiptInstance[]>;
    /**
     * Lists DeliveryReceiptInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DeliveryReceiptListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: DeliveryReceiptListInstanceOptions, callback?: (error: Error | null, items: DeliveryReceiptInstance[]) => any): Promise<DeliveryReceiptInstance[]>;
    list(params?: any, callback?: any): Promise<DeliveryReceiptInstance[]>;
    /**
     * Retrieve a single page of DeliveryReceiptInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: DeliveryReceiptPage) => any): Promise<DeliveryReceiptPage>;
    /**
     * Retrieve a single page of DeliveryReceiptInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DeliveryReceiptListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: DeliveryReceiptListInstancePageOptions, callback?: (error: Error | null, items: DeliveryReceiptPage) => any): Promise<DeliveryReceiptPage>;
    page(params?: any, callback?: any): Promise<DeliveryReceiptPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DeliveryReceiptSolution {
    conversationSid?: string;
    messageSid?: string;
}
export declare function DeliveryReceiptListInstance(version: V1, conversationSid: string, messageSid: string): DeliveryReceiptListInstance;
export declare class DeliveryReceiptPage extends Page<V1, DeliveryReceiptPayload, DeliveryReceiptResource, DeliveryReceiptInstance> {
    /**
     * Initialize the DeliveryReceiptPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: DeliveryReceiptSolution);
    /**
     * Build an instance of DeliveryReceiptInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: DeliveryReceiptResource): DeliveryReceiptInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
