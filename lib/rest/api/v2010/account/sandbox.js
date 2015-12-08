'use strict';

var ListResource = require('../../../../base/ListResource');

var SandboxList;
var SandboxInstance;
var SandboxContext;

/**
 * Initialize the SandboxList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 *
 * @returns SandboxList
 */
function SandboxList(version, accountSid) {
  function SandboxListInstance(sid) {
    return this.get(sid);
  }

  SandboxListInstance._version = version;
  // Path Solution
  SandboxListInstance._solution = {
    accountSid: accountSid,
  };
  /**
   * Constructs a SandboxContext
   *
   * @returns SandboxContext
   */
  function get() {
    return new SandboxContext(
      this._version,
      this._solution.accountSid
    );
  }

  return SandboxListInstance;
}

module.exports = {
  SandboxList: SandboxList,
  SandboxInstance: SandboxInstance,
  SandboxContext: SandboxContext
};
