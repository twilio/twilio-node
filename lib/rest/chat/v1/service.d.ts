/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { ChannelList } from './service/channel';
import { ChannelListInstance } from './service/channel';
import { RoleList } from './service/role';
import { RoleListInstance } from './service/role';
import { SerializableClass } from '../../../interfaces';
import { UserList } from './service/user';
import { UserListInstance } from './service/user';

/**
 * Initialize the ServiceList
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: V1): ServiceListInstance;

/**
 * Options to pass to update
 *
 * @property consumptionReportInterval - DEPRECATED
 * @property defaultChannelCreatorRoleSid - The channel role assigned to a channel creator when they join a new channel
 * @property defaultChannelRoleSid - The channel role assigned to users when they are added to a channel
 * @property defaultServiceRoleSid - The service role assigned to users when they are added to the service
 * @property friendlyName - A string to describe the resource
 * @property limits.channelMembers - The maximum number of Members that can be added to Channels within this Service
 * @property limits.userChannels - The maximum number of Channels Users can be a Member of within this Service
 * @property notifications.addedToChannel.enabled - Whether to send a notification when a member is added to a channel
 * @property notifications.addedToChannel.template - The template to use to create the notification text displayed when a member is added to a channel
 * @property notifications.invitedToChannel.enabled - Whether to send a notification when a user is invited to a channel
 * @property notifications.invitedToChannel.template - The template to use to create the notification text displayed when a user is invited to a channel
 * @property notifications.newMessage.enabled - Whether to send a notification when a new message is added to a channel
 * @property notifications.newMessage.template - The template to use to create the notification text displayed when a new message is added to a channel
 * @property notifications.removedFromChannel.enabled - Whether to send a notification to a user when they are removed from a channel
 * @property notifications.removedFromChannel.template - The template to use to create the notification text displayed to a user when they are removed
 * @property postWebhookUrl - The URL for post-event webhooks
 * @property preWebhookUrl - The webhook URL for pre-event webhooks
 * @property reachabilityEnabled - Whether to enable the Reachability Indicator feature for this Service instance
 * @property readStatusEnabled - Whether to enable the Message Consumption Horizon feature
 * @property typingIndicatorTimeout - How long in seconds to wait before assuming the user is no longer typing
 * @property webhookFilters - The list of WebHook events that are enabled for this Service instance
 * @property webhookMethod - The HTTP method  to use for both PRE and POST webhooks
 * @property webhooks.onChannelAdd.method - The HTTP method to use when calling the webhooks.on_channel_add.url
 * @property webhooks.onChannelAdd.url - The URL of the webhook to call in response to the on_channel_add event
 * @property webhooks.onChannelAdded.method - The URL of the webhook to call in response to the on_channel_added event
 * @property webhooks.onChannelAdded.url - The URL of the webhook to call in response to the on_channel_added event
 * @property webhooks.onChannelDestroy.method - The HTTP method to use when calling the webhooks.on_channel_destroy.url
 * @property webhooks.onChannelDestroy.url - The URL of the webhook to call in response to the on_channel_destroy event
 * @property webhooks.onChannelDestroyed.method - The HTTP method to use when calling the webhooks.on_channel_destroyed.url
 * @property webhooks.onChannelDestroyed.url - The URL of the webhook to call in response to the on_channel_added event
 * @property webhooks.onChannelUpdate.method - The HTTP method to use when calling the webhooks.on_channel_update.url
 * @property webhooks.onChannelUpdate.url - The URL of the webhook to call in response to the on_channel_update event
 * @property webhooks.onChannelUpdated.method - The HTTP method to use when calling the webhooks.on_channel_updated.url
 * @property webhooks.onChannelUpdated.url - he URL of the webhook to call in response to the on_channel_updated event
 * @property webhooks.onMemberAdd.method - The HTTP method to use when calling the webhooks.on_member_add.url
 * @property webhooks.onMemberAdd.url - The URL of the webhook to call in response to the on_member_add event
 * @property webhooks.onMemberAdded.method - he HTTP method to use when calling the webhooks.on_channel_updated.url
 * @property webhooks.onMemberAdded.url - The URL of the webhook to call in response to the on_channel_updated event
 * @property webhooks.onMemberRemove.method - The HTTP method to use when calling the webhooks.on_member_remove.url
 * @property webhooks.onMemberRemove.url - The URL of the webhook to call in response to the on_member_remove event
 * @property webhooks.onMemberRemoved.method - The HTTP method to use when calling the webhooks.on_member_removed.url
 * @property webhooks.onMemberRemoved.url - The URL of the webhook to call in response to the on_member_removed event
 * @property webhooks.onMessageRemove.method - The HTTP method to use when calling the webhooks.on_message_remove.url
 * @property webhooks.onMessageRemove.url - The URL of the webhook to call in response to the on_message_remove event
 * @property webhooks.onMessageRemoved.method - The HTTP method to use when calling the webhooks.on_message_removed.url
 * @property webhooks.onMessageRemoved.url - The URL of the webhook to call in response to the on_message_removed event
 * @property webhooks.onMessageSend.method - The HTTP method to use when calling the webhooks.on_message_send.url
 * @property webhooks.onMessageSend.url - The URL of the webhook to call in response to the on_message_send event
 * @property webhooks.onMessageSent.method - The URL of the webhook to call in response to the on_message_sent event
 * @property webhooks.onMessageSent.url - The URL of the webhook to call in response to the on_message_sent event
 * @property webhooks.onMessageUpdate.method - The HTTP method to use when calling the webhooks.on_message_update.url
 * @property webhooks.onMessageUpdate.url - The URL of the webhook to call in response to the on_message_update event
 * @property webhooks.onMessageUpdated.method - The HTTP method to use when calling the webhooks.on_message_updated.url
 * @property webhooks.onMessageUpdated.url - The URL of the webhook to call in response to the on_message_updated event
 */
interface ServiceInstanceUpdateOptions {
  consumptionReportInterval?: number;
  defaultChannelCreatorRoleSid?: string;
  defaultChannelRoleSid?: string;
  defaultServiceRoleSid?: string;
  friendlyName?: string;
  limits?: {
    channelMembers?: number;
    userChannels?: number;
  };
  notifications?: {
    newMessage?: {
      enabled?: boolean;
      template?: string;
    };
    addedToChannel?: {
      enabled?: boolean;
      template?: string;
    };
    removedFromChannel?: {
      enabled?: boolean;
      template?: string;
    };
    invitedToChannel?: {
      enabled?: boolean;
      template?: string;
    };
  };
  postWebhookUrl?: string;
  preWebhookUrl?: string;
  reachabilityEnabled?: boolean;
  readStatusEnabled?: boolean;
  typingIndicatorTimeout?: number;
  webhookFilters?: string[];
  webhookMethod?: string;
  webhooks?: {
    onMessageSend?: {
      url?: string;
      method?: string;
    };
    onMessageUpdate?: {
      url?: string;
      method?: string;
    };
    onMessageRemove?: {
      url?: string;
      method?: string;
    };
    onChannelAdd?: {
      url?: string;
      method?: string;
    };
    onChannelDestroy?: {
      url?: string;
      method?: string;
    };
    onChannelUpdate?: {
      url?: string;
      method?: string;
    };
    onMemberAdd?: {
      url?: string;
      method?: string;
    };
    onMemberRemove?: {
      url?: string;
      method?: string;
    };
    onMessageSent?: {
      url?: string;
      method?: string;
    };
    onMessageUpdated?: {
      url?: string;
      method?: string;
    };
    onMessageRemoved?: {
      url?: string;
      method?: string;
    };
    onChannelAdded?: {
      url?: string;
      method?: string;
    };
    onChannelDestroyed?: {
      url?: string;
      method?: string;
    };
    onChannelUpdated?: {
      url?: string;
      method?: string;
    };
    onMemberAdded?: {
      url?: string;
      method?: string;
    };
    onMemberRemoved?: {
      url?: string;
      method?: string;
    };
  };
}

interface ServiceListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ServiceContext;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ServiceListInstanceCreateOptions, callback?: (error: Error | null, item: ServiceInstance) => any): Promise<ServiceInstance>;
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
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: ServiceListInstanceEachOptions, callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a service
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): ServiceContext;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ServiceListInstanceOptions, callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ServiceListInstancePageOptions, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - A string to describe the resource
 */
interface ServiceListInstanceCreateOptions {
  friendlyName: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface ServiceListInstanceEachOptions {
  callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface ServiceListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface ServiceListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceResource {
  account_sid: string;
  consumption_report_interval: number;
  date_created: Date;
  date_updated: Date;
  default_channel_creator_role_sid: string;
  default_channel_role_sid: string;
  default_service_role_sid: string;
  friendly_name: string;
  limits: string;
  links: string;
  notifications: string;
  post_webhook_url: string;
  pre_webhook_url: string;
  reachability_enabled: boolean;
  read_status_enabled: boolean;
  sid: string;
  typing_indicator_timeout: number;
  url: string;
  webhook_filters: string;
  webhook_method: string;
  webhooks: string;
}

interface ServiceSolution {
}


declare class ServiceContext {
  /**
   * Initialize the ServiceContext
   *
   * @param version - Version of the resource
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, sid: string);

  channels: ChannelListInstance;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): Promise<ServiceInstance>;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  roles: RoleListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): Promise<ServiceInstance>;
  users: UserListInstance;
}


declare class ServiceInstance extends SerializableClass {
  /**
   * Initialize the ServiceContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, payload: ServicePayload, sid: string);

  private _proxy: ServiceContext;
  accountSid: string;
  /**
   * Access the channels
   */
  channels(): ChannelListInstance;
  consumptionReportInterval: number;
  dateCreated: Date;
  dateUpdated: Date;
  defaultChannelCreatorRoleSid: string;
  defaultChannelRoleSid: string;
  defaultServiceRoleSid: string;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  friendlyName: string;
  limits: string;
  links: string;
  notifications: string;
  postWebhookUrl: string;
  preWebhookUrl: string;
  reachabilityEnabled: boolean;
  readStatusEnabled: boolean;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * Access the roles
   */
  roles(): RoleListInstance;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  typingIndicatorTimeout: number;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): void;
  url: string;
  /**
   * Access the users
   */
  users(): UserListInstance;
  webhookFilters: string;
  webhookMethod: string;
  webhooks: string;
}


declare class ServicePage extends Page<V1, ServicePayload, ServiceResource, ServiceInstance> {
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
  getInstance(payload: ServicePayload): ServiceInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ServiceContext, ServiceInstance, ServiceInstanceUpdateOptions, ServiceList, ServiceListInstance, ServiceListInstanceCreateOptions, ServiceListInstanceEachOptions, ServiceListInstanceOptions, ServiceListInstancePageOptions, ServicePage, ServicePayload, ServiceResource, ServiceSolution }
