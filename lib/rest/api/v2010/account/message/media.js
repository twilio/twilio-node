'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var values = require('../../../../../base/values');

var MediaList;
var MediaInstance;
var MediaContext;

/**
 * Initialize the MediaContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} messageSid: The message_sid
 * @param {sid} sid: Fetch by unique media Sid
 *
 * @returns {MediaContext}
 */
function MediaInstance(version, payload, accountSid, messageSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    contentType: payload.content_type, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    parentSid: payload.parent_sid, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    messageSid: messageSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(MediaInstance.prototype, InstanceResource.prototype);
MediaInstance.prototype.constructor = MediaInstance;

Object.defineProperty(MediaInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new MediaContext(
        this._version,
        this._solution.accountSid,
        this._solution.messageSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(MediaInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(MediaInstance.prototype,
  'contentType', {
  get: function() {
    return this._properties.contentType;
  },
});

Object.defineProperty(MediaInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(MediaInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(MediaInstance.prototype,
  'parentSid', {
  get: function() {
    return this._properties.parentSid;
  },
});

Object.defineProperty(MediaInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(MediaInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Deletes the MediaInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
MediaInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};

/**
 * Fetch a MediaInstance
 *
 * @returns Fetched MediaInstance
 */
MediaInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};


/**
 * Initialize the MediaContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} messageSid - The message_sid
 * @param {sid} sid - Fetch by unique media Sid
 *
 * @returns {MediaContext}
 */
function MediaContext(version, accountSid, messageSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    messageSid: messageSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<% account_sid %>/Messages/<% message_sid %>/Media/<% sid %>.json', // jshint ignore:line
    this._solution
  );
}

_.extend(MediaContext.prototype, InstanceContext.prototype);
MediaContext.prototype.constructor = MediaContext;

/**
 * Deletes the MediaInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
MediaContext.prototype.remove = function remove() {
  return this._version.remove(this._uri);
};

/**
 * Fetch a MediaInstance
 *
 * @returns Fetched MediaInstance
 */
MediaContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new MediaInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.messageSid,
    this._solution.sid
  );
};

module.exports = {
  MediaList: MediaList,
  MediaInstance: MediaInstance,
  MediaContext: MediaContext
};
