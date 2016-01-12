'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var WorkerStatisticsList = require('./worker/workerStatistics');
var values = require('../../../../base/values');

var WorkerList;
var WorkerInstance;
var WorkerContext;

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
function WorkerInstance(version, payload, workspaceSid, sid) {
  InstanceResource.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    activityName: payload.activity_name, // jshint ignore:line,
    activitySid: payload.activity_sid, // jshint ignore:line,
    attributes: payload.attributes, // jshint ignore:line,
    available: payload.available, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateStatusChanged: payload.date_status_changed, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    workspaceSid: payload.workspace_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(WorkerInstance.prototype, InstanceResource.prototype);
WorkerInstance.prototype.constructor = WorkerInstance;

Object.defineProperty(WorkerInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkerContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(WorkerInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(WorkerInstance.prototype,
  'activityName', {
  get: function() {
    return this._properties.activityName;
  },
});

Object.defineProperty(WorkerInstance.prototype,
  'activitySid', {
  get: function() {
    return this._properties.activitySid;
  },
});

Object.defineProperty(WorkerInstance.prototype,
  'attributes', {
  get: function() {
    return this._properties.attributes;
  },
});

Object.defineProperty(WorkerInstance.prototype,
  'available', {
  get: function() {
    return this._properties.available;
  },
});

Object.defineProperty(WorkerInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(WorkerInstance.prototype,
  'dateStatusChanged', {
  get: function() {
    return this._properties.dateStatusChanged;
  },
});

Object.defineProperty(WorkerInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(WorkerInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(WorkerInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(WorkerInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Fetch a WorkerInstance
 *
 * @returns Fetched WorkerInstance
 */
WorkerInstance.prototype.fetch = function fetch() {
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
WorkerInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Deletes the WorkerInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
WorkerInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};

/**
 * Access the statistics
 *
 * @returns statistics
 */
WorkerInstance.prototype.statistics = function statistics() {
  return this._proxy.statistics;
};


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
  this._uri = _.template(
    '/Workspaces/<% workspace_sid %>/Workers/<% sid %>', // jshint ignore:line
    this._solution
  );

  // Dependents
  this._statistics = undefined;
}

_.extend(WorkerContext.prototype, InstanceContext.prototype);
WorkerContext.prototype.constructor = WorkerContext;

/**
 * Fetch a WorkerInstance
 *
 * @returns Fetched WorkerInstance
 */
WorkerContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new WorkerInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.sid
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
WorkerContext.prototype.update = function update(opts) {
  var data = values.of({
    'Activitysid': opts.activitySid,
    'Attributes': opts.attributes,
    'Friendlyname': opts.friendlyName,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

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
 * @returns true if delete succeeds, false otherwise
 */
WorkerContext.prototype.remove = function remove() {
  return this._version.remove(this._uri);
};

Object.defineProperty(WorkerContext.prototype,
  'statistics', {
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

module.exports = {
  WorkerList: WorkerList,
  WorkerInstance: WorkerInstance,
  WorkerContext: WorkerContext
};
