/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V1 = require('../../V1');
import deserialize = require('../../../../base/deserialize');
import serialize = require('../../../../base/serialize');
import values = require('../../../../base/values');

/**
 * @constructor Twilio.Wireless.V1.SimContext.DataSessionList
 * @description Initialize the DataSessionList
 *
 * @param version - Version of the resource
 * @param simSid - The unique id of the SIM resource that this Data Session is for.
 */
declare function DataSessionList(version: V1, simSid: string): DataSessionListInstance;


declare class DataSessionPage extends Page {
  /**
   * @constructor Twilio.Wireless.V1.SimContext.DataSessionPage
   * @augments Page
   * @description Initialize the DataSessionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Wireless.V1, response: object, solution: object);

  /**
   * Build an instance of DataSessionInstance
   *
   * @function getInstance
   * @memberof Twilio.Wireless.V1.SimContext.DataSessionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class DataSessionInstance {
  /**
   * @constructor Twilio.Wireless.V1.SimContext.DataSessionInstance
   * @description Initialize the DataSessionContext
   *
   * @property sid - The unique id of the Data Session resource that this Data Record is for.
   * @property simSid - The unique id of the SIM resource that this Data Session is for.
   * @property accountSid - The unique id of the Account that the SIM belongs to.
   * @property radioLink - The generation of wireless technology that the device was attached to the cellular tower using.
   * @property operatorMcc - The 'mobile country code' is the unique id of the home country where the Data Session took place.
   * @property operatorMnc - The 'mobile network code' is the unique id specific to the mobile operator network where the Data Session took place.
   * @property operatorCountry - The three letter country code representing where the device's Data Session took place.
   * @property operatorName - The friendly name of the mobile operator network that the SIM-connected device is attached to.
   * @property cellId - The unique id of the cellular tower that the device was attached to at the moment when the Data Session was last updated.
   * @property cellLocationEstimate - An object representing the estimated location where the device's Data Session took place.
   * @property packetsUploaded - The number of packets uploaded by the device between the start time and when the Data Session was last updated.
   * @property packetsDownloaded - The number of packets downloaded by the device between the start time and when the Data Session was last updated.
   * @property lastUpdated - The date that this resource was last updated, given as GMT in ISO 8601 format.
   * @property start - The date that this Data Session started, given as GMT in ISO 8601 format.
   * @property end - The date that this record ended, given as GMT in ISO 8601 format.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param simSid - The unique id of the SIM resource that this Data Session is for.
   */
  constructor(version: Twilio.Wireless.V1, payload: object, simSid: sid_like);

  /**
   * Produce a plain JSON object version of the DataSessionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Wireless.V1.SimContext.DataSessionInstance
   * @instance
   */
  toJSON();
}

export { DataSessionInstance, DataSessionList, DataSessionPage }
