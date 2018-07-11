/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V2 = require('../V2');
import { BindingListInstance } from './service/binding';
import { ChannelListInstance } from './service/channel';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { RoleListInstance } from './service/role';
import { SerializableClass } from '../../../interfaces';
import { UserListInstance } from './service/user';

declare function ServiceList(version: V2): ServiceListInstance

interface ServiceResource {
  /**
   * The unique id of the [Account](https://www.twilio.com/console) responsible for this service.
   */
  account_sid: string;
  /**
   * `DEPRECATED. Value will default to 1 second`. The interval in seconds between consumption reports submission batches from client endpoints. Default is 10 seconds.
   */
  consumption_report_interval: number;
  /**
   * The date that this resource was created
   */
  date_created: Date;
  /**
   * The date that this resource was last updated
   */
  date_updated: Date;
  /**
   * The channel role assigned to a channel creator when joining a new channel. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
   */
  default_channel_creator_role_sid: string;
  /**
   * The channel role assigned to users when they are added to a channel. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
   */
  default_channel_role_sid: string;
  /**
   * The service role assigned to users when they are added to the service. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
   */
  default_service_role_sid: string;
  /**
   * The human-readable name of this service.
   */
  friendly_name: string;
  /**
   * Configuration for service instance level limits. Configurable limits are Max Channels per User (default: 250; maximum allowed: 1,000) and Max Members per Channel (default: 100; maximum allowed: 1,000).
   */
  limits: string;
  /**
   * URLs to access the [Channels](https://www.twilio.com/docs/chat/api/channels), [Roles](https://www.twilio.com/docs/chat/api/roles), and [Users](https://www.twilio.com/docs/chat/api/users) for this service.
   */
  links: string;
  /**
   * The media
   */
  media: string;
  /**
   * Notification configuration for the Service instance. See [Push Notification Configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more information.
   */
  notifications: string;
  /**
   * Count of times webhook will be retried in case of timeout (5 seconds) or 429/503/504 HTTP responses. Default retry count is 0 times.
   */
  post_webhook_retry_count: number;
  /**
   * The webhook URL for POST-Event webhooks. See [Webhook Events](https://www.twilio.com/docs/api/chat/webhooks) for more details.
   */
  post_webhook_url: string;
  /**
   * Count of times webhook will be retried in case of timeout (5 seconds) or 429/503/504 HTTP responses. Default retry count is 0 times.
   */
  pre_webhook_retry_count: number;
  /**
   * The webhook URL for PRE-Event webhooks. See [Webhook Events](https://www.twilio.com/docs/api/chat/webhooks) for more details.
   */
  pre_webhook_url: string;
  /**
   * Indicates whether the  the Reachability feature is enabled for this Service instance.  Defaults to `false`.
   */
  reachability_enabled: boolean;
  /**
   * Enable the Message Constumption Horizon feature (*true* if enabled, *false* if not).  Defaults to *true*.
   */
  read_status_enabled: boolean;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The amount of time in seconds after a "started typing" event when clients should assume that user is no longer typing, even if no "ended typing" message was received.  Default is 5 seconds.
   */
  typing_indicator_timeout: number;
  /**
   * An absolute URL for this service.
   */
  url: string;
  /**
   * The list of WebHook events that are enabled for this Service instance. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
   */
  webhook_filters: string;
  /**
   * The webhook request format to use for both PRE and POST webhooks.  Must be POST or GET. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.  The default is POST.
   */
  webhook_method: string;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceSolution {
}

interface ServiceListCreateOptions {
  /**
   * Human-readable name for this service instance
   */
  friendlyName: string;
}

interface ServiceListEachOptions extends ListEachOptions<ServiceInstance> {
}

interface ServiceListOptions extends ListOptions<ServiceInstance> {
}

interface ServiceListPageOptions extends PageOptions<ServicePage> {
}

interface ServiceListInstance {
  /**
   * Gets context of a single Service resource
   *
   * @param sid - The sid
   */
  (sid: string): ServiceContext;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  create(opts: ServiceListCreateOptions): Promise<ServiceInstance>;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ServiceListCreateOptions, callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * Streams ServiceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  each(opts?: ServiceListEachOptions): void;
  /**
   * Streams ServiceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  each(callback: (item: ServiceInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Service resource
   *
   * @param sid - The sid
   */
  get(sid: string): ServiceContext;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<ServicePage>;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: ServicePage) => any): void;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: ServiceListOptions): Promise<ServiceInstance[]>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: ServiceListOptions, callback: (error: Error | null, items: ServiceInstance[]) => any): void;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: ServiceInstance[]) => any): void;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: ServiceListPageOptions): Promise<ServicePage>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: ServiceListPageOptions, callback: (error: Error | null, items: ServicePage) => any): void;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: ServicePage) => any): void;
}

interface ServiceListFetchOptions {
  /**
   * The consumption_report_interval
   */
  consumptionReportInterval?: number;
  /**
   * Channel role assigned to creator of channel when joining for first time
   */
  defaultChannelCreatorRoleSid?: string;
  /**
   * Channel role assigned on channel join (see [Roles](https://www.twilio.com/docs/chat/api/roles) data model for the details)
   */
  defaultChannelRoleSid?: string;
  /**
   * The default_service_role_sid
   */
  defaultServiceRoleSid?: string;
  /**
   * Human-readable name for this service instance
   */
  friendlyName?: string;
  limits?: {
    /**
     * The maximum number of Members that can be added to Channels within this Service.  The maximum allowed value is 1,000
     */
    channelMembers?: number;
    /**
     * The maximum number of Channels Users can be a Member of within this Service.  The maximum value allowed is 1,000
     */
    userChannels?: number;
  };
  media?: {
    /**
     * The media.compatibility_message
     */
    compatibilityMessage?: string;
  };
  notifications?: {
    newMessage?: {
        /**
         * The notifications.new_message.badge_count_enabled
         */
        badgeCountEnabled?: boolean;
    };
    addedToChannel?: {
        /**
         * The notifications.added_to_channel.sound
         */
        sound?: string;
    };
    removedFromChannel?: {
        /**
         * The notifications.removed_from_channel.sound
         */
        sound?: string;
    };
    invitedToChannel?: {
        /**
         * The notifications.invited_to_channel.sound
         */
        sound?: string;
    };
    /**
     * The notifications.log_enabled
     */
    logEnabled?: boolean;
  };
  /**
   * Count of times webhook will be retried in case of timeout (5 seconds) or 429/503/504 HTTP responses. Default retry count is 0 times.
   */
  postWebhookRetryCount?: number;
  /**
   * The webhook URL for POST-Event webhooks. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
   */
  postWebhookUrl?: string;
  /**
   * Count of times webhook will be retried in case of timeout (5 seconds) or 429/503/504 HTTP responses. Default retry count is 0 times.
   */
  preWebhookRetryCount?: number;
  /**
   * The webhook URL for PRE-Event webhooks. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
   */
  preWebhookUrl?: string;
  /**
   * `true` if the reachability feature should be enabled.  Defaults to `false`
   */
  reachabilityEnabled?: boolean;
  /**
   * `true` if the member read status feature is enabled, `false` if not.  Defaults to `true`.
   */
  readStatusEnabled?: boolean;
  /**
   * The duration in seconds indicating the timeout after "started typing" event when client should assume that user is not typing anymore even if no "ended typing" message received
   */
  typingIndicatorTimeout?: number;
  /**
   * The list of WebHook events that are enabled for this Service instance. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
   */
  webhookFilters?: string[];
  /**
   * The webhook request format to use.  Must be POST or GET. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
   */
  webhookMethod?: string;
}

interface ServiceListFetchOptions {
  /**
   * The consumption_report_interval
   */
  consumptionReportInterval?: number;
  /**
   * Channel role assigned to creator of channel when joining for first time
   */
  defaultChannelCreatorRoleSid?: string;
  /**
   * Channel role assigned on channel join (see [Roles](https://www.twilio.com/docs/chat/api/roles) data model for the details)
   */
  defaultChannelRoleSid?: string;
  /**
   * The default_service_role_sid
   */
  defaultServiceRoleSid?: string;
  /**
   * Human-readable name for this service instance
   */
  friendlyName?: string;
  limits?: {
    /**
     * The maximum number of Members that can be added to Channels within this Service.  The maximum allowed value is 1,000
     */
    channelMembers?: number;
    /**
     * The maximum number of Channels Users can be a Member of within this Service.  The maximum value allowed is 1,000
     */
    userChannels?: number;
  };
  media?: {
    /**
     * The media.compatibility_message
     */
    compatibilityMessage?: string;
  };
  notifications?: {
    newMessage?: {
        /**
         * The notifications.new_message.badge_count_enabled
         */
        badgeCountEnabled?: boolean;
    };
    addedToChannel?: {
        /**
         * The notifications.added_to_channel.sound
         */
        sound?: string;
    };
    removedFromChannel?: {
        /**
         * The notifications.removed_from_channel.sound
         */
        sound?: string;
    };
    invitedToChannel?: {
        /**
         * The notifications.invited_to_channel.sound
         */
        sound?: string;
    };
    /**
     * The notifications.log_enabled
     */
    logEnabled?: boolean;
  };
  /**
   * Count of times webhook will be retried in case of timeout (5 seconds) or 429/503/504 HTTP responses. Default retry count is 0 times.
   */
  postWebhookRetryCount?: number;
  /**
   * The webhook URL for POST-Event webhooks. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
   */
  postWebhookUrl?: string;
  /**
   * Count of times webhook will be retried in case of timeout (5 seconds) or 429/503/504 HTTP responses. Default retry count is 0 times.
   */
  preWebhookRetryCount?: number;
  /**
   * The webhook URL for PRE-Event webhooks. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
   */
  preWebhookUrl?: string;
  /**
   * `true` if the reachability feature should be enabled.  Defaults to `false`
   */
  reachabilityEnabled?: boolean;
  /**
   * `true` if the member read status feature is enabled, `false` if not.  Defaults to `true`.
   */
  readStatusEnabled?: boolean;
  /**
   * The duration in seconds indicating the timeout after "started typing" event when client should assume that user is not typing anymore even if no "ended typing" message received
   */
  typingIndicatorTimeout?: number;
  /**
   * The list of WebHook events that are enabled for this Service instance. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
   */
  webhookFilters?: string[];
  /**
   * The webhook request format to use.  Must be POST or GET. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
   */
  webhookMethod?: string;
}

declare class ServicePage extends Page<V2, ServicePayload, ServiceResource, ServiceInstance> {
  constructor(version: V2, response: Response<string>, solution: ServiceSolution);

  /**
   * Build an instance of ServiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ServicePayload): ServiceInstance;
}

declare class ServiceInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V2, payload: ServicePayload, sid: string);

  private _proxy: ServiceContext;
  /**
   * The unique id of the [Account](https://www.twilio.com/console) responsible for this service.
   */
  accountSid: string;
  bindings(): BindingListInstance;
  channels(): ChannelListInstance;
  /**
   * `DEPRECATED. Value will default to 1 second`. The interval in seconds between consumption reports submission batches from client endpoints. Default is 10 seconds.
   */
  consumptionReportInterval: number;
  /**
   * The date that this resource was created
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated
   */
  dateUpdated: Date;
  /**
   * The channel role assigned to a channel creator when joining a new channel. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
   */
  defaultChannelCreatorRoleSid: string;
  /**
   * The channel role assigned to users when they are added to a channel. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
   */
  defaultChannelRoleSid: string;
  /**
   * The service role assigned to users when they are added to the service. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
   */
  defaultServiceRoleSid: string;
  /**
   * fetch a ServiceInstance
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  fetch(): Promise<ServiceInstance>;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * The human-readable name of this service.
   */
  friendlyName: string;
  /**
   * Configuration for service instance level limits. Configurable limits are Max Channels per User (default: 250; maximum allowed: 1,000) and Max Members per Channel (default: 100; maximum allowed: 1,000).
   */
  limits: string;
  /**
   * URLs to access the [Channels](https://www.twilio.com/docs/chat/api/channels), [Roles](https://www.twilio.com/docs/chat/api/roles), and [Users](https://www.twilio.com/docs/chat/api/users) for this service.
   */
  links: string;
  /**
   * The media
   */
  media: string;
  /**
   * Notification configuration for the Service instance. See [Push Notification Configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more information.
   */
  notifications: string;
  /**
   * Count of times webhook will be retried in case of timeout (5 seconds) or 429/503/504 HTTP responses. Default retry count is 0 times.
   */
  postWebhookRetryCount: number;
  /**
   * The webhook URL for POST-Event webhooks. See [Webhook Events](https://www.twilio.com/docs/api/chat/webhooks) for more details.
   */
  postWebhookUrl: string;
  /**
   * Count of times webhook will be retried in case of timeout (5 seconds) or 429/503/504 HTTP responses. Default retry count is 0 times.
   */
  preWebhookRetryCount: number;
  /**
   * The webhook URL for PRE-Event webhooks. See [Webhook Events](https://www.twilio.com/docs/api/chat/webhooks) for more details.
   */
  preWebhookUrl: string;
  /**
   * Indicates whether the  the Reachability feature is enabled for this Service instance.  Defaults to `false`.
   */
  reachabilityEnabled: boolean;
  /**
   * Enable the Message Constumption Horizon feature (*true* if enabled, *false* if not).  Defaults to *true*.
   */
  readStatusEnabled: boolean;
  /**
   * remove a ServiceInstance
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  remove(): Promise<ServiceInstance>;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: ServiceInstance) => any): void;
  roles(): RoleListInstance;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The amount of time in seconds after a "started typing" event when clients should assume that user is no longer typing, even if no "ended typing" message was received.  Default is 5 seconds.
   */
  typingIndicatorTimeout: number;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  update(opts?: ServiceListFetchOptions): Promise<ServiceInstance>;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ServiceListFetchOptions, callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * update a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * An absolute URL for this service.
   */
  url: string;
  users(): UserListInstance;
  /**
   * The list of WebHook events that are enabled for this Service instance. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
   */
  webhookFilters: string;
  /**
   * The webhook request format to use for both PRE and POST webhooks.  Must be POST or GET. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.  The default is POST.
   */
  webhookMethod: string;
}

declare class ServiceContext {
  constructor(version: V2, sid: string);

  bindings: BindingListInstance;
  channels: ChannelListInstance;
  /**
   * fetch a ServiceInstance
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  fetch(): Promise<ServiceInstance>;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * remove a ServiceInstance
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  remove(): Promise<ServiceInstance>;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: ServiceInstance) => any): void;
  roles: RoleListInstance;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  update(opts?: ServiceListFetchOptions): Promise<ServiceInstance>;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ServiceListFetchOptions, callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * update a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ServiceInstance) => any): void;
  users: UserListInstance;
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListCreateOptions, ServiceListEachOptions, ServiceListFetchOptions, ServiceListInstance, ServiceListOptions, ServiceListPageOptions, ServicePage, ServicePayload, ServiceResource, ServiceSolution }
