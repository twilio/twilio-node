'use strict';

var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var IpAccessControlListList;
var IpAccessControlListInstance;
var IpAccessControlListContext;

/**
 * Initialize the IpAccessControlListList
 *
 * :param Version version: Version that contains the resource
 * :param trunkSid: The trunk_sid
 *
 * @returns IpAccessControlListList
 */
function IpAccessControlListList(version, trunkSid) {
  function IpAccessControlListListInstance(sid) {
    return this.get(sid);
  }

  IpAccessControlListListInstance._version = version;
  // Path Solution
  IpAccessControlListListInstance._solution = {
    trunkSid: trunkSid,
  };
  IpAccessControlListListInstance._uri = _.template(
    '/Trunks/{trunk_sid}/IpAccessControlLists',
    IpAccessControlListListInstance._solution
  );
  /**
   * Create a new IpAccessControlListInstance
   *
   * @param string ipAccessControlListSid - The ip_access_control_list_sid
   *
   * @returns Newly created IpAccessControlListInstance
   */
  IpAccessControlListListInstance.create = function create(ipAccessControlListSid)
                                                            {
    var data = values.of({
      'Ipaccesscontrollistsid': ipAccessControlListSid,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new IpAccessControlListInstance(
      this._version,
      payload,
      this._solution.trunkSid
    );
  };

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
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return IpAccessControlListPage(
      this._version,
      response,
      this._solution.trunkSid,
    );
  };

  /**
   * Constructs a IpAccessControlListContext
   *
   * :param sid - The sid
   *
   * @returns IpAccessControlListContext
   */
  function get(sid) {
    return new IpAccessControlListContext(
      this._version,
      this._solution.trunkSid,
      sid
    );
  }

  return IpAccessControlListListInstance;
}

module.exports = {
  IpAccessControlListList: IpAccessControlListList,
  IpAccessControlListInstance: IpAccessControlListInstance,
  IpAccessControlListContext: IpAccessControlListContext
};
