var inherits = require('util').inherits;
var TaskRouterCapability = require('./TaskRouterCapability');

function TaskRouterWorkspaceCapability(accountSid, authToken, workspaceSid) {
    TaskRouterCapability.call(this, accountSid, authToken, workspaceSid, workspaceSid);
}
inherits(TaskRouterWorkspaceCapability, TaskRouterCapability);

module.exports = TaskRouterWorkspaceCapability;
