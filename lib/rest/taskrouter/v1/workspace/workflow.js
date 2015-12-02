'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var WorkflowStatisticsList = require('./workflow/workflowStatistics');
var values = require('../../../../base/values');

/**
 * Initialize the WorkflowContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
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
        this._solution.workflowSid
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

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new WorkflowInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.sid,
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
    'Friendlyname': opts.friendlyName,
    'Assignmentcallbackurl': opts.assignmentCallbackUrl,
    'Fallbackassignmentcallbackurl': opts.fallbackAssignmentCallbackUrl,
    'Configuration': opts.configuration,
    'Taskreservationtimeout': opts.taskReservationTimeout,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return new WorkflowInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.sid
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


function WorkflowInstance() {
}

Object.defineProperty(WorkflowInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkflowContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(WorkflowInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(WorkflowInstance.prototype, 'assignmentCallbackUrl', {
  get: function() {
    return this._properties.assignmentCallbackUrl;
  },
});

Object.defineProperty(WorkflowInstance.prototype, 'configuration', {
  get: function() {
    return this._properties.configuration;
  },
});

Object.defineProperty(WorkflowInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(WorkflowInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(WorkflowInstance.prototype, 'documentContentType', {
  get: function() {
    return this._properties.documentContentType;
  },
});

Object.defineProperty(WorkflowInstance.prototype, 'fallbackAssignmentCallbackUrl', {
  get: function() {
    return this._properties.fallbackAssignmentCallbackUrl;
  },
});

Object.defineProperty(WorkflowInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(WorkflowInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(WorkflowInstance.prototype, 'taskReservationTimeout', {
  get: function() {
    return this._properties.taskReservationTimeout;
  },
});

Object.defineProperty(WorkflowInstance.prototype, 'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Initialize the WorkflowContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} sid: The sid
 *
 * @returns {WorkflowContext}
 */
WorkflowInstance.prototype.WorkflowInstance = function WorkflowInstance(version,
    payload, workspaceSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      assignmentCallbackUrl: payload.assignment_callback_url,
      configuration: payload.configuration,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      documentContentType: payload.document_content_type,
      fallbackAssignmentCallbackUrl: payload.fallback_assignment_callback_url,
      friendlyName: payload.friendly_name,
      sid: payload.sid,
      taskReservationTimeout: payload.task_reservation_timeout,
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
 * Fetch a WorkflowInstance
 *
 * @returns Fetched WorkflowInstance
 */
WorkflowInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
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
WorkflowInstance.prototype.update = function update(self, opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Deletes the WorkflowInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
WorkflowInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

/**
 * Access the statistics
 *
 * @returns statistics
 */
WorkflowInstance.prototype.statistics = function statistics() {
  return this._proxy.statistics;
};

