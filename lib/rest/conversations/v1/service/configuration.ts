/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Conversations
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { WebhookListInstance } from "./configuration/webhook";
import { NotificationListInstance } from "./configuration/notification";


/**
 * Options to pass to create a ConfigurationInstance
 *
 * @property { string } [defaultConversationCreatorRoleSid] The conversation-level role assigned to a conversation creator when they join a new conversation. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
 * @property { string } [defaultConversationRoleSid] The conversation-level role assigned to users when they are added to a conversation. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
 * @property { string } [defaultChatServiceRoleSid] The service-level role assigned to users when they are added to the service. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
 * @property { boolean } [reachabilityEnabled] Whether the [Reachability Indicator](https://www.twilio.com/docs/chat/reachability-indicator) is enabled for this Conversations Service. The default is &#x60;false&#x60;.
 */
export interface ConfigurationListInstanceCreateOptions {
  defaultConversationCreatorRoleSid?: string;
  defaultConversationRoleSid?: string;
  defaultChatServiceRoleSid?: string;
  reachabilityEnabled?: boolean;
}

export interface ConfigurationListInstance {

  webhooks: WebhookListInstance;
  notifications: NotificationListInstance;


  /**
   * Streams ConfigurationInstance records from the API.
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
  each(callback?: (item: ConfigurationInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams ConfigurationInstance records from the API.
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
   * @param { ConfigurationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: ConfigurationListInstanceEachOptions, callback?: (item: ConfigurationInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ConfigurationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: ConfigurationPage) => any): Promise<ConfigurationPage>;
  /**
   * Retrieve a single target page of ConfigurationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ConfigurationPage) => any): Promise<ConfigurationPage>;
  getPage(params?: any, callback?: any): Promise<ConfigurationPage>;
  /**
   * Lists ConfigurationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ConfigurationInstance[]) => any): Promise<ConfigurationInstance[]>;
  /**
   * Lists ConfigurationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConfigurationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: ConfigurationListInstanceOptions, callback?: (error: Error | null, items: ConfigurationInstance[]) => any): Promise<ConfigurationInstance[]>;
  list(params?: any, callback?: any): Promise<ConfigurationInstance[]>;
  /**
   * Retrieve a single page of ConfigurationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ConfigurationPage) => any): Promise<ConfigurationPage>;
  /**
   * Retrieve a single page of ConfigurationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConfigurationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: ConfigurationListInstancePageOptions, callback?: (error: Error | null, items: ConfigurationPage) => any): Promise<ConfigurationPage>;
  page(params?: any, callback?: any): Promise<ConfigurationPage>;

  /**
   * Create a ConfigurationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConfigurationInstance
   */
  create(callback?: (error: Error | null, item?: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  /**
   * Create a ConfigurationInstance
   *
   * @param { ConfigurationListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConfigurationInstance
   */
  create(params: ConfigurationListInstanceCreateOptions, callback?: (error: Error | null, item?: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  create(params?: any, callback?: any): Promise<ConfigurationInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface ConfigurationListInstanceImpl extends ConfigurationListInstance {}
class ConfigurationListInstanceImpl implements ConfigurationListInstance {
  _version?: V1;
  _solution?: ConfigurationSolution;
  _uri?: string;

  _webhooks?: WebhookListInstance;
  _notifications?: NotificationListInstance;
}

export function ConfigurationListInstance(version: V1, chatServiceSid: string): ConfigurationListInstance {
  const instance = {} as ConfigurationListInstanceImpl;

  instance._version = version;
  instance._solution = { chatServiceSid };
  instance._uri = `/Services/${chatServiceSid}/Configuration`;

  Object.defineProperty(instance, "webhooks", {
    get: function webhooks() {
      if (!this._webhooks) {
        this._webhooks = WebhookListInstance(this._version, this._solution.chatServiceSid);
      }
      return this._webhooks;
    }
  });

  Object.defineProperty(instance, "notifications", {
    get: function notifications() {
      if (!this._notifications) {
        this._notifications = NotificationListInstance(this._version, this._solution.chatServiceSid);
      }
      return this._notifications;
    }
  });

  instance.page = function page(callback?: any): Promise<ConfigurationPage> {

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new ConfigurationPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<ConfigurationPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new ConfigurationPage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }



  instance.create = function create(params?: any, callback?: any): Promise<ConfigurationInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.defaultConversationCreatorRoleSid !== undefined) data['DefaultConversationCreatorRoleSid'] = params.defaultConversationCreatorRoleSid;
    if (params.defaultConversationRoleSid !== undefined) data['DefaultConversationRoleSid'] = params.defaultConversationRoleSid;
    if (params.defaultChatServiceRoleSid !== undefined) data['DefaultChatServiceRoleSid'] = params.defaultChatServiceRoleSid;
    if (params.reachabilityEnabled !== undefined) data['ReachabilityEnabled'] = serialize.bool(params.reachabilityEnabled);

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ConfigurationInstance(operationVersion, payload, this._solution.chatServiceSid));
    

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

interface ConfigurationPayload extends ConfigurationResource, Page.TwilioResponsePayload {
}

interface ConfigurationResource {
  chat_service_sid?: string | null;
  default_conversation_creator_role_sid?: string | null;
  default_conversation_role_sid?: string | null;
  default_chat_service_role_sid?: string | null;
  url?: string | null;
  links?: object | null;
  reachability_enabled?: boolean | null;
}

export class ConfigurationInstance {
  protected _solution: ConfigurationSolution;
  protected _context?: ConfigurationListInstance;

  constructor(protected _version: V1, payload: ConfigurationPayload, chatServiceSid?: string) {
    this.chatServiceSid = payload.chat_service_sid;
    this.defaultConversationCreatorRoleSid = payload.default_conversation_creator_role_sid;
    this.defaultConversationRoleSid = payload.default_conversation_role_sid;
    this.defaultChatServiceRoleSid = payload.default_chat_service_role_sid;
    this.url = payload.url;
    this.links = payload.links;
    this.reachabilityEnabled = payload.reachability_enabled;

    this._solution = { chatServiceSid: chatServiceSid || this.chatServiceSid };
  }

  /**
   * The unique string that identifies the resource
   */
  chatServiceSid?: string | null;
  /**
   * The role assigned to a conversation creator user when they join a new conversation
   */
  defaultConversationCreatorRoleSid?: string | null;
  /**
   * The role assigned to users when they are added to a conversation
   */
  defaultConversationRoleSid?: string | null;
  /**
   * The service role assigned to users when they are added to the service
   */
  defaultChatServiceRoleSid?: string | null;
  /**
   * An absolute URL for this service configuration.
   */
  url?: string | null;
  /**
   * Absolute URL to access the push notifications configuration of this service.
   */
  links?: object | null;
  /**
   * Whether the Reachability Indicator feature is enabled for this Conversations Service
   */
  reachabilityEnabled?: boolean | null;

  /**
   * Access the webhooks.
   */
  webhooks(): WebhookListInstance {
    return this._proxy.webhooks;
  }

  /**
   * Access the notifications.
   */
  notifications(): NotificationListInstance {
    return this._proxy.notifications;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      chatServiceSid: this.chatServiceSid, 
      defaultConversationCreatorRoleSid: this.defaultConversationCreatorRoleSid, 
      defaultConversationRoleSid: this.defaultConversationRoleSid, 
      defaultChatServiceRoleSid: this.defaultChatServiceRoleSid, 
      url: this.url, 
      links: this.links, 
      reachabilityEnabled: this.reachabilityEnabled
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface ConfigurationSolution {
  chatServiceSid?: string;
}

export class ConfigurationPage extends Page<V1, ConfigurationPayload, ConfigurationResource, ConfigurationInstance> {
  /**
   * Initialize the ConfigurationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ConfigurationSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ConfigurationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ConfigurationPayload): ConfigurationInstance {
    return new ConfigurationInstance(
      this._version,
      payload,
      this._solution.chatServiceSid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

