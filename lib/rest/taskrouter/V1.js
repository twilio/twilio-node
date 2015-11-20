'use strict';

var _ = require('lodash');
var Version = require('lib/base/Version');
var WorkspaceList = require('lib/rest/taskrouter/v1/workspace').WorkspaceList;


/**
 * Initialize the V1 version of Taskrouter
 * 
 * @constructor
 * 
 * @param {Domain} domain - The twilio domain
 * 
 * @returns V1 version of Taskrouter
 */
function V1(domain) {
    Version.constructor.call(this, domain, 'v1');
    
    // Resources
    this._workspaces = undefined;
}
_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype, 'workspaces', {
    get: function() {
        this._workspaces = this._workspaces || new WorkspaceList();
        return this._workspaces;
    }
});

module.exports = V1;