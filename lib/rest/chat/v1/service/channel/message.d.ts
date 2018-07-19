/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the MessageList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this message belongs to.
 * @param channelSid - The channel_sid
 */
declare function MessageList(version: V1, serviceSid: string, channelSid: string): MessageListInstance;

interface MessageResource {
  account_sid: string;
  attributes: string;
  body: string;
  channel_sid: string;
  date_created: Date;
  date_updated: Date;
  from: string;
  index: number;
  service_sid: string;
  sid: string;
  to: string;
  url: string;
  was_edited: boolean;
}

interface MessagePayload extends MessageResource, Page.TwilioResponsePayload {
}

interface MessageSolution {
  channelSid?: string;
  serviceSid?: string;
}

interface MessageListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): MessageContext;
  /**
   * create a MessageInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: MessageListInstanceCreateOptions, callback?: (error: Error | null, items: MessageListInstance) => any): Promise<MessageInstance>;
  /**
   * Streams MessageInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: MessageListInstanceEachOptions, callback?: (item: MessageInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a message
   *
   * @param sid - The sid
   */
  get(sid: string): MessageContext;
  /**
   * Retrieve a single target page of MessageInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function): Promise<MessagePage>;
  /**
   * @description Lists MessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: MessageListInstanceOptions, callback?: function): Promise<MessageInstance[]>;
  /**
   * Retrieve a single page of MessageInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: MessageListInstancePageOptions, callback?: function): Promise<MessagePage>;
}

/**
 * Options to pass to update
 *
 * @property body - The new message body string.
 * @property attributes - The new attributes metadata field you can use to store any data you wish.
 */
export interface MessageInstanceUpdateOptions {
  attributes?: string;
  body?: string;
}

/**
 * Options to pass to update
 *
 * @property body - The new message body string.
 * @property attributes - The new attributes metadata field you can use to store any data you wish.
 */
export interface MessageContextUpdateOptions {
  attributes?: string;
  body?: string;
}

/**
 * Options to pass to create
 *
 * @property body - The body
 * @property from - The from
 * @property attributes - The attributes
 */
export interface MessageListInstanceCreateOptions {
  attributes?: string;
  body: string;
  from?: string;
}

/**
 * Options to pass to each
 *
 * @property order - The order
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 */
export interface MessageListInstanceEachOptions {
  callback?: (item: MessageInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  order?: message.order_type;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property order - The order
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
export interface MessageListInstanceOptions {
  limit?: number;
  order?: message.order_type;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property order - The order
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
export interface MessageListInstancePageOptions {
  order?: message.order_type;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class MessagePage extends Page {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.ChannelContext.MessagePage
   * @augments Page
   * @description Initialize the MessagePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Chat.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of MessageInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class MessageInstance {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.ChannelContext.MessageInstance
   * @description Initialize the MessageContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this message.
   * @property attributes - An optional string metadata field you can use to store any data you wish.
   * @property serviceSid - The unique id of the Service this message belongs to.
   * @property to - The unique id of the Channel this message was sent to.
   * @property channelSid - The channel_sid
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property wasEdited - true if the message has been updated since it was created.
   * @property from - The identity of the message's author.
   * @property body - The contents of the message.
   * @property index - The index of the message within the Channel
   * @property url - An absolute URL for this message.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this message belongs to.
   * @param channelSid - The channel_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V1, payload: object, serviceSid: sid, channelSid: sid, sid: sid);

  _proxy?: MessageContext;
  /**
   * fetch a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MessageInstance) => any);
  /**
   * remove a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: MessageInstance) => any);
  /**
   * Produce a plain JSON object version of the MessageInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
  /**
   * update a MessageInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: MessageInstanceUpdateOptions, callback?: (error: Error | null, items: MessageInstance) => any);
}


declare class MessageContext {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.ChannelContext.MessageContext
   * @description Initialize the MessageContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param channelSid - The channel_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V1, serviceSid: sid, channelSid: sid, sid: sid);

  /**
   * fetch a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MessageContext) => any);
  /**
   * remove a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: MessageContext) => any);
  /**
   * update a MessageInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: MessageContextUpdateOptions, callback?: (error: Error | null, items: MessageContext) => any);
}

export { MessageContext, MessageInstance, MessageList, MessageListInstance, MessagePage, MessagePayload, MessageResource, MessageSolution }
