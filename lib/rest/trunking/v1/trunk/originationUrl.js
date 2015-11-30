'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the OriginationUrlContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} trunkSid: The trunk_sid
 * @param {sid} sid: The sid
 *
 * @returns {OriginationUrlContext}
 */
function OriginationUrlContext(version, trunkSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    trunkSid: trunkSid,
    sid: sid,
  };
  this._uri = _.template('/Trunks/<% trunk_sid %>/OriginationUrls/<% sid %>', this._solution);
}

/**
 * Fetch a OriginationUrlInstance
 *
 * @returns Fetched OriginationUrlInstance
 */
OriginationUrlContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return OriginationUrlInstance(
    this._version,
    payload,
    trunkSid=self._solution['trunkSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the OriginationUrlInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
OriginationUrlContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

/**
 * Update the OriginationUrlInstance
 *
 * @param string [opts.weight] - The weight
 * @param string [opts.priority] - The priority
 * @param string [opts.enabled] - The enabled
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.sipUrl] - The sip_url
 *
 * @returns Updated OriginationUrlInstance
 */
OriginationUrlContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Weight': weight,
    'Priority': priority,
    'Enabled': enabled,
    'Friendlyname': friendlyName,
    'Sipurl': sipUrl,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return OriginationUrlInstance(
    this._version,
    payload,
    trunkSid=self._solution['trunkSid'],
    sid=self._solution['sid'],
  );
};

