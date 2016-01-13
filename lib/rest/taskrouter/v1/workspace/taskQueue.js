'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var TaskQueueStatisticsList = require('./taskQueue/taskQueueStatistics');
var values = require('../../../../base/values');

var TaskQueueList;
var TaskQueueInstance;
var TaskQueueContext;

/**
 * Initialize the TaskQueueContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} sid: The sid
 *
 * @returns {TaskQueueContext}
 */
function TaskQueueInstance(version, payload, workspaceSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    assignmentActivitySid: payload.assignment_activity_sid, // jshint ignore:line,
    assignmentActivityName: payload.assignment_activity_name, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    maxReservedWorkers: payload.max_reserved_workers, // jshint ignore:line,
    reservationActivitySid: payload.reservation_activity_sid, // jshint ignore:line,
    reservationActivityName: payload.reservation_activity_name, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    targetWorkers: payload.target_workers, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
    workspaceSid: payload.workspace_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(TaskQueueInstance.prototype, InstanceResource.prototype);
TaskQueueInstance.prototype.constructor = TaskQueueInstance;

Object.defineProperty(TaskQueueInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TaskQueueContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'assignmentActivitySid', {
  get: function() {
    return this._properties.assignmentActivitySid;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'assignmentActivityName', {
  get: function() {
    return this._properties.assignmentActivityName;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'maxReservedWorkers', {
  get: function() {
    return this._properties.maxReservedWorkers;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'reservationActivitySid', {
  get: function() {
    return this._properties.reservationActivitySid;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'reservationActivityName', {
  get: function() {
    return this._properties.reservationActivityName;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'targetWorkers', {
  get: function() {
    return this._properties.targetWorkers;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Fetch a TaskQueueInstance
 *
 * @returns Fetched TaskQueueInstance
 */
TaskQueueInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
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
TaskQueueInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Deletes the TaskQueueInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
TaskQueueInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};

/**
 * Access the statistics
 *
 * @returns statistics
 */
TaskQueueInstance.prototype.statistics = function statistics() {
  return this._proxy.statistics;
};


/**
 * Initialize the TaskQueueContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 *
 * @returns {TaskQueueContext}
 */
function TaskQueueContext(version, workspaceSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Workspaces/<% workspace_sid %>/TaskQueues/<% sid %>', // jshint ignore:line
    this._solution
  );

  // Dependents
  this._statistics = undefined;
}

_.extend(TaskQueueContext.prototype, InstanceContext.prototype);
TaskQueueContext.prototype.constructor = TaskQueueContext;

/**
 * Fetch a TaskQueueInstance
 *
 * @returns Fetched TaskQueueInstance
 */
TaskQueueContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new TaskQueueInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.sid
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
TaskQueueContext.prototype.update = function update(opts) {
  var data = values.of({
    'Friendlyname': opts.friendlyName,
    'Targetworkers': opts.targetWorkers,
    'Reservationactivitysid': opts.reservationActivitySid,
    'Assignmentactivitysid': opts.assignmentActivitySid,
    'Maxreservedworkers': opts.maxReservedWorkers,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new TaskQueueInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.sid
  );
};

/**
 * Deletes the TaskQueueInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
TaskQueueContext.prototype.remove = function remove() {
  return this._version.remove(this._uri);
};

Object.defineProperty(TaskQueueContext.prototype,
  'statistics', {
  get: function() {
    if (!this._statistics) {
      this._statistics = new TaskQueueStatisticsList(
        this._version,
        this._solution.workspaceSid,
        this._solution.taskQueueSid
      );
    }
    return this._statistics;
  },
});

module.exports = {
  TaskQueueList: TaskQueueList,
  TaskQueueInstance: TaskQueueInstance,
  TaskQueueContext: TaskQueueContext
};
