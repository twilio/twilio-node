'use strict';

var _ = require('lodash');
var CountryList = require('./phoneNumber/country').CountryList;
var InstanceResource = require('../../../base/InstanceResource');
var ListResource = require('../../../base/ListResource');

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

  // Components
  PhoneNumberListInstance._countries = undefined;

  Object.defineProperty(PhoneNumberListInstance,
    'countries', {
    get: function countries() {
      if (!this._countries) {
        this._countries = new CountryList(
          this._version
        );
      }

      return this._countries;
    },
  });

  return PhoneNumberListInstance;
}


/**
 * Initialize the PhoneNumberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {PhoneNumberContext}
 */
function PhoneNumberInstance(version, payload) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    name: payload.name, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
    links: payload.links, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {};
}

_.extend(PhoneNumberInstance.prototype, InstanceResource.prototype);
PhoneNumberInstance.prototype.constructor = PhoneNumberInstance;

Object.defineProperty(PhoneNumberInstance.prototype,
  'name', {
  get: function() {
    return this._properties.name;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype,
  'links', {
  get: function() {
    return this._properties.links;
  },
});

module.exports = {
  PhoneNumberList: PhoneNumberList,
  PhoneNumberInstance: PhoneNumberInstance,
  PhoneNumberContext: PhoneNumberContext
};
