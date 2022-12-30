/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
declare type UserBindingBindingType = "gcm" | "apn" | "fcm";
/**
 * Options to pass to each
 *
 * @property { Array<UserBindingBindingType> } [bindingType] The push technology used by the User Binding resources to read. Can be: `apn`, `gcm`, or `fcm`.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
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
export interface UserBindingListInstanceEachOptions {
    bindingType?: Array<UserBindingBindingType>;
    pageSize?: number;
    callback?: (item: UserBindingInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { Array<UserBindingBindingType> } [bindingType] The push technology used by the User Binding resources to read. Can be: `apn`, `gcm`, or `fcm`.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface UserBindingListInstanceOptions {
    bindingType?: Array<UserBindingBindingType>;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { Array<UserBindingBindingType> } [bindingType] The push technology used by the User Binding resources to read. Can be: `apn`, `gcm`, or `fcm`.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface UserBindingListInstancePageOptions {
    bindingType?: Array<UserBindingBindingType>;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface UserBindingContext {
    /**
     * Remove a UserBindingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a UserBindingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserBindingInstance
     */
    fetch(callback?: (error: Error | null, item?: UserBindingInstance) => any): Promise<UserBindingInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UserBindingContextSolution {
    serviceSid?: string;
    userSid?: string;
    sid?: string;
}
export declare class UserBindingContextImpl implements UserBindingContext {
    protected _version: V2;
    protected _solution: UserBindingContextSolution;
    protected _uri: string;
    constructor(_version: V2, serviceSid: string, userSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<UserBindingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): UserBindingContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface UserBindingPayload extends TwilioResponsePayload {
    bindings: UserBindingResource[];
}
interface UserBindingResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    endpoint?: string | null;
    identity?: string | null;
    user_sid?: string | null;
    credential_sid?: string | null;
    binding_type?: UserBindingBindingType;
    message_types?: Array<string> | null;
    url?: string | null;
}
export declare class UserBindingInstance {
    protected _version: V2;
    protected _solution: UserBindingContextSolution;
    protected _context?: UserBindingContext;
    constructor(_version: V2, payload: UserBindingResource, serviceSid: string, userSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The unique endpoint identifier for the User Binding
     */
    endpoint?: string | null;
    /**
     * The string that identifies the resource\'s User
     */
    identity?: string | null;
    /**
     * The SID of the User with the binding
     */
    userSid?: string | null;
    /**
     * The SID of the Credential for the binding
     */
    credentialSid?: string | null;
    bindingType?: UserBindingBindingType;
    /**
     * The Programmable Chat message types the binding is subscribed to
     */
    messageTypes?: Array<string> | null;
    /**
     * The absolute URL of the User Binding resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a UserBindingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a UserBindingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserBindingInstance
     */
    fetch(callback?: (error: Error | null, item?: UserBindingInstance) => any): Promise<UserBindingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        endpoint: string | null | undefined;
        identity: string | null | undefined;
        userSid: string | null | undefined;
        credentialSid: string | null | undefined;
        bindingType: UserBindingBindingType | undefined;
        messageTypes: string[] | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface UserBindingListInstance {
    (sid: string): UserBindingContext;
    get(sid: string): UserBindingContext;
    /**
     * Streams UserBindingInstance records from the API.
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
    each(callback?: (item: UserBindingInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams UserBindingInstance records from the API.
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
     * @param { UserBindingListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: UserBindingListInstanceEachOptions, callback?: (item: UserBindingInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of UserBindingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: UserBindingPage) => any): Promise<UserBindingPage>;
    /**
     * Retrieve a single target page of UserBindingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: UserBindingPage) => any): Promise<UserBindingPage>;
    getPage(params?: any, callback?: any): Promise<UserBindingPage>;
    /**
     * Lists UserBindingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: UserBindingInstance[]) => any): Promise<UserBindingInstance[]>;
    /**
     * Lists UserBindingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { UserBindingListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: UserBindingListInstanceOptions, callback?: (error: Error | null, items: UserBindingInstance[]) => any): Promise<UserBindingInstance[]>;
    list(params?: any, callback?: any): Promise<UserBindingInstance[]>;
    /**
     * Retrieve a single page of UserBindingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: UserBindingPage) => any): Promise<UserBindingPage>;
    /**
     * Retrieve a single page of UserBindingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { UserBindingListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: UserBindingListInstancePageOptions, callback?: (error: Error | null, items: UserBindingPage) => any): Promise<UserBindingPage>;
    page(params?: any, callback?: any): Promise<UserBindingPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UserBindingSolution {
    serviceSid?: string;
    userSid?: string;
}
export declare function UserBindingListInstance(version: V2, serviceSid: string, userSid: string): UserBindingListInstance;
export declare class UserBindingPage extends Page<V2, UserBindingPayload, UserBindingResource, UserBindingInstance> {
    /**
     * Initialize the UserBindingPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: UserBindingSolution);
    /**
     * Build an instance of UserBindingInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: UserBindingResource): UserBindingInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
