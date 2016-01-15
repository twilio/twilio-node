'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var IpAddressList = require('./ipAccessControlList/ipAddress').IpAddressList;
var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var IpAccessControlListList;
var IpAccessControlListInstance;
var IpAccessControlListContext;

/**
 * Initialize the IpAccessControlListList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns IpAccessControlListList
 */
function IpAccessControlListList(version, accountSid) {
  function IpAccessControlListListInstance(sid) {
    return IpAccessControlListListInstance.get(sid);
  }

  IpAccessControlListListInstance._version = version;
  // Path Solution
  IpAccessControlListListInstance._solution = {
    accountSid: accountSid
  };
  IpAccessControlListListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/IpAccessControlLists.json' // jshint ignore:line
  )(IpAccessControlListListInstance._solution);
  /**
   * Streams IpAccessControlListInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
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
   * @param {Function} opts.callback - A callback function to process records
   */
  IpAccessControlListListInstance.stream = function stream() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
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
  IpAccessControlListListInstance.list = function list() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      limits.pageSize
    );
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
  IpAccessControlListListInstance.page = function page() {
    var params = values.of({
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return IpAccessControlListPage(
      this._version,
      response,
      solution.accountSid
    );
  };

  /**
   * Create a new IpAccessControlListInstance
   *
   * @param string friendlyName - A human readable description of this resource
   *
   * @returns Newly created IpAccessControlListInstance
   */
  IpAccessControlListListInstance.create = function create(friendlyName) {
    var version = this._version;
    opts = opts || {};
    var data = values.of({
      'FriendlyName': friendlyName
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    promise = promise.then(function(payload) {
      return new IpAccessControlListInstance(
        version,
        payload,
        solution.accountSid
      );
    });

    return promise;
  };

  /**
   * Constructs a IpAccessControlListContext
   *
   * :param sid - Fetch by unique ip-access-control-list Sid
   *
   * @returns IpAccessControlListContext
   */
  IpAccessControlListListInstance.get = function get(sid) {
    return new IpAccessControlListContext(
      this._version,
      this._solution.accountSid,
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
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique ip-access-control-list Sid
 *
 * @returns {IpAccessControlListContext}
 */
function IpAccessControlListInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    sid: payload.sid, // jshint ignore:line,
    accountSid: payload.account_sid, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    subresourceUris: payload.subresource_uris, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
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
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
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
  'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
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
 * Update the IpAccessControlListInstance
 *
 * @param string friendlyName - A human readable description of this resource
 *
 * @returns Updated IpAccessControlListInstance
 */
IpAccessControlListInstance.prototype.update = function update(friendlyName) {
  return this._proxy.update(
    friendlyName
  );
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
 * Access the ipAddresses
 *
 * @returns ipAddresses
 */
IpAccessControlListInstance.prototype.ipAddresses = function ipAddresses() {
  return this._proxy.ipAddresses;
};


/**
 * Initialize the IpAccessControlListContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique ip-access-control-list Sid
 *
 * @returns {IpAccessControlListContext}
 */
function IpAccessControlListContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/IpAccessControlLists/<%= sid %>.json' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._ipAddresses = undefined;
}

_.extend(IpAccessControlListContext.prototype, InstanceContext.prototype);
IpAccessControlListContext.prototype.constructor = IpAccessControlListContext;

/**
 * Fetch a IpAccessControlListInstance
 *
 * @returns Fetched IpAccessControlListInstance
 */
IpAccessControlListContext.prototype.fetch = function fetch() {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new IpAccessControlListInstance(
      version,
      payload,
      solution.accountSid,
      solution.sid
    );
  });

  return promise;
};

/**
 * Update the IpAccessControlListInstance
 *
 * @param string friendlyName - A human readable description of this resource
 *
 * @returns Updated IpAccessControlListInstance
 */
IpAccessControlListContext.prototype.update = function update(friendlyName) {
  var data = values.of({
    'FriendlyName': friendlyName,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new IpAccessControlListInstance(
    this._version,
    payload,
    solution.accountSid,
    solution.sid
  );
};

/**
 * Deletes the IpAccessControlListInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
IpAccessControlListContext.prototype.remove = function remove() {
  return this._version.remove(this._uri);
};

Object.defineProperty(IpAccessControlListContext.prototype,
  'ipAddresses', {
  get: function() {
    if (!this._ipAddresses) {
      this._ipAddresses = new IpAddressList(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }
    return this._ipAddresses;
  },
});

module.exports = {
  IpAccessControlListList: IpAccessControlListList,
  IpAccessControlListInstance: IpAccessControlListInstance,
  IpAccessControlListContext: IpAccessControlListContext
};
