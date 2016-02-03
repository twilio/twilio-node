'use strict';

var _ = require('lodash');
var Version = require('../../base/Version');
var WorkspaceList = require('./v1/workspace').WorkspaceList;


/**
 * Initialize the V1 version of Taskrouter
 *
 * @constructor
 *
 * @property {WorkspaceList} workspaces - workspaces resource
 *
 * @param {Taskrouter} domain - The twilio domain
 */
function V1(domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._workspaces = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype,
  'workspaces', {
  get: function() {
    this._workspaces = this._workspaces || new WorkspaceList(this);
    return this._workspaces;
  },
});

module.exports = V1;
