'use strict';

var _ = require('lodash');
var Instance = require('../../../base');
var InstanceContext = require('../../../base/InstanceContext');
var values = require('../../../base/values');

var AlertInstance;
var AlertContext;

function AlertInstance() {
}

Object.defineProperty(AlertInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new AlertContext(
        this._version,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'alertText', {
  get: function() {
    return this._properties.alertText;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'dateGenerated', {
  get: function() {
    return this._properties.dateGenerated;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'errorCode', {
  get: function() {
    return this._properties.errorCode;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'logLevel', {
  get: function() {
    return this._properties.logLevel;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'moreInfo', {
  get: function() {
    return this._properties.moreInfo;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'requestMethod', {
  get: function() {
    return this._properties.requestMethod;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'requestUrl', {
  get: function() {
    return this._properties.requestUrl;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'requestVariables', {
  get: function() {
    return this._properties.requestVariables;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'resourceSid', {
  get: function() {
    return this._properties.resourceSid;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'responseBody', {
  get: function() {
    return this._properties.responseBody;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'responseHeaders', {
  get: function() {
    return this._properties.responseHeaders;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Initialize the AlertContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid: The sid
 *
 * @returns {AlertContext}
 */
AlertInstance.prototype.AlertInstance = function AlertInstance(version, payload,
    sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    alertText: payload.alert_text, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateGenerated: payload.date_generated, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    errorCode: payload.error_code, // jshint ignore:line,
    logLevel: payload.log_level, // jshint ignore:line,
    moreInfo: payload.more_info, // jshint ignore:line,
    requestMethod: payload.request_method, // jshint ignore:line,
    requestUrl: payload.request_url, // jshint ignore:line,
    resourceSid: payload.resource_sid, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
    requestVariables: payload.request_variables, // jshint ignore:line,
    responseBody: payload.response_body, // jshint ignore:line,
    responseHeaders: payload.response_headers, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a AlertInstance
 *
 * @returns Fetched AlertInstance
 */
AlertInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Deletes the AlertInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
AlertInstance.prototype.delete = function delete() {
  return this._proxy.delete();
};


/**
 * Initialize the AlertContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} sid - The sid
 *
 * @returns {AlertContext}
 */
function AlertContext(version, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template(
    '/Alerts/<% sid %>', // jshint ignore:line
    this._solution
  );
}

/**
 * Fetch a AlertInstance
 *
 * @returns Fetched AlertInstance
 */
AlertContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new AlertInstance(
    this._version,
    payload,
    this._solution.sid
  );
};

/**
 * Deletes the AlertInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
AlertContext.prototype.delete = function delete() {
  return this._version.delete('delete', this._uri);
};

module.exports = {
  AlertInstance: AlertInstance,
  AlertContext: AlertContext
};
