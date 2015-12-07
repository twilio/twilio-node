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

  // Path Solution
  FeedbackListInstance._solution = {
    accountSid: accountSid,
    callSid: callSid,
  };
  return FeedbackListInstance;
}

module.exports = {
  FeedbackList: FeedbackList,
  FeedbackInstance: FeedbackInstance,
  FeedbackContext: FeedbackContext
};
