/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Ip_messaging
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");

import { RoleListInstance } from "./service/role";
import { UserListInstance } from "./service/user";
import { ChannelListInstance } from "./service/channel";



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
 * @property { boolean } [notificationsNewMessageEnabled] 
 * @property { string } [notificationsNewMessageTemplate] 
 * @property { boolean } [notificationsAddedToChannelEnabled] 
 * @property { string } [notificationsAddedToChannelTemplate] 
 * @property { boolean } [notificationsRemovedFromChannelEnabled] 
 * @property { string } [notificationsRemovedFromChannelTemplate] 
 * @property { boolean } [notificationsInvitedToChannelEnabled] 
 * @property { string } [notificationsInvitedToChannelTemplate] 
 * @property { string } [preWebhookUrl] 
 * @property { string } [postWebhookUrl] 
 * @property { string } [webhookMethod] 
 * @property { Array<string> } [webhookFilters] 
 * @property { string } [webhooksOnMessageSendUrl] 
 * @property { string } [webhooksOnMessageSendMethod] 
 * @property { string } [webhooksOnMessageUpdateUrl] 
 * @property { string } [webhooksOnMessageUpdateMethod] 
 * @property { string } [webhooksOnMessageRemoveUrl] 
 * @property { string } [webhooksOnMessageRemoveMethod] 
 * @property { string } [webhooksOnChannelAddUrl] 
 * @property { string } [webhooksOnChannelAddMethod] 
 * @property { string } [webhooksOnChannelDestroyUrl] 
 * @property { string } [webhooksOnChannelDestroyMethod] 
 * @property { string } [webhooksOnChannelUpdateUrl] 
 * @property { string } [webhooksOnChannelUpdateMethod] 
 * @property { string } [webhooksOnMemberAddUrl] 
 * @property { string } [webhooksOnMemberAddMethod] 
 * @property { string } [webhooksOnMemberRemoveUrl] 
 * @property { string } [webhooksOnMemberRemoveMethod] 
 * @property { string } [webhooksOnMessageSentUrl] 
 * @property { string } [webhooksOnMessageSentMethod] 
 * @property { string } [webhooksOnMessageUpdatedUrl] 
 * @property { string } [webhooksOnMessageUpdatedMethod] 
 * @property { string } [webhooksOnMessageRemovedUrl] 
 * @property { string } [webhooksOnMessageRemovedMethod] 
 * @property { string } [webhooksOnChannelAddedUrl] 
 * @property { string } [webhooksOnChannelAddedMethod] 
 * @property { string } [webhooksOnChannelDestroyedUrl] 
 * @property { string } [webhooksOnChannelDestroyedMethod] 
 * @property { string } [webhooksOnChannelUpdatedUrl] 
 * @property { string } [webhooksOnChannelUpdatedMethod] 
 * @property { string } [webhooksOnMemberAddedUrl] 
 * @property { string } [webhooksOnMemberAddedMethod] 
 * @property { string } [webhooksOnMemberRemovedUrl] 
 * @property { string } [webhooksOnMemberRemovedMethod] 
 * @property { number } [limitsChannelMembers] 
 * @property { number } [limitsUserChannels] 
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
  notificationsNewMessageEnabled?: boolean;
  notificationsNewMessageTemplate?: string;
  notificationsAddedToChannelEnabled?: boolean;
  notificationsAddedToChannelTemplate?: string;
  notificationsRemovedFromChannelEnabled?: boolean;
  notificationsRemovedFromChannelTemplate?: string;
  notificationsInvitedToChannelEnabled?: boolean;
  notificationsInvitedToChannelTemplate?: string;
  preWebhookUrl?: string;
  postWebhookUrl?: string;
  webhookMethod?: string;
  webhookFilters?: Array<string>;
  webhooksOnMessageSendUrl?: string;
  webhooksOnMessageSendMethod?: string;
  webhooksOnMessageUpdateUrl?: string;
  webhooksOnMessageUpdateMethod?: string;
  webhooksOnMessageRemoveUrl?: string;
  webhooksOnMessageRemoveMethod?: string;
  webhooksOnChannelAddUrl?: string;
  webhooksOnChannelAddMethod?: string;
  webhooksOnChannelDestroyUrl?: string;
  webhooksOnChannelDestroyMethod?: string;
  webhooksOnChannelUpdateUrl?: string;
  webhooksOnChannelUpdateMethod?: string;
  webhooksOnMemberAddUrl?: string;
  webhooksOnMemberAddMethod?: string;
  webhooksOnMemberRemoveUrl?: string;
  webhooksOnMemberRemoveMethod?: string;
  webhooksOnMessageSentUrl?: string;
  webhooksOnMessageSentMethod?: string;
  webhooksOnMessageUpdatedUrl?: string;
  webhooksOnMessageUpdatedMethod?: string;
  webhooksOnMessageRemovedUrl?: string;
  webhooksOnMessageRemovedMethod?: string;
  webhooksOnChannelAddedUrl?: string;
  webhooksOnChannelAddedMethod?: string;
  webhooksOnChannelDestroyedUrl?: string;
  webhooksOnChannelDestroyedMethod?: string;
  webhooksOnChannelUpdatedUrl?: string;
  webhooksOnChannelUpdatedMethod?: string;
  webhooksOnMemberAddedUrl?: string;
  webhooksOnMemberAddedMethod?: string;
  webhooksOnMemberRemovedUrl?: string;
  webhooksOnMemberRemovedMethod?: string;
  limitsChannelMembers?: number;
  limitsUserChannels?: number;
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
  create(params: any, callback?: any): Promise<ServiceInstance>



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

interface ServiceListInstanceImpl extends ServiceListInstance {}
class ServiceListInstanceImpl implements ServiceListInstance {
  _version?: V1;
  _solution?: ServiceSolution;
  _uri?: string;

}

export function ServiceListInstance(version: V1): ServiceListInstance {
  const instance = ((sid) => instance.get(sid)) as ServiceListInstanceImpl;

  instance.get = function get(sid): ServiceContext {
    return new ServiceContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Services`;

  instance.create = function create(params: any, callback?: any): Promise<ServiceInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.friendlyName === null || params.friendlyName === undefined) {
      throw new Error('Required parameter "params.friendlyName" missing.');
    }

    const data: any = {};

    data['FriendlyName'] = params.friendlyName;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ServiceInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<ServicePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ServicePage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<ServicePage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new ServicePage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }


  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}


export interface ServiceContext {

  roles: RoleListInstance;
  users: UserListInstance;
  channels: ChannelListInstance;

  /**
   * Remove a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  fetch(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>


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
  update(params?: any, callback?: any): Promise<ServiceInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ServiceContextSolution {
  sid?: string;
}

export class ServiceContextImpl implements ServiceContext {
  protected _solution: ServiceContextSolution;
  protected _uri: string;

  protected _roles?: RoleListInstance;
  protected _users?: UserListInstance;
  protected _channels?: ChannelListInstance;

  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/Services/${sid}`;
  }

  get roles(): RoleListInstance {
    this._roles = this._roles || RoleListInstance(this._version, this._solution.sid);
    return this._roles;
  }

  get users(): UserListInstance {
    this._users = this._users || UserListInstance(this._version, this._solution.sid);
    return this._users;
  }

  get channels(): ChannelListInstance {
    this._channels = this._channels || ChannelListInstance(this._version, this._solution.sid);
    return this._channels;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<ServiceInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new ServiceInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<ServiceInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.defaultServiceRoleSid !== undefined) data['DefaultServiceRoleSid'] = params.defaultServiceRoleSid;
    if (params.defaultChannelRoleSid !== undefined) data['DefaultChannelRoleSid'] = params.defaultChannelRoleSid;
    if (params.defaultChannelCreatorRoleSid !== undefined) data['DefaultChannelCreatorRoleSid'] = params.defaultChannelCreatorRoleSid;
    if (params.readStatusEnabled !== undefined) data['ReadStatusEnabled'] = serialize.bool(params.readStatusEnabled);
    if (params.reachabilityEnabled !== undefined) data['ReachabilityEnabled'] = serialize.bool(params.reachabilityEnabled);
    if (params.typingIndicatorTimeout !== undefined) data['TypingIndicatorTimeout'] = params.typingIndicatorTimeout;
    if (params.consumptionReportInterval !== undefined) data['ConsumptionReportInterval'] = params.consumptionReportInterval;
    if (params.notificationsNewMessageEnabled !== undefined) data['Notifications.NewMessage.Enabled'] = serialize.bool(params.notificationsNewMessageEnabled);
    if (params.notificationsNewMessageTemplate !== undefined) data['Notifications.NewMessage.Template'] = params.notificationsNewMessageTemplate;
    if (params.notificationsAddedToChannelEnabled !== undefined) data['Notifications.AddedToChannel.Enabled'] = serialize.bool(params.notificationsAddedToChannelEnabled);
    if (params.notificationsAddedToChannelTemplate !== undefined) data['Notifications.AddedToChannel.Template'] = params.notificationsAddedToChannelTemplate;
    if (params.notificationsRemovedFromChannelEnabled !== undefined) data['Notifications.RemovedFromChannel.Enabled'] = serialize.bool(params.notificationsRemovedFromChannelEnabled);
    if (params.notificationsRemovedFromChannelTemplate !== undefined) data['Notifications.RemovedFromChannel.Template'] = params.notificationsRemovedFromChannelTemplate;
    if (params.notificationsInvitedToChannelEnabled !== undefined) data['Notifications.InvitedToChannel.Enabled'] = serialize.bool(params.notificationsInvitedToChannelEnabled);
    if (params.notificationsInvitedToChannelTemplate !== undefined) data['Notifications.InvitedToChannel.Template'] = params.notificationsInvitedToChannelTemplate;
    if (params.preWebhookUrl !== undefined) data['PreWebhookUrl'] = params.preWebhookUrl;
    if (params.postWebhookUrl !== undefined) data['PostWebhookUrl'] = params.postWebhookUrl;
    if (params.webhookMethod !== undefined) data['WebhookMethod'] = params.webhookMethod;
    if (params.webhookFilters !== undefined) data['WebhookFilters'] = serialize.map(params.webhookFilters, ((e) => e));
    if (params.webhooksOnMessageSendUrl !== undefined) data['Webhooks.OnMessageSend.Url'] = params.webhooksOnMessageSendUrl;
    if (params.webhooksOnMessageSendMethod !== undefined) data['Webhooks.OnMessageSend.Method'] = params.webhooksOnMessageSendMethod;
    if (params.webhooksOnMessageUpdateUrl !== undefined) data['Webhooks.OnMessageUpdate.Url'] = params.webhooksOnMessageUpdateUrl;
    if (params.webhooksOnMessageUpdateMethod !== undefined) data['Webhooks.OnMessageUpdate.Method'] = params.webhooksOnMessageUpdateMethod;
    if (params.webhooksOnMessageRemoveUrl !== undefined) data['Webhooks.OnMessageRemove.Url'] = params.webhooksOnMessageRemoveUrl;
    if (params.webhooksOnMessageRemoveMethod !== undefined) data['Webhooks.OnMessageRemove.Method'] = params.webhooksOnMessageRemoveMethod;
    if (params.webhooksOnChannelAddUrl !== undefined) data['Webhooks.OnChannelAdd.Url'] = params.webhooksOnChannelAddUrl;
    if (params.webhooksOnChannelAddMethod !== undefined) data['Webhooks.OnChannelAdd.Method'] = params.webhooksOnChannelAddMethod;
    if (params.webhooksOnChannelDestroyUrl !== undefined) data['Webhooks.OnChannelDestroy.Url'] = params.webhooksOnChannelDestroyUrl;
    if (params.webhooksOnChannelDestroyMethod !== undefined) data['Webhooks.OnChannelDestroy.Method'] = params.webhooksOnChannelDestroyMethod;
    if (params.webhooksOnChannelUpdateUrl !== undefined) data['Webhooks.OnChannelUpdate.Url'] = params.webhooksOnChannelUpdateUrl;
    if (params.webhooksOnChannelUpdateMethod !== undefined) data['Webhooks.OnChannelUpdate.Method'] = params.webhooksOnChannelUpdateMethod;
    if (params.webhooksOnMemberAddUrl !== undefined) data['Webhooks.OnMemberAdd.Url'] = params.webhooksOnMemberAddUrl;
    if (params.webhooksOnMemberAddMethod !== undefined) data['Webhooks.OnMemberAdd.Method'] = params.webhooksOnMemberAddMethod;
    if (params.webhooksOnMemberRemoveUrl !== undefined) data['Webhooks.OnMemberRemove.Url'] = params.webhooksOnMemberRemoveUrl;
    if (params.webhooksOnMemberRemoveMethod !== undefined) data['Webhooks.OnMemberRemove.Method'] = params.webhooksOnMemberRemoveMethod;
    if (params.webhooksOnMessageSentUrl !== undefined) data['Webhooks.OnMessageSent.Url'] = params.webhooksOnMessageSentUrl;
    if (params.webhooksOnMessageSentMethod !== undefined) data['Webhooks.OnMessageSent.Method'] = params.webhooksOnMessageSentMethod;
    if (params.webhooksOnMessageUpdatedUrl !== undefined) data['Webhooks.OnMessageUpdated.Url'] = params.webhooksOnMessageUpdatedUrl;
    if (params.webhooksOnMessageUpdatedMethod !== undefined) data['Webhooks.OnMessageUpdated.Method'] = params.webhooksOnMessageUpdatedMethod;
    if (params.webhooksOnMessageRemovedUrl !== undefined) data['Webhooks.OnMessageRemoved.Url'] = params.webhooksOnMessageRemovedUrl;
    if (params.webhooksOnMessageRemovedMethod !== undefined) data['Webhooks.OnMessageRemoved.Method'] = params.webhooksOnMessageRemovedMethod;
    if (params.webhooksOnChannelAddedUrl !== undefined) data['Webhooks.OnChannelAdded.Url'] = params.webhooksOnChannelAddedUrl;
    if (params.webhooksOnChannelAddedMethod !== undefined) data['Webhooks.OnChannelAdded.Method'] = params.webhooksOnChannelAddedMethod;
    if (params.webhooksOnChannelDestroyedUrl !== undefined) data['Webhooks.OnChannelDestroyed.Url'] = params.webhooksOnChannelDestroyedUrl;
    if (params.webhooksOnChannelDestroyedMethod !== undefined) data['Webhooks.OnChannelDestroyed.Method'] = params.webhooksOnChannelDestroyedMethod;
    if (params.webhooksOnChannelUpdatedUrl !== undefined) data['Webhooks.OnChannelUpdated.Url'] = params.webhooksOnChannelUpdatedUrl;
    if (params.webhooksOnChannelUpdatedMethod !== undefined) data['Webhooks.OnChannelUpdated.Method'] = params.webhooksOnChannelUpdatedMethod;
    if (params.webhooksOnMemberAddedUrl !== undefined) data['Webhooks.OnMemberAdded.Url'] = params.webhooksOnMemberAddedUrl;
    if (params.webhooksOnMemberAddedMethod !== undefined) data['Webhooks.OnMemberAdded.Method'] = params.webhooksOnMemberAddedMethod;
    if (params.webhooksOnMemberRemovedUrl !== undefined) data['Webhooks.OnMemberRemoved.Url'] = params.webhooksOnMemberRemovedUrl;
    if (params.webhooksOnMemberRemovedMethod !== undefined) data['Webhooks.OnMemberRemoved.Method'] = params.webhooksOnMemberRemovedMethod;
    if (params.limitsChannelMembers !== undefined) data['Limits.ChannelMembers'] = params.limitsChannelMembers;
    if (params.limitsUserChannels !== undefined) data['Limits.UserChannels'] = params.limitsUserChannels;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ServiceInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
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

export class ServiceInstance {
  protected _solution: ServiceContextSolution;
  protected _context?: ServiceContext;

  constructor(protected _version: V1, payload: ServicePayload, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.defaultServiceRoleSid = payload.default_service_role_sid;
    this.defaultChannelRoleSid = payload.default_channel_role_sid;
    this.defaultChannelCreatorRoleSid = payload.default_channel_creator_role_sid;
    this.readStatusEnabled = payload.read_status_enabled;
    this.reachabilityEnabled = payload.reachability_enabled;
    this.typingIndicatorTimeout = deserialize.integer(payload.typing_indicator_timeout);
    this.consumptionReportInterval = deserialize.integer(payload.consumption_report_interval);
    this.limits = payload.limits;
    this.webhooks = payload.webhooks;
    this.preWebhookUrl = payload.pre_webhook_url;
    this.postWebhookUrl = payload.post_webhook_url;
    this.webhookMethod = payload.webhook_method;
    this.webhookFilters = payload.webhook_filters;
    this.notifications = payload.notifications;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

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
  webhooks?: any | null;
  preWebhookUrl?: string | null;
  postWebhookUrl?: string | null;
  webhookMethod?: string | null;
  webhookFilters?: Array<string> | null;
  notifications?: any | null;
  url?: string | null;
  links?: object | null;

  private get _proxy(): ServiceContext {
    this._context = this._context || new ServiceContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  fetch(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>
     {
    return this._proxy.fetch(callback);
  }

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
  update(params?: any, callback?: any): Promise<ServiceInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the roles.
   */
  roles(): RoleListInstance {
    return this._proxy.roles;
  }

  /**
   * Access the users.
   */
  users(): UserListInstance {
    return this._proxy.users;
  }

  /**
   * Access the channels.
   */
  channels(): ChannelListInstance {
    return this._proxy.channels;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      accountSid: this.accountSid, 
      friendlyName: this.friendlyName, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      defaultServiceRoleSid: this.defaultServiceRoleSid, 
      defaultChannelRoleSid: this.defaultChannelRoleSid, 
      defaultChannelCreatorRoleSid: this.defaultChannelCreatorRoleSid, 
      readStatusEnabled: this.readStatusEnabled, 
      reachabilityEnabled: this.reachabilityEnabled, 
      typingIndicatorTimeout: this.typingIndicatorTimeout, 
      consumptionReportInterval: this.consumptionReportInterval, 
      limits: this.limits, 
      webhooks: this.webhooks, 
      preWebhookUrl: this.preWebhookUrl, 
      postWebhookUrl: this.postWebhookUrl, 
      webhookMethod: this.webhookMethod, 
      webhookFilters: this.webhookFilters, 
      notifications: this.notifications, 
      url: this.url, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class ServicePage extends Page<V1, ServicePayload, ServiceResource, ServiceInstance> {
/**
* Initialize the ServicePage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: ServiceSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of ServiceInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: ServicePayload): ServiceInstance {
    return new ServiceInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }


