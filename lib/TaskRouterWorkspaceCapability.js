var TaskRouterCapability = require('./TaskRouterCapability');

function TaskRouterWorkspaceCapability(accountSid, authToken, workspaceSid) {
    TaskRouterCapability.call(this, accountSid, authToken, workspaceSid, workspaceSid);
}
TaskRouterWorkspaceCapability.prototype = Object.create(TaskRouterCapability.prototype);

module.exports = TaskRouterWorkspaceCapability;
