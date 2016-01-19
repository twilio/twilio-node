'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var ListResource = require('../../../../../base/ListResource');
var Page = require('../../../../../base/Page');
var values = require('../../../../../base/values');

var TranscriptionPage;
var TranscriptionList;
var TranscriptionInstance;
var TranscriptionContext;

/**
 * Initialize the TranscriptionPage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
 * :param accountSid: The account_sid
 * :param recordingSid: The recording_sid
 *
 * @returns TranscriptionPage
 */
function TranscriptionPage(version, response, accountSid, recordingSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    recordingSid: recordingSid
  };
}

_.extend(TranscriptionPage.prototype, Page.prototype);
TranscriptionPage.prototype.constructor = TranscriptionPage;

/**
 * Build an instance of TranscriptionInstance
 *
 * :param dict payload: Payload response from the API
 *
 * @returns TranscriptionInstance
 */
TranscriptionPage.prototype.getInstance = function getInstance(payload) {
  return new TranscriptionInstance(
    this._version,
    payload,
    accountSid=this._solution['accountSid'],
    recordingSid=this._solution['recordingSid']
  );
};


/**
 * Initialize the TranscriptionList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 * :param recordingSid: The recording_sid
 *
 * @returns TranscriptionList
 */
function TranscriptionList(version, accountSid, recordingSid) {
  function TranscriptionListInstance(sid) {
    return TranscriptionListInstance.get(sid);
  }

  TranscriptionListInstance._version = version;
  // Path Solution
  TranscriptionListInstance._solution = {
    accountSid: accountSid,
    recordingSid: recordingSid
  };
  TranscriptionListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Recordings/<%= recordingSid %>/Transcriptions.json' // jshint ignore:line
  )(TranscriptionListInstance._solution);
  /**
   * Streams TranscriptionInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
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
  TranscriptionListInstance.stream = function stream() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists TranscriptionInstance records from the API as a list.
   *
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
  TranscriptionListInstance.list = function list() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of TranscriptionInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of TranscriptionInstance
   */
  TranscriptionListInstance.page = function page() {
    var params = values.of({
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return TranscriptionPage(
      this._version,
      response,
      solution.accountSid,
      solution.recordingSid
    );
  };

  /**
   * Constructs a TranscriptionContext
   *
   * :param sid - The sid
   *
   * @returns TranscriptionContext
   */
  TranscriptionListInstance.get = function get(sid) {
    return new TranscriptionContext(
      this._version,
      this._solution.accountSid,
      this._solution.recordingSid,
      sid
    );
  };

  return TranscriptionListInstance;
}


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
function TranscriptionInstance(version, payload, accountSid, recordingSid, sid)
                                {
  InstanceResource.prototype.constructor.call(this, version);

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
    recordingSid: recordingSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(TranscriptionInstance.prototype, InstanceResource.prototype);
TranscriptionInstance.prototype.constructor = TranscriptionInstance;

Object.defineProperty(TranscriptionInstance.prototype,
  '_proxy', {
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
TranscriptionInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};


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
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    recordingSid: recordingSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Recordings/<%= recordingSid %>/Transcriptions/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(TranscriptionContext.prototype, InstanceContext.prototype);
TranscriptionContext.prototype.constructor = TranscriptionContext;

/**
 * Fetch a TranscriptionInstance
 *
 * @returns Fetched TranscriptionInstance
 */
TranscriptionContext.prototype.fetch = function fetch() {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new TranscriptionInstance(
      version,
      payload,
      solution.accountSid,
      solution.recordingSid,
      solution.sid
    );
  });

  return promise;
};

/**
 * Deletes the TranscriptionInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
TranscriptionContext.prototype.remove = function remove() {
  return this._version.remove({
    method: 'DELETE',
    uri: this._uri
  });
};

module.exports = {
  TranscriptionPage: TranscriptionPage,
  TranscriptionList: TranscriptionList,
  TranscriptionInstance: TranscriptionInstance,
  TranscriptionContext: TranscriptionContext
};
