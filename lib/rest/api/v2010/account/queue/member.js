'use strict';

var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the MemberContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} queueSid: The Queue in which to find the members
 * @param {sid} callSid: The call_sid
 *
 * @returns {class_name}
 */
function MemberContext(version, accountSid, queueSid, callSid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    queueSid: queueSid,
    callSid: callSid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Queues/<% queue_sid %>/Members/<% call_sid %>.json', this._solution);
}

/**
 * Fetch a MemberInstance
 *
 * @returns Fetched MemberInstance
 */
MemberContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return MemberInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    queueSid=self._solution['queueSid'],
    callSid=self._solution['callSid'],
  );
};

/**
 * Update the MemberInstance
 *
 * @param string url - The url
 * @param string method - The method
 *
 * @returns Updated MemberInstance
 */
MemberContext.prototype.update = function update(self, url, method) {
  var data = values.of({
    'Url': url,
    'Method': method,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return MemberInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    queueSid=self._solution['queueSid'],
    callSid=self._solution['callSid'],
  );
};

