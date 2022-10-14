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
import { DeliveryReceiptListInstance } from "./message/deliveryReceipt";


/**
 * Options to pass to create a MessageInstance
 *
 * @property { ConversationMessageEnumWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [author] The channel specific identifier of the message\\\&#39;s author. Defaults to &#x60;system&#x60;.
 * @property { string } [body] The content of the message, can be up to 1,600 characters long.
 * @property { Date } [dateCreated] The date that this resource was created.
 * @property { Date } [dateUpdated] The date that this resource was last updated. &#x60;null&#x60; if the message has not been edited.
 * @property { string } [attributes] A string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \\\&quot;{}\\\&quot; will be returned.
 * @property { string } [mediaSid] The Media SID to be attached to the new Message.
 */
export interface MessageListInstanceCreateOptions {
  xTwilioWebhookEnabled?: ConversationMessageEnumWebhookEnabledType;
  author?: string;
  body?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  attributes?: string;
  mediaSid?: string;
}
/**
 * Options to pass to each
 *
 * @property { ConversationMessageEnumOrderType } [order] The sort order of the returned messages. Can be: &#x60;asc&#x60; (ascending) or &#x60;desc&#x60; (descending), with &#x60;asc&#x60; as the default.
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
export interface MessageListInstanceEachOptions {
  order?: ConversationMessageEnumOrderType;
  pageSize?: number;
  callback?: (item: MessageInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { ConversationMessageEnumOrderType } [order] The sort order of the returned messages. Can be: &#x60;asc&#x60; (ascending) or &#x60;desc&#x60; (descending), with &#x60;asc&#x60; as the default.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MessageListInstanceOptions {
  order?: ConversationMessageEnumOrderType;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { ConversationMessageEnumOrderType } [order] The sort order of the returned messages. Can be: &#x60;asc&#x60; (ascending) or &#x60;desc&#x60; (descending), with &#x60;asc&#x60; as the default.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MessageListInstancePageOptions {
  order?: ConversationMessageEnumOrderType;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}




/**
 * Options to pass to remove a MessageInstance
 *
 * @property { ConversationMessageEnumWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 */
export interface MessageContextRemoveOptions {
  xTwilioWebhookEnabled?: ConversationMessageEnumWebhookEnabledType;
}

/**
 * Options to pass to update a MessageInstance
 *
 * @property { ConversationMessageEnumWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [author] The channel specific identifier of the message\\\&#39;s author. Defaults to &#x60;system&#x60;.
 * @property { string } [body] The content of the message, can be up to 1,600 characters long.
 * @property { Date } [dateCreated] The date that this resource was created.
 * @property { Date } [dateUpdated] The date that this resource was last updated. &#x60;null&#x60; if the message has not been edited.
 * @property { string } [attributes] A string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \\\&quot;{}\\\&quot; will be returned.
 */
export interface MessageContextUpdateOptions {
  xTwilioWebhookEnabled?: ConversationMessageEnumWebhookEnabledType;
  author?: string;
  body?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  attributes?: string;
}

export interface MessageListInstance {
  (sid: string): MessageContext;
  get(sid: string): MessageContext;


  /**
   * Create a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  create(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
  /**
   * Create a MessageInstance
   *
   * @param { MessageListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  create(params: MessageListInstanceCreateOptions, callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
  create(params?: any, callback?: any): Promise<MessageInstance>



  /**
   * Streams MessageInstance records from the API.
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
  each(callback?: (item: MessageInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams MessageInstance records from the API.
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
   * @param { MessageListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: MessageListInstanceEachOptions, callback?: (item: MessageInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
  /**
   * Retrieve a single target page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
  getPage(params?: any, callback?: any): Promise<MessagePage>;
  /**
   * Lists MessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: MessageInstance[]) => any): Promise<MessageInstance[]>;
  /**
   * Lists MessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MessageListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: MessageListInstanceOptions, callback?: (error: Error | null, items: MessageInstance[]) => any): Promise<MessageInstance[]>;
  list(params?: any, callback?: any): Promise<MessageInstance[]>;
  /**
   * Retrieve a single page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
  /**
   * Retrieve a single page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MessageListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: MessageListInstancePageOptions, callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
  page(params?: any, callback?: any): Promise<MessagePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface MessageListInstanceImpl extends MessageListInstance {}
class MessageListInstanceImpl implements MessageListInstance {
  _version?: V1;
  _solution?: MessageSolution;
  _uri?: string;

}

export function MessageListInstance(version: V1, conversationSid: string): MessageListInstance {
  const instance = ((sid) => instance.get(sid)) as MessageListInstanceImpl;

  instance.get = function get(sid): MessageContext {
    return new MessageContextImpl(version, conversationSid, sid);
  }

  instance._version = version;
  instance._solution = { conversationSid };
  instance._uri = `/Conversations/${conversationSid}/Messages`;

  instance.create = function create(params?: any, callback?: any): Promise<MessageInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.author !== undefined) data['Author'] = params.author;
    if (params.body !== undefined) data['Body'] = params.body;
    if (params.dateCreated !== undefined) data['DateCreated'] = serialize.iso8601DateTime(params.dateCreated);
    if (params.dateUpdated !== undefined) data['DateUpdated'] = serialize.iso8601DateTime(params.dateUpdated);
    if (params.attributes !== undefined) data['Attributes'] = params.attributes;
    if (params.mediaSid !== undefined) data['MediaSid'] = params.mediaSid;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (params.xTwilioWebhookEnabled !== undefined) headers['X-Twilio-Webhook-Enabled'] = params.xTwilioWebhookEnabled;

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new MessageInstance(operationVersion, payload, this._solution.conversationSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<MessagePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.order !== undefined) data['Order'] = params.order;
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new MessagePage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<MessagePage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new MessagePage(this._version, payload, this._solution));
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


export interface MessageContext {

  deliveryReceipts: DeliveryReceiptListInstance;

  /**
   * Remove a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<boolean>;
  /**
   * Remove a MessageInstance
   *
   * @param { MessageContextRemoveOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  remove(params: MessageContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  remove(params?: any, callback?: any): Promise<boolean>


  /**
   * Fetch a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  fetch(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>


  /**
   * Update a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  update(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
  /**
   * Update a MessageInstance
   *
   * @param { MessageContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  update(params: MessageContextUpdateOptions, callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
  update(params?: any, callback?: any): Promise<MessageInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class MessageContextImpl implements MessageContext {
  protected _solution: MessageSolution;
  protected _uri: string;

  protected _deliveryReceipts?: DeliveryReceiptListInstance;

  constructor(protected _version: V1, conversationSid: string, sid: string) {
    this._solution = { conversationSid, sid };
    this._uri = `/Conversations/${conversationSid}/Messages/${sid}`;
  }

  get deliveryReceipts(): DeliveryReceiptListInstance {
    this._deliveryReceipts = this._deliveryReceipts || DeliveryReceiptListInstance(this._version, this._solution.conversationSid, this._solution.sid);
    return this._deliveryReceipts;
  }

  remove(params?: any, callback?: any): Promise<boolean> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};


    const headers: any = {};
    if (params.xTwilioWebhookEnabled !== undefined) headers['X-Twilio-Webhook-Enabled'] = params.xTwilioWebhookEnabled;

    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete', params: data, headers });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<MessageInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new MessageInstance(operationVersion, payload, this._solution.conversationSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  update(params?: any, callback?: any): Promise<MessageInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.author !== undefined) data['Author'] = params.author;
    if (params.body !== undefined) data['Body'] = params.body;
    if (params.dateCreated !== undefined) data['DateCreated'] = serialize.iso8601DateTime(params.dateCreated);
    if (params.dateUpdated !== undefined) data['DateUpdated'] = serialize.iso8601DateTime(params.dateUpdated);
    if (params.attributes !== undefined) data['Attributes'] = params.attributes;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (params.xTwilioWebhookEnabled !== undefined) headers['X-Twilio-Webhook-Enabled'] = params.xTwilioWebhookEnabled;

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new MessageInstance(operationVersion, payload, this._solution.conversationSid, this._solution.sid));
    

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

interface MessagePayload extends MessageResource, Page.TwilioResponsePayload {
}

interface MessageResource {
  account_sid?: string | null;
  conversation_sid?: string | null;
  sid?: string | null;
  index?: number | null;
  author?: string | null;
  body?: string | null;
  media?: Array<any> | null;
  attributes?: string | null;
  participant_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  delivery?: any | null;
  links?: object | null;
}

export class MessageInstance {
  protected _solution: MessageSolution;
  protected _context?: MessageContext;

  constructor(protected _version: V1, payload: MessagePayload, conversationSid: string, sid?: string) {
    this.accountSid = payload.account_sid;
    this.conversationSid = payload.conversation_sid;
    this.sid = payload.sid;
    this.index = deserialize.integer(payload.index);
    this.author = payload.author;
    this.body = payload.body;
    this.media = payload.media;
    this.attributes = payload.attributes;
    this.participantSid = payload.participant_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.delivery = payload.delivery;
    this.links = payload.links;

    this._solution = { conversationSid, sid: sid || this.sid };
  }

  /**
   * The unique ID of the Account responsible for this message.
   */
  accountSid?: string | null;
  /**
   * The unique ID of the Conversation for this message.
   */
  conversationSid?: string | null;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid?: string | null;
  /**
   * The index of the message within the Conversation.
   */
  index?: number | null;
  /**
   * The channel specific identifier of the message\'s author.
   */
  author?: string | null;
  /**
   * The content of the message.
   */
  body?: string | null;
  /**
   * An array of objects that describe the Message\'s media if attached, otherwise, null.
   */
  media?: Array<any> | null;
  /**
   * A string metadata field you can use to store any data you wish.
   */
  attributes?: string | null;
  /**
   * The unique ID of messages\'s author participant.
   */
  participantSid?: string | null;
  /**
   * The date that this resource was created.
   */
  dateCreated?: Date | null;
  /**
   * The date that this resource was last updated.
   */
  dateUpdated?: Date | null;
  /**
   * An absolute API URL for this message.
   */
  url?: string | null;
  /**
   * An object that contains the summary of delivery statuses for the message to non-chat participants.
   */
  delivery?: any | null;
  /**
   * Absolute URL to access the receipts of this message.
   */
  links?: object | null;

  private get _proxy(): MessageContext {
    this._context = this._context || new MessageContextImpl(this._version, this._solution.conversationSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<boolean>;
  /**
   * Remove a MessageInstance
   *
   * @param { MessageContextRemoveOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  remove(params: MessageContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  remove(params?: any, callback?: any): Promise<boolean>
     {
    return this._proxy.remove(params, callback);
  }

  /**
   * Fetch a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  fetch(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a MessageInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  update(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
  /**
   * Update a MessageInstance
   *
   * @param { MessageContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInstance
   */
  update(params: MessageContextUpdateOptions, callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
  update(params?: any, callback?: any): Promise<MessageInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the deliveryReceipts.
   */
  deliveryReceipts(): DeliveryReceiptListInstance {
    return this._proxy.deliveryReceipts;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      conversationSid: this.conversationSid, 
      sid: this.sid, 
      index: this.index, 
      author: this.author, 
      body: this.body, 
      media: this.media, 
      attributes: this.attributes, 
      participantSid: this.participantSid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      url: this.url, 
      delivery: this.delivery, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface MessageSolution {
  conversationSid?: string;
  sid?: string;
}

export class MessagePage extends Page<V1, MessagePayload, MessageResource, MessageInstance> {
  /**
   * Initialize the MessagePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: MessageSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of MessageInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MessagePayload): MessageInstance {
    return new MessageInstance(
      this._version,
      payload,
      this._solution.conversationSid,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

