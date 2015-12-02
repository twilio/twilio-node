'use strict';

var Instance = require('../../../../../base');

function MobileInstance() {
}

Object.defineProperty(MobileInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(MobileInstance.prototype, 'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(MobileInstance.prototype, 'lata', {
  get: function() {
    return this._properties.lata;
  },
});

Object.defineProperty(MobileInstance.prototype, 'rateCenter', {
  get: function() {
    return this._properties.rateCenter;
  },
});

Object.defineProperty(MobileInstance.prototype, 'latitude', {
  get: function() {
    return this._properties.latitude;
  },
});

Object.defineProperty(MobileInstance.prototype, 'longitude', {
  get: function() {
    return this._properties.longitude;
  },
});

Object.defineProperty(MobileInstance.prototype, 'region', {
  get: function() {
    return this._properties.region;
  },
});

Object.defineProperty(MobileInstance.prototype, 'postalCode', {
  get: function() {
    return this._properties.postalCode;
  },
});

Object.defineProperty(MobileInstance.prototype, 'isoCountry', {
  get: function() {
    return this._properties.isoCountry;
  },
});

Object.defineProperty(MobileInstance.prototype, 'addressRequirements', {
  get: function() {
    return this._properties.addressRequirements;
  },
});

Object.defineProperty(MobileInstance.prototype, 'beta', {
  get: function() {
    return this._properties.beta;
  },
});

Object.defineProperty(MobileInstance.prototype, 'capabilities', {
  get: function() {
    return this._properties.capabilities;
  },
});

/**
 * Initialize the MobileContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {MobileContext}
 */
MobileInstance.prototype.MobileInstance = function MobileInstance(version,
    payload, accountSid, countryCode) {
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

