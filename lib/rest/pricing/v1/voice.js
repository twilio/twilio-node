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
 * @constructor Twilio.Pricing.V1.VoicePage
 * @augments Page
 * @description Initialize the VoicePage
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} response - Response from the API
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
 * @param {object} payload - Payload response from the API
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
 * @constructor Twilio.Pricing.V1.VoiceList
 * @description Initialize the VoiceList
 *
 * @param {V1} version - Version that contains the resource
 *
 * @returns {function} - VoiceListInstance
 */
function VoiceList(version) {
  /**
   * @memberof Twilio.Pricing.V1.VoiceList
   *
   * @param {string} sid - sid of instance
   *
   * @returns VoiceContext
   */
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
 * @constructor Twilio.Pricing.V1.VoiceInstance
 * @augments InstanceResource
 * @description Initialize the VoiceContext
 *
 * @property {string} name - The name
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} payload - The instance payload
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
