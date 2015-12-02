'use strict';

var Instance = require('../../../../../base');

function TollFreeInstance() {
}

Object.defineProperty(TollFreeInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(TollFreeInstance.prototype, 'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(TollFreeInstance.prototype, 'lata', {
  get: function() {
    return this._properties.lata;
  },
});

Object.defineProperty(TollFreeInstance.prototype, 'rateCenter', {
  get: function() {
    return this._properties.rateCenter;
  },
});

Object.defineProperty(TollFreeInstance.prototype, 'latitude', {
  get: function() {
    return this._properties.latitude;
  },
});

Object.defineProperty(TollFreeInstance.prototype, 'longitude', {
  get: function() {
    return this._properties.longitude;
  },
});

Object.defineProperty(TollFreeInstance.prototype, 'region', {
  get: function() {
    return this._properties.region;
  },
});

Object.defineProperty(TollFreeInstance.prototype, 'postalCode', {
  get: function() {
    return this._properties.postalCode;
  },
});

Object.defineProperty(TollFreeInstance.prototype, 'isoCountry', {
  get: function() {
    return this._properties.isoCountry;
  },
});

Object.defineProperty(TollFreeInstance.prototype, 'addressRequirements', {
  get: function() {
    return this._properties.addressRequirements;
  },
});

Object.defineProperty(TollFreeInstance.prototype, 'beta', {
  get: function() {
    return this._properties.beta;
  },
});

Object.defineProperty(TollFreeInstance.prototype, 'capabilities', {
  get: function() {
    return this._properties.capabilities;
  },
});

/**
 * Initialize the TollFreeContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {TollFreeContext}
 */
TollFreeInstance.prototype.TollFreeInstance = function TollFreeInstance(version,
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

