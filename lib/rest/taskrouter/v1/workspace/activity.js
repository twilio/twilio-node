'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the ActivityContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} sid: The sid
 *
 * @returns {ActivityContext}
 */
function ActivityContext(version, workspaceSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template('/Workspaces/<% workspace_sid %>/Activities/<% sid %>', this._solution);
}

/**
 * Fetch a ActivityInstance
 *
 * @returns Fetched ActivityInstance
 */
ActivityContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return ActivityInstance(
    this._version,
    payload,
    workspaceSid=self._solution['workspaceSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Update the ActivityInstance
 *
 * @param string friendlyName - The friendly_name
 *
 * @returns Updated ActivityInstance
 */
ActivityContext.prototype.update = function update(self, friendlyName) {
  var data = values.of({
    'Friendlyname': friendlyName,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return ActivityInstance(
    this._version,
    payload,
    workspaceSid=self._solution['workspaceSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the ActivityInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
ActivityContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

