'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var TaskQueueStatisticsList = require('./taskQueue/taskQueueStatistics');
var values = require('../../../../base/values');

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
        this._solution.taskQueueSid
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

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new TaskQueueInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.sid,
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
    'Friendlyname': opts.friendlyName,
    'Targetworkers': opts.targetWorkers,
    'Reservationactivitysid': opts.reservationActivitySid,
    'Assignmentactivitysid': opts.assignmentActivitySid,
    'Maxreservedworkers': opts.maxReservedWorkers,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

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
 * @returns True if delete succeeds, False otherwise
 */
TaskQueueContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};


function TaskQueueInstance() {
}

Object.defineProperty(TaskQueueInstance.prototype, '_proxy', {
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

Object.defineProperty(TaskQueueInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TaskQueueInstance.prototype, 'assignmentActivitySid', {
  get: function() {
    return this._properties.assignmentActivitySid;
  },
});

Object.defineProperty(TaskQueueInstance.prototype, 'assignmentActivityName', {
  get: function() {
    return this._properties.assignmentActivityName;
  },
});

Object.defineProperty(TaskQueueInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(TaskQueueInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(TaskQueueInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(TaskQueueInstance.prototype, 'maxReservedWorkers', {
  get: function() {
    return this._properties.maxReservedWorkers;
  },
});

Object.defineProperty(TaskQueueInstance.prototype, 'reservationActivitySid', {
  get: function() {
    return this._properties.reservationActivitySid;
  },
});

Object.defineProperty(TaskQueueInstance.prototype, 'reservationActivityName', {
  get: function() {
    return this._properties.reservationActivityName;
  },
});

Object.defineProperty(TaskQueueInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(TaskQueueInstance.prototype, 'targetWorkers', {
  get: function() {
    return this._properties.targetWorkers;
  },
});

Object.defineProperty(TaskQueueInstance.prototype, 'url', {
  get: function() {
    return this._properties.url;
  },
});

Object.defineProperty(TaskQueueInstance.prototype, 'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

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
TaskQueueInstance.prototype.TaskQueueInstance = function
    TaskQueueInstance(version, payload, workspaceSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      assignmentActivitySid: payload.assignment_activity_sid,
      assignmentActivityName: payload.assignment_activity_name,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      friendlyName: payload.friendly_name,
      maxReservedWorkers: payload.max_reserved_workers,
      reservationActivitySid: payload.reservation_activity_sid,
      reservationActivityName: payload.reservation_activity_name,
      sid: payload.sid,
      targetWorkers: payload.target_workers,
      url: payload.url,
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
 * Fetch a TaskQueueInstance
 *
 * @returns Fetched TaskQueueInstance
 */
TaskQueueInstance.prototype.fetch = function fetch(self) {
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
TaskQueueInstance.prototype.update = function update(self, opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Deletes the TaskQueueInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
TaskQueueInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

/**
 * Access the statistics
 *
 * @returns statistics
 */
TaskQueueInstance.prototype.statistics = function statistics() {
  return this._proxy.statistics;
};

