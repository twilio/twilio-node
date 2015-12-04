'use strict';

var Instance = require('../../../base');

var PhoneNumberInstance;
var PhoneNumberContext;

function PhoneNumberInstance() {
}

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

/**
 * Initialize the PhoneNumberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {PhoneNumberContext}
 */
PhoneNumberInstance.prototype.PhoneNumberInstance = function
    PhoneNumberInstance(version, payload) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    name: payload.name, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
    links: payload.links, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {};
};

module.exports = {
  PhoneNumberInstance: PhoneNumberInstance,
  PhoneNumberContext: PhoneNumberContext
};
