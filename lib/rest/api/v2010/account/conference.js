'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var ParticipantList = require('./conference/participant').ParticipantList;
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var ConferenceList;
var ConferencePage;
var ConferenceInstance;
var ConferenceContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ConferenceList
 * @description Initialize the ConferenceList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The unique sid that identifies this account
 */
/* jshint ignore:end */
ConferenceList = function ConferenceList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function conferences
   * @memberof Twilio.Api.V2010.AccountContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.ConferenceContext}
   */
  /* jshint ignore:end */
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
  /* jshint ignore:start */
  /**
   * Streams ConferenceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceList
   * @instance
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
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   * callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
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
    var currentResource = 0;
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
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
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

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * @description Lists ConferenceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceList
   * @instance
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
  /* jshint ignore:end */
  ConferenceListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
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

  /* jshint ignore:start */
  /**
   * Retrieve a single page of ConferenceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceList
   * @instance
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
  /* jshint ignore:end */
  ConferenceListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'DateCreated<': serialize.iso8601Date(_.get(opts, 'dateCreatedBefore')),
      'DateCreated': serialize.iso8601Date(_.get(opts, 'dateCreated')),
      'DateCreated>': serialize.iso8601Date(_.get(opts, 'dateCreatedAfter')),
      'DateUpdated<': serialize.iso8601Date(_.get(opts, 'dateUpdatedBefore')),
      'DateUpdated': serialize.iso8601Date(_.get(opts, 'dateUpdated')),
      'DateUpdated>': serialize.iso8601Date(_.get(opts, 'dateUpdatedAfter')),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'Status': _.get(opts, 'status'),
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
        this._solution
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

  /* jshint ignore:start */
  /**
   * Retrieve a single target page of ConferenceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceList
   * @instance
   *
   * @param {Date} [opts.dateCreatedBefore] - Filter by date created
   * @param {Date} [opts.dateCreated] - Filter by date created
   * @param {Date} [opts.dateCreatedAfter] - Filter by date created
   * @param {Date} [opts.dateUpdatedBefore] - Filter by date updated
   * @param {Date} [opts.dateUpdated] - Filter by date updated
   * @param {Date} [opts.dateUpdatedAfter] - Filter by date updated
   * @param {string} [opts.friendlyName] - Filter by friendly name
   * @param {conference.status} [opts.status] - The status of the conference
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ConferenceListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new ConferencePage(
        this._version,
        payload,
        this._solution
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

  /* jshint ignore:start */
  /**
   * Constructs a conference
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceList
   * @instance
   *
   * @param {string} sid - Fetch by unique conference Sid
   *
   * @returns {Twilio.Api.V2010.AccountContext.ConferenceContext}
   */
  /* jshint ignore:end */
  ConferenceListInstance.get = function get(sid) {
    return new ConferenceContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return ConferenceListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ConferencePage
 * @augments Page
 * @description Initialize the ConferencePage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns ConferencePage
 */
/* jshint ignore:end */
ConferencePage = function ConferencePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ConferencePage.prototype, Page.prototype);
ConferencePage.prototype.constructor = ConferencePage;

/* jshint ignore:start */
/**
 * Build an instance of ConferenceInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.ConferencePage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ConferenceInstance
 */
/* jshint ignore:end */
ConferencePage.prototype.getInstance = function getInstance(payload) {
  return new ConferenceInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ConferenceInstance
 * @description Initialize the ConferenceContext
 *
 * @property {string} accountSid - The unique sid that identifies this account
 * @property {Date} dateCreated - The date this resource was created
 * @property {Date} dateUpdated - The date this resource was last updated
 * @property {string} apiVersion - The api_version
 * @property {string} friendlyName - A human readable description of this resource
 * @property {string} region - The region
 * @property {string} sid - A string that uniquely identifies this conference
 * @property {conference.status} status - The status of the conference
 * @property {string} uri - The URI for this resource
 * @property {string} subresourceUris - The subresource_uris
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique conference Sid
 */
/* jshint ignore:end */
ConferenceInstance = function ConferenceInstance(version, payload, accountSid,
                                                  sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.apiVersion = payload.api_version; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.region = payload.region; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line
  this.subresourceUris = payload.subresource_uris; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this.sid,
  };
};

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
  }
});

/* jshint ignore:start */
/**
 * fetch a ConferenceInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConferenceInstance
 */
/* jshint ignore:end */
ConferenceInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a ConferenceInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {conference.update_status} [opts.status] - The status
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConferenceInstance
 */
/* jshint ignore:end */
ConferenceInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Access the participants
 *
 * @function participants
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceInstance
 * @instance
 *
 * @returns {Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList}
 */
/* jshint ignore:end */
ConferenceInstance.prototype.participants = function participants() {
  return this._proxy.participants;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ConferenceContext
 * @description Initialize the ConferenceContext
 *
 * @property {Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList} participants -
 *          participants resource
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique conference Sid
 */
/* jshint ignore:end */
ConferenceContext = function ConferenceContext(version, accountSid, sid) {
  this._version = version;

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
};

/* jshint ignore:start */
/**
 * fetch a ConferenceInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConferenceInstance
 */
/* jshint ignore:end */
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

/* jshint ignore:start */
/**
 * update a ConferenceInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {conference.update_status} [opts.status] - The status
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConferenceInstance
 */
/* jshint ignore:end */
ConferenceContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Status': _.get(opts, 'status')
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
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
  }
});

module.exports = {
  ConferenceList: ConferenceList,
  ConferencePage: ConferencePage,
  ConferenceInstance: ConferenceInstance,
  ConferenceContext: ConferenceContext
};
