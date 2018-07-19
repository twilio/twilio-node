/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2 = require('../../../V2');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the UserChannelList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this channel belongs to.
 * @param userSid - A 34 character string that uniquely identifies this resource.
 */
declare function UserChannelList(version: V2, serviceSid: string, userSid: string): UserChannelListInstance;

interface UserChannelResource {
  account_sid: string;
  channel_sid: string;
  last_consumed_message_index: number;
  links: string;
  member_sid: string;
  service_sid: string;
  status: UserChannelChannelStatus;
  unread_messages_count: number;
}

interface UserChannelPayload extends UserChannelResource, Page.TwilioResponsePayload {
}

interface UserChannelSolution {
  serviceSid?: string;
  userSid?: string;
}

interface UserChannelListInstance {
  /**
   * Streams UserChannelInstance records from the API.
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
  each(opts?: UserChannelListInstanceEachOptions, callback?: (item: UserChannelInstance, done: (err?: Error) => void) => void);
  /**
   * Retrieve a single target page of UserChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists UserChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: UserChannelListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of UserChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: UserChannelListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to each
 *
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
export interface UserChannelListInstanceEachOptions {
  callback?: (item: UserChannelInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
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
export interface UserChannelListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
export interface UserChannelListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class UserChannelPage extends Page {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext.UserContext.UserChannelPage
   * @augments Page
   * @description Initialize the UserChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.IpMessaging.V2, response: Response<string>, solution: object);

  /**
   * Build an instance of UserChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class UserChannelInstance {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext.UserContext.UserChannelInstance
   * @description Initialize the UserChannelContext
   *
   * @property accountSid - The unique id of the Account responsible for this channel.
   * @property serviceSid - The unique id of the Service this channel belongs to.
   * @property channelSid - The unique id of a Channel.
   * @property memberSid - The unique id of this User as a Member in this Channel.
   * @property status - The status of the User on this Channel.
   * @property lastConsumedMessageIndex - The index of the last read Message in this Channel for this User.
   * @property unreadMessagesCount - The count of unread Messages in this Channel for this User.
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this channel belongs to.
   * @param userSid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: Twilio.IpMessaging.V2, payload: object, serviceSid: sid, userSid: sid);

  /**
   * Produce a plain JSON object version of the UserChannelInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
}

export { UserChannelInstance, UserChannelList, UserChannelListInstance, UserChannelPage, UserChannelPayload, UserChannelResource, UserChannelSolution }
