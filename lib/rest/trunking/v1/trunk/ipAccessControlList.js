'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var IpAccessControlListPage;
var IpAccessControlListList;
var IpAccessControlListInstance;
var IpAccessControlListContext;

/**
 * Initialize the IpAccessControlListPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} trunkSid - The trunk_sid
 *
 * @returns IpAccessControlListPage
 */
function IpAccessControlListPage(version, response, trunkSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    trunkSid: trunkSid
  };
}

_.extend(IpAccessControlListPage.prototype, Page.prototype);
IpAccessControlListPage.prototype.constructor = IpAccessControlListPage;

/**
 * Build an instance of IpAccessControlListInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns IpAccessControlListInstance
 */
IpAccessControlListPage.prototype.getInstance = function getInstance(payload) {
  return new IpAccessControlListInstance(
    this._version,
    payload,
    this._solution.trunkSid
  );
};


/**
 * Initialize the IpAccessControlListList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} trunkSid - The trunk_sid
 *
 * @returns IpAccessControlListList
 */
function IpAccessControlListList(version, trunkSid) {
  function IpAccessControlListListInstance(sid) {
    return IpAccessControlListListInstance.get(sid);
  }

  IpAccessControlListListInstance._version = version;
  // Path Solution
  IpAccessControlListListInstance._solution = {
    trunkSid: trunkSid
  };
  IpAccessControlListListInstance._uri = _.template(
    '/Trunks/<%= trunkSid %>/IpAccessControlLists' // jshint ignore:line
  )(IpAccessControlListListInstance._solution);
  /**
   * Create a new IpAccessControlListInstance
   *
   * @returns Newly created IpAccessControlListInstance
   */
  IpAccessControlListListInstance.create = function create(opts) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters are missing. Please provide: ipAccessControlListSid.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.ipAccessControlListSid)) {
      throw new Error('Required parameter "ipAccessControlListSid" missing.');
    }
    var data = values.of({
      'IpAccessControlListSid': opts.ipAccessControlListSid
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    promise = promise.then(function(payload) {
      return new IpAccessControlListInstance(
        this._version,
        payload,
        this._solution.trunkSid
      );
    }.bind(this));

    return promise;
  };

  /**
   * Streams IpAccessControlListInstance records from the API.
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
  IpAccessControlListListInstance.each = function each(opts) {
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
   * Lists IpAccessControlListInstance records from the API as a list.
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
  IpAccessControlListListInstance.list = function list(opts) {
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
   * Retrieve a single page of IpAccessControlListInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of IpAccessControlListInstance
   */
  IpAccessControlListListInstance.page = function page(opts) {
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
      return new IpAccessControlListPage(
        this._version,
        response,
        this._solution.trunkSid
      );
    }.bind(this));

    return promise;
  };

  /**
   * Constructs a IpAccessControlListContext
   *
   * @param {string} sid - The sid
   *
   * @returns IpAccessControlListContext
   */
  IpAccessControlListListInstance.get = function get(sid) {
    return new IpAccessControlListContext(
      this._version,
      this._solution.trunkSid,
      sid
    );
  };

  return IpAccessControlListListInstance;
}


/**
 * Initialize the IpAccessControlListContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} trunkSid - The trunk_sid
 * @param {sid} sid - The sid
 *
 * @returns {IpAccessControlListContext}
 */
function IpAccessControlListInstance(version, payload, trunkSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    trunkSid: payload.trunk_sid, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    dateCreated: deserialize.iso8601DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.iso8601DateTime(payload.date_updated), // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    trunkSid: trunkSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(IpAccessControlListInstance.prototype, InstanceResource.prototype);
IpAccessControlListInstance.prototype.constructor = IpAccessControlListInstance;

Object.defineProperty(IpAccessControlListInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new IpAccessControlListContext(
        this._version,
        this._solution.trunkSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype,
  'trunkSid', {
  get: function() {
    return this._properties.trunkSid;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Fetch a IpAccessControlListInstance
 *
 * @returns Fetched IpAccessControlListInstance
 */
IpAccessControlListInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Deletes the IpAccessControlListInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
IpAccessControlListInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};


/**
 * Initialize the IpAccessControlListContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} trunkSid - The trunk_sid
 * @param {sid} sid - The sid
 *
 * @returns {IpAccessControlListContext}
 */
function IpAccessControlListContext(version, trunkSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    trunkSid: trunkSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Trunks/<%= trunkSid %>/IpAccessControlLists/<%= sid %>' // jshint ignore:line
  )(this._solution);
}

_.extend(IpAccessControlListContext.prototype, InstanceContext.prototype);
IpAccessControlListContext.prototype.constructor = IpAccessControlListContext;

/**
 * Fetch a IpAccessControlListInstance
 *
 * @returns Fetched IpAccessControlListInstance
 */
IpAccessControlListContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new IpAccessControlListInstance(
      this._version,
      payload,
      this._solution.trunkSid,
      this._solution.sid
    );
  }.bind(this));

  return promise;
};

/**
 * Deletes the IpAccessControlListInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
IpAccessControlListContext.prototype.remove = function remove() {
  return this._version.remove({
    method: 'DELETE',
    uri: this._uri
  });
};

module.exports = {
  IpAccessControlListPage: IpAccessControlListPage,
  IpAccessControlListList: IpAccessControlListList,
  IpAccessControlListInstance: IpAccessControlListInstance,
  IpAccessControlListContext: IpAccessControlListContext
};
