'use strict';

var InstanceContext = require('../../../base/InstanceContext');
var values = require('../../../base/values');

/**
 * Initialize the PhoneNumberContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {phone_number} phoneNumber: The phone_number
 *
 * @returns {PhoneNumberContext}
 */
function PhoneNumberContext(version, phoneNumber) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    phoneNumber: phoneNumber,
  };
  this._uri = _.template('/PhoneNumbers/<% phone_number %>', this._solution);
}

/**
 * Fetch a PhoneNumberInstance
 *
 * @param string [opts.countryCode] - The country_code
 * @param string [opts.type] - The type
 *
 * @returns Fetched PhoneNumberInstance
 */
PhoneNumberContext.prototype.fetch = function fetch(self, opts) {
  var params = values.of({
    'Countrycode': countryCode,
    'Type': type,
  });

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return PhoneNumberInstance(
    this._version,
    payload,
    phoneNumber=self._solution['phoneNumber'],
  );
};

