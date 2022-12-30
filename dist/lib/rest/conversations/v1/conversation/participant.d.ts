/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
declare type ConversationParticipantWebhookEnabledType = "true" | "false";
/**
 * Options to pass to remove a ParticipantInstance
 *
 * @property { ConversationParticipantWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 */
export interface ParticipantContextRemoveOptions {
    xTwilioWebhookEnabled?: ConversationParticipantWebhookEnabledType;
}
/**
 * Options to pass to update a ParticipantInstance
 *
 * @property { ConversationParticipantWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { Date } [dateCreated] The date that this resource was created.
 * @property { Date } [dateUpdated] The date that this resource was last updated.
 * @property { string } [attributes] An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \\\"{}\\\" will be returned.
 * @property { string } [roleSid] The SID of a conversation-level [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the participant.
 * @property { string } [messagingBinding.proxyAddress] The address of the Twilio phone number that the participant is in contact with. \\\'null\\\' value will remove it.
 * @property { string } [messagingBinding.projectedAddress] The address of the Twilio phone number that is used in Group MMS. \\\'null\\\' value will remove it.
 * @property { string } [identity] A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters.
 * @property { number } [lastReadMessageIndex] Index of last “read” message in the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for the Participant.
 * @property { string } [lastReadTimestamp] Timestamp of last “read” message in the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for the Participant.
 */
export interface ParticipantContextUpdateOptions {
    xTwilioWebhookEnabled?: ConversationParticipantWebhookEnabledType;
    dateCreated?: Date;
    dateUpdated?: Date;
    attributes?: string;
    roleSid?: string;
    "messagingBinding.proxyAddress"?: string;
    "messagingBinding.projectedAddress"?: string;
    identity?: string;
    lastReadMessageIndex?: number;
    lastReadTimestamp?: string;
}
/**
 * Options to pass to create a ParticipantInstance
 *
 * @property { ConversationParticipantWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [identity] A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters.
 * @property { string } [messagingBinding.address] The address of the participant\\\'s device, e.g. a phone or WhatsApp number. Together with the Proxy address, this determines a participant uniquely. This field (with proxy_address) is only null when the participant is interacting from an SDK endpoint (see the \\\'identity\\\' field).
 * @property { string } [messagingBinding.proxyAddress] The address of the Twilio phone number (or WhatsApp number) that the participant is in contact with. This field, together with participant address, is only null when the participant is interacting from an SDK endpoint (see the \\\'identity\\\' field).
 * @property { Date } [dateCreated] The date that this resource was created.
 * @property { Date } [dateUpdated] The date that this resource was last updated.
 * @property { string } [attributes] An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \\\"{}\\\" will be returned.
 * @property { string } [messagingBinding.projectedAddress] The address of the Twilio phone number that is used in Group MMS. Communication mask for the Conversation participant with Identity.
 * @property { string } [roleSid] The SID of a conversation-level [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the participant.
 */
export interface ParticipantListInstanceCreateOptions {
    xTwilioWebhookEnabled?: ConversationParticipantWebhookEnabledType;
    identity?: string;
    "messagingBinding.address"?: string;
    "messagingBinding.proxyAddress"?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    attributes?: string;
    "messagingBinding.projectedAddress"?: string;
    roleSid?: string;
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
export interface ParticipantListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void;
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
export interface ParticipantListInstanceOptions {
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
export interface ParticipantListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ParticipantContext {
    /**
     * Remove a ParticipantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a ParticipantInstance
     *
     * @param { ParticipantContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    remove(params: ParticipantContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    remove(params?: any, callback?: any): Promise<boolean>;
    /**
     * Fetch a ParticipantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    fetch(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
    /**
     * Update a ParticipantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    update(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
    /**
     * Update a ParticipantInstance
     *
     * @param { ParticipantContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    update(params: ParticipantContextUpdateOptions, callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
    update(params?: any, callback?: any): Promise<ParticipantInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ParticipantContextSolution {
    conversationSid?: string;
    sid?: string;
}
export declare class ParticipantContextImpl implements ParticipantContext {
    protected _version: V1;
    protected _solution: ParticipantContextSolution;
    protected _uri: string;
    constructor(_version: V1, conversationSid: string, sid: string);
    remove(params?: any, callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<ParticipantInstance>;
    update(params?: any, callback?: any): Promise<ParticipantInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ParticipantContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ParticipantPayload extends TwilioResponsePayload {
    participants: ParticipantResource[];
}
interface ParticipantResource {
    account_sid?: string | null;
    conversation_sid?: string | null;
    sid?: string | null;
    identity?: string | null;
    attributes?: string | null;
    messaging_binding?: any | null;
    role_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    last_read_message_index?: number | null;
    last_read_timestamp?: string | null;
}
export declare class ParticipantInstance {
    protected _version: V1;
    protected _solution: ParticipantContextSolution;
    protected _context?: ParticipantContext;
    constructor(_version: V1, payload: ParticipantResource, conversationSid: string, sid?: string);
    /**
     * The unique ID of the Account responsible for this participant.
     */
    accountSid?: string | null;
    /**
     * The unique ID of the Conversation for this participant.
     */
    conversationSid?: string | null;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string | null;
    /**
     * A unique string identifier for the conversation participant as Conversation User.
     */
    identity?: string | null;
    /**
     * An optional string metadata field you can use to store any data you wish.
     */
    attributes?: string | null;
    /**
     * Information about how this participant exchanges messages with the conversation.
     */
    messagingBinding?: any | null;
    /**
     * The SID of a conversation-level Role to assign to the participant
     */
    roleSid?: string | null;
    /**
     * The date that this resource was created.
     */
    dateCreated?: Date | null;
    /**
     * The date that this resource was last updated.
     */
    dateUpdated?: Date | null;
    /**
     * An absolute URL for this participant.
     */
    url?: string | null;
    /**
     * Index of last “read” message in the Conversation for the Participant.
     */
    lastReadMessageIndex?: number | null;
    /**
     * Timestamp of last “read” message in the Conversation for the Participant.
     */
    lastReadTimestamp?: string | null;
    private get _proxy();
    /**
     * Remove a ParticipantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a ParticipantInstance
     *
     * @param { ParticipantContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    remove(params: ParticipantContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ParticipantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    fetch(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
    /**
     * Update a ParticipantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    update(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
    /**
     * Update a ParticipantInstance
     *
     * @param { ParticipantContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    update(params: ParticipantContextUpdateOptions, callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        conversationSid: string | null | undefined;
        sid: string | null | undefined;
        identity: string | null | undefined;
        attributes: string | null | undefined;
        messagingBinding: any;
        roleSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        lastReadMessageIndex: number | null | undefined;
        lastReadTimestamp: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ParticipantListInstance {
    (sid: string): ParticipantContext;
    get(sid: string): ParticipantContext;
    /**
     * Create a ParticipantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    create(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
    /**
     * Create a ParticipantInstance
     *
     * @param { ParticipantListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ParticipantInstance
     */
    create(params: ParticipantListInstanceCreateOptions, callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
    create(params?: any, callback?: any): Promise<ParticipantInstance>;
    /**
     * Streams ParticipantInstance records from the API.
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
    each(callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ParticipantInstance records from the API.
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
     * @param { ParticipantListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ParticipantListInstanceEachOptions, callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ParticipantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
    /**
     * Retrieve a single target page of ParticipantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
    getPage(params?: any, callback?: any): Promise<ParticipantPage>;
    /**
     * Lists ParticipantInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ParticipantInstance[]) => any): Promise<ParticipantInstance[]>;
    /**
     * Lists ParticipantInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ParticipantListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ParticipantListInstanceOptions, callback?: (error: Error | null, items: ParticipantInstance[]) => any): Promise<ParticipantInstance[]>;
    list(params?: any, callback?: any): Promise<ParticipantInstance[]>;
    /**
     * Retrieve a single page of ParticipantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
    /**
     * Retrieve a single page of ParticipantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ParticipantListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ParticipantListInstancePageOptions, callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
    page(params?: any, callback?: any): Promise<ParticipantPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ParticipantSolution {
    conversationSid?: string;
}
export declare function ParticipantListInstance(version: V1, conversationSid: string): ParticipantListInstance;
export declare class ParticipantPage extends Page<V1, ParticipantPayload, ParticipantResource, ParticipantInstance> {
    /**
     * Initialize the ParticipantPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ParticipantSolution);
    /**
     * Build an instance of ParticipantInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ParticipantResource): ParticipantInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
