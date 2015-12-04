'use strict';

var Instance = require('../../../../base');

function TokenInstance() {
}

Object.defineProperty(TokenInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TokenInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(TokenInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(TokenInstance.prototype, 'iceServers', {
  get: function() {
    return this._properties.iceServers;
  },
});

Object.defineProperty(TokenInstance.prototype, 'password', {
  get: function() {
    return this._properties.password;
  },
});

Object.defineProperty(TokenInstance.prototype, 'ttl', {
  get: function() {
    return this._properties.ttl;
  },
});

Object.defineProperty(TokenInstance.prototype, 'username', {
  get: function() {
    return this._properties.username;
  },
});

/**
 * Initialize the TokenContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {TokenContext}
 */
TokenInstance.prototype.TokenInstance = function TokenInstance(version, payload,
    accountSid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid // jshint ignore:line,
      dateCreated: payload.date_created // jshint ignore:line,
      dateUpdated: payload.date_updated // jshint ignore:line,
      iceServers: payload.ice_servers // jshint ignore:line,
      password: payload.password // jshint ignore:line,
      ttl: payload.ttl // jshint ignore:line,
      username: payload.username // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
};

