'use strict';

var Instance = require('../../../../../base');

function LocalInstance() {
}

Object.defineProperty(LocalInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(LocalInstance.prototype, 'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(LocalInstance.prototype, 'lata', {
  get: function() {
    return this._properties.lata;
  },
});

Object.defineProperty(LocalInstance.prototype, 'rateCenter', {
  get: function() {
    return this._properties.rateCenter;
  },
});

Object.defineProperty(LocalInstance.prototype, 'latitude', {
  get: function() {
    return this._properties.latitude;
  },
});

Object.defineProperty(LocalInstance.prototype, 'longitude', {
  get: function() {
    return this._properties.longitude;
  },
});

Object.defineProperty(LocalInstance.prototype, 'region', {
  get: function() {
    return this._properties.region;
  },
});

Object.defineProperty(LocalInstance.prototype, 'postalCode', {
  get: function() {
    return this._properties.postalCode;
  },
});

Object.defineProperty(LocalInstance.prototype, 'isoCountry', {
  get: function() {
    return this._properties.isoCountry;
  },
});

Object.defineProperty(LocalInstance.prototype, 'addressRequirements', {
  get: function() {
    return this._properties.addressRequirements;
  },
});

Object.defineProperty(LocalInstance.prototype, 'beta', {
  get: function() {
    return this._properties.beta;
  },
});

Object.defineProperty(LocalInstance.prototype, 'capabilities', {
  get: function() {
    return this._properties.capabilities;
  },
});

/**
 * Initialize the LocalContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {LocalContext}
 */
LocalInstance.prototype.LocalInstance = function LocalInstance(version, payload,
    accountSid, countryCode) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      friendlyName: payload.friendly_name,
      phoneNumber: payload.phone_number,
      lata: payload.lata,
      rateCenter: payload.rate_center,
      latitude: payload.latitude,
      longitude: payload.longitude,
      region: payload.region,
      postalCode: payload.postal_code,
      isoCountry: payload.iso_country,
      addressRequirements: payload.address_requirements,
      beta: payload.beta,
      capabilities: payload.capabilities,
  };

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
    countryCode: countryCode,
  };
};

