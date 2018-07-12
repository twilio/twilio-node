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
 * @constructor Twilio.Api.V2010.AccountContext.UsageContext.TriggerList
 * @description Initialize the TriggerList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function TriggerList(version: V2010, accountSid: string): TriggerListInstance;

/**
 * Options to pass to update
 *
 * @property callbackMethod - HTTP method to use with callback_url
 * @property callbackUrl - URL Twilio will request when the trigger fires
 * @property friendlyName - A user-specified, human-readable name for the trigger.
 */
export interface UpdateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  friendlyName?: string;
}

/**
 * Options to pass to update
 *
 * @property callbackMethod - HTTP method to use with callback_url
 * @property callbackUrl - URL Twilio will request when the trigger fires
 * @property friendlyName - A user-specified, human-readable name for the trigger.
 */
export interface UpdateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  friendlyName?: string;
}


declare class TriggerPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.UsageContext.TriggerPage
   * @augments Page
   * @description Initialize the TriggerPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of TriggerInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class TriggerInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.UsageContext.TriggerInstance
   * @description Initialize the TriggerContext
   *
   * @property accountSid - The account this trigger monitors.
   * @property apiVersion - The api_version
   * @property callbackMethod - HTTP method to use with callback_url
   * @property callbackUrl - URL Twilio will request when the trigger fires
   * @property currentValue - The current value of the field the trigger is watching.
   * @property dateCreated - The date this resource was created
   * @property dateFired - The date the trigger was last fired
   * @property dateUpdated - The date this resource was last updated
   * @property friendlyName - A user-specified, human-readable name for the trigger.
   * @property recurring - How this trigger recurs
   * @property sid - The trigger's unique Sid
   * @property triggerBy - The field in the UsageRecord that fires the trigger
   * @property triggerValue - the value at which the trigger will fire
   * @property uri - The URI for this resource
   * @property usageCategory - The usage category the trigger watches
   * @property usageRecordUri - The URI of the UsageRecord this trigger is watching
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   * @param sid - Fetch by unique usage-trigger Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: TriggerContext;
  /**
   * fetch a TriggerInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a TriggerInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the TriggerInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerInstance
   * @instance
   */
  toJSON();
  /**
   * update a TriggerInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class TriggerContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.UsageContext.TriggerContext
   * @description Initialize the TriggerContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique usage-trigger Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  /**
   * fetch a TriggerInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a TriggerInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a TriggerInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { TriggerContext, TriggerInstance, TriggerList, TriggerPage }
