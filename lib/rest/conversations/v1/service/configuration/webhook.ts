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
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");



type ServiceWebhookConfigurationMethod = 'GET'|'POST';


/**
 * Options to pass to update a WebhookInstance
 *
 * @property { string } [preWebhookUrl] The absolute url the pre-event webhook request should be sent to.
 * @property { string } [postWebhookUrl] The absolute url the post-event webhook request should be sent to.
 * @property { Array<string> } [filters] The list of events that your configured webhook targets will receive. Events not configured here will not fire. Possible values are &#x60;onParticipantAdd&#x60;, &#x60;onParticipantAdded&#x60;, &#x60;onDeliveryUpdated&#x60;, &#x60;onConversationUpdated&#x60;, &#x60;onConversationRemove&#x60;, &#x60;onParticipantRemove&#x60;, &#x60;onConversationUpdate&#x60;, &#x60;onMessageAdd&#x60;, &#x60;onMessageRemoved&#x60;, &#x60;onParticipantUpdated&#x60;, &#x60;onConversationAdded&#x60;, &#x60;onMessageAdded&#x60;, &#x60;onConversationAdd&#x60;, &#x60;onConversationRemoved&#x60;, &#x60;onParticipantUpdate&#x60;, &#x60;onMessageRemove&#x60;, &#x60;onMessageUpdated&#x60;, &#x60;onParticipantRemoved&#x60;, &#x60;onMessageUpdate&#x60; or &#x60;onConversationStateUpdated&#x60;.
 * @property { string } [method] The HTTP method to be used when sending a webhook request. One of &#x60;GET&#x60; or &#x60;POST&#x60;.
 */
export interface WebhookContextUpdateOptions {
  preWebhookUrl?: string;
  postWebhookUrl?: string;
  filters?: Array<string>;
  method?: string;
}

export interface WebhookContext {


  /**
   * Fetch a WebhookInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebhookInstance
   */
  fetch(callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>


  /**
   * Update a WebhookInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebhookInstance
   */
  update(callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
  /**
   * Update a WebhookInstance
   *
   * @param { WebhookContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebhookInstance
   */
  update(params: WebhookContextUpdateOptions, callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
  update(params?: any, callback?: any): Promise<WebhookInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WebhookContextSolution {
  chatServiceSid?: string;
}

export class WebhookContextImpl implements WebhookContext {
  protected _solution: WebhookContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, chatServiceSid: string) {
    this._solution = { chatServiceSid };
    this._uri = `/Services/${chatServiceSid}/Configuration/Webhooks`;
  }

  fetch(callback?: any): Promise<WebhookInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new WebhookInstance(operationVersion, payload, this._solution.chatServiceSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<WebhookInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.preWebhookUrl !== undefined) data['PreWebhookUrl'] = params.preWebhookUrl;
    if (params.postWebhookUrl !== undefined) data['PostWebhookUrl'] = params.postWebhookUrl;
    if (params.filters !== undefined) data['Filters'] = serialize.map(params.filters, ((e) => e));
    if (params.method !== undefined) data['Method'] = params.method;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new WebhookInstance(operationVersion, payload, this._solution.chatServiceSid));
    

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

interface WebhookPayload extends WebhookResource{
}

interface WebhookResource {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  pre_webhook_url?: string | null;
  post_webhook_url?: string | null;
  filters?: Array<string> | null;
  method?: ServiceWebhookConfigurationMethod;
  url?: string | null;
}

export class WebhookInstance {
  protected _solution: WebhookContextSolution;
  protected _context?: WebhookContext;

  constructor(protected _version: V1, payload: WebhookPayload, chatServiceSid?: string) {
    this.accountSid = payload.account_sid;
    this.chatServiceSid = payload.chat_service_sid;
    this.preWebhookUrl = payload.pre_webhook_url;
    this.postWebhookUrl = payload.post_webhook_url;
    this.filters = payload.filters;
    this.method = payload.method;
    this.url = payload.url;

    this._solution = { chatServiceSid: chatServiceSid || this.chatServiceSid };
  }

  /**
   * The unique ID of the Account responsible for this service.
   */
  accountSid?: string | null;
  /**
   * The unique ID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation belongs to.
   */
  chatServiceSid?: string | null;
  /**
   * The absolute url the pre-event webhook request should be sent to.
   */
  preWebhookUrl?: string | null;
  /**
   * The absolute url the post-event webhook request should be sent to.
   */
  postWebhookUrl?: string | null;
  /**
   * The list of events that your configured webhook targets will receive. Events not configured here will not fire.
   */
  filters?: Array<string> | null;
  method?: ServiceWebhookConfigurationMethod;
  /**
   * An absolute URL for this webhook.
   */
  url?: string | null;

  private get _proxy(): WebhookContext {
    this._context = this._context || new WebhookContextImpl(this._version, this._solution.chatServiceSid);
    return this._context;
  }

  /**
   * Fetch a WebhookInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebhookInstance
   */
  fetch(callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a WebhookInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebhookInstance
   */
  update(callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
  /**
   * Update a WebhookInstance
   *
   * @param { WebhookContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebhookInstance
   */
  update(params: WebhookContextUpdateOptions, callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
  update(params?: any, callback?: any): Promise<WebhookInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      chatServiceSid: this.chatServiceSid, 
      preWebhookUrl: this.preWebhookUrl, 
      postWebhookUrl: this.postWebhookUrl, 
      filters: this.filters, 
      method: this.method, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface WebhookListInstance {
  (): WebhookContext;
  get(): WebhookContext;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface Solution {
  chatServiceSid?: string;
}

interface WebhookListInstanceImpl extends WebhookListInstance {}
class WebhookListInstanceImpl implements WebhookListInstance {
  _version?: V1;
  _solution?: Solution;
  _uri?: string;

}

export function WebhookListInstance(version: V1, chatServiceSid: string): WebhookListInstance {
  const instance = (() => instance.get()) as WebhookListInstanceImpl;

  instance.get = function get(): WebhookContext {
    return new WebhookContextImpl(version, chatServiceSid);
  }

  instance._version = version;
  instance._solution = { chatServiceSid };
  instance._uri = `/Services/${chatServiceSid}/Configuration/Webhooks`;

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}



