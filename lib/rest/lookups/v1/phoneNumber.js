'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../base/InstanceContext');
var InstanceResource = require('../../../base/InstanceResource');
var ListResource = require('../../../base/ListResource');
var values = require('../../../base/values');

var PhoneNumberList;
var PhoneNumberInstance;
var PhoneNumberContext;

/**
 * Initialize the PhoneNumberList
 *
 * :param Version version: Version that contains the resource
 *
 * @returns PhoneNumberList
 */
function PhoneNumberList(version) {
  function PhoneNumberListInstance(sid) {
    return PhoneNumberListInstance.get(sid);
  }

  PhoneNumberListInstance._version = version;
  // Path Solution
  PhoneNumberListInstance._solution = {};
  /**
   * Constructs a PhoneNumberContext
   *
   * :param phoneNumber - The phone_number
   *
   * @returns PhoneNumberContext
   */
  PhoneNumberListInstance.get = function get(phoneNumber) {
    return new PhoneNumberContext(
      this._version,
      phoneNumber
    );
  };

  return PhoneNumberListInstance;
}


/**
 * Initialize the PhoneNumberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {phone_number} phoneNumber: The phone_number
 *
 * @returns {PhoneNumberContext}
 */
function PhoneNumberInstance(version, payload, phoneNumber) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    countryCode: payload.country_code, // jshint ignore:line,
    phoneNumber: payload.phone_number, // jshint ignore:line,
    nationalFormat: payload.national_format, // jshint ignore:line,
    carrier: payload.carrier, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    phoneNumber: phoneNumber || this._properties.phoneNumber,
  };
}

_.extend(PhoneNumberInstance.prototype, InstanceResource.prototype);
PhoneNumberInstance.prototype.constructor = PhoneNumberInstance;

Object.defineProperty(PhoneNumberInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new PhoneNumberContext(
        this._version,
        this._solution.phoneNumber
      );
    }

    return this._context;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype,
  'countryCode', {
  get: function() {
    return this._properties.countryCode;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype,
  'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype,
  'nationalFormat', {
  get: function() {
    return this._properties.nationalFormat;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype,
  'carrier', {
  get: function() {
    return this._properties.carrier;
  },
});

/**
 * Fetch a PhoneNumberInstance
 *
 * @param string [opts.countryCode] - The country_code
 * @param string [opts.type] - The type
 *
 * @returns Fetched PhoneNumberInstance
 */
PhoneNumberInstance.prototype.fetch = function fetch(opts) {
  return this._proxy.fetch(
    opts
  );
};


/**
 * Initialize the PhoneNumberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {phone_number} phoneNumber - The phone_number
 *
 * @returns {PhoneNumberContext}
 */
function PhoneNumberContext(version, phoneNumber) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    phoneNumber: phoneNumber,
  };
  this._uri = _.template(
    '/PhoneNumbers/<%= phoneNumber %>' // jshint ignore:line
  )(this._solution);
}

_.extend(PhoneNumberContext.prototype, InstanceContext.prototype);
PhoneNumberContext.prototype.constructor = PhoneNumberContext;

/**
 * Fetch a PhoneNumberInstance
 *
 * @param string [opts.countryCode] - The country_code
 * @param string [opts.type] - The type
 *
 * @returns Fetched PhoneNumberInstance
 */
PhoneNumberContext.prototype.fetch = function fetch(opts) {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({
    'CountryCode': opts.countryCode || values.unset,
    'Type': opts.type || values.unset,
  });

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new PhoneNumberInstance(
      version,
      payload,
      solution.phoneNumber
    );
  });

  return promise;
};

module.exports = {
  PhoneNumberList: PhoneNumberList,
  PhoneNumberInstance: PhoneNumberInstance,
  PhoneNumberContext: PhoneNumberContext
};
