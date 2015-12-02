'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var TranscriptionList = require('./recording/transcription');
var values = require('../../../../base/values');

/**
 * Initialize the RecordingContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique recording Sid
 *
 * @returns {RecordingContext}
 */
function RecordingContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Recordings/<% sid %>.json', this._solution);

  // Dependents
  this._transcriptions = undefined;
}

Object.defineProperty(RecordingContext.prototype, 'transcriptions', {
  get: function() {
    if (!this._transcriptions) {
      this._transcriptions = new TranscriptionList(
        this._version,
        this._solution.accountSid,
        this._solution.recordingSid
      );
    }
    return this._transcriptions;
  },
});

/**
 * Fetch a RecordingInstance
 *
 * @returns Fetched RecordingInstance
 */
RecordingContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new RecordingInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid,
  );
};

/**
 * Deletes the RecordingInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
RecordingContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};


function RecordingInstance() {
}

Object.defineProperty(RecordingInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new RecordingContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  },
});

Object.defineProperty(RecordingInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(RecordingInstance.prototype, 'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(RecordingInstance.prototype, 'callSid', {
  get: function() {
    return this._properties.callSid;
  },
});

Object.defineProperty(RecordingInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(RecordingInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(RecordingInstance.prototype, 'duration', {
  get: function() {
    return this._properties.duration;
  },
});

Object.defineProperty(RecordingInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(RecordingInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Initialize the RecordingContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique recording Sid
 *
 * @returns {RecordingContext}
 */
RecordingInstance.prototype.RecordingInstance = function
    RecordingInstance(version, payload, accountSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      apiVersion: payload.api_version,
      callSid: payload.call_sid,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      duration: payload.duration,
      sid: payload.sid,
      uri: payload.uri,
  };

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a RecordingInstance
 *
 * @returns Fetched RecordingInstance
 */
RecordingInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Deletes the RecordingInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
RecordingInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

/**
 * Access the transcriptions
 *
 * @returns transcriptions
 */
RecordingInstance.prototype.transcriptions = function transcriptions() {
  return this._proxy.transcriptions;
};

