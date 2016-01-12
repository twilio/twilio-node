'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var values = require('../../../../base/values');

var AuthorizedConnectAppList;
var AuthorizedConnectAppInstance;
var AuthorizedConnectAppContext;

/**
 * Initialize the AuthorizedConnectAppContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} connectAppSid: The connect_app_sid
 *
 * @returns {AuthorizedConnectAppContext}
 */
function AuthorizedConnectAppInstance(version, payload, accountSid,
                                       connectAppSid) {
  InstanceResource.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    connectAppCompanyName: payload.connect_app_company_name, // jshint ignore:line,
    connectAppDescription: payload.connect_app_description, // jshint ignore:line,
    connectAppFriendlyName: payload.connect_app_friendly_name, // jshint ignore:line,
    connectAppHomepageUrl: payload.connect_app_homepage_url, // jshint ignore:line,
    connectAppSid: payload.connect_app_sid, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    permissions: payload.permissions, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    connectAppSid: connectAppSid || this._properties.connectAppSid,
  };
}

_.extend(AuthorizedConnectAppInstance.prototype, InstanceResource.prototype);
AuthorizedConnectAppInstance.prototype.constructor = AuthorizedConnectAppInstance;

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new AuthorizedConnectAppContext(
        this._version,
        this._solution.accountSid,
        this._solution.connectAppSid
      );
    }

    return this._context;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'connectAppCompanyName', {
  get: function() {
    return this._properties.connectAppCompanyName;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'connectAppDescription', {
  get: function() {
    return this._properties.connectAppDescription;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'connectAppFriendlyName', {
  get: function() {
    return this._properties.connectAppFriendlyName;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'connectAppHomepageUrl', {
  get: function() {
    return this._properties.connectAppHomepageUrl;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'connectAppSid', {
  get: function() {
    return this._properties.connectAppSid;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'permissions', {
  get: function() {
    return this._properties.permissions;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a AuthorizedConnectAppInstance
 *
 * @returns Fetched AuthorizedConnectAppInstance
 */
AuthorizedConnectAppInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};


/**
 * Initialize the AuthorizedConnectAppContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} connectAppSid - The connect_app_sid
 *
 * @returns {AuthorizedConnectAppContext}
 */
function AuthorizedConnectAppContext(version, accountSid, connectAppSid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    connectAppSid: connectAppSid,
  };
  this._uri = _.template(
    '/Accounts/<% account_sid %>/AuthorizedConnectApps/<% connect_app_sid %>.json', // jshint ignore:line
    this._solution
  );
}

_.extend(AuthorizedConnectAppContext.prototype, InstanceContext.prototype);
AuthorizedConnectAppContext.prototype.constructor = AuthorizedConnectAppContext;

/**
 * Fetch a AuthorizedConnectAppInstance
 *
 * @returns Fetched AuthorizedConnectAppInstance
 */
AuthorizedConnectAppContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new AuthorizedConnectAppInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.connectAppSid
  );
};

module.exports = {
  AuthorizedConnectAppList: AuthorizedConnectAppList,
  AuthorizedConnectAppInstance: AuthorizedConnectAppInstance,
  AuthorizedConnectAppContext: AuthorizedConnectAppContext
};
