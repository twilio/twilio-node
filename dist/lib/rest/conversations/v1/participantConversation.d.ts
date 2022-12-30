/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type ParticipantConversationState = "inactive" | "active" | "closed";
/**
 * Options to pass to each
 *
 * @property { string } [identity] A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters.
 * @property { string } [address] A unique string identifier for the conversation participant who\'s not a Conversation User. This parameter could be found in messaging_binding.address field of Participant resource. It should be url-encoded.
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
export interface ParticipantConversationListInstanceEachOptions {
    identity?: string;
    address?: string;
    pageSize?: number;
    callback?: (item: ParticipantConversationInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [identity] A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters.
 * @property { string } [address] A unique string identifier for the conversation participant who\'s not a Conversation User. This parameter could be found in messaging_binding.address field of Participant resource. It should be url-encoded.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ParticipantConversationListInstanceOptions {
    identity?: string;
    address?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [identity] A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters.
 * @property { string } [address] A unique string identifier for the conversation participant who\'s not a Conversation User. This parameter could be found in messaging_binding.address field of Participant resource. It should be url-encoded.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ParticipantConversationListInstancePageOptions {
    identity?: string;
    address?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ParticipantConversationListInstance {
    /**
     * Streams ParticipantConversationInstance records from the API.
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
    each(callback?: (item: ParticipantConversationInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ParticipantConversationInstance records from the API.
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
     * @param { ParticipantConversationListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ParticipantConversationListInstanceEachOptions, callback?: (item: ParticipantConversationInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ParticipantConversationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ParticipantConversationPage) => any): Promise<ParticipantConversationPage>;
    /**
     * Retrieve a single target page of ParticipantConversationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ParticipantConversationPage) => any): Promise<ParticipantConversationPage>;
    getPage(params?: any, callback?: any): Promise<ParticipantConversationPage>;
    /**
     * Lists ParticipantConversationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ParticipantConversationInstance[]) => any): Promise<ParticipantConversationInstance[]>;
    /**
     * Lists ParticipantConversationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ParticipantConversationListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ParticipantConversationListInstanceOptions, callback?: (error: Error | null, items: ParticipantConversationInstance[]) => any): Promise<ParticipantConversationInstance[]>;
    list(params?: any, callback?: any): Promise<ParticipantConversationInstance[]>;
    /**
     * Retrieve a single page of ParticipantConversationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ParticipantConversationPage) => any): Promise<ParticipantConversationPage>;
    /**
     * Retrieve a single page of ParticipantConversationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ParticipantConversationListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ParticipantConversationListInstancePageOptions, callback?: (error: Error | null, items: ParticipantConversationPage) => any): Promise<ParticipantConversationPage>;
    page(params?: any, callback?: any): Promise<ParticipantConversationPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ParticipantConversationSolution {
}
export declare function ParticipantConversationListInstance(version: V1): ParticipantConversationListInstance;
interface ParticipantConversationPayload extends TwilioResponsePayload {
    conversations: ParticipantConversationResource[];
}
interface ParticipantConversationResource {
    account_sid?: string | null;
    chat_service_sid?: string | null;
    participant_sid?: string | null;
    participant_user_sid?: string | null;
    participant_identity?: string | null;
    participant_messaging_binding?: any | null;
    conversation_sid?: string | null;
    conversation_unique_name?: string | null;
    conversation_friendly_name?: string | null;
    conversation_attributes?: string | null;
    conversation_date_created?: Date | null;
    conversation_date_updated?: Date | null;
    conversation_created_by?: string | null;
    conversation_state?: ParticipantConversationState;
    conversation_timers?: any | null;
    links?: object | null;
}
export declare class ParticipantConversationInstance {
    protected _version: V1;
    constructor(_version: V1, payload: ParticipantConversationResource);
    /**
     * The unique ID of the Account responsible for this conversation.
     */
    accountSid?: string | null;
    /**
     * The unique ID of the Conversation Service this conversation belongs to.
     */
    chatServiceSid?: string | null;
    /**
     * The unique ID of the Participant.
     */
    participantSid?: string | null;
    /**
     * The unique ID for the conversation participant as Conversation User.
     */
    participantUserSid?: string | null;
    /**
     * A unique string identifier for the conversation participant as Conversation User.
     */
    participantIdentity?: string | null;
    /**
     * Information about how this participant exchanges messages with the conversation.
     */
    participantMessagingBinding?: any | null;
    /**
     * The unique ID of the Conversation this Participant belongs to.
     */
    conversationSid?: string | null;
    /**
     * An application-defined string that uniquely identifies the Conversation resource
     */
    conversationUniqueName?: string | null;
    /**
     * The human-readable name of this conversation.
     */
    conversationFriendlyName?: string | null;
    /**
     * An optional string metadata field you can use to store any data you wish.
     */
    conversationAttributes?: string | null;
    /**
     * The date that this conversation was created.
     */
    conversationDateCreated?: Date | null;
    /**
     * The date that this conversation was last updated.
     */
    conversationDateUpdated?: Date | null;
    /**
     * Creator of this conversation.
     */
    conversationCreatedBy?: string | null;
    conversationState?: ParticipantConversationState;
    /**
     * Timer date values for this conversation.
     */
    conversationTimers?: any | null;
    /**
     * Absolute URLs to access the participant and conversation of this Participant Conversation.
     */
    links?: object | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        chatServiceSid: string | null | undefined;
        participantSid: string | null | undefined;
        participantUserSid: string | null | undefined;
        participantIdentity: string | null | undefined;
        participantMessagingBinding: any;
        conversationSid: string | null | undefined;
        conversationUniqueName: string | null | undefined;
        conversationFriendlyName: string | null | undefined;
        conversationAttributes: string | null | undefined;
        conversationDateCreated: Date | null | undefined;
        conversationDateUpdated: Date | null | undefined;
        conversationCreatedBy: string | null | undefined;
        conversationState: ParticipantConversationState | undefined;
        conversationTimers: any;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class ParticipantConversationPage extends Page<V1, ParticipantConversationPayload, ParticipantConversationResource, ParticipantConversationInstance> {
    /**
     * Initialize the ParticipantConversationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ParticipantConversationSolution);
    /**
     * Build an instance of ParticipantConversationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ParticipantConversationResource): ParticipantConversationInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
