/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { DeliveryReceiptList } from './message/deliveryReceipt';
import { DeliveryReceiptListInstance } from './message/deliveryReceipt';
import { SerializableClass } from '../../../../../interfaces';

type MessageOrderType = 'asc'|'desc';

type MessageWebhookEnabledType = 'true'|'false';

/**
 * Initialize the MessageList
 *
 * @param version - Version of the resource
 * @param chatServiceSid - The SID of the Conversation Service that the resource is associated with.
 * @param conversationSid - The unique ID of the Conversation for this message.
 */
declare function MessageList(version: V1, chatServiceSid: string, conversationSid: string): MessageListInstance;

/**
 * Options to pass to remove
 *
 * @property xTwilioWebhookEnabled - The X-Twilio-Webhook-Enabled HTTP request header
 */
interface MessageInstanceRemoveOptions {
  xTwilioWebhookEnabled?: MessageWebhookEnabledType;
}

/**
 * Options to pass to update
 *
 * @property attributes - A string metadata field you can use to store any data you wish.
 * @property author - The channel specific identifier of the message's author.
 * @property body - The content of the message.
 * @property dateCreated - The date that this resource was created.
 * @property dateUpdated - The date that this resource was last updated.
 * @property xTwilioWebhookEnabled - The X-Twilio-Webhook-Enabled HTTP request header
 */
interface MessageInstanceUpdateOptions {
  attributes?: string;
  author?: string;
  body?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  xTwilioWebhookEnabled?: MessageWebhookEnabledType;
}

interface MessageListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): MessageContext;
  /**
   * create a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, item: MessageInstance) => any): Promise<MessageInstance>;
  /**
   * create a MessageInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: MessageListInstanceCreateOptions, callback?: (error: Error | null, item: MessageInstance) => any): Promise<MessageInstance>;
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
   * @param callback - Function to process each record
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
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: MessageListInstanceEachOptions, callback?: (item: MessageInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a message
   *
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  get(sid: string): MessageContext;
  /**
   * Retrieve a single target page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
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
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
  /**
   * Lists MessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: MessageInstance[]) => any): Promise<MessageInstance[]>;
  /**
   * Lists MessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: MessageListInstanceOptions, callback?: (error: Error | null, items: MessageInstance[]) => any): Promise<MessageInstance[]>;
  /**
   * Retrieve a single page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
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
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: MessageListInstancePageOptions, callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property attributes - A string metadata field you can use to store any data you wish.
 * @property author - The channel specific identifier of the message's author.
 * @property body - The content of the message.
 * @property contentSid - The unique ID of the multi-channel Rich Content template.
 * @property contentVariables - A structurally valid JSON string that contains values to resolve Rich Content template variables.
 * @property dateCreated - The date that this resource was created.
 * @property dateUpdated - The date that this resource was last updated.
 * @property mediaSid - The Media SID to be attached to the new Message.
 * @property xTwilioWebhookEnabled - The X-Twilio-Webhook-Enabled HTTP request header
 */
interface MessageListInstanceCreateOptions {
  attributes?: string;
  author?: string;
  body?: string;
  contentSid?: string;
  contentVariables?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  mediaSid?: string;
  xTwilioWebhookEnabled?: MessageWebhookEnabledType;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property order - The sort order of the returned messages
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface MessageListInstanceEachOptions {
  callback?: (item: MessageInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  order?: MessageOrderType;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property order - The sort order of the returned messages
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface MessageListInstanceOptions {
  limit?: number;
  order?: MessageOrderType;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property order - The sort order of the returned messages
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface MessageListInstancePageOptions {
  order?: MessageOrderType;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface MessagePayload extends MessageResource, Page.TwilioResponsePayload {
}

interface MessageResource {
  account_sid: string;
  attributes: string;
  author: string;
  body: string;
  chat_service_sid: string;
  content_sid: string;
  conversation_sid: string;
  date_created: Date;
  date_updated: Date;
  delivery: object;
  index: number;
  links: string;
  media: object[];
  participant_sid: string;
  sid: string;
  url: string;
}

interface MessageSolution {
  chatServiceSid?: string;
  conversationSid?: string;
}


declare class MessageContext {
  /**
   * Initialize the MessageContext
   *
   * @param version - Version of the resource
   * @param chatServiceSid - The SID of the Conversation Service that the resource is associated with.
   * @param conversationSid - The unique ID of the Conversation for this message.
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: V1, chatServiceSid: string, conversationSid: string, sid: string);

  deliveryReceipts: DeliveryReceiptListInstance;
  /**
   * fetch a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MessageInstance) => any): Promise<MessageInstance>;
  /**
   * remove a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: MessageInstance) => any): Promise<boolean>;
  /**
   * remove a MessageInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  remove(opts?: MessageInstanceRemoveOptions, callback?: (error: Error | null, items: MessageInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: MessageInstance) => any): Promise<MessageInstance>;
  /**
   * update a MessageInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: MessageInstanceUpdateOptions, callback?: (error: Error | null, items: MessageInstance) => any): Promise<MessageInstance>;
}


declare class MessageInstance extends SerializableClass {
  /**
   * Initialize the MessageContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param chatServiceSid - The SID of the Conversation Service that the resource is associated with.
   * @param conversationSid - The unique ID of the Conversation for this message.
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: V1, payload: MessagePayload, chatServiceSid: string, conversationSid: string, sid: string);

  private _proxy: MessageContext;
  accountSid: string;
  attributes: string;
  author: string;
  body: string;
  chatServiceSid: string;
  contentSid: string;
  conversationSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  delivery: any;
  /**
   * Access the deliveryReceipts
   */
  deliveryReceipts(): DeliveryReceiptListInstance;
  /**
   * fetch a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MessageInstance) => any): Promise<MessageInstance>;
  index: number;
  links: string;
  media: object[];
  participantSid: string;
  /**
   * remove a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: MessageInstance) => any): Promise<boolean>;
  /**
   * remove a MessageInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  remove(opts?: MessageInstanceRemoveOptions, callback?: (error: Error | null, items: MessageInstance) => any): Promise<boolean>;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: MessageInstance) => any): Promise<MessageInstance>;
  /**
   * update a MessageInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: MessageInstanceUpdateOptions, callback?: (error: Error | null, items: MessageInstance) => any): Promise<MessageInstance>;
  url: string;
}


declare class MessagePage extends Page<V1, MessagePayload, MessageResource, MessageInstance> {
  /**
   * Initialize the MessagePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: MessageSolution);

  /**
   * Build an instance of MessageInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MessagePayload): MessageInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { MessageContext, MessageInstance, MessageInstanceRemoveOptions, MessageInstanceUpdateOptions, MessageList, MessageListInstance, MessageListInstanceCreateOptions, MessageListInstanceEachOptions, MessageListInstanceOptions, MessageListInstancePageOptions, MessageOrderType, MessagePage, MessagePayload, MessageResource, MessageSolution, MessageWebhookEnabledType }