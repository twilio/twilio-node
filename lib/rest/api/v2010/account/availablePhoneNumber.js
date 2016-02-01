'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var LocalList = require('./availablePhoneNumber/local').LocalList;
var MobileList = require('./availablePhoneNumber/mobile').MobileList;
var Page = require('../../../../base/Page');
var TollFreeList = require('./availablePhoneNumber/tollFree').TollFreeList;
var values = require('../../../../base/values');

var AvailablePhoneNumberCountryPage;
var AvailablePhoneNumberCountryList;
var AvailablePhoneNumberCountryInstance;
var AvailablePhoneNumberCountryContext;

/**
 * Initialize the AvailablePhoneNumberCountryPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns AvailablePhoneNumberCountryPage
 */
function AvailablePhoneNumberCountryPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(AvailablePhoneNumberCountryPage.prototype, Page.prototype);
AvailablePhoneNumberCountryPage.prototype.constructor = AvailablePhoneNumberCountryPage;

/**
 * Build an instance of AvailablePhoneNumberCountryInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns AvailablePhoneNumberCountryInstance
 */
AvailablePhoneNumberCountryPage.prototype.getInstance = function
    getInstance(payload) {
  return new AvailablePhoneNumberCountryInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * Initialize the AvailablePhoneNumberCountryList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns AvailablePhoneNumberCountryList
 */
function AvailablePhoneNumberCountryList(version, accountSid) {
  function AvailablePhoneNumberCountryListInstance(sid) {
    return AvailablePhoneNumberCountryListInstance.get(sid);
  }

  AvailablePhoneNumberCountryListInstance._version = version;
  // Path Solution
  AvailablePhoneNumberCountryListInstance._solution = {
    accountSid: accountSid
  };
  AvailablePhoneNumberCountryListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/AvailablePhoneNumbers.json' // jshint ignore:line
  )(AvailablePhoneNumberCountryListInstance._solution);
  /**
   * Streams AvailablePhoneNumberCountryInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param {Function} callback - A callback function to process records
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
   */
  AvailablePhoneNumberCountryListInstance.each = function each(opts, callback) {
    opts = opts || {};
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var currentPage = 1;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var deferred = Q.defer();
    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        deferred.resolve();
      }

      promise.then(function(page) {
        if (_.isEmpty(page.instances)) {
          deferred.resolve();
        }

        _.each(page.instances, callback);

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
   * Lists AvailablePhoneNumberCountryInstance records from the API as a list.
   *
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
  AvailablePhoneNumberCountryListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var allResources = [];
    var append = function(resource) {
      allResources.push(resource);
    };

    var deferred = Q.defer();
    var promise = this.each(opts, append);
    promise = promise.then(function() {
      deferred.resolve(allResources);
    });

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /**
   * Retrieve a single page of AvailablePhoneNumberCountryInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of AvailablePhoneNumberCountryInstance
   */
  AvailablePhoneNumberCountryListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new AvailablePhoneNumberCountryPage(
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
   * Constructs a AvailablePhoneNumberCountryContext
   *
   * @param {string} countryCode - The country_code
   *
   * @returns AvailablePhoneNumberCountryContext
   */
  AvailablePhoneNumberCountryListInstance.get = function get(countryCode) {
    return new AvailablePhoneNumberCountryContext(
      this._version,
      this._solution.accountSid,
      countryCode
    );
  };

  return AvailablePhoneNumberCountryListInstance;
}


/**
 * Initialize the AvailablePhoneNumberCountryContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {iso_country_code} countryCode - The country_code
 *
 * @returns {AvailablePhoneNumberCountryContext}
 */
function AvailablePhoneNumberCountryInstance(version, payload, accountSid,
                                              countryCode) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    countryCode: payload.country_code, // jshint ignore:line,
    country: payload.country, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
    beta: payload.beta, // jshint ignore:line,
    subresourceUris: payload.subresource_uris, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    countryCode: countryCode || this._properties.countryCode,
  };
}

_.extend(AvailablePhoneNumberCountryInstance.prototype, InstanceResource.prototype);
AvailablePhoneNumberCountryInstance.prototype.constructor = AvailablePhoneNumberCountryInstance;

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new AvailablePhoneNumberCountryContext(
        this._version,
        this._solution.accountSid,
        this._solution.countryCode
      );
    }

    return this._context;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype,
  'countryCode', {
  get: function() {
    return this._properties.countryCode;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype,
  'country', {
  get: function() {
    return this._properties.country;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype,
  'beta', {
  get: function() {
    return this._properties.beta;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype,
  'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

/**
 * Fetch a AvailablePhoneNumberCountryInstance
 *
 * @returns Fetched AvailablePhoneNumberCountryInstance
 */
AvailablePhoneNumberCountryInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new AvailablePhoneNumberCountryInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.countryCode
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
 * Access the local
 *
 * @returns local
 */
AvailablePhoneNumberCountryInstance.prototype.local = function local() {
  return this._proxy.local;
};

/**
 * Access the tollFree
 *
 * @returns tollFree
 */
AvailablePhoneNumberCountryInstance.prototype.tollFree = function tollFree() {
  return this._proxy.tollFree;
};

/**
 * Access the mobile
 *
 * @returns mobile
 */
AvailablePhoneNumberCountryInstance.prototype.mobile = function mobile() {
  return this._proxy.mobile;
};


/**
 * Initialize the AvailablePhoneNumberCountryContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {iso_country_code} countryCode - The country_code
 *
 * @returns {AvailablePhoneNumberCountryContext}
 */
function AvailablePhoneNumberCountryContext(version, accountSid, countryCode) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    countryCode: countryCode,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/AvailablePhoneNumbers/<%= countryCode %>.json' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._local = undefined;
  this._tollFree = undefined;
  this._mobile = undefined;
}

_.extend(AvailablePhoneNumberCountryContext.prototype, InstanceContext.prototype);
AvailablePhoneNumberCountryContext.prototype.constructor = AvailablePhoneNumberCountryContext;

/**
 * Fetch a AvailablePhoneNumberCountryInstance
 *
 * @returns Fetched AvailablePhoneNumberCountryInstance
 */
AvailablePhoneNumberCountryContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new AvailablePhoneNumberCountryInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.countryCode
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

Object.defineProperty(AvailablePhoneNumberCountryContext.prototype,
  'local', {
  get: function() {
    if (!this._local) {
      this._local = new LocalList(
        this._version,
        this._solution.countryCode,
        this._solution.accountSid
      );
    }
    return this._local;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryContext.prototype,
  'tollFree', {
  get: function() {
    if (!this._tollFree) {
      this._tollFree = new TollFreeList(
        this._version,
        this._solution.countryCode,
        this._solution.accountSid
      );
    }
    return this._tollFree;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryContext.prototype,
  'mobile', {
  get: function() {
    if (!this._mobile) {
      this._mobile = new MobileList(
        this._version,
        this._solution.countryCode,
        this._solution.accountSid
      );
    }
    return this._mobile;
  },
});

module.exports = {
  AvailablePhoneNumberCountryPage: AvailablePhoneNumberCountryPage,
  AvailablePhoneNumberCountryList: AvailablePhoneNumberCountryList,
  AvailablePhoneNumberCountryInstance: AvailablePhoneNumberCountryInstance,
  AvailablePhoneNumberCountryContext: AvailablePhoneNumberCountryContext
};
