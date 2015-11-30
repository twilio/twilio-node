'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var LocalList = require('./availablePhoneNumber/local');
var MobileList = require('./availablePhoneNumber/mobile');
var TollFreeList = require('./availablePhoneNumber/tollFree');
var values = require('../../../../base/values');

/**
 * Initialize the AvailablePhoneNumberCountryContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {iso_country_code} countryCode: The country_code
 *
 * @returns {class_name}
 */
function AvailablePhoneNumberCountryContext(version, accountSid, countryCode) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    countryCode: countryCode,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/AvailablePhoneNumbers/<% country_code %>.json', this._solution);

  // Dependents
  this._local = undefined;
  this._tollFree = undefined;
  this._mobile = undefined;
}

Object.defineProperty(AvailablePhoneNumberCountryContext.prototype, 'local', {
  get: function() {
    if (!this._local) {
      this._local = new LocalList(
        this._version,
        this._solution.countryCode,
        this._solution.accountSid,
      );
    }
    return this._local;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryContext.prototype, 'tollFree', {
  get: function() {
    if (!this._tollFree) {
      this._tollFree = new TollFreeList(
        this._version,
        this._solution.countryCode,
        this._solution.accountSid,
      );
    }
    return this._tollFree;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryContext.prototype, 'mobile', {
  get: function() {
    if (!this._mobile) {
      this._mobile = new MobileList(
        this._version,
        this._solution.countryCode,
        this._solution.accountSid,
      );
    }
    return this._mobile;
  },
});

/**
 * Fetch a AvailablePhoneNumberCountryInstance
 *
 * @returns Fetched AvailablePhoneNumberCountryInstance
 */
AvailablePhoneNumberCountryContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return AvailablePhoneNumberCountryInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    countryCode=self._solution['countryCode'],
  );
};

