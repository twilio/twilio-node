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
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { AddressConfigurationListInstance } from "./configuration/addressConfiguration";
import { WebhookListInstance } from "./configuration/webhook";


/**
 * Options to pass to create a ConfigurationInstance
 *
 * @property { string } [defaultChatServiceSid] The SID of the default [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) to use when creating a conversation.
 * @property { string } [defaultMessagingServiceSid] The SID of the default [Messaging Service](https://www.twilio.com/docs/sms/services/api) to use when creating a conversation.
 * @property { string } [defaultInactiveTimer] Default ISO8601 duration when conversation will be switched to &#x60;inactive&#x60; state. Minimum value for this timer is 1 minute.
 * @property { string } [defaultClosedTimer] Default ISO8601 duration when conversation will be switched to &#x60;closed&#x60; state. Minimum value for this timer is 10 minutes.
 */
export interface ConfigurationListInstanceCreateOptions {
  defaultChatServiceSid?: string;
  defaultMessagingServiceSid?: string;
  defaultInactiveTimer?: string;
  defaultClosedTimer?: string;
}

export interface ConfigurationListInstance {

  addressConfiguration: AddressConfigurationListInstance;
  webhooks: WebhookListInstance;


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

  _addressConfiguration?: AddressConfigurationListInstance;
  _webhooks?: WebhookListInstance;
}

export function ConfigurationListInstance(version: V1): ConfigurationListInstance {
  const instance = {} as ConfigurationListInstanceImpl;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Configuration`;

  Object.defineProperty(instance, "addressConfiguration", {
    get: function addressConfiguration() {
      if (!this._addressConfiguration) {
        this._addressConfiguration = AddressConfigurationListInstance(this._version);
      }
      return this._addressConfiguration;
    }
  });

  Object.defineProperty(instance, "webhooks", {
    get: function webhooks() {
      if (!this._webhooks) {
        this._webhooks = WebhookListInstance(this._version);
      }
      return this._webhooks;
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

    if (params.defaultChatServiceSid !== undefined) data['DefaultChatServiceSid'] = params.defaultChatServiceSid;
    if (params.defaultMessagingServiceSid !== undefined) data['DefaultMessagingServiceSid'] = params.defaultMessagingServiceSid;
    if (params.defaultInactiveTimer !== undefined) data['DefaultInactiveTimer'] = params.defaultInactiveTimer;
    if (params.defaultClosedTimer !== undefined) data['DefaultClosedTimer'] = params.defaultClosedTimer;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ConfigurationInstance(operationVersion, payload));
    

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
  account_sid?: string | null;
  default_chat_service_sid?: string | null;
  default_messaging_service_sid?: string | null;
  default_inactive_timer?: string | null;
  default_closed_timer?: string | null;
  url?: string | null;
  links?: object | null;
}

export class ConfigurationInstance {
  protected _solution: ConfigurationSolution;
  protected _context?: ConfigurationListInstance;

  constructor(protected _version: V1, payload: ConfigurationPayload) {
    this.accountSid = payload.account_sid;
    this.defaultChatServiceSid = payload.default_chat_service_sid;
    this.defaultMessagingServiceSid = payload.default_messaging_service_sid;
    this.defaultInactiveTimer = payload.default_inactive_timer;
    this.defaultClosedTimer = payload.default_closed_timer;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = {  };
  }

  /**
   * The SID of the Account responsible for this configuration.
   */
  accountSid?: string | null;
  /**
   * The SID of the default Conversation Service that every new conversation is associated with.
   */
  defaultChatServiceSid?: string | null;
  /**
   * The SID of the default Messaging Service that every new conversation is associated with.
   */
  defaultMessagingServiceSid?: string | null;
  /**
   * Default ISO8601 duration when conversation will be switched to `inactive` state.
   */
  defaultInactiveTimer?: string | null;
  /**
   * Default ISO8601 duration when conversation will be switched to `closed` state.
   */
  defaultClosedTimer?: string | null;
  /**
   * An absolute URL for this global configuration.
   */
  url?: string | null;
  /**
   * Absolute URLs to access the webhook and default service configurations.
   */
  links?: object | null;

  /**
   * Access the addressConfiguration.
   */
  addressConfiguration(): AddressConfigurationListInstance {
    return this._proxy.addressConfiguration;
  }

  /**
   * Access the webhooks.
   */
  webhooks(): WebhookListInstance {
    return this._proxy.webhooks;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      defaultChatServiceSid: this.defaultChatServiceSid, 
      defaultMessagingServiceSid: this.defaultMessagingServiceSid, 
      defaultInactiveTimer: this.defaultInactiveTimer, 
      defaultClosedTimer: this.defaultClosedTimer, 
      url: this.url, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface ConfigurationSolution {
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
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

