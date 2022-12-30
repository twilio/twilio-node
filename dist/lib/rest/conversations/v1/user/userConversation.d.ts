/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
declare type UserConversationNotificationLevel = "default" | "muted";
declare type UserConversationState = "inactive" | "active" | "closed";
/**
 * Options to pass to update a UserConversationInstance
 *
 * @property { UserConversationNotificationLevel } [notificationLevel]
 * @property { Date } [lastReadTimestamp] The date of the last message read in conversation by the user, given in ISO 8601 format.
 * @property { number } [lastReadMessageIndex] The index of the last Message in the Conversation that the Participant has read.
 */
export interface UserConversationContextUpdateOptions {
    notificationLevel?: UserConversationNotificationLevel;
    lastReadTimestamp?: Date;
    lastReadMessageIndex?: number;
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
export interface UserConversationListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: UserConversationInstance, done: (err?: Error) => void) => void;
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
export interface UserConversationListInstanceOptions {
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
export interface UserConversationListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface UserConversationContext {
    /**
     * Remove a UserConversationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a UserConversationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserConversationInstance
     */
    fetch(callback?: (error: Error | null, item?: UserConversationInstance) => any): Promise<UserConversationInstance>;
    /**
     * Update a UserConversationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserConversationInstance
     */
    update(callback?: (error: Error | null, item?: UserConversationInstance) => any): Promise<UserConversationInstance>;
    /**
     * Update a UserConversationInstance
     *
     * @param { UserConversationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserConversationInstance
     */
    update(params: UserConversationContextUpdateOptions, callback?: (error: Error | null, item?: UserConversationInstance) => any): Promise<UserConversationInstance>;
    update(params?: any, callback?: any): Promise<UserConversationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UserConversationContextSolution {
    userSid?: string;
    conversationSid?: string;
}
export declare class UserConversationContextImpl implements UserConversationContext {
    protected _version: V1;
    protected _solution: UserConversationContextSolution;
    protected _uri: string;
    constructor(_version: V1, userSid: string, conversationSid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<UserConversationInstance>;
    update(params?: any, callback?: any): Promise<UserConversationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): UserConversationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface UserConversationPayload extends TwilioResponsePayload {
    conversations: UserConversationResource[];
}
interface UserConversationResource {
    account_sid?: string | null;
    chat_service_sid?: string | null;
    conversation_sid?: string | null;
    unread_messages_count?: number | null;
    last_read_message_index?: number | null;
    participant_sid?: string | null;
    user_sid?: string | null;
    friendly_name?: string | null;
    conversation_state?: UserConversationState;
    timers?: any | null;
    attributes?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    created_by?: string | null;
    notification_level?: UserConversationNotificationLevel;
    unique_name?: string | null;
    url?: string | null;
    links?: object | null;
}
export declare class UserConversationInstance {
    protected _version: V1;
    protected _solution: UserConversationContextSolution;
    protected _context?: UserConversationContext;
    constructor(_version: V1, payload: UserConversationResource, userSid: string, conversationSid?: string);
    /**
     * The unique ID of the Account responsible for this conversation.
     */
    accountSid?: string | null;
    /**
     * The unique ID of the Conversation Service this conversation belongs to.
     */
    chatServiceSid?: string | null;
    /**
     * The unique ID of the Conversation for this User Conversation.
     */
    conversationSid?: string | null;
    /**
     * The number of unread Messages in the Conversation.
     */
    unreadMessagesCount?: number | null;
    /**
     * The index of the last read Message .
     */
    lastReadMessageIndex?: number | null;
    /**
     * Participant Sid.
     */
    participantSid?: string | null;
    /**
     * The unique ID for the User.
     */
    userSid?: string | null;
    /**
     * The human-readable name of this conversation.
     */
    friendlyName?: string | null;
    conversationState?: UserConversationState;
    /**
     * Timer date values for this conversation.
     */
    timers?: any | null;
    /**
     * An optional string metadata field you can use to store any data you wish.
     */
    attributes?: string | null;
    /**
     * The date that this conversation was created.
     */
    dateCreated?: Date | null;
    /**
     * The date that this conversation was last updated.
     */
    dateUpdated?: Date | null;
    /**
     * Creator of this conversation.
     */
    createdBy?: string | null;
    notificationLevel?: UserConversationNotificationLevel;
    /**
     * An application-defined string that uniquely identifies the Conversation resource.
     */
    uniqueName?: string | null;
    url?: string | null;
    /**
     * Absolute URLs to access the participant and conversation of this user conversation.
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a UserConversationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a UserConversationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserConversationInstance
     */
    fetch(callback?: (error: Error | null, item?: UserConversationInstance) => any): Promise<UserConversationInstance>;
    /**
     * Update a UserConversationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserConversationInstance
     */
    update(callback?: (error: Error | null, item?: UserConversationInstance) => any): Promise<UserConversationInstance>;
    /**
     * Update a UserConversationInstance
     *
     * @param { UserConversationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserConversationInstance
     */
    update(params: UserConversationContextUpdateOptions, callback?: (error: Error | null, item?: UserConversationInstance) => any): Promise<UserConversationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        chatServiceSid: string | null | undefined;
        conversationSid: string | null | undefined;
        unreadMessagesCount: number | null | undefined;
        lastReadMessageIndex: number | null | undefined;
        participantSid: string | null | undefined;
        userSid: string | null | undefined;
        friendlyName: string | null | undefined;
        conversationState: UserConversationState | undefined;
        timers: any;
        attributes: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        createdBy: string | null | undefined;
        notificationLevel: UserConversationNotificationLevel | undefined;
        uniqueName: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface UserConversationListInstance {
    (conversationSid: string): UserConversationContext;
    get(conversationSid: string): UserConversationContext;
    /**
     * Streams UserConversationInstance records from the API.
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
    each(callback?: (item: UserConversationInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams UserConversationInstance records from the API.
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
     * @param { UserConversationListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: UserConversationListInstanceEachOptions, callback?: (item: UserConversationInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of UserConversationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: UserConversationPage) => any): Promise<UserConversationPage>;
    /**
     * Retrieve a single target page of UserConversationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: UserConversationPage) => any): Promise<UserConversationPage>;
    getPage(params?: any, callback?: any): Promise<UserConversationPage>;
    /**
     * Lists UserConversationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: UserConversationInstance[]) => any): Promise<UserConversationInstance[]>;
    /**
     * Lists UserConversationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { UserConversationListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: UserConversationListInstanceOptions, callback?: (error: Error | null, items: UserConversationInstance[]) => any): Promise<UserConversationInstance[]>;
    list(params?: any, callback?: any): Promise<UserConversationInstance[]>;
    /**
     * Retrieve a single page of UserConversationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: UserConversationPage) => any): Promise<UserConversationPage>;
    /**
     * Retrieve a single page of UserConversationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { UserConversationListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: UserConversationListInstancePageOptions, callback?: (error: Error | null, items: UserConversationPage) => any): Promise<UserConversationPage>;
    page(params?: any, callback?: any): Promise<UserConversationPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UserConversationSolution {
    userSid?: string;
}
export declare function UserConversationListInstance(version: V1, userSid: string): UserConversationListInstance;
export declare class UserConversationPage extends Page<V1, UserConversationPayload, UserConversationResource, UserConversationInstance> {
    /**
     * Initialize the UserConversationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: UserConversationSolution);
    /**
     * Build an instance of UserConversationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: UserConversationResource): UserConversationInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
