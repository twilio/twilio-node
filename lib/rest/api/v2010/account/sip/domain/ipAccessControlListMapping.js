'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../../base/InstanceResource');
var Page = require('../../../../../../base/Page');
var deserialize = require('../../../../../../base/deserialize');
var values = require('../../../../../../base/values');

var IpAccessControlListMappingPage;
var IpAccessControlListMappingList;
var IpAccessControlListMappingInstance;
var IpAccessControlListMappingContext;

/**
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingPage
 * @augments Page
 * @description Initialize the IpAccessControlListMappingPage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} accountSid - The account_sid
 * @param {string} domainSid - A string that uniquely identifies the SIP Domain
 *
 * @returns IpAccessControlListMappingPage
 */
function IpAccessControlListMappingPage(version, response, accountSid,
                                         domainSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    domainSid: domainSid
  };
}

_.extend(IpAccessControlListMappingPage.prototype, Page.prototype);
IpAccessControlListMappingPage.prototype.constructor = IpAccessControlListMappingPage;

/**
 * Build an instance of IpAccessControlListMappingInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns IpAccessControlListMappingInstance
 */
IpAccessControlListMappingPage.prototype.getInstance = function
    getInstance(payload) {
  return new IpAccessControlListMappingInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.domainSid
  );
};


/**
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingList
 * @description Initialize the IpAccessControlListMappingList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid - The account_sid
 * @param {string} domainSid - A string that uniquely identifies the SIP Domain
 *
 * @returns {function} - IpAccessControlListMappingListInstance
 */
function IpAccessControlListMappingList(version, accountSid, domainSid) {
  /**
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingList
   *
   * @param {string} sid - sid of instance
   *
   * @returns IpAccessControlListMappingContext
   */
  function IpAccessControlListMappingListInstance(sid) {
    return IpAccessControlListMappingListInstance.get(sid);
  }

  IpAccessControlListMappingListInstance._version = version;
  // Path Solution
  IpAccessControlListMappingListInstance._solution = {
    accountSid: accountSid,
    domainSid: domainSid
  };
  IpAccessControlListMappingListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/Domains/<%= domainSid %>/IpAccessControlListMappings.json' // jshint ignore:line
  )(IpAccessControlListMappingListInstance._solution);
  /**
   * @memberof IpAccessControlListMappingList
   *
   * @description Create a new IpAccessControlListMappingInstance
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object} opts - ...
   * @param {string} opts.ipAccessControlListSid - The ip_access_control_list_sid
   * @param {function} [callback] - Callback to handle created record
   *
   * @returns {Promise} Resolves to newly created IpAccessControlListMappingInstance
   */
  IpAccessControlListMappingListInstance.create = function create(opts, callback)
      {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters ipAccessControlListSid are missing.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.ipAccessControlListSid)) {
      throw new Error('Required parameter "ipAccessControlListSid" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'IpAccessControlListSid': opts.ipAccessControlListSid
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new IpAccessControlListMappingInstance(
        this._version,
        payload,
        this._solution.accountSid,
        this._solution.domainSid
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
   * @memberof IpAccessControlListMappingList
   *
   * @description Streams IpAccessControlListMappingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
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
  IpAccessControlListMappingListInstance.each = function each(opts, callback) {
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
   * @memberof IpAccessControlListMappingList
   *
   * @description Lists IpAccessControlListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
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
  IpAccessControlListMappingListInstance.list = function list(opts, callback) {
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
   * @memberof IpAccessControlListMappingList
   *
   * @description Retrieve a single page of IpAccessControlListMappingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
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
  IpAccessControlListMappingListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new IpAccessControlListMappingPage(
        this._version,
        payload,
        this._solution.accountSid,
        this._solution.domainSid
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
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingList
   *
   * @description Constructs a IpAccessControlListMappingContext
   *
   * @param {string} sid - The sid
   *
   * @returns IpAccessControlListMappingContext
   */
  IpAccessControlListMappingListInstance.get = function get(sid) {
    return new IpAccessControlListMappingContext(
      this._version,
      this._solution.accountSid,
      this._solution.domainSid,
      sid
    );
  };

  return IpAccessControlListMappingListInstance;
}


/**
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingInstance
 * @augments InstanceResource
 * @description Initialize the IpAccessControlListMappingContext
 *
 * @property {string} accountSid - The account_sid
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} friendlyName - The friendly_name
 * @property {string} sid - The sid
 * @property {string} uri - The uri
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} domainSid - The domain_sid
 * @param {sid} sid - The sid
 */
function IpAccessControlListMappingInstance(version, payload, accountSid,
                                             domainSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    domainSid: domainSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(IpAccessControlListMappingInstance.prototype, InstanceResource.prototype);
IpAccessControlListMappingInstance.prototype.constructor = IpAccessControlListMappingInstance;

Object.defineProperty(IpAccessControlListMappingInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new IpAccessControlListMappingContext(
        this._version,
        this._solution.accountSid,
        this._solution.domainSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * @description Fetch a IpAccessControlListMappingInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched IpAccessControlListMappingInstance
 */
IpAccessControlListMappingInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new IpAccessControlListMappingInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.domainSid,
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
 * @description Deletes the IpAccessControlListMappingInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
IpAccessControlListMappingInstance.prototype.remove = function remove(callback)
    {
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


/**
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingContext
 * @augments InstanceContext
 * @description Initialize the IpAccessControlListMappingContext
 *
 * @param {V2010} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} domainSid - The domain_sid
 * @param {sid} sid - The sid
 */
function IpAccessControlListMappingContext(version, accountSid, domainSid, sid)
                                            {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    domainSid: domainSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/Domains/<%= domainSid %>/IpAccessControlListMappings/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(IpAccessControlListMappingContext.prototype, InstanceContext.prototype);
IpAccessControlListMappingContext.prototype.constructor = IpAccessControlListMappingContext;

/**
 * @description Fetch a IpAccessControlListMappingInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched IpAccessControlListMappingInstance
 */
IpAccessControlListMappingContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new IpAccessControlListMappingInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.domainSid,
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
 * @description Deletes the IpAccessControlListMappingInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
IpAccessControlListMappingContext.prototype.remove = function remove(callback) {
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
  IpAccessControlListMappingPage: IpAccessControlListMappingPage,
  IpAccessControlListMappingList: IpAccessControlListMappingList,
  IpAccessControlListMappingInstance: IpAccessControlListMappingInstance,
  IpAccessControlListMappingContext: IpAccessControlListMappingContext
};
