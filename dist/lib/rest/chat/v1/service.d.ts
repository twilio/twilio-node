/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { ChannelListInstance } from "./service/channel";
import { RoleListInstance } from "./service/role";
import { UserListInstance } from "./service/user";
/**
 * Options to pass to update a ServiceInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [defaultServiceRoleSid] The service role assigned to users when they are added to the service. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
 * @property { string } [defaultChannelRoleSid] The channel role assigned to users when they are added to a channel. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
 * @property { string } [defaultChannelCreatorRoleSid] The channel role assigned to a channel creator when they join a new channel. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
 * @property { boolean } [readStatusEnabled] Whether to enable the [Message Consumption Horizon](https://www.twilio.com/docs/chat/consumption-horizon) feature. The default is `true`.
 * @property { boolean } [reachabilityEnabled] Whether to enable the [Reachability Indicator](https://www.twilio.com/docs/chat/reachability-indicator) for this Service instance. The default is `false`.
 * @property { number } [typingIndicatorTimeout] How long in seconds after a `started typing` event until clients should assume that user is no longer typing, even if no `ended typing` message was received.  The default is 5 seconds.
 * @property { number } [consumptionReportInterval] DEPRECATED. The interval in seconds between consumption reports submission batches from client endpoints.
 * @property { boolean } [notifications.newMessage.enabled] Whether to send a notification when a new message is added to a channel. Can be: `true` or `false` and the default is `false`.
 * @property { string } [notifications.newMessage.template] The template to use to create the notification text displayed when a new message is added to a channel and `notifications.new_message.enabled` is `true`.
 * @property { boolean } [notifications.addedToChannel.enabled] Whether to send a notification when a member is added to a channel. Can be: `true` or `false` and the default is `false`.
 * @property { string } [notifications.addedToChannel.template] The template to use to create the notification text displayed when a member is added to a channel and `notifications.added_to_channel.enabled` is `true`.
 * @property { boolean } [notifications.removedFromChannel.enabled] Whether to send a notification to a user when they are removed from a channel. Can be: `true` or `false` and the default is `false`.
 * @property { string } [notifications.removedFromChannel.template] The template to use to create the notification text displayed to a user when they are removed from a channel and `notifications.removed_from_channel.enabled` is `true`.
 * @property { boolean } [notifications.invitedToChannel.enabled] Whether to send a notification when a user is invited to a channel. Can be: `true` or `false` and the default is `false`.
 * @property { string } [notifications.invitedToChannel.template] The template to use to create the notification text displayed when a user is invited to a channel and `notifications.invited_to_channel.enabled` is `true`.
 * @property { string } [preWebhookUrl] The URL for pre-event webhooks, which are called by using the `webhook_method`. See [Webhook Events](https://www.twilio.com/docs/api/chat/webhooks) for more details.
 * @property { string } [postWebhookUrl] The URL for post-event webhooks, which are called by using the `webhook_method`. See [Webhook Events](https://www.twilio.com/docs/api/chat/webhooks) for more details.
 * @property { string } [webhookMethod] The HTTP method to use for calls to the `pre_webhook_url` and `post_webhook_url` webhooks.  Can be: `POST` or `GET` and the default is `POST`. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
 * @property { Array<string> } [webhookFilters] The list of WebHook events that are enabled for this Service instance. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
 * @property { string } [webhooks.onMessageSend.url] The URL of the webhook to call in response to the `on_message_send` event using the `webhooks.on_message_send.method` HTTP method.
 * @property { string } [webhooks.onMessageSend.method] The HTTP method to use when calling the `webhooks.on_message_send.url`.
 * @property { string } [webhooks.onMessageUpdate.url] The URL of the webhook to call in response to the `on_message_update` event using the `webhooks.on_message_update.method` HTTP method.
 * @property { string } [webhooks.onMessageUpdate.method] The HTTP method to use when calling the `webhooks.on_message_update.url`.
 * @property { string } [webhooks.onMessageRemove.url] The URL of the webhook to call in response to the `on_message_remove` event using the `webhooks.on_message_remove.method` HTTP method.
 * @property { string } [webhooks.onMessageRemove.method] The HTTP method to use when calling the `webhooks.on_message_remove.url`.
 * @property { string } [webhooks.onChannelAdd.url] The URL of the webhook to call in response to the `on_channel_add` event using the `webhooks.on_channel_add.method` HTTP method.
 * @property { string } [webhooks.onChannelAdd.method] The HTTP method to use when calling the `webhooks.on_channel_add.url`.
 * @property { string } [webhooks.onChannelDestroy.url] The URL of the webhook to call in response to the `on_channel_destroy` event using the `webhooks.on_channel_destroy.method` HTTP method.
 * @property { string } [webhooks.onChannelDestroy.method] The HTTP method to use when calling the `webhooks.on_channel_destroy.url`.
 * @property { string } [webhooks.onChannelUpdate.url] The URL of the webhook to call in response to the `on_channel_update` event using the `webhooks.on_channel_update.method` HTTP method.
 * @property { string } [webhooks.onChannelUpdate.method] The HTTP method to use when calling the `webhooks.on_channel_update.url`.
 * @property { string } [webhooks.onMemberAdd.url] The URL of the webhook to call in response to the `on_member_add` event using the `webhooks.on_member_add.method` HTTP method.
 * @property { string } [webhooks.onMemberAdd.method] The HTTP method to use when calling the `webhooks.on_member_add.url`.
 * @property { string } [webhooks.onMemberRemove.url] The URL of the webhook to call in response to the `on_member_remove` event using the `webhooks.on_member_remove.method` HTTP method.
 * @property { string } [webhooks.onMemberRemove.method] The HTTP method to use when calling the `webhooks.on_member_remove.url`.
 * @property { string } [webhooks.onMessageSent.url] The URL of the webhook to call in response to the `on_message_sent` event using the `webhooks.on_message_sent.method` HTTP method.
 * @property { string } [webhooks.onMessageSent.method] The URL of the webhook to call in response to the `on_message_sent` event`.
 * @property { string } [webhooks.onMessageUpdated.url] The URL of the webhook to call in response to the `on_message_updated` event using the `webhooks.on_message_updated.method` HTTP method.
 * @property { string } [webhooks.onMessageUpdated.method] The HTTP method to use when calling the `webhooks.on_message_updated.url`.
 * @property { string } [webhooks.onMessageRemoved.url] The URL of the webhook to call in response to the `on_message_removed` event using the `webhooks.on_message_removed.method` HTTP method.
 * @property { string } [webhooks.onMessageRemoved.method] The HTTP method to use when calling the `webhooks.on_message_removed.url`.
 * @property { string } [webhooks.onChannelAdded.url] The URL of the webhook to call in response to the `on_channel_added` event using the `webhooks.on_channel_added.method` HTTP method.
 * @property { string } [webhooks.onChannelAdded.method] The URL of the webhook to call in response to the `on_channel_added` event`.
 * @property { string } [webhooks.onChannelDestroyed.url] The URL of the webhook to call in response to the `on_channel_added` event using the `webhooks.on_channel_destroyed.method` HTTP method.
 * @property { string } [webhooks.onChannelDestroyed.method] The HTTP method to use when calling the `webhooks.on_channel_destroyed.url`.
 * @property { string } [webhooks.onChannelUpdated.url] The URL of the webhook to call in response to the `on_channel_updated` event using the `webhooks.on_channel_updated.method` HTTP method.
 * @property { string } [webhooks.onChannelUpdated.method] The HTTP method to use when calling the `webhooks.on_channel_updated.url`.
 * @property { string } [webhooks.onMemberAdded.url] The URL of the webhook to call in response to the `on_channel_updated` event using the `webhooks.on_channel_updated.method` HTTP method.
 * @property { string } [webhooks.onMemberAdded.method] The HTTP method to use when calling the `webhooks.on_channel_updated.url`.
 * @property { string } [webhooks.onMemberRemoved.url] The URL of the webhook to call in response to the `on_member_removed` event using the `webhooks.on_member_removed.method` HTTP method.
 * @property { string } [webhooks.onMemberRemoved.method] The HTTP method to use when calling the `webhooks.on_member_removed.url`.
 * @property { number } [limits.channelMembers] The maximum number of Members that can be added to Channels within this Service. Can be up to 1,000.
 * @property { number } [limits.userChannels] The maximum number of Channels Users can be a Member of within this Service. Can be up to 1,000.
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
    "notifications.addedToChannel.enabled"?: boolean;
    "notifications.addedToChannel.template"?: string;
    "notifications.removedFromChannel.enabled"?: boolean;
    "notifications.removedFromChannel.template"?: string;
    "notifications.invitedToChannel.enabled"?: boolean;
    "notifications.invitedToChannel.template"?: string;
    preWebhookUrl?: string;
    postWebhookUrl?: string;
    webhookMethod?: string;
    webhookFilters?: Array<string>;
    "webhooks.onMessageSend.url"?: string;
    "webhooks.onMessageSend.method"?: string;
    "webhooks.onMessageUpdate.url"?: string;
    "webhooks.onMessageUpdate.method"?: string;
    "webhooks.onMessageRemove.url"?: string;
    "webhooks.onMessageRemove.method"?: string;
    "webhooks.onChannelAdd.url"?: string;
    "webhooks.onChannelAdd.method"?: string;
    "webhooks.onChannelDestroy.url"?: string;
    "webhooks.onChannelDestroy.method"?: string;
    "webhooks.onChannelUpdate.url"?: string;
    "webhooks.onChannelUpdate.method"?: string;
    "webhooks.onMemberAdd.url"?: string;
    "webhooks.onMemberAdd.method"?: string;
    "webhooks.onMemberRemove.url"?: string;
    "webhooks.onMemberRemove.method"?: string;
    "webhooks.onMessageSent.url"?: string;
    "webhooks.onMessageSent.method"?: string;
    "webhooks.onMessageUpdated.url"?: string;
    "webhooks.onMessageUpdated.method"?: string;
    "webhooks.onMessageRemoved.url"?: string;
    "webhooks.onMessageRemoved.method"?: string;
    "webhooks.onChannelAdded.url"?: string;
    "webhooks.onChannelAdded.method"?: string;
    "webhooks.onChannelDestroyed.url"?: string;
    "webhooks.onChannelDestroyed.method"?: string;
    "webhooks.onChannelUpdated.url"?: string;
    "webhooks.onChannelUpdated.method"?: string;
    "webhooks.onMemberAdded.url"?: string;
    "webhooks.onMemberAdded.method"?: string;
    "webhooks.onMemberRemoved.url"?: string;
    "webhooks.onMemberRemoved.method"?: string;
    "limits.channelMembers"?: number;
    "limits.userChannels"?: number;
}
/**
 * Options to pass to create a ServiceInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the resource. It can be up to 64 characters long.
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
    protected _version: V1;
    protected _solution: ServiceContextSolution;
    protected _uri: string;
    protected _channels?: ChannelListInstance;
    protected _roles?: RoleListInstance;
    protected _users?: UserListInstance;
    constructor(_version: V1, sid: string);
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
    webhooks?: any | null;
    pre_webhook_url?: string | null;
    post_webhook_url?: string | null;
    webhook_method?: string | null;
    webhook_filters?: Array<string> | null;
    notifications?: any | null;
    url?: string | null;
    links?: object | null;
}
export declare class ServiceInstance {
    protected _version: V1;
    protected _solution: ServiceContextSolution;
    protected _context?: ServiceContext;
    constructor(_version: V1, payload: ServiceResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The service role assigned to users when they are added to the service
     */
    defaultServiceRoleSid?: string | null;
    /**
     * The channel role assigned to users when they are added to a channel
     */
    defaultChannelRoleSid?: string | null;
    /**
     * The channel role assigned to a channel creator when they join a new channel
     */
    defaultChannelCreatorRoleSid?: string | null;
    /**
     * Whether the Message Consumption Horizon feature is enabled
     */
    readStatusEnabled?: boolean | null;
    /**
     * Whether the Reachability Indicator feature is enabled for this Service instance
     */
    reachabilityEnabled?: boolean | null;
    /**
     * How long in seconds to wait before assuming the user is no longer typing
     */
    typingIndicatorTimeout?: number | null;
    /**
     * DEPRECATED
     */
    consumptionReportInterval?: number | null;
    /**
     * An object that describes the limits of the service instance
     */
    limits?: any | null;
    /**
     * An object that contains information about the webhooks configured for this service
     */
    webhooks?: any | null;
    /**
     * The webhook URL for pre-event webhooks
     */
    preWebhookUrl?: string | null;
    /**
     * The URL for post-event webhooks
     */
    postWebhookUrl?: string | null;
    /**
     * The HTTP method  to use for both PRE and POST webhooks
     */
    webhookMethod?: string | null;
    /**
     * The list of WebHook events that are enabled for this Service instance
     */
    webhookFilters?: Array<string> | null;
    /**
     * The notification configuration for the Service instance
     */
    notifications?: any | null;
    /**
     * The absolute URL of the Service resource
     */
    url?: string | null;
    /**
     * The absolute URLs of the Service\'s Channels, Roles, and Users
     */
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
        webhooks: any;
        preWebhookUrl: string | null | undefined;
        postWebhookUrl: string | null | undefined;
        webhookMethod: string | null | undefined;
        webhookFilters: string[] | null | undefined;
        notifications: any;
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
export declare function ServiceListInstance(version: V1): ServiceListInstance;
export declare class ServicePage extends Page<V1, ServicePayload, ServiceResource, ServiceInstance> {
    /**
     * Initialize the ServicePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ServiceSolution);
    /**
     * Build an instance of ServiceInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ServiceResource): ServiceInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
