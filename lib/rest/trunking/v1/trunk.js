'use strict';

var ListResource = require('../../../base/ListResource');
var values = require('../../../base/values');

var TrunkList;
var TrunkInstance;
var TrunkContext;

/**
 * Initialize the TrunkList
 *
 * :param Version version: Version that contains the resource
 *
 * @returns TrunkList
 */
function TrunkList(version) {
  function TrunkListInstance(sid) {
    return this.get(sid);
  }

  TrunkListInstance._version = version;
  // Path Solution
  TrunkListInstance._solution = {};
  TrunkListInstance._uri = _.template(
    '/Trunks',
    TrunkListInstance._solution
  );
  /**
   * Create a new TrunkInstance
   *
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.domainName] - The domain_name
   * @param string [opts.disasterRecoveryUrl] - The disaster_recovery_url
   * @param string [opts.disasterRecoveryMethod] - The disaster_recovery_method
   * @param string [opts.recording] - The recording
   * @param string [opts.secure] - The secure
   *
   * @returns Newly created TrunkInstance
   */
  TrunkListInstance.create = function create(opts) {
    var data = values.of({
      'Friendlyname': opts.friendlyName,
      'Domainname': opts.domainName,
      'Disasterrecoveryurl': opts.disasterRecoveryUrl,
      'Disasterrecoverymethod': opts.disasterRecoveryMethod,
      'Recording': opts.recording,
      'Secure': opts.secure,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new TrunkInstance(
      this._version,
      payload
    );
  };

  /**
   * Streams TrunkInstance records from the API.
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
  TrunkListInstance.stream = function stream() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists TrunkInstance records from the API as a list.
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
  TrunkListInstance.list = function list() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of TrunkInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of TrunkInstance
   */
  TrunkListInstance.page = function page() {
    var params = values.of({
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return TrunkPage(
      this._version,
      response,
    );
  };

  /**
   * Constructs a TrunkContext
   *
   * :param sid - The sid
   *
   * @returns TrunkContext
   */
  function get(sid) {
    return new TrunkContext(
      this._version,
      sid
    );
  }

  return TrunkListInstance;
}

module.exports = {
  TrunkList: TrunkList,
  TrunkInstance: TrunkInstance,
  TrunkContext: TrunkContext
};
