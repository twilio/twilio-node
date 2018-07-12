/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V1 = require('../../../V1');
import values = require('../../../../../base/values');

/**
 * @constructor Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextList
 * @description Initialize the EngagementContextList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param flowSid - The flow_sid
 * @param engagementSid - The engagement_sid
 */
declare function EngagementContextList(version: V1, flowSid: string, engagementSid: string): EngagementContextListInstance;


declare class EngagementContextPage extends Page {
  /**
   * @constructor Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextPage
   * @augments Page
   * @description Initialize the EngagementContextPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Studio.V1, response: object, solution: object);

  /**
   * Build an instance of EngagementContextInstance
   *
   * @function getInstance
   * @memberof Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class EngagementContextInstance {
  /**
   * @constructor Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextInstance
   * @description Initialize the EngagementContextContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property accountSid - The account_sid
   * @property context - The context
   * @property engagementSid - The engagement_sid
   * @property flowSid - The flow_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param flowSid - The flow_sid
   * @param engagementSid - The engagement_sid
   */
  constructor(version: Twilio.Studio.V1, payload: object, flowSid: sid, engagementSid: sid);

  _proxy?: EngagementContextContext;
  /**
   * fetch a EngagementContextInstance
   *
   * @function fetch
   * @memberof Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the EngagementContextInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextInstance
   * @instance
   */
  toJSON();
}


declare class EngagementContextContext {
  /**
   * @constructor Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextContext
   * @description Initialize the EngagementContextContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param flowSid - The flow_sid
   * @param engagementSid - The engagement_sid
   */
  constructor(version: Twilio.Studio.V1, flowSid: sid, engagementSid: sid);

  /**
   * fetch a EngagementContextInstance
   *
   * @function fetch
   * @memberof Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { EngagementContextContext, EngagementContextInstance, EngagementContextList, EngagementContextPage }
