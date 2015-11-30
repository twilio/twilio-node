'use strict';

var ActivityList = require('./workspace/activity');
var EventList = require('./workspace/event');
var InstanceContext = require('../../../base/InstanceContext');
var TaskList = require('./workspace/task');
var TaskQueueList = require('./workspace/taskQueue');
var WorkerList = require('./workspace/worker');
var WorkflowList = require('./workspace/workflow');
var WorkspaceStatisticsList = require('./workspace/workspaceStatistics');
var values = require('../../../base/values');

/**
 * Initialize the WorkspaceContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} sid: The sid
 *
 * @returns {WorkspaceContext}
 */
function WorkspaceContext(version, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template('/Workspaces/<% sid %>', this._solution);

  // Dependents
  this._activities = undefined;
  this._events = undefined;
  this._tasks = undefined;
  this._taskQueues = undefined;
  this._workers = undefined;
  this._workflows = undefined;
  this._statistics = undefined;
}

Object.defineProperty(WorkspaceContext.prototype, 'activities', {
  get: function() {
    if (!this._activities) {
      this._activities = new ActivityList(
        this._version,
        this._solution.workspaceSid,
      );
    }
    return this._activities;
  },
});

Object.defineProperty(WorkspaceContext.prototype, 'events', {
  get: function() {
    if (!this._events) {
      this._events = new EventList(
        this._version,
        this._solution.workspaceSid,
      );
    }
    return this._events;
  },
});

Object.defineProperty(WorkspaceContext.prototype, 'tasks', {
  get: function() {
    if (!this._tasks) {
      this._tasks = new TaskList(
        this._version,
        this._solution.workspaceSid,
      );
    }
    return this._tasks;
  },
});

Object.defineProperty(WorkspaceContext.prototype, 'taskQueues', {
  get: function() {
    if (!this._taskQueues) {
      this._taskQueues = new TaskQueueList(
        this._version,
        this._solution.workspaceSid,
      );
    }
    return this._taskQueues;
  },
});

Object.defineProperty(WorkspaceContext.prototype, 'workers', {
  get: function() {
    if (!this._workers) {
      this._workers = new WorkerList(
        this._version,
        this._solution.workspaceSid,
      );
    }
    return this._workers;
  },
});

Object.defineProperty(WorkspaceContext.prototype, 'workflows', {
  get: function() {
    if (!this._workflows) {
      this._workflows = new WorkflowList(
        this._version,
        this._solution.workspaceSid,
      );
    }
    return this._workflows;
  },
});

Object.defineProperty(WorkspaceContext.prototype, 'statistics', {
  get: function() {
    if (!this._statistics) {
      this._statistics = new WorkspaceStatisticsList(
        this._version,
        this._solution.workspaceSid,
      );
    }
    return this._statistics;
  },
});

/**
 * Fetch a WorkspaceInstance
 *
 * @returns Fetched WorkspaceInstance
 */
WorkspaceContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return WorkspaceInstance(
    this._version,
    payload,
    sid=self._solution['sid'],
  );
};

/**
 * Update the WorkspaceInstance
 *
 * @param string [opts.defaultActivitySid] - The default_activity_sid
 * @param string [opts.eventCallbackUrl] - The event_callback_url
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.timeoutActivitySid] - The timeout_activity_sid
 *
 * @returns Updated WorkspaceInstance
 */
WorkspaceContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Defaultactivitysid': defaultActivitySid,
    'Eventcallbackurl': eventCallbackUrl,
    'Friendlyname': friendlyName,
    'Timeoutactivitysid': timeoutActivitySid,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return WorkspaceInstance(
    this._version,
    payload,
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the WorkspaceInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
WorkspaceContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

