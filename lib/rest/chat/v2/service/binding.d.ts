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

/**
 * @constructor Twilio.Chat.V2.ServiceContext.BindingList
 * @description Initialize the BindingList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this binding belongs to.
 */
declare function BindingList(version: V2, serviceSid: string): BindingListInstance;


declare class BindingPage extends Page {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.BindingPage
   * @augments Page
   * @description Initialize the BindingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Chat.V2, response: object, solution: object);

  /**
   * Build an instance of BindingInstance
   *
   * @function getInstance
   * @memberof Twilio.Chat.V2.ServiceContext.BindingPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class BindingInstance {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.BindingInstance
   * @description Initialize the BindingContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this binding.
   * @property serviceSid - The unique id of the Service this binding belongs to.
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property endpoint - The unique endpoint identifier for this Binding.
   * @property identity - A unique string identifier for the Binding for this User in this Service.
   * @property credentialSid - The unique id of the Credential for this binding.
   * @property bindingType - The push technology to use for this binding.
   * @property messageTypes - List of message types for this binding.
   * @property url - An absolute URL for this binding.
   * @property links - Absolute URLs to access the Users for this Binding.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this binding belongs to.
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V2, payload: object, serviceSid: sid, sid: sid);

  _proxy?: BindingContext;
  /**
   * fetch a BindingInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V2.ServiceContext.BindingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a BindingInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V2.ServiceContext.BindingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the BindingInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Chat.V2.ServiceContext.BindingInstance
   * @instance
   */
  toJSON();
}


declare class BindingContext {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.BindingContext
   * @description Initialize the BindingContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V2, serviceSid: sid, sid: sid);

  /**
   * fetch a BindingInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V2.ServiceContext.BindingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a BindingInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V2.ServiceContext.BindingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { BindingContext, BindingInstance, BindingList, BindingPage }
