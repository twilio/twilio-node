'use strict';

var _ = require('lodash');
var CredentialList = require('./credentialList/credential').CredentialList;
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var CredentialListList;
var CredentialListInstance;
var CredentialListContext;

/**
 * Initialize the CredentialListList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns CredentialListList
 */
function CredentialListList(version, accountSid) {
  function CredentialListListInstance(sid) {
    return CredentialListListInstance.get(sid);
  }

  CredentialListListInstance._version = version;
  // Path Solution
  CredentialListListInstance._solution = {
    accountSid: accountSid
  };
  CredentialListListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/CredentialLists.json' // jshint ignore:line
  )(CredentialListListInstance._solution);
  /**
   * Streams CredentialListInstance records from the API.
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
  CredentialListListInstance.stream = function stream() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists CredentialListInstance records from the API as a list.
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
  CredentialListListInstance.list = function list() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of CredentialListInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of CredentialListInstance
   */
  CredentialListListInstance.page = function page() {
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

    return CredentialListPage(
      this._version,
      response,
      this._solution.accountSid
    );
  };

  /**
   * Create a new CredentialListInstance
   *
   * @param string friendlyName - The friendly_name
   *
   * @returns Newly created CredentialListInstance
   */
  CredentialListListInstance.create = function create(friendlyName) {
    var data = values.of({
      'Friendlyname': friendlyName
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new CredentialListInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  };

  /**
   * Constructs a CredentialListContext
   *
   * :param sid - Fetch by unique credential Sid
   *
   * @returns CredentialListContext
   */
  CredentialListListInstance.get = function get(sid) {
    return new CredentialListContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return CredentialListListInstance;
}


/**
 * Initialize the CredentialListContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique credential Sid
 *
 * @returns {CredentialListContext}
 */
function CredentialListInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
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

_.extend(CredentialListInstance.prototype, InstanceResource.prototype);
CredentialListInstance.prototype.constructor = CredentialListInstance;

Object.defineProperty(CredentialListInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new CredentialListContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(CredentialListInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(CredentialListInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(CredentialListInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(CredentialListInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(CredentialListInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(CredentialListInstance.prototype,
  'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

Object.defineProperty(CredentialListInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a CredentialListInstance
 *
 * @returns Fetched CredentialListInstance
 */
CredentialListInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the CredentialListInstance
 *
 * @param string friendlyName - The friendly_name
 *
 * @returns Updated CredentialListInstance
 */
CredentialListInstance.prototype.update = function update(friendlyName) {
  return this._proxy.update(
    friendlyName
  );
};

/**
 * Deletes the CredentialListInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
CredentialListInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};

/**
 * Access the credentials
 *
 * @returns credentials
 */
CredentialListInstance.prototype.credentials = function credentials() {
  return this._proxy.credentials;
};


/**
 * Initialize the CredentialListContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique credential Sid
 *
 * @returns {CredentialListContext}
 */
function CredentialListContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/CredentialLists/<%= sid %>.json' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._credentials = undefined;
}

_.extend(CredentialListContext.prototype, InstanceContext.prototype);
CredentialListContext.prototype.constructor = CredentialListContext;

/**
 * Fetch a CredentialListInstance
 *
 * @returns Fetched CredentialListInstance
 */
CredentialListContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new CredentialListInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    );
  });

  return promise;
};

/**
 * Update the CredentialListInstance
 *
 * @param string friendlyName - The friendly_name
 *
 * @returns Updated CredentialListInstance
 */
CredentialListContext.prototype.update = function update(friendlyName) {
  var data = values.of({
    'Friendlyname': friendlyName,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new CredentialListInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

/**
 * Deletes the CredentialListInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
CredentialListContext.prototype.remove = function remove() {
  return this._version.remove(this._uri);
};

Object.defineProperty(CredentialListContext.prototype,
  'credentials', {
  get: function() {
    if (!this._credentials) {
      this._credentials = new CredentialList(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }
    return this._credentials;
  },
});

module.exports = {
  CredentialListList: CredentialListList,
  CredentialListInstance: CredentialListInstance,
  CredentialListContext: CredentialListContext
};
