'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var values = require('../../../../base/values');

var ActivityList;
var ActivityInstance;
var ActivityContext;

/**
 * Initialize the ActivityContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} sid: The sid
 *
 * @returns {ActivityContext}
 */
function ActivityInstance(version, payload, workspaceSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    available: payload.available, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
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

_.extend(ActivityInstance.prototype, InstanceResource.prototype);
ActivityInstance.prototype.constructor = ActivityInstance;

Object.defineProperty(ActivityInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ActivityContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'available', {
  get: function() {
    return this._properties.available;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Fetch a ActivityInstance
 *
 * @returns Fetched ActivityInstance
 */
ActivityInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the ActivityInstance
 *
 * @param string friendlyName - The friendly_name
 *
 * @returns Updated ActivityInstance
 */
ActivityInstance.prototype.update = function update(friendlyName) {
  return this._proxy.update(
    friendlyName
  );
};

/**
 * Deletes the ActivityInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
ActivityInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};


/**
 * Initialize the ActivityContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 *
 * @returns {ActivityContext}
 */
function ActivityContext(version, workspaceSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Workspaces/<% workspace_sid %>/Activities/<% sid %>', // jshint ignore:line
    this._solution
  );
}

_.extend(ActivityContext.prototype, InstanceContext.prototype);
ActivityContext.prototype.constructor = ActivityContext;

/**
 * Fetch a ActivityInstance
 *
 * @returns Fetched ActivityInstance
 */
ActivityContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new ActivityInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.sid
  );
};

/**
 * Update the ActivityInstance
 *
 * @param string friendlyName - The friendly_name
 *
 * @returns Updated ActivityInstance
 */
ActivityContext.prototype.update = function update(friendlyName) {
  var data = values.of({
    'Friendlyname': friendlyName,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new ActivityInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.sid
  );
};

/**
 * Deletes the ActivityInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
ActivityContext.prototype.remove = function remove() {
  return this._version.remove(this._uri);
};

module.exports = {
  ActivityList: ActivityList,
  ActivityInstance: ActivityInstance,
  ActivityContext: ActivityContext
};
