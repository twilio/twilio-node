/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V2010 = require('../../V2010');
import deserialize = require('../../../../base/deserialize');
import values = require('../../../../base/values');

/**
 * @constructor Twilio.Api.V2010.AccountContext.NewKeyList
 * @description Initialize the NewKeyList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function NewKeyList(version: V2010, accountSid: string): NewKeyListInstance;


declare class NewKeyPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.NewKeyPage
   * @augments Page
   * @description Initialize the NewKeyPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of NewKeyInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.NewKeyPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class NewKeyInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.NewKeyInstance
   * @description Initialize the NewKeyContext
   *
   * @property sid - The sid
   * @property friendlyName - The friendly_name
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property secret - The secret
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid);

  /**
   * Produce a plain JSON object version of the NewKeyInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.NewKeyInstance
   * @instance
   */
  toJSON();
}

export { NewKeyInstance, NewKeyList, NewKeyPage }
