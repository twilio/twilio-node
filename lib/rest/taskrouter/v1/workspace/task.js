'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var ReservationList = require('./task/reservation');
var values = require('../../../../base/values');

/**
 * Initialize the TaskContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
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
        this._solution.taskSid
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

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new TaskInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.sid,
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

  return new TaskInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.sid
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


function TaskInstance() {
}

Object.defineProperty(TaskInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TaskContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._context;
  },
});

Object.defineProperty(TaskInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TaskInstance.prototype, 'age', {
  get: function() {
    return this._properties.age;
  },
});

Object.defineProperty(TaskInstance.prototype, 'assignmentStatus', {
  get: function() {
    return this._properties.assignmentStatus;
  },
});

Object.defineProperty(TaskInstance.prototype, 'attributes', {
  get: function() {
    return this._properties.attributes;
  },
});

Object.defineProperty(TaskInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(TaskInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(TaskInstance.prototype, 'priority', {
  get: function() {
    return this._properties.priority;
  },
});

Object.defineProperty(TaskInstance.prototype, 'reason', {
  get: function() {
    return this._properties.reason;
  },
});

Object.defineProperty(TaskInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(TaskInstance.prototype, 'taskQueueSid', {
  get: function() {
    return this._properties.taskQueueSid;
  },
});

Object.defineProperty(TaskInstance.prototype, 'timeout', {
  get: function() {
    return this._properties.timeout;
  },
});

Object.defineProperty(TaskInstance.prototype, 'workflowSid', {
  get: function() {
    return this._properties.workflowSid;
  },
});

Object.defineProperty(TaskInstance.prototype, 'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Initialize the TaskContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} sid: The sid
 *
 * @returns {TaskContext}
 */
TaskInstance.prototype.TaskInstance = function TaskInstance(version, payload,
                                                             workspaceSid, sid)
                                                             {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      age: payload.age,
      assignmentStatus: payload.assignment_status,
      attributes: payload.attributes,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      priority: payload.priority,
      reason: payload.reason,
      sid: payload.sid,
      taskQueueSid: payload.task_queue_sid,
      timeout: payload.timeout,
      workflowSid: payload.workflow_sid,
      workspaceSid: payload.workspace_sid,
  };

  // Context
  this._context = None;
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a TaskInstance
 *
 * @returns Fetched TaskInstance
 */
TaskInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
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
TaskInstance.prototype.update = function update(self, opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Deletes the TaskInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
TaskInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

/**
 * Access the reservations
 *
 * @returns reservations
 */
TaskInstance.prototype.reservations = function reservations() {
  return this._proxy.reservations;
};

