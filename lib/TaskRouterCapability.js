var jwt = require('jwt-simple');
var CapabilityAPI = require('./CapabilityAPI');
var inherits = require('util').inherits;
var deprecate = require('deprecate');

function TaskRouterCapability(accountSid, authToken, workspaceSid, channelId) {
    var taskRouterUrlBase = 'https://taskrouter.twilio.com';
    var taskRouterVersion = 'v1';
    var eventUrlBase = 'https://event-bridge.twilio.com/v1/wschannels';

    CapabilityAPI.call(this, accountSid, authToken, taskRouterVersion, channelId);

    this.workspaceSid = workspaceSid;
    this.channelId = channelId;

    this._baseUrl = taskRouterUrlBase + '/' + taskRouterVersion + '/Workspaces/' + this.workspaceSid;

    this._validateJWT();

    this._setupResource();

    var eventsUrl = eventUrlBase + '/' + this.accountSid + '/' + channelId;

    // add permissions to GET and POST to the event-bridge channel
    this.allow(eventsUrl, 'GET');
    this.allow(eventsUrl, 'POST');

    // add permission to fetch the instance resource
    this.allow(this._resourceUrl, 'GET');
}
inherits(TaskRouterCapability, CapabilityAPI);

TaskRouterCapability.prototype._setupResource = function() {
    if(this.channelId.substring(0,2) === 'WS') {
        this._resourceUrl = this._baseUrl;
    }else if(this.channelId.substring(0,2) === 'WK') {
        this._resourceUrl = this._baseUrl + '/Workers/' + this.channelId;

        var activityUrl = this._baseUrl + '/Activities';
        this.allow(activityUrl, "GET");

    }else if(this.channelId.substring(0,2) === 'WQ') {
        this._resourceUrl = this._baseUrl + '/TaskQueues/' + this.channelId;
    }
}

TaskRouterCapability.prototype._validateJWT = function() {
    if(!this.accountSid || this.accountSid.substring(0,2) != 'AC') {
        throw new Exception("Invalid AccountSid provided: "+this.accountSid);
    }
    if(!this.workspaceSid || this.workspaceSid.substring(0,2) != 'WS') {
        throw new Exception("Invalid WorkspaceSid provided: "+this.workspaceSid);
    }
    if(!this.channelId) {
        throw new Exception("ChannelId not provided");
    }
    var prefix = this.channelId.substring(0,2);
    if(prefix != 'WS' && prefix != 'WK' && prefix != 'WQ') {
        throw new Exception("Invalid ChannelId provided: "+this.channelId);
    }
}

TaskRouterCapability.prototype.allowFetchSubresources = function() {
    this.allow(this._resourceUrl+'/**', 'GET');
}

TaskRouterCapability.prototype.allowUpdates = function() {
    this.allow(this._resourceUrl, 'POST');
}

TaskRouterCapability.prototype.allowUpdatesSubresources = function() {
    this.allow(this._resourceUrl+'/**', 'POST');
}

TaskRouterCapability.prototype.allowDelete = function() {
    this.allow(this._resourceUrl, 'DELETE');
}

TaskRouterCapability.prototype.allowDeleteSubresources = function() {
    this.allow(this._resourceUrl+'/**', 'DELETE');
}

TaskRouterCapability.prototype.allowDeleteSubresources = function() {
    this.allow(this._resourceUrl+'/**', 'DELETE');
}

TaskRouterCapability.prototype.allowWorkerActivityUpdates = function() {
    if(this.channelId.substring(0,2) === 'WK') {
        deprecate('allowWorkerActivityUpdates is deprecated. Please use TaskRouterWorkerCapability.allowWorkerActivityUpdates() instead');
        this.allow(this._resourceUrl, 'POST', {}, {"ActivitySid": {'required': true}});
    }else {
        throw new Exception ("Deprecated function not applicable to non Worker");
    }
}

TaskRouterCapability.prototype.allowWorkerFetchAttributes = function() {
    if(this.channelId.substring(0,2) === 'WK') {
        deprecate('allowWorkerFetchAttributes is deprecated. Please use TaskRouterWorkerCapability; added automatically in constructor');
        this.allow(this._resourceUrl, 'GET');
    }else {
        throw new Exception ("Deprecated function not applicable to non Worker");
    }
}

TaskRouterCapability.prototype.allowTaskReservationUpdates = function() {
    if(this.channelId.substring(0,2) === 'WK') {
        deprecate('allowTaskReservationUpdates is deprecated. Please use TaskRouterWorkerCapability.allowReservationUpdates() instead');
        this.allow(this._baseUrl + "/Tasks/**", "POST", {}, {});
    }else {
        throw new Exception ("Deprecated function not applicable to non Worker");
    }
}

TaskRouterCapability.prototype.generate = function(ttl) {
    var taskRouterAttributes = {
        'account_sid': this.accountSid,
        'channel': this.channelId,
        'workspace_sid': this.workspaceSid
    }

    if(this.channelId.substring(0,2) === 'WK') {
        taskRouterAttributes.worker_sid = this.channelId;
    }else if(this.channelId.substring(0,2) === 'WQ') {
        taskRouterAttributes.taskqueue_sid = this.channelId;
    }

    return TaskRouterCapability.super_.prototype.generate.apply(this, [ttl, taskRouterAttributes]);
}

module.exports = TaskRouterCapability;
