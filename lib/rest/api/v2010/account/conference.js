'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var ListResource = require('../../../../base/ListResource');
var ParticipantList = require('./conference/participant').ParticipantList;
var values = require('../../../../base/values');

var ConferenceList;
var ConferenceInstance;
var ConferenceContext;

/**
 * Initialize the ConferenceList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The unique sid that identifies this account
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
    '/Accounts/{account_sid}/Conferences.json' // jshint ignore:line
  )(ConferenceListInstance._solution);
  /**
   * Streams ConferenceInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.dateCreatedBefore] - Filter by date created
   * @param string [opts.dateCreated] - Filter by date created
   * @param string [opts.dateCreatedAfter] - Filter by date created
   * @param string [opts.dateUpdatedBefore] - Filter by date updated
   * @param string [opts.dateUpdated] - Filter by date updated
   * @param string [opts.dateUpdatedAfter] - Filter by date updated
   * @param string [opts.friendlyName] - Filter by friendly name
   * @param conference.status [opts.status] - The status of the conference
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
  ConferenceListInstance.stream = function stream(opts) {
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
   * Lists ConferenceInstance records from the API as a list.
   *
   * @param string [opts.dateCreatedBefore] - Filter by date created
   * @param string [opts.dateCreated] - Filter by date created
   * @param string [opts.dateCreatedAfter] - Filter by date created
   * @param string [opts.dateUpdatedBefore] - Filter by date updated
   * @param string [opts.dateUpdated] - Filter by date updated
   * @param string [opts.dateUpdatedAfter] - Filter by date updated
   * @param string [opts.friendlyName] - Filter by friendly name
   * @param conference.status [opts.status] - The status of the conference
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
   * Retrieve a single page of ConferenceInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.dateCreatedBefore] - Filter by date created
   * @param string [opts.dateCreated] - Filter by date created
   * @param string [opts.dateCreatedAfter] - Filter by date created
   * @param string [opts.dateUpdatedBefore] - Filter by date updated
   * @param string [opts.dateUpdated] - Filter by date updated
   * @param string [opts.dateUpdatedAfter] - Filter by date updated
   * @param string [opts.friendlyName] - Filter by friendly name
   * @param conference.status [opts.status] - The status of the conference
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of ConferenceInstance
   */
  ConferenceListInstance.page = function page(opts) {
    var params = values.of({
      'Datecreated<': opts.datecreatedbefore,
      'Datecreated': opts.dateCreated,
      'Datecreated>': opts.datecreatedafter,
      'Dateupdated<': opts.dateupdatedbefore,
      'Dateupdated': opts.dateUpdated,
      'Dateupdated>': opts.dateupdatedafter,
      'Friendlyname': opts.friendlyName,
      'Status': opts.status,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return ConferencePage(
      this._version,
      response,
      this._solution.accountSid
    );
  };

  /**
   * Constructs a ConferenceContext
   *
   * :param sid - Fetch by unique conference Sid
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
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique conference Sid
 *
 * @returns {ConferenceContext}
 */
function ConferenceInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
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
    '/Accounts/<% account_sid %>/Conferences/<% sid %>.json' // jshint ignore:line
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
  });

  return promise;
};

Object.defineProperty(ConferenceContext.prototype,
  'participants', {
  get: function() {
    if (!this._participants) {
      this._participants = new ParticipantList(
        this._version,
        this._solution.accountSid,
        this._solution.conferenceSid
      );
    }
    return this._participants;
  },
});

module.exports = {
  ConferenceList: ConferenceList,
  ConferenceInstance: ConferenceInstance,
  ConferenceContext: ConferenceContext
};
