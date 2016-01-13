'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../../base/InstanceResource');
var ListResource = require('../../../../../../base/ListResource');
var values = require('../../../../../../base/values');

var CredentialListMappingList;
var CredentialListMappingInstance;
var CredentialListMappingContext;

/**
 * Initialize the CredentialListMappingList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 * :param domainSid: A string that uniquely identifies the SIP Domain
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
    '/Accounts/{account_sid}/SIP/Domains/{domain_sid}/CredentialListMappings.json',
    CredentialListMappingListInstance._solution
  );
  /**
   * Create a new CredentialListMappingInstance
   *
   * @param string credentialListSid - The credential_list_sid
   *
   * @returns Newly created CredentialListMappingInstance
   */
  CredentialListMappingListInstance.create = function create(credentialListSid) {
    var data = values.of({
      'Credentiallistsid': credentialListSid
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new CredentialListMappingInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.domainSid
    );
  };

  /**
   * Streams CredentialListMappingInstance records from the API.
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
  CredentialListMappingListInstance.stream = function stream() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
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
  CredentialListMappingListInstance.list = function list() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      limits.pageSize
    );
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
  CredentialListMappingListInstance.page = function page() {
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

    return CredentialListMappingPage(
      this._version,
      response,
      this._solution.accountSid,
      this._solution.domainSid
    );
  };

  /**
   * Constructs a CredentialListMappingContext
   *
   * :param sid - The sid
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
 * @param {sid} accountSid: The account_sid
 * @param {sid} domainSid: The domain_sid
 * @param {sid} sid: The sid
 *
 * @returns {CredentialListMappingContext}
 */
function CredentialListMappingInstance(version, payload, accountSid, domainSid,
                                        sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
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
    '/Accounts/<% account_sid %>/SIP/Domains/<% domain_sid %>/CredentialListMappings/<% sid %>.json', // jshint ignore:line
    this._solution
  );
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

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new CredentialListMappingInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.domainSid,
    this._solution.sid
  );
};

/**
 * Deletes the CredentialListMappingInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
CredentialListMappingContext.prototype.remove = function remove() {
  return this._version.remove(this._uri);
};

module.exports = {
  CredentialListMappingList: CredentialListMappingList,
  CredentialListMappingInstance: CredentialListMappingInstance,
  CredentialListMappingContext: CredentialListMappingContext
};
