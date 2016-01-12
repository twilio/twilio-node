'use strict';

var _ = require('lodash');
var InstanceResource = require('../../../../../base/InstanceResource');

var DependentPhoneNumberList;
var DependentPhoneNumberInstance;
var DependentPhoneNumberContext;

/**
 * Initialize the DependentPhoneNumberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {DependentPhoneNumberContext}
 */
function DependentPhoneNumberInstance(version, payload, accountSid, addressSid)
                                       {
  InstanceResource.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    friendlyName: payload.friendly_name, // jshint ignore:line,
    phoneNumber: payload.phone_number, // jshint ignore:line,
    lata: payload.lata, // jshint ignore:line,
    rateCenter: payload.rate_center, // jshint ignore:line,
    latitude: payload.latitude, // jshint ignore:line,
    longitude: payload.longitude, // jshint ignore:line,
    region: payload.region, // jshint ignore:line,
    postalCode: payload.postal_code, // jshint ignore:line,
    isoCountry: payload.iso_country, // jshint ignore:line,
    addressRequirements: payload.address_requirements, // jshint ignore:line,
    capabilities: payload.capabilities, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    addressSid: addressSid,
  };
}

_.extend(DependentPhoneNumberInstance.prototype, InstanceResource.prototype);
DependentPhoneNumberInstance.prototype.constructor = DependentPhoneNumberInstance;

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'lata', {
  get: function() {
    return this._properties.lata;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'rateCenter', {
  get: function() {
    return this._properties.rateCenter;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'latitude', {
  get: function() {
    return this._properties.latitude;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'longitude', {
  get: function() {
    return this._properties.longitude;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'region', {
  get: function() {
    return this._properties.region;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'postalCode', {
  get: function() {
    return this._properties.postalCode;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'isoCountry', {
  get: function() {
    return this._properties.isoCountry;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'addressRequirements', {
  get: function() {
    return this._properties.addressRequirements;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'capabilities', {
  get: function() {
    return this._properties.capabilities;
  },
});

module.exports = {
  DependentPhoneNumberList: DependentPhoneNumberList,
  DependentPhoneNumberInstance: DependentPhoneNumberInstance,
  DependentPhoneNumberContext: DependentPhoneNumberContext
};
