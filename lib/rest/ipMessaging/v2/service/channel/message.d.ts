/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V2 = require('../../../V2');
import deserialize = require('../../../../../base/deserialize');
import serialize = require('../../../../../base/serialize');
import values = require('../../../../../base/values');

/**
 * @description Initialize the MessageList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this message belongs to.
 * @param channelSid - The channel_sid
 */
declare function MessageList(version: V2, serviceSid: string, channelSid: string): MessageListInstance;

/**
 * Options to pass to update
 *
 * @property body - The message body string.
 * @property attributes - The attributes metadata field you can use to store any data you wish.
 * @property dateCreated - The ISO8601 time specifying the datetime the Message should be set as being created.
 * @property dateUpdated - The ISO8601 time specifying the datetime the Message should be set as having been last updated.
 * @property lastUpdatedBy - Specify the Identity of the User that last updated the Message
 */
export interface UpdateOptions {
  attributes?: string;
  body?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  lastUpdatedBy?: string;
}

/**
 * Options to pass to update
 *
 * @property body - The message body string.
 * @property attributes - The attributes metadata field you can use to store any data you wish.
 * @property dateCreated - The ISO8601 time specifying the datetime the Message should be set as being created.
 * @property dateUpdated - The ISO8601 time specifying the datetime the Message should be set as having been last updated.
 * @property lastUpdatedBy - Specify the Identity of the User that last updated the Message
 */
export interface UpdateOptions {
  attributes?: string;
  body?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  lastUpdatedBy?: string;
}


declare class MessagePage extends Page {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessagePage
   * @augments Page
   * @description Initialize the MessagePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.IpMessaging.V2, response: object, solution: object);

  /**
   * Build an instance of MessageInstance
   *
   * @function getInstance
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessagePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class MessageInstance {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageInstance
   * @description Initialize the MessageContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this message.
   * @property attributes - A string metadata field you can use to store any data you wish.
   * @property serviceSid - The unique id of the Service this message belongs to.
   * @property to - The unique id of the Channel this message was sent to.
   * @property channelSid - The channel_sid
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property lastUpdatedBy - Field to specify the Identity of the User that last updated the Message
   * @property wasEdited - true if the message has been updated since it was created.
   * @property from - The identity of the message's author.
   * @property body - The contents of the message.
   * @property index - The index of the message within the Channel
   * @property type - Message type.
   * @property media - If a Media resource instance is attached to the Message, this will contain the Media object for the attached Media.
   * @property url - An absolute URL for this message.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this message belongs to.
   * @param channelSid - The channel_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V2, payload: object, serviceSid: sid, channelSid: sid, sid: sid);

  _proxy?: MessageContext;
  /**
   * fetch a MessageInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a MessageInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the MessageInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageInstance
   * @instance
   */
  toJSON();
  /**
   * update a MessageInstance
   *
   * @function update
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class MessageContext {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageContext
   * @description Initialize the MessageContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param channelSid - The channel_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V2, serviceSid: sid, channelSid: sid_like, sid: sid);

  /**
   * fetch a MessageInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a MessageInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a MessageInstance
   *
   * @function update
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { MessageContext, MessageInstance, MessageList, MessagePage }
