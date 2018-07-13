/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Studio = require('../../Studio');
import deserialize = require('../../../../base/deserialize');
import values = require('../../../../base/values');
import { StepList } from './engagement/step';

/**
 * @description Initialize the EngagementList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param flowSid - Flow Sid.
 */
declare function EngagementList(version: Studio, flowSid: string): EngagementListInstance;


declare class EngagementPage extends Page {
  /**
   * @constructor Twilio.Preview.Studio.FlowContext.EngagementPage
   * @augments Page
   * @description Initialize the EngagementPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Studio, response: object, solution: object);

  /**
   * Build an instance of EngagementInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Studio.FlowContext.EngagementPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class EngagementInstance {
  /**
   * @constructor Twilio.Preview.Studio.FlowContext.EngagementInstance
   * @description Initialize the EngagementContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Engagement.
   * @property accountSid - Account Sid.
   * @property flowSid - Flow Sid.
   * @property contactSid - Contact Sid.
   * @property contactChannelAddress - The phone number, SIP address or Client identifier that triggered this Engagement.
   * @property status - The Status of this Engagement
   * @property context - Nested resource URLs.
   * @property dateCreated - The date this Engagement was created
   * @property dateUpdated - The date this Engagement was updated
   * @property url - The URL of this resource.
   * @property links - Nested resource URLs.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param flowSid - Flow Sid.
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Studio, payload: object, flowSid: sid, sid: sid);

  _proxy?: EngagementContext;
  /**
   * fetch a EngagementInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Studio.FlowContext.EngagementInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the steps
   *
   * @function steps
   * @memberof Twilio.Preview.Studio.FlowContext.EngagementInstance
   * @instance
   */
  steps();
  /**
   * Produce a plain JSON object version of the EngagementInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Studio.FlowContext.EngagementInstance
   * @instance
   */
  toJSON();
}


declare class EngagementContext {
  /**
   * @constructor Twilio.Preview.Studio.FlowContext.EngagementContext
   * @description Initialize the EngagementContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property steps - steps resource
   *
   * @param version - Version of the resource
   * @param flowSid - The flow_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Studio, flowSid: sid, sid: sid);

  /**
   * fetch a EngagementInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Studio.FlowContext.EngagementContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  steps?: Twilio.Preview.Studio.FlowContext.EngagementContext.StepList;
}

export { EngagementContext, EngagementInstance, EngagementList, EngagementPage }
