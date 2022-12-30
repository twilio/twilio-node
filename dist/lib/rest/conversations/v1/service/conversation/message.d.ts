/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
import { DeliveryReceiptListInstance } from "./message/deliveryReceipt";
declare type ServiceConversationMessageOrderType = "asc" | "desc";
declare type ServiceConversationMessageWebhookEnabledType = "true" | "false";
/**
 * Options to pass to remove a MessageInstance
 *
 * @property { ServiceConversationMessageWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 */
export interface MessageContextRemoveOptions {
    xTwilioWebhookEnabled?: ServiceConversationMessageWebhookEnabledType;
}
/**
 * Options to pass to update a MessageInstance
 *
 * @property { ServiceConversationMessageWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [author] The channel specific identifier of the message\\\'s author. Defaults to `system`.
 * @property { string } [body] The content of the message, can be up to 1,600 characters long.
 * @property { Date } [dateCreated] The date that this resource was created.
 * @property { Date } [dateUpdated] The date that this resource was last updated. `null` if the message has not been edited.
 * @property { string } [attributes] A string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \\\"{}\\\" will be returned.
 */
export interface MessageContextUpdateOptions {
    xTwilioWebhookEnabled?: ServiceConversationMessageWebhookEnabledType;
    author?: string;
    body?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    attributes?: string;
}
/**
 * Options to pass to create a MessageInstance
 *
 * @property { ServiceConversationMessageWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [author] The channel specific identifier of the message\\\'s author. Defaults to `system`.
 * @property { string } [body] The content of the message, can be up to 1,600 characters long.
 * @property { Date } [dateCreated] The date that this resource was created.
 * @property { Date } [dateUpdated] The date that this resource was last updated. `null` if the message has not been edited.
 * @property { string } [attributes] A string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \\\"{}\\\" will be returned.
 * @property { string } [mediaSid] The Media SID to be attached to the new Message.
 */
export interface MessageListInstanceCreateOptions {
    xTwilioWebhookEnabled?: ServiceConversationMessageWebhookEnabledType;
    author?: string;
    body?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    attributes?: string;
    mediaSid?: string;
}
/**
 * Options to pass to each
 *
 * @property { ServiceConversationMessageOrderType } [order] The sort order of the returned messages. Can be: `asc` (ascending) or `desc` (descending), with `asc` as the default.
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
export interface MessageListInstanceEachOptions {
    order?: ServiceConversationMessageOrderType;
    pageSize?: number;
    callback?: (item: MessageInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { ServiceConversationMessageOrderType } [order] The sort order of the returned messages. Can be: `asc` (ascending) or `desc` (descending), with `asc` as the default.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MessageListInstanceOptions {
    order?: ServiceConversationMessageOrderType;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { ServiceConversationMessageOrderType } [order] The sort order of the returned messages. Can be: `asc` (ascending) or `desc` (descending), with `asc` as the default.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MessageListInstancePageOptions {
    order?: ServiceConversationMessageOrderType;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface MessageContext {
    deliveryReceipts: DeliveryReceiptListInstance;
    /**
     * Remove a MessageInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a MessageInstance
     *
     * @param { MessageContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInstance
     */
    remove(params: MessageContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    remove(params?: any, callback?: any): Promise<boolean>;
    /**
     * Fetch a MessageInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInstance
     */
    fetch(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Update a MessageInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInstance
     */
    update(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Update a MessageInstance
     *
     * @param { MessageContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInstance
     */
    update(params: MessageContextUpdateOptions, callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    update(params?: any, callback?: any): Promise<MessageInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MessageContextSolution {
    chatServiceSid?: string;
    conversationSid?: string;
    sid?: string;
}
export declare class MessageContextImpl implements MessageContext {
    protected _version: V1;
    protected _solution: MessageContextSolution;
    protected _uri: string;
    protected _deliveryReceipts?: DeliveryReceiptListInstance;
    constructor(_version: V1, chatServiceSid: string, conversationSid: string, sid: string);
    get deliveryReceipts(): DeliveryReceiptListInstance;
    remove(params?: any, callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<MessageInstance>;
    update(params?: any, callback?: any): Promise<MessageInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): MessageContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface MessagePayload extends TwilioResponsePayload {
    messages: MessageResource[];
}
interface MessageResource {
    account_sid?: string | null;
    chat_service_sid?: string | null;
    conversation_sid?: string | null;
    sid?: string | null;
    index?: number | null;
    author?: string | null;
    body?: string | null;
    media?: Array<any> | null;
    attributes?: string | null;
    participant_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    delivery?: any | null;
    url?: string | null;
    links?: object | null;
}
export declare class MessageInstance {
    protected _version: V1;
    protected _solution: MessageContextSolution;
    protected _context?: MessageContext;
    constructor(_version: V1, payload: MessageResource, chatServiceSid: string, conversationSid: string, sid?: string);
    /**
     * The unique ID of the Account responsible for this message.
     */
    accountSid?: string | null;
    /**
     * The SID of the Conversation Service that the resource is associated with.
     */
    chatServiceSid?: string | null;
    /**
     * The unique ID of the Conversation for this message.
     */
    conversationSid?: string | null;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string | null;
    /**
     * The index of the message within the Conversation.
     */
    index?: number | null;
    /**
     * The channel specific identifier of the message\'s author.
     */
    author?: string | null;
    /**
     * The content of the message.
     */
    body?: string | null;
    /**
     * An array of objects that describe the Message\'s media if attached, otherwise, null.
     */
    media?: Array<any> | null;
    /**
     * A string metadata field you can use to store any data you wish.
     */
    attributes?: string | null;
    /**
     * The unique ID of messages\'s author participant.
     */
    participantSid?: string | null;
    /**
     * The date that this resource was created.
     */
    dateCreated?: Date | null;
    /**
     * The date that this resource was last updated.
     */
    dateUpdated?: Date | null;
    /**
     * An object that contains the summary of delivery statuses for the message to non-chat participants.
     */
    delivery?: any | null;
    /**
     * An absolute URL for this message.
     */
    url?: string | null;
    /**
     * Absolute URL to access the receipts of this message.
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a MessageInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a MessageInstance
     *
     * @param { MessageContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInstance
     */
    remove(params: MessageContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a MessageInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInstance
     */
    fetch(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Update a MessageInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInstance
     */
    update(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Update a MessageInstance
     *
     * @param { MessageContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInstance
     */
    update(params: MessageContextUpdateOptions, callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Access the deliveryReceipts.
     */
    deliveryReceipts(): DeliveryReceiptListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        chatServiceSid: string | null | undefined;
        conversationSid: string | null | undefined;
        sid: string | null | undefined;
        index: number | null | undefined;
        author: string | null | undefined;
        body: string | null | undefined;
        media: any[] | null | undefined;
        attributes: string | null | undefined;
        participantSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        delivery: any;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface MessageListInstance {
    (sid: string): MessageContext;
    get(sid: string): MessageContext;
    /**
     * Create a MessageInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInstance
     */
    create(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Create a MessageInstance
     *
     * @param { MessageListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInstance
     */
    create(params: MessageListInstanceCreateOptions, callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    create(params?: any, callback?: any): Promise<MessageInstance>;
    /**
     * Streams MessageInstance records from the API.
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
    each(callback?: (item: MessageInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams MessageInstance records from the API.
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
     * @param { MessageListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: MessageListInstanceEachOptions, callback?: (item: MessageInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of MessageInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
    /**
     * Retrieve a single target page of MessageInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
    getPage(params?: any, callback?: any): Promise<MessagePage>;
    /**
     * Lists MessageInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: MessageInstance[]) => any): Promise<MessageInstance[]>;
    /**
     * Lists MessageInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MessageListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: MessageListInstanceOptions, callback?: (error: Error | null, items: MessageInstance[]) => any): Promise<MessageInstance[]>;
    list(params?: any, callback?: any): Promise<MessageInstance[]>;
    /**
     * Retrieve a single page of MessageInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
    /**
     * Retrieve a single page of MessageInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MessageListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: MessageListInstancePageOptions, callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
    page(params?: any, callback?: any): Promise<MessagePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MessageSolution {
    chatServiceSid?: string;
    conversationSid?: string;
}
export declare function MessageListInstance(version: V1, chatServiceSid: string, conversationSid: string): MessageListInstance;
export declare class MessagePage extends Page<V1, MessagePayload, MessageResource, MessageInstance> {
    /**
     * Initialize the MessagePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: MessageSolution);
    /**
     * Build an instance of MessageInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: MessageResource): MessageInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
