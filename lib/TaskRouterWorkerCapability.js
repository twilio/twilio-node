var TaskRouterCapability = require('./TaskRouterCapability');

function TaskRouterWorkerCapability(accountSid, authToken, workspaceSid, workerSid) {
    TaskRouterCapability.call(this, accountSid, authToken, workspaceSid, workerSid);

    this.reservationsUrl = this._baseUrl + "/Tasks/**";
    this.activityUrl = this._baseUrl + "/Activities";

    // add permissions fo fetch the list of activities and list of worker reservations
    this.allow(this.activityUrl, "GET");
    this.allow(this.reservationsUrl, "GET");
}
TaskRouterWorkerCapability.prototype = Object.create(TaskRouterCapability.prototype);

TaskRouterWorkerCapability.prototype.allowActivityUpdates = function() {
    this.allow(
        this.resourceUrl, 
        "POST",
        {},
        {"ActivitySid": REQUIRED});
}

TaskRouterWorkerCapability.prototype.allowReservationUpdates = function() {
    this.allow(
        this.reservationsUrl, 
        "POST",
        {},
        {});
}

module.exports = TaskRouterWorkerCapability;
