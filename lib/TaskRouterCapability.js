var jwt = require('jwt-simple');

var taskRouterUrlBase = 'https://taskrouter.twilio.com';
var taskRouterVersion = 'v1';
var eventUrlBase = 'https://event-bridge.twilio.com/v1/wschannels';

var REQUIRED = {'required': true};
var OPTIONAL = {'required': false};


function TaskRouterCapability(accountSid, authToken, workspaceSid, workerSid) {
    this.accountSid = accountSid;
    this.authToken = authToken;
    this.workspaceSid = workspaceSid;
    this.workerSid = workerSid;
    this.policies = [];
    this._workspaceUrl = taskRouterUrlBase + '/' + taskRouterVersion + '/Workspaces/' + this.workspaceSid;
    this._workerUrl = this._workspaceUrl + '/Workers/' + this.workerSid;

    var eventsUrl = eventUrlBase + '/' + this.accountSid + '/' + this.workerSid;

    // Allow websockets for this worker
    this.policies.push(this.makePolicy(eventsUrl, 'GET'));
    this.policies.push(this.makePolicy(eventsUrl, 'POST'));

    // Allow reads of Activities resource
    this.policies.push(this.makePolicy(this._workspaceUrl + '/Activities', 'GET'));
}

TaskRouterCapability.prototype.makePolicy = function(url, method, queryFilter, postFilter, allowed) {
    var policy = {
        url: url,
        method: method
    };

    if (queryFilter) {
        policy.query_filter = queryFilter;
    } else {
        policy.query_filter = {};
    }

    if (postFilter) {
        policy.post_filter = postFilter;
    } else {
        policy.post_filter = {};
    }

    if (typeof allowed !== 'undefined') {
        policy.allow = allowed;
    } else {
        policy.allow = true;
    }
    return policy;
}

TaskRouterCapability.prototype.allowWorkerActivityUpdates = function() {
    var policy = this.makePolicy(
        this._workerUrl,
        "POST",
        {},
        {"ActivitySid": REQUIRED},
        true
    );
    this.policies.push(policy);
}

TaskRouterCapability.prototype.allowWorkerFetchAttributes = function() {
    var policy = this.makePolicy(this._workerUrl, "GET");
    this.policies.push(policy);
}

TaskRouterCapability.prototype.allowTaskReservationUpdates = function() {
    var policy = this.makePolicy(
        this._workspaceUrl + "/Tasks/**",
        "POST",
        {},
        {"ReservationStatus": REQUIRED},
        true
    );
    this.policies.push(policy);
}

TaskRouterCapability.prototype.generate = function(ttl) {
    var payload = {
        iss: this.accountSid,
        exp: (Math.floor(new Date() / 1000) + (ttl || 3600)),
        policies: this.policies,
        friendly_name: this.workerSid,
        account_sid: this.accountSid,
        workspace_sid: this.workspaceSid,
        worker_sid: this.workerSid,
        channel: this.workerSid,
        version: taskRouterVersion
    };
    return jwt.encode(payload, this.authToken);
}

module.exports = TaskRouterCapability;
