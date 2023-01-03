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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

type ServiceConversationScopedWebhookMethod = "GET" | "POST";

type ServiceConversationScopedWebhookTarget = "webhook" | "trigger" | "studio";

/**
 * Options to pass to update a WebhookInstance
 *
 * @property { string } [configuration.url] The absolute url the webhook request should be sent to.
 * @property { ServiceConversationScopedWebhookMethod } [configuration.method]
 * @property { Array<string> } [configuration.filters] The list of events, firing webhook event for this Conversation.
 * @property { Array<string> } [configuration.triggers] The list of keywords, firing webhook event for this Conversation.
 * @property { string } [configuration.flowSid] The studio flow SID, where the webhook should be sent to.
 */
export interface WebhookContextUpdateOptions {
  "configuration.url"?: string;
  "configuration.method"?: ServiceConversationScopedWebhookMethod;
  "configuration.filters"?: Array<string>;
  "configuration.triggers"?: Array<string>;
  "configuration.flowSid"?: string;
}

/**
 * Options to pass to create a WebhookInstance
 *
 * @property { ServiceConversationScopedWebhookTarget } target
 * @property { string } [configuration.url] The absolute url the webhook request should be sent to.
 * @property { ServiceConversationScopedWebhookMethod } [configuration.method]
 * @property { Array<string> } [configuration.filters] The list of events, firing webhook event for this Conversation.
 * @property { Array<string> } [configuration.triggers] The list of keywords, firing webhook event for this Conversation.
 * @property { string } [configuration.flowSid] The studio flow SID, where the webhook should be sent to.
 * @property { number } [configuration.replayAfter] The message index for which and it\\\'s successors the webhook will be replayed. Not set by default
 */
export interface WebhookListInstanceCreateOptions {
  target: ServiceConversationScopedWebhookTarget;
  "configuration.url"?: string;
  "configuration.method"?: ServiceConversationScopedWebhookMethod;
  "configuration.filters"?: Array<string>;
  "configuration.triggers"?: Array<string>;
  "configuration.flowSid"?: string;
  "configuration.replayAfter"?: number;
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
export interface WebhookListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: WebhookInstance, done: (err?: Error) => void) => void;
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
export interface WebhookListInstanceOptions {
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
export interface WebhookListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface WebhookContext {
  /**
   * Remove a WebhookInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a WebhookInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebhookInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WebhookInstance) => any
  ): Promise<WebhookInstance>;

  /**
   * Update a WebhookInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebhookInstance
   */
  update(
    callback?: (error: Error | null, item?: WebhookInstance) => any
  ): Promise<WebhookInstance>;
  /**
   * Update a WebhookInstance
   *
   * @param { WebhookContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebhookInstance
   */
  update(
    params: WebhookContextUpdateOptions,
    callback?: (error: Error | null, item?: WebhookInstance) => any
  ): Promise<WebhookInstance>;
  update(params?: any, callback?: any): Promise<WebhookInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WebhookContextSolution {
  chatServiceSid: string;
  conversationSid: string;
  sid: string;
}

export class WebhookContextImpl implements WebhookContext {
  protected _solution: WebhookContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    chatServiceSid: string,
    conversationSid: string,
    sid: string
  ) {
    if (!isValidPathParam(chatServiceSid)) {
      throw new Error("Parameter 'chatServiceSid' is not valid.");
    }

    if (!isValidPathParam(conversationSid)) {
      throw new Error("Parameter 'conversationSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { chatServiceSid, conversationSid, sid };
    this._uri = `/Services/${chatServiceSid}/Conversations/${conversationSid}/Webhooks/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<WebhookInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WebhookInstance(
          operationVersion,
          payload,
          instance._solution.chatServiceSid,
          instance._solution.conversationSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<WebhookInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["configuration.url"] !== undefined)
      data["Configuration.Url"] = params["configuration.url"];
    if (params["configuration.method"] !== undefined)
      data["Configuration.Method"] = params["configuration.method"];
    if (params["configuration.filters"] !== undefined)
      data["Configuration.Filters"] = serialize.map(
        params["configuration.filters"],
        (e) => e
      );
    if (params["configuration.triggers"] !== undefined)
      data["Configuration.Triggers"] = serialize.map(
        params["configuration.triggers"],
        (e) => e
      );
    if (params["configuration.flowSid"] !== undefined)
      data["Configuration.FlowSid"] = params["configuration.flowSid"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WebhookInstance(
          operationVersion,
          payload,
          instance._solution.chatServiceSid,
          instance._solution.conversationSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
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

interface WebhookPayload extends TwilioResponsePayload {
  webhooks: WebhookResource[];
}

interface WebhookResource {
  sid?: string | null;
  account_sid?: string | null;
  chat_service_sid?: string | null;
  conversation_sid?: string | null;
  target?: string | null;
  url?: string | null;
  configuration?: any | null;
  date_created?: Date | null;
  date_updated?: Date | null;
}

export class WebhookInstance {
  protected _solution: WebhookContextSolution;
  protected _context?: WebhookContext;

  constructor(
    protected _version: V1,
    payload: WebhookResource,
    chatServiceSid: string,
    conversationSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.chatServiceSid = payload.chat_service_sid;
    this.conversationSid = payload.conversation_sid;
    this.target = payload.target;
    this.url = payload.url;
    this.configuration = payload.configuration;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);

    this._solution = { chatServiceSid, conversationSid, sid: sid || this.sid };
  }

  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid?: string | null;
  /**
   * The unique ID of the Account responsible for this conversation.
   */
  accountSid?: string | null;
  /**
   * The SID of the Conversation Service that the resource is associated with.
   */
  chatServiceSid?: string | null;
  /**
   * The unique ID of the Conversation for this webhook.
   */
  conversationSid?: string | null;
  /**
   * The target of this webhook.
   */
  target?: string | null;
  /**
   * An absolute URL for this webhook.
   */
  url?: string | null;
  /**
   * The configuration of this webhook.
   */
  configuration?: any | null;
  /**
   * The date that this resource was created.
   */
  dateCreated?: Date | null;
  /**
   * The date that this resource was last updated.
   */
  dateUpdated?: Date | null;

  private get _proxy(): WebhookContext {
    this._context =
      this._context ||
      new WebhookContextImpl(
        this._version,
        this._solution.chatServiceSid,
        this._solution.conversationSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a WebhookInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a WebhookInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebhookInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WebhookInstance) => any
  ): Promise<WebhookInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a WebhookInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebhookInstance
   */
  update(
    callback?: (error: Error | null, item?: WebhookInstance) => any
  ): Promise<WebhookInstance>;
  /**
   * Update a WebhookInstance
   *
   * @param { WebhookContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebhookInstance
   */
  update(
    params: WebhookContextUpdateOptions,
    callback?: (error: Error | null, item?: WebhookInstance) => any
  ): Promise<WebhookInstance>;
  update(params?: any, callback?: any): Promise<WebhookInstance> {
    return this._proxy.update(params, callback);
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
      chatServiceSid: this.chatServiceSid,
      conversationSid: this.conversationSid,
      target: this.target,
      url: this.url,
      configuration: this.configuration,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WebhookSolution {
  chatServiceSid?: string;
  conversationSid?: string;
}

export interface WebhookListInstance {
  _version: V1;
  _solution: WebhookSolution;
  _uri: string;

  (sid: string): WebhookContext;
  get(sid: string): WebhookContext;

  /**
   * Create a WebhookInstance
   *
   * @param { WebhookListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WebhookInstance
   */
  create(
    params: WebhookListInstanceCreateOptions,
    callback?: (error: Error | null, item?: WebhookInstance) => any
  ): Promise<WebhookInstance>;
  create(params: any, callback?: any): Promise<WebhookInstance>;

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
  each(
    callback?: (item: WebhookInstance, done: (err?: Error) => void) => void
  ): void;
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
  each(
    params?: WebhookListInstanceEachOptions,
    callback?: (item: WebhookInstance, done: (err?: Error) => void) => void
  ): void;
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
  getPage(
    callback?: (error: Error | null, items: WebhookPage) => any
  ): Promise<WebhookPage>;
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
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: WebhookPage) => any
  ): Promise<WebhookPage>;
  getPage(params?: any, callback?: any): Promise<WebhookPage>;
  /**
   * Lists WebhookInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: WebhookInstance[]) => any
  ): Promise<WebhookInstance[]>;
  /**
   * Lists WebhookInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WebhookListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: WebhookListInstanceOptions,
    callback?: (error: Error | null, items: WebhookInstance[]) => any
  ): Promise<WebhookInstance[]>;
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
  page(
    callback?: (error: Error | null, items: WebhookPage) => any
  ): Promise<WebhookPage>;
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
  page(
    params: WebhookListInstancePageOptions,
    callback?: (error: Error | null, items: WebhookPage) => any
  ): Promise<WebhookPage>;
  page(params?: any, callback?: any): Promise<WebhookPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function WebhookListInstance(
  version: V1,
  chatServiceSid: string,
  conversationSid: string
): WebhookListInstance {
  if (!isValidPathParam(chatServiceSid)) {
    throw new Error("Parameter 'chatServiceSid' is not valid.");
  }

  if (!isValidPathParam(conversationSid)) {
    throw new Error("Parameter 'conversationSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as WebhookListInstance;

  instance.get = function get(sid): WebhookContext {
    return new WebhookContextImpl(
      version,
      chatServiceSid,
      conversationSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { chatServiceSid, conversationSid };
  instance._uri = `/Services/${chatServiceSid}/Conversations/${conversationSid}/Webhooks`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<WebhookInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["target"] === null || params["target"] === undefined) {
      throw new Error("Required parameter \"params['target']\" missing.");
    }

    let data: any = {};

    data["Target"] = params["target"];
    if (params["configuration.url"] !== undefined)
      data["Configuration.Url"] = params["configuration.url"];
    if (params["configuration.method"] !== undefined)
      data["Configuration.Method"] = params["configuration.method"];
    if (params["configuration.filters"] !== undefined)
      data["Configuration.Filters"] = serialize.map(
        params["configuration.filters"],
        (e) => e
      );
    if (params["configuration.triggers"] !== undefined)
      data["Configuration.Triggers"] = serialize.map(
        params["configuration.triggers"],
        (e) => e
      );
    if (params["configuration.flowSid"] !== undefined)
      data["Configuration.FlowSid"] = params["configuration.flowSid"];
    if (params["configuration.replayAfter"] !== undefined)
      data["Configuration.ReplayAfter"] = params["configuration.replayAfter"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WebhookInstance(
          operationVersion,
          payload,
          instance._solution.chatServiceSid,
          instance._solution.conversationSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<WebhookPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WebhookPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl?: any,
    callback?: any
  ): Promise<WebhookPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new WebhookPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class WebhookPage extends Page<
  V1,
  WebhookPayload,
  WebhookResource,
  WebhookInstance
> {
  /**
   * Initialize the WebhookPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: WebhookSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of WebhookInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WebhookResource): WebhookInstance {
    return new WebhookInstance(
      this._version,
      payload,
      this._solution.chatServiceSid,
      this._solution.conversationSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
