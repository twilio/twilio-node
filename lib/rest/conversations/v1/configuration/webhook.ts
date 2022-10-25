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
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");


type ConfigurationWebhookMethod = 'GET'|'POST';

type ConfigurationWebhookTarget = 'webhook'|'flex';


/**
 * Options to pass to update a WebhookInstance
 *
 * @property { string } [method] The HTTP method to be used when sending a webhook request.
 * @property { Array<string> } [filters] The list of webhook event triggers that are enabled for this Service: &#x60;onMessageAdded&#x60;, &#x60;onMessageUpdated&#x60;, &#x60;onMessageRemoved&#x60;, &#x60;onConversationUpdated&#x60;, &#x60;onConversationRemoved&#x60;, &#x60;onParticipantAdded&#x60;, &#x60;onParticipantUpdated&#x60;, &#x60;onParticipantRemoved&#x60;
 * @property { string } [preWebhookUrl] The absolute url the pre-event webhook request should be sent to.
 * @property { string } [postWebhookUrl] The absolute url the post-event webhook request should be sent to.
 * @property { ConfigurationWebhookTarget } [target] 
 */
export interface WebhookListInstanceUpdateOptions {
  method?: string;
  filters?: Array<string>;
  preWebhookUrl?: string;
  postWebhookUrl?: string;
  target?: ConfigurationWebhookTarget;
}

export interface WebhookListInstance {


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
   * @param { WebhookListInstanceUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebhookInstance
   */
  update(params: WebhookListInstanceUpdateOptions, callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
  update(params?: any, callback?: any): Promise<WebhookInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WebhookSolution {
}

interface WebhookListInstanceImpl extends WebhookListInstance {}
class WebhookListInstanceImpl implements WebhookListInstance {
  _version?: V1;
  _solution?: WebhookSolution;
  _uri?: string;

}

export function WebhookListInstance(version: V1): WebhookListInstance {
  const instance = {} as WebhookListInstanceImpl;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Configuration/Webhooks`;

  instance.fetch = function fetch(callback?: any): Promise<WebhookInstance> {

    let operationVersion = version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new WebhookInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.update = function update(params?: any, callback?: any): Promise<WebhookInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.method !== undefined) data['Method'] = params.method;
    if (params.filters !== undefined) data['Filters'] = serialize.map(params.filters, ((e) => e));
    if (params.preWebhookUrl !== undefined) data['PreWebhookUrl'] = params.preWebhookUrl;
    if (params.postWebhookUrl !== undefined) data['PostWebhookUrl'] = params.postWebhookUrl;
    if (params.target !== undefined) data['Target'] = params.target;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new WebhookInstance(operationVersion, payload));
    

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

interface WebhookPayload extends WebhookResource{
}

interface WebhookResource {
  account_sid?: string | null;
  method?: ConfigurationWebhookMethod;
  filters?: Array<string> | null;
  pre_webhook_url?: string | null;
  post_webhook_url?: string | null;
  target?: ConfigurationWebhookTarget;
  url?: string | null;
}

export class WebhookInstance {

  constructor(protected _version: V1, payload: WebhookPayload) {
    this.accountSid = payload.account_sid;
    this.method = payload.method;
    this.filters = payload.filters;
    this.preWebhookUrl = payload.pre_webhook_url;
    this.postWebhookUrl = payload.post_webhook_url;
    this.target = payload.target;
    this.url = payload.url;

  }

  /**
   * The unique ID of the Account responsible for this conversation.
   */
  accountSid?: string | null;
  method?: ConfigurationWebhookMethod;
  /**
   * The list of webhook event triggers that are enabled for this Service.
   */
  filters?: Array<string> | null;
  /**
   * The absolute url the pre-event webhook request should be sent to.
   */
  preWebhookUrl?: string | null;
  /**
   * The absolute url the post-event webhook request should be sent to.
   */
  postWebhookUrl?: string | null;
  target?: ConfigurationWebhookTarget;
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
      method: this.method, 
      filters: this.filters, 
      preWebhookUrl: this.preWebhookUrl, 
      postWebhookUrl: this.postWebhookUrl, 
      target: this.target, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


