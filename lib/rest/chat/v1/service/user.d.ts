/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V1 = require('../../V1');
import deserialize = require('../../../../base/deserialize');
import values = require('../../../../base/values');
import { UserChannelList } from './user/userChannel';

/**
 * @description Initialize the UserList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this user belongs to.
 */
declare function UserList(version: V1, serviceSid: string): UserListInstance;

/**
 * Options to pass to update
 *
 * @property roleSid - The unique id of the [Role][role] assigned to this user.
 * @property attributes - An optional string used to contain any metadata or other information for the User.
 * @property friendlyName - An optional human readable string representing the user.
 */
export interface UpdateOptions {
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
export interface UpdateOptions {
  attributes?: string;
  friendlyName?: string;
  roleSid?: string;
}


declare class UserPage extends Page {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.UserPage
   * @augments Page
   * @description Initialize the UserPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Chat.V1, response: object, solution: object);

  /**
   * Build an instance of UserInstance
   *
   * @function getInstance
   * @memberof Twilio.Chat.V1.ServiceContext.UserPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class UserInstance {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.UserInstance
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
   * @property joinedChannelsCount - The joined_channels_count
   * @property links - The links
   * @property url - An absolute URL for this user.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this user belongs to.
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V1, payload: object, serviceSid: sid, sid: sid_like);

  _proxy?: UserContext;
  /**
   * fetch a UserInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V1.ServiceContext.UserInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a UserInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V1.ServiceContext.UserInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the UserInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Chat.V1.ServiceContext.UserInstance
   * @instance
   */
  toJSON();
  /**
   * update a UserInstance
   *
   * @function update
   * @memberof Twilio.Chat.V1.ServiceContext.UserInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  /**
   * Access the userChannels
   *
   * @function userChannels
   * @memberof Twilio.Chat.V1.ServiceContext.UserInstance
   * @instance
   */
  userChannels();
}


declare class UserContext {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.UserContext
   * @description Initialize the UserContext
   *
   * @property userChannels - userChannels resource
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V1, serviceSid: sid, sid: sid_like);

  /**
   * fetch a UserInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V1.ServiceContext.UserContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a UserInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V1.ServiceContext.UserContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a UserInstance
   *
   * @function update
   * @memberof Twilio.Chat.V1.ServiceContext.UserContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  userChannels?: Twilio.Chat.V1.ServiceContext.UserContext.UserChannelList;
}

export { UserContext, UserInstance, UserList, UserPage }
