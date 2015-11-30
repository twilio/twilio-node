'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the NumberContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {phone_number} number: The number
 *
 * @returns {NumberContext}
 */
function NumberContext(version, number) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    number: number,
  };
  this._uri = _.template('/Voice/Numbers/<% number %>', this._solution);
}

/**
 * Fetch a NumberInstance
 *
 * @returns Fetched NumberInstance
 */
NumberContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return NumberInstance(
    this._version,
    payload,
    number=self._solution['number'],
  );
};

