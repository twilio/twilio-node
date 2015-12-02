'use strict';

var _ = require('lodash');
var Instance = require('../../../../../base');
var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the TranscriptionContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} recordingSid - The recording_sid
 * @param {sid} sid - The sid
 *
 * @returns {TranscriptionContext}
 */
function TranscriptionContext(version, accountSid, recordingSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    recordingSid: recordingSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Recordings/<% recording_sid %>/Transcriptions/<% sid %>.json', this._solution);
}

/**
 * Fetch a TranscriptionInstance
 *
 * @returns Fetched TranscriptionInstance
 */
TranscriptionContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new TranscriptionInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.recordingSid,
    this._solution.sid,
  );
};

/**
 * Deletes the TranscriptionInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
TranscriptionContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};


function TranscriptionInstance() {
}

Object.defineProperty(TranscriptionInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TranscriptionContext(
        this._version,
        this._solution.accountSid,
        this._solution.recordingSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(TranscriptionInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TranscriptionInstance.prototype, 'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(TranscriptionInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(TranscriptionInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(TranscriptionInstance.prototype, 'duration', {
  get: function() {
    return this._properties.duration;
  },
});

Object.defineProperty(TranscriptionInstance.prototype, 'price', {
  get: function() {
    return this._properties.price;
  },
});

Object.defineProperty(TranscriptionInstance.prototype, 'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(TranscriptionInstance.prototype, 'recordingSid', {
  get: function() {
    return this._properties.recordingSid;
  },
});

Object.defineProperty(TranscriptionInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(TranscriptionInstance.prototype, 'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(TranscriptionInstance.prototype, 'transcriptionText', {
  get: function() {
    return this._properties.transcriptionText;
  },
});

Object.defineProperty(TranscriptionInstance.prototype, 'type', {
  get: function() {
    return this._properties.type;
  },
});

Object.defineProperty(TranscriptionInstance.prototype, 'uri', {
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
 * @param {sid} recordingSid: The recording_sid
 * @param {sid} sid: The sid
 *
 * @returns {TranscriptionContext}
 */
TranscriptionInstance.prototype.TranscriptionInstance = function
    TranscriptionInstance(version, payload, accountSid, recordingSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      apiVersion: payload.api_version,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      duration: payload.duration,
      price: payload.price,
      priceUnit: payload.price_unit,
      recordingSid: payload.recording_sid,
      sid: payload.sid,
      status: payload.status,
      transcriptionText: payload.transcription_text,
      type: payload.type,
      uri: payload.uri,
  };

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
    recordingSid: recordingSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a TranscriptionInstance
 *
 * @returns Fetched TranscriptionInstance
 */
TranscriptionInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Deletes the TranscriptionInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
TranscriptionInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

