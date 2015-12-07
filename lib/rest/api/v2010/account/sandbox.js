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
  function SandboxListInstance() {
  }

  // Path Solution
  SandboxListInstance._solution = {
    accountSid: accountSid,
  };
  return SandboxListInstance;
}

module.exports = {
  SandboxList: SandboxList,
  SandboxInstance: SandboxInstance,
  SandboxContext: SandboxContext
};
