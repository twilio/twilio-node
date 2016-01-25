'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var values = require('../../../../base/values');

var OriginationUrlPage;
var OriginationUrlList;
var OriginationUrlInstance;
var OriginationUrlContext;

/**
 * Initialize the OriginationUrlPage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
 * :param trunkSid: The trunk_sid
 *
 * @returns OriginationUrlPage
 */
function OriginationUrlPage(version, response, trunkSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    trunkSid: trunkSid
  };
}

_.extend(OriginationUrlPage.prototype, Page.prototype);
OriginationUrlPage.prototype.constructor = OriginationUrlPage;

/**
 * Build an instance of OriginationUrlInstance
 *
 * :param dict payload: Payload response from the API
 *
 * @returns OriginationUrlInstance
 */
OriginationUrlPage.prototype.getInstance = function getInstance(payload) {
  return new OriginationUrlInstance(
    this._version,
    payload,
    this._solution.trunkSid
  );
};


/**
 * Initialize the OriginationUrlList
 *
 * :param Version version: Version that contains the resource
 * :param trunkSid: The trunk_sid
 *
 * @returns OriginationUrlList
 */
function OriginationUrlList(version, trunkSid) {
  function OriginationUrlListInstance(sid) {
    return OriginationUrlListInstance.get(sid);
  }

  OriginationUrlListInstance._version = version;
  // Path Solution
  OriginationUrlListInstance._solution = {
    trunkSid: trunkSid
  };
  OriginationUrlListInstance._uri = _.template(
    '/Trunks/<%= trunkSid %>/OriginationUrls' // jshint ignore:line
  )(OriginationUrlListInstance._solution);
  /**
   * Create a new OriginationUrlInstance
   *
   * @param string weight - The weight
   * @param string priority - The priority
   * @param string enabled - The enabled
   * @param string friendlyName - The friendly_name
   * @param string sipUrl - The sip_url
   *
   * @returns Newly created OriginationUrlInstance
   */
  OriginationUrlListInstance.create = function create(weight, priority, enabled,
                                                       friendlyName, sipUrl) {
    var data = values.of({
      'Weight': weight,
      'Priority': priority,
      'Enabled': enabled,
      'FriendlyName': friendlyName,
      'SipUrl': sipUrl
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    promise = promise.then(function(payload) {
      return new OriginationUrlInstance(
        this._version,
        payload,
        this._solution.trunkSid
      );
    }.bind(this));

    return promise;
  };

  /**
   * Streams OriginationUrlInstance records from the API.
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
  OriginationUrlListInstance.stream = function stream(opts) {
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
   * Lists OriginationUrlInstance records from the API as a list.
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
  OriginationUrlListInstance.list = function list(opts) {
    opts = opts || {};

    var allResources = [];
    opts.callback = function(resource) {
      allResources.push(resource);
    };

    var promise = this.stream(opts);
    promise = promise.then(function() {
      return allResources;
    });

    return promise;
  };

  /**
   * Retrieve a single page of OriginationUrlInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of OriginationUrlInstance
   */
  OriginationUrlListInstance.page = function page(opts) {
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
      return new OriginationUrlPage(
        this._version,
        response,
        this._solution.trunkSid
      );
    }.bind(this));

    return promise;
  };

  /**
   * Constructs a OriginationUrlContext
   *
   * :param sid - The sid
   *
   * @returns OriginationUrlContext
   */
  OriginationUrlListInstance.get = function get(sid) {
    return new OriginationUrlContext(
      this._version,
      this._solution.trunkSid,
      sid
    );
  };

  return OriginationUrlListInstance;
}


/**
 * Initialize the OriginationUrlContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} trunkSid: The trunk_sid
 * @param {sid} sid: The sid
 *
 * @returns {OriginationUrlContext}
 */
function OriginationUrlInstance(version, payload, trunkSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    trunkSid: payload.trunk_sid, // jshint ignore:line,
    weight: payload.weight, // jshint ignore:line,
    enabled: payload.enabled, // jshint ignore:line,
    sipUrl: payload.sip_url, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    priority: payload.priority, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    trunkSid: trunkSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(OriginationUrlInstance.prototype, InstanceResource.prototype);
OriginationUrlInstance.prototype.constructor = OriginationUrlInstance;

Object.defineProperty(OriginationUrlInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new OriginationUrlContext(
        this._version,
        this._solution.trunkSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'trunkSid', {
  get: function() {
    return this._properties.trunkSid;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'weight', {
  get: function() {
    return this._properties.weight;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'enabled', {
  get: function() {
    return this._properties.enabled;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'sipUrl', {
  get: function() {
    return this._properties.sipUrl;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'priority', {
  get: function() {
    return this._properties.priority;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Fetch a OriginationUrlInstance
 *
 * @returns Fetched OriginationUrlInstance
 */
OriginationUrlInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Deletes the OriginationUrlInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
OriginationUrlInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};

/**
 * Update the OriginationUrlInstance
 *
 * @param string [opts.weight] - The weight
 * @param string [opts.priority] - The priority
 * @param string [opts.enabled] - The enabled
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.sipUrl] - The sip_url
 *
 * @returns Updated OriginationUrlInstance
 */
OriginationUrlInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};


/**
 * Initialize the OriginationUrlContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} trunkSid - The trunk_sid
 * @param {sid} sid - The sid
 *
 * @returns {OriginationUrlContext}
 */
function OriginationUrlContext(version, trunkSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    trunkSid: trunkSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Trunks/<%= trunkSid %>/OriginationUrls/<%= sid %>' // jshint ignore:line
  )(this._solution);
}

_.extend(OriginationUrlContext.prototype, InstanceContext.prototype);
OriginationUrlContext.prototype.constructor = OriginationUrlContext;

/**
 * Fetch a OriginationUrlInstance
 *
 * @returns Fetched OriginationUrlInstance
 */
OriginationUrlContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new OriginationUrlInstance(
      this._version,
      payload,
      this._solution.trunkSid,
      this._solution.sid
    );
  }.bind(this));

  return promise;
};

/**
 * Deletes the OriginationUrlInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
OriginationUrlContext.prototype.remove = function remove() {
  return this._version.remove({
    method: 'DELETE',
    uri: this._uri
  });
};

/**
 * Update the OriginationUrlInstance
 *
 * @param string [opts.weight] - The weight
 * @param string [opts.priority] - The priority
 * @param string [opts.enabled] - The enabled
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.sipUrl] - The sip_url
 *
 * @returns Updated OriginationUrlInstance
 */
OriginationUrlContext.prototype.update = function update(opts) {
  opts = opts || {};
  var data = values.of({
    'Weight': opts.weight,
    'Priority': opts.priority,
    'Enabled': opts.enabled,
    'FriendlyName': opts.friendlyName,
    'SipUrl': opts.sipUrl,
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  promise = promise.then(function(payload) {
    return new OriginationUrlInstance(
      this.version,
      payload,
      this._solution.trunkSid,
      this._solution.sid
    );
  }.bind(this));

  return promise;
};

module.exports = {
  OriginationUrlPage: OriginationUrlPage,
  OriginationUrlList: OriginationUrlList,
  OriginationUrlInstance: OriginationUrlInstance,
  OriginationUrlContext: OriginationUrlContext
};
