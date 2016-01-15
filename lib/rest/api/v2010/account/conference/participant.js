'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var ParticipantList;
var ParticipantInstance;
var ParticipantContext;

/**
 * Initialize the ParticipantList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The unique sid that identifies this account
 * :param conferenceSid: A string that uniquely identifies this conference
 *
 * @returns ParticipantList
 */
function ParticipantList(version, accountSid, conferenceSid) {
  function ParticipantListInstance(sid) {
    return ParticipantListInstance.get(sid);
  }

  ParticipantListInstance._version = version;
  // Path Solution
  ParticipantListInstance._solution = {
    accountSid: accountSid,
    conferenceSid: conferenceSid
  };
  ParticipantListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Conferences/<%= conferenceSid %>/Participants.json' // jshint ignore:line
  )(ParticipantListInstance._solution);
  /**
   * Streams ParticipantInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.muted] - Filter by muted participants
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
  ParticipantListInstance.stream = function stream(opts) {
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
   * Lists ParticipantInstance records from the API as a list.
   *
   * @param string [opts.muted] - Filter by muted participants
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
  ParticipantListInstance.list = function list(opts) {
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
   * Retrieve a single page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.muted] - Filter by muted participants
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of ParticipantInstance
   */
  ParticipantListInstance.page = function page(opts) {
    var params = values.of({
      'Muted': opts.muted,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return ParticipantPage(
      this._version,
      response,
      this._solution.accountSid,
      this._solution.conferenceSid
    );
  };

  /**
   * Constructs a ParticipantContext
   *
   * :param callSid - The call_sid
   *
   * @returns ParticipantContext
   */
  ParticipantListInstance.get = function get(callSid) {
    return new ParticipantContext(
      this._version,
      this._solution.accountSid,
      this._solution.conferenceSid,
      callSid
    );
  };

  return ParticipantListInstance;
}


/**
 * Initialize the ParticipantContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} conferenceSid: The string that uniquely identifies this conference
 * @param {sid} callSid: The call_sid
 *
 * @returns {ParticipantContext}
 */
function ParticipantInstance(version, payload, accountSid, conferenceSid,
                              callSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    callSid: payload.call_sid, // jshint ignore:line,
    conferenceSid: payload.conference_sid, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    endConferenceOnExit: payload.end_conference_on_exit, // jshint ignore:line,
    muted: payload.muted, // jshint ignore:line,
    startConferenceOnEnter: payload.start_conference_on_enter, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    conferenceSid: conferenceSid,
    callSid: callSid || this._properties.callSid,
  };
}

_.extend(ParticipantInstance.prototype, InstanceResource.prototype);
ParticipantInstance.prototype.constructor = ParticipantInstance;

Object.defineProperty(ParticipantInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ParticipantContext(
        this._version,
        this._solution.accountSid,
        this._solution.conferenceSid,
        this._solution.callSid
      );
    }

    return this._context;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'callSid', {
  get: function() {
    return this._properties.callSid;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'conferenceSid', {
  get: function() {
    return this._properties.conferenceSid;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'endConferenceOnExit', {
  get: function() {
    return this._properties.endConferenceOnExit;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'muted', {
  get: function() {
    return this._properties.muted;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'startConferenceOnEnter', {
  get: function() {
    return this._properties.startConferenceOnEnter;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a ParticipantInstance
 *
 * @returns Fetched ParticipantInstance
 */
ParticipantInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the ParticipantInstance
 *
 * @param string muted - Indicates if the participant should be muted
 *
 * @returns Updated ParticipantInstance
 */
ParticipantInstance.prototype.update = function update(muted) {
  return this._proxy.update(
    muted
  );
};

/**
 * Deletes the ParticipantInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
ParticipantInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};


/**
 * Initialize the ParticipantContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} conferenceSid - The string that uniquely identifies this conference
 * @param {sid} callSid - The call_sid
 *
 * @returns {ParticipantContext}
 */
function ParticipantContext(version, accountSid, conferenceSid, callSid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    conferenceSid: conferenceSid,
    callSid: callSid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Conferences/<%= conferenceSid %>/Participants/<%= callSid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(ParticipantContext.prototype, InstanceContext.prototype);
ParticipantContext.prototype.constructor = ParticipantContext;

/**
 * Fetch a ParticipantInstance
 *
 * @returns Fetched ParticipantInstance
 */
ParticipantContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new ParticipantInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.conferenceSid,
      this._solution.callSid
    );
  });

  return promise;
};

/**
 * Update the ParticipantInstance
 *
 * @param string muted - Indicates if the participant should be muted
 *
 * @returns Updated ParticipantInstance
 */
ParticipantContext.prototype.update = function update(muted) {
  var data = values.of({
    'Muted': muted,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new ParticipantInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.conferenceSid,
    this._solution.callSid
  );
};

/**
 * Deletes the ParticipantInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
ParticipantContext.prototype.remove = function remove() {
  return this._version.remove(this._uri);
};

module.exports = {
  ParticipantList: ParticipantList,
  ParticipantInstance: ParticipantInstance,
  ParticipantContext: ParticipantContext
};
