'use strict';

var _ = require('lodash');
var Instance = require('../../../base');
var InstanceContext = require('../../../base/InstanceContext');
var values = require('../../../base/values');

/**
 * Initialize the PhoneNumberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {phone_number} phoneNumber - The phone_number
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

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new PhoneNumberInstance(
    this._version,
    payload,
    this._solution.phoneNumber,
  );
};


function PhoneNumberInstance() {
}

Object.defineProperty(PhoneNumberInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new PhoneNumberContext(
        this._version,
        this._solution.phoneNumber
      );
    return this._context;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype, 'countryCode', {
  get: function() {
    return this._properties.countryCode;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype, 'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype, 'nationalFormat', {
  get: function() {
    return this._properties.nationalFormat;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype, 'carrier', {
  get: function() {
    return this._properties.carrier;
  },
});

/**
 * Initialize the PhoneNumberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {phone_number} phoneNumber: The phone_number
 *
 * @returns {PhoneNumberContext}
 */
PhoneNumberInstance.prototype.PhoneNumberInstance = function
    PhoneNumberInstance(version, payload, phoneNumber) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      countryCode: payload.country_code,
      phoneNumber: payload.phone_number,
      nationalFormat: payload.national_format,
      carrier: payload.carrier,
  };

  // Context
  this._context = None;
  this._solution = {
    phoneNumber: phoneNumber || this._properties.phoneNumber,
  };
};

/**
 * Fetch a PhoneNumberInstance
 *
 * @param string [opts.countryCode] - The country_code
 * @param string [opts.type] - The type
 *
 * @returns Fetched PhoneNumberInstance
 */
PhoneNumberInstance.prototype.fetch = function fetch(self, opts) {
  return this._proxy.fetch(
    opts
  );
};

