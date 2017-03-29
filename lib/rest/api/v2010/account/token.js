'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var TokenList;
var TokenPage;
var TokenInstance;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.TokenList
 * @description Initialize the TokenList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The unique sid that identifies this account
 */
/* jshint ignore:end */
TokenList = function TokenList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function tokens
   * @memberof Twilio.Api.V2010.AccountContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.TokenContext}
   */
  /* jshint ignore:end */
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
  /* jshint ignore:start */
  /**
   * create a TokenInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.TokenList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} opts.accountSid - The account_sid
   * @param {number} [opts.ttl] - The duration in seconds the credentials are valid
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed TokenInstance
   */
  /* jshint ignore:end */
  TokenListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Ttl': _.get(opts, 'ttl')
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new TokenInstance(
        this._version,
        payload
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
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.TokenPage
 * @augments Page
 * @description Initialize the TokenPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns TokenPage
 */
/* jshint ignore:end */
TokenPage = function TokenPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(TokenPage.prototype, Page.prototype);
TokenPage.prototype.constructor = TokenPage;

/* jshint ignore:start */
/**
 * Build an instance of TokenInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.TokenPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns TokenInstance
 */
/* jshint ignore:end */
TokenPage.prototype.getInstance = function getInstance(payload) {
  return new TokenInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.TokenInstance
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
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
TokenInstance = function TokenInstance(version, payload, accountSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.iceServers = payload.ice_servers; // jshint ignore:line
  this.password = payload.password; // jshint ignore:line
  this.ttl = payload.ttl; // jshint ignore:line
  this.username = payload.username; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
};

module.exports = {
  TokenList: TokenList,
  TokenPage: TokenPage,
  TokenInstance: TokenInstance
};
