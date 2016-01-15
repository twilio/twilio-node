'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var WorkersStatisticsList;
var WorkersStatisticsInstance;
var WorkersStatisticsContext;

/**
 * Initialize the WorkersStatisticsList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 *
 * @returns WorkersStatisticsList
 */
function WorkersStatisticsList(version, workspaceSid) {
  function WorkersStatisticsListInstance(sid) {
    return WorkersStatisticsListInstance.get(sid);
  }

  WorkersStatisticsListInstance._version = version;
  // Path Solution
  WorkersStatisticsListInstance._solution = {
    workspaceSid: workspaceSid
  };
  /**
   * Constructs a WorkersStatisticsContext
   *
   * @returns WorkersStatisticsContext
   */
  WorkersStatisticsListInstance.get = function get() {
    return new WorkersStatisticsContext(
      this._version,
      this._solution.workspaceSid
    );
  };

  return WorkersStatisticsListInstance;
}


/**
 * Initialize the WorkersStatisticsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid: The workspace_sid
 *
 * @returns {WorkersStatisticsContext}
 */
function WorkersStatisticsInstance(version, payload, workspaceSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    cumulative: payload.cumulative, // jshint ignore:line,
    realtime: payload.realtime, // jshint ignore:line,
    workspaceSid: payload.workspace_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
  };
}

_.extend(WorkersStatisticsInstance.prototype, InstanceResource.prototype);
WorkersStatisticsInstance.prototype.constructor = WorkersStatisticsInstance;

Object.defineProperty(WorkersStatisticsInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkersStatisticsContext(
        this._version,
        this._solution.workspaceSid
      );
    }

    return this._context;
  },
});

Object.defineProperty(WorkersStatisticsInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(WorkersStatisticsInstance.prototype,
  'cumulative', {
  get: function() {
    return this._properties.cumulative;
  },
});

Object.defineProperty(WorkersStatisticsInstance.prototype,
  'realtime', {
  get: function() {
    return this._properties.realtime;
  },
});

Object.defineProperty(WorkersStatisticsInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Fetch a WorkersStatisticsInstance
 *
 * @param string [opts.minutes] - The minutes
 * @param string [opts.startDate] - The start_date
 * @param string [opts.endDate] - The end_date
 * @param string [opts.taskQueueSid] - The task_queue_sid
 * @param string [opts.taskQueueName] - The task_queue_name
 * @param string [opts.friendlyName] - The friendly_name
 *
 * @returns Fetched WorkersStatisticsInstance
 */
WorkersStatisticsInstance.prototype.fetch = function fetch(opts) {
  return this._proxy.fetch(
    opts
  );
};


/**
 * Initialize the WorkersStatisticsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 *
 * @returns {WorkersStatisticsContext}
 */
function WorkersStatisticsContext(version, workspaceSid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Workers/Statistics' // jshint ignore:line
  )(this._solution);
}

_.extend(WorkersStatisticsContext.prototype, InstanceContext.prototype);
WorkersStatisticsContext.prototype.constructor = WorkersStatisticsContext;

/**
 * Fetch a WorkersStatisticsInstance
 *
 * @param string [opts.minutes] - The minutes
 * @param string [opts.startDate] - The start_date
 * @param string [opts.endDate] - The end_date
 * @param string [opts.taskQueueSid] - The task_queue_sid
 * @param string [opts.taskQueueName] - The task_queue_name
 * @param string [opts.friendlyName] - The friendly_name
 *
 * @returns Fetched WorkersStatisticsInstance
 */
WorkersStatisticsContext.prototype.fetch = function fetch(opts) {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({
    'Minutes': opts.minutes || values.unset,
    'StartDate': opts.startDate || values.unset,
    'EndDate': opts.endDate || values.unset,
    'TaskQueueSid': opts.taskQueueSid || values.unset,
    'TaskQueueName': opts.taskQueueName || values.unset,
    'FriendlyName': opts.friendlyName || values.unset,
  });

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new WorkersStatisticsInstance(
      version,
      payload,
      solution.workspaceSid
    );
  });

  return promise;
};

module.exports = {
  WorkersStatisticsList: WorkersStatisticsList,
  WorkersStatisticsInstance: WorkersStatisticsInstance,
  WorkersStatisticsContext: WorkersStatisticsContext
};
