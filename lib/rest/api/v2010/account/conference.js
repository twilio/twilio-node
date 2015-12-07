'use strict';

var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var ConferenceList;
var ConferenceInstance;
var ConferenceContext;

/**
 * Initialize the ConferenceList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The unique sid that identifies this account
 *
 * @returns ConferenceList
 */
function ConferenceList(version, accountSid) {
  function ConferenceListInstance() {
  }

  // Path Solution
  ConferenceListInstance._solution = {
    accountSid: accountSid,
  };
  ConferenceListInstance._uri = _.template(
    '/Accounts/{account_sid}/Conferences.json',
    this._solution
  );
  /**
   * Streams ConferenceInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.dateCreatedBefore] - Filter by date created
   * @param string [opts.dateCreated] - Filter by date created
   * @param string [opts.dateCreatedAfter] - Filter by date created
   * @param string [opts.dateUpdatedBefore] - Filter by date updated
   * @param string [opts.dateUpdated] - Filter by date updated
   * @param string [opts.dateUpdatedAfter] - Filter by date updated
   * @param string [opts.friendlyName] - Filter by friendly name
   * @param conference.status [opts.status] - The status of the conference
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
  ConferenceListInstance.read = function stream(opts) {
    var limits = this._version.readLimits({
      limit: limit,
      pageSize: pageSize
    })

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists ConferenceInstance records from the API as a list.
   *
   * @param string [opts.dateCreatedBefore] - Filter by date created
   * @param string [opts.dateCreated] - Filter by date created
   * @param string [opts.dateCreatedAfter] - Filter by date created
   * @param string [opts.dateUpdatedBefore] - Filter by date updated
   * @param string [opts.dateUpdated] - Filter by date updated
   * @param string [opts.dateUpdatedAfter] - Filter by date updated
   * @param string [opts.friendlyName] - Filter by friendly name
   * @param conference.status [opts.status] - The status of the conference
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
  ConferenceListInstance.read = function list(opts) {
    return this.page();
  };

  /**
   * Retrieve a single page of ConferenceInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.dateCreatedBefore] - Filter by date created
   * @param string [opts.dateCreated] - Filter by date created
   * @param string [opts.dateCreatedAfter] - Filter by date created
   * @param string [opts.dateUpdatedBefore] - Filter by date updated
   * @param string [opts.dateUpdated] - Filter by date updated
   * @param string [opts.dateUpdatedAfter] - Filter by date updated
   * @param string [opts.friendlyName] - Filter by friendly name
   * @param conference.status [opts.status] - The status of the conference
   * @param {string} [opts.pageToken]: PageToken provided by the API
   * @param {number} [opts.pageNumber]: Page Number, this value is simply for client state
   * @param {number} [opts.pageSize]: Number of records to return, defaults to 50
   *
   * @returns Page of ConferenceInstance
   */
  ConferenceListInstance.read = function page(opts, page_token=values.unset,
                                               page_number=values.unset,
                                               page_size=values.unset) {
    var params = values.of({
      'Datecreated<': opts.datecreatedbefore,
      'Datecreated': opts.dateCreated,
      'Datecreated>': opts.datecreatedafter,
      'Dateupdated<': opts.dateupdatedbefore,
      'Dateupdated': opts.dateUpdated,
      'Dateupdated>': opts.dateupdatedafter,
      'Friendlyname': opts.friendlyName,
      'Status': opts.status,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return ConferencePage(
      this._version,
      response,
      this._solution.accountSid,
    );
  };

  return ConferenceListInstance;
}

module.exports = {
  ConferenceList: ConferenceList,
  ConferenceInstance: ConferenceInstance,
  ConferenceContext: ConferenceContext
};
