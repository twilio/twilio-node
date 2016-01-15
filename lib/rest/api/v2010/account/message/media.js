'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var MediaList;
var MediaInstance;
var MediaContext;

/**
 * Initialize the MediaList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The unique sid that identifies this account
 * :param messageSid: A string that uniquely identifies this message
 *
 * @returns MediaList
 */
function MediaList(version, accountSid, messageSid) {
  function MediaListInstance(sid) {
    return MediaListInstance.get(sid);
  }

  MediaListInstance._version = version;
  // Path Solution
  MediaListInstance._solution = {
    accountSid: accountSid,
    messageSid: messageSid
  };
  MediaListInstance._uri = _.template(
    '/Accounts/{account_sid}/Messages/{message_sid}/Media.json' // jshint ignore:line
  )(MediaListInstance._solution);
  /**
   * Streams MediaInstance records from the API.
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
  MediaListInstance.stream = function stream(opts) {
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
   * Lists MediaInstance records from the API as a list.
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
  MediaListInstance.list = function list(opts) {
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
   * Retrieve a single page of MediaInstance records from the API.
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
   * @returns Page of MediaInstance
   */
  MediaListInstance.page = function page(opts) {
    var params = values.of({
      'Datecreated<': opts.datecreatedbefore,
      'Datecreated': opts.dateCreated,
      'Datecreated>': opts.datecreatedafter,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return MediaPage(
      this._version,
      response,
      this._solution.accountSid,
      this._solution.messageSid
    );
  };

  /**
   * Constructs a MediaContext
   *
   * :param sid - Fetch by unique media Sid
   *
   * @returns MediaContext
   */
  MediaListInstance.get = function get(sid) {
    return new MediaContext(
      this._version,
      this._solution.accountSid,
      this._solution.messageSid,
      sid
    );
  };

  return MediaListInstance;
}


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
    '/Accounts/<% account_sid %>/Messages/<% message_sid %>/Media/<% sid %>.json' // jshint ignore:line
  )(this._solution);
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

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new MediaInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.messageSid,
      this._solution.sid
    );
  });

  return promise;
};

module.exports = {
  MediaList: MediaList,
  MediaInstance: MediaInstance,
  MediaContext: MediaContext
};
