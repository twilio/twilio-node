'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the NotificationContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique notification Sid
 *
 * @returns {NotificationContext}
 */
function NotificationContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Notifications/<% sid %>.json', this._solution);
}

/**
 * Fetch a NotificationInstance
 *
 * @returns Fetched NotificationInstance
 */
NotificationContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return NotificationInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the NotificationInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
NotificationContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

