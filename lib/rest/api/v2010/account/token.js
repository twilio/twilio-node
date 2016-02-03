'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var TokenPage;
var TokenList;
var TokenInstance;
var TokenContext;

/**
 * @constructor Twilio.Api.V2010.AccountContext.TokenPage
 * @augments Page
 * @description Initialize the TokenPage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} accountSid - The unique sid that identifies this account
 *
 * @returns TokenPage
 */
function TokenPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(TokenPage.prototype, Page.prototype);
TokenPage.prototype.constructor = TokenPage;

/**
 * Build an instance of TokenInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns TokenInstance
 */
TokenPage.prototype.getInstance = function getInstance(payload) {
  return new TokenInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * @constructor Twilio.Api.V2010.AccountContext.TokenList
 * @description Initialize the TokenList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid - The unique sid that identifies this account
 *
 * @returns {function} - TokenListInstance
 */
function TokenList(version, accountSid) {
  /**
   * @memberof Twilio.Api.V2010.AccountContext.TokenList
   *
   * @param {string} sid - sid of instance
   *
   * @returns TokenContext
   */
  function TokenListInstance(sid) {
    return TokenListInstance.get(sid);
  }

  TokenListInstance._version = version;
  // Path Solution
  TokenListInstance._solution = {
    accountSid: accountSid
  };
  TokenListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Tokens.json' // jshint ignore:line
  )(TokenListInstance._solution);
  /**
   * @memberof TokenList
   *
   * @description Create a new TokenInstance
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.ttl] - The duration in seconds the credentials are valid
   * @param {function} [callback] - Callback to handle created record
   *
   * @returns {Promise} Resolves to newly created TokenInstance
   */
  TokenListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Ttl': opts.ttl
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new TokenInstance(
        this._version,
        payload,
        this._solution.accountSid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  return TokenListInstance;
}


/**
 * @constructor Twilio.Api.V2010.AccountContext.TokenInstance
 * @augments InstanceResource
 * @description Initialize the TokenContext
 *
 * @property {string} accountSid - The unique sid that identifies this account
 * @property {Date} dateCreated - The date this resource was created
 * @property {Date} dateUpdated - The date this resource was last updated
 * @property {string} iceServers - An array representing the ephemeral credentials
 * @property {string} password - The temporary password used for authenticating
 * @property {string} ttl - The duration in seconds the credentials are valid
 * @property {string} username -
 *          The temporary username that uniquely identifies a Token.
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
 */
function TokenInstance(version, payload, accountSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    iceServers: payload.ice_servers, // jshint ignore:line,
    password: payload.password, // jshint ignore:line,
    ttl: payload.ttl, // jshint ignore:line,
    username: payload.username, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
}

_.extend(TokenInstance.prototype, InstanceResource.prototype);
TokenInstance.prototype.constructor = TokenInstance;

Object.defineProperty(TokenInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TokenInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(TokenInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(TokenInstance.prototype,
  'iceServers', {
  get: function() {
    return this._properties.iceServers;
  },
});

Object.defineProperty(TokenInstance.prototype,
  'password', {
  get: function() {
    return this._properties.password;
  },
});

Object.defineProperty(TokenInstance.prototype,
  'ttl', {
  get: function() {
    return this._properties.ttl;
  },
});

Object.defineProperty(TokenInstance.prototype,
  'username', {
  get: function() {
    return this._properties.username;
  },
});

module.exports = {
  TokenPage: TokenPage,
  TokenList: TokenList,
  TokenInstance: TokenInstance,
  TokenContext: TokenContext
};
