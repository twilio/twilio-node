'use strict';

var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var OriginationUrlList;
var OriginationUrlInstance;
var OriginationUrlContext;

/**
 * Initialize the OriginationUrlList
 *
 * :param Version version: Version that contains the resource
 * :param trunkSid: The trunk_sid
 *
 * @returns OriginationUrlList
 */
function OriginationUrlList(version, trunkSid) {
  function OriginationUrlListInstance() {
  }

  // Path Solution
  OriginationUrlListInstance._solution = {
    trunkSid: trunkSid,
  };
  OriginationUrlListInstance._uri = _.template(
    '/Trunks/{trunk_sid}/OriginationUrls',
    this._solution
  );
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
      'Friendlyname': friendlyName,
      'Sipurl': sipUrl,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new OriginationUrlInstance(
      this._version,
      payload,
      this._solution.trunkSid
    );
  };

  /**
   * Streams OriginationUrlInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param {number} [opts.limit] -
   *          Upper limit for the number of records to return.
   *                            list() guarantees never to return more than limit.
   *                            Default is no limit
   * @param {number} [opts.pageSize=50] -
   *          Number of records to fetch per request,
   *                            when not set will use the default value of 50 records.
   *                            If no pageSize is defined but a limit is defined,
   *                            list() will attempt to read the limit with the most efficient
   *                            page size, i.e. min(limit, 1000)
   * @param {Function} opts.callback - A callback function to process records
   */
  OriginationUrlListInstance.read = function stream() {
    var limits = this._version.readLimits({
      limit: limit,
      pageSize: pageSize
    })

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists OriginationUrlInstance records from the API as a list.
   *
   * @param {number} [opts.limit]: Upper limit for the number of records to return.
   *                    list() guarantees never to return more than limit.
   *                    Default is no limit
   * @param {number} [opts.pageSize]: Number of records to fetch per request,
   *                    when not set will use the default value of 50 records.
   *                    If no page_size is defined but a limit is defined,
   *                    list() will attempt to read the limit with the most
   *                    efficient page size, i.e. min(limit, 1000)
   *
   * @returns {Array} A list of records
   */
  OriginationUrlListInstance.read = function list() {
    return this.page();
  };

  /**
   * Retrieve a single page of OriginationUrlInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken]: PageToken provided by the API
   * @param {number} [opts.pageNumber]: Page Number, this value is simply for client state
   * @param {number} [opts.pageSize]: Number of records to return, defaults to 50
   *
   * @returns Page of OriginationUrlInstance
   */
  OriginationUrlListInstance.read = function page(page_token=values.unset,
                                                   page_number=values.unset,
                                                   page_size=values.unset) {
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

    return OriginationUrlPage(
      this._version,
      response,
      this._solution.trunkSid,
    );
  };

  return OriginationUrlListInstance;
}

module.exports = {
  OriginationUrlList: OriginationUrlList,
  OriginationUrlInstance: OriginationUrlInstance,
  OriginationUrlContext: OriginationUrlContext
};
