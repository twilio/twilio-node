/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V2010 = require('../../../V2010');
import deserialize = require('../../../../../base/deserialize');
import values = require('../../../../../base/values');

/**
 * @constructor Twilio.Api.V2010.AccountContext.QueueContext.MemberList
 * @description Initialize the MemberList
 *
 * @param version - Version of the resource
 * @param accountSid - The account_sid
 * @param queueSid - A string that uniquely identifies this queue
 */
declare function MemberList(version: V2010, accountSid: string, queueSid: string): MemberListInstance;

/**
 * Options to pass to update
 *
 * @property url - The url
 * @property method - The method
 */
export interface UpdateOptions {
  method: string;
  url: string;
}

/**
 * Options to pass to update
 *
 * @property url - The url
 * @property method - The method
 */
export interface UpdateOptions {
  method: string;
  url: string;
}


declare class MemberPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.QueueContext.MemberPage
   * @augments Page
   * @description Initialize the MemberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of MemberInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class MemberInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.QueueContext.MemberInstance
   * @description Initialize the MemberContext
   *
   * @property callSid - Unique string that identifies this resource
   * @property dateEnqueued - The date the member was enqueued
   * @property position - This member's current position in the queue.
   * @property uri - The uri
   * @property waitTime - The number of seconds the member has been in the queue.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param queueSid - A string that uniquely identifies this queue
   * @param callSid - The call_sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, queueSid: sid, callSid: sid);

  _proxy?: MemberContext;
  /**
   * fetch a MemberInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the MemberInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberInstance
   * @instance
   */
  toJSON();
  /**
   * update a MemberInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class MemberContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.QueueContext.MemberContext
   * @description Initialize the MemberContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param queueSid - The Queue in which to find the members
   * @param callSid - The call_sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, queueSid: sid, callSid: sid);

  /**
   * fetch a MemberInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * update a MemberInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { MemberContext, MemberInstance, MemberList, MemberPage }
