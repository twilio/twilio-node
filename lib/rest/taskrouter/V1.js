'use strict';

var Version = require("lib/base/Version.js");
var WorkspaceList = require("lib/rest/taskrouter/v1/workspace.js").WorkspaceList;


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
    self._workspaces = None
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