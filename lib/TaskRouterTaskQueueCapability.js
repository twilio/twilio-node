var TaskRouterCapability = require('./TaskRouterCapability');

function TaskRouterWorkerCapability(accountSid, authToken, workspaceSid, taskQueueSid) {
    TaskRouterCapability.call(this, accountSid, authToken, workspaceSid, taskQueueSid);
}
TaskRouterTaskQueueCapability.prototype = Object.create(TaskRouterCapability.prototype);

module.exports = TaskRouterTaskQueueCapability;
