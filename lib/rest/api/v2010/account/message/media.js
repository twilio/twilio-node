'use strict';

var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the MediaContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} messageSid: The message_sid
 * @param {sid} sid: Fetch by unique media Sid
 *
 * @returns {MediaContext}
 */
function MediaContext(version, accountSid, messageSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    messageSid: messageSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Messages/<% message_sid %>/Media/<% sid %>.json', this._solution);
}

/**
 * Deletes the MediaInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
MediaContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

/**
 * Fetch a MediaInstance
 *
 * @returns Fetched MediaInstance
 */
MediaContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return MediaInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    messageSid=self._solution['messageSid'],
    sid=self._solution['sid'],
  );
};

