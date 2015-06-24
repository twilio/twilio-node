var jwt = require('jwt-simple');
var CapabilityAPI = require('./CapabilityAPI');
var inherits = require('util').inherits;

function TaskRouterCapability(accountSid, authToken, workspaceSid, channelId, resourceUrl) {
    var taskRouterUrlBase = 'https://taskrouter.twilio.com';
    var taskRouterVersion = 'v1';
    var eventUrlBase = 'https://event-bridge.twilio.com/v1/wschannels';

    CapabilityAPI.call(this, accountSid, authToken, taskRouterVersion, channelId);

    this.workspaceSid = workspaceSid;
    this.channelId = channelId;

    this._baseUrl = taskRouterUrlBase + '/' + taskRouterVersion + '/Workspaces/' + this.workspaceSid;

    if(typeof resourceUrl === 'undefined') {
        if(channelId.substring(0,2) === 'WS') {
            resourceUrl = this._baseUrl;
        }else if(channelId.substring(0,2) === 'WK') {
            resourceUrl = this._baseUrl + "/Workers/" + channelId;
        }else if(channelId.substring(0,2) === 'WQ') {
            resourceUrl = this._baseUrl + "/TaskQueues/" + channelId;
        }
    }

    this._resourceUrl = resourceUrl;

    var eventsUrl = eventUrlBase + '/' + this.accountSid + '/' + channelId;

    // add permissions to GET and POST to the event-bridge channel
    this.allow(eventsUrl, 'GET');
    this.allow(eventsUrl, 'POST'); 

    // add permissiosn to fetch the instance resource
    this.allow(resourceUrl, "GET");

    this.validateJWT();
}
inherits(TaskRouterCapability, CapabilityAPI);

TaskRouterCapability.prototype.validateJWT = function() {
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
