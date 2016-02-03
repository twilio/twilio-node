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
 * @constructor
 * @augments Page
 * @description Initialize the ConferencePage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
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
 * @param {object} payload - Payload response from the API
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
 * @constructor
 * @description Initialize the ConferenceList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid - The unique sid that identifies this account
 *
 * @returns {function} - ConferenceListInstance
 */
function ConferenceList(version, accountSid) {
  /**
   * @memberof ConferenceList
   *
   * @param {string} sid - sid of instance
   *
   * @returns ConferenceContext
   */
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
   * @memberof ConferenceList
   *
   * @description Streams ConferenceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.dateCreatedBefore] - Filter by date created
   * @param {Date} [opts.dateCreated] - Filter by date created
   * @param {Date} [opts.dateCreatedAfter] - Filter by date created
   * @param {Date} [opts.dateUpdatedBefore] - Filter by date updated
   * @param {Date} [opts.dateUpdated] - Filter by date updated
   * @param {Date} [opts.dateUpdatedAfter] - Filter by date updated
   * @param {string} [opts.friendlyName] - Filter by friendly name
   * @param {conference.status} [opts.status] - The status of the conference
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
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   * callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  ConferenceListInstance.each = function each(opts, callback) {
    opts = opts || {};
    if (_.isFunction(opts)) {
      opts = { callback: opts };
    } else if (_.isFunction(callback) && !_.isFunction(opts.callback)) {
      opts.callback = callback;
    }

    if (_.isUndefined(opts.callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done) {
            return false;
          }

          opts.callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, opts));
  };

  /**
   * @memberof ConferenceList
   *
   * @description Lists ConferenceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.dateCreatedBefore] - Filter by date created
   * @param {Date} [opts.dateCreated] - Filter by date created
   * @param {Date} [opts.dateCreatedAfter] - Filter by date created
   * @param {Date} [opts.dateUpdatedBefore] - Filter by date updated
   * @param {Date} [opts.dateUpdated] - Filter by date updated
   * @param {Date} [opts.dateUpdatedAfter] - Filter by date updated
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
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  ConferenceListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource) {
      allResources.push(resource);
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /**
   * @memberof ConferenceList
   *
   * @description Retrieve a single page of ConferenceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.dateCreatedBefore] - Filter by date created
   * @param {Date} [opts.dateCreated] - Filter by date created
   * @param {Date} [opts.dateCreatedAfter] - Filter by date created
   * @param {Date} [opts.dateUpdatedBefore] - Filter by date updated
   * @param {Date} [opts.dateUpdated] - Filter by date updated
   * @param {Date} [opts.dateUpdatedAfter] - Filter by date updated
   * @param {string} [opts.friendlyName] - Filter by friendly name
   * @param {conference.status} [opts.status] - The status of the conference
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  ConferenceListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
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

    var promise = this._version.page({
      uri: this._uri,
      method: 'GET',
      params: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new ConferencePage(
        this._version,
        payload,
        this._solution.accountSid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /**
   * @memberof ConferenceList
   *
   * @description Constructs a ConferenceContext
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
 * @constructor
 * @augments InstanceResource
 * @description Initialize the ConferenceContext
 *
 * @property {string} accountSid - The unique sid that identifies this account
 * @property {Date} dateCreated - The date this resource was created
 * @property {Date} dateUpdated - The date this resource was last updated
 * @property {string} apiVersion - The api_version
 * @property {string} friendlyName - A human readable description of this resource
 * @property {string} sid - A string that uniquely identifies this conference
 * @property {conference.status} status - The status of the conference
 * @property {string} uri - The URI for this resource
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique conference Sid
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
 * @description Fetch a ConferenceInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched ConferenceInstance
 */
ConferenceInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ConferenceInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
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
 * @constructor
 * @augments InstanceContext
 * @description Initialize the ConferenceContext
 *
 * @property {ParticipantList} participants - participants resource
 *
 * @param {V2010} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique conference Sid
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
 * @description Fetch a ConferenceInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched ConferenceInstance
 */
ConferenceContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ConferenceInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
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
