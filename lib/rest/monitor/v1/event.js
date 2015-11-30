'use strict';

var InstanceContext = require('../../../base/InstanceContext');
var values = require('../../../base/values');

/**
 * Initialize the EventContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} sid: The sid
 *
 * @returns {class_name}
 */
function EventContext(version, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template('/Events/<% sid %>', this._solution);
}

/**
 * Fetch a EventInstance
 *
 * @returns Fetched EventInstance
 */
EventContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return EventInstance(
    this._version,
    payload,
    sid=self._solution['sid'],
  );
};

