'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var WorkerStatisticsList = require('./worker/workerStatistics');
var values = require('../../../../base/values');

/**
 * Initialize the WorkerContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 *
 * @returns {WorkerContext}
 */
function WorkerContext(version, workspaceSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template('/Workspaces/<% workspace_sid %>/Workers/<% sid %>', this._solution);

  // Dependents
  this._statistics = undefined;
}

Object.defineProperty(WorkerContext.prototype, 'statistics', {
  get: function() {
    if (!this._statistics) {
      this._statistics = new WorkerStatisticsList(
        this._version,
        this._solution.workspaceSid,
        this._solution.workerSid
      );
    }
    return this._statistics;
  },
});

/**
 * Fetch a WorkerInstance
 *
 * @returns Fetched WorkerInstance
 */
WorkerContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new WorkerInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.sid,
  );
};

/**
 * Update the WorkerInstance
 *
 * @param string [opts.activitySid] - The activity_sid
 * @param string [opts.attributes] - The attributes
 * @param string [opts.friendlyName] - The friendly_name
 *
 * @returns Updated WorkerInstance
 */
WorkerContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Activitysid': activitySid,
    'Attributes': attributes,
    'Friendlyname': friendlyName,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return new WorkerInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.sid
  );
};

/**
 * Deletes the WorkerInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
WorkerContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};


function WorkerInstance() {
}

Object.defineProperty(WorkerInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkerContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._context;
  },
});

Object.defineProperty(WorkerInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(WorkerInstance.prototype, 'activityName', {
  get: function() {
    return this._properties.activityName;
  },
});

Object.defineProperty(WorkerInstance.prototype, 'activitySid', {
  get: function() {
    return this._properties.activitySid;
  },
});

Object.defineProperty(WorkerInstance.prototype, 'attributes', {
  get: function() {
    return this._properties.attributes;
  },
});

Object.defineProperty(WorkerInstance.prototype, 'available', {
  get: function() {
    return this._properties.available;
  },
});

Object.defineProperty(WorkerInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(WorkerInstance.prototype, 'dateStatusChanged', {
  get: function() {
    return this._properties.dateStatusChanged;
  },
});

Object.defineProperty(WorkerInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(WorkerInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(WorkerInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(WorkerInstance.prototype, 'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Initialize the WorkerContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} sid: The sid
 *
 * @returns {WorkerContext}
 */
WorkerInstance.prototype.WorkerInstance = function WorkerInstance(version,
    payload, workspaceSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      activityName: payload.activity_name,
      activitySid: payload.activity_sid,
      attributes: payload.attributes,
      available: payload.available,
      dateCreated: payload.date_created,
      dateStatusChanged: payload.date_status_changed,
      dateUpdated: payload.date_updated,
      friendlyName: payload.friendly_name,
      sid: payload.sid,
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
 * Fetch a WorkerInstance
 *
 * @returns Fetched WorkerInstance
 */
WorkerInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Update the WorkerInstance
 *
 * @param string [opts.activitySid] - The activity_sid
 * @param string [opts.attributes] - The attributes
 * @param string [opts.friendlyName] - The friendly_name
 *
 * @returns Updated WorkerInstance
 */
WorkerInstance.prototype.update = function update(self, opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Deletes the WorkerInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
WorkerInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

/**
 * Access the statistics
 *
 * @returns statistics
 */
WorkerInstance.prototype.statistics = function statistics() {
  return this._proxy.statistics;
};

