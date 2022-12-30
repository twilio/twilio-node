/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
import { BindingListInstance } from "./service/binding";
import { ChannelListInstance } from "./service/channel";
import { RoleListInstance } from "./service/role";
import { UserListInstance } from "./service/user";
/**
 * Options to pass to update a ServiceInstance
 *
 * @property { string } [friendlyName]
 * @property { string } [defaultServiceRoleSid]
 * @property { string } [defaultChannelRoleSid]
 * @property { string } [defaultChannelCreatorRoleSid]
 * @property { boolean } [readStatusEnabled]
 * @property { boolean } [reachabilityEnabled]
 * @property { number } [typingIndicatorTimeout]
 * @property { number } [consumptionReportInterval]
 * @property { boolean } [notifications.newMessage.enabled]
 * @property { string } [notifications.newMessage.template]
 * @property { string } [notifications.newMessage.sound]
 * @property { boolean } [notifications.newMessage.badgeCountEnabled]
 * @property { boolean } [notifications.addedToChannel.enabled]
 * @property { string } [notifications.addedToChannel.template]
 * @property { string } [notifications.addedToChannel.sound]
 * @property { boolean } [notifications.removedFromChannel.enabled]
 * @property { string } [notifications.removedFromChannel.template]
 * @property { string } [notifications.removedFromChannel.sound]
 * @property { boolean } [notifications.invitedToChannel.enabled]
 * @property { string } [notifications.invitedToChannel.template]
 * @property { string } [notifications.invitedToChannel.sound]
 * @property { string } [preWebhookUrl]
 * @property { string } [postWebhookUrl]
 * @property { string } [webhookMethod]
 * @property { Array<string> } [webhookFilters]
 * @property { number } [limits.channelMembers]
 * @property { number } [limits.userChannels]
 * @property { string } [media.compatibilityMessage]
 * @property { number } [preWebhookRetryCount]
 * @property { number } [postWebhookRetryCount]
 * @property { boolean } [notifications.logEnabled]
 */
export interface ServiceContextUpdateOptions {
    friendlyName?: string;
    defaultServiceRoleSid?: string;
    defaultChannelRoleSid?: string;
    defaultChannelCreatorRoleSid?: string;
    readStatusEnabled?: boolean;
    reachabilityEnabled?: boolean;
    typingIndicatorTimeout?: number;
    consumptionReportInterval?: number;
    "notifications.newMessage.enabled"?: boolean;
    "notifications.newMessage.template"?: string;
    "notifications.newMessage.sound"?: string;
    "notifications.newMessage.badgeCountEnabled"?: boolean;
    "notifications.addedToChannel.enabled"?: boolean;
    "notifications.addedToChannel.template"?: string;
    "notifications.addedToChannel.sound"?: string;
    "notifications.removedFromChannel.enabled"?: boolean;
    "notifications.removedFromChannel.template"?: string;
    "notifications.removedFromChannel.sound"?: string;
    "notifications.invitedToChannel.enabled"?: boolean;
    "notifications.invitedToChannel.template"?: string;
    "notifications.invitedToChannel.sound"?: string;
    preWebhookUrl?: string;
    postWebhookUrl?: string;
    webhookMethod?: string;
    webhookFilters?: Array<string>;
    "limits.channelMembers"?: number;
    "limits.userChannels"?: number;
    "media.compatibilityMessage"?: string;
    preWebhookRetryCount?: number;
    postWebhookRetryCount?: number;
    "notifications.logEnabled"?: boolean;
}
/**
 * Options to pass to create a ServiceInstance
 *
 * @property { string } friendlyName
 */
export interface ServiceListInstanceCreateOptions {
    friendlyName: string;
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
export interface ServiceListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
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
export interface ServiceListInstanceOptions {
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
export interface ServiceListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ServiceContext {
    bindings: BindingListInstance;
    channels: ChannelListInstance;
    roles: RoleListInstance;
    users: UserListInstance;
    /**
     * Remove a ServiceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ServiceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ServiceInstance
     */
    fetch(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
    /**
     * Update a ServiceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ServiceInstance
     */
    update(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
    /**
     * Update a ServiceInstance
     *
     * @param { ServiceContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ServiceInstance
     */
    update(params: ServiceContextUpdateOptions, callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
    update(params?: any, callback?: any): Promise<ServiceInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ServiceContextSolution {
    sid?: string;
}
export declare class ServiceContextImpl implements ServiceContext {
    protected _version: V2;
    protected _solution: ServiceContextSolution;
    protected _uri: string;
    protected _bindings?: BindingListInstance;
    protected _channels?: ChannelListInstance;
    protected _roles?: RoleListInstance;
    protected _users?: UserListInstance;
    constructor(_version: V2, sid: string);
    get bindings(): BindingListInstance;
    get channels(): ChannelListInstance;
    get roles(): RoleListInstance;
    get users(): UserListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<ServiceInstance>;
    update(params?: any, callback?: any): Promise<ServiceInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ServiceContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ServicePayload extends TwilioResponsePayload {
    services: ServiceResource[];
}
interface ServiceResource {
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    default_service_role_sid?: string | null;
    default_channel_role_sid?: string | null;
    default_channel_creator_role_sid?: string | null;
    read_status_enabled?: boolean | null;
    reachability_enabled?: boolean | null;
    typing_indicator_timeout?: number | null;
    consumption_report_interval?: number | null;
    limits?: any | null;
    pre_webhook_url?: string | null;
    post_webhook_url?: string | null;
    webhook_method?: string | null;
    webhook_filters?: Array<string> | null;
    pre_webhook_retry_count?: number | null;
    post_webhook_retry_count?: number | null;
    notifications?: any | null;
    media?: any | null;
    url?: string | null;
    links?: object | null;
}
export declare class ServiceInstance {
    protected _version: V2;
    protected _solution: ServiceContextSolution;
    protected _context?: ServiceContext;
    constructor(_version: V2, payload: ServiceResource, sid?: string);
    sid?: string | null;
    accountSid?: string | null;
    friendlyName?: string | null;
    dateCreated?: Date | null;
    dateUpdated?: Date | null;
    defaultServiceRoleSid?: string | null;
    defaultChannelRoleSid?: string | null;
    defaultChannelCreatorRoleSid?: string | null;
    readStatusEnabled?: boolean | null;
    reachabilityEnabled?: boolean | null;
    typingIndicatorTimeout?: number | null;
    consumptionReportInterval?: number | null;
    limits?: any | null;
    preWebhookUrl?: string | null;
    postWebhookUrl?: string | null;
    webhookMethod?: string | null;
    webhookFilters?: Array<string> | null;
    preWebhookRetryCount?: number | null;
    postWebhookRetryCount?: number | null;
    notifications?: any | null;
    media?: any | null;
    url?: string | null;
    links?: object | null;
    private get _proxy();
    /**
     * Remove a ServiceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ServiceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ServiceInstance
     */
    fetch(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
    /**
     * Update a ServiceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ServiceInstance
     */
    update(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
    /**
     * Update a ServiceInstance
     *
     * @param { ServiceContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ServiceInstance
     */
    update(params: ServiceContextUpdateOptions, callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
    /**
     * Access the bindings.
     */
    bindings(): BindingListInstance;
    /**
     * Access the channels.
     */
    channels(): ChannelListInstance;
    /**
     * Access the roles.
     */
    roles(): RoleListInstance;
    /**
     * Access the users.
     */
    users(): UserListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        defaultServiceRoleSid: string | null | undefined;
        defaultChannelRoleSid: string | null | undefined;
        defaultChannelCreatorRoleSid: string | null | undefined;
        readStatusEnabled: boolean | null | undefined;
        reachabilityEnabled: boolean | null | undefined;
        typingIndicatorTimeout: number | null | undefined;
        consumptionReportInterval: number | null | undefined;
        limits: any;
        preWebhookUrl: string | null | undefined;
        postWebhookUrl: string | null | undefined;
        webhookMethod: string | null | undefined;
        webhookFilters: string[] | null | undefined;
        preWebhookRetryCount: number | null | undefined;
        postWebhookRetryCount: number | null | undefined;
        notifications: any;
        media: any;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ServiceListInstance {
    (sid: string): ServiceContext;
    get(sid: string): ServiceContext;
    /**
     * Create a ServiceInstance
     *
     * @param { ServiceListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ServiceInstance
     */
    create(params: ServiceListInstanceCreateOptions, callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
    create(params: any, callback?: any): Promise<ServiceInstance>;
    /**
     * Streams ServiceInstance records from the API.
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
    each(callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ServiceInstance records from the API.
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
     * @param { ServiceListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ServiceListInstanceEachOptions, callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ServiceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
    /**
     * Retrieve a single target page of ServiceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
    getPage(params?: any, callback?: any): Promise<ServicePage>;
    /**
     * Lists ServiceInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
    /**
     * Lists ServiceInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ServiceListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ServiceListInstanceOptions, callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
    list(params?: any, callback?: any): Promise<ServiceInstance[]>;
    /**
     * Retrieve a single page of ServiceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
    /**
     * Retrieve a single page of ServiceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ServiceListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ServiceListInstancePageOptions, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
    page(params?: any, callback?: any): Promise<ServicePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ServiceSolution {
}
export declare function ServiceListInstance(version: V2): ServiceListInstance;
export declare class ServicePage extends Page<V2, ServicePayload, ServiceResource, ServiceInstance> {
    /**
     * Initialize the ServicePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: ServiceSolution);
    /**
     * Build an instance of ServiceInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ServiceResource): ServiceInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
