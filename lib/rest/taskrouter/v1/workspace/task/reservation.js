'use strict';

var _ = require('lodash');
var Instance = require('../../../../../base');
var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the ReservationContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} taskSid - The task_sid
 * @param {sid} sid - The sid
 *
 * @returns {ReservationContext}
 */
function ReservationContext(version, workspaceSid, taskSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    taskSid: taskSid,
    sid: sid,
  };
  this._uri = _.template('/Workspaces/<% workspace_sid %>/Tasks/<% task_sid %>/Reservations/<% sid %>', this._solution);
}

/**
 * Fetch a ReservationInstance
 *
 * @returns Fetched ReservationInstance
 */
ReservationContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new ReservationInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.taskSid,
    this._solution.sid,
  );
};

/**
 * Update the ReservationInstance
 *
 * @param string reservationStatus - The reservation_status
 * @param string [opts.workerActivitySid] - The worker_activity_sid
 *
 * @returns Updated ReservationInstance
 */
ReservationContext.prototype.update = function update(self, reservationStatus,
                                                       opts) {
  var data = values.of({
    'Reservationstatus': reservationStatus,
    'Workeractivitysid': opts.workerActivitySid,
  });

  data.uri = this._uri;
  data.method = 'POST';

  var payload = this._version.update(data);

  return new ReservationInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.taskSid,
    this._solution.sid
  );
};


function ReservationInstance() {
}

Object.defineProperty(ReservationInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ReservationContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.taskSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(ReservationInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ReservationInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ReservationInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(ReservationInstance.prototype, 'reservationStatus', {
  get: function() {
    return this._properties.reservationStatus;
  },
});

Object.defineProperty(ReservationInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ReservationInstance.prototype, 'taskSid', {
  get: function() {
    return this._properties.taskSid;
  },
});

Object.defineProperty(ReservationInstance.prototype, 'workerName', {
  get: function() {
    return this._properties.workerName;
  },
});

Object.defineProperty(ReservationInstance.prototype, 'workerSid', {
  get: function() {
    return this._properties.workerSid;
  },
});

Object.defineProperty(ReservationInstance.prototype, 'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Initialize the ReservationContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} taskSid: The task_sid
 * @param {sid} sid: The sid
 *
 * @returns {ReservationContext}
 */
ReservationInstance.prototype.ReservationInstance = function
    ReservationInstance(version, payload, workspaceSid, taskSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid // jshint ignore:line,
      dateCreated: payload.date_created // jshint ignore:line,
      dateUpdated: payload.date_updated // jshint ignore:line,
      reservationStatus: payload.reservation_status // jshint ignore:line,
      sid: payload.sid // jshint ignore:line,
      taskSid: payload.task_sid // jshint ignore:line,
      workerName: payload.worker_name // jshint ignore:line,
      workerSid: payload.worker_sid // jshint ignore:line,
      workspaceSid: payload.workspace_sid // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    taskSid: taskSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a ReservationInstance
 *
 * @returns Fetched ReservationInstance
 */
ReservationInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Update the ReservationInstance
 *
 * @param string reservationStatus - The reservation_status
 * @param string [opts.workerActivitySid] - The worker_activity_sid
 *
 * @returns Updated ReservationInstance
 */
ReservationInstance.prototype.update = function update(self, reservationStatus,
                                                        opts) {
  return this._proxy.update(
    reservationStatus,
    opts
  );
};

