/**
 @module resources/Conferences
 The Twilio "Conferences" Resource.
 */
var generate = require('./generate');

module.exports = function (client, accountSid) {
    var baseResourceUrl = '/Accounts/' + accountSid + '/Conferences';

    //Instance requests
    function Conferences(sid) {
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
    Conferences.get = generate(client, 'GET', baseResourceUrl);

    return Conferences;
};
