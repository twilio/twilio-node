'use strict';

var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var CountryList;
var CountryInstance;
var CountryContext;

/**
 * Initialize the CountryList
 *
 * :param Version version: Version that contains the resource
 *
 * @returns CountryList
 */
function CountryList(version) {
  function CountryListInstance() {
  }

  // Path Solution
  CountryListInstance._solution = {};
  CountryListInstance._uri = _.template(
    '/PhoneNumbers/Countries',
    this._solution
  );
  /**
   * Streams CountryInstance records from the API.
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
  CountryListInstance.read = function stream() {
    var limits = this._version.readLimits({
      limit: limit,
      pageSize: pageSize
    })

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists CountryInstance records from the API as a list.
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
  CountryListInstance.read = function list() {
    return this.page();
  };

  /**
   * Retrieve a single page of CountryInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken]: PageToken provided by the API
   * @param {number} [opts.pageNumber]: Page Number, this value is simply for client state
   * @param {number} [opts.pageSize]: Number of records to return, defaults to 50
   *
   * @returns Page of CountryInstance
   */
  CountryListInstance.read = function page(page_token=values.unset,
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

    return CountryPage(
      this._version,
      response,
    );
  };

  return CountryListInstance;
}

module.exports = {
  CountryList: CountryList,
  CountryInstance: CountryInstance,
  CountryContext: CountryContext
};
