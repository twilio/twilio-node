/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2 = require('../../V2');
import { SerializableClass } from '../../../../interfaces';
import { UserBindingList } from './user/userBinding';
import { UserChannelList } from './user/userChannel';

/**
 * @description Initialize the UserList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this user belongs to.
 */
declare function UserList(version: V2, serviceSid: string): UserListInstance;

interface UserResource {
  account_sid: string;
  attributes: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  identity: string;
  is_notifiable: boolean;
  is_online: boolean;
  joined_channels_count: number;
  links: string;
  role_sid: string;
  service_sid: string;
  sid: string;
  url: string;
}

interface UserPayload extends UserResource, Page.TwilioResponsePayload {
}

interface UserSolution {
  serviceSid?: string;
}

interface UserListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): UserContext;
  /**
   * create a UserInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: UserListInstanceCreateOptions, callback?: (error: Error | null, items: UserListInstance) => any): Promise<UserInstance>;
  /**
   * Streams UserInstance records from the API.
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
  each(opts?: UserListInstanceEachOptions, callback?: (item: UserInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a user
   *
   * @param sid - The sid
   */
  get(sid: string): UserContext;
  /**
   * Retrieve a single target page of UserInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function): Promise<UserPage>;
  /**
   * @description Lists UserInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: UserListInstanceOptions, callback?: function): Promise<UserInstance[]>;
  /**
   * Retrieve a single page of UserInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: UserListInstancePageOptions, callback?: function): Promise<UserPage>;
}

/**
 * Options to pass to update
 *
 * @property roleSid - The unique id of the [Role][role] assigned to this user.
 * @property attributes - An optional string used to contain any metadata or other information for the User.
 * @property friendlyName - An optional human readable string representing the user.
 */
export interface UserInstanceUpdateOptions {
  attributes?: string;
  friendlyName?: string;
  roleSid?: string;
}

/**
 * Options to pass to update
 *
 * @property roleSid - The unique id of the [Role][role] assigned to this user.
 * @property attributes - An optional string used to contain any metadata or other information for the User.
 * @property friendlyName - An optional human readable string representing the user.
 */
export interface UserContextUpdateOptions {
  attributes?: string;
  friendlyName?: string;
  roleSid?: string;
}

/**
 * Options to pass to create
 *
 * @property identity - A unique string that identifies the user within this service - often a username or email address.
 * @property roleSid - The unique id of the Role assigned to this user.
 * @property attributes - An optional string used to contain any metadata or other information for the User.
 * @property friendlyName - An optional human readable string representing the user.
 */
export interface UserListInstanceCreateOptions {
  attributes?: string;
  friendlyName?: string;
  identity: string;
  roleSid?: string;
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
export interface UserListInstanceEachOptions {
  callback?: (item: UserInstance, done: (err?: Error) => void) => void;
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
export interface UserListInstanceOptions {
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
export interface UserListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class UserPage extends Page {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.UserPage
   * @augments Page
   * @description Initialize the UserPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Chat.V2, response: Response<string>, solution: object);

  /**
   * Build an instance of UserInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class UserInstance {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.UserInstance
   * @description Initialize the UserContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this user.
   * @property serviceSid - The unique id of the Service this user belongs to.
   * @property attributes - An optional string metadata field you can use to store any data you wish.
   * @property friendlyName - The human-readable name of this user.
   * @property roleSid - The unique id of the [Role][role] assigned to this user.
   * @property identity - A unique string that identifies the user within this service - often a username or email address.
   * @property isOnline - Indicates whether the User is actively connected to the Service instance and online.
   * @property isNotifiable - Indicates whether the User has a potentially valid Push Notification registration  for the Service instance.
   * @property dateCreated - The date that this resource was created in ISO 8601 format.
   * @property dateUpdated - The date that this resource was last updated in ISO 8601 format.
   * @property joinedChannelsCount - The number of Channels this User is a Member of.
   * @property links - The links
   * @property url - An absolute URL for this user.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this user belongs to.
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V2, payload: object, serviceSid: sid, sid: sid_like);

  _proxy?: UserContext;
  /**
   * fetch a UserInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: UserInstance) => any);
  /**
   * remove a UserInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: UserInstance) => any);
  /**
   * Produce a plain JSON object version of the UserInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
  /**
   * update a UserInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: UserInstanceUpdateOptions, callback?: (error: Error | null, items: UserInstance) => any);
  /**
   * Access the userBindings
   */
  userBindings();
  /**
   * Access the userChannels
   */
  userChannels();
}


declare class UserContext {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.UserContext
   * @description Initialize the UserContext
   *
   * @property userChannels - userChannels resource
   * @property userBindings - userBindings resource
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V2, serviceSid: sid, sid: sid_like);

  /**
   * fetch a UserInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: UserContext) => any);
  /**
   * remove a UserInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: UserContext) => any);
  /**
   * update a UserInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: UserContextUpdateOptions, callback?: (error: Error | null, items: UserContext) => any);
  userBindings?: Twilio.Chat.V2.ServiceContext.UserContext.UserBindingList;
  userChannels?: Twilio.Chat.V2.ServiceContext.UserContext.UserChannelList;
}

export { UserContext, UserInstance, UserList, UserListInstance, UserPage, UserPayload, UserResource, UserSolution }
