'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

var TranscriptionInstance;
var TranscriptionContext;

function TranscriptionInstance() {
}

Object.defineProperty(TranscriptionInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TranscriptionContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(TranscriptionInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TranscriptionInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(TranscriptionInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(TranscriptionInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(TranscriptionInstance.prototype,
  'duration', {
  get: function() {
    return this._properties.duration;
  },
});

Object.defineProperty(TranscriptionInstance.prototype,
  'price', {
  get: function() {
    return this._properties.price;
  },
});

Object.defineProperty(TranscriptionInstance.prototype,
  'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(TranscriptionInstance.prototype,
  'recordingSid', {
  get: function() {
    return this._properties.recordingSid;
  },
});

Object.defineProperty(TranscriptionInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(TranscriptionInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(TranscriptionInstance.prototype,
  'transcriptionText', {
  get: function() {
    return this._properties.transcriptionText;
  },
});

Object.defineProperty(TranscriptionInstance.prototype,
  'type', {
  get: function() {
    return this._properties.type;
  },
});

Object.defineProperty(TranscriptionInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Initialize the TranscriptionContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique transcription Sid
 *
 * @returns {TranscriptionContext}
 */
TranscriptionInstance.prototype.TranscriptionInstance = function
    TranscriptionInstance(version, payload, accountSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    duration: payload.duration, // jshint ignore:line,
    price: payload.price, // jshint ignore:line,
    priceUnit: payload.price_unit, // jshint ignore:line,
    recordingSid: payload.recording_sid, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
    transcriptionText: payload.transcription_text, // jshint ignore:line,
    type: payload.type, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a TranscriptionInstance
 *
 * @returns Fetched TranscriptionInstance
 */
TranscriptionInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Deletes the TranscriptionInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
TranscriptionInstance.prototype.delete = function delete() {
  return this._proxy.delete();
};


/**
 * Initialize the TranscriptionContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique transcription Sid
 *
 * @returns {TranscriptionContext}
 */
function TranscriptionContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<% account_sid %>/Transcriptions/<% sid %>.json', // jshint ignore:line
    this._solution
  );
}

/**
 * Fetch a TranscriptionInstance
 *
 * @returns Fetched TranscriptionInstance
 */
TranscriptionContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new TranscriptionInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

/**
 * Deletes the TranscriptionInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
TranscriptionContext.prototype.delete = function delete() {
  return this._version.delete('delete', this._uri);
};

module.exports = {
  TranscriptionInstance: TranscriptionInstance,
  TranscriptionContext: TranscriptionContext
};
