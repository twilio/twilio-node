var jwt = require('jwt-simple');
var CapabilityAPI = require('./CapabilityAPI');

var taskRouterUrlBase = 'https://taskrouter.twilio.com';
var taskRouterVersion = 'v1';
var eventUrlBase = 'https://event-bridge.twilio.com/v1/wschannels';

function TaskRouterCapability(accountSid, authToken, workspaceSid, channelId, resourceUrl = null) {
    CapabilityAPI.call(this, accountSid, authToken, taskRouterVersion, channelId);

    this.workspaceSid = workspaceSid;
    this.channelId = channelId;

    this._baseUrl = taskRouterUrlBase + '/' + taskRouterVersion + '/Workspaces' + this.workspaceSid;

    if(resourceUrl == null) {
        if(channelId.substring(0,2) === 'WS') {
            resourceUrl = this.baseUrl;
        }else if(channelId.substring(0,2) === 'WK') {
            resourceUrl = this.baseUrl + "/Workers/" + channelId;
        }else if(channelId.substring(0,2) === 'WQ') {
            resourceUrl = this.baseUrl + "TaskQueues/" + channelId;
        }
    }

    this._resourceUrl = resourceUrl;

    var eventsUrl = eventUrlBase + '/' + this.accountSid + '/' + this.workerSid;

    // Allow websockets for this worker
    this.policies.push(this.makePolicy(eventsUrl, 'GET'));
    this.policies.push(this.makePolicy(eventsUrl, 'POST'));

    this.validateJWT();
}
TaskRouterCapability.prototype = Object.create(CapabilityAPI.prototype);

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

module.exports = TaskRouterCapability;
