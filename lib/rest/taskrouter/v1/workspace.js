'use strict';

var _ = require('lodash');
var ActivityList = require('./workspace/activity');
var EventList = require('./workspace/event');
var Instance = require('../../../base');
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
 * @param {Version} version - Version that contains the resource
 * @param {sid} sid - The sid
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
        this._solution.workspaceSid
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
        this._solution.workspaceSid
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
        this._solution.workspaceSid
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
        this._solution.workspaceSid
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
        this._solution.workspaceSid
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
        this._solution.workspaceSid
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
        this._solution.workspaceSid
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

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new WorkspaceInstance(
    this._version,
    payload,
    this._solution.sid,
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
    'Defaultactivitysid': opts.defaultActivitySid,
    'Eventcallbackurl': opts.eventCallbackUrl,
    'Friendlyname': opts.friendlyName,
    'Timeoutactivitysid': opts.timeoutActivitySid,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return new WorkspaceInstance(
    this._version,
    payload,
    this._solution.sid
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


function WorkspaceInstance() {
}

Object.defineProperty(WorkspaceInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkspaceContext(
        this._version,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(WorkspaceInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(WorkspaceInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(WorkspaceInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(WorkspaceInstance.prototype, 'defaultActivityName', {
  get: function() {
    return this._properties.defaultActivityName;
  },
});

Object.defineProperty(WorkspaceInstance.prototype, 'defaultActivitySid', {
  get: function() {
    return this._properties.defaultActivitySid;
  },
});

Object.defineProperty(WorkspaceInstance.prototype, 'eventCallbackUrl', {
  get: function() {
    return this._properties.eventCallbackUrl;
  },
});

Object.defineProperty(WorkspaceInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(WorkspaceInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(WorkspaceInstance.prototype, 'timeoutActivityName', {
  get: function() {
    return this._properties.timeoutActivityName;
  },
});

Object.defineProperty(WorkspaceInstance.prototype, 'timeoutActivitySid', {
  get: function() {
    return this._properties.timeoutActivitySid;
  },
});

/**
 * Initialize the WorkspaceContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid: The sid
 *
 * @returns {WorkspaceContext}
 */
WorkspaceInstance.prototype.WorkspaceInstance = function
    WorkspaceInstance(version, payload, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      defaultActivityName: payload.default_activity_name,
      defaultActivitySid: payload.default_activity_sid,
      eventCallbackUrl: payload.event_callback_url,
      friendlyName: payload.friendly_name,
      sid: payload.sid,
      timeoutActivityName: payload.timeout_activity_name,
      timeoutActivitySid: payload.timeout_activity_sid,
  };

  // Context
  this._context = None;
  this._solution = {
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a WorkspaceInstance
 *
 * @returns Fetched WorkspaceInstance
 */
WorkspaceInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
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
WorkspaceInstance.prototype.update = function update(self, opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Deletes the WorkspaceInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
WorkspaceInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

/**
 * Access the activities
 *
 * @returns activities
 */
WorkspaceInstance.prototype.activities = function activities() {
  return this._proxy.activities;
};

/**
 * Access the events
 *
 * @returns events
 */
WorkspaceInstance.prototype.events = function events() {
  return this._proxy.events;
};

/**
 * Access the tasks
 *
 * @returns tasks
 */
WorkspaceInstance.prototype.tasks = function tasks() {
  return this._proxy.tasks;
};

/**
 * Access the taskQueues
 *
 * @returns taskQueues
 */
WorkspaceInstance.prototype.taskQueues = function taskQueues() {
  return this._proxy.taskQueues;
};

/**
 * Access the workers
 *
 * @returns workers
 */
WorkspaceInstance.prototype.workers = function workers() {
  return this._proxy.workers;
};

/**
 * Access the workflows
 *
 * @returns workflows
 */
WorkspaceInstance.prototype.workflows = function workflows() {
  return this._proxy.workflows;
};

/**
 * Access the statistics
 *
 * @returns statistics
 */
WorkspaceInstance.prototype.statistics = function statistics() {
  return this._proxy.statistics;
};

