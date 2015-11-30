'use strict';

var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the ReservationContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} taskSid: The task_sid
 * @param {sid} sid: The sid
 *
 * @returns {class_name}
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

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return ReservationInstance(
    this._version,
    payload,
    workspaceSid=self._solution['workspaceSid'],
    taskSid=self._solution['taskSid'],
    sid=self._solution['sid'],
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
    'Workeractivitysid': workerActivitySid,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return ReservationInstance(
    this._version,
    payload,
    workspaceSid=self._solution['workspaceSid'],
    taskSid=self._solution['taskSid'],
    sid=self._solution['sid'],
  );
};

