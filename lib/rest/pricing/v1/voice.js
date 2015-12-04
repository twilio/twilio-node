'use strict';

var Instance = require('../../../base');

function VoiceInstance() {
}

Object.defineProperty(VoiceInstance.prototype, 'name', {
  get: function() {
    return this._properties.name;
  },
});

Object.defineProperty(VoiceInstance.prototype, 'url', {
  get: function() {
    return this._properties.url;
  },
});

Object.defineProperty(VoiceInstance.prototype, 'links', {
  get: function() {
    return this._properties.links;
  },
});

/**
 * Initialize the VoiceContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {VoiceContext}
 */
VoiceInstance.prototype.VoiceInstance = function VoiceInstance(version, payload)
    {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      name: payload.name // jshint ignore:line,
      url: payload.url // jshint ignore:line,
      links: payload.links // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {};
};

