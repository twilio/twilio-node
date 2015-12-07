'use strict';

var CountryList = require('./voice/country');
var ListResource = require('../../../base/ListResource');
var NumberList = require('./voice/number');

var VoiceList;
var VoiceInstance;
var VoiceContext;

/**
 * Initialize the VoiceList
 *
 * :param Version version: Version that contains the resource
 *
 * @returns VoiceList
 */
function VoiceList(version) {
  function VoiceListInstance() {
  }

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
      return this._countries;
    },
  });

  return VoiceListInstance;
}

module.exports = {
  VoiceList: VoiceList,
  VoiceInstance: VoiceInstance,
  VoiceContext: VoiceContext
};
