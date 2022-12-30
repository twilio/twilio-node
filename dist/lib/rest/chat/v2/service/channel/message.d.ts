/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
declare type MessageOrderType = "asc" | "desc";
declare type MessageWebhookEnabledType = "true" | "false";
/**
 * Options to pass to remove a MessageInstance
 *
 * @property { MessageWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 */
export interface MessageContextRemoveOptions {
    xTwilioWebhookEnabled?: MessageWebhookEnabledType;
}
/**
 * Options to pass to update a MessageInstance
 *
 * @property { MessageWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [body] The message to send to the channel. Can be an empty string or `null`, which sets the value as an empty string. You can send structured data in the body by serializing it as a string.
 * @property { string } [attributes] A valid JSON string that contains application-specific data.
 * @property { Date } [dateCreated] The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was created. The default value is the current time set by the Chat service. This parameter should only be used when a Chat\\\'s history is being recreated from a backup/separate source.
 * @property { Date } [dateUpdated] The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was last updated.
 * @property { string } [lastUpdatedBy] The [Identity](https://www.twilio.com/docs/chat/identity) of the User who last updated the Message, if applicable.
 * @property { string } [from] The [Identity](https://www.twilio.com/docs/chat/identity) of the message\\\'s author.
 */
export interface MessageContextUpdateOptions {
    xTwilioWebhookEnabled?: MessageWebhookEnabledType;
    body?: string;
    attributes?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    lastUpdatedBy?: string;
    from?: string;
}
/**
 * Options to pass to create a MessageInstance
 *
 * @property { MessageWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [from] The [Identity](https://www.twilio.com/docs/chat/identity) of the new message\\\'s author. The default value is `system`.
 * @property { string } [attributes] A valid JSON string that contains application-specific data.
 * @property { Date } [dateCreated] The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was created. The default value is the current time set by the Chat service. This parameter should only be used when a Chat\\\'s history is being recreated from a backup/separate source.
 * @property { Date } [dateUpdated] The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was last updated.
 * @property { string } [lastUpdatedBy] The [Identity](https://www.twilio.com/docs/chat/identity) of the User who last updated the Message, if applicable.
 * @property { string } [body] The message to send to the channel. Can be an empty string or `null`, which sets the value as an empty string. You can send structured data in the body by serializing it as a string.
 * @property { string } [mediaSid] The SID of the [Media](https://www.twilio.com/docs/chat/rest/media) to attach to the new Message.
 */
export interface MessageListInstanceCreateOptions {
    xTwilioWebhookEnabled?: MessageWebhookEnabledType;
    from?: string;
    attributes?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    lastUpdatedBy?: string;
    body?: string;
    mediaSid?: string;
}
/**
 * Options to pass to each
 *
 * @property { MessageOrderType } [order] The sort order of the returned messages. Can be: `asc` (ascending) or `desc` (descending) with `asc` as the default.
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
    order?: MessageOrderType;
    pageSize?: number;
    callback?: (item: MessageInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { MessageOrderType } [order] The sort order of the returned messages. Can be: `asc` (ascending) or `desc` (descending) with `asc` as the default.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MessageListInstanceOptions {
    order?: MessageOrderType;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { MessageOrderType } [order] The sort order of the returned messages. Can be: `asc` (ascending) or `desc` (descending) with `asc` as the default.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MessageListInstancePageOptions {
    order?: MessageOrderType;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface MessageContext {
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
    serviceSid?: string;
    channelSid?: string;
    sid?: string;
}
export declare class MessageContextImpl implements MessageContext {
    protected _version: V2;
    protected _solution: MessageContextSolution;
    protected _uri: string;
    constructor(_version: V2, serviceSid: string, channelSid: string, sid: string);
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
    sid?: string | null;
    account_sid?: string | null;
    attributes?: string | null;
    service_sid?: string | null;
    to?: string | null;
    channel_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    last_updated_by?: string | null;
    was_edited?: boolean | null;
    from?: string | null;
    body?: string | null;
    index?: number | null;
    type?: string | null;
    media?: any | null;
    url?: string | null;
}
export declare class MessageInstance {
    protected _version: V2;
    protected _solution: MessageContextSolution;
    protected _context?: MessageContext;
    constructor(_version: V2, payload: MessageResource, serviceSid: string, channelSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The JSON string that stores application-specific data
     */
    attributes?: string | null;
    /**
     * The SID of the Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The SID of the Channel that the message was sent to
     */
    to?: string | null;
    /**
     * The SID of the Channel the Message resource belongs to
     */
    channelSid?: string | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The Identity of the User who last updated the Message
     */
    lastUpdatedBy?: string | null;
    /**
     * Whether the message has been edited since  it was created
     */
    wasEdited?: boolean | null;
    /**
     * The Identity of the message\'s author
     */
    from?: string | null;
    /**
     * The content of the message
     */
    body?: string | null;
    /**
     * The index of the message within the Channel
     */
    index?: number | null;
    /**
     * The Message type
     */
    type?: string | null;
    /**
     * A Media object that describes the Message\'s media if attached; otherwise, null
     */
    media?: any | null;
    /**
     * The absolute URL of the Message resource
     */
    url?: string | null;
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
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        attributes: string | null | undefined;
        serviceSid: string | null | undefined;
        to: string | null | undefined;
        channelSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        lastUpdatedBy: string | null | undefined;
        wasEdited: boolean | null | undefined;
        from: string | null | undefined;
        body: string | null | undefined;
        index: number | null | undefined;
        type: string | null | undefined;
        media: any;
        url: string | null | undefined;
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
    serviceSid?: string;
    channelSid?: string;
}
export declare function MessageListInstance(version: V2, serviceSid: string, channelSid: string): MessageListInstance;
export declare class MessagePage extends Page<V2, MessagePayload, MessageResource, MessageInstance> {
    /**
     * Initialize the MessagePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: MessageSolution);
    /**
     * Build an instance of MessageInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: MessageResource): MessageInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
