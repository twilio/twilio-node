/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
declare type UserChannelChannelStatus = "joined" | "invited" | "not_participating";
declare type UserChannelNotificationLevel = "default" | "muted";
/**
 * Options to pass to update a UserChannelInstance
 *
 * @property { UserChannelNotificationLevel } [notificationLevel]
 * @property { number } [lastConsumedMessageIndex]
 * @property { Date } [lastConsumptionTimestamp]
 */
export interface UserChannelContextUpdateOptions {
    notificationLevel?: UserChannelNotificationLevel;
    lastConsumedMessageIndex?: number;
    lastConsumptionTimestamp?: Date;
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
export interface UserChannelListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: UserChannelInstance, done: (err?: Error) => void) => void;
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
export interface UserChannelListInstanceOptions {
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
export interface UserChannelListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface UserChannelContext {
    /**
     * Remove a UserChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a UserChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserChannelInstance
     */
    fetch(callback?: (error: Error | null, item?: UserChannelInstance) => any): Promise<UserChannelInstance>;
    /**
     * Update a UserChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserChannelInstance
     */
    update(callback?: (error: Error | null, item?: UserChannelInstance) => any): Promise<UserChannelInstance>;
    /**
     * Update a UserChannelInstance
     *
     * @param { UserChannelContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserChannelInstance
     */
    update(params: UserChannelContextUpdateOptions, callback?: (error: Error | null, item?: UserChannelInstance) => any): Promise<UserChannelInstance>;
    update(params?: any, callback?: any): Promise<UserChannelInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UserChannelContextSolution {
    serviceSid?: string;
    userSid?: string;
    channelSid?: string;
}
export declare class UserChannelContextImpl implements UserChannelContext {
    protected _version: V2;
    protected _solution: UserChannelContextSolution;
    protected _uri: string;
    constructor(_version: V2, serviceSid: string, userSid: string, channelSid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<UserChannelInstance>;
    update(params?: any, callback?: any): Promise<UserChannelInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): UserChannelContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface UserChannelPayload extends TwilioResponsePayload {
    channels: UserChannelResource[];
}
interface UserChannelResource {
    account_sid?: string | null;
    service_sid?: string | null;
    channel_sid?: string | null;
    user_sid?: string | null;
    member_sid?: string | null;
    status?: UserChannelChannelStatus;
    last_consumed_message_index?: number | null;
    unread_messages_count?: number | null;
    links?: object | null;
    url?: string | null;
    notification_level?: UserChannelNotificationLevel;
}
export declare class UserChannelInstance {
    protected _version: V2;
    protected _solution: UserChannelContextSolution;
    protected _context?: UserChannelContext;
    constructor(_version: V2, payload: UserChannelResource, serviceSid: string, userSid: string, channelSid?: string);
    accountSid?: string | null;
    serviceSid?: string | null;
    channelSid?: string | null;
    userSid?: string | null;
    memberSid?: string | null;
    status?: UserChannelChannelStatus;
    lastConsumedMessageIndex?: number | null;
    unreadMessagesCount?: number | null;
    links?: object | null;
    url?: string | null;
    notificationLevel?: UserChannelNotificationLevel;
    private get _proxy();
    /**
     * Remove a UserChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a UserChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserChannelInstance
     */
    fetch(callback?: (error: Error | null, item?: UserChannelInstance) => any): Promise<UserChannelInstance>;
    /**
     * Update a UserChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserChannelInstance
     */
    update(callback?: (error: Error | null, item?: UserChannelInstance) => any): Promise<UserChannelInstance>;
    /**
     * Update a UserChannelInstance
     *
     * @param { UserChannelContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserChannelInstance
     */
    update(params: UserChannelContextUpdateOptions, callback?: (error: Error | null, item?: UserChannelInstance) => any): Promise<UserChannelInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        channelSid: string | null | undefined;
        userSid: string | null | undefined;
        memberSid: string | null | undefined;
        status: UserChannelChannelStatus | undefined;
        lastConsumedMessageIndex: number | null | undefined;
        unreadMessagesCount: number | null | undefined;
        links: object | null | undefined;
        url: string | null | undefined;
        notificationLevel: UserChannelNotificationLevel | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface UserChannelListInstance {
    (channelSid: string): UserChannelContext;
    get(channelSid: string): UserChannelContext;
    /**
     * Streams UserChannelInstance records from the API.
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
    each(callback?: (item: UserChannelInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams UserChannelInstance records from the API.
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
     * @param { UserChannelListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: UserChannelListInstanceEachOptions, callback?: (item: UserChannelInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of UserChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: UserChannelPage) => any): Promise<UserChannelPage>;
    /**
     * Retrieve a single target page of UserChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: UserChannelPage) => any): Promise<UserChannelPage>;
    getPage(params?: any, callback?: any): Promise<UserChannelPage>;
    /**
     * Lists UserChannelInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: UserChannelInstance[]) => any): Promise<UserChannelInstance[]>;
    /**
     * Lists UserChannelInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { UserChannelListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: UserChannelListInstanceOptions, callback?: (error: Error | null, items: UserChannelInstance[]) => any): Promise<UserChannelInstance[]>;
    list(params?: any, callback?: any): Promise<UserChannelInstance[]>;
    /**
     * Retrieve a single page of UserChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: UserChannelPage) => any): Promise<UserChannelPage>;
    /**
     * Retrieve a single page of UserChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { UserChannelListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: UserChannelListInstancePageOptions, callback?: (error: Error | null, items: UserChannelPage) => any): Promise<UserChannelPage>;
    page(params?: any, callback?: any): Promise<UserChannelPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UserChannelSolution {
    serviceSid?: string;
    userSid?: string;
}
export declare function UserChannelListInstance(version: V2, serviceSid: string, userSid: string): UserChannelListInstance;
export declare class UserChannelPage extends Page<V2, UserChannelPayload, UserChannelResource, UserChannelInstance> {
    /**
     * Initialize the UserChannelPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: UserChannelSolution);
    /**
     * Build an instance of UserChannelInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: UserChannelResource): UserChannelInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
