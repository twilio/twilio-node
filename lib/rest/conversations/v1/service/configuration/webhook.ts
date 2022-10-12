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
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");


/**
 * Options to pass to create a WebhookInstance
 *
 * @property { string } [preWebhookUrl] The absolute url the pre-event webhook request should be sent to.
 * @property { string } [postWebhookUrl] The absolute url the post-event webhook request should be sent to.
 * @property { Array<string> } [filters] The list of events that your configured webhook targets will receive. Events not configured here will not fire. Possible values are &#x60;onParticipantAdd&#x60;, &#x60;onParticipantAdded&#x60;, &#x60;onDeliveryUpdated&#x60;, &#x60;onConversationUpdated&#x60;, &#x60;onConversationRemove&#x60;, &#x60;onParticipantRemove&#x60;, &#x60;onConversationUpdate&#x60;, &#x60;onMessageAdd&#x60;, &#x60;onMessageRemoved&#x60;, &#x60;onParticipantUpdated&#x60;, &#x60;onConversationAdded&#x60;, &#x60;onMessageAdded&#x60;, &#x60;onConversationAdd&#x60;, &#x60;onConversationRemoved&#x60;, &#x60;onParticipantUpdate&#x60;, &#x60;onMessageRemove&#x60;, &#x60;onMessageUpdated&#x60;, &#x60;onParticipantRemoved&#x60;, &#x60;onMessageUpdate&#x60; or &#x60;onConversationStateUpdated&#x60;.
 * @property { string } [method] The HTTP method to be used when sending a webhook request. One of &#x60;GET&#x60; or &#x60;POST&#x60;.
 */
export interface WebhookListInstanceCreateOptions {
  preWebhookUrl?: string;
  postWebhookUrl?: string;
  filters?: Array<string>;
  method?: string;
}

export interface WebhookListInstance {



  /**
   * Streams WebhookInstance records from the API.
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
  each(callback?: (item: WebhookInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams WebhookInstance records from the API.
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
   * @param { WebhookListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: WebhookListInstanceEachOptions, callback?: (item: WebhookInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of WebhookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: WebhookPage) => any): Promise<WebhookPage>;
  /**
   * Retrieve a single target page of WebhookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: WebhookPage) => any): Promise<WebhookPage>;
  getPage(params?: any, callback?: any): Promise<WebhookPage>;
  /**
   * Lists WebhookInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: WebhookInstance[]) => any): Promise<WebhookInstance[]>;
  /**
   * Lists WebhookInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WebhookListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: WebhookListInstanceOptions, callback?: (error: Error | null, items: WebhookInstance[]) => any): Promise<WebhookInstance[]>;
  list(params?: any, callback?: any): Promise<WebhookInstance[]>;
  /**
   * Retrieve a single page of WebhookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: WebhookPage) => any): Promise<WebhookPage>;
  /**
   * Retrieve a single page of WebhookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WebhookListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: WebhookListInstancePageOptions, callback?: (error: Error | null, items: WebhookPage) => any): Promise<WebhookPage>;
  page(params?: any, callback?: any): Promise<WebhookPage>;

  /**
   * Create a WebhookInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebhookInstance
   */
  create(callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
  /**
   * Create a WebhookInstance
   *
   * @param { WebhookListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebhookInstance
   */
  create(params: WebhookListInstanceCreateOptions, callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
  create(params?: any, callback?: any): Promise<WebhookInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface WebhookListInstanceImpl extends WebhookListInstance {}
class WebhookListInstanceImpl implements WebhookListInstance {
  _version?: V1;
  _solution?: WebhookSolution;
  _uri?: string;

}

export function WebhookListInstance(version: V1, chatServiceSid: string): WebhookListInstance {
  const instance = {} as WebhookListInstanceImpl;

  instance._version = version;
  instance._solution = { chatServiceSid };
  instance._uri = `/Services/${chatServiceSid}/Configuration/Webhooks`;

  instance.page = function page(callback?: any): Promise<WebhookPage> {

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new WebhookPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<WebhookPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new WebhookPage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }



  instance.create = function create(params?: any, callback?: any): Promise<WebhookInstance> {
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

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new WebhookInstance(operationVersion, payload, this._solution.chatServiceSid));
    

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

interface WebhookPayload extends WebhookResource, Page.TwilioResponsePayload {
}

interface WebhookResource {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  pre_webhook_url?: string | null;
  post_webhook_url?: string | null;
  filters?: Array<string> | null;
  method?: object;
  url?: string | null;
}

export class WebhookInstance {
  protected _solution: WebhookSolution;
  protected _context?: WebhookListInstance;

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
  method?: object;
  /**
   * An absolute URL for this webhook.
   */
  url?: string | null;

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
export interface WebhookSolution {
  chatServiceSid?: string;
}

export class WebhookPage extends Page<V1, WebhookPayload, WebhookResource, WebhookInstance> {
  /**
   * Initialize the WebhookPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WebhookSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of WebhookInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WebhookPayload): WebhookInstance {
    return new WebhookInstance(
      this._version,
      payload,
      this._solution.chatServiceSid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

