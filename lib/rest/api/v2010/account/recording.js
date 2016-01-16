'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var ListResource = require('../../../../base/ListResource');
var TranscriptionList = require('./recording/transcription').TranscriptionList;
var values = require('../../../../base/values');

var RecordingList;
var RecordingInstance;
var RecordingContext;

/**
 * Initialize the RecordingList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The unique sid that identifies this account
 *
 * @returns RecordingList
 */
function RecordingList(version, accountSid) {
  function RecordingListInstance(sid) {
    return RecordingListInstance.get(sid);
  }

  RecordingListInstance._version = version;
  // Path Solution
  RecordingListInstance._solution = {
    accountSid: accountSid
  };
  RecordingListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Recordings.json' // jshint ignore:line
  )(RecordingListInstance._solution);
  /**
   * Streams RecordingInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.dateCreatedBefore] - Filter by date created
   * @param string [opts.dateCreated] - Filter by date created
   * @param string [opts.dateCreatedAfter] - Filter by date created
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         list() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} opts.callback - A callback function to process records
   */
  RecordingListInstance.stream = function stream(opts) {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page(
      opts
    );

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists RecordingInstance records from the API as a list.
   *
   * @param string [opts.dateCreatedBefore] - Filter by date created
   * @param string [opts.dateCreated] - Filter by date created
   * @param string [opts.dateCreatedAfter] - Filter by date created
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   *
   * @returns {Array} A list of records
   */
  RecordingListInstance.list = function list(opts) {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      opts,
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.dateCreatedBefore] - Filter by date created
   * @param string [opts.dateCreated] - Filter by date created
   * @param string [opts.dateCreatedAfter] - Filter by date created
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of RecordingInstance
   */
  RecordingListInstance.page = function page(opts) {
    var params = values.of({
      'DateCreated<': opts.datecreatedbefore,
      'DateCreated': opts.dateCreated,
      'DateCreated>': opts.datecreatedafter,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return RecordingPage(
      this._version,
      response,
      solution.accountSid
    );
  };

  /**
   * Constructs a RecordingContext
   *
   * :param sid - Fetch by unique recording Sid
   *
   * @returns RecordingContext
   */
  RecordingListInstance.get = function get(sid) {
    return new RecordingContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return RecordingListInstance;
}


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
function RecordingInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    callSid: payload.call_sid, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    duration: payload.duration, // jshint ignore:line,
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

_.extend(RecordingInstance.prototype, InstanceResource.prototype);
RecordingInstance.prototype.constructor = RecordingInstance;

Object.defineProperty(RecordingInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new RecordingContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(RecordingInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(RecordingInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(RecordingInstance.prototype,
  'callSid', {
  get: function() {
    return this._properties.callSid;
  },
});

Object.defineProperty(RecordingInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(RecordingInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(RecordingInstance.prototype,
  'duration', {
  get: function() {
    return this._properties.duration;
  },
});

Object.defineProperty(RecordingInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(RecordingInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a RecordingInstance
 *
 * @returns Fetched RecordingInstance
 */
RecordingInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Deletes the RecordingInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
RecordingInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};

/**
 * Access the transcriptions
 *
 * @returns transcriptions
 */
RecordingInstance.prototype.transcriptions = function transcriptions() {
  return this._proxy.transcriptions;
};


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
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Recordings/<%= sid %>.json' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._transcriptions = undefined;
}

_.extend(RecordingContext.prototype, InstanceContext.prototype);
RecordingContext.prototype.constructor = RecordingContext;

/**
 * Fetch a RecordingInstance
 *
 * @returns Fetched RecordingInstance
 */
RecordingContext.prototype.fetch = function fetch() {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new RecordingInstance(
      version,
      payload,
      solution.accountSid,
      solution.sid
    );
  });

  return promise;
};

/**
 * Deletes the RecordingInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
RecordingContext.prototype.remove = function remove() {
  return this._version.remove({
    method: 'DELETE',
    uri: this._uri
  });
};

Object.defineProperty(RecordingContext.prototype,
  'transcriptions', {
  get: function() {
    if (!this._transcriptions) {
      this._transcriptions = new TranscriptionList(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }
    return this._transcriptions;
  },
});

module.exports = {
  RecordingList: RecordingList,
  RecordingInstance: RecordingInstance,
  RecordingContext: RecordingContext
};
