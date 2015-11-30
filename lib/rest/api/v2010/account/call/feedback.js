'use strict';

var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the FeedbackContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} callSid: The call sid that uniquely identifies the call
 *
 * @returns {class_name}
 */
function FeedbackContext(version, accountSid, callSid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    callSid: callSid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Calls/<% call_sid %>/Feedback.json', this._solution);
}

/**
 * Create a new FeedbackInstance
 *
 * @param string qualityScore - The quality_score
 * @param feedback.issues [opts.issue] - The issue
 *
 * @returns Newly created FeedbackInstance
 */
FeedbackContext.prototype.create = function create(self, qualityScore, opts) {
  var data = values.of({
    'Qualityscore': qualityScore,
    'Issue': issue,
  });

  var payload = this._version.create(
    'POST',
    self._uri,
    data=data,
  );

  return FeedbackInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    callSid=self._solution['callSid'],
  );
};

/**
 * Fetch a FeedbackInstance
 *
 * @returns Fetched FeedbackInstance
 */
FeedbackContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return FeedbackInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    callSid=self._solution['callSid'],
  );
};

/**
 * Update the FeedbackInstance
 *
 * @param string qualityScore - An integer from 1 to 5
 * @param feedback.issues [opts.issue] - Issues experienced during the call
 *
 * @returns Updated FeedbackInstance
 */
FeedbackContext.prototype.update = function update(self, qualityScore, opts) {
  var data = values.of({
    'Qualityscore': qualityScore,
    'Issue': issue,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return FeedbackInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    callSid=self._solution['callSid'],
  );
};

