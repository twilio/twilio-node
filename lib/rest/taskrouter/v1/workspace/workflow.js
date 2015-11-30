'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var WorkflowStatisticsList = require('./workflow/workflowStatistics');
var values = require('../../../../base/values');

/**
 * Initialize the WorkflowContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} sid: The sid
 *
 * @returns {WorkflowContext}
 */
function WorkflowContext(version, workspaceSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template('/Workspaces/<% workspace_sid %>/Workflows/<% sid %>', this._solution);

  // Dependents
  this._statistics = undefined;
}

Object.defineProperty(WorkflowContext.prototype, 'statistics', {
  get: function() {
    if (!this._statistics) {
      this._statistics = new WorkflowStatisticsList(
        this._version,
        this._solution.workspaceSid,
        this._solution.workflowSid,
      );
    }
    return this._statistics;
  },
});

/**
 * Fetch a WorkflowInstance
 *
 * @returns Fetched WorkflowInstance
 */
WorkflowContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return WorkflowInstance(
    this._version,
    payload,
    workspaceSid=self._solution['workspaceSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Update the WorkflowInstance
 *
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.assignmentCallbackUrl] - The assignment_callback_url
 * @param string [opts.fallbackAssignmentCallbackUrl] - The fallback_assignment_callback_url
 * @param string [opts.configuration] - The configuration
 * @param string [opts.taskReservationTimeout] - The task_reservation_timeout
 *
 * @returns Updated WorkflowInstance
 */
WorkflowContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Friendlyname': friendlyName,
    'Assignmentcallbackurl': assignmentCallbackUrl,
    'Fallbackassignmentcallbackurl': fallbackAssignmentCallbackUrl,
    'Configuration': configuration,
    'Taskreservationtimeout': taskReservationTimeout,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return WorkflowInstance(
    this._version,
    payload,
    workspaceSid=self._solution['workspaceSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the WorkflowInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
WorkflowContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

