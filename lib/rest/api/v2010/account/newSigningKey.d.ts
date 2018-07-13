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
 * @description Initialize the NewSigningKeyList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function NewSigningKeyList(version: V2010, accountSid: string): NewSigningKeyListInstance;


declare class NewSigningKeyPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.NewSigningKeyPage
   * @augments Page
   * @description Initialize the NewSigningKeyPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of NewSigningKeyInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.NewSigningKeyPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class NewSigningKeyInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.NewSigningKeyInstance
   * @description Initialize the NewSigningKeyContext
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
   * Produce a plain JSON object version of the NewSigningKeyInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.NewSigningKeyInstance
   * @instance
   */
  toJSON();
}

export { NewSigningKeyInstance, NewSigningKeyList, NewSigningKeyPage }
