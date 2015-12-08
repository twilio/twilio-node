'use strict';

var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var ParticipantList;
var ParticipantInstance;
var ParticipantContext;

/**
 * Initialize the ParticipantList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The unique sid that identifies this account
 * :param conferenceSid: A string that uniquely identifies this conference
 *
 * @returns ParticipantList
 */
function ParticipantList(version, accountSid, conferenceSid) {
  function ParticipantListInstance(sid) {
    return this.get(sid);
  }

  ParticipantListInstance._version = version;
  // Path Solution
  ParticipantListInstance._solution = {
    accountSid: accountSid,
    conferenceSid: conferenceSid,
  };
  ParticipantListInstance._uri = _.template(
    '/Accounts/{account_sid}/Conferences/{conference_sid}/Participants.json',
    ParticipantListInstance._solution
  );
  /**
   * Streams ParticipantInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.muted] - Filter by muted participants
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
  ParticipantListInstance.stream = function stream(opts) {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page(
      opts
    );

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * @param string [opts.muted] - Filter by muted participants
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
  ParticipantListInstance.list = function list(opts) {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      opts,
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.muted] - Filter by muted participants
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of ParticipantInstance
   */
  ParticipantListInstance.page = function page(opts) {
    var params = values.of({
      'Muted': opts.muted,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return ParticipantPage(
      this._version,
      response,
      this._solution.accountSid,
      this._solution.conferenceSid,
    );
  };

  /**
   * Constructs a ParticipantContext
   *
   * :param callSid - The call_sid
   *
   * @returns ParticipantContext
   */
  function get(callSid) {
    return new ParticipantContext(
      this._version,
      this._solution.accountSid,
      this._solution.conferenceSid,
      callSid
    );
  }

  return ParticipantListInstance;
}

module.exports = {
  ParticipantList: ParticipantList,
  ParticipantInstance: ParticipantInstance,
  ParticipantContext: ParticipantContext
};
