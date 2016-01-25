'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var MemberList = require('./queue/member').MemberList;
var Page = require('../../../../base/Page');
var values = require('../../../../base/values');

var QueuePage;
var QueueList;
var QueueInstance;
var QueueContext;

/**
 * Initialize the QueuePage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
 * :param accountSid: The account_sid
 *
 * @returns QueuePage
 */
function QueuePage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(QueuePage.prototype, Page.prototype);
QueuePage.prototype.constructor = QueuePage;

/**
 * Build an instance of QueueInstance
 *
 * :param dict payload: Payload response from the API
 *
 * @returns QueueInstance
 */
QueuePage.prototype.getInstance = function getInstance(payload) {
  return new QueueInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * Initialize the QueueList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 *
 * @returns QueueList
 */
function QueueList(version, accountSid) {
  function QueueListInstance(sid) {
    return QueueListInstance.get(sid);
  }

  QueueListInstance._version = version;
  // Path Solution
  QueueListInstance._solution = {
    accountSid: accountSid
  };
  QueueListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Queues.json' // jshint ignore:line
  )(QueueListInstance._solution);
  /**
   * Streams QueueInstance records from the API.
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
  QueueListInstance.each = function each(opts) {
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
   * Lists QueueInstance records from the API as a list.
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
  QueueListInstance.list = function list(opts) {
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
   * Retrieve a single page of QueueInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of QueueInstance
   */
  QueueListInstance.page = function page(opts) {
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
      return new QueuePage(
        this._version,
        response,
        this._solution.accountSid
      );
    }.bind(this));

    return promise;
  };

  /**
   * Create a new QueueInstance
   *
   * @param string [opts.friendlyName] -
   *          A user-provided string that identifies this queue.
   * @param string [opts.maxSize] - The max number of calls allowed in the queue
   *
   * @returns Newly created QueueInstance
   */
  QueueListInstance.create = function create(opts) {
    opts = opts || {};
    var data = values.of({
      'FriendlyName': opts.friendlyName,
      'MaxSize': opts.maxSize
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    promise = promise.then(function(payload) {
      return new QueueInstance(
        this._version,
        payload,
        this._solution.accountSid
      );
    }.bind(this));

    return promise;
  };

  /**
   * Constructs a QueueContext
   *
   * :param sid - Fetch by unique queue Sid
   *
   * @returns QueueContext
   */
  QueueListInstance.get = function get(sid) {
    return new QueueContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return QueueListInstance;
}


/**
 * Initialize the QueueContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique queue Sid
 *
 * @returns {QueueContext}
 */
function QueueInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    averageWaitTime: payload.average_wait_time, // jshint ignore:line,
    currentSize: payload.current_size, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    maxSize: payload.max_size, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(QueueInstance.prototype, InstanceResource.prototype);
QueueInstance.prototype.constructor = QueueInstance;

Object.defineProperty(QueueInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new QueueContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'averageWaitTime', {
  get: function() {
    return this._properties.averageWaitTime;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'currentSize', {
  get: function() {
    return this._properties.currentSize;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'maxSize', {
  get: function() {
    return this._properties.maxSize;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a QueueInstance
 *
 * @returns Fetched QueueInstance
 */
QueueInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the QueueInstance
 *
 * @param string [opts.friendlyName] - A human readable description of the queue
 * @param string [opts.maxSize] - The max number of members allowed in the queue
 *
 * @returns Updated QueueInstance
 */
QueueInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Deletes the QueueInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
QueueInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};

/**
 * Access the members
 *
 * @returns members
 */
QueueInstance.prototype.members = function members() {
  return this._proxy.members;
};


/**
 * Initialize the QueueContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique queue Sid
 *
 * @returns {QueueContext}
 */
function QueueContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Queues/<%= sid %>.json' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._members = undefined;
}

_.extend(QueueContext.prototype, InstanceContext.prototype);
QueueContext.prototype.constructor = QueueContext;

/**
 * Fetch a QueueInstance
 *
 * @returns Fetched QueueInstance
 */
QueueContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new QueueInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    );
  }.bind(this));

  return promise;
};

/**
 * Update the QueueInstance
 *
 * @param string [opts.friendlyName] - A human readable description of the queue
 * @param string [opts.maxSize] - The max number of members allowed in the queue
 *
 * @returns Updated QueueInstance
 */
QueueContext.prototype.update = function update(opts) {
  opts = opts || {};
  var data = values.of({
    'FriendlyName': opts.friendlyName,
    'MaxSize': opts.maxSize,
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  promise = promise.then(function(payload) {
    return new QueueInstance(
      this.version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    );
  }.bind(this));

  return promise;
};

/**
 * Deletes the QueueInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
QueueContext.prototype.remove = function remove() {
  return this._version.remove({
    method: 'DELETE',
    uri: this._uri
  });
};

Object.defineProperty(QueueContext.prototype,
  'members', {
  get: function() {
    if (!this._members) {
      this._members = new MemberList(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }
    return this._members;
  },
});

module.exports = {
  QueuePage: QueuePage,
  QueueList: QueueList,
  QueueInstance: QueueInstance,
  QueueContext: QueueContext
};
