'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var CredentialListList;
var CredentialListPage;
var CredentialListInstance;
var CredentialListContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Trunking.V1.TrunkContext.CredentialListList
 * @description Initialize the CredentialListList
 *
 * @param {Twilio.Trunking.V1} version - Version of the resource
 * @param {string} trunkSid - The trunk_sid
 */
/* jshint ignore:end */
CredentialListList = function CredentialListList(version, trunkSid) {
  /* jshint ignore:start */
  /**
   * @function credentialsLists
   * @memberof Twilio.Trunking.V1.TrunkContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Trunking.V1.TrunkContext.CredentialListContext}
   */
  /* jshint ignore:end */
  function CredentialListListInstance(sid) {
    return CredentialListListInstance.get(sid);
  }

  CredentialListListInstance._version = version;
  // Path Solution
  CredentialListListInstance._solution = {
    trunkSid: trunkSid
  };
  CredentialListListInstance._uri = _.template(
    '/Trunks/<%= trunkSid %>/CredentialLists' // jshint ignore:line
  )(CredentialListListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a CredentialListInstance
   *
   * @function create
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.credentialListSid - The credential_list_sid
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed CredentialListInstance
   */
  /* jshint ignore:end */
  CredentialListListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.credentialListSid)) {
      throw new Error('Required parameter "opts.credentialListSid" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'CredentialListSid': _.get(opts, 'credentialListSid')
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new CredentialListInstance(
        this._version,
        payload,
        this._solution.trunkSid,
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
   * Streams CredentialListInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListList
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
  CredentialListListInstance.each = function each(opts, callback) {
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
   * @description Lists CredentialListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListList
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
  CredentialListListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of CredentialListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListList
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
  CredentialListListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new CredentialListPage(
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
   * Retrieve a single target page of CredentialListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  CredentialListListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new CredentialListPage(
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
   * Constructs a credential_list
   *
   * @function get
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Trunking.V1.TrunkContext.CredentialListContext}
   */
  /* jshint ignore:end */
  CredentialListListInstance.get = function get(sid) {
    return new CredentialListContext(
      this._version,
      this._solution.trunkSid,
      sid
    );
  };

  return CredentialListListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Trunking.V1.TrunkContext.CredentialListPage
 * @augments Page
 * @description Initialize the CredentialListPage
 *
 * @param {Twilio.Trunking.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns CredentialListPage
 */
/* jshint ignore:end */
CredentialListPage = function CredentialListPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(CredentialListPage.prototype, Page.prototype);
CredentialListPage.prototype.constructor = CredentialListPage;

/* jshint ignore:start */
/**
 * Build an instance of CredentialListInstance
 *
 * @function getInstance
 * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns CredentialListInstance
 */
/* jshint ignore:end */
CredentialListPage.prototype.getInstance = function getInstance(payload) {
  return new CredentialListInstance(
    this._version,
    payload,
    this._solution.trunkSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Trunking.V1.TrunkContext.CredentialListInstance
 * @description Initialize the CredentialListContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} sid - The sid
 * @property {string} trunkSid - The trunk_sid
 * @property {string} friendlyName - The friendly_name
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} url - The url
 *
 * @param {Twilio.Trunking.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} trunkSid - The trunk_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
CredentialListInstance = function CredentialListInstance(version, payload,
                                                          trunkSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.trunkSid = payload.trunk_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    trunkSid: trunkSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(CredentialListInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new CredentialListContext(
        this._version,
        this._solution.trunkSid,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a CredentialListInstance
 *
 * @function fetch
 * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CredentialListInstance
 */
/* jshint ignore:end */
CredentialListInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a CredentialListInstance
 *
 * @function remove
 * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CredentialListInstance
 */
/* jshint ignore:end */
CredentialListInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Trunking.V1.TrunkContext.CredentialListContext
 * @description Initialize the CredentialListContext
 *
 * @param {Twilio.Trunking.V1} version - Version of the resource
 * @param {sid} trunkSid - The trunk_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
CredentialListContext = function CredentialListContext(version, trunkSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    trunkSid: trunkSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Trunks/<%= trunkSid %>/CredentialLists/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a CredentialListInstance
 *
 * @function fetch
 * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CredentialListInstance
 */
/* jshint ignore:end */
CredentialListContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new CredentialListInstance(
      this._version,
      payload,
      this._solution.trunkSid,
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
 * remove a CredentialListInstance
 *
 * @function remove
 * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CredentialListInstance
 */
/* jshint ignore:end */
CredentialListContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({
    uri: this._uri,
    method: 'DELETE'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
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
  CredentialListList: CredentialListList,
  CredentialListPage: CredentialListPage,
  CredentialListInstance: CredentialListInstance,
  CredentialListContext: CredentialListContext
};
