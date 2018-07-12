/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import V2010 = require('../../../../V2010');
import deserialize = require('../../../../../../base/deserialize');
import values = require('../../../../../../base/values');

/**
 * @constructor Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadList
 * @description Initialize the PayloadList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 * @param referenceSid - A string that uniquely identifies the recording.
 * @param addOnResultSid - A string that uniquely identifies the result
 */
declare function PayloadList(version: V2010, accountSid: string, referenceSid: string, addOnResultSid: string): PayloadListInstance;


declare class PayloadPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadPage
   * @augments Page
   * @description Initialize the PayloadPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of PayloadInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class PayloadInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadInstance
   * @description Initialize the PayloadContext
   *
   * @property sid - A string that uniquely identifies this payload
   * @property addOnResultSid - A string that uniquely identifies the result
   * @property accountSid - The unique sid that identifies this account
   * @property label - A string that describes the payload.
   * @property addOnSid - A string that uniquely identifies the Add-on.
   * @property addOnConfigurationSid - A string that uniquely identifies the Add-on configuration.
   * @property contentType - The MIME type of the payload.
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property referenceSid - A string that uniquely identifies the recording.
   * @property subresourceUris - A dictionary of URIs for related resources
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param referenceSid - A string that uniquely identifies the recording.
   * @param addOnResultSid - A string that uniquely identifies the result
   * @param sid - Fetch by unique payload Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, referenceSid: sid, addOnResultSid: sid, sid: sid);

  _proxy?: PayloadContext;
  /**
   * fetch a PayloadInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a PayloadInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the PayloadInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadInstance
   * @instance
   */
  toJSON();
}


declare class PayloadContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadContext
   * @description Initialize the PayloadContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param referenceSid - The reference_sid
   * @param addOnResultSid - The add_on_result_sid
   * @param sid - Fetch by unique payload Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, referenceSid: sid, addOnResultSid: sid, sid: sid);

  /**
   * fetch a PayloadInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a PayloadInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { PayloadContext, PayloadInstance, PayloadList, PayloadPage }
