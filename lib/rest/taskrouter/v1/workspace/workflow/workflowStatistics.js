'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var ListResource = require('../../../../../base/ListResource');
var Page = require('../../../../../base/Page');
var values = require('../../../../../base/values');

var WorkflowStatisticsPage;
var WorkflowStatisticsList;
var WorkflowStatisticsInstance;
var WorkflowStatisticsContext;

/**
 * Initialize the WorkflowStatisticsPage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
 * :param workspaceSid: The workspace_sid
 * :param workflowSid: The workflow_sid
 *
 * @returns WorkflowStatisticsPage
 */
function WorkflowStatisticsPage(version, response, workspaceSid, workflowSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    workflowSid: workflowSid
  };
}

_.extend(WorkflowStatisticsPage.prototype, Page.prototype);
WorkflowStatisticsPage.prototype.constructor = WorkflowStatisticsPage;

/**
 * Build an instance of WorkflowStatisticsInstance
 *
 * :param dict payload: Payload response from the API
 *
 * @returns WorkflowStatisticsInstance
 */
WorkflowStatisticsPage.prototype.getInstance = function getInstance(payload) {
  return new WorkflowStatisticsInstance(
    this._version,
    payload,
    workspaceSid=this._solution['workspaceSid'],
    workflowSid=this._solution['workflowSid']
  );
};


/**
 * Initialize the WorkflowStatisticsList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 * :param workflowSid: The workflow_sid
 *
 * @returns WorkflowStatisticsList
 */
function WorkflowStatisticsList(version, workspaceSid, workflowSid) {
  function WorkflowStatisticsListInstance(sid) {
    return WorkflowStatisticsListInstance.get(sid);
  }

  WorkflowStatisticsListInstance._version = version;
  // Path Solution
  WorkflowStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
    workflowSid: workflowSid
  };
  /**
   * Constructs a WorkflowStatisticsContext
   *
   * @returns WorkflowStatisticsContext
   */
  WorkflowStatisticsListInstance.get = function get() {
    return new WorkflowStatisticsContext(
      this._version,
      this._solution.workspaceSid,
      this._solution.workflowSid
    );
  };

  return WorkflowStatisticsListInstance;
}


/**
 * Initialize the WorkflowStatisticsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} workflowSid: The workflow_sid
 *
 * @returns {WorkflowStatisticsContext}
 */
function WorkflowStatisticsInstance(version, payload, workspaceSid, workflowSid)
                                     {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    cumulative: payload.cumulative, // jshint ignore:line,
    realtime: payload.realtime, // jshint ignore:line,
    workflowSid: payload.workflow_sid, // jshint ignore:line,
    workspaceSid: payload.workspace_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    workflowSid: workflowSid,
  };
}

_.extend(WorkflowStatisticsInstance.prototype, InstanceResource.prototype);
WorkflowStatisticsInstance.prototype.constructor = WorkflowStatisticsInstance;

Object.defineProperty(WorkflowStatisticsInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkflowStatisticsContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.workflowSid
      );
    }

    return this._context;
  },
});

Object.defineProperty(WorkflowStatisticsInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(WorkflowStatisticsInstance.prototype,
  'cumulative', {
  get: function() {
    return this._properties.cumulative;
  },
});

Object.defineProperty(WorkflowStatisticsInstance.prototype,
  'realtime', {
  get: function() {
    return this._properties.realtime;
  },
});

Object.defineProperty(WorkflowStatisticsInstance.prototype,
  'workflowSid', {
  get: function() {
    return this._properties.workflowSid;
  },
});

Object.defineProperty(WorkflowStatisticsInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Fetch a WorkflowStatisticsInstance
 *
 * @param string [opts.minutes] - The minutes
 * @param string [opts.startDate] - The start_date
 * @param string [opts.endDate] - The end_date
 *
 * @returns Fetched WorkflowStatisticsInstance
 */
WorkflowStatisticsInstance.prototype.fetch = function fetch(opts) {
  return this._proxy.fetch(
    opts
  );
};


/**
 * Initialize the WorkflowStatisticsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} workflowSid - The workflow_sid
 *
 * @returns {WorkflowStatisticsContext}
 */
function WorkflowStatisticsContext(version, workspaceSid, workflowSid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    workflowSid: workflowSid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Workflows/<%= workflowSid %>/Statistics' // jshint ignore:line
  )(this._solution);
}

_.extend(WorkflowStatisticsContext.prototype, InstanceContext.prototype);
WorkflowStatisticsContext.prototype.constructor = WorkflowStatisticsContext;

/**
 * Fetch a WorkflowStatisticsInstance
 *
 * @param string [opts.minutes] - The minutes
 * @param string [opts.startDate] - The start_date
 * @param string [opts.endDate] - The end_date
 *
 * @returns Fetched WorkflowStatisticsInstance
 */
WorkflowStatisticsContext.prototype.fetch = function fetch(opts) {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({
    'Minutes': opts.minutes,
    'StartDate': opts.startDate,
    'EndDate': opts.endDate,
  });

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new WorkflowStatisticsInstance(
      version,
      payload,
      solution.workspaceSid,
      solution.workflowSid
    );
  });

  return promise;
};

module.exports = {
  WorkflowStatisticsPage: WorkflowStatisticsPage,
  WorkflowStatisticsList: WorkflowStatisticsList,
  WorkflowStatisticsInstance: WorkflowStatisticsInstance,
  WorkflowStatisticsContext: WorkflowStatisticsContext
};
