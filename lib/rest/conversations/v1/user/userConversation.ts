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

type UserConversationNotificationLevel = 'default'|'muted';

type UserConversationState = 'inactive'|'active'|'closed';


/**
 * Options to pass to update a UserConversationInstance
 *
 * @property { UserConversationNotificationLevel } [notificationLevel] 
 * @property { Date } [lastReadTimestamp] The date of the last message read in conversation by the user, given in ISO 8601 format.
 * @property { number } [lastReadMessageIndex] The index of the last Message in the Conversation that the Participant has read.
 */
export interface UserConversationContextUpdateOptions {
  notificationLevel?: UserConversationNotificationLevel;
  lastReadTimestamp?: Date;
  lastReadMessageIndex?: number;
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
export interface UserConversationListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: UserConversationInstance, done: (err?: Error) => void) => void;
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
export interface UserConversationListInstanceOptions {
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
export interface UserConversationListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface UserConversationContext {


  /**
   * Remove a UserConversationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a UserConversationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserConversationInstance
   */
  fetch(callback?: (error: Error | null, item?: UserConversationInstance) => any): Promise<UserConversationInstance>


  /**
   * Update a UserConversationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserConversationInstance
   */
  update(callback?: (error: Error | null, item?: UserConversationInstance) => any): Promise<UserConversationInstance>;
  /**
   * Update a UserConversationInstance
   *
   * @param { UserConversationContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserConversationInstance
   */
  update(params: UserConversationContextUpdateOptions, callback?: (error: Error | null, item?: UserConversationInstance) => any): Promise<UserConversationInstance>;
  update(params?: any, callback?: any): Promise<UserConversationInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class UserConversationContextImpl implements UserConversationContext {
  protected _solution: UserConversationSolution;
  protected _uri: string;


  constructor(protected _version: V1, userSid: string, conversationSid: string) {
    this._solution = { userSid, conversationSid };
    this._uri = `/Users/${userSid}/Conversations/${conversationSid}`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<UserConversationInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new UserConversationInstance(operationVersion, payload, this._solution.userSid, this._solution.conversationSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  update(params?: any, callback?: any): Promise<UserConversationInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.notificationLevel !== undefined) data['NotificationLevel'] = params.notificationLevel;
    if (params.lastReadTimestamp !== undefined) data['LastReadTimestamp'] = serialize.iso8601DateTime(params.lastReadTimestamp);
    if (params.lastReadMessageIndex !== undefined) data['LastReadMessageIndex'] = params.lastReadMessageIndex;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new UserConversationInstance(operationVersion, payload, this._solution.userSid, this._solution.conversationSid));
    

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

interface UserConversationPayload extends UserConversationResource, Page.TwilioResponsePayload {
}

interface UserConversationResource {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  conversation_sid?: string | null;
  unread_messages_count?: number | null;
  last_read_message_index?: number | null;
  participant_sid?: string | null;
  user_sid?: string | null;
  friendly_name?: string | null;
  conversation_state?: UserConversationState;
  timers?: any | null;
  attributes?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  created_by?: string | null;
  notification_level?: UserConversationNotificationLevel;
  unique_name?: string | null;
  url?: string | null;
  links?: object | null;
}

export class UserConversationInstance {
  protected _solution: UserConversationSolution;
  protected _context?: UserConversationContext;

  constructor(protected _version: V1, payload: UserConversationPayload, userSid: string, conversationSid?: string) {
    this.accountSid = payload.account_sid;
    this.chatServiceSid = payload.chat_service_sid;
    this.conversationSid = payload.conversation_sid;
    this.unreadMessagesCount = deserialize.integer(payload.unread_messages_count);
    this.lastReadMessageIndex = deserialize.integer(payload.last_read_message_index);
    this.participantSid = payload.participant_sid;
    this.userSid = payload.user_sid;
    this.friendlyName = payload.friendly_name;
    this.conversationState = payload.conversation_state;
    this.timers = payload.timers;
    this.attributes = payload.attributes;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;
    this.notificationLevel = payload.notification_level;
    this.uniqueName = payload.unique_name;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { userSid, conversationSid: conversationSid || this.conversationSid };
  }

  /**
   * The unique ID of the Account responsible for this conversation.
   */
  accountSid?: string | null;
  /**
   * The unique ID of the Conversation Service this conversation belongs to.
   */
  chatServiceSid?: string | null;
  /**
   * The unique ID of the Conversation for this User Conversation.
   */
  conversationSid?: string | null;
  /**
   * The number of unread Messages in the Conversation.
   */
  unreadMessagesCount?: number | null;
  /**
   * The index of the last read Message .
   */
  lastReadMessageIndex?: number | null;
  /**
   * Participant Sid.
   */
  participantSid?: string | null;
  /**
   * The unique ID for the User.
   */
  userSid?: string | null;
  /**
   * The human-readable name of this conversation.
   */
  friendlyName?: string | null;
  conversationState?: UserConversationState;
  /**
   * Timer date values for this conversation.
   */
  timers?: any | null;
  /**
   * An optional string metadata field you can use to store any data you wish.
   */
  attributes?: string | null;
  /**
   * The date that this conversation was created.
   */
  dateCreated?: Date | null;
  /**
   * The date that this conversation was last updated.
   */
  dateUpdated?: Date | null;
  /**
   * Creator of this conversation.
   */
  createdBy?: string | null;
  notificationLevel?: UserConversationNotificationLevel;
  /**
   * An application-defined string that uniquely identifies the Conversation resource.
   */
  uniqueName?: string | null;
  url?: string | null;
  /**
   * Absolute URLs to access the participant and conversation of this user conversation.
   */
  links?: object | null;

  private get _proxy(): UserConversationContext {
    this._context = this._context || new UserConversationContextImpl(this._version, this._solution.userSid, this._solution.conversationSid);
    return this._context;
  }

  /**
   * Remove a UserConversationInstance
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
   * Fetch a UserConversationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserConversationInstance
   */
  fetch(callback?: (error: Error | null, item?: UserConversationInstance) => any): Promise<UserConversationInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a UserConversationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserConversationInstance
   */
  update(callback?: (error: Error | null, item?: UserConversationInstance) => any): Promise<UserConversationInstance>;
  /**
   * Update a UserConversationInstance
   *
   * @param { UserConversationContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserConversationInstance
   */
  update(params: UserConversationContextUpdateOptions, callback?: (error: Error | null, item?: UserConversationInstance) => any): Promise<UserConversationInstance>;
  update(params?: any, callback?: any): Promise<UserConversationInstance>
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
      unreadMessagesCount: this.unreadMessagesCount, 
      lastReadMessageIndex: this.lastReadMessageIndex, 
      participantSid: this.participantSid, 
      userSid: this.userSid, 
      friendlyName: this.friendlyName, 
      conversationState: this.conversationState, 
      timers: this.timers, 
      attributes: this.attributes, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      createdBy: this.createdBy, 
      notificationLevel: this.notificationLevel, 
      uniqueName: this.uniqueName, 
      url: this.url, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface UserConversationSolution {
  userSid?: string;
  conversationSid?: string;
}

export class UserConversationPage extends Page<V1, UserConversationPayload, UserConversationResource, UserConversationInstance> {
  /**
   * Initialize the UserConversationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: UserConversationSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of UserConversationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UserConversationPayload): UserConversationInstance {
    return new UserConversationInstance(
      this._version,
      payload,
      this._solution.userSid,
      this._solution.conversationSid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface UserConversationListInstance {
  (conversationSid: string): UserConversationContext;
  get(conversationSid: string): UserConversationContext;



  /**
   * Streams UserConversationInstance records from the API.
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
  each(callback?: (item: UserConversationInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams UserConversationInstance records from the API.
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
   * @param { UserConversationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: UserConversationListInstanceEachOptions, callback?: (item: UserConversationInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of UserConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: UserConversationPage) => any): Promise<UserConversationPage>;
  /**
   * Retrieve a single target page of UserConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: UserConversationPage) => any): Promise<UserConversationPage>;
  getPage(params?: any, callback?: any): Promise<UserConversationPage>;
  /**
   * Lists UserConversationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: UserConversationInstance[]) => any): Promise<UserConversationInstance[]>;
  /**
   * Lists UserConversationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UserConversationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: UserConversationListInstanceOptions, callback?: (error: Error | null, items: UserConversationInstance[]) => any): Promise<UserConversationInstance[]>;
  list(params?: any, callback?: any): Promise<UserConversationInstance[]>;
  /**
   * Retrieve a single page of UserConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: UserConversationPage) => any): Promise<UserConversationPage>;
  /**
   * Retrieve a single page of UserConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UserConversationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: UserConversationListInstancePageOptions, callback?: (error: Error | null, items: UserConversationPage) => any): Promise<UserConversationPage>;
  page(params?: any, callback?: any): Promise<UserConversationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface UserConversationListInstanceImpl extends UserConversationListInstance {}
class UserConversationListInstanceImpl implements UserConversationListInstance {
  _version?: V1;
  _solution?: UserConversationSolution;
  _uri?: string;

}

export function UserConversationListInstance(version: V1, userSid: string): UserConversationListInstance {
  const instance = ((conversationSid) => instance.get(conversationSid)) as UserConversationListInstanceImpl;

  instance.get = function get(conversationSid): UserConversationContext {
    return new UserConversationContextImpl(version, userSid, conversationSid);
  }

  instance._version = version;
  instance._solution = { userSid };
  instance._uri = `/Users/${userSid}/Conversations`;

  instance.page = function page(params?: any, callback?: any): Promise<UserConversationPage> {
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
    
    operationPromise = operationPromise.then(payload => new UserConversationPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<UserConversationPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new UserConversationPage(this._version, payload, this._solution));
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

