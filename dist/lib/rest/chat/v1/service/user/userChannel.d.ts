/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
declare type UserChannelChannelStatus = "joined" | "invited" | "not_participating";
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
export interface UserChannelListInstance {
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
export declare function UserChannelListInstance(version: V1, serviceSid: string, userSid: string): UserChannelListInstance;
interface UserChannelPayload extends TwilioResponsePayload {
    channels: UserChannelResource[];
}
interface UserChannelResource {
    account_sid?: string | null;
    service_sid?: string | null;
    channel_sid?: string | null;
    member_sid?: string | null;
    status?: UserChannelChannelStatus;
    last_consumed_message_index?: number | null;
    unread_messages_count?: number | null;
    links?: object | null;
}
export declare class UserChannelInstance {
    protected _version: V1;
    constructor(_version: V1, payload: UserChannelResource, serviceSid: string, userSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The SID of the Channel the resource belongs to
     */
    channelSid?: string | null;
    /**
     * The SID of the User as a Member in the Channel
     */
    memberSid?: string | null;
    status?: UserChannelChannelStatus;
    /**
     * The index of the last Message in the Channel the Member has read
     */
    lastConsumedMessageIndex?: number | null;
    /**
     * The number of unread Messages in the Channel for the User
     */
    unreadMessagesCount?: number | null;
    /**
     * Absolute URLs to access the Members, Messages , Invites and, if it exists, the last Message for the Channel
     */
    links?: object | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        channelSid: string | null | undefined;
        memberSid: string | null | undefined;
        status: UserChannelChannelStatus | undefined;
        lastConsumedMessageIndex: number | null | undefined;
        unreadMessagesCount: number | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class UserChannelPage extends Page<V1, UserChannelPayload, UserChannelResource, UserChannelInstance> {
    /**
     * Initialize the UserChannelPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: UserChannelSolution);
    /**
     * Build an instance of UserChannelInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: UserChannelResource): UserChannelInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
