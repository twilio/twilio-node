/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import deserialize = require('../../../base/deserialize');
import serialize = require('../../../base/serialize');
import values = require('../../../base/values');

/**
 * @description Initialize the RatePlanList
 *
 * @param version - Version of the resource
 */
declare function RatePlanList(version: V1): RatePlanListInstance;

/**
 * Options to pass to update
 *
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the Sid.
 * @property friendlyName - A user-provided string that identifies this resource.
 */
export interface UpdateOptions {
  friendlyName?: string;
  uniqueName?: string;
}

/**
 * Options to pass to update
 *
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the Sid.
 * @property friendlyName - A user-provided string that identifies this resource.
 */
export interface UpdateOptions {
  friendlyName?: string;
  uniqueName?: string;
}


declare class RatePlanPage extends Page {
  /**
   * @constructor Twilio.Wireless.V1.RatePlanPage
   * @augments Page
   * @description Initialize the RatePlanPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Wireless.V1, response: object, solution: object);

  /**
   * Build an instance of RatePlanInstance
   *
   * @function getInstance
   * @memberof Twilio.Wireless.V1.RatePlanPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class RatePlanInstance {
  /**
   * @constructor Twilio.Wireless.V1.RatePlanInstance
   * @description Initialize the RatePlanContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid.
   * @property accountSid - The unique id of the Account that this Rate Plan belongs to.
   * @property friendlyName - A user-provided string that identifies this resource.
   * @property dataEnabled - Defines whether SIMs are capable of using GPRS/3G/4G/LTE data connectivity.
   * @property dataMetering - The model by which to meter data usage, in accordance with the two available data metering models.
   * @property dataLimit - Network-enforced limit specifying the total Megabytes of data usage allowed during one month on the home network.
   * @property messagingEnabled - Defines whether SIMs are capable of making and sending and receiving SMS via Commands.
   * @property voiceEnabled - Defines whether SIMs are capable of making and receiving voice calls.
   * @property nationalRoamingEnabled - Defines whether SIMs can roam onto other networks in the SIM's home country.
   * @property nationalRoamingDataLimit - Network-enforced limit specifying the total Megabytes of national roaming data usage allowed during one month.
   * @property internationalRoaming - The international_roaming
   * @property internationalRoamingDataLimit - The international_roaming_data_limit
   * @property dateCreated - The date that this resource was created, given as GMT in ISO 8601 format.
   * @property dateUpdated - The date that this resource was last updated, given as GMT in ISO 8601 format.
   * @property url - The URL for this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Wireless.V1, payload: object, sid: sid_like);

  _proxy?: RatePlanContext;
  /**
   * fetch a RatePlanInstance
   *
   * @function fetch
   * @memberof Twilio.Wireless.V1.RatePlanInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RatePlanInstance
   *
   * @function remove
   * @memberof Twilio.Wireless.V1.RatePlanInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the RatePlanInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Wireless.V1.RatePlanInstance
   * @instance
   */
  toJSON();
  /**
   * update a RatePlanInstance
   *
   * @function update
   * @memberof Twilio.Wireless.V1.RatePlanInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class RatePlanContext {
  /**
   * @constructor Twilio.Wireless.V1.RatePlanContext
   * @description Initialize the RatePlanContext
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Wireless.V1, sid: sid_like);

  /**
   * fetch a RatePlanInstance
   *
   * @function fetch
   * @memberof Twilio.Wireless.V1.RatePlanContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RatePlanInstance
   *
   * @function remove
   * @memberof Twilio.Wireless.V1.RatePlanContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a RatePlanInstance
   *
   * @function update
   * @memberof Twilio.Wireless.V1.RatePlanContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { RatePlanContext, RatePlanInstance, RatePlanList, RatePlanPage }
