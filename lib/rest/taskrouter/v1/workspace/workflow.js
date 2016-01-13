'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var WorkflowStatisticsList = require('./workflow/workflowStatistics');
var values = require('../../../../base/values');

var WorkflowList;
var WorkflowInstance;
var WorkflowContext;

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
function WorkflowInstance(version, payload, workspaceSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    assignmentCallbackUrl: payload.assignment_callback_url, // jshint ignore:line,
    configuration: payload.configuration, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    documentContentType: payload.document_content_type, // jshint ignore:line,
    fallbackAssignmentCallbackUrl: payload.fallback_assignment_callback_url, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    taskReservationTimeout: payload.task_reservation_timeout, // jshint ignore:line,
    workspaceSid: payload.workspace_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(WorkflowInstance.prototype, InstanceResource.prototype);
WorkflowInstance.prototype.constructor = WorkflowInstance;

Object.defineProperty(WorkflowInstance.prototype,
  '_proxy', {
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

Object.defineProperty(WorkflowInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'assignmentCallbackUrl', {
  get: function() {
    return this._properties.assignmentCallbackUrl;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'configuration', {
  get: function() {
    return this._properties.configuration;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'documentContentType', {
  get: function() {
    return this._properties.documentContentType;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'fallbackAssignmentCallbackUrl', {
  get: function() {
    return this._properties.fallbackAssignmentCallbackUrl;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'taskReservationTimeout', {
  get: function() {
    return this._properties.taskReservationTimeout;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Fetch a WorkflowInstance
 *
 * @returns Fetched WorkflowInstance
 */
WorkflowInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the WorkflowInstance
 *
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.assignmentCallbackUrl] - The assignment_callback_url
 * @param string [opts.fallbackAssignmentCallbackUrl] -
 *          The fallback_assignment_callback_url
 * @param string [opts.configuration] - The configuration
 * @param string [opts.taskReservationTimeout] - The task_reservation_timeout
 *
 * @returns Updated WorkflowInstance
 */
WorkflowInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Deletes the WorkflowInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
WorkflowInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};

/**
 * Access the statistics
 *
 * @returns statistics
 */
WorkflowInstance.prototype.statistics = function statistics() {
  return this._proxy.statistics;
};


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
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Workspaces/<% workspace_sid %>/Workflows/<% sid %>', // jshint ignore:line
    this._solution
  );

  // Dependents
  this._statistics = undefined;
}

_.extend(WorkflowContext.prototype, InstanceContext.prototype);
WorkflowContext.prototype.constructor = WorkflowContext;

/**
 * Fetch a WorkflowInstance
 *
 * @returns Fetched WorkflowInstance
 */
WorkflowContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new WorkflowInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.sid
  );
};

/**
 * Update the WorkflowInstance
 *
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.assignmentCallbackUrl] - The assignment_callback_url
 * @param string [opts.fallbackAssignmentCallbackUrl] -
 *          The fallback_assignment_callback_url
 * @param string [opts.configuration] - The configuration
 * @param string [opts.taskReservationTimeout] - The task_reservation_timeout
 *
 * @returns Updated WorkflowInstance
 */
WorkflowContext.prototype.update = function update(opts) {
  var data = values.of({
    'Friendlyname': opts.friendlyName,
    'Assignmentcallbackurl': opts.assignmentCallbackUrl,
    'Fallbackassignmentcallbackurl': opts.fallbackAssignmentCallbackUrl,
    'Configuration': opts.configuration,
    'Taskreservationtimeout': opts.taskReservationTimeout,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

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
 * @returns true if delete succeeds, false otherwise
 */
WorkflowContext.prototype.remove = function remove() {
  return this._version.remove(this._uri);
};

Object.defineProperty(WorkflowContext.prototype,
  'statistics', {
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

module.exports = {
  WorkflowList: WorkflowList,
  WorkflowInstance: WorkflowInstance,
  WorkflowContext: WorkflowContext
};
