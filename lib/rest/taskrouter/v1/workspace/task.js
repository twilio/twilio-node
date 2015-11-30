'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var ReservationList = require('./task/reservation');
var values = require('../../../../base/values');

/**
 * Initialize the TaskContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} sid: The sid
 *
 * @returns {TaskContext}
 */
function TaskContext(version, workspaceSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template('/Workspaces/<% workspace_sid %>/Tasks/<% sid %>', this._solution);

  // Dependents
  this._reservations = undefined;
}

Object.defineProperty(TaskContext.prototype, 'reservations', {
  get: function() {
    if (!this._reservations) {
      this._reservations = new ReservationList(
        this._version,
        this._solution.workspaceSid,
        this._solution.taskSid,
      );
    }
    return this._reservations;
  },
});

/**
 * Fetch a TaskInstance
 *
 * @returns Fetched TaskInstance
 */
TaskContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return TaskInstance(
    this._version,
    payload,
    workspaceSid=self._solution['workspaceSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Update the TaskInstance
 *
 * @param string [opts.attributes] - The attributes
 * @param task.status [opts.assignmentStatus] - The assignment_status
 * @param string [opts.reason] - The reason
 * @param string [opts.priority] - The priority
 *
 * @returns Updated TaskInstance
 */
TaskContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Attributes': attributes,
    'Assignmentstatus': assignmentStatus,
    'Reason': reason,
    'Priority': priority,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return TaskInstance(
    this._version,
    payload,
    workspaceSid=self._solution['workspaceSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the TaskInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
TaskContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

