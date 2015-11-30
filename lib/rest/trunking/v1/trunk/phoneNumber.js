'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the PhoneNumberContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} trunkSid: The trunk_sid
 * @param {sid} sid: The sid
 *
 * @returns {PhoneNumberContext}
 */
function PhoneNumberContext(version, trunkSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    trunkSid: trunkSid,
    sid: sid,
  };
  this._uri = _.template('/Trunks/<% trunk_sid %>/PhoneNumbers/<% sid %>', this._solution);
}

/**
 * Fetch a PhoneNumberInstance
 *
 * @returns Fetched PhoneNumberInstance
 */
PhoneNumberContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return PhoneNumberInstance(
    this._version,
    payload,
    trunkSid=self._solution['trunkSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the PhoneNumberInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
PhoneNumberContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

