'use strict';

var InstanceContext = require('../../../base/InstanceContext');
var values = require('../../../base/values');

/**
 * Initialize the AlertContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} sid: The sid
 *
 * @returns {AlertContext}
 */
function AlertContext(version, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template('/Alerts/<% sid %>', this._solution);
}

/**
 * Fetch a AlertInstance
 *
 * @returns Fetched AlertInstance
 */
AlertContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return AlertInstance(
    this._version,
    payload,
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the AlertInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
AlertContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

