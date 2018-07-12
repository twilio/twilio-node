/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V2010 = require('../../../V2010');
import deserialize = require('../../../../../base/deserialize');
import serialize = require('../../../../../base/serialize');
import values = require('../../../../../base/values');

/**
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.FeedbackSummaryList
 * @description Initialize the FeedbackSummaryList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique id of the Account responsible for creating this Call
 */
declare function FeedbackSummaryList(version: V2010, accountSid: string): FeedbackSummaryListInstance;


declare class FeedbackSummaryPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.CallContext.FeedbackSummaryPage
   * @augments Page
   * @description Initialize the FeedbackSummaryPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of FeedbackSummaryInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackSummaryPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class FeedbackSummaryInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.CallContext.FeedbackSummaryInstance
   * @description Initialize the FeedbackSummaryContext
   *
   * @property accountSid - The account_sid
   * @property callCount - The call_count
   * @property callFeedbackCount - The call_feedback_count
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property endDate - The end_date
   * @property includeSubaccounts - The include_subaccounts
   * @property issues - The issues
   * @property qualityScoreAverage - The quality_score_average
   * @property qualityScoreMedian - The quality_score_median
   * @property qualityScoreStandardDeviation - The quality_score_standard_deviation
   * @property sid - The sid
   * @property startDate - The start_date
   * @property status - The status
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique id of the Account responsible for creating this Call
   * @param sid - The sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: FeedbackSummaryContext;
  /**
   * fetch a FeedbackSummaryInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackSummaryInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a FeedbackSummaryInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackSummaryInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the FeedbackSummaryInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackSummaryInstance
   * @instance
   */
  toJSON();
}


declare class FeedbackSummaryContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.CallContext.FeedbackSummaryContext
   * @description Initialize the FeedbackSummaryContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  /**
   * fetch a FeedbackSummaryInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackSummaryContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a FeedbackSummaryInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackSummaryContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { FeedbackSummaryContext, FeedbackSummaryInstance, FeedbackSummaryList, FeedbackSummaryPage }
