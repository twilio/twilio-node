'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../base/Page');
var deserialize = require('../../../base/deserialize');
var values = require('../../../base/values');

var RatePlanPage;
var RatePlanList;
var RatePlanInstance;
var RatePlanContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Wireless.RatePlanPage
 * @augments Page
 * @description Initialize the RatePlanPage
 *
 * @param {Twilio.Preview.Wireless} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns RatePlanPage
 */
/* jshint ignore:end */
function RatePlanPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
}

_.extend(RatePlanPage.prototype, Page.prototype);
RatePlanPage.prototype.constructor = RatePlanPage;

/* jshint ignore:start */
/**
 * Build an instance of RatePlanInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.Wireless.RatePlanPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns RatePlanInstance
 */
/* jshint ignore:end */
RatePlanPage.prototype.getInstance = function getInstance(payload) {
  return new RatePlanInstance(
    this._version,
    payload
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Wireless.RatePlanList
 * @description Initialize the RatePlanList
 *
 * @param {Twilio.Preview.Wireless} version - Version of the resource
 */
/* jshint ignore:end */
function RatePlanList(version) {
  /* jshint ignore:start */
  /**
   * @function ratePlans
   * @memberof Twilio.Preview.Wireless
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.Wireless.RatePlanContext}
   */
  /* jshint ignore:end */
  function RatePlanListInstance(sid) {
    return RatePlanListInstance.get(sid);
  }

  RatePlanListInstance._version = version;
  // Path Solution
  RatePlanListInstance._solution = {};
  RatePlanListInstance._uri = _.template(
    '/RatePlans' // jshint ignore:line
  )(RatePlanListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams RatePlanInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Wireless.RatePlanList
   * @instance
   *
   * @param {object|function} opts - ...
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
  RatePlanListInstance.each = function each(opts, callback) {
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

  /* jshint ignore:start */
  /**
   * @description Lists RatePlanInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Wireless.RatePlanList
   * @instance
   *
   * @param {object|function} opts - ...
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
  RatePlanListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of RatePlanInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Wireless.RatePlanList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RatePlanListInstance.page = function page(opts, callback) {
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
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
      deferred.resolve(new RatePlanPage(
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
   * Constructs a rate_plan
   *
   * @function get
   * @memberof Twilio.Preview.Wireless.RatePlanList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Preview.Wireless.RatePlanContext}
   */
  /* jshint ignore:end */
  RatePlanListInstance.get = function get(sid) {
    return new RatePlanContext(
      this._version,
      sid
    );
  };

  return RatePlanListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Wireless.RatePlanInstance
 * @description Initialize the RatePlanContext
 *
 * @property {string} sid - The sid
 * @property {string} alias - The alias
 * @property {string} accountSid - The account_sid
 * @property {string} friendlyName - The friendly_name
 * @property {string} dataMetering - The data_metering
 * @property {string} capabilities - The capabilities
 * @property {number} voiceCap - The voice_cap
 * @property {number} messagingCap - The messaging_cap
 * @property {number} commandsCap - The commands_cap
 * @property {number} dataCap - The data_cap
 * @property {number} capPeriod - The cap_period
 * @property {string} capUnit - The cap_unit
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} url - The url
 *
 * @param {Twilio.Preview.Wireless} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {string} sid - The sid
 */
/* jshint ignore:end */
function RatePlanInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.alias = payload.alias; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.dataMetering = payload.data_metering; // jshint ignore:line
  this.capabilities = payload.capabilities; // jshint ignore:line
  this.voiceCap = deserialize.integer(payload.voice_cap); // jshint ignore:line
  this.messagingCap = deserialize.integer(payload.messaging_cap); // jshint ignore:line
  this.commandsCap = deserialize.integer(payload.commands_cap); // jshint ignore:line
  this.dataCap = deserialize.integer(payload.data_cap); // jshint ignore:line
  this.capPeriod = deserialize.integer(payload.cap_period); // jshint ignore:line
  this.capUnit = payload.cap_unit; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    sid: sid || this.sid,
  };
}

Object.defineProperty(RatePlanInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new RatePlanContext(
        this._version,
        this._solution.sid
      );
    }

    return this._context;
  },
});

/* jshint ignore:start */
/**
 * fetch a RatePlanInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Wireless.RatePlanInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RatePlanInstance
 */
/* jshint ignore:end */
RatePlanInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Wireless.RatePlanContext
 * @description Initialize the RatePlanContext
 *
 * @param {Twilio.Preview.Wireless} version - Version of the resource
 * @param {string} sid - The sid
 */
/* jshint ignore:end */
function RatePlanContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template(
    '/RatePlans/<%= sid %>' // jshint ignore:line
  )(this._solution);
}

/* jshint ignore:start */
/**
 * fetch a RatePlanInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Wireless.RatePlanContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RatePlanInstance
 */
/* jshint ignore:end */
RatePlanContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new RatePlanInstance(
      this._version,
      payload,
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

module.exports = {
  RatePlanPage: RatePlanPage,
  RatePlanList: RatePlanList,
  RatePlanInstance: RatePlanInstance,
  RatePlanContext: RatePlanContext
};
