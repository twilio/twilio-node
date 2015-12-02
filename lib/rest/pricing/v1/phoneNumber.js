'use strict';

var Instance = require('../../../base');

function PhoneNumberInstance() {
}

Object.defineProperty(PhoneNumberInstance.prototype, 'name', {
  get: function() {
    return this._properties.name;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype, 'url', {
  get: function() {
    return this._properties.url;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype, 'links', {
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
      name: payload.name,
      url: payload.url,
      links: payload.links,
  };

  // Context
  this._context = None;
  this._solution = {};
};

