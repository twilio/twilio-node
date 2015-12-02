'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var LocalList = require('./availablePhoneNumber/local');
var MobileList = require('./availablePhoneNumber/mobile');
var TollFreeList = require('./availablePhoneNumber/tollFree');
var values = require('../../../../base/values');

/**
 * Initialize the AvailablePhoneNumberCountryContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {iso_country_code} countryCode - The country_code
 *
 * @returns {AvailablePhoneNumberCountryContext}
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
        this._solution.accountSid
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
        this._solution.accountSid
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
        this._solution.accountSid
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

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new AvailablePhoneNumberCountryInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.countryCode,
  );
};


function AvailablePhoneNumberCountryInstance() {
}

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new AvailablePhoneNumberCountryContext(
        this._version,
        this._solution.accountSid,
        this._solution.countryCode
      );
    return this._context;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype, 'countryCode', {
  get: function() {
    return this._properties.countryCode;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype, 'country', {
  get: function() {
    return this._properties.country;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype, 'beta', {
  get: function() {
    return this._properties.beta;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype, 'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

/**
 * Initialize the AvailablePhoneNumberCountryContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {iso_country_code} countryCode: The country_code
 *
 * @returns {AvailablePhoneNumberCountryContext}
 */
AvailablePhoneNumberCountryInstance.prototype.AvailablePhoneNumberCountryInstance = function AvailablePhoneNumberCountryInstance(version, payload, accountSid, countryCode)
   {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      countryCode: payload.country_code,
      country: payload.country,
      uri: payload.uri,
      beta: payload.beta,
      subresourceUris: payload.subresource_uris,
  };

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
    countryCode: countryCode || this._properties.countryCode,
  };
};

/**
 * Fetch a AvailablePhoneNumberCountryInstance
 *
 * @returns Fetched AvailablePhoneNumberCountryInstance
 */
AvailablePhoneNumberCountryInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Access the local
 *
 * @returns local
 */
AvailablePhoneNumberCountryInstance.prototype.local = function local() {
  return this._proxy.local;
};

/**
 * Access the tollFree
 *
 * @returns tollFree
 */
AvailablePhoneNumberCountryInstance.prototype.tollFree = function tollFree() {
  return this._proxy.tollFree;
};

/**
 * Access the mobile
 *
 * @returns mobile
 */
AvailablePhoneNumberCountryInstance.prototype.mobile = function mobile() {
  return this._proxy.mobile;
};

