var inherits = require('util').inherits;
var TaskRouterCapability = require('./TaskRouterCapability');

function TaskRouterWorkerCapability(accountSid, authToken, workspaceSid, workerSid) {
    TaskRouterCapability.call(this, accountSid, authToken, workspaceSid, workerSid);
}
inherits(TaskRouterWorkerCapability, TaskRouterCapability);

TaskRouterWorkerCapability.prototype.allowActivityUpdates = function() {
  this.allow(this._resourceUrl, 'POST', {}, {'ActivitySid': {'required': true}});
};

TaskRouterWorkerCapability.prototype.allowReservationUpdates = function() {
  this.allow(this._baseUrl + '/Tasks/**', 'POST', {}, {});
};

module.exports = TaskRouterWorkerCapability;
