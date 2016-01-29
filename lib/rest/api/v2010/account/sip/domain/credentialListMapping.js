'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../../base/InstanceResource');
var Page = require('../../../../../../base/Page');
var deserialize = require('../../../../../../base/deserialize');
var values = require('../../../../../../base/values');

var CredentialListMappingPage;
var CredentialListMappingList;
var CredentialListMappingInstance;
var CredentialListMappingContext;

/**
 * Initialize the CredentialListMappingPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} accountSid - The account_sid
 * @param {string} domainSid - A string that uniquely identifies the SIP Domain
 *
 * @returns CredentialListMappingPage
 */
function CredentialListMappingPage(version, response, accountSid, domainSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    domainSid: domainSid
  };
}

_.extend(CredentialListMappingPage.prototype, Page.prototype);
CredentialListMappingPage.prototype.constructor = CredentialListMappingPage;

/**
 * Build an instance of CredentialListMappingInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns CredentialListMappingInstance
 */
CredentialListMappingPage.prototype.getInstance = function getInstance(payload)
    {
  return new CredentialListMappingInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.domainSid
  );
};


/**
 * Initialize the CredentialListMappingList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid - The account_sid
 * @param {string} domainSid - A string that uniquely identifies the SIP Domain
 *
 * @returns CredentialListMappingList
 */
function CredentialListMappingList(version, accountSid, domainSid) {
  function CredentialListMappingListInstance(sid) {
    return CredentialListMappingListInstance.get(sid);
  }

  CredentialListMappingListInstance._version = version;
  // Path Solution
  CredentialListMappingListInstance._solution = {
    accountSid: accountSid,
    domainSid: domainSid
  };
  CredentialListMappingListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/Domains/<%= domainSid %>/CredentialListMappings.json' // jshint ignore:line
  )(CredentialListMappingListInstance._solution);
  /**
   * Create a new CredentialListMappingInstance
   *
   * @returns Newly created CredentialListMappingInstance
   */
  CredentialListMappingListInstance.create = function create(opts) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters are missing. Please provide: credentialListSid.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.credentialListSid)) {
      throw new Error('Required parameter "credentialListSid" missing.');
    }
    var data = values.of({
      'CredentialListSid': opts.credentialListSid
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    promise = promise.then(function(payload) {
      return new CredentialListMappingInstance(
        this._version,
        payload,
        this._solution.accountSid,
        this._solution.domainSid
      );
    }.bind(this));

    return promise;
  };

  /**
   * Streams CredentialListMappingInstance records from the API.
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
   */
  CredentialListMappingListInstance.each = function each(opts) {
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
   * Lists CredentialListMappingInstance records from the API as a list.
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
  CredentialListMappingListInstance.list = function list(opts) {
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
   * Retrieve a single page of CredentialListMappingInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of CredentialListMappingInstance
   */
  CredentialListMappingListInstance.page = function page(opts) {
    opts = opts || {};
    var params = values.of({
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
      return new CredentialListMappingPage(
        this._version,
        response,
        this._solution.accountSid,
        this._solution.domainSid
      );
    }.bind(this));

    return promise;
  };

  /**
   * Constructs a CredentialListMappingContext
   *
   * @param {string} sid - The sid
   *
   * @returns CredentialListMappingContext
   */
  CredentialListMappingListInstance.get = function get(sid) {
    return new CredentialListMappingContext(
      this._version,
      this._solution.accountSid,
      this._solution.domainSid,
      sid
    );
  };

  return CredentialListMappingListInstance;
}


/**
 * Initialize the CredentialListMappingContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} domainSid - The domain_sid
 * @param {sid} sid - The sid
 *
 * @returns {CredentialListMappingContext}
 */
function CredentialListMappingInstance(version, payload, accountSid, domainSid,
                                        sid) {
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

_.extend(CredentialListMappingInstance.prototype, InstanceResource.prototype);
CredentialListMappingInstance.prototype.constructor = CredentialListMappingInstance;

Object.defineProperty(CredentialListMappingInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new CredentialListMappingContext(
        this._version,
        this._solution.accountSid,
        this._solution.domainSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(CredentialListMappingInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(CredentialListMappingInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(CredentialListMappingInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(CredentialListMappingInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(CredentialListMappingInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(CredentialListMappingInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a CredentialListMappingInstance
 *
 * @returns Fetched CredentialListMappingInstance
 */
CredentialListMappingInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Deletes the CredentialListMappingInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
CredentialListMappingInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};


/**
 * Initialize the CredentialListMappingContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} domainSid - The domain_sid
 * @param {sid} sid - The sid
 *
 * @returns {CredentialListMappingContext}
 */
function CredentialListMappingContext(version, accountSid, domainSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    domainSid: domainSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/Domains/<%= domainSid %>/CredentialListMappings/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(CredentialListMappingContext.prototype, InstanceContext.prototype);
CredentialListMappingContext.prototype.constructor = CredentialListMappingContext;

/**
 * Fetch a CredentialListMappingInstance
 *
 * @returns Fetched CredentialListMappingInstance
 */
CredentialListMappingContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new CredentialListMappingInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.domainSid,
      this._solution.sid
    );
  }.bind(this));

  return promise;
};

/**
 * Deletes the CredentialListMappingInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
CredentialListMappingContext.prototype.remove = function remove() {
  return this._version.remove({
    method: 'DELETE',
    uri: this._uri
  });
};

module.exports = {
  CredentialListMappingPage: CredentialListMappingPage,
  CredentialListMappingList: CredentialListMappingList,
  CredentialListMappingInstance: CredentialListMappingInstance,
  CredentialListMappingContext: CredentialListMappingContext
};
