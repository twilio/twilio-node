/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import deserialize = require('../../../base/deserialize');
import values = require('../../../base/values');

/**
 * @description Initialize the CommandList
 *
 * @param version - Version of the resource
 */
declare function CommandList(version: V1): CommandListInstance;


declare class CommandPage extends Page {
  /**
   * @constructor Twilio.Wireless.V1.CommandPage
   * @augments Page
   * @description Initialize the CommandPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Wireless.V1, response: object, solution: object);

  /**
   * Build an instance of CommandInstance
   *
   * @function getInstance
   * @memberof Twilio.Wireless.V1.CommandPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class CommandInstance {
  /**
   * @constructor Twilio.Wireless.V1.CommandInstance
   * @description Initialize the CommandContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account that this Command belongs to.
   * @property simSid - The unique ID of the SIM that this Command was sent to or from.
   * @property command - The message being sent to or from the SIM.
   * @property commandMode - A string representing which mode the SMS was sent or received using.
   * @property status - A string representing the status of the Command.
   * @property direction - The direction of the Command.
   * @property dateCreated - The date that this resource was created, given as GMT in ISO 8601 format.
   * @property dateUpdated - The date that this resource was last updated, given as GMT in ISO 8601 format.
   * @property url - The URL for this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Wireless.V1, payload: object, sid: sid);

  _proxy?: CommandContext;
  /**
   * fetch a CommandInstance
   *
   * @function fetch
   * @memberof Twilio.Wireless.V1.CommandInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the CommandInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Wireless.V1.CommandInstance
   * @instance
   */
  toJSON();
}


declare class CommandContext {
  /**
   * @constructor Twilio.Wireless.V1.CommandContext
   * @description Initialize the CommandContext
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Wireless.V1, sid: sid);

  /**
   * fetch a CommandInstance
   *
   * @function fetch
   * @memberof Twilio.Wireless.V1.CommandContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { CommandContext, CommandInstance, CommandList, CommandPage }
