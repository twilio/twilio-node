'use strict';

var Instance = require('../../../../../base');

function DependentPhoneNumberInstance() {
}

Object.defineProperty(DependentPhoneNumberInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype, 'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype, 'lata', {
  get: function() {
    return this._properties.lata;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype, 'rateCenter', {
  get: function() {
    return this._properties.rateCenter;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype, 'latitude', {
  get: function() {
    return this._properties.latitude;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype, 'longitude', {
  get: function() {
    return this._properties.longitude;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype, 'region', {
  get: function() {
    return this._properties.region;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype, 'postalCode', {
  get: function() {
    return this._properties.postalCode;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype, 'isoCountry', {
  get: function() {
    return this._properties.isoCountry;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype, 'addressRequirements', {
  get: function() {
    return this._properties.addressRequirements;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype, 'capabilities', {
  get: function() {
    return this._properties.capabilities;
  },
});

/**
 * Initialize the DependentPhoneNumberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {DependentPhoneNumberContext}
 */
DependentPhoneNumberInstance.prototype.DependentPhoneNumberInstance = function
    DependentPhoneNumberInstance(version, payload, accountSid, addressSid) {
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
      capabilities: payload.capabilities,
  };

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
    addressSid: addressSid,
  };
};

