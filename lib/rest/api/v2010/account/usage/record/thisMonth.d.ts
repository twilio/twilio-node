/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import V2010 = require('../../../../V2010');
import deserialize = require('../../../../../../base/deserialize');
import serialize = require('../../../../../../base/serialize');
import values = require('../../../../../../base/values');

/**
 * @description Initialize the ThisMonthList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function ThisMonthList(version: V2010, accountSid: string): ThisMonthListInstance;


declare class ThisMonthPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.ThisMonthPage
   * @augments Page
   * @description Initialize the ThisMonthPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of ThisMonthInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.ThisMonthPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ThisMonthInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.ThisMonthInstance
   * @description Initialize the ThisMonthContext
   *
   * @property accountSid - The Account that accrued the usage.
   * @property apiVersion - The api_version
   * @property category - The category of usage.
   * @property count - The number of usage events.
   * @property countUnit - The units in which Count is measured.
   * @property description - A human-readable description of the usage category.
   * @property endDate - The last date for which usage is included in this UsageRecord, formatted as YYYY-MM-DD.
   * @property price - The total price of the usage, in the currency associated with the account.
   * @property priceUnit - The currency in which Price is measured, in ISO 4127 format.
   * @property startDate - The first date for which usage is included in this UsageRecord, formatted as YYYY-MM-DD.
   * @property subresourceUris - Subresource Uris for this UsageRecord.
   * @property uri - The URI that returns only this UsageRecord, relative to https://api.
   * @property usage - The amount of billed usage.
   * @property usageUnit - The units in which Usage is measured.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid);

  /**
   * Produce a plain JSON object version of the ThisMonthInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.ThisMonthInstance
   * @instance
   */
  toJSON();
}

export { ThisMonthInstance, ThisMonthList, ThisMonthPage }
