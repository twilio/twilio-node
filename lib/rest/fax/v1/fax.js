'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var FaxList;
var FaxPage;
var FaxInstance;
var FaxContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Fax.V1.FaxList
 * @description Initialize the FaxList
 *
 * @param {Twilio.Fax.V1} version - Version of the resource
 */
/* jshint ignore:end */
FaxList = function FaxList(version) {
  /* jshint ignore:start */
  /**
   * @function faxes
   * @memberof Twilio.Fax.V1
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Fax.V1.FaxContext}
   */
  /* jshint ignore:end */
  function FaxListInstance(sid) {
    return FaxListInstance.get(sid);
  }

  FaxListInstance._version = version;
  // Path Solution
  FaxListInstance._solution = {};
  FaxListInstance._uri = _.template(
    '/Faxes' // jshint ignore:line
  )(FaxListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams FaxInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Fax.V1.FaxList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.from] - The from
   * @param {string} [opts.to] - The to
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
  FaxListInstance.each = function each(opts, callback) {
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

    fetchNextPage(_.bind(this.page, this, opts));
  };

  /* jshint ignore:start */
  /**
   * @description Lists FaxInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Fax.V1.FaxList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.from] - The from
   * @param {string} [opts.to] - The to
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
  FaxListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of FaxInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Fax.V1.FaxList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.from] - The from
   * @param {string} [opts.to] - The to
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  FaxListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'From': _.get(opts, 'from'),
      'To': _.get(opts, 'to'),
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
      deferred.resolve(new FaxPage(
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
   * create a FaxInstance
   *
   * @function create
   * @memberof Twilio.Fax.V1.FaxList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.from - The from
   * @param {string} opts.to - The to
   * @param {string} opts.mediaUrl - The media_url
   * @param {fax.quality} [opts.quality] - The quality
   * @param {string} [opts.statusCallback] - The status_callback
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed FaxInstance
   */
  /* jshint ignore:end */
  FaxListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.from)) {
      throw new Error('Required parameter "opts.from" missing.');
    }
    if (_.isUndefined(opts.to)) {
      throw new Error('Required parameter "opts.to" missing.');
    }
    if (_.isUndefined(opts.mediaUrl)) {
      throw new Error('Required parameter "opts.mediaUrl" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'From': _.get(opts, 'from'),
      'To': _.get(opts, 'to'),
      'MediaUrl': _.get(opts, 'mediaUrl'),
      'Quality': _.get(opts, 'quality'),
      'StatusCallback': _.get(opts, 'statusCallback')
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new FaxInstance(
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

  /* jshint ignore:start */
  /**
   * Constructs a fax
   *
   * @function get
   * @memberof Twilio.Fax.V1.FaxList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Fax.V1.FaxContext}
   */
  /* jshint ignore:end */
  FaxListInstance.get = function get(sid) {
    return new FaxContext(
      this._version,
      sid
    );
  };

  return FaxListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Fax.V1.FaxPage
 * @augments Page
 * @description Initialize the FaxPage
 *
 * @param {Twilio.Fax.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns FaxPage
 */
/* jshint ignore:end */
FaxPage = function FaxPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(FaxPage.prototype, Page.prototype);
FaxPage.prototype.constructor = FaxPage;

/* jshint ignore:start */
/**
 * Build an instance of FaxInstance
 *
 * @function getInstance
 * @memberof Twilio.Fax.V1.FaxPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns FaxInstance
 */
/* jshint ignore:end */
FaxPage.prototype.getInstance = function getInstance(payload) {
  return new FaxInstance(
    this._version,
    payload
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Fax.V1.FaxInstance
 * @description Initialize the FaxContext
 *
 * @property {string} sid - The sid
 * @property {string} accountSid - The account_sid
 * @property {string} from - The from
 * @property {string} to - The to
 * @property {fax.quality} quality - The quality
 * @property {string} mediaUrl - The media_url
 * @property {number} numPages - The num_pages
 * @property {number} duration - The duration
 * @property {fax.status} status - The status
 * @property {fax.direction} direction - The direction
 * @property {string} apiVersion - The api_version
 * @property {number} price - The price
 * @property {string} priceUnit - The price_unit
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} url - The url
 *
 * @param {Twilio.Fax.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
FaxInstance = function FaxInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.from = payload.from; // jshint ignore:line
  this.to = payload.to; // jshint ignore:line
  this.quality = payload.quality; // jshint ignore:line
  this.mediaUrl = payload.media_url; // jshint ignore:line
  this.numPages = deserialize.integer(payload.num_pages); // jshint ignore:line
  this.duration = deserialize.integer(payload.duration); // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.direction = payload.direction; // jshint ignore:line
  this.apiVersion = payload.api_version; // jshint ignore:line
  this.price = deserialize.decimal(payload.price); // jshint ignore:line
  this.priceUnit = payload.price_unit; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    sid: sid || this.sid,
  };
};

Object.defineProperty(FaxInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new FaxContext(
        this._version,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a FaxInstance
 *
 * @function fetch
 * @memberof Twilio.Fax.V1.FaxInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FaxInstance
 */
/* jshint ignore:end */
FaxInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a FaxInstance
 *
 * @function update
 * @memberof Twilio.Fax.V1.FaxInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {fax.update_status} [opts.status] - The status
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FaxInstance
 */
/* jshint ignore:end */
FaxInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Fax.V1.FaxContext
 * @description Initialize the FaxContext
 *
 * @param {Twilio.Fax.V1} version - Version of the resource
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
FaxContext = function FaxContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template(
    '/Faxes/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a FaxInstance
 *
 * @function fetch
 * @memberof Twilio.Fax.V1.FaxContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FaxInstance
 */
/* jshint ignore:end */
FaxContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new FaxInstance(
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

/* jshint ignore:start */
/**
 * update a FaxInstance
 *
 * @function update
 * @memberof Twilio.Fax.V1.FaxContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {fax.update_status} [opts.status] - The status
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FaxInstance
 */
/* jshint ignore:end */
FaxContext.prototype.update = function update(opts, callback) {
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
    deferred.resolve(new FaxInstance(
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
  FaxList: FaxList,
  FaxPage: FaxPage,
  FaxInstance: FaxInstance,
  FaxContext: FaxContext
};
