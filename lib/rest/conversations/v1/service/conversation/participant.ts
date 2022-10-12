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
 * Options to pass to create a ParticipantInstance
 *
 * @property { ServiceConversationParticipantEnumWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [identity] A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversation SDK to communicate. Limited to 256 characters.
 * @property { string } [messagingBindingAddress] The address of the participant\\\&#39;s device, e.g. a phone or WhatsApp number. Together with the Proxy address, this determines a participant uniquely. This field (with proxy_address) is only null when the participant is interacting from an SDK endpoint (see the \\\&#39;identity\\\&#39; field).
 * @property { string } [messagingBindingProxyAddress] The address of the Twilio phone number (or WhatsApp number) that the participant is in contact with. This field, together with participant address, is only null when the participant is interacting from an SDK endpoint (see the \\\&#39;identity\\\&#39; field).
 * @property { Date } [dateCreated] The date that this resource was created.
 * @property { Date } [dateUpdated] The date that this resource was last updated.
 * @property { string } [attributes] An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \\\&quot;{}\\\&quot; will be returned.
 * @property { string } [messagingBindingProjectedAddress] The address of the Twilio phone number that is used in Group MMS. Communication mask for the Conversation participant with Identity.
 * @property { string } [roleSid] The SID of a conversation-level [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the participant.
 */
export interface ParticipantListInstanceCreateOptions {
  xTwilioWebhookEnabled?: ServiceConversationParticipantEnumWebhookEnabledType;
  identity?: string;
  messagingBindingAddress?: string;
  messagingBindingProxyAddress?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  attributes?: string;
  messagingBindingProjectedAddress?: string;
  roleSid?: string;
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
export interface ParticipantListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void;
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
export interface ParticipantListInstanceOptions {
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
export interface ParticipantListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}




/**
 * Options to pass to remove a ParticipantInstance
 *
 * @property { ServiceConversationParticipantEnumWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 */
export interface ParticipantContextRemoveOptions {
  xTwilioWebhookEnabled?: ServiceConversationParticipantEnumWebhookEnabledType;
}

/**
 * Options to pass to update a ParticipantInstance
 *
 * @property { ServiceConversationParticipantEnumWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { Date } [dateCreated] The date that this resource was created.
 * @property { Date } [dateUpdated] The date that this resource was last updated.
 * @property { string } [identity] A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversation SDK to communicate. Limited to 256 characters.
 * @property { string } [attributes] An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \\\&quot;{}\\\&quot; will be returned.
 * @property { string } [roleSid] The SID of a conversation-level [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the participant.
 * @property { string } [messagingBindingProxyAddress] The address of the Twilio phone number that the participant is in contact with. \\\&#39;null\\\&#39; value will remove it.
 * @property { string } [messagingBindingProjectedAddress] The address of the Twilio phone number that is used in Group MMS. \\\&#39;null\\\&#39; value will remove it.
 * @property { number } [lastReadMessageIndex] Index of last “read” message in the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for the Participant.
 * @property { string } [lastReadTimestamp] Timestamp of last “read” message in the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for the Participant.
 */
export interface ParticipantContextUpdateOptions {
  xTwilioWebhookEnabled?: ServiceConversationParticipantEnumWebhookEnabledType;
  dateCreated?: Date;
  dateUpdated?: Date;
  identity?: string;
  attributes?: string;
  roleSid?: string;
  messagingBindingProxyAddress?: string;
  messagingBindingProjectedAddress?: string;
  lastReadMessageIndex?: number;
  lastReadTimestamp?: string;
}

export interface ParticipantListInstance {
  (sid: string): ParticipantContext;
  get(sid: string): ParticipantContext;


  /**
   * Create a ParticipantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ParticipantInstance
   */
  create(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
  /**
   * Create a ParticipantInstance
   *
   * @param { ParticipantListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ParticipantInstance
   */
  create(params: ParticipantListInstanceCreateOptions, callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
  create(params?: any, callback?: any): Promise<ParticipantInstance>



  /**
   * Streams ParticipantInstance records from the API.
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
  each(callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams ParticipantInstance records from the API.
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
   * @param { ParticipantListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: ParticipantListInstanceEachOptions, callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
  getPage(params?: any, callback?: any): Promise<ParticipantPage>;
  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ParticipantInstance[]) => any): Promise<ParticipantInstance[]>;
  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ParticipantListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: ParticipantListInstanceOptions, callback?: (error: Error | null, items: ParticipantInstance[]) => any): Promise<ParticipantInstance[]>;
  list(params?: any, callback?: any): Promise<ParticipantInstance[]>;
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ParticipantListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: ParticipantListInstancePageOptions, callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
  page(params?: any, callback?: any): Promise<ParticipantPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface ParticipantListInstanceImpl extends ParticipantListInstance {}
class ParticipantListInstanceImpl implements ParticipantListInstance {
  _version?: V1;
  _solution?: ParticipantSolution;
  _uri?: string;

}

export function ParticipantListInstance(version: V1, chatServiceSid: string, conversationSid: string): ParticipantListInstance {
  const instance = ((sid) => instance.get(sid)) as ParticipantListInstanceImpl;

  instance.get = function get(sid): ParticipantContext {
    return new ParticipantContextImpl(version, chatServiceSid, conversationSid, sid);
  }

  instance._version = version;
  instance._solution = { chatServiceSid, conversationSid };
  instance._uri = `/Services/${chatServiceSid}/Conversations/${conversationSid}/Participants`;

  instance.create = function create(params?: any, callback?: any): Promise<ParticipantInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.identity !== undefined) data['Identity'] = params.identity;
    if (params.messagingBindingAddress !== undefined) data['MessagingBinding.Address'] = params.messagingBindingAddress;
    if (params.messagingBindingProxyAddress !== undefined) data['MessagingBinding.ProxyAddress'] = params.messagingBindingProxyAddress;
    if (params.dateCreated !== undefined) data['DateCreated'] = serialize.iso8601DateTime(params.dateCreated);
    if (params.dateUpdated !== undefined) data['DateUpdated'] = serialize.iso8601DateTime(params.dateUpdated);
    if (params.attributes !== undefined) data['Attributes'] = params.attributes;
    if (params.messagingBindingProjectedAddress !== undefined) data['MessagingBinding.ProjectedAddress'] = params.messagingBindingProjectedAddress;
    if (params.roleSid !== undefined) data['RoleSid'] = params.roleSid;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (params.xTwilioWebhookEnabled !== undefined) headers['X-Twilio-Webhook-Enabled'] = params.xTwilioWebhookEnabled;

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ParticipantInstance(operationVersion, payload, this._solution.chatServiceSid, this._solution.conversationSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<ParticipantPage> {
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
    
    operationPromise = operationPromise.then(payload => new ParticipantPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<ParticipantPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new ParticipantPage(this._version, payload, this._solution));
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


export interface ParticipantContext {


  /**
   * Remove a ParticipantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<boolean>;
  /**
   * Remove a ParticipantInstance
   *
   * @param { ParticipantContextRemoveOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ParticipantInstance
   */
  remove(params: ParticipantContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  remove(params?: any, callback?: any): Promise<boolean>


  /**
   * Fetch a ParticipantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ParticipantInstance
   */
  fetch(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>


  /**
   * Update a ParticipantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ParticipantInstance
   */
  update(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
  /**
   * Update a ParticipantInstance
   *
   * @param { ParticipantContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ParticipantInstance
   */
  update(params: ParticipantContextUpdateOptions, callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
  update(params?: any, callback?: any): Promise<ParticipantInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class ParticipantContextImpl implements ParticipantContext {
  protected _solution: ParticipantSolution;
  protected _uri: string;


  constructor(protected _version: V1, chatServiceSid: string, conversationSid: string, sid: string) {
    this._solution = { chatServiceSid, conversationSid, sid };
    this._uri = `/Services/${chatServiceSid}/Conversations/${conversationSid}/Participants/${sid}`;
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

  fetch(callback?: any): Promise<ParticipantInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new ParticipantInstance(operationVersion, payload, this._solution.chatServiceSid, this._solution.conversationSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  update(params?: any, callback?: any): Promise<ParticipantInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.dateCreated !== undefined) data['DateCreated'] = serialize.iso8601DateTime(params.dateCreated);
    if (params.dateUpdated !== undefined) data['DateUpdated'] = serialize.iso8601DateTime(params.dateUpdated);
    if (params.identity !== undefined) data['Identity'] = params.identity;
    if (params.attributes !== undefined) data['Attributes'] = params.attributes;
    if (params.roleSid !== undefined) data['RoleSid'] = params.roleSid;
    if (params.messagingBindingProxyAddress !== undefined) data['MessagingBinding.ProxyAddress'] = params.messagingBindingProxyAddress;
    if (params.messagingBindingProjectedAddress !== undefined) data['MessagingBinding.ProjectedAddress'] = params.messagingBindingProjectedAddress;
    if (params.lastReadMessageIndex !== undefined) data['LastReadMessageIndex'] = params.lastReadMessageIndex;
    if (params.lastReadTimestamp !== undefined) data['LastReadTimestamp'] = params.lastReadTimestamp;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (params.xTwilioWebhookEnabled !== undefined) headers['X-Twilio-Webhook-Enabled'] = params.xTwilioWebhookEnabled;

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ParticipantInstance(operationVersion, payload, this._solution.chatServiceSid, this._solution.conversationSid, this._solution.sid));
    

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

interface ParticipantPayload extends ParticipantResource, Page.TwilioResponsePayload {
}

interface ParticipantResource {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  conversation_sid?: string | null;
  sid?: string | null;
  identity?: string | null;
  attributes?: string | null;
  messaging_binding?: any | null;
  role_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  last_read_message_index?: number | null;
  last_read_timestamp?: string | null;
}

export class ParticipantInstance {
  protected _solution: ParticipantSolution;
  protected _context?: ParticipantContext;

  constructor(protected _version: V1, payload: ParticipantPayload, chatServiceSid: string, conversationSid: string, sid?: string) {
    this.accountSid = payload.account_sid;
    this.chatServiceSid = payload.chat_service_sid;
    this.conversationSid = payload.conversation_sid;
    this.sid = payload.sid;
    this.identity = payload.identity;
    this.attributes = payload.attributes;
    this.messagingBinding = payload.messaging_binding;
    this.roleSid = payload.role_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.lastReadMessageIndex = deserialize.integer(payload.last_read_message_index);
    this.lastReadTimestamp = payload.last_read_timestamp;

    this._solution = { chatServiceSid, conversationSid, sid: sid || this.sid };
  }

  /**
   * The unique ID of the Account responsible for this participant.
   */
  accountSid?: string | null;
  /**
   * The SID of the Conversation Service that the resource is associated with.
   */
  chatServiceSid?: string | null;
  /**
   * The unique ID of the Conversation for this participant.
   */
  conversationSid?: string | null;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid?: string | null;
  /**
   * A unique string identifier for the conversation participant as Conversation User.
   */
  identity?: string | null;
  /**
   * An optional string metadata field you can use to store any data you wish.
   */
  attributes?: string | null;
  /**
   * Information about how this participant exchanges messages with the conversation.
   */
  messagingBinding?: any | null;
  /**
   * The SID of a conversation-level Role to assign to the participant
   */
  roleSid?: string | null;
  /**
   * The date that this resource was created.
   */
  dateCreated?: Date | null;
  /**
   * The date that this resource was last updated.
   */
  dateUpdated?: Date | null;
  /**
   * An absolute URL for this participant.
   */
  url?: string | null;
  /**
   * Index of last “read” message in the Conversation for the Participant.
   */
  lastReadMessageIndex?: number | null;
  /**
   * Timestamp of last “read” message in the Conversation for the Participant.
   */
  lastReadTimestamp?: string | null;

  private get _proxy(): ParticipantContext {
    this._context = this._context || new ParticipantContextImpl(this._version, this._solution.chatServiceSid, this._solution.conversationSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ParticipantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<boolean>;
  /**
   * Remove a ParticipantInstance
   *
   * @param { ParticipantContextRemoveOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ParticipantInstance
   */
  remove(params: ParticipantContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  remove(params?: any, callback?: any): Promise<boolean>
     {
    return this._proxy.remove(params, callback);
  }

  /**
   * Fetch a ParticipantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ParticipantInstance
   */
  fetch(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ParticipantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ParticipantInstance
   */
  update(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
  /**
   * Update a ParticipantInstance
   *
   * @param { ParticipantContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ParticipantInstance
   */
  update(params: ParticipantContextUpdateOptions, callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
  update(params?: any, callback?: any): Promise<ParticipantInstance>
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
      conversationSid: this.conversationSid, 
      sid: this.sid, 
      identity: this.identity, 
      attributes: this.attributes, 
      messagingBinding: this.messagingBinding, 
      roleSid: this.roleSid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      url: this.url, 
      lastReadMessageIndex: this.lastReadMessageIndex, 
      lastReadTimestamp: this.lastReadTimestamp
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface ParticipantSolution {
  chatServiceSid?: string;
  conversationSid?: string;
  sid?: string;
}

export class ParticipantPage extends Page<V1, ParticipantPayload, ParticipantResource, ParticipantInstance> {
  /**
   * Initialize the ParticipantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ParticipantSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ParticipantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ParticipantPayload): ParticipantInstance {
    return new ParticipantInstance(
      this._version,
      payload,
      this._solution.chatServiceSid,
      this._solution.conversationSid,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

