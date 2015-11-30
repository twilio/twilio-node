'use strict';

var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the FeedbackSummaryContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: The sid
 *
 * @returns {class_name}
 */
function FeedbackSummaryContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Calls/FeedbackSummary/<% sid %>.json', this._solution);
}

/**
 * Fetch a FeedbackSummaryInstance
 *
 * @returns Fetched FeedbackSummaryInstance
 */
FeedbackSummaryContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return FeedbackSummaryInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the FeedbackSummaryInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
FeedbackSummaryContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

