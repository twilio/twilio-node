/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V2 = require('../../V2');
import deserialize = require('../../../../base/deserialize');
import serialize = require('../../../../base/serialize');
import values = require('../../../../base/values');
import { InviteList } from './channel/invite';
import { MemberList } from './channel/member';
import { MessageList } from './channel/message';
import { WebhookList } from './channel/webhook';

/**
 * @description Initialize the ChannelList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this channel belongs to.
 */
declare function ChannelList(version: V2, serviceSid: string): ChannelListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A human-readable name for the Channel.
 * @property uniqueName - A unique, addressable name for the Channel.
 * @property attributes - An optional metadata field you can use to store any data you wish.
 * @property dateCreated - The optional ISO8601 time specifying the datetime the Channel should be set as being created.
 * @property dateUpdated - The optional ISO8601 time specifying the datetime the Channel should be set as having been last updated.
 * @property createdBy - Optional field to specify the Identity of the User that created the Channel.
 */
export interface UpdateOptions {
  attributes?: string;
  createdBy?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  friendlyName?: string;
  uniqueName?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human-readable name for the Channel.
 * @property uniqueName - A unique, addressable name for the Channel.
 * @property attributes - An optional metadata field you can use to store any data you wish.
 * @property dateCreated - The optional ISO8601 time specifying the datetime the Channel should be set as being created.
 * @property dateUpdated - The optional ISO8601 time specifying the datetime the Channel should be set as having been last updated.
 * @property createdBy - Optional field to specify the Identity of the User that created the Channel.
 */
export interface UpdateOptions {
  attributes?: string;
  createdBy?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  friendlyName?: string;
  uniqueName?: string;
}


declare class ChannelPage extends Page {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.ChannelPage
   * @augments Page
   * @description Initialize the ChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Chat.V2, response: object, solution: object);

  /**
   * Build an instance of ChannelInstance
   *
   * @function getInstance
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ChannelInstance {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @description Initialize the ChannelContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this channel.
   * @property serviceSid - The unique id of the Service this channel belongs to.
   * @property friendlyName - The human-readable name of this channel.
   * @property uniqueName - The unique, addressable name of this channel.
   * @property attributes - An optional string metadata field you can use to store any data you wish.
   * @property type - The visibility of this channel - either public or private
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property createdBy - Identity of the channel's creator.
   * @property membersCount - The number of Members in the Channel
   * @property messagesCount - The number of Messages in the Channel
   * @property url - An absolute URL for this channel.
   * @property links - Absolute URLs to access the Members, Messages , Invites and, if it exists the last Message for this Channel.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this channel belongs to.
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V2, payload: object, serviceSid: sid, sid: sid_like);

  _proxy?: ChannelContext;
  /**
   * fetch a ChannelInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the invites
   *
   * @function invites
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @instance
   */
  invites();
  /**
   * Access the members
   *
   * @function members
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @instance
   */
  members();
  /**
   * Access the messages
   *
   * @function messages
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @instance
   */
  messages();
  /**
   * remove a ChannelInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the ChannelInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @instance
   */
  toJSON();
  /**
   * update a ChannelInstance
   *
   * @function update
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  /**
   * Access the webhooks
   *
   * @function webhooks
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @instance
   */
  webhooks();
}


declare class ChannelContext {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.ChannelContext
   * @description Initialize the ChannelContext
   *
   * @property members - members resource
   * @property messages - messages resource
   * @property invites - invites resource
   * @property webhooks - webhooks resource
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V2, serviceSid: sid, sid: sid_like);

  /**
   * fetch a ChannelInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  invites?: Twilio.Chat.V2.ServiceContext.ChannelContext.InviteList;
  members?: Twilio.Chat.V2.ServiceContext.ChannelContext.MemberList;
  messages?: Twilio.Chat.V2.ServiceContext.ChannelContext.MessageList;
  /**
   * remove a ChannelInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a ChannelInstance
   *
   * @function update
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  webhooks?: Twilio.Chat.V2.ServiceContext.ChannelContext.WebhookList;
}

export { ChannelContext, ChannelInstance, ChannelList, ChannelPage }
