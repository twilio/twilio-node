'use strict';

var ListResource = require('../../../../../base/ListResource');

var FeedbackList;
var FeedbackInstance;
var FeedbackContext;

/**
 * Initialize the FeedbackList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 * :param callSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns FeedbackList
 */
function FeedbackList(version, accountSid, callSid) {
  function FeedbackListInstance() {
  }

  FeedbackListInstance._version = version;
  // Path Solution
  FeedbackListInstance._solution = {
    accountSid: accountSid,
    callSid: callSid,
  };
  /**
   * Constructs a FeedbackContext
   *
   * @returns FeedbackContext
   */
  function get() {
    return new FeedbackContext(
      this._version,
      this._solution.accountSid,
      this._solution.callSid
    );
  }

  return FeedbackListInstance;
}

module.exports = {
  FeedbackList: FeedbackList,
  FeedbackInstance: FeedbackInstance,
  FeedbackContext: FeedbackContext
};
