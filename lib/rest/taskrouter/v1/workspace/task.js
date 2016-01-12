'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var ReservationList = require('./task/reservation');
var values = require('../../../../base/values');

var TaskList;
var TaskInstance;
var TaskContext;

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
function TaskInstance(version, payload, workspaceSid, sid) {
  InstanceResource.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    age: payload.age, // jshint ignore:line,
    assignmentStatus: payload.assignment_status, // jshint ignore:line,
    attributes: payload.attributes, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    priority: payload.priority, // jshint ignore:line,
    reason: payload.reason, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    taskQueueSid: payload.task_queue_sid, // jshint ignore:line,
    timeout: payload.timeout, // jshint ignore:line,
    workflowSid: payload.workflow_sid, // jshint ignore:line,
    workspaceSid: payload.workspace_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(TaskInstance.prototype, InstanceResource.prototype);
TaskInstance.prototype.constructor = TaskInstance;

Object.defineProperty(TaskInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TaskContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'age', {
  get: function() {
    return this._properties.age;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'assignmentStatus', {
  get: function() {
    return this._properties.assignmentStatus;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'attributes', {
  get: function() {
    return this._properties.attributes;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'priority', {
  get: function() {
    return this._properties.priority;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'reason', {
  get: function() {
    return this._properties.reason;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'taskQueueSid', {
  get: function() {
    return this._properties.taskQueueSid;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'timeout', {
  get: function() {
    return this._properties.timeout;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'workflowSid', {
  get: function() {
    return this._properties.workflowSid;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Fetch a TaskInstance
 *
 * @returns Fetched TaskInstance
 */
TaskInstance.prototype.fetch = function fetch() {
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
TaskInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Deletes the TaskInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
TaskInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};

/**
 * Access the reservations
 *
 * @returns reservations
 */
TaskInstance.prototype.reservations = function reservations() {
  return this._proxy.reservations;
};


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
  this._uri = _.template(
    '/Workspaces/<% workspace_sid %>/Tasks/<% sid %>', // jshint ignore:line
    this._solution
  );

  // Dependents
  this._reservations = undefined;
}

_.extend(TaskContext.prototype, InstanceContext.prototype);
TaskContext.prototype.constructor = TaskContext;

/**
 * Fetch a TaskInstance
 *
 * @returns Fetched TaskInstance
 */
TaskContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new TaskInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.sid
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
TaskContext.prototype.update = function update(opts) {
  var data = values.of({
    'Attributes': opts.attributes,
    'Assignmentstatus': opts.assignmentStatus,
    'Reason': opts.reason,
    'Priority': opts.priority,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

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
 * @returns true if delete succeeds, false otherwise
 */
TaskContext.prototype.remove = function remove() {
  return this._version.remove('delete', this._uri);
};

Object.defineProperty(TaskContext.prototype,
  'reservations', {
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

module.exports = {
  TaskList: TaskList,
  TaskInstance: TaskInstance,
  TaskContext: TaskContext
};
