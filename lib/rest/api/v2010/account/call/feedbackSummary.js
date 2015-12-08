'use strict';

var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var FeedbackSummaryList;
var FeedbackSummaryInstance;
var FeedbackSummaryContext;

/**
 * Initialize the FeedbackSummaryList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The unique id of the Account responsible for creating this Call
 *
 * @returns FeedbackSummaryList
 */
function FeedbackSummaryList(version, accountSid) {
  function FeedbackSummaryListInstance() {
  }

  FeedbackSummaryListInstance._version = version;
  // Path Solution
  FeedbackSummaryListInstance._solution = {
    accountSid: accountSid,
  };
  FeedbackSummaryListInstance._uri = _.template(
    '/Accounts/{account_sid}/Calls/FeedbackSummary.json',
    FeedbackSummaryListInstance._solution
  );
  /**
   * Create a new FeedbackSummaryInstance
   *
   * @param string startDate - The start_date
   * @param string endDate - The end_date
   * @param string [opts.includeSubaccounts] - The include_subaccounts
   * @param string [opts.statusCallback] - The status_callback
   * @param string [opts.statusCallbackMethod] - The status_callback_method
   *
   * @returns Newly created FeedbackSummaryInstance
   */
  FeedbackSummaryListInstance.create = function create(startDate, endDate, opts) {
    var data = values.of({
      'Startdate': startDate,
      'Enddate': endDate,
      'Includesubaccounts': opts.includeSubaccounts,
      'Statuscallback': opts.statusCallback,
      'Statuscallbackmethod': opts.statusCallbackMethod,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new FeedbackSummaryInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  };

  /**
   * Constructs a FeedbackSummaryContext
   *
   * :param sid - The sid
   *
   * @returns FeedbackSummaryContext
   */
  function get(sid) {
    return new FeedbackSummaryContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  }

  return FeedbackSummaryListInstance;
}

module.exports = {
  FeedbackSummaryList: FeedbackSummaryList,
  FeedbackSummaryInstance: FeedbackSummaryInstance,
  FeedbackSummaryContext: FeedbackSummaryContext
};
