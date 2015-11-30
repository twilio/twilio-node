'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the OutgoingCallerIdContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique outgoing-caller-id Sid
 *
 * @returns {OutgoingCallerIdContext}
 */
function OutgoingCallerIdContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/OutgoingCallerIds/<% sid %>.json', this._solution);
}

/**
 * Fetch a OutgoingCallerIdInstance
 *
 * @returns Fetched OutgoingCallerIdInstance
 */
OutgoingCallerIdContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return OutgoingCallerIdInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Update the OutgoingCallerIdInstance
 *
 * @param string [opts.friendlyName] - A human readable description of the caller ID
 *
 * @returns Updated OutgoingCallerIdInstance
 */
OutgoingCallerIdContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Friendlyname': friendlyName,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return OutgoingCallerIdInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the OutgoingCallerIdInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
OutgoingCallerIdContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

