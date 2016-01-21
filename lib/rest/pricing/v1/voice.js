'use strict';

var _ = require('lodash');
var CountryList = require('./voice/country').CountryList;
var InstanceResource = require('../../../base/InstanceResource');
var NumberList = require('./voice/number').NumberList;
var Page = require('../../../base/Page');

var VoicePage;
var VoiceList;
var VoiceInstance;
var VoiceContext;

/**
 * Initialize the VoicePage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
 *
 * @returns VoicePage
 */
function VoicePage(version, response) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {};
}

_.extend(VoicePage.prototype, Page.prototype);
VoicePage.prototype.constructor = VoicePage;

/**
 * Build an instance of VoiceInstance
 *
 * :param dict payload: Payload response from the API
 *
 * @returns VoiceInstance
 */
VoicePage.prototype.getInstance = function getInstance(payload) {
  return new VoiceInstance(
    this._version,
    payload
  );
};


/**
 * Initialize the VoiceList
 *
 * :param Version version: Version that contains the resource
 *
 * @returns VoiceList
 */
function VoiceList(version) {
  function VoiceListInstance(sid) {
    return VoiceListInstance.get(sid);
  }

  VoiceListInstance._version = version;
  // Path Solution
  VoiceListInstance._solution = {};

  // Components
  VoiceListInstance._numbers = undefined;
  VoiceListInstance._countries = undefined;

  Object.defineProperty(VoiceListInstance,
    'numbers', {
    get: function numbers() {
      if (!this._numbers) {
        this._numbers = new NumberList(
          this._version
        );
      }

      return this._numbers;
    },
  });

  Object.defineProperty(VoiceListInstance,
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

  return VoiceListInstance;
}


/**
 * Initialize the VoiceContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {VoiceContext}
 */
function VoiceInstance(version, payload) {
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

_.extend(VoiceInstance.prototype, InstanceResource.prototype);
VoiceInstance.prototype.constructor = VoiceInstance;

Object.defineProperty(VoiceInstance.prototype,
  'name', {
  get: function() {
    return this._properties.name;
  },
});

Object.defineProperty(VoiceInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

Object.defineProperty(VoiceInstance.prototype,
  'links', {
  get: function() {
    return this._properties.links;
  },
});

module.exports = {
  VoicePage: VoicePage,
  VoiceList: VoiceList,
  VoiceInstance: VoiceInstance,
  VoiceContext: VoiceContext
};
