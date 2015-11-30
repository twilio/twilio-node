'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var TaskQueueStatisticsList = require('./taskQueue/taskQueueStatistics');
var values = require('../../../../base/values');

/**
 * Initialize the TaskQueueContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} sid: The sid
 *
 * @returns {class_name}
 */
function TaskQueueContext(version, workspaceSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template('/Workspaces/<% workspace_sid %>/TaskQueues/<% sid %>', this._solution);

  // Dependents
  this._statistics = undefined;
}

Object.defineProperty(TaskQueueContext.prototype, 'statistics', {
  get: function() {
    if (!this._statistics) {
      this._statistics = new TaskQueueStatisticsList(
        this._version,
        this._solution.workspaceSid,
        this._solution.taskQueueSid,
      );
    }
    return this._statistics;
  },
});

/**
 * Fetch a TaskQueueInstance
 *
 * @returns Fetched TaskQueueInstance
 */
TaskQueueContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return TaskQueueInstance(
    this._version,
    payload,
    workspaceSid=self._solution['workspaceSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Update the TaskQueueInstance
 *
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.targetWorkers] - The target_workers
 * @param string [opts.reservationActivitySid] - The reservation_activity_sid
 * @param string [opts.assignmentActivitySid] - The assignment_activity_sid
 * @param string [opts.maxReservedWorkers] - The max_reserved_workers
 *
 * @returns Updated TaskQueueInstance
 */
TaskQueueContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Friendlyname': friendlyName,
    'Targetworkers': targetWorkers,
    'Reservationactivitysid': reservationActivitySid,
    'Assignmentactivitysid': assignmentActivitySid,
    'Maxreservedworkers': maxReservedWorkers,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return TaskQueueInstance(
    this._version,
    payload,
    workspaceSid=self._solution['workspaceSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the TaskQueueInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
TaskQueueContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

