'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var values = require('../../../../base/values');

var ConnectAppList;
var ConnectAppInstance;
var ConnectAppContext;

/**
 * Initialize the ConnectAppContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique connect-app Sid
 *
 * @returns {ConnectAppContext}
 */
function ConnectAppInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    authorizeRedirectUrl: payload.authorize_redirect_url, // jshint ignore:line,
    companyName: payload.company_name, // jshint ignore:line,
    deauthorizeCallbackMethod: payload.deauthorize_callback_method, // jshint ignore:line,
    deauthorizeCallbackUrl: payload.deauthorize_callback_url, // jshint ignore:line,
    description: payload.description, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    homepageUrl: payload.homepage_url, // jshint ignore:line,
    permissions: payload.permissions, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(ConnectAppInstance.prototype, InstanceResource.prototype);
ConnectAppInstance.prototype.constructor = ConnectAppInstance;

Object.defineProperty(ConnectAppInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ConnectAppContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'authorizeRedirectUrl', {
  get: function() {
    return this._properties.authorizeRedirectUrl;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'companyName', {
  get: function() {
    return this._properties.companyName;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'deauthorizeCallbackMethod', {
  get: function() {
    return this._properties.deauthorizeCallbackMethod;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'deauthorizeCallbackUrl', {
  get: function() {
    return this._properties.deauthorizeCallbackUrl;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'description', {
  get: function() {
    return this._properties.description;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'homepageUrl', {
  get: function() {
    return this._properties.homepageUrl;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'permissions', {
  get: function() {
    return this._properties.permissions;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a ConnectAppInstance
 *
 * @returns Fetched ConnectAppInstance
 */
ConnectAppInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the ConnectAppInstance
 *
 * @param string [opts.authorizeRedirectUrl] -
 *          URIL Twilio sends requests when users authorize
 * @param string [opts.companyName] - The company name set for this Connect App.
 * @param string [opts.deauthorizeCallbackMethod] -
 *          HTTP method Twilio WIll use making requests to the url
 * @param string [opts.deauthorizeCallbackUrl] -
 *          URL Twilio will send a request when a user de-authorizes this app
 * @param string [opts.description] - A more detailed human readable description
 * @param string [opts.friendlyName] - A human readable name for the Connect App.
 * @param string [opts.homepageUrl] - The URL users can obtain more information
 * @param connect_app.permission [opts.permissions] -
 *          The set of permissions that your ConnectApp requests.
 *
 * @returns Updated ConnectAppInstance
 */
ConnectAppInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};


/**
 * Initialize the ConnectAppContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique connect-app Sid
 *
 * @returns {ConnectAppContext}
 */
function ConnectAppContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<% account_sid %>/ConnectApps/<% sid %>.json', // jshint ignore:line
    this._solution
  );
}

_.extend(ConnectAppContext.prototype, InstanceContext.prototype);
ConnectAppContext.prototype.constructor = ConnectAppContext;

/**
 * Fetch a ConnectAppInstance
 *
 * @returns Fetched ConnectAppInstance
 */
ConnectAppContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new ConnectAppInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

/**
 * Update the ConnectAppInstance
 *
 * @param string [opts.authorizeRedirectUrl] -
 *          URIL Twilio sends requests when users authorize
 * @param string [opts.companyName] - The company name set for this Connect App.
 * @param string [opts.deauthorizeCallbackMethod] -
 *          HTTP method Twilio WIll use making requests to the url
 * @param string [opts.deauthorizeCallbackUrl] -
 *          URL Twilio will send a request when a user de-authorizes this app
 * @param string [opts.description] - A more detailed human readable description
 * @param string [opts.friendlyName] - A human readable name for the Connect App.
 * @param string [opts.homepageUrl] - The URL users can obtain more information
 * @param connect_app.permission [opts.permissions] -
 *          The set of permissions that your ConnectApp requests.
 *
 * @returns Updated ConnectAppInstance
 */
ConnectAppContext.prototype.update = function update(opts) {
  var data = values.of({
    'Authorizeredirecturl': opts.authorizeRedirectUrl,
    'Companyname': opts.companyName,
    'Deauthorizecallbackmethod': opts.deauthorizeCallbackMethod,
    'Deauthorizecallbackurl': opts.deauthorizeCallbackUrl,
    'Description': opts.description,
    'Friendlyname': opts.friendlyName,
    'Homepageurl': opts.homepageUrl,
    'Permissions': opts.permissions,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new ConnectAppInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

module.exports = {
  ConnectAppList: ConnectAppList,
  ConnectAppInstance: ConnectAppInstance,
  ConnectAppContext: ConnectAppContext
};
