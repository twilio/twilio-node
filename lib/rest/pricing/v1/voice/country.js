'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the CountryContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {iso_country_code} isoCountry: The iso_country
 *
 * @returns {CountryContext}
 */
function CountryContext(version, isoCountry) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    isoCountry: isoCountry,
  };
  this._uri = _.template('/Voice/Countries/<% iso_country %>', this._solution);
}

/**
 * Fetch a CountryInstance
 *
 * @returns Fetched CountryInstance
 */
CountryContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return CountryInstance(
    this._version,
    payload,
    isoCountry=self._solution['isoCountry'],
  );
};

