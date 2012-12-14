/**
 @module resources/Usage
 The Twilio "Usage" Resource.
 */
var generate = require('./generate');

module.exports = function (client, accountSid) {
    var baseResourceUrl = '/Accounts/' + accountSid + '/Usage';

    //Instance requests
    function Usage(sid) {
        var resourceApi = {
            get:generate(client, 'GET', baseResourceUrl + '/' + sid)
        };

        //Add in subresources
        resourceApi.participants = {
            get: generate(client, 'GET', baseResourceUrl + '/' + sid + '/Participants')
        };

        return resourceApi;
    }

    //List requests
    Usage.get = generate(client, 'GET', baseResourceUrl);

    return Usage;
};
