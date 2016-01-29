'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var ParticipantList = require('./conference/participant').ParticipantList;
var deserialize = require('../../../../base/deserialize');
var serialize = require('../../../../base/serialize');
var values = require('../../../../base/values');

var ConferencePage;
var ConferenceList;
var ConferenceInstance;
var ConferenceContext;

/**
 * Initialize the ConferencePage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} accountSid - The unique sid that identifies this account
 *
 * @returns ConferencePage
 */
function ConferencePage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(ConferencePage.prototype, Page.prototype);
ConferencePage.prototype.constructor = ConferencePage;

/**
 * Build an instance of ConferenceInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns ConferenceInstance
 */
ConferencePage.prototype.getInstance = function getInstance(payload) {
  return new ConferenceInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * Initialize the ConferenceList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid - The unique sid that identifies this account
 *
 * @returns ConferenceList
 */
function ConferenceList(version, accountSid) {
  function ConferenceListInstance(sid) {
    return ConferenceListInstance.get(sid);
  }

  ConferenceListInstance._version = version;
  // Path Solution
  ConferenceListInstance._solution = {
    accountSid: accountSid
  };
  ConferenceListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Conferences.json' // jshint ignore:line
  )(ConferenceListInstance._solution);
  /**
   * Streams ConferenceInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param {Function} opts.callback - A callback function to process records
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
   * @param {moment} [opts.dateCreatedBefore] - Filter by date created
   * @param {moment} [opts.dateCreated] - Filter by date created
   * @param {moment} [opts.dateCreatedAfter] - Filter by date created
   * @param {moment} [opts.dateUpdatedBefore] - Filter by date updated
   * @param {moment} [opts.dateUpdated] - Filter by date updated
   * @param {moment} [opts.dateUpdatedAfter] - Filter by date updated
   * @param {string} [opts.friendlyName] - Filter by friendly name
   * @param {conference.status} [opts.status] - The status of the conference
   */
  ConferenceListInstance.each = function each(opts) {
    opts = opts || {};
    if (!(opts && 'callback' in opts)) {
      throw new Error('opts.callback parameter required');
    }

    var currentPage = 1;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var deferred = Q.defer();
    function fetchNextPage(fn) {
      var promise = fn();

      promise.then(function(page) {
        if (_.isEmpty(page.instances)) {
          deferred.resolve();
        }

        _.each(page.instances, opts.callback);

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          deferred.resolve();
        } else {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(deferred.reject);
    }

    fetchNextPage(_.bind(this.page, this, opts));

    return deferred.promise;
  };

  /**
   * Lists ConferenceInstance records from the API as a list.
   *
   * @param {moment} [opts.dateCreatedBefore] - Filter by date created
   * @param {moment} [opts.dateCreated] - Filter by date created
   * @param {moment} [opts.dateCreatedAfter] - Filter by date created
   * @param {moment} [opts.dateUpdatedBefore] - Filter by date updated
   * @param {moment} [opts.dateUpdated] - Filter by date updated
   * @param {moment} [opts.dateUpdatedAfter] - Filter by date updated
   * @param {string} [opts.friendlyName] - Filter by friendly name
   * @param {conference.status} [opts.status] - The status of the conference
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
  ConferenceListInstance.list = function list(opts) {
    opts = opts || {};
    var allResources = [];
    opts.callback = function(resource) {
      allResources.push(resource);
    };

    var promise = this.each(opts);
    promise = promise.then(function() {
      return allResources;
    });

    return promise;
  };

  /**
   * Retrieve a single page of ConferenceInstance records from the API.
   * Request is executed immediately
   *
   * @param {moment} [opts.dateCreatedBefore] - Filter by date created
   * @param {moment} [opts.dateCreated] - Filter by date created
   * @param {moment} [opts.dateCreatedAfter] - Filter by date created
   * @param {moment} [opts.dateUpdatedBefore] - Filter by date updated
   * @param {moment} [opts.dateUpdated] - Filter by date updated
   * @param {moment} [opts.dateUpdatedAfter] - Filter by date updated
   * @param {string} [opts.friendlyName] - Filter by friendly name
   * @param {conference.status} [opts.status] - The status of the conference
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of ConferenceInstance
   */
  ConferenceListInstance.page = function page(opts) {
    opts = opts || {};
    var params = values.of({
      'DateCreated<': serialize.iso8601Date(opts.dateCreatedBefore),
      'DateCreated': serialize.iso8601Date(opts.dateCreated),
      'DateCreated>': serialize.iso8601Date(opts.dateCreatedAfter),
      'DateUpdated<': serialize.iso8601Date(opts.dateUpdatedBefore),
      'DateUpdated': serialize.iso8601Date(opts.dateUpdated),
      'DateUpdated>': serialize.iso8601Date(opts.dateUpdatedAfter),
      'FriendlyName': opts.friendlyName,
      'Status': opts.status,
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = version.page(
      'GET',
      this._uri,
      { params: params }
    );

    promise = promise.then(function(response) {
      return new ConferencePage(
        this._version,
        response,
        this._solution.accountSid
      );
    }.bind(this));

    return promise;
  };

  /**
   * Constructs a ConferenceContext
   *
   * @param {string} sid - Fetch by unique conference Sid
   *
   * @returns ConferenceContext
   */
  ConferenceListInstance.get = function get(sid) {
    return new ConferenceContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return ConferenceListInstance;
}


/**
 * Initialize the ConferenceContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique conference Sid
 *
 * @returns {ConferenceContext}
 */
function ConferenceInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(ConferenceInstance.prototype, InstanceResource.prototype);
ConferenceInstance.prototype.constructor = ConferenceInstance;

Object.defineProperty(ConferenceInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ConferenceContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(ConferenceInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ConferenceInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ConferenceInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(ConferenceInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(ConferenceInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(ConferenceInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ConferenceInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(ConferenceInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a ConferenceInstance
 *
 * @returns Fetched ConferenceInstance
 */
ConferenceInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Access the participants
 *
 * @returns participants
 */
ConferenceInstance.prototype.participants = function participants() {
  return this._proxy.participants;
};


/**
 * Initialize the ConferenceContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique conference Sid
 *
 * @returns {ConferenceContext}
 */
function ConferenceContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Conferences/<%= sid %>.json' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._participants = undefined;
}

_.extend(ConferenceContext.prototype, InstanceContext.prototype);
ConferenceContext.prototype.constructor = ConferenceContext;

/**
 * Fetch a ConferenceInstance
 *
 * @returns Fetched ConferenceInstance
 */
ConferenceContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new ConferenceInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    );
  }.bind(this));

  return promise;
};

Object.defineProperty(ConferenceContext.prototype,
  'participants', {
  get: function() {
    if (!this._participants) {
      this._participants = new ParticipantList(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }
    return this._participants;
  },
});

module.exports = {
  ConferencePage: ConferencePage,
  ConferenceList: ConferenceList,
  ConferenceInstance: ConferenceInstance,
  ConferenceContext: ConferenceContext
};
