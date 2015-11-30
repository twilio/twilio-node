'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var WorkerStatisticsList = require('./worker/workerStatistics');
var values = require('../../../../base/values');

/**
 * Initialize the WorkerContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} sid: The sid
 *
 * @returns {class_name}
 */
function WorkerContext(version, workspaceSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template('/Workspaces/<% workspace_sid %>/Workers/<% sid %>', this._solution);

  // Dependents
  this._statistics = undefined;
}

Object.defineProperty(WorkerContext.prototype, 'statistics', {
  get: function() {
    if (!this._statistics) {
      this._statistics = new WorkerStatisticsList(
        this._version,
        this._solution.workspaceSid,
        this._solution.workerSid,
      );
    }
    return this._statistics;
  },
});

/**
 * Fetch a WorkerInstance
 *
 * @returns Fetched WorkerInstance
 */
WorkerContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return WorkerInstance(
    this._version,
    payload,
    workspaceSid=self._solution['workspaceSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Update the WorkerInstance
 *
 * @param string [opts.activitySid] - The activity_sid
 * @param string [opts.attributes] - The attributes
 * @param string [opts.friendlyName] - The friendly_name
 *
 * @returns Updated WorkerInstance
 */
WorkerContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Activitysid': activitySid,
    'Attributes': attributes,
    'Friendlyname': friendlyName,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return WorkerInstance(
    this._version,
    payload,
    workspaceSid=self._solution['workspaceSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the WorkerInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
WorkerContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

