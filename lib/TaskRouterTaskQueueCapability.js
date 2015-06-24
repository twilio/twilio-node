var inherits = require('util').inherits;
var TaskRouterCapability = require('./TaskRouterCapability');

function TaskRouterTaskQueueCapability(accountSid, authToken, workspaceSid, taskQueueSid) {
    TaskRouterCapability.call(this, accountSid, authToken, workspaceSid, taskQueueSid);
}
inherits(TaskRouterTaskQueueCapability, TaskRouterCapability);

module.exports = TaskRouterTaskQueueCapability;
