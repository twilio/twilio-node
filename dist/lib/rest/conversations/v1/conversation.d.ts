/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { MessageListInstance } from "./conversation/message";
import { ParticipantListInstance } from "./conversation/participant";
import { WebhookListInstance } from "./conversation/webhook";
declare type ConversationState = "inactive" | "active" | "closed";
declare type ConversationWebhookEnabledType = "true" | "false";
/**
 * Options to pass to remove a ConversationInstance
 *
 * @property { ConversationWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 */
export interface ConversationContextRemoveOptions {
    xTwilioWebhookEnabled?: ConversationWebhookEnabledType;
}
/**
 * Options to pass to update a ConversationInstance
 *
 * @property { ConversationWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [friendlyName] The human-readable name of this conversation, limited to 256 characters. Optional.
 * @property { Date } [dateCreated] The date that this resource was created.
 * @property { Date } [dateUpdated] The date that this resource was last updated.
 * @property { string } [attributes] An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \\\"{}\\\" will be returned.
 * @property { string } [messagingServiceSid] The unique ID of the [Messaging Service](https://www.twilio.com/docs/sms/services/api) this conversation belongs to.
 * @property { ConversationState } [state]
 * @property { string } [timers.inactive] ISO8601 duration when conversation will be switched to `inactive` state. Minimum value for this timer is 1 minute.
 * @property { string } [timers.closed] ISO8601 duration when conversation will be switched to `closed` state. Minimum value for this timer is 10 minutes.
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource\\\'s `sid` in the URL.
 */
export interface ConversationContextUpdateOptions {
    xTwilioWebhookEnabled?: ConversationWebhookEnabledType;
    friendlyName?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    attributes?: string;
    messagingServiceSid?: string;
    state?: ConversationState;
    "timers.inactive"?: string;
    "timers.closed"?: string;
    uniqueName?: string;
}
/**
 * Options to pass to create a ConversationInstance
 *
 * @property { ConversationWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [friendlyName] The human-readable name of this conversation, limited to 256 characters. Optional.
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource\\\'s `sid` in the URL.
 * @property { Date } [dateCreated] The date that this resource was created.
 * @property { Date } [dateUpdated] The date that this resource was last updated.
 * @property { string } [messagingServiceSid] The unique ID of the [Messaging Service](https://www.twilio.com/docs/sms/services/api) this conversation belongs to.
 * @property { string } [attributes] An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \\\"{}\\\" will be returned.
 * @property { ConversationState } [state]
 * @property { string } [timers.inactive] ISO8601 duration when conversation will be switched to `inactive` state. Minimum value for this timer is 1 minute.
 * @property { string } [timers.closed] ISO8601 duration when conversation will be switched to `closed` state. Minimum value for this timer is 10 minutes.
 */
export interface ConversationListInstanceCreateOptions {
    xTwilioWebhookEnabled?: ConversationWebhookEnabledType;
    friendlyName?: string;
    uniqueName?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    messagingServiceSid?: string;
    attributes?: string;
    state?: ConversationState;
    "timers.inactive"?: string;
    "timers.closed"?: string;
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
export interface ConversationListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: ConversationInstance, done: (err?: Error) => void) => void;
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
export interface ConversationListInstanceOptions {
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
export interface ConversationListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ConversationContext {
    messages: MessageListInstance;
    participants: ParticipantListInstance;
    webhooks: WebhookListInstance;
    /**
     * Remove a ConversationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a ConversationInstance
     *
     * @param { ConversationContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConversationInstance
     */
    remove(params: ConversationContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    remove(params?: any, callback?: any): Promise<boolean>;
    /**
     * Fetch a ConversationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConversationInstance
     */
    fetch(callback?: (error: Error | null, item?: ConversationInstance) => any): Promise<ConversationInstance>;
    /**
     * Update a ConversationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConversationInstance
     */
    update(callback?: (error: Error | null, item?: ConversationInstance) => any): Promise<ConversationInstance>;
    /**
     * Update a ConversationInstance
     *
     * @param { ConversationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConversationInstance
     */
    update(params: ConversationContextUpdateOptions, callback?: (error: Error | null, item?: ConversationInstance) => any): Promise<ConversationInstance>;
    update(params?: any, callback?: any): Promise<ConversationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ConversationContextSolution {
    sid?: string;
}
export declare class ConversationContextImpl implements ConversationContext {
    protected _version: V1;
    protected _solution: ConversationContextSolution;
    protected _uri: string;
    protected _messages?: MessageListInstance;
    protected _participants?: ParticipantListInstance;
    protected _webhooks?: WebhookListInstance;
    constructor(_version: V1, sid: string);
    get messages(): MessageListInstance;
    get participants(): ParticipantListInstance;
    get webhooks(): WebhookListInstance;
    remove(params?: any, callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<ConversationInstance>;
    update(params?: any, callback?: any): Promise<ConversationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ConversationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ConversationPayload extends TwilioResponsePayload {
    conversations: ConversationResource[];
}
interface ConversationResource {
    account_sid?: string | null;
    chat_service_sid?: string | null;
    messaging_service_sid?: string | null;
    sid?: string | null;
    friendly_name?: string | null;
    unique_name?: string | null;
    attributes?: string | null;
    state?: ConversationState;
    date_created?: Date | null;
    date_updated?: Date | null;
    timers?: any | null;
    url?: string | null;
    links?: object | null;
    bindings?: any | null;
}
export declare class ConversationInstance {
    protected _version: V1;
    protected _solution: ConversationContextSolution;
    protected _context?: ConversationContext;
    constructor(_version: V1, payload: ConversationResource, sid?: string);
    /**
     * The unique ID of the Account responsible for this conversation.
     */
    accountSid?: string | null;
    /**
     * The unique ID of the Conversation Service this conversation belongs to.
     */
    chatServiceSid?: string | null;
    /**
     * The unique ID of the Messaging Service this conversation belongs to.
     */
    messagingServiceSid?: string | null;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string | null;
    /**
     * The human-readable name of this conversation.
     */
    friendlyName?: string | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * An optional string metadata field you can use to store any data you wish.
     */
    attributes?: string | null;
    state?: ConversationState;
    /**
     * The date that this resource was created.
     */
    dateCreated?: Date | null;
    /**
     * The date that this resource was last updated.
     */
    dateUpdated?: Date | null;
    /**
     * Timer date values for this conversation.
     */
    timers?: any | null;
    /**
     * An absolute URL for this conversation.
     */
    url?: string | null;
    /**
     * Absolute URLs to access the participants, messages and webhooks of this conversation.
     */
    links?: object | null;
    bindings?: any | null;
    private get _proxy();
    /**
     * Remove a ConversationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a ConversationInstance
     *
     * @param { ConversationContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConversationInstance
     */
    remove(params: ConversationContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ConversationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConversationInstance
     */
    fetch(callback?: (error: Error | null, item?: ConversationInstance) => any): Promise<ConversationInstance>;
    /**
     * Update a ConversationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConversationInstance
     */
    update(callback?: (error: Error | null, item?: ConversationInstance) => any): Promise<ConversationInstance>;
    /**
     * Update a ConversationInstance
     *
     * @param { ConversationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConversationInstance
     */
    update(params: ConversationContextUpdateOptions, callback?: (error: Error | null, item?: ConversationInstance) => any): Promise<ConversationInstance>;
    /**
     * Access the messages.
     */
    messages(): MessageListInstance;
    /**
     * Access the participants.
     */
    participants(): ParticipantListInstance;
    /**
     * Access the webhooks.
     */
    webhooks(): WebhookListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        chatServiceSid: string | null | undefined;
        messagingServiceSid: string | null | undefined;
        sid: string | null | undefined;
        friendlyName: string | null | undefined;
        uniqueName: string | null | undefined;
        attributes: string | null | undefined;
        state: ConversationState | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        timers: any;
        url: string | null | undefined;
        links: object | null | undefined;
        bindings: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ConversationListInstance {
    (sid: string): ConversationContext;
    get(sid: string): ConversationContext;
    /**
     * Create a ConversationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConversationInstance
     */
    create(callback?: (error: Error | null, item?: ConversationInstance) => any): Promise<ConversationInstance>;
    /**
     * Create a ConversationInstance
     *
     * @param { ConversationListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConversationInstance
     */
    create(params: ConversationListInstanceCreateOptions, callback?: (error: Error | null, item?: ConversationInstance) => any): Promise<ConversationInstance>;
    create(params?: any, callback?: any): Promise<ConversationInstance>;
    /**
     * Streams ConversationInstance records from the API.
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
    each(callback?: (item: ConversationInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ConversationInstance records from the API.
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
     * @param { ConversationListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ConversationListInstanceEachOptions, callback?: (item: ConversationInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ConversationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ConversationPage) => any): Promise<ConversationPage>;
    /**
     * Retrieve a single target page of ConversationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ConversationPage) => any): Promise<ConversationPage>;
    getPage(params?: any, callback?: any): Promise<ConversationPage>;
    /**
     * Lists ConversationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ConversationInstance[]) => any): Promise<ConversationInstance[]>;
    /**
     * Lists ConversationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ConversationListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ConversationListInstanceOptions, callback?: (error: Error | null, items: ConversationInstance[]) => any): Promise<ConversationInstance[]>;
    list(params?: any, callback?: any): Promise<ConversationInstance[]>;
    /**
     * Retrieve a single page of ConversationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ConversationPage) => any): Promise<ConversationPage>;
    /**
     * Retrieve a single page of ConversationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ConversationListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ConversationListInstancePageOptions, callback?: (error: Error | null, items: ConversationPage) => any): Promise<ConversationPage>;
    page(params?: any, callback?: any): Promise<ConversationPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ConversationSolution {
}
export declare function ConversationListInstance(version: V1): ConversationListInstance;
export declare class ConversationPage extends Page<V1, ConversationPayload, ConversationResource, ConversationInstance> {
    /**
     * Initialize the ConversationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ConversationSolution);
    /**
     * Build an instance of ConversationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ConversationResource): ConversationInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
