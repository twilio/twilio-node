'use strict';

var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var TokenList;
var TokenInstance;
var TokenContext;

/**
 * Initialize the TokenList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The unique sid that identifies this account
 *
 * @returns TokenList
 */
function TokenList(version, accountSid) {
  function TokenListInstance(sid) {
    return this.get(sid);
  }

  TokenListInstance._version = version;
  // Path Solution
  TokenListInstance._solution = {
    accountSid: accountSid,
  };
  TokenListInstance._uri = _.template(
    '/Accounts/{account_sid}/Tokens.json',
    TokenListInstance._solution
  );
  /**
   * Create a new TokenInstance
   *
   * @param string [opts.ttl] - The duration in seconds the credentials are valid
   *
   * @returns Newly created TokenInstance
   */
  TokenListInstance.create = function create(opts) {
    var data = values.of({
      'Ttl': opts.ttl,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new TokenInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  };

  return TokenListInstance;
}

module.exports = {
  TokenList: TokenList,
  TokenInstance: TokenInstance,
  TokenContext: TokenContext
};
